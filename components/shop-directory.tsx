'use client';
import { useState } from 'react';
import { shops } from '@/lib/mock-data';
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
export function ShopDirectory() {
  const [filters, setFilters] = useState(defaults);
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
      <div className="mb-5 flex items-center justify-between">
        <p role="status" className="text-sm text-muted">
          {filtered.length} shops found · demo listings
        </p>
        <Button variant="ghost" size="sm" onClick={() => change(defaults)}>
          Reset filters
        </Button>
      </div>
      <div className="grid items-start gap-6 xl:grid-cols-[1fr_300px]">
        <div>
          <div className="grid gap-6 sm:grid-cols-2">
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
          <MapPlaceholder />
          <p className="mt-3 text-xs leading-5 text-muted">
            Browse by location now. Interactive pins will arrive with the map
            integration.
          </p>
        </aside>
      </div>
    </>
  );
}
