import Link from 'next/link';
import Image from 'next/image';
import type { Journal, Event, Gallery, Guide } from '@/lib/mock-data';
import { formatDate } from '@/lib/utils';
const pad = (n: number) => String(n).padStart(2, '0');
/** Borderless image + caption, numbered like an index entry. */
export function EditorialCard({
  href,
  image,
  title,
  meta,
  index,
  excerpt,
  aspect = 'aspect-[4/5]',
}: {
  href: string;
  image: string;
  title: string;
  meta: React.ReactNode;
  index?: number;
  excerpt?: string;
  aspect?: string;
}) {
  return (
    <article className="group">
      <Link href={href} className="block">
        <div className={`relative overflow-hidden bg-subtle ${aspect}`}>
          <Image
            src={image}
            alt={`${title}, illustrative image`}
            fill
            sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
            className="media-mono object-cover group-hover:scale-[1.03]"
          />
        </div>
        <div className="mt-3 grid grid-cols-[auto_1fr] gap-x-3 text-[15px]">
          {index !== undefined && <span>({pad(index + 1)})</span>}
          <div className={index === undefined ? 'col-span-2' : ''}>
            <h3 className="font-serif text-2xl leading-[1.05] tracking-[-0.02em] decoration-1 underline-offset-[0.14em] group-hover:underline">
              {title}
            </h3>
            {excerpt && (
              <p className="mt-2 line-clamp-2 max-w-sm text-muted">{excerpt}</p>
            )}
            <p className="meta mt-2">{meta}</p>
          </div>
        </div>
      </Link>
    </article>
  );
}
export function JournalCard({
  journal,
  index,
}: {
  journal: Journal;
  index?: number;
}) {
  return (
    <EditorialCard
      href={`/journals/${journal.slug}`}
      image={journal.coverImage}
      title={journal.title}
      index={index}
      excerpt={journal.excerpt}
      meta={
        <>
          {journal.author} — {formatDate(journal.date)}
        </>
      }
    />
  );
}
export function EventCard({ event, index }: { event: Event; index?: number }) {
  return (
    <EditorialCard
      href={`/events/${event.slug}`}
      image={event.coverImage}
      title={event.title}
      index={index}
      meta={
        <>
          {formatDate(event.date)} — {event.location}
        </>
      }
    />
  );
}
/** Ruled row for upcoming gatherings. */
export function EventRow({ event }: { event: Event }) {
  const d = new Date(event.date);
  const fmt = (o: Intl.DateTimeFormatOptions) =>
    new Intl.DateTimeFormat('en-PH', { ...o, timeZone: 'Asia/Manila' }).format(
      d,
    );
  return (
    <Link
      href={`/events/${event.slug}`}
      className="group grid grid-cols-[4.5rem_1fr] items-baseline gap-x-4 gap-y-1 py-4 md:grid-cols-[1fr_2fr_1fr_auto] md:gap-x-6"
    >
      <span className="text-[15px] tabular-nums">
        {fmt({ day: '2-digit' })}.{fmt({ month: '2-digit' })}
        <span className="text-muted">.{fmt({ year: '2-digit' })}</span>
      </span>
      <span className="font-serif text-2xl leading-tight tracking-[-0.02em] decoration-1 underline-offset-[0.14em] group-hover:underline md:text-3xl">
        {event.title}
      </span>
      <span className="col-start-2 text-[15px] text-muted md:col-start-auto">
        {event.location}
      </span>
      <span className="meta hidden md:block">({event.type}) →</span>
    </Link>
  );
}
export function GalleryCard({
  gallery,
  index,
}: {
  gallery: Gallery;
  index?: number;
}) {
  return (
    <EditorialCard
      href={`/galleries/${gallery.slug}`}
      image={gallery.coverImage}
      title={gallery.title}
      index={index}
      aspect="aspect-square"
      meta={
        <>
          {gallery.images.length} images — {formatDate(gallery.date)}
        </>
      }
    />
  );
}
export function GuideCard({ guide, index }: { guide: Guide; index?: number }) {
  return (
    <EditorialCard
      href={`/guides/${guide.slug}`}
      image={guide.coverImage}
      title={guide.title}
      index={index}
      excerpt={guide.excerpt}
      meta={
        <>
          {guide.generation} — {guide.category}
        </>
      }
    />
  );
}
