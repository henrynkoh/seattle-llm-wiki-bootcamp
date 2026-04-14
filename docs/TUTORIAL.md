# Tutorial — Edit and publish a content change

This tutorial walks through a **safe, small change** so you learn the layout of the project end-to-end.

## What you will do

1. Run the site locally.
2. Change one visible string on the **7-Day Curriculum** page.
3. Run lint and build.
4. (Optional) Preview the production build.

**Time:** about 15 minutes.

---

## Step 1 — Clone and install

```bash
git clone https://github.com/henrynkoh/seattle-llm-wiki-bootcamp.git
cd seattle-llm-wiki-bootcamp
npm install
npm run dev
```

Visit [http://localhost:3000/curriculum](http://localhost:3000/curriculum).

---

## Step 2 — Find the curriculum copy

Open `src/lib/content.ts`. This file exports:

- `dailyPlans` — each day’s title, summary, morning, hands-on, homework
- `format`, `vaultLayout`, `prerequisites`, etc.

**Example edit:** In `dailyPlans`, find `day: 1` and slightly adjust the `summary` string (one sentence). Save the file.

Reload `/curriculum` in the browser. You should see your text change immediately (Fast Refresh).

---

## Step 3 — (Optional) Change navigation labels

Open `src/lib/constants.ts`. The `NAV` array drives the header links. Change a `label` if you need clearer wording—keep `href` values stable unless you intentionally add new routes.

---

## Step 4 — Validate before commit

```bash
npm run lint
npm run build
```

If both succeed, your change is safe to commit.

---

## Step 5 — (Optional) Production preview locally

```bash
npm run build
npm start
```

Open [http://localhost:3000](http://localhost:3000) again and spot-check `/curriculum`.

---

## Ideas for your next edits

| Goal | Where to look |
| --- | --- |
| Korean cheat sheet bullets | `src/lib/cheatsheet.ts` |
| Discovery week day plans | `src/lib/discovery-content.ts` |
| Graphify page | `src/app/graphify/page.tsx` |
| Logistics / facilitators | `src/app/logistics/page.tsx`, `src/app/facilitators/page.tsx` |

---

## Troubleshooting

| Issue | What to try |
| --- | --- |
| Port 3000 in use | `npx next dev -p 3001` |
| TypeScript errors after edit | Re-read the shape of objects in `content.ts`—commas and string quotes must be valid |
| Page not updating | Hard refresh; ensure you saved the file |

When you are ready to ship, push to your branch and merge after review, or deploy via Vercel from `main`.
