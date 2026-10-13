'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import { HalftoneCar } from '@/components/halftone-car';
import { cutouts, events, demoToday, shops, guides } from '@/lib/mock-data';
import { formatDate } from '@/lib/utils';
import { cn } from '@/lib/utils';
const areas = [
  {
    title: 'Trusted shops',
    href: '/shops',
    body: `${shops.length} independent specialists recommended by owners, filtered by service and generation.`,
    car: cutouts[0],
  },
  {
    title: 'Build journals',
    href: '/journals',
    body: 'Owners explain what they changed, what it cost, and what they would do differently.',
    car: cutouts[3],
  },
  {
    title: 'Weekend meets',
    href: '/events',
    body: 'Coffee runs, show-and-shines, and cruises around Luzon. Bring the car, bring a friend.',
    car: cutouts[1],
  },
  {
    title: 'Ownership guides',
    href: '/guides',
    body: `${guides.length} plain-language guides on buying, inspecting, and keeping a Camry healthy.`,
    car: cutouts[2],
  },
];
/** AegisAI-style panel: visible cell grid, halftone object, and a linked list on the right. */
export function HubExplorer() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const upcoming = events
    .filter((e) => e.date >= demoToday)
    .sort((a, b) => a.date.localeCompare(b.date));
  useEffect(() => {
    if (paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(
      () => setActive((n) => (n + 1) % areas.length),
      4500,
    );
    return () => window.clearInterval(id);
  }, [paused]);
  return (
    <section aria-labelledby="explore-title" className="shell mt-3 md:mt-5">
      <div className="panel grid overflow-hidden lg:grid-cols-[1fr_1.25fr_1fr] lg:grid-rows-[auto_1fr_auto]">
        <div className="border-b p-6 md:p-8 lg:border-r">
          <h2 id="explore-title" className="heading max-w-[13ch]">
            Everything a Camry owner needs, in one place
          </h2>
          <p className="mt-4 max-w-sm text-muted">
            Find someone you can trust with your car, learn from people who have
            done it before, and meet them on the weekend.
          </p>
        </div>
        <div className="relative min-h-[300px] border-b bg-[linear-gradient(hsl(var(--line)/0.6)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--line)/0.6)_1px,transparent_1px)] bg-[size:56px_56px] sm:min-h-[380px] lg:row-span-3 lg:border-r">
          <HalftoneCar
            key={areas[active].car}
            src={areas[active].car}
            label={`Halftone illustration of a Camry for ${areas[active].title}`}
            className="absolute inset-x-4 bottom-6 top-6 h-[calc(100%-3rem)] w-[calc(100%-2rem)] animate-[fade_0.6s_ease-out] text-foreground"
          />
        </div>
        <ul
          className="border-b lg:row-span-2"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {areas.map((a, i) => (
            <li key={a.href} className="border-b last:border-b-0">
              <Link
                href={a.href}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                aria-describedby={`area-${i}`}
                className="group relative block px-6 py-5 md:px-8"
              >
                {i === active && (
                  <span
                    aria-hidden="true"
                    className="absolute right-full top-[30px] hidden w-16 items-center lg:flex"
                  >
                    <span className="size-2 rounded-full bg-tail" />
                    <span className="h-px flex-1 bg-foreground" />
                  </span>
                )}
                <span
                  className={cn(
                    'block text-[19px] font-medium tracking-[-0.02em] transition-colors',
                    i === active ? 'text-foreground' : 'text-muted',
                  )}
                >
                  {a.title}
                </span>
                <span
                  id={`area-${i}`}
                  className={cn(
                    'mt-1.5 block max-w-xs text-[15px] leading-snug text-muted transition-opacity',
                    i === active ? 'opacity-100' : 'sr-only',
                  )}
                >
                  {a.body}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex flex-col justify-end gap-4 border-b p-6 md:p-8 lg:col-start-1 lg:row-span-2 lg:row-start-2 lg:border-b-0 lg:border-r">
          {upcoming[0] && (
            <Link href={`/events/${upcoming[0].slug}`} className="group">
              <span className="flex -space-x-3">
                {upcoming.slice(0, 4).map((e) => (
                  <span
                    key={e.id}
                    className="relative size-10 overflow-hidden rounded-full border-2 border-surface bg-subtle"
                  >
                    <Image
                      src={e.coverImage}
                      alt=""
                      fill
                      sizes="40px"
                      className="object-cover"
                    />
                  </span>
                ))}
              </span>
              <span className="mt-4 block text-[19px] font-medium tracking-[-0.02em] group-hover:underline">
                Next meet: {upcoming[0].title}
              </span>
              <span className="mt-1 block text-[15px] text-muted">
                {formatDate(upcoming[0].date)}, {upcoming[0].location}
              </span>
            </Link>
          )}
        </div>
        <a
          href="#about"
          className="flex items-center justify-between px-6 py-5 text-[15px] text-muted transition-colors hover:text-foreground md:px-8 lg:col-start-3 lg:border-t"
        >
          Scroll down
          <ArrowDown size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
