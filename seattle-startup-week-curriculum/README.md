# Seattle Startup Week Curriculum

Production-ready Next.js curriculum site for a one-week practical training
program designed for a small selected cohort of startups in the Greater Seattle
area.

The program follows the full video sequence:
intro foundations -> practical workflow -> advanced automation -> capstone.

## What is included

- 7-day training roadmap with realistic daily outputs
- Day-by-day agenda pages with objectives, labs, and homework
- Facilitator-ready delivery structure for startup teams
- Channel-specific marketing and promo copy packs

## Program source reference

Based on:
[실밸개발자 - 클로드 코드 2시간 안에 마스터하기](https://www.youtube.com/watch?v=vxEvo2BLM6A)

## Documentation set

- Quick starter: `docs/QUICKSTART.md`
- Full manual: `docs/MANUAL.md`
- Step-by-step tutorial: `docs/TUTORIAL.md`
- Marketing assets: `marketing/`

## Local setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npm run build
```

## Core project map

- `src/lib/curriculum.ts` -> canonical weekly curriculum data
- `src/app/page.tsx` -> weekly overview landing page
- `src/app/days/[daySlug]/page.tsx` -> detailed day agenda pages
- `docs/` -> operational docs for instructors and operators
- `marketing/` -> ad/post templates by platform

## Deployment

Deploy to any Next.js-compatible host (Vercel recommended).
