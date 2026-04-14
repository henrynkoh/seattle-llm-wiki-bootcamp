import Link from "next/link";
import {
  introSections,
  practicalSections,
  quickCommands,
  quickShortcuts,
} from "@/lib/cheatsheet";

export default function Home() {
  const sections = [
    { id: "overview", label: "치트시트 개요" },
    ...introSections.map((section) => ({
      id: section.id,
      label: section.title,
    })),
    ...practicalSections.map((section) => ({
      id: section.id,
      label: section.title,
    })),
    { id: "quick-reference", label: "한눈에 보기" },
    { id: "series-note", label: "시리즈 안내" },
  ];

  const allSections = [...introSections, ...practicalSections];

  return (
    <>
      <main className="mx-auto flex w-full max-w-7xl gap-8 px-4 py-8 md:px-8">
        <aside className="sticky top-6 hidden h-[calc(100vh-3rem)] w-72 shrink-0 overflow-hidden rounded-2xl border border-indigo-200 bg-white/80 p-4 shadow-lg backdrop-blur md:flex md:flex-col">
          <h2 className="px-2 text-sm font-semibold uppercase tracking-wider text-indigo-700">
            Navigate Sections
          </h2>
          <nav className="mt-4 flex-1 overflow-y-auto pr-1">
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-indigo-50 hover:text-indigo-700"
                  >
                    {section.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className="flex w-full flex-col gap-8">
          <section
            id="overview"
            className="scroll-mt-24 overflow-hidden rounded-3xl border border-indigo-200 bg-gradient-to-br from-indigo-600 via-fuchsia-500 to-cyan-500 p-8 text-white shadow-xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-100">
              Claude Code 입문 + 실전 통합
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              Claude Code 200% 활용 치트시트
            </h1>
            <p className="mt-4 max-w-3xl text-base text-indigo-50 md:text-lg">
              초기 설정, 컨텍스트 관리, Plan Mode, 슬래시 명령어, 실전 워크플로우,
              WAT 프레임워크까지 한 페이지에서 빠르게 확인할 수 있도록 통합
              정리했습니다.
            </p>

            <div className="mt-6 grid gap-3 text-sm md:grid-cols-2 xl:grid-cols-3">
              <div className="rounded-xl bg-white/15 p-4">
                <p className="text-indigo-100">핵심 흐름</p>
                <p className="mt-1 font-semibold">Plan → Review → Execute</p>
              </div>
              <div className="rounded-xl bg-white/15 p-4">
                <p className="text-indigo-100">컨텍스트 원칙</p>
                <p className="mt-1 font-semibold">한 세션 = 한 피처</p>
              </div>
              <div className="rounded-xl bg-white/15 p-4">
                <p className="text-indigo-100">자동화 관점</p>
                <p className="mt-1 font-semibold">Workflow + Agents + Tools</p>
              </div>
            </div>
          </section>

          {allSections.map((section, idx) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-24 rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-violet-700">
                {section.subtitle}
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-zinc-900">
                {section.title}
              </h2>
              <ul className="mt-4 grid gap-3">
                {section.points.map((point) => (
                  <li
                    key={point}
                    className={`rounded-lg px-4 py-3 text-sm ${
                      idx % 2 === 0
                        ? "border border-violet-100 bg-violet-50 text-violet-950"
                        : "border border-cyan-100 bg-cyan-50 text-cyan-950"
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
            className="scroll-mt-24 rounded-2xl border border-amber-200 bg-white p-8 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-zinc-900">
              📋 한눈에 보기
            </h2>
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <article className="rounded-xl border border-amber-100 bg-amber-50 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">
                  단축키 Quick Reference
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-zinc-800">
                  {quickShortcuts.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </article>
              <article className="rounded-xl border border-emerald-100 bg-emerald-50 p-5">
                <h3 className="text-lg font-semibold text-zinc-900">
                  명령어 Quick Reference
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-zinc-800">
                  {quickCommands.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </article>
            </div>
            <div className="mt-5 rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm text-zinc-700">
              팁: 대규모 작업은 Plan Mode로 합의 후 실행하고, 에러 로그는 요약하지
              말고 원문 그대로 전달하세요.
            </div>
          </section>

          <section
            id="series-note"
            className="scroll-mt-24 rounded-2xl border border-fuchsia-200 bg-gradient-to-r from-fuchsia-50 to-indigo-50 p-8 shadow-sm"
          >
            <h2 className="text-2xl font-semibold text-zinc-900">🎬 시리즈 안내</h2>
            <p className="mt-3 text-zinc-700">
              이 자료는 입문 + 실전 워크플로우 내용을 통합한 버전입니다. 다음
              확장판에서는 TDD 기반 실무 자동화, 권한 전략, 병렬 에이전트 운영
              사례를 더 깊게 다룰 수 있습니다.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/days/foundation-and-setup"
                className="rounded-lg bg-violet-700 px-4 py-2 text-sm font-medium text-white hover:bg-violet-600"
              >
                Day 상세 페이지 보기
              </Link>
              <Link
                href="/"
                className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
              >
                페이지 상단으로 이동
              </Link>
            </div>
          </section>
        </div>
      </main>

      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-black"
      >
        View on GitHub
      </a>
    </>
  );
}
