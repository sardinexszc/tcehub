'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  journals,
  events,
  galleries,
  guides,
  generations,
  demoToday,
  cutouts,
} from '@/lib/mock-data';
import { formatDate } from '@/lib/utils';
import { GalleryCard } from '@/components/content-cards';
import { SplitPage } from '@/components/split-page';
import { TextFilter } from '@/components/text-filter';
import { EmptyState } from '@/components/empty-state';
import { cn } from '@/lib/utils';
const pad = (n: number) => String(n).padStart(2, '0');
/** Index of rows; a preview image appears beside the hovered row on large screens. */
export function JournalList() {
  const [tag, setTag] = useState('all');
  const tags = [...new Set(journals.flatMap((j) => j.tags))];
  const list = journals.filter((j) => tag === 'all' || j.tags.includes(tag));
  return (
    <div data-tint="white" className="container-shell pt-8 md:pt-14">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-5">
        <h1 className="page-title">(Behind the Build)</h1>
        <div className="grid content-end gap-4">
          <p className="max-w-[23rem] indent-[4.5em] leading-[1.3]">
            Stories, decisions, and lessons from the people behind the wheel —
            written by owners, for owners.
          </p>
          <TextFilter
            label="Filter"
            options={tags}
            value={tag}
            onChange={setTag}
            allLabel="All stories"
          />
        </div>
      </div>
      <ol className="rule-list mt-16 md:mt-24">
        {list.map((j, i) => (
          <li key={j.id}>
            <Link
              href={`/journals/${j.slug}`}
              className="group relative grid grid-cols-[2.5rem_1fr] gap-x-4 gap-y-2 py-5 md:grid-cols-[1fr_2fr_1fr] md:items-baseline md:gap-x-5"
            >
              <span className="text-[15px]">({pad(i + 1)})</span>
              <span className="font-serif text-3xl leading-[1.02] tracking-[-0.03em] decoration-1 underline-offset-[0.12em] group-hover:underline md:text-5xl">
                {j.title}
              </span>
              <span className="meta col-start-2 md:col-start-auto md:text-right">
                {j.author}
                <br />
                {formatDate(j.date)} — {j.tags.join(', ')}
              </span>
              <span className="pointer-events-none absolute right-[18%] top-1/2 z-10 hidden aspect-[4/5] w-44 -translate-y-1/2 rotate-2 overflow-hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100 lg:block">
                <Image
                  src={j.coverImage}
                  alt=""
                  fill
                  sizes="176px"
                  className="object-cover"
                />
              </span>
            </Link>
          </li>
        ))}
      </ol>
      {!list.length && <EmptyState />}
    </div>
  );
}
/** Partnerships-style scroller: pinned "TCEHub ×", serif list, image + stats for the centred item. */
export function EventList() {
  const [tab, setTab] = useState<'upcoming' | 'past'>('upcoming');
  const list = events
    .filter((e) =>
      tab === 'upcoming' ? e.date >= demoToday : e.date < demoToday,
    )
    .sort((a, b) =>
      tab === 'upcoming'
        ? a.date.localeCompare(b.date)
        : b.date.localeCompare(a.date),
    );
  const [active, setActive] = useState(0);
  const items = useRef<(HTMLLIElement | null)[]>([]);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const mid = window.innerHeight / 2;
      let best = 0;
      let bestDist = Infinity;
      items.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const d = Math.abs(r.top + r.height / 2 - mid);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      setActive(best);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, [tab]);
  const current = list[Math.min(active, list.length - 1)];
  return (
    <div data-tint="blush" className="container-shell">
      <div className="grid gap-6 pt-8 md:grid-cols-[1fr_1fr_1fr] md:pt-14">
        <h1 className="page-title md:col-span-2">(The Calendar)</h1>
        <div className="grid content-end gap-3 text-[15px]">
          <div
            role="tablist"
            aria-label="Event timeline"
            className="flex gap-4"
          >
            {(['upcoming', 'past'] as const).map((t) => (
              <button
                key={t}
                role="tab"
                id={`tab-${t}`}
                aria-selected={tab === t}
                aria-controls="event-panel"
                tabIndex={tab === t ? 0 : -1}
                onClick={() => {
                  setTab(t);
                  setActive(0);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                    const next = t === 'past' ? 'upcoming' : 'past';
                    setTab(next);
                    document.getElementById(`tab-${next}`)?.focus();
                  }
                }}
                className={cn(
                  'cursor-pointer capitalize',
                  tab === t
                    ? 'underline decoration-1 underline-offset-[3px]'
                    : 'text-muted hover:text-foreground',
                )}
              >
                {t} (
                {
                  events.filter((e) =>
                    t === 'upcoming' ? e.date >= demoToday : e.date < demoToday,
                  ).length
                }
                )
              </button>
            ))}
          </div>
          <p className="meta text-muted">
            Demo calendar · reference date Oct 13, 2026
          </p>
        </div>
      </div>
      <div
        id="event-panel"
        role="tabpanel"
        aria-labelledby={`tab-${tab}`}
        className="relative mt-10"
      >
        {current && (
          <div
            aria-hidden="true"
            className="pointer-events-none sticky top-0 -mb-[100svh] hidden h-[100svh] md:block"
          >
            <div className="absolute inset-x-[18%] inset-y-[16%]">
              <Image
                key={current.id}
                src={cutouts[events.indexOf(current) % cutouts.length]}
                alt=""
                fill
                sizes="60vw"
                className="animate-[fade_0.5s_ease-out] object-contain opacity-60 grayscale"
              />
            </div>
            <span className="absolute left-[16.6%] top-1/2 -translate-y-1/2 font-serif text-[clamp(3rem,6.5vw,7rem)] leading-none tracking-[-0.04em]">
              TCEHub <span className="font-sans text-[0.3em]">×</span>
            </span>
            <div className="meta absolute bottom-6 left-[8.3%] grid grid-cols-2 gap-x-10">
              <span>
                ({current.title})
                <br />
                Community {current.type}
              </span>
              <span>
                Date : {formatDate(current.date)}
                <br />
                Time : 7:00 AM PHT
                <br />
                Venue : {current.location}
              </span>
            </div>
          </div>
        )}
        <ol className="relative md:ml-[50%] md:py-[42svh]">
          {list.map((e, i) => (
            <li
              key={e.id}
              ref={(el) => {
                items.current[i] = el;
              }}
              className="border-b border-foreground/20 py-3 md:border-0 md:py-0"
            >
              <Link
                href={`/events/${e.slug}`}
                className={cn(
                  'block font-serif text-[clamp(2.4rem,6.5vw,7rem)] leading-[1.02] tracking-[-0.04em] transition-opacity duration-300 hover:opacity-60',
                  i !== active && 'md:opacity-25',
                )}
              >
                {e.title}
              </Link>
              <span className="meta mt-1 block md:hidden">
                {formatDate(e.date)} — {e.location}
              </span>
            </li>
          ))}
        </ol>
        {!list.length && <EmptyState title="No events yet" />}
      </div>
    </div>
  );
}
export function GalleryList() {
  return (
    <SplitPage
      tint="stone"
      title="Through the Lens"
      intro={
        <p>
          Community gatherings, memorable roads, and details worth a closer look
          — captured by members and shared with the hub.
        </p>
      }
    >
      <div className="grid gap-x-5 gap-y-12 sm:grid-cols-2">
        {galleries.map((g, i) => (
          <GalleryCard key={g.id} gallery={g} index={i} />
        ))}
      </div>
    </SplitPage>
  );
}
/** Capabilities-style groups: large sans heading, count, ruled numbered rows. */
export function GuideList() {
  const [generation, setGeneration] = useState('all');
  const list = guides.filter(
    (g) => generation === 'all' || g.generation === generation,
  );
  const groups = [...new Set(list.map((g) => g.category))];
  return (
    <SplitPage
      tint="cream"
      title="Know Your Camry"
      intro={
        <p>
          Practical starting points for buying, maintaining, and enjoying your
          car. General orientation from the community — always confirm details
          with a qualified mechanic.
        </p>
      }
      aside={
        <div className="max-w-md">
          <TextFilter
            label="Generation"
            options={generations}
            value={generation}
            onChange={setGeneration}
          />
        </div>
      }
    >
      <div className="grid gap-16">
        {groups.map((group) => {
          const rows = list.filter((g) => g.category === group);
          return (
            <section key={group} aria-labelledby={`group-${group}`}>
              <h2
                id={`group-${group}`}
                className="mb-6 text-5xl font-normal tracking-[-0.045em] md:text-7xl"
              >
                {group} <span aria-hidden="true">→</span>
              </h2>
              <div className="grid grid-cols-[3rem_1fr] md:grid-cols-[1fr_3fr]">
                <span className="border-t border-foreground py-2 text-[15px]">
                  ({rows.length})
                </span>
                <ul className="rule-list">
                  {rows.map((g, i) => (
                    <li key={g.id}>
                      <Link
                        href={`/guides/${g.slug}`}
                        className="group grid grid-cols-[1fr_auto] items-baseline gap-x-4 py-2 text-[15px] md:grid-cols-[1.6fr_1fr_auto]"
                      >
                        <span className="decoration-1 underline-offset-[3px] group-hover:underline">
                          {g.title}
                        </span>
                        <span className="hidden text-muted md:block">
                          {g.generation}
                        </span>
                        <span className="tabular-nums">{i + 1}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          );
        })}
        {!list.length && (
          <EmptyState title="No guides for this generation yet" />
        )}
      </div>
    </SplitPage>
  );
}
