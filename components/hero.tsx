'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarDays,
  Gauge,
  Images,
  Info,
  NotebookPen,
  Store,
  type LucideIcon,
} from 'lucide-react';
import {
  shops,
  guides,
  journals,
  galleries,
  events,
  generations,
  demoToday,
} from '@/lib/mock-data';
import { cn } from '@/lib/utils';
const years: Record<string, string> = {
  XV10: '1991 – 1996',
  XV20: '1996 – 2001',
  XV30: '2001 – 2006',
  XV40: '2006 – 2011',
  XV50: '2011 – 2017',
  XV70: '2017 – 2024',
  XV80: '2024 – present',
};
// Hotspot positions are percentages of the car stage; tune them when the real photo lands.
const hotspots = [
  { label: 'Build journals', href: '/journals', x: 47, y: 30, side: 'right' },
  { label: 'Weekend meets', href: '/events', x: 13, y: 62, side: 'right' },
  { label: 'Ownership guides', href: '/guides', x: 60, y: 68, side: 'left' },
  { label: 'Trusted shops', href: '/shops', x: 76.5, y: 76, side: 'right' },
] as const;
const shortDate = (date: string) =>
  new Intl.DateTimeFormat('en-PH', {
    month: 'short',
    day: 'numeric',
    timeZone: 'Asia/Manila',
  }).format(new Date(date));
