import { SEO } from '@/components/seo';
import { ShopDirectory } from '@/components/shop-directory';
export const metadata = SEO(
  'Shop directory',
  'Find Camry specialists by category, generation, and region.',
  '/shops',
);
export default function Shops() {
  return (
    <div className="container-shell py-12">
      <p className="eyebrow mb-4">The community directory</p>
      <h1 className="page-title">Find your specialist.</h1>
      <p className="mb-10 mt-5 max-w-xl leading-7 text-muted">
        From routine care to your next build. Explore shops that know their way
        around a Camry.
      </p>
      <ShopDirectory />
    </div>
  );
}
