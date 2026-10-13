import Link from 'next/link';
import { cn } from '@/lib/utils';
/** A ring with an off-centre point of light — the site's one recurring idea. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={cn('size-6 shrink-0', className)}
    >
      <circle
        cx="12"
        cy="12"
        r="10.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="15.5" cy="9" r="3.25" fill="currentColor" />
    </svg>
  );
}
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="TCEHub home"
      className={cn(
        'flex items-center gap-2.5 text-[19px] font-semibold tracking-[-0.03em]',
        className,
      )}
    >
      <LogoMark />
      tcehub
    </Link>
  );
}