function IconDisc({
  icon: Icon,
  inverted = false,
}: {
  icon: LucideIcon;
  inverted?: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'grid size-11 shrink-0 place-items-center rounded-full border',
        inverted
          ? 'border-white/15 bg-white/10 text-white'
          : 'bg-surface text-foreground',
      )}
    >
      <Icon size={18} strokeWidth={1.75} />
    </span>
  );
}
export function Hero() {
  const [gen, setGen] = useState('XV70');
  const upcoming = events
    .filter((e) => e.date >= demoToday)
    .sort((a, b) => a.date.localeCompare(b.date));
  const next = upcoming[0];
  const genShops = shops.filter((s) => s.generations.includes(gen)).length;
  const genGuides = guides.filter((g) => g.generation === gen).length;
  const highlights: {
    icon: LucideIcon;
    label: string;
    value: string;
    unit: string;
    caption: string;
    href: string;
    dark?: boolean;
  }[] = [
    {
      icon: Store,
      label: 'Specialists',
      value: String(genShops),
      unit: genShops === 1 ? 'shop' : 'shops',
      caption: `Servicing the ${gen}`,
      href: '/shops',
    },
    {
      icon: BookOpen,
      label: 'Guides',
      value: String(genGuides),
      unit: genGuides === 1 ? 'guide' : 'guides',
      caption: genGuides ? `Written for the ${gen}` : 'More on the way',
      href: '/guides',
    },
    {
      icon: CalendarDays,
      label: 'Gatherings',
      value: String(upcoming.length),
      unit: 'upcoming',
      caption: next ? `Next · ${shortDate(next.date)}` : 'Calendar coming soon',
      href: '/events',
    },
    {
      icon: NotebookPen,
      label: 'Build journals',
      value: String(journals.length),
      unit: 'stories',
      caption: 'From the driver’s seat',
      href: '/journals',
      dark: true,
    },
    {
      icon: Images,
      label: 'Galleries',
      value: String(galleries.length),
      unit: 'albums',
      caption: 'Captured by the community',
      href: '/galleries',
    },
    {
      icon: Gauge,
      label: 'Generations',
      value: String(generations.length),
      unit: 'covered',
      caption: 'XV10 — XV80',
      href: '/guides',
    },
  ];
  const rail = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });
  const updateEdges = () => {
    const el = rail.current;
    if (!el) return;
    setEdges({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    });
  };
  useEffect(() => {
    updateEdges();
    window.addEventListener('resize', updateEdges);
    return () => window.removeEventListener('resize', updateEdges);
  }, []);
  const scrollRail = (dir: 1 | -1) => {
    const reduce = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    rail.current?.scrollBy({
      left: dir * 296,
      behavior: reduce ? 'auto' : 'smooth',
    });
  };
  return (
    <section
      aria-labelledby="hero-title"
      className="container-shell pt-8 md:pt-12"
    >
      <div className="grid gap-6 lg:grid-cols-[150px_minmax(0,1fr)_280px] lg:gap-x-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-4">
            <h1
              id="hero-title"
              className="text-[2.75rem] font-semibold leading-none tracking-[-0.045em] sm:text-6xl md:text-7xl"
            >
              Toyota Camry
            </h1>
            <Link
              href="/about"
              aria-label="About TCEHub"
              className="grid size-11 shrink-0 place-items-center rounded-full border bg-surface transition-colors hover:border-foreground/40"
            >
              <Info size={18} strokeWidth={1.75} aria-hidden="true" />
            </Link>
          </div>
          <p aria-live="polite" className="mt-3 text-lg text-muted">
            {gen} · {years[gen]}
            <span className="hidden sm:inline">
              {' '}
              — every generation, one community
            </span>
          </p>
        </div>
        <aside className="order-last grid gap-3 sm:grid-cols-2 lg:order-none lg:col-start-3 lg:row-span-2 lg:row-start-1 lg:grid-cols-1 lg:content-start">
          {next && (
            <Link
              href={`/events/${next.slug}`}
              className="group overflow-hidden rounded-3xl border bg-surface transition-colors hover:border-foreground/30"
            >
              <span className="flex items-center gap-3 rounded-3xl bg-foreground p-2.5 pr-5 text-background">
                <IconDisc icon={CalendarDays} inverted />
                <span className="text-sm font-medium">Next gathering</span>
                <span className="ml-auto font-mono text-[11px] uppercase tracking-[0.12em] text-background/70">
                  {shortDate(next.date)}
                </span>
              </span>
              <span className="block px-5 pb-5 pt-4">
                <span className="block font-medium">{next.title}</span>
                <span className="mt-1.5 block text-sm leading-6 text-muted">
                  {next.location} · 7:00 AM. Bring the car, bring a friend.
                </span>
              </span>
            </Link>
          )}
          <Link
            href="/contact#submit-shop"
            className="flex items-center gap-3 self-start rounded-full border bg-surface p-2 pr-6 text-sm font-medium transition-colors hover:border-foreground/40"
          >
            <IconDisc icon={Store} />
            Submit a Shop
            <ArrowRight
              size={16}
              aria-hidden="true"
              className="ml-auto text-muted"
            />
          </Link>
        </aside>
        <div
          role="group"
          aria-label="Choose a Camry generation"
          className="-mx-4 flex gap-2 overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 [&::-webkit-scrollbar]:hidden sm:px-0 lg:col-start-1 lg:row-start-2 lg:flex-col lg:self-center lg:overflow-visible"
        >
          {generations.map((g) => (
            <button
              key={g}
              type="button"
              aria-pressed={gen === g}
              onClick={() => setGen(g)}
              className={cn(
                'h-11 shrink-0 cursor-pointer rounded-full border px-5 text-sm transition-colors duration-200 lg:w-full',
                gen === g
                  ? 'border-foreground bg-foreground font-medium text-background'
                  : 'bg-surface hover:border-foreground/40',
              )}
            >
              {g}
            </button>
          ))}
        </div>
        <div className="relative lg:col-start-2 lg:row-start-2">
          <svg
            aria-hidden="true"
            viewBox="0 0 400 400"
            className="pointer-events-none absolute left-1/2 top-1/2 -z-10 w-[min(560px,90%)] -translate-x-1/2 -translate-y-1/2 text-foreground/[0.07]"
          >
            <circle
              cx="200"
              cy="200"
              r="196"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            />
            <circle
              cx="200"
              cy="200"
              r="150"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>
          <p className="mb-4 max-w-[17rem] rounded-3xl border bg-surface/85 px-5 py-4 text-sm leading-6 text-muted backdrop-blur md:absolute md:left-2 md:top-0 md:z-10 md:mb-0">
            Specialists worth trusting, builds worth reading, and gatherings
            worth the drive — for every Camry on the road.
          </p>
          <div className="md:pt-32 lg:pt-28">
            <div className="relative lg:-mx-4">
              <Image
                src="/images/camry-cutout.svg"
                alt="Illustration of a silver Camry sedan in side profile"
                width={1200}
                height={460}
                priority
                className="h-auto w-full select-none"
              />
              {hotspots.map((h) => (
                <Link
                  key={h.href}
                  href={h.href}
                  style={{ left: `${h.x}%`, top: `${h.y}%` }}
                  className={cn(
                    'group absolute hidden -translate-y-1/2 items-center gap-2 md:flex',
                    h.side === 'left'
                      ? '-translate-x-[calc(100%-1.25rem)] flex-row-reverse'
                      : '-translate-x-5',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="grid size-10 place-items-center rounded-full bg-foreground/15 backdrop-blur-md transition-colors group-hover:bg-accent"
                  >
                    <span className="size-3 rounded-full bg-foreground ring-4 ring-surface/70" />
                  </span>
                  <span className="whitespace-nowrap rounded-full border border-white/40 bg-foreground/55 px-4 py-2 text-[13px] text-white backdrop-blur-md transition-colors group-hover:bg-foreground">
                    {h.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <nav
            aria-label="Explore TCEHub"
            className="mt-6 flex flex-wrap gap-2 md:hidden"
          >
            {hotspots.map((h) => (
              <Link
                key={h.href}
                href={h.href}
                className="flex items-center gap-2 rounded-full border bg-surface py-2 pl-2 pr-4 text-sm"
              >
                <span
                  aria-hidden="true"
                  className="size-2.5 rounded-full bg-foreground ring-4 ring-accent"
                />
                {h.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="mt-12 md:mt-16">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
              Community highlights
            </h2>
            <span className="hidden rounded-full border bg-surface px-3 py-1 font-mono text-[11px] uppercase tracking-[0.12em] text-muted sm:inline">
              {gen}
            </span>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous highlights"
              disabled={edges.start}
              onClick={() => scrollRail(-1)}
              className="grid size-11 cursor-pointer place-items-center rounded-full border bg-surface transition-colors hover:border-foreground/40 disabled:cursor-default disabled:opacity-40"
            >
              <ArrowLeft size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next highlights"
              disabled={edges.end}
              onClick={() => scrollRail(1)}
              className="grid size-11 cursor-pointer place-items-center rounded-full border bg-surface transition-colors hover:border-foreground/40 disabled:cursor-default disabled:opacity-40"
            >
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
        <div
          ref={rail}
          onScroll={updateEdges}
          className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
        >
          {highlights.map((h) => (
            <Link
              key={h.label}
              href={h.href}
              className={cn(
                'flex h-[184px] w-[260px] shrink-0 snap-start flex-col justify-between rounded-3xl border p-5 transition-colors sm:w-[284px]',
                h.dark
                  ? 'border-foreground bg-foreground text-background hover:bg-foreground/90'
                  : 'bg-surface hover:border-foreground/30',
              )}
            >
              <span className="flex items-start justify-between gap-3">
                <IconDisc icon={h.icon} inverted={h.dark} />
                <span
                  className={cn(
                    'text-right text-sm',
                    h.dark ? 'text-background/70' : 'text-muted',
                  )}
                >
                  {h.label}
                </span>
              </span>
              <span>
                <span className="flex items-baseline gap-2">
                  <span className="text-5xl font-medium tabular-nums tracking-[-0.05em]">
                    {h.value}
                  </span>
                  <span
                    className={cn(
                      'text-lg',
                      h.dark ? 'text-background/60' : 'text-muted',
                    )}
                  >
                    {h.unit}
                  </span>
                </span>
                <span
                  className={cn(
                    'mt-1 block text-sm',
                    h.dark ? 'text-background/70' : 'text-muted',
                  )}
                >
                  {h.caption}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
