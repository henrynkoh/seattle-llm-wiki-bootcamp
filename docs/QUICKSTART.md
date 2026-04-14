# Quickstarter

Get the Seattle LLM Wiki Bootcamp site running locally in a few minutes.

## Prerequisites

- Node.js 20+ (LTS recommended)
- npm (bundled with Node)

## GitHub Pages visual hub (optional)

The folder **`docs/`** contains **`index.html`** — a self-contained map of the repo (sidebar nav, cards, GitHub FAB). To publish it:

1. In the GitHub repo: **Settings → Pages**.
2. **Build and deployment:** source **Deploy from a branch**, branch **`main`**, folder **`/docs`**.
3. After the workflow runs, open `https://<your-username>.github.io/seattle-llm-wiki-bootcamp/`.

Locally, you can open `docs/index.html` in a browser (double-click or “Open with Live Server”).

## Install and run

```bash
git clone https://github.com/henrynkoh/seattle-llm-wiki-bootcamp.git
cd seattle-llm-wiki-bootcamp
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Verify production build

```bash
npm run lint
npm run build
npm start
```

No environment variables are required for the static curriculum pages.

## Site map (what to open in the browser)

| URL | Purpose |
| --- | --- |
| `/` | Claude Code 치트시트 (Korean cheat sheet) |
| `/curriculum` | 7-day LLM Wiki bootcamp plan |
| `/discovery` | Discovery & synthesis week (parallel track) |
| `/graphify` | Graphify CLI track |
| `/logistics` | Prerequisites, venues, cohort prep |
| `/facilitators` | Facilitator runbook and checklists |

## Where to edit content

| What you change | File(s) |
| --- | --- |
| Home cheat sheet | `src/lib/cheatsheet.ts`, `src/app/page.tsx` |
| 7-day curriculum, vault layout, logistics copy | `src/lib/content.ts` |
| Discovery & synthesis week | `src/lib/discovery-content.ts`, `src/app/discovery/page.tsx` |
| Site name, nav, links | `src/lib/constants.ts` |
| Header/footer | `src/components/site-header.tsx`, `site-footer.tsx` |

## Deploy (one line summary)

Connect the repo to Vercel; root directory stays the repository root. See [README.md](../README.md#deploy-with-vercel-one-click).

## Optional: Bootcamp Lab (second app in repo)

The folder **`seattle-llm-wiki-bootcamp-lab/`** is a separate Next.js app with **day-by-day** pages (`/day/1` … `/day/7`), **playbooks** (Dataview, Linter, sync, …), and optional browser checklists. It has its own `npm install` and dev server.

```bash
cd seattle-llm-wiki-bootcamp-lab
npm install
npm run dev -- -p 3001
```

See [seattle-llm-wiki-bootcamp-lab/docs/QUICKSTART.md](../seattle-llm-wiki-bootcamp-lab/docs/QUICKSTART.md).

## Next steps

- **Operators:** read [MANUAL.md](./MANUAL.md) for roles and workflows.
- **First-time editors:** follow [TUTORIAL.md](./TUTORIAL.md) for a guided walkthrough.
- **Lab app:** [seattle-llm-wiki-bootcamp-lab/docs/MANUAL.md](../seattle-llm-wiki-bootcamp-lab/docs/MANUAL.md)
- **Promotions:** copy from `marketing/` in this repo; **Lab-specific** copy lives in `seattle-llm-wiki-bootcamp-lab/marketing/`.
