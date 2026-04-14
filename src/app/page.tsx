import type { Metadata } from "next";
import Link from "next/link";
import { FeatureExpandableGrid } from "@/components/feature-expandable-grid";
import { GitHubFab } from "@/components/github-fab";
import { LandingLayout } from "@/components/landing-navigation";
import {
  introSections,
  practicalSections,
  quickCommands,
  quickShortcuts,
} from "@/lib/cheatsheet";
import { GITHUB_REPO_URL, SITE, SOURCE_VIDEO_URL } from "@/lib/constants";
import type { LandingRouteCard } from "@/lib/landing-content";
import { landingFeatures, landingRouteCards } from "@/lib/landing-content";

export const metadata: Metadata = {
  title: "Home",
  description: `${SITE.tagline} — full curriculum, Discovery & Synthesis, Graphify, logistics, facilitator runbook, plus Claude Code 치트시트.`,
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    type: "website",
  },
};

function accentCardClasses(accent: LandingRouteCard["accent"]) {
  const map: Record<LandingRouteCard["accent"], string> = {
    emerald:
      "border-emerald-400/35 bg-gradient-to-br from-emerald-500/15 via-white/80 to-teal-400/10 hover:border-emerald-400/70 dark:from-emerald-950/50 dark:via-zinc-900/90 dark:to-teal-950/30",
    violet:
      "border-violet-400/35 bg-gradient-to-br from-violet-500/15 via-white/80 to-fuchsia-400/10 hover:border-violet-400/70 dark:from-violet-950/50 dark:via-zinc-900/90 dark:to-fuchsia-950/30",
    cyan: "border-cyan-400/35 bg-gradient-to-br from-cyan-500/15 via-white/80 to-sky-400/10 hover:border-cyan-400/70 dark:from-cyan-950/50 dark:via-zinc-900/90 dark:to-sky-950/30",
    amber:
      "border-amber-400/35 bg-gradient-to-br from-amber-500/15 via-white/80 to-orange-400/10 hover:border-amber-400/70 dark:from-amber-950/50 dark:via-zinc-900/90 dark:to-orange-950/30",
    rose: "border-rose-400/35 bg-gradient-to-br from-rose-500/15 via-white/80 to-pink-400/10 hover:border-rose-400/70 dark:from-rose-950/50 dark:via-zinc-900/90 dark:to-pink-950/30",
    fuchsia:
      "border-fuchsia-400/35 bg-gradient-to-br from-fuchsia-500/15 via-white/80 to-pink-400/10 hover:border-fuchsia-400/70 dark:from-fuchsia-950/50 dark:via-zinc-900/90 dark:to-pink-950/30",
  };
  return map[accent];
}

