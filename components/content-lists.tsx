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
  EventRow,
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
            variant={tag === t ? 'ink' : 'outline'}
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
        className="mb-6 flex gap-6 border-b"
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
            variant="ghost"
            className={`-mb-px h-11 rounded-none border-b-2 px-0 text-sm uppercase tracking-[0.06em] hover:bg-transparent ${tab === t ? 'border-accent' : 'border-transparent text-muted hover:text-foreground'}`}
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
      <p className="mb-6 text-[13px] text-muted">
        Showing dates relative to October 13, 2026 (demo calendar). All events
        are fictional.
      </p>
      <div
        id="event-panel"
        role="tabpanel"
        aria-labelledby={`tab-${tab}`}
        className="border-t"
      >
        {list.map((e) => (
          <EventRow key={e.id} event={e} />
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
