import { SEO } from '@/components/seo';
import { PageHeader } from '@/components/page-header';
import { ShopDirectory } from '@/components/shop-directory';
export const metadata = SEO(
  'Shop directory',
  'Find Camry specialists by category, generation, and region.',
  '/shops',
);
export default function Shops() {
  return (
    <div className="container-shell pb-12 pt-10 md:pt-14">
      <PageHeader
        kicker="The community directory"
        title="Find your specialist."
        description="From routine care to your next build. Explore shops that know their way around a Camry."
      />
      <ShopDirectory />
    </div>
  );
}
