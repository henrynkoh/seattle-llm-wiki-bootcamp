# Seattle LLM Wiki Bootcamp — Lab (interactive)

Self-contained **Next.js 16** app that presents the **7-day cohort arc** and **Obsidian playbooks** as a guided, checklist-driven experience. It complements the [main public microsite](../README.md) (curriculum, discovery, logistics) — this folder is for **facilitators and teams** who want a dedicated UI with per-step progress saved in the browser.

## Documentation in this folder

| File | Purpose |
| --- | --- |
| [docs/QUICKSTART.md](./docs/QUICKSTART.md) | Install, run, port conflicts, build |
| [docs/MANUAL.md](./docs/MANUAL.md) | Routes, content sources, maintenance |
| [docs/TUTORIAL.md](./docs/TUTORIAL.md) | First-time edit: change copy and verify |
| [marketing/README.md](./marketing/README.md) | Index of promotional copy (social, blogs, email) |

## Quick start

```bash
cd seattle-llm-wiki-bootcamp-lab
npm install
npm run dev
```

If port `3000` is already used by the main app:

```bash
npm run dev -- -p 3001
```

Open [http://localhost:3000](http://localhost:3000) (or your chosen port).

## What you get

| Route | Contents |
| --- | --- |
| `/` | Cohort overview, mental model, jump links to each day |
| `/week` | Full seven-day arc with outcomes |
| `/day/1` … `/day/7` | Step-by-step labs + optional checklists (localStorage) |
| `/playbooks` | Dataview, DataviewJS, Templater, Linter, Style Settings, themes, plugins, mobile, sync, backup |

## Repo-wide docs (parent)

The repository root also ships **[docs/QUICKSTART.md](../docs/QUICKSTART.md)**, **[MANUAL.md](../docs/MANUAL.md)**, **[TUTORIAL.md](../docs/TUTORIAL.md)** and **[marketing/](../marketing/)** for the **primary** Next.js site. Use those for deployment, Vercel, and public URLs; use **this folder’s** docs when you work only on the lab app.

## License

Same as the parent repository; adapt copy under `src/lib/` for your programs.
