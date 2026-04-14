# Seattle LLM Wiki Bootcamp

Next.js microsite for the **1-Week LLM Wiki: AI Second Brain Bootcamp** — a facilitator + founder playbook for **greater Seattle startups**. The program follows the workflow demonstrated in the [source workshop video](https://www.youtube.com/watch?v=cNlvrU-KcRg) (Karpathy LLM Wiki mental model: raw → ingest → wiki → query → lint).

**Live site:** [seattle-llm-wiki-bootcamp-cs.vercel.app](https://seattle-llm-wiki-bootcamp-cs.vercel.app)

**Visual repo hub (GitHub):** This repository includes a static **[`docs/index.html`](./docs/index.html)** landing page — left sidebar navigation, colorful feature cards for every major area, and a **GitHub** button fixed at the bottom-right. To host it on **GitHub Pages**, use **Settings → Pages → Build and deployment → Deploy from a branch**, branch **`main`**, folder **`/docs`**. Your site will be available at `https://<user>.github.io/seattle-llm-wiki-bootcamp/` (for example `https://henrynkoh.github.io/seattle-llm-wiki-bootcamp/`). You can also open `docs/index.html` directly in a browser from a local clone.

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

## Interactive Lab app (optional second Next.js project)

| Doc | Description |
| --- | --- |
| [seattle-llm-wiki-bootcamp-lab/README.md](./seattle-llm-wiki-bootcamp-lab/README.md) | Lab overview — day-by-day UI + playbooks |
| [seattle-llm-wiki-bootcamp-lab/docs/QUICKSTART.md](./seattle-llm-wiki-bootcamp-lab/docs/QUICKSTART.md) | Run the lab locally (separate `npm install`) |
| [seattle-llm-wiki-bootcamp-lab/docs/MANUAL.md](./seattle-llm-wiki-bootcamp-lab/docs/MANUAL.md) | Lab routes, checklists, deployment note |
| [seattle-llm-wiki-bootcamp-lab/docs/TUTORIAL.md](./seattle-llm-wiki-bootcamp-lab/docs/TUTORIAL.md) | Edit `days.ts` / `playbooks.ts` |
| [seattle-llm-wiki-bootcamp-lab/marketing/](./seattle-llm-wiki-bootcamp-lab/marketing/) | Promotional copy for the **Lab** companion (parallel to root `marketing/`) |

> **Note:** Older experimental folders (`seattle-startup-week-curriculum/`, `harness-seattle-curriculum/`) may contain drafts. The **canonical** docs for the **main** app live under **`docs/`** and **`marketing/`** at the repository root. The **Lab** app has its own **`seattle-llm-wiki-bootcamp-lab/docs/`** and **`marketing/`** folders.

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
