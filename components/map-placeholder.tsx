import { MapPin } from 'lucide-react';
export function MapPlaceholder({
  label = 'Map coming soon',
  address,
}: {
  label?: string;
  address?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className="relative flex min-h-56 items-end bg-subtle p-4"
      style={{
        backgroundImage:
          'linear-gradient(hsl(var(--border)) 1px, transparent 1px),linear-gradient(90deg,hsl(var(--border)) 1px,transparent 1px)',
        backgroundSize: '48px 48px',
      }}
    >
      <MapPin
        size={28}
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full fill-accent text-background"
      />
      <p className="bg-background px-3 py-2 text-[13px]">
        <span className="font-semibold">{label}</span>
        {address && <span className="block text-muted">{address}</span>}
      </p>
    </div>
  );
}
