import Link from 'next/link';
import { cn } from '@/lib/utils';
export function LogoMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'grid size-8 place-items-center rounded-[5px] border border-current font-mono text-[10px] font-semibold tracking-tight',
        className,
      )}
    >
      TCE
    </span>
  );
}
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="TCEHub home"
      className={cn('flex items-center gap-3', className)}
    >
      <span className="flex items-baseline text-[26px] font-bold leading-none tracking-[-0.06em]">
        TCE
        <span
          aria-hidden="true"
          className="ml-0.5 size-2 rounded-full bg-accent ring-1 ring-foreground/20"
        />
      </span>
      <span className="text-[11px] font-medium leading-[1.15] tracking-[-0.01em]">
        Toyota Camry
        <br />
        Elite Hub
      </span>
    </Link>
  );
}
