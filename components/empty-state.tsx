export function EmptyState({
  title = 'No results found',
  description = 'Try a different search or clear your filters.',
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="col-span-full border-y border-foreground py-12">
      <h2 className="font-serif text-4xl tracking-[-0.03em]">({title})</h2>
      <p className="mt-3 text-[15px] text-muted">{description}</p>
    </div>
  );
}
