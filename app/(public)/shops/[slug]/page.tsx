import { notFound } from 'next/navigation';
import { Star } from 'lucide-react';
import { shops } from '@/lib/mock-data';
import { SEO } from '@/components/seo';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { ImageGallery } from '@/components/image-gallery';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPlaceholder } from '@/components/map-placeholder';
import { ShopCard } from '@/components/shop-card';
import { SectionHeading } from '@/components/section-heading';
export function generateStaticParams() {
  return shops.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = shops.find((s) => s.slug === slug);
  return s
    ? SEO(s.name, s.description, `/shops/${slug}`)
    : { title: 'Shop not found' };
}
export default async function ShopDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const shop = shops.find((s) => s.slug === slug);
  if (!shop) notFound();
  const related = shops
    .filter(
      (s) =>
        s.id !== shop.id && s.category.some((c) => shop.category.includes(c)),
    )
    .slice(0, 3);
  return (
    <div className="container-shell pb-8 pt-8">
      <Breadcrumbs
        items={[{ label: 'Shops', href: '/shops' }, { label: shop.name }]}
      />
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">{shop.category.join(' · ')}</p>
          <h1 className="page-title mt-3">{shop.name}</h1>
        </div>
        <p className="flex items-center gap-1.5 text-sm">
          <Star size={14} aria-hidden="true" className="fill-foreground" />
          <span className="font-semibold tabular-nums">
            {shop.rating?.toFixed(1)}
          </span>
          <span className="text-muted">demo rating</span>
        </p>
      </header>
      <ImageGallery title={shop.name} images={shop.images} />
      <div className="grid gap-12 py-12 lg:grid-cols-[1fr_340px]">
        <div>
          <h2 className="section-title text-2xl md:text-3xl">About the shop</h2>
          <p className="mt-4 max-w-2xl text-base leading-8">
            {shop.description}
          </p>
          <h2 className="meta mb-3 mt-10">Generations serviced</h2>
          <div className="flex flex-wrap gap-2">
            {shop.generations.map((g) => (
              <Badge key={g}>{g}</Badge>
            ))}
          </div>
          <h2 className="meta mb-3 mt-10">Location</h2>
          <MapPlaceholder label="Shop map coming soon" address={shop.address} />
        </div>
        <aside className="h-fit border-t-2 border-foreground lg:sticky lg:top-24">
          <dl className="divide-y text-sm">
            {[
              ['Address', shop.address],
              ['Region', shop.region],
              ['Hours', shop.hours],
              ['Phone', `${shop.phone} (demo)`],
              ['Email', `${shop.email} (demo)`],
            ].map(([k, v]) => (
              <div key={k} className="grid grid-cols-[88px_1fr] gap-3 py-3.5">
                <dt className="text-muted">{k}</dt>
                <dd className="break-words">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-4 grid gap-2">
            <Button disabled>Call shop (demo)</Button>
            <Button variant="outline" disabled>
              Email shop (demo)
            </Button>
            {shop.website && (
              <Button asChild variant="outline">
                <a
                  href={shop.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit website
                </a>
              </Button>
            )}
          </div>
        </aside>
      </div>
      {related.length > 0 && (
        <section className="section-space">
          <SectionHeading
            title="Similar shops"
            href="/shops"
            linkLabel="All shops"
          />
          <div className="content-grid">
            {related.map((s) => (
              <ShopCard key={s.id} shop={s} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
