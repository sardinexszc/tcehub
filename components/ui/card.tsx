import { cn } from '@/lib/utils';
/** Editorial card: no box, just a group wrapper. Image and text sit on the page. */
export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('group', className)} {...props} />;
}
