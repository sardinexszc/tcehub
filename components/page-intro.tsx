import { cn } from '@/lib/utils';
/** Opening panel for inner pages: label, large title, short intro, optional controls. */
export function PageIntro({
  label,
  title,
  intro,
  children,
  tone = 'light',
  className,
}: {
  label: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  children?: React.ReactNode;
  tone?: 'light' | 'night';
  className?: string;
}) {
  return (
    <header
      className={cn(
        'rounded-panel p-6 md:p-12',
        tone === 'night' ? 'bg-night text-white' : 'bg-surface',
        className,
      )}
    >
      <p
        className={cn(
          'label',
          tone === 'night' ? 'text-white/60' : 'text-muted',
        )}
      >
        {label}
      </p>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-end">
        <h1 className="text-[clamp(2.75rem,6vw,5.25rem)] font-medium leading-[0.98] tracking-[-0.045em]">
          {title}
        </h1>
        {intro && (
          <div
            className={cn(
              'max-w-md text-[17px]',
              tone === 'night' ? 'text-white/65' : 'text-muted',
            )}
          >
            {intro}
          </div>
        )}
      </div>
      {children && <div className="mt-10">{children}</div>}
    </header>
  );
}
