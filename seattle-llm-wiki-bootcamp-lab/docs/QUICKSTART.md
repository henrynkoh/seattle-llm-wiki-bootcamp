# Quickstarter — Bootcamp Lab app

Run the **interactive lab** (7-day steps + playbooks) locally in a few minutes.

## Prerequisites

- Node.js 20+ (LTS recommended)
- npm

## Install and run

From the **repository root**:

```bash
cd seattle-llm-wiki-bootcamp-lab
npm install
npm run dev
```

Or from **inside** `seattle-llm-wiki-bootcamp-lab/`:

```bash
npm install
npm run dev
```

Default URL: [http://localhost:3000](http://localhost:3000).

## Port conflict with the main site

If the primary `seattle-llm-wiki-bootcamp` app is already on `3000`:

```bash
npm run dev -- -p 3001
```

## Verify production build

```bash
npm run lint
npm run build
npm start
```

No environment variables are required.

## Site map (browser)

| URL | Purpose |
| --- | --- |
| `/` | Overview + links to days |
| `/week` | Seven-day arc |
| `/day/1` | Day 1 vault setup (canonical folders, README stubs, homework) |
| `/day/2` … `/day/7` | Later days (ingest, capture, graphs, query, lint, demo) |
| `/playbooks` | Obsidian stack deep dives |

## Where to edit content

| What | File(s) |
| --- | --- |
| Day copy and steps | `src/lib/days.ts` |
| Playbook articles | `src/lib/playbooks.ts` |
| Site name / branding | `src/lib/site.ts` |
| Layout / nav | `src/components/lab-shell.tsx` |

## Deploy (optional)

This app can be deployed as a **second Vercel project** with **root directory** set to `seattle-llm-wiki-bootcamp-lab`. The canonical public URL today is still the [main site](https://seattle-llm-wiki-bootcamp-cs.vercel.app); treat the lab as an optional companion.

## Next steps

- [MANUAL.md](./MANUAL.md) — roles, architecture, checklist behavior  
- [TUTORIAL.md](./TUTORIAL.md) — make a small copy change end-to-end  
- [Parent docs](../../docs/QUICKSTART.md) — main microsite quick start  
