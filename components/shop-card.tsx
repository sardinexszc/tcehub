import Link from 'next/link';
import type { Shop } from '@/lib/mock-data';
import { EditorialCard } from '@/components/content-cards';
export function ShopCard({ shop, index }: { shop: Shop; index?: number }) {
  return (
    <EditorialCard
      href={`/shops/${shop.slug}`}
      image={shop.images[0]}
      title={shop.name}
      index={index}
      meta={
        <>
          {shop.city} — {shop.category.join(', ')}
          {shop.rating && (
            <span className="tabular-nums">
              {' '}
              · {shop.rating.toFixed(1)}
              <span className="sr-only"> demo rating</span>
            </span>
          )}
        </>
      }
    />
  );
}
export function ShopLink({ shop }: { shop: Shop }) {
  return (
    <Link href={`/shops/${shop.slug}`} className="link-u">
      {shop.name}
    </Link>
  );
}
