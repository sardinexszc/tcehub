import { cn } from '@/lib/utils';
export type Tint = 'white' | 'cream' | 'blush' | 'stone';
/** Capabilities-style page: sticky serif title + intro on the left, content on the right. */
export function SplitPage({
  title,
  intro,
  aside,
  tint = 'white',
  children,
  className,
}: {
  title: string;
  intro?: React.ReactNode;
  aside?: React.ReactNode;
  tint?: Tint;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      data-tint={tint}
      className={cn(
        'container-shell grid gap-12 pt-8 md:pt-14 lg:grid-cols-2 lg:gap-5',
        className,
      )}
    >
      <aside className="flex flex-col gap-8 lg:sticky lg:top-24 lg:h-[calc(100svh-9rem)] lg:pb-10">
        <h1 className="page-title max-w-[9em]">({title})</h1>
        {intro && (
          <div className="max-w-[23rem] indent-[4.5em] text-[17px] leading-[1.3]">
            {intro}
          </div>
        )}
        {aside}
      </aside>
      <div className="min-w-0">{children}</div>
    </div>
  );
}
