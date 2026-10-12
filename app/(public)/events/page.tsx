import { SEO } from '@/components/seo';
import { EventList } from '@/components/content-lists';
export const metadata = SEO(
  'Events',
  'Find a reason to take the scenic route and meet fellow owners.',
  '/events',
);
export default function Page() {
  return (
    <div className="container-shell py-12">
      <p className="eyebrow mb-4">The community calendar</p>
      <h1 className="page-title">Good cars. Better company.</h1>
      <p className="mb-10 mt-5 max-w-xl leading-7 text-muted">
        Find a reason to take the scenic route and meet fellow owners.
      </p>
      <EventList />
    </div>
  );
}
