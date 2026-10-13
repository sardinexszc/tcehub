/** Small-caps key : value columns, after Watson's partnership stats. */
export function StatRow({ items }: { items: [string, React.ReactNode][] }) {
  return (
    <dl className="grid grid-cols-2 gap-x-5 gap-y-5 border-t border-foreground pt-3 md:grid-cols-4">
      {items.map(([label, value]) => (
        <div key={label}>
          <dt className="meta text-muted">({label})</dt>
          <dd className="mt-1 text-[15px]">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
