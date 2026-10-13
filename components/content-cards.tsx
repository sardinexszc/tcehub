import Link from 'next/link';
import Image from 'next/image';
import type { Journal, Event, Gallery, Guide } from '@/lib/mock-data';
import { formatDate } from '@/lib/utils';
import { ArrowDisc } from '@/components/ui/button';
/** Eloqwnt "showreel" card: framed media on a soft well, caption row beneath. */
export function MediaCard({
  href,
  image,
  title,
  meta,
  excerpt,
  aspect = 'aspect-[4/3]',
}: {
  href: string;
  image: string;
  title: string;
  meta: React.ReactNode;
  excerpt?: string;
  aspect?: string;
}) {
  return (
    <article className="group rounded-[28px] bg-surface p-2">
      <Link href={href} className="block">
        <div
          className={`relative overflow-hidden rounded-[22px] bg-night ${aspect}`}
        >
          <Image
            src={image}
            alt={`${title}, illustrative image`}
            fill
            sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <ArrowDisc className="absolute right-3 top-3" />
        </div>
        <div className="px-3 pb-3 pt-4">
          <h3 className="text-[21px] font-medium leading-tight tracking-[-0.025em]">
            {title}
          </h3>
          {excerpt && (
            <p className="mt-2 line-clamp-2 text-[15px] text-muted">
              {excerpt}
            </p>
          )}
          <p className="mt-3 text-[14px] text-muted">{meta}</p>
        </div>
      </Link>
    </article>
  );
}
export function JournalCard({ journal }: { journal: Journal; index?: number }) {
  return (
    <MediaCard
      href={`/journals/${journal.slug}`}
      image={journal.coverImage}
      title={journal.title}
      excerpt={journal.excerpt}
      meta={`${journal.author}, ${formatDate(journal.date)}`}
    />
  );
}
export function EventCard({ event }: { event: Event; index?: number }) {
  return (
    <MediaCard
      href={`/events/${event.slug}`}
      image={event.coverImage}
      title={event.title}
      meta={`${formatDate(event.date)}, ${event.location}`}
    />
  );
}
export function GalleryCard({ gallery }: { gallery: Gallery; index?: number }) {
  return (
    <MediaCard
      href={`/galleries/${gallery.slug}`}
      image={gallery.coverImage}
      title={gallery.title}
      aspect="aspect-square"
      meta={`${gallery.images.length} images, ${formatDate(gallery.date)}`}
    />
  );
}
export function GuideCard({ guide }: { guide: Guide; index?: number }) {
  return (
    <MediaCard
      href={`/guides/${guide.slug}`}
      image={guide.coverImage}
      title={guide.title}
      excerpt={guide.excerpt}
      meta={`${guide.category} for the ${guide.generation}`}
    />
  );
}
