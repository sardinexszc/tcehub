import { notFound } from 'next/navigation';
import { shops } from '@/lib/mock-data';
import { SEO } from '@/components/seo';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { ImageGallery } from '@/components/image-gallery';
import { MapPlaceholder } from '@/components/map-placeholder';
import { ShopCard } from '@/components/shop-card';
import { SectionHeading } from '@/components/section-heading';
import { StatRow } from '@/components/stat-row';
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
    <div data-tint="cream" className="container-shell pt-6 md:pt-10">
      <Breadcrumbs
        items={[{ label: 'Shops', href: '/shops' }, { label: shop.name }]}
      />
      <h1 className="mt-10 max-w-[12ch] font-serif text-[clamp(3rem,8vw,8.5rem)] leading-[0.92] tracking-[-0.045em] md:mt-16">
        {shop.name}
      </h1>
      <div className="mt-10 md:mt-14">
        <StatRow
          items={[
            ['Location', `${shop.city} — ${shop.region}`],
            ['Services', shop.category.join(', ')],
            ['Generations', shop.generations.join(', ')],
            ['Rating', `${shop.rating?.toFixed(1)} (demo)`],
          ]}
        />
      </div>
      <div className="mt-12">
        <ImageGallery title={shop.name} images={shop.images} />
      </div>
      <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-5">
        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <h2 className="eyebrow mb-4">Plan your visit</h2>
          <dl className="rule-list max-w-sm text-[15px]">
            {[
              ['Hours', shop.hours],
              ['Phone', shop.phone],
              ['Email', shop.email],
              ['Address', shop.address],
            ].map(([k, v]) => (
              <div key={k} className="grid grid-cols-[6rem_1fr] gap-4 py-2">
                <dt className="text-muted">{k}</dt>
                <dd className="break-words">{v}</dd>
              </div>
            ))}
          </dl>
          <p className="meta mt-4 text-muted">
            Contact details are demo placeholders
          </p>
          {shop.website && (
            <a
              href={shop.website}
              target="_blank"
              rel="noopener noreferrer"
              className="link-u mt-4 inline-block"
            >
              Visit website →
            </a>
          )}
        </aside>
        <div className="grid gap-10">
          <p className="max-w-[22em] font-serif text-3xl leading-[1.15] tracking-[-0.025em] md:text-4xl">
            {shop.description}
          </p>
          <MapPlaceholder label="Shop map coming soon" />
        </div>
      </div>
      {related.length > 0 && (
        <section className="section-space">
          <SectionHeading
            kicker="Similar services"
            title="More specialists"
            href="/shops"
            linkLabel="Back to the directory"
          />
          <div className="content-grid">
            {related.map((s, i) => (
              <ShopCard key={s.id} shop={s} index={i} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
