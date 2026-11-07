import { SEO } from '@/components/seo';
import { PageHeader } from '@/components/page-header';
import { GuideList } from '@/components/content-lists';
export const metadata = SEO(
  'Guides',
  'Camry buying advice and maintenance basics, sorted by generation.',
  '/guides',
);
export default function Page() {
  return (
    <div className="container-shell pb-12 pt-10 md:pt-14">
      <PageHeader
        title="Ownership guides"
        description="Buying advice and maintenance basics, sorted by generation. General guidance, not a workshop manual."
      />
      <GuideList />
    </div>
  );
}
