import { SEO } from '@/components/seo';
import { PageHeader } from '@/components/page-header';
import { GalleryList } from '@/components/content-lists';
export const metadata = SEO(
  'Galleries',
  'Community gatherings, memorable roads, and details worth a closer look.',
  '/galleries',
);
export default function Page() {
  return (
    <div className="container-shell pb-12 pt-10 md:pt-14">
      <PageHeader
        kicker="Through the lens"
        title="The moments between drives."
        description="Community gatherings, memorable roads, and details worth a closer look."
      />
      <GalleryList />
    </div>
  );
}
