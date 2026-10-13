import Link from 'next/link';
/** Capabilities-style heading: parenthetical kicker on the left, large sans title (→ when linked) on the right. */
export function SectionHeading({
  title,
  kicker,
  href,
  linkLabel,
  count,
}: {
  title: string;
  kicker?: string;
  href?: string;
  linkLabel?: string;
  count?: number;
}) {
  const heading = (
    <>
      {title}
      {href && <span aria-hidden="true"> →</span>}
    </>
  );
  return (
    <div className="mb-8 grid gap-3 md:mb-10 md:grid-cols-[1fr_2fr] md:items-end">
      <p className="text-[15px]">
        {kicker && <span className="eyebrow">{kicker}</span>}
        {count !== undefined && (
          <span className="ml-3 text-muted">({count})</span>
        )}
      </p>
      <h2 className="text-5xl font-normal leading-[0.95] tracking-[-0.045em] md:text-7xl">
        {href ? (
          <Link
            href={href}
            aria-label={linkLabel ? `${title} — ${linkLabel}` : undefined}
            className="transition-opacity hover:opacity-60"
          >
            {heading}
          </Link>
        ) : (
          heading
        )}
      </h2>
    </div>
  );
}
