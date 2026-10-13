'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation } from '@/lib/navigation';
import { MobileNav } from '@/components/mobile-nav';
import { cn } from '@/lib/utils';
export function Navbar() {
  const path = usePathname();
  const isActive = (href: string) => path.startsWith(href);
  return (
    <header className="sticky top-0 z-40 bg-background">
      <div className="container-shell grid h-14 grid-cols-[1fr_auto] items-center gap-4 text-[15px] lg:grid-cols-[1fr_auto_1fr]">
        <Link
          href="/"
          aria-label="TCEHub home"
          className="justify-self-start transition-opacity hover:opacity-60"
        >
          TCEHub
        </Link>
        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex">
            {navigation.map(([label, href], i) => (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive(href) ? 'page' : undefined}
                  className="group inline-flex items-start transition-opacity hover:opacity-60"
                >
                  <sup className="mr-0.5 mt-1 text-[9px] leading-none">
                    ({i + 1})
                  </sup>
                  <span
                    className={cn(
                      isActive(href) &&
                        'underline decoration-1 underline-offset-[3px]',
                    )}
                  >
                    {label}
                  </span>
                  {i < navigation.length - 1 && (
                    <span aria-hidden="true" className="mr-1.5">
                      ,
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center justify-self-end gap-1">
          {(
            [
              ['About', '/about'],
              ['Contact', '/contact'],
            ] as const
          ).map(([label, href], i) => (
            <Link
              key={href}
              href={href}
              aria-current={isActive(href) ? 'page' : undefined}
              className={cn(
                'hidden transition-opacity hover:opacity-60 lg:inline',
                isActive(href) &&
                  'underline decoration-1 underline-offset-[3px]',
              )}
            >
              {label}
              {i === 0 && <span aria-hidden="true">,</span>}
            </Link>
          ))}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
