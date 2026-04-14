import { SITE, SOURCE_VIDEO_URL } from "@/lib/constants";

export type LandingRouteCard = {
  href: string;
  title: string;
  description: string;
  accent: "emerald" | "violet" | "cyan" | "amber" | "rose" | "fuchsia";
  badge?: string;
};

export const landingRouteCards: LandingRouteCard[] = [
  {
    href: "/curriculum",
    title: "7-Day Curriculum",
    description: "Day-by-day labs, vault layout, Obsidian plugins, and Demo Day arc.",
    accent: "emerald",
    badge: "Core",
  },
  {
    href: "/discovery",
    title: "Discovery & Synthesis",
    description: "Messy /raw artifacts → affinity themes → grounded AI → advanced prompts.",
    accent: "violet",
    badge: "Parallel track",
  },
  {
    href: "/graphify",
    title: "Graphify Track",
    description: "Optional CLI path for graphs and large-corpus visualization.",
    accent: "cyan",
  },
  {
    href: "/logistics",
    title: "Logistics & Prep",
    description: "Prerequisites, venues, cohort selection, and recording policy.",
    accent: "amber",
  },
  {
    href: "/facilitators",
    title: "Facilitator Runbook",
    description: "Checklists, trackers, and production notes for live sessions.",
    accent: "rose",
  },
  {
    href: SOURCE_VIDEO_URL,
    title: "Source Workshop Video",
    description: "Canonical walkthrough that anchors the curriculum (opens YouTube).",
    accent: "fuchsia",
    badge: "External",
  },
];

export type LandingFeature = {
  title: string;
  description: string;
  icon: string;
};

export const landingFeatures: LandingFeature[] = [
  {
    icon: "🧠",
    title: "AI second brain",
    description: "Raw → Wiki → Query → Lint — a repeatable operating system for founders.",
  },
  {
    icon: "📁",
    title: "Obsidian-native vault",
    description: "Portable markdown, backlinks, and local-first control of your knowledge.",
  },
  {
    icon: "📎",
    title: "Evidence chain",
    description: "Discovery track links messy artifacts to insight statements with citations.",
  },
  {
    icon: "🔗",
    title: "Graphs",
    description: "Graphify optional path for graph HTML and merged wiki updates.",
  },
  {
    icon: "🧭",
    title: "Facilitator-ready",
    description: "Logistics, runbooks, and day cards you can copy into slides or Notion.",
  },
  {
    icon: "📟",
    title: "Claude Code cheat sheet",
    description: "Korean quick-reference on this same page — Plan Mode, slash commands, WAT.",
  },
];

export type NavGroup = {
  label: string;
  items: { id: string; label: string }[];
};

export const landingNavGroups: NavGroup[] = [
  {
    label: SITE.name,
    items: [
      { id: "hub", label: "Welcome" },
      { id: "explore", label: "Explore routes" },
      { id: "spotlight", label: "Features" },
    ],
  },
  {
    label: "Claude Code 치트시트",
    items: [
      { id: "overview", label: "치트시트 개요" },
      { id: "setup", label: "1) 초기 설정 & claude.md" },
      { id: "shortcuts", label: "2) 단축키 & 네비게이션" },
      { id: "slash-commands", label: "3) 필수 슬래시 명령어" },
      { id: "memory", label: "4) 컨텍스트 관리 실전" },
      { id: "workflow", label: "5) 워크플로우 & 코딩 철학" },
      { id: "wat-framework", label: "6) WAT 프레임워크" },
    ],
  },
  {
    label: "More",
    items: [
      { id: "quick-reference", label: "한눈에 보기" },
      { id: "series-note", label: "시리즈 안내" },
    ],
  },
];

/** Flat list of section ids for scroll-spy (order matters) */
export const landingSectionIds = landingNavGroups.flatMap((g) => g.items.map((i) => i.id));
