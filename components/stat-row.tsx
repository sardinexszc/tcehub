/** Eloqwnt-style figures: big value, small caption beneath. */
export function StatRow({
  items,
  tone = 'light',
}: {
  items: [string, React.ReactNode][];
  tone?: 'light' | 'night';
}) {
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
      {items.map(([label, value]) => (
        <div key={label} className="flex flex-col-reverse">
          <dt
            className={
              tone === 'night'
                ? 'mt-2 text-[13px] leading-tight text-white/55'
                : 'stat-caption'
            }
          >
            {label}
          </dt>
          <dd className="text-[clamp(1.4rem,2.4vw,2rem)] font-medium leading-tight tracking-[-0.03em]">
            {value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
