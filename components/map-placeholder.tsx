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
        backgroundSize: '36px 36px',
      }}
    >
      <div className="rounded-full border bg-background p-4">
        <MapPin size={25} />
      </div>
      <p className="rounded bg-surface px-3 py-1 text-sm">{label}</p>
      <p className="rounded bg-surface px-3 text-xs">
        An interactive map is on the way.
      </p>
    </div>
  );
}
