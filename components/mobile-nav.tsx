'use client';
import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navigation } from '@/lib/navigation';
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className="-mr-2 cursor-pointer px-2 py-3 transition-opacity hover:opacity-60 lg:hidden">
        Menu
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Content className="fixed inset-0 z-50 flex flex-col bg-background px-4 pb-6">
          <div className="flex h-14 items-center justify-between text-[15px]">
            <Dialog.Title>TCEHub</Dialog.Title>
            <Dialog.Close className="-mr-2 cursor-pointer px-2 py-3 transition-opacity hover:opacity-60">
              Close
            </Dialog.Close>
          </div>
          <Dialog.Description className="sr-only">
            Site navigation
          </Dialog.Description>
          <nav aria-label="Mobile navigation" className="mt-8 flex-1">
            <ul className="rule-list">
              {[
                ...navigation,
                ['About', '/about'],
                ['Contact', '/contact'],
              ].map(([label, href], i) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    aria-current={path.startsWith(href) ? 'page' : undefined}
                    className="flex items-baseline justify-between py-3 font-serif text-4xl tracking-[-0.03em] aria-[current=page]:italic"
                  >
                    {label}
                    <span className="font-sans text-[13px] tracking-normal">
                      ({i + 1})
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className="meta">
            Good cars & better company
            <br />
            (Made in the Philippines)
          </p>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
