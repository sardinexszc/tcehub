import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, MapPin } from 'lucide-react';
import type { Journal, Event, Gallery, Guide } from '@/lib/mock-data';
import { formatDate } from '@/lib/utils';
const tz = { timeZone: 'Asia/Manila' } as const;
export const day = (date: string) =>
  new Intl.DateTimeFormat('en-PH', { day: 'numeric', ...tz }).format(
    new Date(date),
  );
export const month = (date: string) =>
  new Intl.DateTimeFormat('en-PH', { month: 'short', ...tz }).format(
    new Date(date),
  );
export const weekday = (date: string) =>
  new Intl.DateTimeFormat('en-PH', { weekday: 'short', ...tz }).format(
    new Date(date),
  );
export const time = (date: string) =>
  new Intl.DateTimeFormat('en-PH', {
    hour: 'numeric',
    minute: '2-digit',
    ...tz,
  }).format(new Date(date));
function Cover({
  src,
  alt,
  ratio = 'aspect-[3/2]',
  sizes = '(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw',
  priority,
  children,
}: {
  src: string;
  alt: string;
  ratio?: string;
  sizes?: string;
  priority?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className={`relative overflow-hidden bg-subtle ${ratio}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
      />
      {children}
    </div>
  );
}
const titleHover = 'group-hover:underline group-hover:underline-offset-4';
export function JournalCard({
  journal,
  lead = false,
}: {
  journal: Journal;
  lead?: boolean;
}) {
  return (
    <article className="group">
      <Link
        href={`/journals/${journal.slug}`}
        className={
          lead ? 'grid gap-6 md:grid-cols-[1.4fr_1fr] md:gap-8' : 'block'
        }
      >
        <Cover
          src={journal.coverImage}
          alt={`${journal.title}, illustrative placeholder`}
          sizes={lead ? '(max-width:768px) 100vw, 60vw' : undefined}
        />
        <div className={lead ? 'self-center' : 'mt-4'}>
          <p className="eyebrow">{journal.tags.join(' · ')}</p>
          <h3
            className={
              lead
                ? `display mt-3 text-3xl md:text-[2.5rem] ${titleHover}`
                : `mt-1.5 text-lg font-semibold leading-snug ${titleHover}`
            }
          >
            {journal.title}
          </h3>
          <p
            className={`mt-2 text-muted ${lead ? 'text-base leading-7' : 'line-clamp-2 text-sm leading-6'}`}
          >
            {journal.excerpt}
          </p>
          <p className="mt-3 text-[13px] text-muted">
            By{' '}
            <span className="font-medium text-foreground">
              {journal.author}
            </span>{' '}
            · {formatDate(journal.date)}
          </p>
        </div>
      </Link>
    </article>
  );
}
/** Calendar row: date, title, type, place. Used on the home page and events page. */
export function EventRow({ event }: { event: Event }) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className="group grid grid-cols-[64px_1fr_auto] items-center gap-4 border-b py-5 sm:grid-cols-[88px_1.4fr_1fr_auto] sm:gap-6"
    >
      <span className="leading-none">
        <span className="block text-xs font-semibold uppercase tracking-[0.06em] text-accent">
          {month(event.date)}
        </span>
        <span className="display mt-1 block text-4xl tabular-nums">
          {day(event.date)}
        </span>
        <span className="mt-1 block text-xs text-muted">
          {weekday(event.date)}
        </span>
      </span>
      <span className="min-w-0">
        <span className="meta block">
          {event.type} · {time(event.date)}
        </span>
        <span
          className={`mt-1 block text-base font-semibold sm:text-lg ${titleHover}`}
        >
          {event.title}
        </span>
        <span className="mt-1 flex items-center gap-1.5 text-[13px] text-muted sm:hidden">
          <MapPin size={13} aria-hidden="true" className="shrink-0" />
          {event.location}
        </span>
      </span>
      <span className="hidden items-center gap-2 text-sm text-muted sm:flex">
        <MapPin size={14} aria-hidden="true" className="shrink-0" />
        {event.location}
      </span>
      <ChevronRight
        size={18}
        aria-hidden="true"
        className="text-muted transition-colors group-hover:text-accent"
      />
    </Link>
  );
}
export function GalleryCard({ gallery }: { gallery: Gallery }) {
  return (
    <article className="group">
      <Link href={`/galleries/${gallery.slug}`} className="block">
        <Cover
          src={gallery.coverImage}
          alt={`${gallery.title}, illustrative placeholder`}
          ratio="aspect-[4/3]"
        />
        <h3 className={`mt-4 text-lg font-semibold leading-snug ${titleHover}`}>
          {gallery.title}
        </h3>
        <p className="mt-1 text-[13px] text-muted">
          {gallery.images.length} photos · {formatDate(gallery.date)}
        </p>
      </Link>
    </article>
  );
}
export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <article className="group">
      <Link href={`/guides/${guide.slug}`} className="block">
        <Cover
          src={guide.coverImage}
          alt={`${guide.title}, illustrative placeholder`}
        />
        <p className="eyebrow mt-4">
          {guide.generation} · {guide.category}
        </p>
        <h3
          className={`mt-1.5 text-lg font-semibold leading-snug ${titleHover}`}
        >
          {guide.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">
          {guide.excerpt}
        </p>
      </Link>
    </article>
  );
}
/** Compact text row for guide lists: generation code, title, category. */
export function GuideRow({ guide }: { guide: Guide }) {
  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="group grid grid-cols-[64px_1fr_auto] items-baseline gap-4 border-b py-4"
    >
      <span className="display text-xl">{guide.generation}</span>
      <span>
        <span className={`block font-semibold ${titleHover}`}>
          {guide.title}
        </span>
        <span className="mt-0.5 block text-[13px] text-muted">
          {guide.category}
        </span>
      </span>
      <ChevronRight
        size={18}
        aria-hidden="true"
        className="self-center text-muted transition-colors group-hover:text-accent"
      />
    </Link>
  );
}
