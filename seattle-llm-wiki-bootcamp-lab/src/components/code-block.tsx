export function CodeBlock({ title, code }: { title?: string; code: string }) {
  return (
    <figure className="my-4 overflow-hidden rounded-xl border border-zinc-200 bg-zinc-950 text-zinc-50 shadow-sm dark:border-zinc-700">
      {title ? (
        <figcaption className="border-b border-zinc-800 px-4 py-2 text-xs font-medium text-zinc-400">{title}</figcaption>
      ) : null}
      <pre className="max-h-[min(70vh,520px)] overflow-auto p-4 text-xs leading-relaxed md:text-sm">
        <code>{code}</code>
      </pre>
    </figure>
  );
}
