import { notFound } from 'next/navigation';
import { galleries, imageCredit } from '@/lib/mock-data';
import { formatDate } from '@/lib/utils';
import { SEO } from '@/components/seo';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { ImageGallery } from '@/components/image-gallery';
import { StatRow } from '@/components/stat-row';
export function generateStaticParams() {
  return galleries.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const g = galleries.find((g) => g.slug === slug);
  return g
    ? SEO(g.title, 'Explore this community photo album.', '/galleries/' + slug)
    : { title: 'Gallery not found' };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const g = galleries.find((g) => g.slug === slug);
  if (!g) notFound();
  return (
    <div data-tint="stone" className="container-shell pt-6 md:pt-10">
      <Breadcrumbs
        items={[{ label: 'Galleries', href: '/galleries' }, { label: g.title }]}
      />
      <h1 className="mt-10 max-w-[12ch] font-serif text-[clamp(3rem,8vw,8.5rem)] leading-[0.92] tracking-[-0.045em] md:mt-16">
        {g.title}
      </h1>
      <div className="mb-12 mt-10 md:mt-14">
        <StatRow
          items={[
            ['Date', formatDate(g.date)],
            ['Images', String(g.images.length)],
            ['Tags', g.tags.join(', ')],
            ['Credit', imageCredit],
          ]}
        />
      </div>
      <ImageGallery images={g.images} title={g.title} masonry />
    </div>
  );
}
