import Image from 'next/image';
import Link from 'next/link';
import type { Event, Shop } from '@/lib/mock-data';
import { wallpapers } from '@/lib/mock-data';
import { sentence } from '@/lib/utils';
import { ArrowDisc } from '@/components/ui/button';
/** Eloqwnt-style figures strip. The duplicate run is hidden from assistive tech. */
export function Marquee({ items }: { items: string[] }) {
  const run = (hidden: boolean) => (
    <ul
      aria-hidden={hidden || undefined}
      className="flex shrink-0 items-center gap-16 pr-16"
    >
      {items.map((t) => (
        <li key={t} className="whitespace-nowrap">
          <span className="mr-3 text-muted">/</span>
          {t}
        </li>
      ))}
    </ul>
  );
  return (
    <div className="shell mt-3 md:mt-5">
      <div className="overflow-hidden rounded-panel bg-surface py-6 md:py-8">
        <div className="flex w-max animate-[marquee_40s_linear_infinite] text-[clamp(1.75rem,3.4vw,2.75rem)] font-medium tracking-[-0.03em] motion-reduce:animate-none">
          {run(false)}
          {run(true)}
        </div>
      </div>
    </div>
  );
}
export function AboutPanel() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="shell mt-3 scroll-mt-6 md:mt-5"
    >
      <div className="panel grid gap-10 p-6 md:grid-cols-[1fr_1.2fr] md:p-12">
        <div className="flex flex-col justify-between gap-10">
          <p className="label">Who we are</p>
          <figure className="max-w-[260px] rounded-[24px] bg-subtle p-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] bg-night">
              <Image
                src={wallpapers[1]}
                alt="Illustrated silver Camry XV40 on a dark textured backdrop"
                fill
                sizes="260px"
                className="object-cover"
              />
            </div>
            <figcaption className="flex items-center justify-between px-2 pb-1 pt-3 text-[15px] font-medium">
              The founder’s XV40
              <span className="text-[13px] font-normal text-muted">
                by STXNCED
              </span>
            </figcaption>
          </figure>
        </div>
        <div className="flex flex-col justify-center">
          <h2 id="about-title" className="heading max-w-[18ch]">
            Owning a Camry is easy. Keeping one right takes good people.
          </h2>
          <div className="mt-6 grid max-w-lg gap-4 text-muted">
            <p>
              TCEHub started as a group chat of XV40 owners swapping shop
              recommendations. It grew into a home for every generation, from
              cherished XV20s to brand-new XV80s.
            </p>
            <p>
              Every shop here was recommended by an owner, every story is
              written by someone who did the work, and every meet is open to
              anyone who loves the car.
            </p>
          </div>
          <Link
            href="/about"
            className="group mt-8 inline-flex h-12 w-fit items-center gap-4 rounded-full bg-foreground pl-6 pr-2 text-[15px] font-medium text-surface"
          >
            About TCEHub
            <ArrowDisc />
          </Link>
        </div>
      </div>
    </section>
  );
}
/** Eloqwnt case-study rows: copy and figures beside dark framed media, alternating sides. */
export function ShopShowcase({ shops }: { shops: Shop[] }) {
  return (
    <section aria-labelledby="shops-title" className="shell mt-12 md:mt-20">
      <div className="flex flex-wrap items-end justify-between gap-4 px-2 md:px-4">
        <h2 id="shops-title" className="label">
          Shops owners recommend
        </h2>
        <Link
          href="/shops"
          className="text-[15px] text-muted transition-colors hover:text-foreground"
        >
          See every shop
        </Link>
      </div>
      <div className="panel mt-4 divide-y p-3 md:p-4">
        {shops.map((s, i) => (
          <article
            key={s.id}
            className="grid items-center gap-8 p-3 py-8 md:grid-cols-2 md:gap-14 md:p-8"
          >
            <div className={i % 2 ? 'md:order-2' : ''}>
              <p className="label text-muted">
                {sentence(s.category.join(' and '))}, {s.city}
              </p>
              <h3 className="mt-4 text-[clamp(2.25rem,4.4vw,3.5rem)] font-medium leading-none tracking-[-0.04em]">
                {s.name}
              </h3>
              <p className="mt-4 max-w-md text-muted">{s.description}</p>
              <dl className="mt-8 grid max-w-md grid-cols-3 gap-4">
                <div className="flex flex-col-reverse">
                  <dt className="stat-caption">Owner rating</dt>
                  <dd className="stat">{s.rating?.toFixed(1)}</dd>
                </div>
                <div className="flex flex-col-reverse">
                  <dt className="stat-caption">Generations</dt>
                  <dd className="stat">{s.generations.length}</dd>
                </div>
                <div className="flex flex-col-reverse">
                  <dt className="stat-caption">Region</dt>
                  <dd className="text-[19px] font-medium leading-tight tracking-[-0.02em]">
                    {s.region}
                  </dd>
                </div>
              </dl>
              <Link
                href={`/shops/${s.slug}`}
                className="group mt-8 inline-flex items-center gap-3 text-[15px] font-medium"
              >
                <ArrowDisc tone="ink" />
                View {s.name}
              </Link>
            </div>
            <Link
              href={`/shops/${s.slug}`}
              tabIndex={-1}
              aria-hidden="true"
              className="group relative block aspect-[4/3] overflow-hidden rounded-media bg-night"
            >
              <Image
                src={s.images[0]}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
/** Forge-style night panel listing upcoming meets. */
export function EventsPanel({ events }: { events: Event[] }) {
  const fmt = (d: string, o: Intl.DateTimeFormatOptions) =>
    new Intl.DateTimeFormat('en-PH', { ...o, timeZone: 'Asia/Manila' }).format(
      new Date(d),
    );
  return (
    <section aria-labelledby="events-title" className="shell mt-3 md:mt-5">
      <div className="grid gap-10 rounded-panel bg-night p-6 text-white md:p-12 lg:grid-cols-[1fr_1.4fr]">
        <div className="flex flex-col justify-between gap-8">
          <div>
            <p className="label text-white/60">Upcoming meets</p>
            <h2
              id="events-title"
              className="display mt-6 text-[clamp(3rem,6vw,5.5rem)]"
            >
              See you on the road.
            </h2>
          </div>
          <Link
            href="/events"
            className="group inline-flex h-12 w-fit items-center gap-4 rounded-full bg-white pl-6 pr-2 text-[15px] font-medium text-foreground"
          >
            Full calendar
            <ArrowDisc tone="ink" />
          </Link>
        </div>
        <ul className="divide-y divide-white/15 border-y border-white/15">
          {events.map((e) => (
            <li key={e.id}>
              <Link
                href={`/events/${e.slug}`}
                className="group grid grid-cols-[4rem_1fr_auto] items-center gap-4 px-2 py-5 transition-colors hover:bg-white/[0.06] md:grid-cols-[5rem_1fr_1fr_auto] md:px-4"
              >
                <span className="leading-none">
                  <span className="block text-[13px] text-white/55">
                    {fmt(e.date, { month: 'short' })}
                  </span>
                  <span className="mt-1 block text-4xl font-medium tabular-nums tracking-[-0.04em]">
                    {fmt(e.date, { day: '2-digit' })}
                  </span>
                </span>
                <span className="text-[19px] font-medium tracking-[-0.02em]">
                  {e.title}
                  <span className="mt-1 block text-[15px] font-normal text-white/55 md:hidden">
                    {e.location}
                  </span>
                </span>
                <span className="hidden text-[15px] text-white/55 md:block">
                  {e.location}
                </span>
                <ArrowDisc className="opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
