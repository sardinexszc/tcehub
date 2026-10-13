export function EmptyState({
  title = 'Nothing matches those filters',
  description = 'Try a different search or clear your filters.',
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="panel col-span-full p-10 text-center md:p-16">
      <h2 className="text-[28px] font-medium tracking-[-0.03em]">{title}</h2>
      <p className="mx-auto mt-2 max-w-sm text-muted">{description}</p>
    </div>
  );
}
