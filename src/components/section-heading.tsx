type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="space-y-3">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-300">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">{title}</h2>
      {description ? <p className="max-w-3xl text-lg text-zinc-600 dark:text-zinc-400">{description}</p> : null}
    </div>
  );
}
