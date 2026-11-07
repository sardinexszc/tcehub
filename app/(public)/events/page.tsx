import { SEO } from '@/components/seo';
import { PageHeader } from '@/components/page-header';
import { EventList } from '@/components/content-lists';
export const metadata = SEO(
  'Events',
  'Meets, cruises, shows, and track days for Camry owners.',
  '/events',
);
export default function Page() {
  return (
    <div className="container-shell pb-12 pt-10 md:pt-14">
      <PageHeader
        title="Events"
        description="Meets, cruises, shows, and track days for Camry owners. Free to attend unless noted."
      />
      <EventList />
    </div>
  );
}
