import Link from 'next/link';
import { cn } from '@/lib/utils';
export function Breadcrumbs({
  items,
  tone = 'light',
}: {
  items: { label: string; href?: string }[];
  tone?: 'light' | 'night';
}) {
  const quiet = tone === 'night' ? 'text-white/55' : 'text-muted';
  return (
    <nav aria-label="Breadcrumb" className="text-[15px]">
      <ol className="flex flex-wrap items-center gap-x-2">
        <li className={quiet}>
          <Link className="hover:underline" href="/">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-x-2">
            <span aria-hidden="true" className={quiet}>
              /
            </span>
            {item.href ? (
              <Link className={cn('hover:underline', quiet)} href={item.href}>
                {item.label}
              </Link>
            ) : (
              <span aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
