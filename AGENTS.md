# AI Instructions

This is a local WordPress site managed by [WordPress Studio](https://developer.wordpress.com/studio/).
For WordPress Studio instructions, see @STUDIO.md

> **Customising this file:** Feel free to edit, extend, or replace the contents below.

## Git Conventions

- **Git**: feature branches follow `type/YYYYMMDD-description` (e.g. `enhancements/20260519-blog`, `chore/20260404-...`, `feature/...`). Commit subjects are lowercase and imperative (`add`, `fix`, `refactor`, `update`), and the first line must stay within 100 characters (it is the only part shown in summaries). PRs merge to `main`.
- **Pull requests**: always assign the repo owner [dnextreme88](https://github.com/dnextreme88) to every PR you create (e.g. `gh pr create --assignee dnextreme88`), so they don't have to self-assign afterward.
- **Plans**: implementation/upgrade plans live in [docs/plans](docs/plans), one Markdown file per plan named `{YYYYMMDD}-kebab-case-topic.md` where the date is when the plan was executed. Add a matching entry to [docs/plans/README.md](docs/plans/README.md) — link the dated filename and bold the executed date.
