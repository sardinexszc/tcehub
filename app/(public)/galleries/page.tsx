import { SEO } from '@/components/seo';
import { GalleryList } from '@/components/content-lists';
export const metadata = SEO(
  'Galleries',
  'Community gatherings, memorable roads, and details worth a closer look.',
  '/galleries',
);
export default function Page() {
  return <GalleryList />;
}
