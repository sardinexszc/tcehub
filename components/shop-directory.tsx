'use client';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { shops, generations } from '@/lib/mock-data';
import { FilterBar, type Filters } from '@/components/filter-bar';
import { ShopCard } from '@/components/shop-card';
import { MapPlaceholder } from '@/components/map-placeholder';
import { Pagination } from '@/components/pagination';
import { EmptyState } from '@/components/empty-state';
import { Button } from '@/components/ui/button';
const defaults: Filters = {
  search: '',
  category: 'all',
  generation: 'all',
  region: 'all',
};
/** Reads `?generation=XV40` (from the home lineup) as the starting filter. */
export function ShopDirectoryFromURL() {
  const generation = useSearchParams().get('generation');
  return (
    <ShopDirectory
      key={generation}
      initialGeneration={
        generation && generations.includes(generation) ? generation : undefined
      }
    />
  );
}
export function ShopDirectory({
  initialGeneration,
}: {
  initialGeneration?: string;
}) {
  const [filters, setFilters] = useState({
    ...defaults,
    generation: initialGeneration ?? 'all',
  });
  const [page, setPage] = useState(1);
  const filtered = shops.filter(
    (s) =>
      (filters.category === 'all' ||
        s.category.includes(filters.category as (typeof s.category)[number])) &&
      (filters.generation === 'all' ||
        s.generations.includes(filters.generation)) &&
      (filters.region === 'all' || s.region === filters.region) &&
      `${s.name} ${s.city} ${s.description}`
        .toLowerCase()
        .includes(filters.search.toLowerCase()),
  );
  const change = (f: Filters) => {
    setFilters(f);
    setPage(1);
  };
  return (
    <>
      <FilterBar
        filters={filters}
        onChange={change}
        regions={[...new Set(shops.map((s) => s.region))]}
      />
      <div className="mb-6 flex items-center justify-between border-b pb-3">
        <p role="status" className="text-sm">
          <span className="font-semibold">{filtered.length}</span>{' '}
          {filtered.length === 1 ? 'shop' : 'shops'}
          <span className="text-muted"> · demo listings</span>
        </p>
        <Button
          variant="ghost"
          size="sm"
          className="underline underline-offset-4"
          onClick={() => change(defaults)}
        >
          Clear filters
        </Button>
      </div>
      <div className="grid items-start gap-10 xl:grid-cols-[1fr_300px]">
        <div>
          <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2">
            {filtered.slice((page - 1) * 6, page * 6).map((s) => (
              <ShopCard key={s.id} shop={s} />
            ))}
            {!filtered.length && <EmptyState />}
          </div>
          <Pagination
            page={page}
            total={Math.ceil(filtered.length / 6)}
            onChange={setPage}
          />
        </div>
        <aside className="xl:sticky xl:top-28">
          <MapPlaceholder
            label="Map view coming soon"
            address="Until then, filter by region above."
          />
        </aside>
      </div>
    </>
  );
}
