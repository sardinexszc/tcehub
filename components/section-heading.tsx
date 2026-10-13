import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
export function SectionHeading({
  title,
  kicker,
  href,
  linkLabel = 'View all',
}: {
  title: string;
  kicker?: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-4 md:mb-10">
      <div>
        {kicker && <p className="eyebrow mb-4">{kicker}</p>}
        <h2 className="text-3xl font-medium tracking-[-0.03em] md:text-4xl">
          {title}
        </h2>
      </div>
      {href && (
        <Link
          className="group flex items-center gap-2 rounded-md border bg-surface px-3.5 py-2 text-[13px] transition-colors hover:border-foreground/40"
          href={href}
        >
          {linkLabel}
          <ArrowUpRight
            size={15}
            aria-hidden="true"
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>
      )}
    </div>
  );
}
