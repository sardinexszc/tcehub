import { cn } from '@/lib/utils';
export function Badge({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex rounded-full bg-subtle px-3 py-1 text-[13px] font-medium',
        className,
      )}
      {...props}
    />
  );
}
