'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  journals,
  events,
  galleries,
  guides,
  generations,
  demoToday,
} from '@/lib/mock-data';
import { formatDate } from '@/lib/utils';
import { GalleryCard } from '@/components/content-cards';
import { PageIntro } from '@/components/page-intro';
import { TextFilter } from '@/components/text-filter';
import { EmptyState } from '@/components/empty-state';
import { ArrowDisc } from '@/components/ui/button';
import { cn } from '@/lib/utils';
/** Case-study rows: copy beside framed media, alternating sides. */
export function JournalList() {
  const [tag, setTag] = useState('all');
  const tags = [...new Set(journals.flatMap((j) => j.tags))];
  const list = journals.filter((j) => tag === 'all' || j.tags.includes(tag));
  return (
    <div className="shell grid gap-3 md:gap-5">
      <PageIntro
        label="Build journals"
        title="What owners changed, and what they learned"
        intro={
          <p>
            Honest write-ups from people who did the work: the plan, the costs,
            and what they would do differently next time.
          </p>
        }
      >
        <TextFilter
          label="Filter stories"
          options={tags}
          value={tag}
          onChange={setTag}
          allLabel="All stories"
        />
      </PageIntro>
      {!list.length ? (
        <EmptyState />
      ) : (
        <div className="panel divide-y p-3 md:p-4">
          {list.map((j, i) => (
            <article
              key={j.id}
              className="grid items-center gap-6 p-3 py-8 md:grid-cols-2 md:gap-14 md:p-8"
            >
              <div className={i % 2 ? 'md:order-2' : ''}>
                <p className="label text-muted">{j.tags.join(', ')}</p>
                <h2 className="mt-4 text-[clamp(2rem,3.6vw,3rem)] font-medium leading-[1.02] tracking-[-0.04em]">
                  <Link
                    href={`/journals/${j.slug}`}
                    className="hover:underline"
                  >
                    {j.title}
                  </Link>
                </h2>
                <p className="mt-4 max-w-md text-muted">{j.excerpt}</p>
                <p className="mt-6 text-[15px]">
                  {j.author}
                  <span className="text-muted">, {formatDate(j.date)}</span>
                </p>
              </div>
              <Link
                href={`/journals/${j.slug}`}
                tabIndex={-1}
                aria-hidden="true"
                className="group relative block aspect-[4/3] overflow-hidden rounded-media bg-night"
              >
                <Image
                  src={j.coverImage}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <ArrowDisc className="absolute right-4 top-4" />
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
/** Night panel calendar with upcoming / past tabs. */
export function EventList() {
  const [tab, setTab] = useState<'upcoming' | 'past'>('upcoming');
  const count = (t: 'upcoming' | 'past') =>
    events.filter((e) =>
      t === 'upcoming' ? e.date >= demoToday : e.date < demoToday,
    ).length;
  const list = events
    .filter((e) =>
      tab === 'upcoming' ? e.date >= demoToday : e.date < demoToday,
    )
    .sort((a, b) =>
      tab === 'upcoming'
        ? a.date.localeCompare(b.date)
        : b.date.localeCompare(a.date),
    );
  const fmt = (d: string, o: Intl.DateTimeFormatOptions) =>
    new Intl.DateTimeFormat('en-PH', { ...o, timeZone: 'Asia/Manila' }).format(
      new Date(d),
    );
  return (
    <div className="shell">
      <PageIntro
        tone="night"
        label="Meets and events"
        title={
          <span className="display text-[clamp(3.25rem,8vw,7rem)]">
            See you on the road.
          </span>
        }
        intro={
          <p>
            Coffee runs, show-and-shines, and cruises for Camry owners. Every
            meet is free and open to all generations. Dates are demo content.
          </p>
        }
      >
        <div
          role="tablist"
          aria-label="Event timeline"
          className="inline-flex gap-1 rounded-full bg-white/10 p-1"
        >
          {(['upcoming', 'past'] as const).map((t) => (
            <button
              key={t}
              role="tab"
              id={`tab-${t}`}
              aria-selected={tab === t}
              aria-controls="event-panel"
              tabIndex={tab === t ? 0 : -1}
              onClick={() => setTab(t)}
              onKeyDown={(e) => {
                if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                  const next = t === 'past' ? 'upcoming' : 'past';
                  setTab(next);
                  document.getElementById(`tab-${next}`)?.focus();
                }
              }}
              className={cn(
                'h-10 cursor-pointer rounded-full px-5 text-[15px] font-medium transition-colors',
                tab === t ? 'bg-white text-foreground' : 'text-white/70',
              )}
            >
              {t === 'upcoming' ? 'Upcoming' : 'Past'} ({count(t)})
            </button>
          ))}
        </div>
        <ul
          id="event-panel"
          role="tabpanel"
          aria-labelledby={`tab-${tab}`}
          className="mt-8 divide-y divide-white/15 border-y border-white/15"
        >
          {list.map((e) => (
            <li key={e.id}>
              <Link
                href={`/events/${e.slug}`}
                className="group grid grid-cols-[4rem_1fr_auto] items-center gap-4 px-2 py-5 transition-colors hover:bg-white/[0.06] md:grid-cols-[5rem_1.3fr_1fr_6rem_auto] md:px-4"
              >
                <span className="leading-none">
                  <span className="block text-[13px] text-white/55">
                    {fmt(e.date, { month: 'short' })}
                  </span>
                  <span className="mt-1 block text-4xl font-medium tabular-nums tracking-[-0.04em]">
                    {fmt(e.date, { day: '2-digit' })}
                  </span>
                </span>
                <span className="text-[21px] font-medium tracking-[-0.02em]">
                  {e.title}
                  <span className="mt-1 block text-[15px] font-normal text-white/55 md:hidden">
                    {e.location}
                  </span>
                </span>
                <span className="hidden text-[15px] text-white/55 md:block">
                  {e.location}
                </span>
                <span className="hidden text-[15px] capitalize text-white/55 md:block">
                  {e.type}
                </span>
                <ArrowDisc className="opacity-60 transition-opacity group-hover:opacity-100" />
              </Link>
            </li>
          ))}
        </ul>
        {!list.length && (
          <p className="py-10 text-white/60">No meets on the calendar yet.</p>
        )}
      </PageIntro>
    </div>
  );
}
export function GalleryList() {
  return (
    <div className="shell grid gap-3 md:gap-5">
      <PageIntro
        label="Galleries"
        title="Camrys, caught on camera"
        intro={
          <p>
            Photo sets from meets, drives, and garages, shared by members of the
            hub.
          </p>
        }
      />
      <div className="content-grid">
        {galleries.map((g) => (
          <GalleryCard key={g.id} gallery={g} />
        ))}
      </div>
    </div>
  );
}
/** Text-first cell grid, AegisAI style. */
export function GuideList() {
  const [generation, setGeneration] = useState('all');
  const list = guides.filter(
    (g) => generation === 'all' || g.generation === generation,
  );
  return (
    <div className="shell grid gap-3 md:gap-5">
      <PageIntro
        label="Ownership guides"
        title="Know your Camry before you buy, fix, or modify it"
        intro={
          <p>
            Plain-language starting points from the community. Always confirm
            the details with a qualified mechanic.
          </p>
        }
      >
        <TextFilter
          label="Generation"
          options={generations}
          value={generation}
          onChange={setGeneration}
          allLabel="All generations"
        />
      </PageIntro>
      {!list.length ? (
        <EmptyState
          title="No guides for this generation yet"
          description="Choose another generation, or suggest a topic through the contact page."
        />
      ) : (
        <ul className="panel grid gap-px overflow-hidden bg-border sm:grid-cols-2 lg:grid-cols-3">
          {list.map((g) => (
            <li key={g.id} className="bg-surface">
              <Link
                href={`/guides/${g.slug}`}
                className="group flex h-full min-h-[260px] flex-col p-6 md:p-8"
              >
                <span className="flex items-center justify-between text-[14px] text-muted">
                  {g.category}
                  <span className="rounded-full bg-subtle px-3 py-1 font-medium text-foreground">
                    {g.generation}
                  </span>
                </span>
                <h2 className="mt-auto pt-10 text-[clamp(1.6rem,2.4vw,2rem)] font-medium leading-[1.08] tracking-[-0.03em] group-hover:underline">
                  {g.title}
                </h2>
                <p className="mt-3 text-[15px] text-muted">{g.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
