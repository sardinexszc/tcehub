export function EmptyState({
  title = 'No results',
  description = 'Try a different search or clear the filters.',
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="col-span-full border-y py-14">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="mt-1 text-sm text-muted">{description}</p>
    </div>
  );
}
