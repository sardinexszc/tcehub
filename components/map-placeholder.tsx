export function MapPlaceholder({
  label = 'Map coming soon',
}: {
  label?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className="relative flex aspect-[16/9] items-end justify-between border border-foreground p-4 text-[15px]"
      style={{
        backgroundImage:
          'linear-gradient(hsl(var(--foreground) / 0.08) 1px, transparent 1px),linear-gradient(90deg,hsl(var(--foreground) / 0.08) 1px,transparent 1px)',
        backgroundSize: '48px 48px',
      }}
    >
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground ring-8 ring-foreground/10"
      />
      <span>({label})</span>
      <span className="meta">Interactive map on the way</span>
    </div>
  );
}
