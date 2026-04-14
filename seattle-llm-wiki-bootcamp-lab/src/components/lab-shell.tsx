import Link from "next/link";
import { SITE } from "@/lib/site";

const nav = [
  { href: "/", label: "Overview" },
  { href: "/week", label: "7-day arc" },
  { href: "/playbooks", label: "Playbooks" },
] as const;

export function LabShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-full flex-col">
      <header className="border-b border-zinc-200/90 bg-white/90 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-4 md:px-8">
          <Link href="/" className="font-semibold tracking-tight text-zinc-900 dark:text-white">
            {SITE.name}
          </Link>
          <nav className="flex flex-wrap gap-2 text-sm">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg border border-transparent px-3 py-1.5 text-zinc-600 transition hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:bg-zinc-900 dark:hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      {children}
      <footer className="mt-auto border-t border-zinc-200/80 bg-zinc-50/80 px-4 py-8 text-sm text-zinc-600 dark:border-zinc-800 dark:bg-zinc-950/50 dark:text-zinc-400">
        <div className="mx-auto max-w-5xl md:px-4">
          <p>
            Built for facilitator-led cohorts in the greater Seattle area. Pair this lab with your vault on disk—nothing
            here replaces your Markdown files.
          </p>
        </div>
      </footer>
    </div>
  );
}
