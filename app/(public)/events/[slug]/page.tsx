import Image from 'next/image';
import { notFound } from 'next/navigation';
import { events, cutouts } from '@/lib/mock-data';
import { formatDate, sentence } from '@/lib/utils';
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
    <div className="shell grid gap-3 md:gap-5">
      <header className="relative isolate overflow-hidden rounded-panel bg-night p-6 text-white md:p-12">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-[22%] top-[30%] -z-10 opacity-90 [mask-image:radial-gradient(ellipse_55%_60%_at_50%_55%,#000_40%,transparent)] md:bottom-[18%] md:left-[38%] md:top-[6%]"
        >
          <Image
            src={cutouts[events.indexOf(e) % cutouts.length]}
            alt=""
            fill
            priority
            sizes="70vw"
            className="object-contain object-bottom"
          />
        </div>
        <Breadcrumbs
          tone="night"
          items={[{ label: 'Events', href: '/events' }, { label: e.title }]}
        />
        <p className="label mt-10 text-white/60">Community {e.type}</p>
        <h1 className="display mt-5 max-w-[10ch] text-[clamp(3.5rem,9vw,8rem)]">
          {e.title}
        </h1>
        <div className="mt-[clamp(8rem,22vw,18rem)] border-t border-white/15 pt-8">
          <StatRow
            tone="night"
            items={[
              ['Date', formatDate(e.date)],
              ['Starts', '7:00 AM'],
              ['Venue', e.location],
              ['Entry', 'Free, all generations'],
            ]}
          />
        </div>
      </header>
      <section
        aria-labelledby="about-meet"
        className="panel grid gap-10 p-6 md:grid-cols-2 md:p-12"
      >
        <div>
          <h2
            id="about-meet"
            className="text-[28px] font-medium tracking-[-0.03em]"
          >
            About this {e.type}
          </h2>
          <p className="mt-4 max-w-lg text-muted">{sentence(e.description)}</p>
          <p className="mt-6 text-[14px] text-muted">
            Fictional event for the interface preview. Calendar invites are
            coming soon.
          </p>
        </div>
        <MapPlaceholder label="Venue map coming soon" />
      </section>
    </div>
  );
}
