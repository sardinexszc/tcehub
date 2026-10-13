import Image from 'next/image';
import { notFound } from 'next/navigation';
import { events } from '@/lib/mock-data';
import { formatDate } from '@/lib/utils';
import { SEO } from '@/components/seo';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPlaceholder } from '@/components/map-placeholder';
export function generateStaticParams() {
  return events.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const e = events.find((e) => e.slug === slug);
  return e
    ? SEO(e.title, e.description, '/events/' + slug)
    : { title: 'Event not found' };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const e = events.find((e) => e.slug === slug);
  if (!e) notFound();
  return (
    <div className="container-shell py-10">
      <Breadcrumbs
        items={[{ label: 'Events', href: '/events' }, { label: e.title }]}
      />
      <Badge className="mb-5">{e.type}</Badge>
      <h1 className="page-title">{e.title}</h1>
      <div className="relative my-10 aspect-[16/7] overflow-hidden rounded-xl">
        <Image
          src={e.coverImage}
          alt={`${e.title} illustrative placeholder`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="grid gap-10 md:grid-cols-[2fr_1fr]">
        <div>
          <h2 className="mb-4 text-2xl font-medium tracking-[-0.02em]">
            About the gathering
          </h2>
          <p className="mb-8 leading-8 text-muted">{e.description}</p>
          <MapPlaceholder label="Event location map coming soon" />
        </div>
        <aside className="h-fit rounded-xl border bg-surface p-6 md:sticky md:top-24">
          <h2 className="text-lg font-medium tracking-[-0.02em]">
            Event details
          </h2>
          <dl className="mt-6 space-y-5 text-sm">
            <div>
              <dt className="text-muted">Date & time</dt>
              <dd className="mt-2">{formatDate(e.date)} · 7:00 AM PHT</dd>
            </div>
            <div>
              <dt className="text-muted">Location</dt>
              <dd className="mt-2">{e.location}</dd>
            </div>
          </dl>
          <Button disabled className="mt-8 w-full">
            Add to Calendar · coming soon
          </Button>
          <p className="mt-3 text-xs text-muted">
            Fictional event for interface preview.
          </p>
        </aside>
      </div>
    </div>
  );
}
