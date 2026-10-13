import type { Shop } from '@/lib/mock-data';
import { sentence } from '@/lib/utils';
import { MediaCard } from '@/components/content-cards';
export function ShopCard({ shop }: { shop: Shop; index?: number }) {
  return (
    <MediaCard
      href={`/shops/${shop.slug}`}
      image={shop.images[0]}
      title={shop.name}
      meta={`${sentence(shop.category.join(' and '))} in ${shop.city}, rated ${shop.rating?.toFixed(1)}`}
    />
  );
}
