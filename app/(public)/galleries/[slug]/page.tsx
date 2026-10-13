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
    <div className="shell grid gap-3 md:gap-5">
      <header className="panel p-6 md:p-12">
        <Breadcrumbs
          items={[
            { label: 'Galleries', href: '/galleries' },
            { label: g.title },
          ]}
        />
        <h1 className="mt-10 max-w-[16ch] text-[clamp(2.75rem,6vw,5rem)] font-medium leading-[0.98] tracking-[-0.045em]">
          {g.title}
        </h1>
        <div className="mt-12 border-t pt-8">
          <StatRow
            items={[
              ['Shot on', formatDate(g.date)],
              ['Photos', String(g.images.length)],
              ['Tagged', g.tags.join(', ')],
              ['Artwork', imageCredit.replace('Illustrations © ', '')],
            ]}
          />
        </div>
      </header>
      <div className="panel p-3">
        <ImageGallery images={g.images} title={g.title} masonry />
      </div>
    </div>
  );
}
