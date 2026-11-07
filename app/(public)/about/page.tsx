import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, CalendarDays, NotebookPen, Store } from 'lucide-react';
import { SEO } from '@/components/seo';
import { PageHeader } from '@/components/page-header';
import { shops, journals, events, generations } from '@/lib/mock-data';
export const metadata = SEO(
  'About the community',
  'A home for every generation of Toyota Camry enthusiast.',
  '/about',
);
const principles = [
  [
    'A useful directory',
    'Discover independent specialists by location, service, and generation.',
  ],
  [
    'Stories with substance',
    'Explore the thinking behind community builds and everyday ownership.',
  ],
  [
    'Respect on every road',
    'Celebrate every generation, welcome different approaches, and drive responsibly.',
  ],
];
const ways = [
  {
    icon: Store,
    title: 'Recommend a shop',
    body: 'Point fellow owners to a specialist you trust.',
    href: '/contact#submit-shop',
    cta: 'Submit a Shop',
  },
  {
    icon: NotebookPen,
    title: 'Share your build',
    body: 'Daily driver or full restoration, every story helps someone.',
    href: '/contact',
    cta: 'Pitch a journal',
  },
  {
    icon: CalendarDays,
    title: 'Come to a meet',
    body: 'Coffee, cruises, and the occasional track day.',
    href: '/events',
    cta: 'See the calendar',
  },
];
export default function About() {
  const stats = [
    [shops.length, 'Specialist shops'],
    [journals.length, 'Build journals'],
    [events.length, 'Gatherings'],
    [generations.length, 'Generations'],
  ] as const;
  return (
    <div className="container-shell pb-16 pt-10 md:pt-14">
      <PageHeader
        kicker="The people behind the cars"
        title={
          <>
            A shared road.
            <br />A shared passion.
          </>
        }
      />
      <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
        <p className="max-w-3xl text-2xl leading-snug tracking-[-0.02em] md:text-3xl">
          Toyota Camry Elite Hub brings together the specialists, stories, and
          gatherings that make ownership more rewarding. Whether yours is a
          cherished XV20 or a new XV80,{' '}
          <span className="text-muted">there’s a place for it here.</span>
        </p>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8">
          {stats.map(([value, label]) => (
            <div key={label} className="border-t pt-4">
              <dt className="meta">{label}</dt>
              <dd className="mt-2 text-4xl font-medium tabular-nums tracking-[-0.04em]">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <figure
        data-reveal
        className="relative mt-14 aspect-[4/3] overflow-hidden rounded-3xl bg-subtle sm:aspect-[21/9]"
      >
        <Image
          src="/images/scene-dusk.svg"
          alt="Illustration of a Camry on an open road at dusk"
          fill
          sizes="(max-width: 1280px) 100vw, 1216px"
          className="object-cover"
        />
        <figcaption className="absolute bottom-4 left-4 rounded-full bg-surface/90 px-4 py-2 text-[13px] backdrop-blur">
          Built by owners, for owners · since the first XV10
        </figcaption>
      </figure>
      <div data-reveal className="hairline-grid mt-14 md:grid-cols-3">
        {principles.map(([title, body], i) => (
          <section key={title} className="p-6 md:p-8">
            <span className="font-mono text-[11px] tracking-[0.14em] text-muted">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h2 className="mt-10 text-xl font-medium tracking-[-0.02em]">
              {title}
            </h2>
            <p className="mt-3 leading-7 text-muted">{body}</p>
          </section>
        ))}
      </div>
      <section aria-labelledby="involved-title" className="mt-20" data-reveal>
        <p className="eyebrow">Get involved</p>
        <h2
          id="involved-title"
          className="mt-5 text-3xl font-medium tracking-[-0.03em] md:text-4xl"
        >
          Three ways to pull up a chair
        </h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {ways.map(({ icon: Icon, title, body, href, cta }) => (
            <Link
              key={title}
              href={href}
              className="group flex flex-col rounded-3xl border bg-surface p-6 transition-[border-color,box-shadow] hover:border-foreground/25 hover:shadow-[0_18px_40px_-24px_hsl(var(--foreground)/0.35)] md:p-7"
            >
              <span
                aria-hidden="true"
                className="grid size-11 place-items-center rounded-full bg-accent text-accent-foreground"
              >
                <Icon size={18} strokeWidth={1.75} />
              </span>
              <h3 className="mt-8 text-lg font-medium tracking-[-0.02em]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted">{body}</p>
              <span className="mt-6 flex items-center gap-1.5 text-[13px] font-medium">
                {cta}
                <ArrowUpRight
                  size={14}
                  aria-hidden="true"
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          ))}
        </div>
      </section>
      <p className="meta mt-16 border-t pt-6 normal-case tracking-normal">
        TCEHub is an independent community project, not affiliated with or
        endorsed by Toyota. This front-end skeleton contains fictional demo
        content.
      </p>
    </div>
  );
}
