import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, MapPin, Images } from 'lucide-react';
import type { Journal, Event, Gallery, Guide } from '@/lib/mock-data';
import { formatDate } from '@/lib/utils';
import { Card } from '@/components/ui/card';
import { CornerArrow } from '@/components/corner-arrow';
const day = (date: string) =>
  new Intl.DateTimeFormat('en-PH', {
    day: '2-digit',
    timeZone: 'Asia/Manila',
  }).format(new Date(date));
const month = (date: string) =>
  new Intl.DateTimeFormat('en-PH', {
    month: 'short',
    timeZone: 'Asia/Manila',
  }).format(new Date(date));
function Frame({
  href,
  image,
  title,
  overlay,
  children,
}: {
  href: string;
  image: string;
  title: string;
  overlay?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Card className="group hover:border-foreground/25 hover:shadow-[0_18px_40px_-24px_hsl(var(--foreground)/0.35)]">
      <Link href={href} className="flex h-full flex-col">
        <div className="relative aspect-[16/10] overflow-hidden bg-subtle">
          <Image
            src={image}
            alt={`${title} illustrative placeholder`}
            fill
            sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
            className="media-mono object-cover group-hover:scale-[1.03]"
          />
          {overlay}
          <CornerArrow className="absolute right-3 top-3" />
        </div>
        <div className="flex flex-1 flex-col p-5">{children}</div>
      </Link>
    </Card>
  );
}
export function JournalCard({ journal }: { journal: Journal }) {
  return (
    <Frame
      href={`/journals/${journal.slug}`}
      image={journal.coverImage}
      title={journal.title}
    >
      <p className="meta">{journal.tags.join(' · ')}</p>
      <h3 className="mt-2.5 text-lg font-medium tracking-[-0.02em]">
        {journal.title}
      </h3>
      <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">
        {journal.excerpt}
      </p>
      <p className="mt-auto flex justify-between gap-3 border-t pt-4 text-[13px] text-muted">
        <span>{journal.author}</span>
        <span className="tabular-nums">{formatDate(journal.date)}</span>
      </p>
    </Frame>
  );
}
export function EventCard({ event }: { event: Event }) {
  return (
    <Frame
      href={`/events/${event.slug}`}
      image={event.coverImage}
      title={event.title}
      overlay={
        <span className="absolute left-3 top-3 flex flex-col items-center rounded-md bg-surface px-2.5 py-1.5 text-center leading-none shadow-sm">
          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
            {month(event.date)}
          </span>
          <span className="mt-1 text-xl font-medium tabular-nums">
            {day(event.date)}
          </span>
        </span>
      }
    >
      <p className="meta">{event.type} · 7:00 AM PHT</p>
      <h3 className="mt-2.5 text-lg font-medium tracking-[-0.02em]">
        {event.title}
      </h3>
      <p className="mt-auto flex items-center gap-2 border-t pt-4 text-[13px] text-muted">
        <MapPin size={14} aria-hidden="true" className="shrink-0" />
        {event.location}
      </p>
    </Frame>
  );
}
/** Compact hairline row, after the reference's membership-tier table. */
export function EventRow({ event }: { event: Event }) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className="group grid grid-cols-[56px_1fr_auto] items-center gap-4 px-4 py-5 transition-colors hover:!bg-subtle sm:grid-cols-[72px_1fr_1fr_auto] sm:gap-6 sm:px-6"
    >
      <span className="leading-none">
        <span className="block font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
          {month(event.date)}
        </span>
        <span className="mt-1.5 block text-3xl font-medium tabular-nums tracking-[-0.03em]">
          {day(event.date)}
        </span>
      </span>
      <span className="min-w-0">
        <span className="meta block">{event.type}</span>
        <span className="mt-1.5 block truncate text-base font-medium tracking-[-0.01em] sm:text-lg">
          {event.title}
        </span>
      </span>
      <span className="hidden items-center gap-2 text-[13px] text-muted sm:flex">
        <MapPin size={14} aria-hidden="true" className="shrink-0" />
        {event.location}
      </span>
      <CornerArrow className="bg-transparent ring-1 ring-border transition-colors group-hover:bg-accent group-hover:ring-transparent" />
    </Link>
  );
}
export function GalleryCard({ gallery }: { gallery: Gallery }) {
  return (
    <Frame
      href={`/galleries/${gallery.slug}`}
      image={gallery.coverImage}
      title={gallery.title}
      overlay={
        <span className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-md bg-surface/90 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] backdrop-blur">
          <Images size={12} aria-hidden="true" />
          {gallery.images.length} images
        </span>
      }
    >
      <h3 className="text-lg font-medium tracking-[-0.02em]">
        {gallery.title}
      </h3>
      <p className="meta mt-3">{formatDate(gallery.date)}</p>
    </Frame>
  );
}
export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Frame
      href={`/guides/${guide.slug}`}
      image={guide.coverImage}
      title={guide.title}
    >
      <p className="meta">
        {guide.generation} · {guide.category}
      </p>
      <h3 className="mt-2.5 text-lg font-medium tracking-[-0.02em]">
        {guide.title}
      </h3>
      <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">
        {guide.excerpt}
      </p>
      <span className="mt-auto flex items-center gap-2 border-t pt-4 text-[13px] font-medium">
        Read the guide
        <ArrowUpRight size={14} aria-hidden="true" />
      </span>
    </Frame>
  );
}
