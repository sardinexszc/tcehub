import { Suspense } from 'react';
import { SEO } from '@/components/seo';
import { PageHeader } from '@/components/page-header';
import {
  ShopDirectory,
  ShopDirectoryFromURL,
} from '@/components/shop-directory';
export const metadata = SEO(
  'Shop directory',
  'Find Camry specialists by service, generation, and region.',
  '/shops',
);
export default function Shops() {
  return (
    <div className="container-shell pb-12 pt-10 md:pt-14">
      <PageHeader
        title="Shop directory"
        description="Independent shops recommended by Camry owners. Filter by the service you need and the generation you drive."
      />
      {/* Fallback is the full, unfiltered directory so the static HTML still lists every shop. */}
      <Suspense fallback={<ShopDirectory />}>
        <ShopDirectoryFromURL />
      </Suspense>
    </div>
  );
}
