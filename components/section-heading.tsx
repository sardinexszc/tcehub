import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
export function SectionHeading({
  title,
  href,
  linkLabel = 'View all',
}: {
  title: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="mb-8 flex flex-wrap items-end justify-between gap-x-6 gap-y-3 border-t-2 border-foreground pt-4">
      <h2 className="section-title">{title}</h2>
      {href && (
        <Link className="text-link" href={href}>
          {linkLabel}
          <ChevronRight size={16} aria-hidden="true" />
        </Link>
      )}
    </div>
  );
}
