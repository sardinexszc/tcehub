'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Store,
  NotebookPen,
  CalendarDays,
  Images,
  Settings,
  ArrowUpRight,
} from 'lucide-react';
import { Logo } from '@/components/logo';
const links = [
  ['Overview', '/admin', LayoutDashboard],
  ['Shops', '/admin/shops', Store],
  ['Journals', '/admin/journals', NotebookPen],
  ['Events', '/admin/events', CalendarDays],
  ['Galleries', '/admin/galleries', Images],
  ['Settings', '/admin/settings', Settings],
] as const;
export function AdminNav() {
  const path = usePathname();
  return (
    <aside className="border-b bg-surface p-4 md:sticky md:top-0 md:flex md:h-dvh md:w-64 md:shrink-0 md:flex-col md:border-b-0 md:border-r md:p-5">
      <Logo />
      <p className="meta mb-6 mt-4 md:mb-8">Content workspace · demo</p>
      <nav
        aria-label="Admin navigation"
        className="-mx-1 flex gap-1 overflow-x-auto px-1 md:flex-col"
      >
        {links.map(([label, href, Icon]) => {
          const active = path === href;
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? 'page' : undefined}
              className={`flex shrink-0 items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors ${active ? 'bg-accent font-medium text-accent-foreground' : 'text-muted hover:bg-subtle hover:text-foreground'}`}
            >
              <Icon size={17} aria-hidden="true" />
              {label}
            </Link>
          );
        })}
      </nav>
      <Link
        href="/"
        className="mt-auto hidden items-center justify-between rounded-md border px-3 py-2.5 text-[13px] transition-colors hover:border-foreground/40 md:flex"
      >
        View public site
        <ArrowUpRight size={14} aria-hidden="true" />
      </Link>
    </aside>
  );
}
