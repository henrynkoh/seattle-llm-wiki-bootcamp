import type { Metadata } from "next";
import Link from "next/link";
import { playbooks } from "@/lib/playbooks";

export const metadata: Metadata = {
  title: "Playbooks",
};

export default function PlaybooksIndexPage() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 space-y-10 px-4 py-12 md:px-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">Playbooks</h1>
        <p className="mt-3 max-w-3xl text-zinc-600 dark:text-zinc-300">
          Deep dives that mirror the Obsidian stack from the bootcamp: query your vault, style it, lint it, sync it, and
          back it up. Open any playbook for copy-paste snippets and facilitator notes.
        </p>
      </div>

      <ul className="grid gap-4 md:grid-cols-2">
        {playbooks.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/playbooks/${p.slug}`}
              className="block h-full rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:border-violet-300 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-violet-700"
            >
              <h2 className="font-semibold text-zinc-900 dark:text-white">{p.title}</h2>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{p.summary}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
