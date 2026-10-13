'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
const links = [
  ['Overview', '/admin'],
  ['Shops', '/admin/shops'],
  ['Journals', '/admin/journals'],
  ['Events', '/admin/events'],
  ['Galleries', '/admin/galleries'],
  ['Settings', '/admin/settings'],
] as const;
export function AdminNav() {
  const path = usePathname();
  return (
    <aside className="border-b border-foreground p-4 text-[15px] md:sticky md:top-0 md:flex md:h-dvh md:w-60 md:shrink-0 md:flex-col md:border-b-0 md:border-r md:p-5">
      <Link href="/" className="transition-opacity hover:opacity-60">
        TCEHub
      </Link>
      <p className="meta mb-6 mt-1 text-muted md:mb-10">(Workspace — demo)</p>
      <nav aria-label="Admin navigation">
        <ul className="-mx-1 flex gap-4 overflow-x-auto px-1 md:flex-col md:gap-1">
          {links.map(([label, href], i) => {
            const active = path === href;
            return (
              <li key={href} className="shrink-0">
                <Link
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'inline-flex items-start transition-opacity hover:opacity-60',
                    active && 'underline decoration-1 underline-offset-[3px]',
                  )}
                >
                  <sup className="mr-0.5 mt-1 text-[9px] leading-none no-underline">
                    ({i + 1})
                  </sup>
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Link href="/" className="link-u mt-auto hidden md:inline">
        View public site →
      </Link>
    </aside>
  );
}
