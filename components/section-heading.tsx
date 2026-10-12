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
    <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
      <div>
        {kicker && <p className="eyebrow mb-3">{kicker}</p>}
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          {title}
        </h2>
      </div>
      {href && (
        <Link
          className="flex items-center gap-2 text-sm text-muted hover:text-foreground"
          href={href}
        >
          {linkLabel}
          <ArrowUpRight size={16} />
        </Link>
      )}
    </div>
  );
}
