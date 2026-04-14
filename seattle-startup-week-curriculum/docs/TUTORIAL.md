# Step-by-Step Tutorial

## Goal

Customize and run the Seattle startup curriculum site end-to-end.

## Step 1: Install dependencies

```bash
npm install
```

## Step 2: Start development mode

```bash
npm run dev
```

Visit `http://localhost:3000`.

## Step 3: Explore structure

- `src/app/page.tsx`: homepage and week overview
- `src/app/days/[daySlug]/page.tsx`: day detail template
- `src/lib/curriculum.ts`: all curriculum data

## Step 4: Update cohort information

Open `src/lib/curriculum.ts` and edit:
- cohort name
- location
- participant count
- startup target segments

## Step 5: Update daily sessions

For each `weekCurriculum` day:
- set `focus`
- set `startupScenario`
- set 3+ `keyOutcomes`
- define sessions with time, title, objective, output
- define homework

## Step 6: Verify page rendering

Check:
- `/`
- `/days/foundation-and-setup`
- other day pages generated from slugs

## Step 7: Run validation

```bash
npm run lint
npm run build
```

## Step 8: Deploy

Deploy with Vercel or your preferred Next.js host.

## Step 9: Launch campaign

Publish channel-ready copy from `marketing/`:
- social posts
- blog posts
- newsletter
- email invitation
