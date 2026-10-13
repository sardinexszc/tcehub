import Image from 'next/image';
import Link from 'next/link';
import { navigation } from '@/lib/navigation';
import { events, demoToday, imageCredit, wallpapers } from '@/lib/mock-data';
import { formatDate } from '@/lib/utils';
export function Footer() {
  const next = events
    .filter((e) => e.date >= demoToday)
    .sort((a, b) => a.date.localeCompare(b.date))[0];
  return (
    <footer className="container-shell mt-24 pb-6 text-[15px] md:mt-36">
      <div className="grid gap-12 md:grid-cols-[1fr_1fr] lg:grid-cols-[2fr_1fr_1fr]">
        <div className="max-w-[180px]">
          <p className="meta mb-2">
            Currently celebrating
            <br />
            the XV40 generation
          </p>
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-subtle">
            <Image
              src={wallpapers[0]}
              alt="Illustrated silver XV40 Camry on a dark textured backdrop"
              fill
              sizes="180px"
              className="object-cover grayscale"
            />
          </div>
        </div>
        <div className="grid content-start gap-5">
          <h2 className="eyebrow">Recently</h2>
          <p className="max-w-xs">
            We’re building the most useful directory for Camry owners.{' '}
            <Link href="/contact#submit-shop" className="link-u">
              Submit a shop
            </Link>{' '}
            or{' '}
            <Link href="/about" className="link-u">
              learn more →
            </Link>
          </p>
          {next && (
            <p className="max-w-xs">
              Next on the calendar:{' '}
              <Link href={`/events/${next.slug}`} className="link-u">
                {next.title}
              </Link>
              , {formatDate(next.date)}.
            </p>
          )}
        </div>
        <div className="grid content-start gap-5">
          <h2 className="eyebrow">Explore</h2>
          <ul className="grid gap-1">
            {navigation.map(([label, href], i) => (
              <li key={href}>
                <Link
                  href={href}
                  className="transition-opacity hover:opacity-60"
                >
                  <sup className="mr-0.5 text-[9px]">({i + 1})</sup>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-muted">
            Facebook, Instagram
            <br />
            (coming soon)
          </p>
        </div>
      </div>
      <div className="meta mt-16 flex flex-wrap justify-between gap-x-6 gap-y-2 md:mt-24">
        <span>
          © {new Date().getFullYear()} TCEHub — independent, not affiliated with
          Toyota
        </span>
        <span>{imageCredit} · demo content</span>
      </div>
    </footer>
  );
}
