# Seattle LLM Wiki Bootcamp

Next.js microsite that hosts the full facilitator + founder playbook for the **1-Week LLM Wiki: AI Second Brain Bootcamp** (greater Seattle startups). Content mirrors the Karpathy LLM Wiki workflow demonstrated in the [source workshop video](https://www.youtube.com/watch?v=cNlvrU-KcRg).

The home page (`/`) is the **Claude Code 치트시트** (Korean cheat sheet). Bootcamp routes such as `/curriculum` and `/facilitators` keep the original playbook navigation.

## Deploy with Vercel (one click)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fhenrynkoh%2Fseattle-llm-wiki-bootcamp&project-name=seattle-llm-wiki-bootcamp-cs)

**One-click deploy:** open the link above, sign in if needed, then click **Deploy**.  
**Root Directory:** leave **empty** (this repo’s Next.js app lives at the repository root).

**Live preview:** [seattle-llm-wiki-bootcamp-cs.vercel.app](https://seattle-llm-wiki-bootcamp-cs.vercel.app)

## Scripts

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` for the overview, `/curriculum` for the day-by-day plan, `/graphify` for the CLI track, `/logistics` for prerequisites, and `/facilitators` for production checklists.

## Deploy (CLI / CI)

Standard Next.js deployment (`next build` / Vercel). No environment variables are required for the static curriculum pages. Pushes to the connected `main` branch trigger automatic Vercel deployments after the project is linked once.
