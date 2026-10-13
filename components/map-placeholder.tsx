import { MapPin } from 'lucide-react';
export function MapPlaceholder({
  label = 'Map coming soon',
}: {
  label?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className="flex min-h-64 flex-col items-center justify-center gap-3 rounded-xl border bg-surface text-muted"
      style={{
        backgroundImage:
          'linear-gradient(hsl(var(--border)) 1px, transparent 1px),linear-gradient(90deg,hsl(var(--border)) 1px,transparent 1px)',
        backgroundSize: '32px 32px',
      }}
    >
      <div className="rounded-md bg-accent p-3 text-accent-foreground">
        <MapPin size={22} aria-hidden="true" />
      </div>
      <p className="rounded bg-surface px-3 py-1 text-sm font-medium text-foreground">
        {label}
      </p>
      <p className="rounded bg-surface px-3 text-xs">
        An interactive map is on the way.
      </p>
    </div>
  );
}
