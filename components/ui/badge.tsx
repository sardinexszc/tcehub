import { cn } from '@/lib/utils';
export function Badge({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-[4px] border bg-surface px-2 py-1 font-mono text-[10px] font-medium uppercase leading-none tracking-[0.12em] text-muted',
        className,
      )}
      {...props}
    />
  );
}
