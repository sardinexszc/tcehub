import { Hero } from '@/components/hero';
import { SectionHeading } from '@/components/section-heading';
import { ShopCard } from '@/components/shop-card';
import { JournalCard, EventRow } from '@/components/content-cards';
import { shops, journals, events, demoToday } from '@/lib/mock-data';
import { SEO } from '@/components/seo';
export const metadata = SEO(
  'Every generation. One community.',
  'Explore Camry shops, build journals, events, and photo stories.',
  '/',
);
export default function Home() {
  const upcoming = events
    .filter((e) => e.date >= demoToday)
    .sort((a, b) => a.date.localeCompare(b.date));
  return (
    <>
      <Hero />
      <div className="container-shell">
        <section className="section-space mt-10 md:mt-20">
          <SectionHeading
            kicker="Selected specialists"
            title="Shops"
            href="/shops"
            linkLabel="Explore all shops"
            count={shops.length}
          />
          <div className="content-grid">
            {shops
              .filter((s) => s.featured)
              .map((s, i) => (
                <ShopCard key={s.id} shop={s} index={i} />
              ))}
          </div>
        </section>
        <section className="section-space pt-0 md:pt-0">
          <SectionHeading
            kicker="See you out there"
            title="Events"
            href="/events"
            linkLabel="Full calendar"
            count={upcoming.length}
          />
          <div className="md:ml-[33.333%]">
            <div className="rule-list">
              {upcoming.slice(0, 4).map((e) => (
                <EventRow key={e.id} event={e} />
              ))}
            </div>
          </div>
        </section>
        <section className="section-space pt-0 md:pt-0">
          <SectionHeading
            kicker="Behind the build"
            title="Journals"
            href="/journals"
            linkLabel="Read every story"
            count={journals.length}
          />
          <div className="content-grid">
            {journals.slice(0, 3).map((j, i) => (
              <JournalCard key={j.id} journal={j} index={i} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
