import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Star } from 'lucide-react';
import type { Shop } from '@/lib/mock-data';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { CornerArrow } from '@/components/corner-arrow';
export function ShopCard({ shop }: { shop: Shop }) {
  return (
    <Card className="group hover:border-foreground/25 hover:shadow-[0_18px_40px_-24px_hsl(var(--foreground)/0.35)]">
      <Link href={`/shops/${shop.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-subtle">
          <Image
            src={shop.images[0]}
            alt={`${shop.name} illustrative placeholder`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="media-mono object-cover group-hover:scale-[1.03]"
          />
          {shop.featured && (
            <Badge className="absolute left-3 top-3 border-transparent bg-accent text-accent-foreground">
              Featured
            </Badge>
          )}
          <CornerArrow className="absolute right-3 top-3" />
        </div>
        <div className="p-5">
          <p className="meta">{shop.category.join(' · ')}</p>
          <h3 className="mt-2.5 text-lg font-medium tracking-[-0.02em]">
            {shop.name}
          </h3>
          <div className="mt-5 flex items-center justify-between gap-2 border-t pt-4 text-[13px] text-muted">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} aria-hidden="true" />
              {shop.city}
            </span>
            {shop.rating && (
              <span className="flex items-center gap-1 tabular-nums text-foreground">
                <Star
                  size={13}
                  aria-hidden="true"
                  className="fill-foreground text-foreground"
                />
                {shop.rating.toFixed(1)}
                <span className="sr-only">demo rating</span>
              </span>
            )}
          </div>
        </div>
      </Link>
    </Card>
  );
}
