import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Star, ArrowUpRight } from 'lucide-react';
import type { Shop } from '@/lib/mock-data';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
export function ShopCard({ shop }: { shop: Shop }) {
  return (
    <Card className="group transition-colors hover:border-muted">
      <Link href={`/shops/${shop.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={shop.images[0]}
            alt={`${shop.name} illustrative placeholder`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {shop.featured && (
            <Badge className="absolute left-4 top-4 border-none bg-accent text-white">
              Featured
            </Badge>
          )}
        </div>
        <div className="p-5">
          <div className="mb-3 flex flex-wrap gap-2">
            {shop.category.map((c) => (
              <Badge key={c}>{c}</Badge>
            ))}
          </div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="text-lg font-semibold tracking-tight">
              {shop.name}
            </h3>
            <ArrowUpRight size={18} className="shrink-0 text-muted" />
          </div>
          <div className="mt-4 flex items-center justify-between gap-2 text-xs text-muted">
            <span className="flex items-center gap-1">
              <MapPin size={13} />
              {shop.city}
            </span>
            {shop.rating && (
              <span className="flex items-center gap-1">
                <Star size={13} className="fill-amber-400 text-amber-400" />
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
