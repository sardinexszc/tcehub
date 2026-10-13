import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
/** Lime square with an arrow, the reference's tile affordance. Decorative: the parent link carries the name. */
export function CornerArrow({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'grid size-8 place-items-center rounded-full bg-accent text-accent-foreground transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5',
        className,
      )}
    >
      <ArrowUpRight size={16} strokeWidth={2} />
    </span>
  );
}
