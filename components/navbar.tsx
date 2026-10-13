'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search } from 'lucide-react';
import { navigation } from '@/lib/navigation';
import { Logo } from '@/components/logo';
import { MobileNav } from '@/components/mobile-nav';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
export function Navbar() {
  const path = usePathname();
  // On the home page the bar sits inside the dark hero panel.
  const night = path === '/';
  return (
    <header
      className={cn(
        'shell z-40 pt-3 md:pt-5',
        night ? 'absolute inset-x-0 top-0 text-white' : 'relative',
      )}
    >
      <div className="flex h-16 items-center justify-between gap-4 px-4 md:h-20 md:px-8">
        <Logo />
        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navigation.map(([label, href]) => {
              const active = path.startsWith(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'rounded-full px-4 py-2 text-[15px] transition-colors',
                      night
                        ? 'text-white/75 hover:text-white'
                        : 'text-muted hover:text-foreground',
                      active &&
                        (night
                          ? 'bg-white/10 text-white'
                          : 'bg-surface text-foreground'),
                    )}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <Button
            asChild
            size="icon"
            variant={night ? 'ghost' : 'outline'}
            className={cn(
              'hidden sm:inline-flex',
              night && 'border border-white/25 hover:bg-white/10',
            )}
          >
            <Link href="/shops#search" aria-label="Search the shop directory">
              <Search size={17} aria-hidden="true" />
            </Link>
          </Button>
          <Button
            asChild
            variant={night ? 'light' : 'soft'}
            className="hidden md:inline-flex"
          >
            <Link href="/contact#submit-shop">Submit a shop</Link>
          </Button>
          <MobileNav night={night} />
        </div>
      </div>
    </header>
  );
}
