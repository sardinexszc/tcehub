'use client';
import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronRight } from 'lucide-react';
import { navigation } from '@/lib/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
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
        <Dialog.Overlay className="fixed inset-0 z-50 bg-foreground/50" />
        <Dialog.Content className="fixed right-0 top-0 z-50 flex h-dvh w-[min(360px,92vw)] flex-col bg-background">
          <div className="flex h-16 items-center justify-between border-b px-5">
            <Dialog.Title className="display text-2xl uppercase">
              TCE<span className="text-accent">Hub</span>
            </Dialog.Title>
            <Dialog.Close asChild>
              <Button variant="ghost" size="icon" aria-label="Close navigation">
                <X size={20} aria-hidden="true" />
              </Button>
            </Dialog.Close>
          </div>
          <Dialog.Description className="sr-only">
            Site navigation
          </Dialog.Description>
          <nav aria-label="Mobile navigation" className="px-5">
            {[...navigation, ['About', '/about'], ['Contact', '/contact']].map(
              ([label, href]) => {
                const active = path.startsWith(href);
                return (
                  <Link
                    key={href}
                    href={href}
                    aria-current={active ? 'page' : undefined}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'flex items-center justify-between border-b py-4 text-[15px] font-semibold uppercase tracking-[0.05em]',
                      active && 'text-accent',
                    )}
                  >
                    {label}
                    <ChevronRight size={16} aria-hidden="true" />
                  </Link>
                );
              },
            )}
          </nav>
          <div className="mt-auto p-5">
            <Button asChild className="w-full">
              <Link href="/contact#submit-shop" onClick={() => setOpen(false)}>
                Submit a shop
              </Link>
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
