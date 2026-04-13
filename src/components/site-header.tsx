import Link from "next/link";
import { NAV } from "@/lib/constants";
import { SITE } from "@/lib/constants";

export function SiteHeader() {
  return (
    <header className="border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between">
        <div>
          <Link href="/" className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">
            {SITE.name}
          </Link>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">{SITE.tagline}</p>
        </div>
        <nav className="flex flex-wrap gap-3 text-sm font-medium text-zinc-700 dark:text-zinc-200">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1 transition hover:bg-emerald-500/10 hover:text-emerald-700 dark:hover:text-emerald-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
