# Manual — Bootcamp Lab app

This manual covers the **interactive lab** Next.js app under `seattle-llm-wiki-bootcamp-lab/`. For the **primary** public microsite (Claude cheat sheet, curriculum page, discovery, logistics), see [MANUAL.md](../../docs/MANUAL.md) at the repository root.

## 1. Purpose

- **Audience:** Facilitators and cohort participants who want a **dedicated UI** for day-by-day execution and Obsidian playbooks.
- **Not a replacement** for the Obsidian vault on disk or the public program site — it is a **structured guide** with optional browser checklists.

## 2. Audiences

| Role | Use |
| --- | --- |
| **Participant** | Open `/day/[n]`, complete steps, tick checklists; use `/playbooks` for snippets. |
| **Facilitator** | Screen-share `/week` or a specific day; keep URLs stable across cohorts. |
| **Maintainer** | Edit `src/lib/days.ts` and `src/lib/playbooks.ts`; run `npm run build` before merge. |

## 3. Routes (information architecture)

- **`/`** — Cohort framing, Raw → Ingest → Wiki → Query → Lint, links to days.
- **`/week`** — Ordered list of all seven days with outcomes.
- **`/day/[1-7]`** — Static params for each day; steps rendered from `days.ts`.
- **`/playbooks`** — Index of playbook slugs.
- **`/playbooks/[slug]`** — Static pages from `playbooks.ts`.

All routes are **static** (SSG); no database or API keys.

## 4. Checklist behavior (localStorage)

Step-level checklists use a small client store keyed by:

`llm-wiki-lab-d{day}-{stepId}`

Progress is **per browser profile** only — not synced across devices. Facilitators should say this aloud so expectations stay clear.

## 5. Editorial rules

1. **Stable URLs** — Do not rename `/day/*` or playbook slugs without updating bookmarks and cohort emails.
2. **Single source of truth** — Day content: `src/lib/days.ts`. Playbooks: `src/lib/playbooks.ts`.
3. **Tone** — Practical, step-by-step; align terminology with the main site’s `content.ts` where possible.

## 6. Release checklist (maintainers)

- [ ] `npm run lint` passes inside `seattle-llm-wiki-bootcamp-lab/`
- [ ] `npm run build` passes
- [ ] No PII or secret cohort links in committed copy
- [ ] If navigation labels change, update `lab-shell.tsx`

## 7. Deployment note

The TypeScript project at the repo **root** excludes this folder from its `tsconfig.json` so the two apps do not cross-typecheck. Deploy the lab by setting the **project root** to `seattle-llm-wiki-bootcamp-lab` in Vercel (or run `npm run build` from this directory in CI).

## 8. Related documents

| Document | Use |
| --- | --- |
| [QUICKSTART.md](./QUICKSTART.md) | Install and run |
| [TUTORIAL.md](./TUTORIAL.md) | First edit walkthrough |
| [../README.md](../README.md) | Lab app overview |
| [../../docs/MANUAL.md](../../docs/MANUAL.md) | Main site manual |
| [../marketing/README.md](../marketing/README.md) | Promotional copy index |