export default function Home() {
  const allSections = [...introSections, ...practicalSections];

  return (
    <>
      <main className="relative mx-auto w-full max-w-7xl px-4 pb-24 pt-8 md:px-8 md:pb-28 md:pt-12">
        <LandingLayout>
          {/* Welcome / hub */}
          <section
            id="hub"
            className="scroll-mt-28 overflow-hidden rounded-[2rem] border border-white/20 bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 p-8 text-white shadow-2xl shadow-indigo-900/30 ring-1 ring-white/10 md:p-12"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.22),_transparent_55%),radial-gradient(ellipse_at_bottom_left,_rgba(34,211,238,0.25),_transparent_50%)]"
            />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-100/90">
                Greater Seattle · 1-week intensive
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">{SITE.name}</h1>
              <p className="mt-4 max-w-3xl text-lg text-indigo-50 md:text-xl">{SITE.tagline}</p>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-indigo-100/95 md:text-base">
                {SITE.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/curriculum"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-violet-700 shadow-lg transition hover:scale-[1.02] hover:bg-indigo-50"
                >
                  Open 7-day curriculum
                </Link>
                <Link
                  href="/discovery"
                  className="inline-flex items-center justify-center rounded-xl border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:scale-[1.02] hover:bg-white/20"
                >
                  Discovery &amp; Synthesis
                </Link>
                <a
                  href={GITHUB_REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-zinc-900/30 px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:bg-zinc-900/50"
                >
                  Star on GitHub
                </a>
              </div>
              <dl className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm transition hover:bg-white/15">
                  <dt className="text-xs font-medium uppercase tracking-wide text-indigo-100/80">Vault workflow</dt>
                  <dd className="mt-1 text-sm font-semibold">Raw → Wiki → Query → Lint</dd>
                </div>
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm transition hover:bg-white/15">
                  <dt className="text-xs font-medium uppercase tracking-wide text-indigo-100/80">Also on this page</dt>
                  <dd className="mt-1 text-sm font-semibold">Claude Code 치트시트 (한국어)</dd>
                </div>
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm transition hover:bg-white/15">
                  <dt className="text-xs font-medium uppercase tracking-wide text-indigo-100/80">Source video</dt>
                  <dd className="mt-1 text-sm font-semibold">
                    <a className="underline decoration-indigo-200 underline-offset-4 hover:text-white" href={SOURCE_VIDEO_URL}>
                      Karpathy-style walkthrough
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </section>

          {/* Explore — bento route cards */}
          <section id="explore" className="scroll-mt-28 space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
                Full site map
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Explore every page</h2>
              <p className="mt-2 max-w-2xl text-base text-zinc-600 dark:text-zinc-300">
                Jump to dedicated routes for curriculum, discovery, Graphify, logistics, and facilitator ops — or open the
                canonical workshop video.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {landingRouteCards.map((card) => {
                const isExternal = card.href.startsWith("http");
                const className = `group relative flex h-full flex-col rounded-2xl border p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${accentCardClasses(card.accent)}`;
                const inner = (
                  <>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{card.title}</h3>
                      {card.badge ? (
                        <span className="shrink-0 rounded-full bg-black/5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-zinc-600 dark:bg-white/10 dark:text-zinc-200">
                          {card.badge}
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{card.description}</p>
                    <p className="mt-4 text-sm font-semibold text-emerald-700 group-hover:underline dark:text-emerald-300">
                      Open →
                    </p>
                  </>
                );
                return isExternal ? (
                  <a
                    key={card.title}
                    href={card.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {inner}
                  </a>
                ) : (
                  <Link key={card.href} href={card.href} className={className}>
                    {inner}
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Features */}
          <section id="spotlight" className="scroll-mt-28 space-y-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-600 dark:text-fuchsia-400">
                What you get
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Features &amp; functions</h2>
              <p className="mt-2 max-w-2xl text-base text-zinc-600 dark:text-zinc-300">
                A single landing view of the moving parts: vault workflow, graphs, synthesis, and the Claude Code cheat sheet
                below.
              </p>
            </div>
            <FeatureExpandableGrid features={landingFeatures} />
          </section>

          {/* Claude cheat sheet intro */}
          <section
            id="overview"
            className="scroll-mt-28 overflow-hidden rounded-3xl border border-indigo-200/80 bg-gradient-to-br from-indigo-600 via-fuchsia-500 to-cyan-500 p-8 text-white shadow-xl dark:border-indigo-500/30"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-100">Claude Code 입문 + 실전 통합</p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-4xl">Claude Code 200% 활용 치트시트</h2>
            <p className="mt-4 max-w-3xl text-base text-indigo-50 md:text-lg">
              초기 설정, 컨텍스트 관리, Plan Mode, 슬래시 명령어, 실전 워크플로우, WAT 프레임워크까지 한 페이지에서 빠르게 확인할 수
              있도록 통합 정리했습니다.
            </p>
            <div className="mt-6 grid gap-3 text-sm md:grid-cols-3">
              <div className="rounded-xl bg-white/15 p-4 transition hover:bg-white/20">
                <p className="text-indigo-100">핵심 흐름</p>
                <p className="mt-1 font-semibold">Plan → Review → Execute</p>
              </div>
              <div className="rounded-xl bg-white/15 p-4 transition hover:bg-white/20">
                <p className="text-indigo-100">컨텍스트 원칙</p>
                <p className="mt-1 font-semibold">한 세션 = 한 피처</p>
              </div>
              <div className="rounded-xl bg-white/15 p-4 transition hover:bg-white/20">
                <p className="text-indigo-100">자동화 관점</p>
                <p className="mt-1 font-semibold">Workflow + Agents + Tools</p>
              </div>
            </div>
          </section>

          {allSections.map((section, idx) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-28 rounded-2xl border border-zinc-200/90 bg-white p-8 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/80"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-violet-700 dark:text-violet-300">
                {section.subtitle}
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-zinc-900 dark:text-white">{section.title}</h2>
              <ul className="mt-4 grid gap-3">
                {section.points.map((point) => (
                  <li
                    key={point}
                    className={`rounded-lg px-4 py-3 text-sm transition hover:brightness-[1.02] ${
                      idx % 2 === 0
                        ? "border border-violet-100 bg-violet-50 text-violet-950 dark:border-violet-900/50 dark:bg-violet-950/40 dark:text-violet-100"
                        : "border border-cyan-100 bg-cyan-50 text-cyan-950 dark:border-cyan-900/50 dark:bg-cyan-950/40 dark:text-cyan-100"
                    }`}
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <section
            id="quick-reference"
            className="scroll-mt-28 rounded-2xl border border-amber-200/90 bg-white p-8 shadow-sm dark:border-amber-900/50 dark:bg-zinc-900"
          >
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">📋 한눈에 보기</h2>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <article className="rounded-xl border border-amber-100 bg-amber-50 p-5 transition hover:shadow-sm dark:border-amber-900/40 dark:bg-amber-950/30">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">단축키 Quick Reference</h3>
                <ul className="mt-3 space-y-2 text-sm text-zinc-800 dark:text-zinc-200">
                  {quickShortcuts.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </article>
              <article className="rounded-xl border border-emerald-100 bg-emerald-50 p-5 transition hover:shadow-sm dark:border-emerald-900/40 dark:bg-emerald-950/30">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">명령어 Quick Reference</h3>
                <ul className="mt-3 space-y-2 text-sm text-zinc-800 dark:text-zinc-200">
                  {quickCommands.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </article>
            </div>
            <div className="mt-5 rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-700 dark:border-zinc-700 dark:bg-zinc-950/50 dark:text-zinc-300">
              팁: 대규모 작업은 Plan Mode로 합의 후 실행하고, 에러 로그는 요약하지 말고 원문 그대로 전달하세요.
            </div>
          </section>

          <section
            id="series-note"
            className="scroll-mt-28 rounded-2xl border border-fuchsia-200/90 bg-gradient-to-r from-fuchsia-50 to-indigo-50 p-8 shadow-sm dark:border-fuchsia-900/40 dark:from-fuchsia-950/40 dark:to-indigo-950/40"
          >
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white">🎬 시리즈 안내</h2>
            <p className="mt-3 text-zinc-700 dark:text-zinc-300">
              이 자료는 입문 + 실전 워크플로우 내용을 통합한 버전입니다. 같은 사이트에서 Seattle LLM Wiki Bootcamp 7일 커리큘럼과
              Facilitator 자료도 함께 제공합니다.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/curriculum"
                className="rounded-lg bg-violet-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-600"
              >
                7일 부트캠프 커리큘럼 보기
              </Link>
              <Link
                href="/discovery"
                className="rounded-lg border border-violet-300 bg-white px-4 py-2 text-sm font-medium text-violet-800 transition hover:bg-violet-50 dark:border-violet-800 dark:bg-zinc-900 dark:text-violet-200 dark:hover:bg-violet-950/40"
              >
                Discovery &amp; Synthesis
              </Link>
              <a
                href="#hub"
                className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
              >
                맨 위 환영 섹션으로
              </a>
            </div>
          </section>
        </LandingLayout>
      </main>

      <GitHubFab />
    </>
  );
}
