# Manual — Seattle LLM Wiki Bootcamp (site + program)

This manual describes **who uses this repository**, **what each surface does**, and **how to maintain it** without breaking the cohort experience.

## 1. Purpose of this repository

- **Public microsite** for a **1-week, greater-Seattle** hands-on program: founders build an **LLM Wiki** (Obsidian vault: raw → wiki → query → lint), aligned with the [source workshop video](https://www.youtube.com/watch?v=cNlvrU-KcRg).
- **Secondary track:** **Discovery & Synthesis** (`/discovery`) — messy `/raw` artifacts, affinity synthesis, AI-assisted passes, advanced prompting — runnable alongside the main week.

## 2. Audiences

| Role | Primary goals |
| --- | --- |
| **Participant (founder/operator)** | Follow `/curriculum` and `/discovery`, complete homework, ship vault artifacts. |
| **Facilitator** | Use `/facilitators`, `/logistics`, printed or screen-shared day cards; keep site links stable. |
| **Maintainer (repo editor)** | Update copy in `src/lib/*.ts` and pages under `src/app/`; run `npm run build` before merge. |

## 3. Information architecture (routes)

- **`/`** — Korean **Claude Code** cheat sheet; entry point for tooling literacy.
- **`/curriculum`** — Seven day cards: morning, lab, cohort, homework; vault layout; Obsidian plugins.
- **`/discovery`** — Seven-day parallel track for customer/market artifacts and synthesis deliverables.
- **`/graphify`** — Optional CLI path for graph generation (links to upstream Graphify docs/repo).
- **`/logistics`** — Prerequisites, venues, selection criteria, recordings policy.
- **`/facilitators`** — Runbook, checklists, tracker columns.

All routes are **static**; no database or server secrets required for hosting.

**GitHub visual hub:** [`docs/index.html`](./index.html) is a static landing page (sidebar navigation, feature cards, GitHub link) meant for **GitHub Pages** when the publishing source is the `/docs` folder. A [`.nojekyll`](./.nojekyll) file disables Jekyll so assets load reliably.

## 4. Editorial rules

1. **Stable URLs** — Do not rename routes without redirects; cohort materials bookmark them.
2. **Single source of truth** — Long-form day plans live in `src/lib/content.ts` and `src/lib/discovery-content.ts`.
3. **Tone** — Practical, step-by-step, Seattle-context where relevant; avoid hype.
4. **Video references** — Timestamps are **orientation**, not law (video edits may shift times).

## 5. Release checklist (maintainers)

- [ ] `npm run lint` passes
- [ ] `npm run build` passes
- [ ] New copy reviewed for PII and cohort-specific secrets
- [ ] If NAV changes, update `src/lib/constants.ts` and spot-check header on all pages

## 6. Deployment

- **Vercel (recommended):** connect GitHub repo; deploy on push to `main`.
- **Env vars:** none required for default static pages.

## 7. Related documents

| Document | Use |
| --- | --- |
| [QUICKSTART.md](./QUICKSTART.md) | Install, run, edit map |
| [TUTORIAL.md](./TUTORIAL.md) | First contribution walkthrough |
| [README.md](../README.md) | Project overview and deploy button |
| `marketing/` | Channel-specific promotional copy |

## 8. Bootcamp Lab (optional companion app)

The repository also contains **`seattle-llm-wiki-bootcamp-lab/`**, a second Next.js application:

- **Routes:** `/`, `/week`, `/day/[1-7]`, `/playbooks`, `/playbooks/[slug]`
- **Content:** `src/lib/days.ts`, `src/lib/playbooks.ts`
- **Purpose:** facilitator-friendly **step-by-step** UI; does **not** replace the public site or the on-disk Obsidian vault

**Docs:** [seattle-llm-wiki-bootcamp-lab/docs/MANUAL.md](../seattle-llm-wiki-bootcamp-lab/docs/MANUAL.md)  
**Marketing:** [seattle-llm-wiki-bootcamp-lab/marketing/](../seattle-llm-wiki-bootcamp-lab/marketing/)

## 9. Support and source

- **Upstream concept:** Karpathy LLM Wiki workflow (video linked on site).
- **Repo:** [github.com/henrynkoh/seattle-llm-wiki-bootcamp](https://github.com/henrynkoh/seattle-llm-wiki-bootcamp)
