import Image from 'next/image';
import { notFound } from 'next/navigation';
import { events, cutouts } from '@/lib/mock-data';
import { formatDate } from '@/lib/utils';
import { SEO } from '@/components/seo';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { MapPlaceholder } from '@/components/map-placeholder';
import { StatRow } from '@/components/stat-row';
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
    <div data-tint="blush" className="container-shell pt-6 md:pt-10">
      <Breadcrumbs
        items={[{ label: 'Events', href: '/events' }, { label: e.title }]}
      />
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -top-6 bottom-0 md:left-[30%]"
        >
          <Image
            src={cutouts[events.indexOf(e) % cutouts.length]}
            alt=""
            fill
            priority
            sizes="70vw"
            className="object-contain opacity-50 grayscale"
          />
        </div>
        <h1 className="relative mt-10 max-w-[10ch] py-10 font-serif text-[clamp(3rem,9vw,9.5rem)] leading-[0.9] tracking-[-0.045em] md:mt-16 md:py-20">
          <span className="block font-sans text-[15px] tracking-normal">
            (Community {e.type})
          </span>
          {e.title}
        </h1>
      </div>
      <StatRow
        items={[
          ['Date', formatDate(e.date)],
          ['Time', '7:00 AM PHT'],
          ['Venue', e.location],
          ['Registration', 'Coming soon'],
        ]}
      />
      <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-5">
        <h2 className="eyebrow">About the gathering</h2>
        <div className="grid gap-10">
          <p className="max-w-[22em] font-serif text-3xl leading-[1.15] tracking-[-0.025em] md:text-4xl">
            {e.description}
          </p>
          <MapPlaceholder label="Event location map coming soon" />
          <p className="meta text-muted">
            Fictional event for interface preview · add to calendar coming soon
          </p>
        </div>
      </div>
    </div>
  );
}
