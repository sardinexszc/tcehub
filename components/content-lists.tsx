'use client';
import { useState } from 'react';
import {
  journals,
  events,
  galleries,
  guides,
  generations,
  demoToday,
} from '@/lib/mock-data';
import {
  JournalCard,
  EventCard,
  GalleryCard,
  GuideCard,
} from '@/components/content-cards';
import { Button } from '@/components/ui/button';
import { FilterSelect } from '@/components/filter-bar';
import { EmptyState } from '@/components/empty-state';
export function JournalList() {
  const [tag, setTag] = useState('all');
  const list = journals.filter((j) => tag === 'all' || j.tags.includes(tag));
  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        {['all', ...new Set(journals.flatMap((j) => j.tags))].map((t) => (
          <Button
            key={t}
            variant={tag === t ? 'default' : 'outline'}
            size="sm"
            aria-pressed={tag === t}
            onClick={() => setTag(t)}
          >
            {t === 'all' ? 'All stories' : t}
          </Button>
        ))}
      </div>
      <div className="content-grid">
        {list.map((j) => (
          <JournalCard key={j.id} journal={j} />
        ))}
        {!list.length && <EmptyState />}
      </div>
    </>
  );
}
export function EventList() {
  const [tab, setTab] = useState('upcoming');
  const list = events.filter((e) =>
    tab === 'upcoming' ? e.date >= demoToday : e.date < demoToday,
  );
  return (
    <>
      <div
        className="mb-6 inline-flex gap-1 rounded-lg border bg-surface p-1"
        role="tablist"
        aria-label="Event timeline"
      >
        {['upcoming', 'past'].map((t) => (
          <Button
            key={t}
            role="tab"
            id={`tab-${t}`}
            aria-controls="event-panel"
            aria-selected={tab === t}
            tabIndex={tab === t ? 0 : -1}
            size="sm"
            variant={tab === t ? 'default' : 'ghost'}
            className="min-w-24 capitalize"
            onClick={() => setTab(t)}
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                const next = t === 'past' ? 'upcoming' : 'past';
                setTab(next);
                document.getElementById(`tab-${next}`)?.focus();
              }
            }}
          >
            {t}
          </Button>
        ))}
      </div>
      <p className="meta mb-8">
        Demo calendar reference: October 13, 2026. Events are fictional.
      </p>
      <div
        id="event-panel"
        role="tabpanel"
        aria-labelledby={`tab-${tab}`}
        className="content-grid"
      >
        {list.map((e) => (
          <EventCard key={e.id} event={e} />
        ))}
        {!list.length && <EmptyState title="No events yet" />}
      </div>
    </>
  );
}
export function GalleryList() {
  return (
    <div className="content-grid">
      {galleries.map((g) => (
        <GalleryCard key={g.id} gallery={g} />
      ))}
    </div>
  );
}
export function GuideList() {
  const [generation, setGeneration] = useState('all');
  const list = guides.filter(
    (g) => generation === 'all' || g.generation === generation,
  );
  return (
    <>
      <div className="mb-8 max-w-xs">
        <FilterSelect
          label="Generations"
          options={generations}
          value={generation}
          onChange={setGeneration}
        />
      </div>
      <div className="content-grid">
        {list.map((g) => (
          <GuideCard key={g.id} guide={g} />
        ))}
        {!list.length && (
          <EmptyState title="No guides for this generation yet" />
        )}
      </div>
    </>
  );
}
