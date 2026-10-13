'use client';
import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navigation } from '@/lib/navigation';
import { LogoMark } from '@/components/logo';
import { Button } from '@/components/ui/button';
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label="Open navigation"
        >
          <Menu size={22} aria-hidden="true" />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm" />
        <Dialog.Content className="fixed right-0 top-0 z-50 flex h-dvh w-[min(340px,92vw)] flex-col border-l bg-background p-5">
          <div className="flex items-center gap-2.5">
            <LogoMark />
            <Dialog.Title className="text-[17px] font-semibold tracking-[-0.03em]">
              TCEHub
            </Dialog.Title>
          </div>
          <Dialog.Description className="meta mt-3">
            Toyota Camry Elite Hub
          </Dialog.Description>
          <Dialog.Close asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-3 top-3"
              aria-label="Close navigation"
            >
              <X size={20} aria-hidden="true" />
            </Button>
          </Dialog.Close>
          <nav className="hairline-grid mt-8" aria-label="Mobile navigation">
            {[...navigation, ['About', '/about'], ['Contact', '/contact']].map(
              ([label, href], i) => {
                const active = path.startsWith(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    aria-current={active ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between px-4 py-3.5 text-[15px] transition-colors ${active ? '!bg-accent font-medium' : 'hover:!bg-subtle'}`}
                  >
                    {label}
                    <span
                      aria-hidden="true"
                      className="font-mono text-[10px] text-muted"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </Link>
                );
              },
            )}
          </nav>
          <Button asChild variant="ink" className="mt-auto w-full">
            <Link href="/contact#submit-shop" onClick={() => setOpen(false)}>
              Submit a Shop
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </Button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
