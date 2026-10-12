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
import { ThemeToggle } from '@/components/theme-toggle';
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
    <aside className="border-b bg-surface p-4 md:sticky md:top-0 md:h-dvh md:w-60 md:shrink-0 md:border-b-0 md:border-r md:p-6">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-2xl font-black tracking-tighter">
          TCE<span className="text-accent">HUB</span>
        </Link>
        <ThemeToggle />
      </div>
      <p className="mb-7 mt-2 text-xs text-muted">Content workspace · demo</p>
      <nav
        aria-label="Admin navigation"
        className="flex gap-2 overflow-x-auto md:flex-col"
      >
        {links.map(([label, href, Icon]) => (
          <Link
            key={href}
            href={href}
            aria-current={path === href ? 'page' : undefined}
            className={`flex shrink-0 items-center gap-3 rounded-lg px-3 py-3 text-sm ${path === href ? 'bg-accent text-white' : 'text-muted hover:bg-background'}`}
          >
            <Icon size={17} />
            {label}
          </Link>
        ))}
      </nav>
      <Link
        href="/"
        className="mt-8 hidden items-center gap-2 text-xs text-muted md:flex"
      >
        View public site
        <ArrowUpRight size={14} />
      </Link>
    </aside>
  );
}
