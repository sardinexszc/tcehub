import { cn } from '@/lib/utils';
export function Badge({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className={cn('meta inline-flex', className)} {...props}>
      ({children})
    </span>
  );
}
