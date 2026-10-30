## Git

- Commit each verified change yourself, on the current branch; a push waits for my go naming the branch.
- After a push of yours or a merge I mention, watch its pipeline in the background; report a red job with its cause.
- Stage explicit paths and commit with `git commit -- <paths>`; never `git add -A`, `.`, or a directory.
- A fix to an unpushed commit lands as `git commit --fixup`, folded with `git rebase --autosquash --keep-base` before you report the round done. A fix to a pushed or settled commit is a new commit on top.
- A push of yours I want taken back: my request is the go. Drop it and force-push with lease, never revert.
- Before reset, rebase, or amend, print `git rev-parse HEAD` and `git status --short`. Act on the hash I named, never `HEAD~n`.
- Fetch the remote before branching, reviewing, or comparing against a branch.
- Work in the checkout; a worktree only when I or a skill asks, removed once its branch is merged.
- Commit messages: subject only, Conventional Commits, English. One theme per commit, not per finding or slice; `fix` only for code.

## Delegation

- A subagent's report is a claim: check its load-bearing facts at the cited file:line before building on them.
- Run what you can yourself – a CLI, a browser check, a subagent – instead of handing it to me.

## Output

- Use a spaced en dash (–), never an em dash (—). Prose, comments, commit messages; code string literals are exempt.
- In the main session, a turn that did work ends on **Needs you** (`Q1 a/b`: the problem in plain words, then a recommendation), **Done**, **Waiting on**, **Next** (every open step toward the session's goal), one line per item in plain words, without paths. Empty sections are left out; all empty → `Nothing open.` The newest list supersedes earlier ones, across compaction too.
- A recommendation takes the clean end state now – rename or delete outright – whatever the token cost or churn.
