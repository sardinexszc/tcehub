import Link from 'next/link';
import { cn } from '@/lib/utils';
export function Logo({
  className,
  descriptor = true,
}: {
  className?: string;
  descriptor?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label="TCEHub home"
      className={cn('flex items-center gap-3', className)}
    >
      <span className="display text-[28px] uppercase leading-none tracking-[-0.02em]">
        TCE<span className="text-accent">Hub</span>
      </span>
      {descriptor && (
        <span className="hidden border-l border-foreground/20 pl-3 text-[11px] font-medium leading-tight opacity-70 sm:block">
          Toyota Camry
          <br />
          Elite Hub
        </span>
      )}
    </Link>
  );
}
