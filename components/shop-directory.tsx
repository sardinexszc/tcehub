'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { shops, categories, generations } from '@/lib/mock-data';
import { sentence } from '@/lib/utils';
import { PageIntro } from '@/components/page-intro';
import { TextFilter } from '@/components/text-filter';
import { EmptyState } from '@/components/empty-state';
import { ArrowDisc } from '@/components/ui/button';
export function ShopDirectory() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [generation, setGeneration] = useState('all');
  const filtered = shops.filter(
    (s) =>
      (category === 'all' ||
        s.category.includes(category as (typeof s.category)[number])) &&
      (generation === 'all' || s.generations.includes(generation)) &&
      `${s.name} ${s.city} ${s.description}`
        .toLowerCase()
        .includes(search.toLowerCase()),
  );
  return (
    <div className="shell grid gap-3 md:gap-5">
      <PageIntro
        label="Shop directory"
        title="Find someone you can trust with your Camry"
        intro={
          <p>
            Every shop here was recommended by an owner. Filter by the work you
            need and the generation you drive.
          </p>
        }
      >
        <div className="grid gap-4">
          <label className="relative block max-w-xl">
            <span className="sr-only">Search shops</span>
            <Search
              size={18}
              aria-hidden="true"
              className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-muted"
            />
            <input
              id="search"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by shop name or city"
              className="h-12 w-full scroll-mt-28 rounded-full bg-subtle pl-12 pr-5 text-[16px] placeholder:text-muted"
            />
          </label>
          <TextFilter
            label="Service"
            options={categories}
            value={category}
            onChange={setCategory}
            allLabel="All services"
            capitalize
          />
          <TextFilter
            label="Generation"
            options={generations}
            value={generation}
            onChange={setGeneration}
            allLabel="All generations"
          />
        </div>
      </PageIntro>
      <p role="status" className="px-4 text-[15px] text-muted">
        {filtered.length === 1 ? '1 shop' : `${filtered.length} shops`} match
      </p>
      {!filtered.length ? (
        <EmptyState
          title="No shops match those filters"
          description="Try another service or generation, or clear the search."
        />
      ) : (
        <ul className="panel grid gap-px overflow-hidden bg-border sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((s) => (
            <li key={s.id} className="bg-surface">
              <Link
                href={`/shops/${s.slug}`}
                className="group flex h-full flex-col p-3"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-media bg-night">
                  <Image
                    src={s.images[0]}
                    alt={`${s.name}, illustrative image`}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  {s.featured && (
                    <span className="absolute left-3 top-3 rounded-full bg-surface px-3 py-1 text-[13px] font-medium">
                      Owner favourite
                    </span>
                  )}
                </div>
                <div className="flex flex-1 items-start justify-between gap-4 px-3 pb-3 pt-5">
                  <div>
                    <h2 className="text-[21px] font-medium leading-tight tracking-[-0.025em]">
                      {s.name}
                    </h2>
                    <p className="mt-1.5 text-[15px] text-muted">
                      {sentence(s.category.join(' and '))} in {s.city}
                    </p>
                  </div>
                  <span className="flex flex-col items-end">
                    <span className="text-[21px] font-medium tabular-nums tracking-[-0.03em]">
                      {s.rating?.toFixed(1)}
                    </span>
                    <span className="text-[12px] text-muted">rating</span>
                  </span>
                </div>
                <span className="mt-auto flex items-center justify-between border-t px-3 pt-3 text-[14px] text-muted">
                  Works on {s.generations.join(', ')}
                  <ArrowDisc tone="ink" className="size-7" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
