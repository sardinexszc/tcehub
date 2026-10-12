import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, CalendarDays, MapPin, Images } from 'lucide-react';
import type { Journal, Event, Gallery, Guide } from '@/lib/mock-data';
import { formatDate } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
function Frame({
  href,
  image,
  title,
  children,
}: {
  href: string;
  image: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Card className="group hover:border-muted">
      <Link href={href} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={image}
            alt={`${title} illustrative placeholder`}
            fill
            sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-5">{children}</div>
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
      <div className="mb-3 flex gap-2">
        {journal.tags.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
      <h3 className="text-lg font-semibold">{journal.title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{journal.excerpt}</p>
      <p className="mt-5 text-xs text-muted">
        {journal.author} <span className="mx-2">/</span>
        {formatDate(journal.date)}
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
    >
      <Badge className="mb-3">{event.type}</Badge>
      <h3 className="text-lg font-semibold">{event.title}</h3>
      <p className="mt-4 flex items-center gap-2 text-xs text-muted">
        <CalendarDays size={14} />
        {formatDate(event.date)} · 7:00 AM PHT
      </p>
      <p className="mt-2 flex items-center gap-2 text-xs text-muted">
        <MapPin size={14} />
        {event.location}
      </p>
    </Frame>
  );
}
export function GalleryCard({ gallery }: { gallery: Gallery }) {
  return (
    <Frame
      href={`/galleries/${gallery.slug}`}
      image={gallery.coverImage}
      title={gallery.title}
    >
      <div className="flex justify-between gap-3">
        <h3 className="text-lg font-semibold">{gallery.title}</h3>
        <Images className="shrink-0 text-muted" size={18} />
      </div>
      <p className="mt-3 text-xs text-muted">
        {gallery.images.length} images · {formatDate(gallery.date)}
      </p>
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
      <div className="mb-3 flex gap-2">
        <Badge>{guide.generation}</Badge>
        <Badge>{guide.category}</Badge>
      </div>
      <h3 className="text-lg font-semibold">{guide.title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted">{guide.excerpt}</p>
      <span className="mt-5 flex items-center gap-2 text-sm">
        Read the guide
        <ArrowUpRight size={15} />
      </span>
    </Frame>
  );
}
