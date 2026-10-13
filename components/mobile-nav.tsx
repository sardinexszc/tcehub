'use client';
import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { navigation } from '@/lib/navigation';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
export function MobileNav({ night = false }: { night?: boolean }) {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button
          size="icon"
          variant={night ? 'light' : 'default'}
          className="lg:hidden"
          aria-label="Open menu"
        >
          <Menu size={18} aria-hidden="true" />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-night/30 backdrop-blur-[2px]" />
        <Dialog.Content className="panel fixed inset-x-3 top-3 z-50 p-5 shadow-[0_30px_60px_-30px_hsl(var(--night)/0.45)] md:inset-x-auto md:right-5 md:top-5 md:w-[380px]">
          <div className="flex items-center justify-between">
            <Logo />
            <Dialog.Close asChild>
              <Button size="icon" variant="soft" aria-label="Close menu">
                <X size={18} aria-hidden="true" />
              </Button>
            </Dialog.Close>
          </div>
          <Dialog.Title className="sr-only">Menu</Dialog.Title>
          <Dialog.Description className="sr-only">
            Site navigation
          </Dialog.Description>
          <nav aria-label="Mobile navigation" className="mt-6">
            <ul className="grid">
              {[
                ...navigation,
                ['About', '/about'],
                ['Contact', '/contact'],
              ].map(([label, href]) => {
                const active = path.startsWith(href);
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        'flex items-center justify-between rounded-2xl px-4 py-3 text-2xl font-medium tracking-[-0.03em] transition-colors',
                        active ? 'bg-subtle' : 'hover:bg-subtle',
                      )}
                    >
                      {label}
                      {active && (
                        <span
                          aria-hidden="true"
                          className="size-2 rounded-full bg-tail"
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <Button asChild className="mt-6 w-full">
            <Link href="/contact#submit-shop" onClick={() => setOpen(false)}>
              Submit a shop
            </Link>
          </Button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
