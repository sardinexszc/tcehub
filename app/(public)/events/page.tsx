import { SEO } from '@/components/seo';
import { PageHeader } from '@/components/page-header';
import { EventList } from '@/components/content-lists';
export const metadata = SEO(
  'Events',
  'Find a reason to take the scenic route and meet fellow owners.',
  '/events',
);
export default function Page() {
  return (
    <div className="container-shell pb-12 pt-10 md:pt-14">
      <PageHeader
        kicker="The community calendar"
        title="Good cars. Better company."
        description="Find a reason to take the scenic route and meet fellow owners."
      />
      <EventList />
    </div>
  );
}
