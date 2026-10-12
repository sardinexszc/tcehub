import { notFound } from 'next/navigation';
import { galleries } from '@/lib/mock-data';
import { formatDate } from '@/lib/utils';
import { SEO } from '@/components/seo';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { ImageGallery } from '@/components/image-gallery';
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
    <div className="container-shell py-10">
      <Breadcrumbs
        items={[{ label: 'Galleries', href: '/galleries' }, { label: g.title }]}
      />
      <h1 className="page-title">{g.title}</h1>
      <p className="mb-10 mt-5 text-muted">
        {formatDate(g.date)} · {g.images.length} images · {g.tags.join(' / ')}
      </p>
      <ImageGallery images={g.images} title={g.title} masonry />
    </div>
  );
}
