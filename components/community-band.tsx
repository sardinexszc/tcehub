import Link from 'next/link';
import { ArrowUpRight, Quote } from 'lucide-react';
import {
  shops,
  journals,
  events,
  galleries,
  generations,
  generationYears,
} from '@/lib/mock-data';
const stats = [
  { value: shops.length, label: 'Trusted shops', href: '/shops' },
  { value: journals.length, label: 'Build journals', href: '/journals' },
  { value: events.length, label: 'Gatherings a season', href: '/events' },
  {
    value: galleries.reduce((n, g) => n + g.images.length, 0),
    label: 'Community photos',
    href: '/galleries',
  },
];
/** Full-bleed dark band: the one high-contrast moment on the home page. */
export function CommunityBand() {
  return (
    <section
      aria-labelledby="community-title"
      className="section-dark relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 size-[520px] rounded-full bg-accent/10 blur-3xl"
      />
      <div className="container-shell relative py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div data-reveal>
            <p className="eyebrow text-background/60 before:ring-background/20">
              The hub in numbers
            </p>
            <h2
              id="community-title"
              className="mt-5 text-4xl font-medium leading-[1.04] tracking-[-0.035em] md:text-6xl"
            >
              Seven generations.
              <br />
              <span className="text-background/45">One community.</span>
            </h2>
          </div>
          <figure
            data-reveal
            style={{ '--reveal-delay': '120ms' } as React.CSSProperties}
            className="rounded-3xl border border-background/10 bg-background/[0.04] p-6 md:p-8"
          >
            <Quote
              size={22}
              aria-hidden="true"
              className="text-accent"
              strokeWidth={1.75}
            />
            <blockquote className="mt-4 text-lg leading-relaxed tracking-[-0.01em] md:text-xl">
              I came looking for a timing-belt recommendation for my XV30 and
              stayed for the Sunday meets. Best decision I’ve made for the car.
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 text-sm">
              <span
                aria-hidden="true"
                className="grid size-10 place-items-center rounded-full bg-accent font-medium text-accent-foreground"
              >
                MR
              </span>
              <span>
                <span className="block font-medium">Marco R.</span>
                <span className="block text-background/55">
                  XV30 owner · demo member
                </span>
              </span>
            </figcaption>
          </figure>
        </div>
        <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-background/10 bg-background/10 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              data-reveal
              style={{ '--reveal-delay': `${i * 80}ms` } as React.CSSProperties}
              className="bg-foreground"
            >
              <Link
                href={s.href}
                className="group flex h-full flex-col justify-between gap-6 p-5 transition-colors hover:bg-background/[0.05] md:p-7"
              >
                <dt className="flex items-center justify-between text-sm text-background/60">
                  {s.label}
                  <ArrowUpRight
                    size={16}
                    aria-hidden="true"
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </dt>
                <dd className="text-5xl font-medium tabular-nums tracking-[-0.05em] md:text-6xl">
                  {s.value}
                </dd>
              </Link>
            </div>
          ))}
        </dl>
        <div className="mt-14" data-reveal>
          <p className="meta text-background/50">
            Every Camry, from the first to the latest
          </p>
          <ol className="relative mt-6 grid grid-cols-7 [scrollbar-width:none]">
            <span
              aria-hidden="true"
              className="absolute left-0 right-0 top-[7px] h-px bg-background/15"
            />
            {generations.map((g, i) => {
              const latest = i === generations.length - 1;
              return (
                <li key={g} className="relative pr-2">
                  <span
                    aria-hidden="true"
                    className={
                      latest
                        ? 'block size-[15px] rounded-full bg-accent ring-4 ring-accent/20'
                        : 'block size-[15px] rounded-full border border-background/30 bg-foreground'
                    }
                  />
                  <span className="mt-4 block text-sm font-medium md:text-base">
                    {g}
                  </span>
                  <span className="mt-1 hidden text-xs tabular-nums text-background/50 sm:block">
                    {generationYears[g]}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
