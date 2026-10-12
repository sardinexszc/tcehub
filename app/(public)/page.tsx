import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Hero } from '@/components/hero';
import { SectionHeading } from '@/components/section-heading';
import { ShopCard } from '@/components/shop-card';
import {
  JournalCard,
  EventCard,
  GalleryCard,
} from '@/components/content-cards';
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
        <section className="section-space">
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
            kicker="See you out there"
            title="The next gathering"
            href="/events"
          />
          <div className="content-grid">
            {events
              .filter((e) => e.date > demoToday)
              .slice(0, 3)
              .map((e) => (
                <EventCard key={e.id} event={e} />
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
        <section className="mb-16 flex flex-wrap items-center justify-between gap-8 rounded-xl border bg-surface p-8 md:p-12">
          <div>
            <p className="eyebrow mb-3">Help the community grow</p>
            <h2 className="text-3xl font-semibold tracking-tight">
              Know a great Camry shop?
            </h2>
            <p className="mt-3 text-sm text-muted">
              Share a specialist you’d recommend to a fellow owner.
            </p>
          </div>
          <Button asChild>
            <Link href="/contact#submit-shop">
              Submit a Shop
              <ArrowUpRight size={17} />
            </Link>
          </Button>
        </section>
      </div>
    </>
  );
}
