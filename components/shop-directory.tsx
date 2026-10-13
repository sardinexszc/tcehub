'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { shops, categories, generations } from '@/lib/mock-data';
import { SplitPage } from '@/components/split-page';
import { TextFilter } from '@/components/text-filter';
import { EmptyState } from '@/components/empty-state';
export function ShopDirectory() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [generation, setGeneration] = useState('all');
  const [preview, setPreview] = useState(shops[0]);
  const filtered = shops.filter(
    (s) =>
      (category === 'all' ||
        s.category.includes(category as (typeof s.category)[number])) &&
      (generation === 'all' || s.generations.includes(generation)) &&
      `${s.name} ${s.city} ${s.description}`
        .toLowerCase()
        .includes(search.toLowerCase()),
  );
  const regions = [...new Set(filtered.map((s) => s.region))];
  let n = 0;
  return (
    <SplitPage
      tint="cream"
      title="Trusted Hands"
      intro={
        <p>
          From routine care to your next build, these are the specialists fellow
          owners recommend. Every listing is independent and checked by the
          community before it lands here.
        </p>
      }
      aside={
        <>
          <div className="grid max-w-md gap-3">
            <label className="block">
              <span className="sr-only">Search shops</span>
              <input
                id="search"
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name or city…"
                className="w-full scroll-mt-28 border-b border-foreground bg-transparent py-2 text-[17px] placeholder:text-muted focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </label>
            <TextFilter
              label="Service"
              capitalize
              options={categories}
              value={category}
              onChange={setCategory}
            />
            <TextFilter
              label="Generation"
              options={generations}
              value={generation}
              onChange={setGeneration}
            />
          </div>
          <div className="mt-auto hidden items-end gap-5 lg:flex">
            <div className="relative aspect-[4/5] w-40 shrink-0 overflow-hidden bg-subtle">
              <Image
                key={preview.id}
                src={preview.images[0]}
                alt=""
                fill
                sizes="160px"
                className="animate-[fade_0.4s_ease-out] object-cover"
              />
            </div>
            <p className="meta pb-1">
              ({preview.name})
              <br />
              {preview.city} — {preview.region}
              <br />
              Rating : {preview.rating?.toFixed(1)} (demo)
              <br />
              Generations : {preview.generations.join(', ')}
            </p>
          </div>
        </>
      }
    >
      <p role="status" className="sr-only">
        {filtered.length} shops found
      </p>
      {!filtered.length && (
        <EmptyState description="Try a different search or clear your filters." />
      )}
      <div className="grid gap-16">
        {regions.map((region) => {
          const list = filtered.filter((s) => s.region === region);
          return (
            <section key={region} aria-labelledby={`region-${region}`}>
              <h2
                id={`region-${region}`}
                className="mb-6 text-5xl font-normal tracking-[-0.045em] md:text-7xl"
              >
                {region}
              </h2>
              <div className="grid grid-cols-[3rem_1fr] md:grid-cols-[1fr_3fr]">
                <span className="border-t border-foreground py-2 text-[15px]">
                  ({list.length})
                </span>
                <ul className="rule-list">
                  {list.map((s) => {
                    n += 1;
                    return (
                      <li key={s.id}>
                        <Link
                          href={`/shops/${s.slug}`}
                          onMouseEnter={() => setPreview(s)}
                          onFocus={() => setPreview(s)}
                          className="group grid grid-cols-[1fr_auto] items-baseline gap-x-4 py-2 text-[15px] md:grid-cols-[1.4fr_1fr_auto]"
                        >
                          <span className="decoration-1 underline-offset-[3px] group-hover:underline">
                            {s.name}
                          </span>
                          <span className="hidden text-muted md:block">
                            {s.city} · {s.category.join(', ')}
                          </span>
                          <span className="tabular-nums">{n}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </section>
          );
        })}
      </div>
    </SplitPage>
  );
}
