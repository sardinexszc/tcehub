import { SEO } from '@/components/seo';
import { PageHeader } from '@/components/page-header';
import { GalleryList } from '@/components/content-lists';
export const metadata = SEO(
  'Galleries',
  'Photo sets from Camry meets, cruises, and members’ cars.',
  '/galleries',
);
export default function Page() {
  return (
    <div className="container-shell pb-12 pt-10 md:pt-14">
      <PageHeader
        title="Galleries"
        description="Photo sets from meets, cruises, and members’ own cars."
      />
      <GalleryList />
    </div>
  );
}
