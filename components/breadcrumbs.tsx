import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
export function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-8 flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-muted"
    >
      <Link className="hover:text-foreground" href="/">
        Home
      </Link>
      {items.map((item, i) => (
        <span className="flex items-center gap-2" key={i}>
          <ChevronRight size={12} aria-hidden="true" />
          {item.href ? (
            <Link className="hover:text-foreground" href={item.href}>
              {item.label}
            </Link>
          ) : (
            <span aria-current="page" className="text-foreground">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
