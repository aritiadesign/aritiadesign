---
name: revert
description: Revert the most recent file edit made in this conversation. Uses git to identify and undo the latest modification(s) without losing other unrelated changes. Use when the user says "revert", "reviens en arrière", "annule", or similar.
---

# Revert last edit

Goal: undo the most recent file modification(s) and report what was rolled back.

## Procedure

1. **Inspect current state**
   - Run `git status -s` and `git diff --stat` to list modified/unstaged files.
   - If nothing is modified, also check the last commit with `git log --oneline -1` and `git show --stat HEAD` — the recent change may already be committed.

2. **Identify the target file(s)**
   - Look at the conversation history: which file did you (Claude) edit last with `Edit` or `Write`?
   - Cross-reference with the unstaged `git diff` output. The intersection is the target.
   - If multiple files were edited in the last action, revert all of them.
   - If the change has already been committed (clean working tree but recent commit), use `git revert --no-edit HEAD` to undo the commit safely, OR `git reset --soft HEAD~1` if it was a local-only commit not yet pushed — ask the user which they prefer.

3. **Show the user what will be reverted**
   - Before running destructive commands, summarize the file(s) and a short diff excerpt.
   - Skip confirmation only if the user's request was unambiguous (e.g., "revert", "annule la dernière modif").

4. **Perform the revert**
   - For unstaged file edits: `git checkout -- <file>` (or `git restore <file>`).
   - For staged changes that should also be undone: `git restore --staged <file> && git restore <file>`.
   - For an already-pushed commit: `git revert --no-edit <sha>` (creates a new commit). Do NOT force-push or reset main without explicit user permission.

5. **Verify**
   - Re-run `git status` and confirm the target file is clean (or that the revert commit landed).
   - If a dev server is running, the file watch will pick up the change automatically — no restart needed.

6. **Report**
   - One short sentence: which file(s) were reverted and which method was used. Mention the relevant commit SHA if applicable.

## Important rules

- NEVER use `git reset --hard` without explicit user permission. It destroys uncommitted work.
- NEVER force-push (`git push --force`) as part of a revert without explicit user permission.
- If the user has multiple unrelated unstaged changes, only revert the ones from your most recent edit — preserve the others.
- If you cannot confidently identify the last edit (e.g., conversation was compacted), ask the user which file to revert before acting.
