# Seattle LLM Wiki Bootcamp

Next.js microsite for the **1-Week LLM Wiki: AI Second Brain Bootcamp** — a facilitator + founder playbook for **greater Seattle startups**. The program follows the workflow demonstrated in the [source workshop video](https://www.youtube.com/watch?v=cNlvrU-KcRg) (Karpathy LLM Wiki mental model: raw → ingest → wiki → query → lint).

**Live site:** [seattle-llm-wiki-bootcamp-cs.vercel.app](https://seattle-llm-wiki-bootcamp-cs.vercel.app)

## What’s on the site

| Route | Contents |
| --- | --- |
| `/` | **Landing hub** — welcome, visual site map (all routes), feature grid, **Claude Code 치트시트** (Korean), left nav + mobile pills, GitHub FAB |
| `/curriculum` | **7-day** schedule: Obsidian vault, ingest, queries, demo day |
| `/discovery` | **Discovery & synthesis** week: `/raw` artifacts → affinity → AI-assisted synthesis → advanced prompts |
| `/graphify` | Optional **Graphify** CLI track for graph generation |
| `/logistics` | Prerequisites, venues, cohort logistics |
| `/facilitators` | Production checklists and runbook |

## Documentation (root repo)

| Doc | Description |
| --- | --- |
| [docs/QUICKSTART.md](./docs/QUICKSTART.md) | Install, run, build, edit map |
| [docs/MANUAL.md](./docs/MANUAL.md) | Roles, routes, maintenance, release checklist |
| [docs/TUTORIAL.md](./docs/TUTORIAL.md) | Step-by-step first content edit |
| [marketing/](./marketing/) | Copy for social, blogs, newsletter, email (platform-specific files) |

> **Note:** Older experimental folders (`seattle-startup-week-curriculum/`, `harness-seattle-curriculum/`) may contain drafts. The **canonical** docs for this app live under **`docs/`** and **`marketing/`** at the repository root.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run lint
npm run build
```

No environment variables are required for the default static pages.

## Deploy with Vercel (one click)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fhenrynkoh%2Fseattle-llm-wiki-bootcamp&project-name=seattle-llm-wiki-bootcamp-cs)

**One-click deploy:** open the link, sign in if needed, then click **Deploy**.  
**Root directory:** leave **empty** (the Next.js app is at the repo root).

## Repository

[github.com/henrynkoh/seattle-llm-wiki-bootcamp](https://github.com/henrynkoh/seattle-llm-wiki-bootcamp)

## License / usage

Content is for cohort and facilitator use; adapt copy in `src/lib/` for your own programs as needed.
