import { SearchX } from 'lucide-react';
export function EmptyState({
  title = 'No results found',
  description = 'Try a different search or clear your filters.',
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="col-span-full rounded-xl border border-dashed bg-surface/50 py-16 text-center">
      <SearchX
        className="mx-auto mb-4 text-muted"
        size={28}
        aria-hidden="true"
      />
      <h2 className="font-medium">{title}</h2>
      <p className="mt-2 text-sm text-muted">{description}</p>
    </div>
  );
}
