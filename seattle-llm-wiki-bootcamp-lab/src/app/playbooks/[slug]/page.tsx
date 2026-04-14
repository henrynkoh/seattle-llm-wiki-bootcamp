import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CodeBlock } from "@/components/code-block";
import { getPlaybook, playbooks } from "@/lib/playbooks";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return playbooks.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const book = getPlaybook(slug);
  if (!book) return { title: "Playbook not found" };
  return {
    title: book.title,
    description: book.summary,
  };
}

export default async function PlaybookPage({ params }: Props) {
  const { slug } = await params;
  const book = getPlaybook(slug);
  if (!book) notFound();

  return (
    <main className="mx-auto w-full max-w-5xl flex-1 space-y-10 px-4 py-10 md:px-8">
      <Link
        href="/playbooks"
        className="inline-block rounded-lg border border-zinc-300 px-3 py-2 text-sm text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-200 dark:hover:bg-zinc-900"
      >
        ← All playbooks
      </Link>

      <header className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white md:text-4xl">{book.title}</h1>
        <p className="max-w-3xl text-zinc-600 dark:text-zinc-300">{book.summary}</p>
      </header>

      <div className="space-y-12">
        {book.sections.map((section) => (
          <section key={section.heading} className="scroll-mt-28">
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">{section.heading}</h2>
            {section.paragraphs?.map((p) => (
              <p key={p} className="mt-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {p}
              </p>
            ))}
            {section.bullets?.length ? (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
                {section.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            ) : null}
            {section.codeBlocks?.map((block) => (
              <CodeBlock key={block.title ?? block.code.slice(0, 32)} title={block.title} code={block.code} />
            ))}
          </section>
        ))}
      </div>
    </main>
  );
}
