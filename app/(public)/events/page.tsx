import { SEO } from '@/components/seo';
import { EventList } from '@/components/content-lists';
export const metadata = SEO(
  'Events',
  'Find a reason to take the scenic route and meet fellow owners.',
  '/events',
);
export default function Page() {
  return <EventList />;
}
