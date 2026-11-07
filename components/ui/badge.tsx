import { cn } from '@/lib/utils';
export function Badge({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded border px-2 py-1 text-[11px] font-semibold uppercase leading-none tracking-[0.06em] text-foreground',
        className,
      )}
      {...props}
    />
  );
}
