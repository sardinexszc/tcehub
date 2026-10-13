import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import { Hero } from '@/components/hero';
import { SectionHeading } from '@/components/section-heading';
import { ShopCard } from '@/components/shop-card';
import { JournalCard, EventRow, GalleryCard } from '@/components/content-cards';
import { Button } from '@/components/ui/button';
import { shops, journals, events, galleries, demoToday } from '@/lib/mock-data';
import { SEO } from '@/components/seo';
export const metadata = SEO(
  'Every generation. One community.',
  'Explore Camry shops, build journals, events, and photo stories.',
  '/',
);
export default function Home() {
  return (
    <>
      <Hero />
      <div className="container-shell">
        <section className="section-space mt-6 border-t md:mt-10">
          <SectionHeading
            kicker="The right people for your car"
            title="Specialists worth knowing"
            href="/shops"
            linkLabel="Explore all shops"
          />
          <div className="content-grid">
            {shops
              .filter((s) => s.featured)
              .map((s) => (
                <ShopCard key={s.id} shop={s} />
              ))}
          </div>
        </section>
        <section className="section-space border-t">
          <SectionHeading
            kicker="See you out there"
            title="The next gatherings"
            href="/events"
            linkLabel="Full calendar"
          />
          <div className="hairline-grid">
            {events
              .filter((e) => e.date >= demoToday)
              .sort((a, b) => a.date.localeCompare(b.date))
              .slice(0, 4)
              .map((e) => (
                <EventRow key={e.id} event={e} />
              ))}
          </div>
        </section>
        <section className="section-space border-t">
          <SectionHeading
            kicker="Behind the build"
            title="Stories from the driver’s seat"
            href="/journals"
          />
          <div className="content-grid">
            {journals.slice(0, 3).map((j) => (
              <JournalCard key={j.id} journal={j} />
            ))}
          </div>
        </section>
        <section className="section-space border-t">
          <SectionHeading
            kicker="Captured by the community"
            title="A few moments worth keeping"
            href="/galleries"
          />
          <div className="content-grid">
            {galleries.slice(0, 3).map((g) => (
              <GalleryCard key={g.id} gallery={g} />
            ))}
          </div>
        </section>
        <section
          aria-labelledby="submit-title"
          className="hairline-grid mb-16 md:grid-cols-[1.4fr_1fr]"
        >
          <div className="flex flex-col justify-between gap-8 p-6 md:p-10">
            <div>
              <p className="eyebrow">Help the community grow</p>
              <h2
                id="submit-title"
                className="mt-5 text-3xl font-medium tracking-[-0.03em] md:text-4xl"
              >
                Know a great Camry shop?
              </h2>
              <p className="mt-3 max-w-md leading-7 text-muted">
                Share a specialist you’d recommend to a fellow owner.
              </p>
            </div>
            <Button asChild className="w-fit">
              <Link href="/contact#submit-shop">
                Submit a Shop
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <ul className="grid gap-px bg-border">
            {[
              'Name and city of the shop',
              'Services and Camry generations',
              'Why you’d send a friend there',
            ].map((item) => (
              <li
                key={item}
                className="flex items-center justify-between gap-4 bg-surface px-6 py-5 text-sm md:px-8"
              >
                {item}
                <Check size={16} aria-hidden="true" className="shrink-0" />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
