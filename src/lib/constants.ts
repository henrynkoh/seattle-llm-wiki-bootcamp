export const SITE = {
  name: "Seattle LLM Wiki Bootcamp",
  tagline: "1-Week AI Second Brain for Greater Seattle Startups",
  description:
    "A hands-on cohort program that translates Andrej Karpathy’s LLM Wiki workflow into a live, Obsidian-native knowledge system—optionally scaled with Graphify (graphifyy) for graph generation and Claude-assisted maintenance.",
} as const;

export const SOURCE_VIDEO_URL =
  "https://www.youtube.com/watch?v=cNlvrU-KcRg";

export const GRAPHIFY_REPO = "https://github.com/safishamsi/graphify";

export const GRAPHIFY_SITE = "https://graphify.net/";

export const GITHUB_REPO_URL = "https://github.com/henrynkoh/seattle-llm-wiki-bootcamp";

export const NAV = [
  { href: "/", label: "Overview" },
  { href: "/curriculum", label: "7-Day Curriculum" },
  { href: "/discovery", label: "Discovery & Synthesis" },
  { href: "/graphify", label: "Graphify Track" },
  { href: "/logistics", label: "Logistics & Prep" },
  { href: "/facilitators", label: "Facilitator Runbook" },
] as const;
