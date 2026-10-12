import { notFound } from 'next/navigation';
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
  return (
    <div className="container-shell py-10">
      <Breadcrumbs
        items={[{ label: 'Shops', href: '/shops' }, { label: shop.name }]}
      />
      <div className="mb-8">
        <div className="mb-4 flex flex-wrap gap-2">
          {shop.category.map((c) => (
            <Badge key={c}>{c}</Badge>
          ))}
        </div>
        <h1 className="page-title">{shop.name}</h1>
        <p className="mt-4 text-muted">
          {shop.city} · {shop.region} · ★ {shop.rating?.toFixed(1)} demo rating
        </p>
      </div>
      <ImageGallery title={shop.name} images={shop.images} />
      <div className="grid gap-10 py-10 md:grid-cols-[2fr_1fr]">
        <div>
          <h2 className="mb-4 text-2xl font-semibold">About the shop</h2>
          <p className="leading-8 text-muted">{shop.description}</p>
          <h2 className="mb-3 mt-8 font-semibold">Camry generations</h2>
          <div className="flex flex-wrap gap-2">
            {shop.generations.map((g) => (
              <Badge key={g}>{g}</Badge>
            ))}
          </div>
          <h2 className="mb-3 mt-8 font-semibold">Find the shop</h2>
          <p className="mb-4 text-muted">{shop.address}</p>
          <MapPlaceholder label="Shop map coming soon" />
        </div>
        <aside className="h-fit rounded-xl border bg-surface p-6">
          <h2 className="text-lg font-semibold">Plan your visit</h2>
          <p className="mt-5 text-xs uppercase tracking-wider text-muted">
            Opening hours
          </p>
          <p className="mt-2 text-sm">{shop.hours}</p>
          <p className="mt-5 text-xs uppercase tracking-wider text-muted">
            Demo contact
          </p>
          <p className="mt-2 text-sm">{shop.phone}</p>
          <p className="mt-2 break-all text-sm">{shop.email}</p>
          <div className="mt-6 grid gap-3">
            <Button disabled>Call shop · demo</Button>
            <Button variant="outline" disabled>
              Email shop · demo
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
      <section className="section-space border-t">
        <SectionHeading title="More specialists to explore" />
        <div className="content-grid">
          {shops
            .filter(
              (s) =>
                s.id !== shop.id &&
                s.category.some((c) => shop.category.includes(c)),
            )
            .slice(0, 3)
            .map((s) => (
              <ShopCard key={s.id} shop={s} />
            ))}
        </div>
      </section>
    </div>
  );
}
