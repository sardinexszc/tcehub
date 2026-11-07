import Image from 'next/image';
import Link from 'next/link';
import { ShopCard } from '@/components/shop-card';
import { SectionHeading } from '@/components/section-heading';
import { GenerationLineup } from '@/components/generation-lineup';
import { JournalCard, EventRow, GuideRow } from '@/components/content-cards';
import { Button } from '@/components/ui/button';
import {
  shops,
  journals,
  events,
  galleries,
  guides,
  demoToday,
} from '@/lib/mock-data';
import { formatDate } from '@/lib/utils';
import { SEO } from '@/components/seo';
export const metadata = SEO(
  'Camry shops, meets, and build journals',
  'Find Camry specialist shops, upcoming meets, owners’ build journals, and ownership guides for every generation.',
  '/',
);
export default function Home() {
  const upcoming = events
    .filter((e) => e.date >= demoToday)
    .sort((a, b) => a.date.localeCompare(b.date));
  const [lead, ...moreJournals] = journals;
  return (
    <>
      <section aria-labelledby="hero-title" className="section-dark">
        <div className="container-shell grid gap-8 pb-10 pt-12 md:grid-cols-[1.3fr_1fr] md:items-end md:pb-12 md:pt-16">
          <div>
            <p className="eyebrow text-[hsl(354_90%_74%)]">
              Toyota Camry owners · Philippines
            </p>
            <h1
              id="hero-title"
              className="display mt-4 text-[3.25rem] uppercase sm:text-7xl lg:text-[5.75rem]"
            >
              The Camry
              <br />
              owners’ hub
            </h1>
          </div>
          <div className="md:pb-2">
            <p className="max-w-md text-base leading-7 text-background/75 md:text-lg">
              Find shops that know your generation, read owners’ build journals,
              and meet other Camry drivers around Luzon.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/shops">Find a shop</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-background/40"
              >
                <Link href="/events">Upcoming meets</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="relative mx-auto aspect-[16/9] max-w-[1600px] sm:aspect-[21/9] lg:aspect-[5/2]">
          <Image
            src="/images/scene-night.svg"
            alt="Illustration of a white Camry parked on a city street at night"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_60%]"
          />
        </div>
      </section>
      <GenerationLineup />
      <div className="container-shell">
        <section className="section-space pt-0" aria-label="Upcoming meets">
          <SectionHeading
            title="Upcoming meets"
            href="/events"
            linkLabel="Full calendar"
          />
          <div className="border-t">
            {upcoming.slice(0, 4).map((e) => (
              <EventRow key={e.id} event={e} />
            ))}
          </div>
        </section>
        <section className="section-space" aria-label="Build journals">
          <SectionHeading
            title="Build journals"
            href="/journals"
            linkLabel="All journals"
          />
          <JournalCard journal={lead} lead />
          <div className="content-grid mt-12 border-t pt-8">
            {moreJournals.slice(0, 3).map((j) => (
              <JournalCard key={j.id} journal={j} />
            ))}
          </div>
        </section>
        <section className="section-space" aria-label="Featured shops">
          <SectionHeading
            title="Featured shops"
            href="/shops"
            linkLabel={`Browse all ${shops.length} shops`}
          />
          <div className="content-grid">
            {shops
              .filter((s) => s.featured)
              .map((s) => (
                <ShopCard key={s.id} shop={s} />
              ))}
          </div>
        </section>
        <div className="section-space grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <section aria-label="Ownership guides">
            <SectionHeading title="Ownership guides" href="/guides" />
            <div className="border-t">
              {guides.slice(0, 5).map((g) => (
                <GuideRow key={g.id} guide={g} />
              ))}
            </div>
          </section>
          <section aria-label="Galleries">
            <SectionHeading title="Galleries" href="/galleries" />
            <div className="grid grid-cols-2 gap-x-4 gap-y-6">
              {galleries.slice(0, 4).map((g) => (
                <Link
                  key={g.id}
                  href={`/galleries/${g.slug}`}
                  className="group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-subtle">
                    <Image
                      src={g.coverImage}
                      alt={`${g.title}, illustrative placeholder`}
                      fill
                      sizes="(max-width:1024px) 50vw, 20vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <p className="mt-2 text-sm font-semibold leading-snug group-hover:underline group-hover:underline-offset-4">
                    {g.title}
                  </p>
                  <p className="text-xs text-muted">
                    {g.images.length} photos · {formatDate(g.date)}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
      <section aria-labelledby="submit-title" className="border-y bg-subtle">
        <div className="container-shell grid gap-6 py-12 md:grid-cols-[1.4fr_1fr] md:items-center md:py-14">
          <div>
            <h2 id="submit-title" className="section-title">
              Know a shop that does good work on Camrys?
            </h2>
            <p className="mt-3 max-w-xl leading-7 text-muted">
              Send us the name, city, and what they did for your car. We check
              every submission before it goes into the directory.
            </p>
          </div>
          <div className="md:justify-self-end">
            <Button asChild variant="ink">
              <Link href="/contact#submit-shop">Submit a shop</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
