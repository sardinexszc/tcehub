import { Hero } from '@/components/hero';
import { HubExplorer } from '@/components/hub-explorer';
import {
  AboutPanel,
  EventsPanel,
  Marquee,
  ShopShowcase,
} from '@/components/home-sections';
import {
  shops,
  journals,
  events,
  guides,
  generations,
  demoToday,
} from '@/lib/mock-data';
import { SEO } from '@/components/seo';
export const metadata = SEO(
  'Every Camry has a keeper',
  'The Camry community of the Philippines: trusted shops, owners’ build stories, and weekend meets.',
  '/',
);
export default function Home() {
  const upcoming = events
    .filter((e) => e.date >= demoToday)
    .sort((a, b) => a.date.localeCompare(b.date));
  return (
    <>
      <Hero />
      <Marquee
        items={[
          `${shops.length} trusted shops`,
          `${generations.length} generations covered`,
          `${journals.length} build stories`,
          `${upcoming.length} upcoming meets`,
          `${guides.length} ownership guides`,
        ]}
      />
      <HubExplorer />
      <AboutPanel />
      <ShopShowcase shops={shops.filter((s) => s.featured)} />
      <EventsPanel events={upcoming.slice(0, 4)} />
    </>
  );
}
