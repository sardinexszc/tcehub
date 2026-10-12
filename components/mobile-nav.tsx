'use client';
import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { navigation } from '@/lib/navigation';
import { Button } from '@/components/ui/button';
export function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label="Open navigation"
        >
          <Menu size={22} />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/65" />
        <Dialog.Content className="fixed right-0 top-0 z-50 h-dvh w-[min(320px,90vw)] border-l bg-background p-6">
          <Dialog.Title className="font-bold">
            TCE<span className="text-accent">HUB</span>
          </Dialog.Title>
          <Dialog.Description className="mt-2 text-sm text-muted">
            Toyota Camry Elite Hub
          </Dialog.Description>
          <Dialog.Close asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-3 top-3"
              aria-label="Close navigation"
            >
              <X size={20} />
            </Button>
          </Dialog.Close>
          <nav className="mt-10 flex flex-col gap-1">
            {[...navigation, ['About', '/about'], ['Contact', '/contact']].map(
              ([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 hover:bg-surface"
                >
                  {label}
                </Link>
              ),
            )}
          </nav>
          <Button asChild className="mt-6 w-full">
            <Link href="/contact#submit-shop" onClick={() => setOpen(false)}>
              Submit a Shop
            </Link>
          </Button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
