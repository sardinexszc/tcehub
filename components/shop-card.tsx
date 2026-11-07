import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';
import type { Shop } from '@/lib/mock-data';
export function ShopCard({ shop }: { shop: Shop }) {
  return (
    <article className="group">
      <Link href={`/shops/${shop.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-subtle">
          <Image
            src={shop.images[0]}
            alt={`${shop.name}, illustrative placeholder`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          {shop.featured && (
            <span className="absolute left-0 top-0 bg-foreground px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.06em] text-background">
              Featured
            </span>
          )}
        </div>
        <p className="eyebrow mt-4">{shop.category.join(' · ')}</p>
        <h3 className="mt-1.5 text-lg font-semibold leading-snug group-hover:underline group-hover:underline-offset-4">
          {shop.name}
        </h3>
      </Link>
      <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-[13px]">
        <dt className="text-muted">Location</dt>
        <dd>
          {shop.city}, {shop.region}
        </dd>
        <dt className="text-muted">Services</dt>
        <dd>{shop.generations.join(', ')}</dd>
        {shop.rating && (
          <>
            <dt className="text-muted">Rating</dt>
            <dd className="flex items-center gap-1 tabular-nums">
              <Star size={12} aria-hidden="true" className="fill-foreground" />
              {shop.rating.toFixed(1)}
              <span className="text-muted">(demo)</span>
            </dd>
          </>
        )}
      </dl>
    </article>
  );
}
