import { cn } from '@/lib/utils';
export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('border-t border-foreground pt-4', className)}
      {...props}
    />
  );
}
export function CardHeader(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div className="pb-2" {...props} />;
}
export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} />;
}
