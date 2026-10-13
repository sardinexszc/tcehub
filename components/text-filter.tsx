'use client';
import { cn, sentence } from '@/lib/utils';
/** Pill chips; the selected chip is filled ink. */
export function TextFilter({
  label,
  options,
  value,
  onChange,
  allLabel = 'All',
  capitalize = false,
  tone = 'light',
}: {
  label: string;
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
  allLabel?: string;
  capitalize?: boolean;
  tone?: 'light' | 'night';
}) {
  const items = [['all', allLabel], ...options.map((o) => [o, o])] as const;
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      {items.map(([key, text]) => {
        const on = value === key;
        return (
          <button
            key={key}
            type="button"
            aria-pressed={on}
            onClick={() => onChange(key)}
            className={cn(
              'h-9 cursor-pointer rounded-full px-4 text-[14px] font-medium transition-colors',
              tone === 'light'
                ? on
                  ? 'bg-foreground text-surface'
                  : 'bg-subtle text-foreground hover:bg-border'
                : on
                  ? 'bg-white text-foreground'
                  : 'bg-white/10 text-white hover:bg-white/20',
            )}
          >
            {capitalize ? sentence(text) : text}
          </button>
        );
      })}
    </div>
  );
}
