'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search } from 'lucide-react';
import { navigation } from '@/lib/navigation';
import { events, demoToday } from '@/lib/mock-data';
import { formatDate } from '@/lib/utils';
import { MobileNav } from '@/components/mobile-nav';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
const nextEvent = events
  .filter((e) => e.date >= demoToday)
  .sort((a, b) => a.date.localeCompare(b.date))[0];
export function Navbar() {
  const path = usePathname();
  return (
    <>
      {nextEvent && (
        <div className="section-dark text-[13px]">
          <div className="container-shell flex h-9 items-center justify-between gap-4">
            <p className="truncate">
              <span className="font-semibold">Next meet:</span>{' '}
              {nextEvent.title} · {formatDate(nextEvent.date)} ·{' '}
              <span className="opacity-70">{nextEvent.location}</span>
            </p>
            <Link
              href={`/events/${nextEvent.slug}`}
              className="shrink-0 font-semibold underline-offset-4 hover:underline"
            >
              Details
            </Link>
          </div>
        </div>
      )}
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container-shell flex h-16 items-center justify-between gap-6">
          <Logo />
          <nav
            aria-label="Main navigation"
            className="hidden h-full items-stretch gap-7 lg:flex"
          >
            {navigation.map(([label, href]) => {
              const active = path.startsWith(href);
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    '-mb-px flex items-center border-b-2 text-[13px] font-semibold uppercase tracking-[0.06em] transition-colors',
                    active
                      ? 'border-accent text-foreground'
                      : 'border-transparent text-foreground/70 hover:text-foreground',
                  )}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-1">
            <Button asChild variant="ghost" size="icon">
              <Link href="/shops#search" aria-label="Search shop directory">
                <Search size={19} aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              variant="ink"
              size="sm"
              className="hidden md:inline-flex"
            >
              <Link href="/contact#submit-shop">Submit a shop</Link>
            </Button>
            <MobileNav />
          </div>
        </div>
      </header>
    </>
  );
}
