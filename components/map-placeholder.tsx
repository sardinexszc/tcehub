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
      className="relative grid aspect-[16/10] place-items-center overflow-hidden rounded-media bg-subtle bg-[linear-gradient(hsl(var(--line))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--line))_1px,transparent_1px)] bg-[size:44px_44px]"
    >
      <span className="grid size-12 place-items-center rounded-full bg-foreground text-surface ring-8 ring-foreground/10">
        <MapPin size={18} aria-hidden="true" />
      </span>
      <span className="absolute bottom-4 left-4 rounded-full bg-surface px-4 py-2 text-[14px] font-medium">
        {label}
      </span>
    </div>
  );
}
