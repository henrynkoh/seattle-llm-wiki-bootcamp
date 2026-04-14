# Operations Manual

## Purpose

This project delivers a practical one-week startup curriculum as a web app.
It is built for facilitators, startup participants, and program operators.

## Audience

- Program lead
- Facilitators and coaches
- Startup founders and engineers

## System requirements

- Node.js 20.9+
- npm 10+

## Core architecture

- App Router structure under `src/app`
- Curriculum data source in `src/lib/curriculum.ts`
- Static day page generation with route params

## Operating procedures

### A. Start local server

```bash
npm install
npm run dev
```

### B. Content update cycle

1. Edit `src/lib/curriculum.ts`
2. Run `npm run lint`
3. Run `npm run build`
4. Review pages locally
5. Deploy

### C. Day-level edits

For each day, validate:
- session times
- learning objective
- expected output
- homework clarity

## Quality gate checklist

- No TypeScript errors
- No ESLint errors
- Build passes
- Every day route renders
- Outcome statements are measurable

## Recovery guidance

If a route fails:
1. Check slug consistency in `weekCurriculum`
2. Confirm data object completeness for each day
3. Re-run build and inspect compile output

## Maintenance schedule

- Weekly: content and wording refresh
- Monthly: curriculum outcome KPI review
- Quarterly: adjust scenarios by startup vertical changes
