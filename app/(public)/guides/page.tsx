import { SEO } from '@/components/seo';
import { PageHeader } from '@/components/page-header';
import { GuideList } from '@/components/content-lists';
export const metadata = SEO(
  'Guides',
  'Practical starting points for buying, maintaining, and enjoying your car.',
  '/guides',
);
export default function Page() {
  return (
    <div className="container-shell pb-12 pt-10 md:pt-14">
      <PageHeader
        kicker="The ownership bookshelf"
        title="Know your Camry."
        description="Practical starting points for buying, maintaining, and enjoying your car."
      />
      <GuideList />
    </div>
  );
}
