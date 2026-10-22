#!/usr/bin/env node
// UserPromptSubmit hook: turns a `/skill` on its own line after the start of a prompt into a real invocation.
// Claude Code expands a slash command only at the very start of a message; a dictated prompt usually ends with it.
import { existsSync, readFileSync } from 'node:fs'
import { homedir } from 'node:os'
import { join } from 'node:path'

let input
try {
  input = JSON.parse(readFileSync(0, 'utf8'))
}
catch {
  process.exit(0)
}

// Pasted text and code fences quote a skill rather than invoke it.
const prompt = String(input?.prompt ?? '')
  .replace(/<pasted_content\b[\s\S]*?<\/pasted_content[^>]*>/g, '')
  .replace(/^[ \t]*```[\s\S]*?^[ \t]*```/gm, '')
// Personal skills win over project skills of the same name, as in Claude Code.
const skillRoots = [join(homedir(), '.claude/skills'), join(input?.cwd ?? process.cwd(), '.claude/skills')]

// A mention is a `/name` opening any line but the first, which Claude Code has already expanded; the rest of its line is its args.
const argsByName = new Map()
for (const [, name, args] of prompt.trimStart().matchAll(/\n[ \t]*\/([a-z][\w-]*)(?:[ \t]+(.*?))?[ \t]*\r?(?=\n|$)/g)) {
  if (!argsByName.has(name))
    argsByName.set(name, args ?? '')
}

const blocks = []
for (const [name, args] of argsByName) {
  const skillFile = skillRoots.map(root => join(root, name, 'SKILL.md')).find(path => existsSync(path))
  if (!skillFile)
    continue
  const source = readFileSync(skillFile, 'utf8').replace(/^﻿/, '').replace(/\r\n/g, '\n')
  const frontmatter = source.match(/^---\n([\s\S]*?)\n---\n/)?.[1] ?? ''
  const isUserInvoked = /^disable-model-invocation:[ \t]*["']?true["']?[ \t]*(?:#.*)?$/m.test(frontmatter)
  const argsNote = args ? ` with the args "${args}"` : ''
  // A user-only skill can't go through the Skill tool, and its body would overrun the 10,000-character cap on hook output.
  blocks.push(isUserInvoked
    ? `The user invoked /${name}${argsNote} in this message: read ${skillFile} and follow its instructions before anything else.`
    : `The user invoked /${name} in this message: call the Skill tool with "${name}"${args ? ` and args "${args}"` : ''} before anything else.`)
}

if (blocks.length > 0)
  process.stdout.write(blocks.join('\n'))
