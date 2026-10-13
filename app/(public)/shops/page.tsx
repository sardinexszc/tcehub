import { SEO } from '@/components/seo';
import { ShopDirectory } from '@/components/shop-directory';
export const metadata = SEO(
  'Shop directory',
  'Find Camry specialists by category, generation, and region.',
  '/shops',
);
export default function Shops() {
  return <ShopDirectory />;
}
