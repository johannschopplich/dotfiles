## Git

- Commit only on my word – except inside a skill that loads `push-right`, which commits on the current branch. Push, force-push, and every MR/PR action wait for my explicit go naming the branch. Releases are mine.
- After a push of yours, watch its pipeline in the background; report a red job with its cause.
- Stage explicit paths, then read `git status --short` unfiltered; never `git add -A`, `.`, or a directory.
- Fixes to my unpushed commits land on top as `git commit --fixup`, folded with `git rebase --autosquash --keep-base` once the fix round ends; a commit of mine among them leaves the fold to me. A commit I called settled gets a separate commit.
- A push of yours I want taken back: my request is the go. Drop it and force-push with lease, never revert.
- Before reset, rebase, or amend, print `git rev-parse HEAD` and `git status --short`. Act on the hash I named, never `HEAD~n`: I commit in parallel.
- Fetch the remote before branching, reviewing, or comparing against a branch.
- Commit messages: subject only, Conventional Commits, English, chosen by you. One theme per commit, not per finding or slice. A correction is `fix` in code, `chore` or `docs` in data and prose.

## Delegation

- A subagent's report is a claim: check its load-bearing facts at the cited file:line before building on them.
- Run what you can yourself – a CLI, a browser check, a subagent – instead of handing it to me.

## Output

- Use a spaced en dash (–), never an em dash (—). Prose, comments, commit messages; code string literals are exempt.
- In the main session, a turn that did work ends on **Needs you** (`Q1 a/b`: the problem in plain words, then a recommendation), **Done**, **Waiting on**, **Next** (every open step toward the session's goal). Empty sections are left out; all empty → `Nothing open.` The newest list supersedes earlier ones, across compaction too.
- A recommendation takes the clean end state now – rename or delete outright – whatever the token cost or churn.
