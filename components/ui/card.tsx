import { cn } from '@/lib/utils';
export function Card({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl border bg-surface transition-[border-color,box-shadow] duration-300',
        className,
      )}
      {...props}
    />
  );
}
export function CardHeader(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div className="p-5 pb-2" {...props} />;
}
export function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div className="p-5" {...props} />;
}
