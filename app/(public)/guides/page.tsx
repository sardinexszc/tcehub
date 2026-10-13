import { SEO } from '@/components/seo';
import { GuideList } from '@/components/content-lists';
export const metadata = SEO(
  'Guides',
  'Practical starting points for buying, maintaining, and enjoying your car.',
  '/guides',
);
export default function Page() {
  return <GuideList />;
}
