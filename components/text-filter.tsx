'use client';
import { cn } from '@/lib/utils';
/** Comma-separated text toggles: "(Category) All, Parts, Repair". */
export function TextFilter({
  label,
  options,
  value,
  onChange,
  allLabel = 'All',
  capitalize = false,
}: {
  label: string;
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
  allLabel?: string;
  capitalize?: boolean;
}) {
  const items = [['all', allLabel], ...options.map((o) => [o, o])] as const;
  return (
    <div role="group" aria-label={label} className="text-[15px] leading-6">
      <span className="eyebrow mr-2 text-muted">{label}</span>
      {items.map(([key, text], i) => (
        <span key={key}>
          <button
            type="button"
            aria-pressed={value === key}
            onClick={() => onChange(key)}
            className={cn(
              'cursor-pointer transition-colors',
              capitalize && 'capitalize',
              value === key
                ? 'underline decoration-1 underline-offset-[3px]'
                : 'text-muted hover:text-foreground',
            )}
          >
            {text}
          </button>
          {i < items.length - 1 && (
            <span aria-hidden="true" className="text-muted">
              ,{' '}
            </span>
          )}
        </span>
      ))}
    </div>
  );
}
