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
      className="mb-8 flex flex-wrap items-center gap-2 text-xs text-muted"
    >
      <Link href="/">Home</Link>
      {items.map((item, i) => (
        <span className="flex items-center gap-2" key={i}>
          <ChevronRight size={12} />
          {item.href ? (
            <Link href={item.href}>{item.label}</Link>
          ) : (
            <span aria-current="page">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
