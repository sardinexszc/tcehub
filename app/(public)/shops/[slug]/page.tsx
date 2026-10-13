import { notFound } from 'next/navigation';
import { shops } from '@/lib/mock-data';
import { sentence } from '@/lib/utils';
import { SEO } from '@/components/seo';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { ImageGallery } from '@/components/image-gallery';
import { MapPlaceholder } from '@/components/map-placeholder';
import { ShopCard } from '@/components/shop-card';
import { StatRow } from '@/components/stat-row';
import { Related } from '@/components/related';
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
    <div className="shell">
      <div className="grid gap-3 md:gap-5">
        <header className="panel p-6 md:p-12">
          <Breadcrumbs
            items={[{ label: 'Shops', href: '/shops' }, { label: shop.name }]}
          />
          <p className="label mt-10 text-muted">
            {sentence(shop.category.join(' and '))} in {shop.city}
          </p>
          <h1 className="mt-5 max-w-[16ch] text-[clamp(2.75rem,6vw,5rem)] font-medium leading-[0.98] tracking-[-0.045em]">
            {shop.name}
          </h1>
          <p className="mt-6 max-w-xl text-muted">{shop.description}</p>
          <div className="mt-12 border-t pt-8">
            <StatRow
              items={[
                ['Owner rating (demo)', shop.rating?.toFixed(1)],
                ['Generations served', shop.generations.join(', ')],
                ['Region', shop.region],
                ['Open', 'Mon to Sat'],
              ]}
            />
          </div>
        </header>
        <div className="panel p-3">
          <ImageGallery title={shop.name} images={shop.images} />
        </div>
        <section
          aria-labelledby="visit-title"
          className="panel grid gap-10 p-6 md:grid-cols-2 md:p-12"
        >
          <div>
            <h2
              id="visit-title"
              className="text-[28px] font-medium tracking-[-0.03em]"
            >
              Plan your visit
            </h2>
            <dl className="mt-6 divide-y border-y text-[15px]">
              {[
                ['Hours', shop.hours],
                ['Phone', shop.phone],
                ['Email', shop.email],
                ['Address', shop.address],
              ].map(([k, v]) => (
                <div key={k} className="grid grid-cols-[6rem_1fr] gap-4 py-3">
                  <dt className="text-muted">{k}</dt>
                  <dd className="break-words">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-[14px] text-muted">
              Contact details are demo placeholders.
            </p>
          </div>
          <MapPlaceholder label="Shop map coming soon" />
        </section>
      </div>
      {related.length > 0 && (
        <Related
          title="Shops doing similar work"
          href="/shops"
          linkLabel="Back to the directory"
        >
          {related.map((s) => (
            <ShopCard key={s.id} shop={s} />
          ))}
        </Related>
      )}
    </div>
  );
}
