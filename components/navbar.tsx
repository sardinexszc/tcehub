'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, ArrowUpRight } from 'lucide-react';
import { navigation } from '@/lib/navigation';
import { MobileNav } from '@/components/mobile-nav';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
export function Navbar() {
  const path = usePathname();
  return (
    <header className="sticky top-0 z-40 border-b border-foreground/[0.06] bg-background/85 backdrop-blur-md">
      <div className="container-shell flex h-[72px] items-center justify-between gap-4">
        <Logo />
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1.5 lg:flex"
        >
          {navigation.map(([label, href]) => {
            const active = path.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? 'page' : undefined}
                className={`flex h-10 items-center rounded-full border px-5 text-[13px] transition-colors duration-200 ${active ? 'border-foreground bg-foreground font-medium text-background' : 'bg-surface hover:border-foreground/40'}`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-1.5">
          <Button asChild variant="outline" size="icon" className="size-10">
            <Link href="/shops#search" aria-label="Search shop directory">
              <Search size={18} aria-hidden="true" />
            </Link>
          </Button>
          <Button asChild size="sm" className="hidden md:inline-flex">
            <Link href="/contact#submit-shop">
              Submit a Shop
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
