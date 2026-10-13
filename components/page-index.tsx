'use client';
import { usePathname } from 'next/navigation';
import { navigation } from '@/lib/navigation';
/** Fixed page number and tagline in the lower corners, after Watson's inner pages. */
export function PageIndex() {
  const path = usePathname();
  const index = navigation.findIndex(([, href]) => path.startsWith(href));
  if (index < 0) return null;
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-30 hidden grid-cols-[1fr_auto_1fr] items-end px-5 pb-5 lg:grid"
    >
      <span className="text-[15px]">({index + 1})</span>
      <span className="meta">
        Good cars & better company
        <br />
        (Made in the Philippines)
      </span>
    </div>
  );
}
