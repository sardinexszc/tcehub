'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, ArrowUpRight } from 'lucide-react';
import { navigation } from '@/lib/navigation';
import { MobileNav } from '@/components/mobile-nav';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
export function Navbar() {
  const path = usePathname();
  return (
    <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
      <div className="container-shell flex h-20 items-center justify-between gap-4">
        <Link
          href="/"
          aria-label="TCEHub home"
          className="text-2xl font-black tracking-tighter"
        >
          TCE<span className="text-accent">HUB</span>
          <span className="ml-2 hidden text-[9px] font-medium tracking-widest text-muted xl:inline">
            CAMRY COMMUNITY
          </span>
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 lg:flex"
        >
          {navigation.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={path.startsWith(href) ? 'page' : undefined}
              className={`text-sm transition-colors hover:text-accent ${path.startsWith(href) ? 'text-foreground' : 'text-muted'}`}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-1">
          <Button asChild variant="ghost" size="icon">
            <Link href="/shops#search" aria-label="Search shop directory">
              <Search size={18} />
            </Link>
          </Button>
          <ThemeToggle />
          <Button asChild className="ml-2 hidden md:inline-flex">
            <Link href="/contact#submit-shop">
              Submit a Shop
              <ArrowUpRight size={16} />
            </Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
