# Tutorial — Edit the Lab app and verify

This tutorial makes a **small, safe change** to the interactive lab so you learn the layout end-to-end.

**Time:** about 15 minutes.

## What you will do

1. Run the lab app locally.
2. Change one visible string on **Day 1**.
3. Run lint and build.

---

## Step 1 — Start the dev server

```bash
cd seattle-llm-wiki-bootcamp-lab
npm install
npm run dev
```

Open [http://localhost:3000/day/1](http://localhost:3000/day/1) (use another port if needed).

---

## Step 2 — Edit day copy

Open `src/lib/days.ts`. Find the object with `day: 1` and edit the `summary` string (one sentence is enough).

Save the file. The browser should hot-reload; confirm your text appears at the top of `/day/1`.

---

## Step 3 — Edit a playbook title (optional)

Open `src/lib/playbooks.ts`. Change the `title` of the `dataview` playbook slightly. Save and reload `/playbooks/dataview`.

---

## Step 4 — Lint and build

```bash
npm run lint
npm run build
```

Fix any reported issues before opening a pull request.

---

## Step 5 — (Optional) Try a checklist

On `/day/1`, expand a step that shows a checklist. Tick items — reload the page — items should persist (same browser only).

---

## Done

You now know where **day content** and **playbook content** live. For the **main** microsite tutorial, see [TUTORIAL.md](../../docs/TUTORIAL.md) at the repo root.
