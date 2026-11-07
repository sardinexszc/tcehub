import Image from 'next/image';
import { notFound } from 'next/navigation';
import { events, demoToday } from '@/lib/mock-data';
import { formatDate } from '@/lib/utils';
import { SEO } from '@/components/seo';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Button } from '@/components/ui/button';
import { MapPlaceholder } from '@/components/map-placeholder';
import { SectionHeading } from '@/components/section-heading';
import { EventRow, time, weekday } from '@/components/content-cards';
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
  const past = e.date < demoToday;
  const others = events
    .filter((x) => x.id !== e.id && x.date >= demoToday)
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 3);
  return (
    <div className="container-shell pb-8 pt-8">
      <Breadcrumbs
        items={[{ label: 'Events', href: '/events' }, { label: e.title }]}
      />
      <p className="eyebrow">
        {e.type}
        {past && ' · Past event'}
      </p>
      <h1 className="page-title mt-3">{e.title}</h1>
      <p className="mt-4 text-lg">
        {weekday(e.date)}, {formatDate(e.date)} · {time(e.date)} ·{' '}
        <span className="text-muted">{e.location}</span>
      </p>
      <div className="relative my-10 aspect-[16/9] overflow-hidden bg-subtle md:aspect-[21/9]">
        <Image
          src={e.coverImage}
          alt={`${e.title}, illustrative placeholder`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="grid gap-12 lg:grid-cols-[1fr_340px]">
        <div>
          <h2 className="section-title text-2xl md:text-3xl">What to expect</h2>
          <p className="mt-4 max-w-2xl text-base leading-8">{e.description}</p>
          <div className="mt-10">
            <MapPlaceholder
              label="Venue map coming soon"
              address={e.location}
            />
          </div>
        </div>
        <aside className="h-fit border-t-2 border-foreground lg:sticky lg:top-24">
          <dl className="divide-y text-sm">
            {[
              ['Date', `${weekday(e.date)}, ${formatDate(e.date)}`],
              ['Time', `${time(e.date)} PHT`],
              ['Venue', e.location],
              ['Type', e.type],
              ['Cost', 'Free (demo)'],
            ].map(([k, v]) => (
              <div key={k} className="grid grid-cols-[72px_1fr] gap-3 py-3.5">
                <dt className="text-muted">{k}</dt>
                <dd className="capitalize">{v}</dd>
              </div>
            ))}
          </dl>
          <Button disabled className="mt-4 w-full">
            Add to calendar (coming soon)
          </Button>
          <p className="mt-3 text-xs text-muted">
            Fictional event for interface preview.
          </p>
        </aside>
      </div>
      {others.length > 0 && (
        <section className="section-space mt-6">
          <SectionHeading
            title="Other upcoming meets"
            href="/events"
            linkLabel="Full calendar"
          />
          <div className="border-t">
            {others.map((x) => (
              <EventRow key={x.id} event={x} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
