'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  CalendarDays,
  Images,
  LayoutGrid,
  NotebookPen,
  Settings,
  Store,
} from 'lucide-react';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';
const links = [
  ['Overview', '/admin', LayoutGrid],
  ['Shops', '/admin/shops', Store],
  ['Journals', '/admin/journals', NotebookPen],
  ['Events', '/admin/events', CalendarDays],
  ['Galleries', '/admin/galleries', Images],
  ['Settings', '/admin/settings', Settings],
] as const;
export function AdminNav() {
  const path = usePathname();
  return (
    <aside className="panel p-4 md:sticky md:top-5 md:flex md:h-[calc(100dvh-2.5rem)] md:w-64 md:shrink-0 md:flex-col md:p-5">
      <Logo />
      <p className="mt-1 pl-[34px] text-[13px] text-muted">Workspace preview</p>
      <nav aria-label="Admin navigation" className="mt-6 md:mt-10">
        <ul className="-mx-1 flex gap-1 overflow-x-auto px-1 md:flex-col">
          {links.map(([label, href, Icon]) => {
            const active = path === href;
            return (
              <li key={href} className="shrink-0">
                <Link
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'flex items-center gap-3 rounded-full px-4 py-2.5 text-[15px] transition-colors',
                    active
                      ? 'bg-foreground text-surface'
                      : 'text-muted hover:bg-subtle hover:text-foreground',
                  )}
                >
                  <Icon size={17} aria-hidden="true" />
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Link
        href="/"
        className="mt-auto hidden rounded-full bg-subtle px-4 py-2.5 text-[15px] transition-colors hover:bg-border md:block"
      >
        View the public site
      </Link>
    </aside>
  );
}
