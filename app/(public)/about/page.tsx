import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { SEO } from '@/components/seo';
import { PageHeader } from '@/components/page-header';
export const metadata = SEO(
  'About',
  'What TCEHub is, what you’ll find here, and how shops are listed.',
  '/about',
);
const sections = [
  [
    'Shop directory',
    'Independent workshops, parts suppliers, and detailers that Camry owners have used and would recommend. Filter by service, region, and generation.',
    '/shops',
  ],
  [
    'Build journals',
    'Owners’ write-ups of repairs, restorations, and long-term ownership, with costs where they’re willing to share them.',
    '/journals',
  ],
  [
    'Events',
    'Meets, cruises, shows, and the occasional track day, mostly around Metro Manila and Central Luzon.',
    '/events',
  ],
  [
    'Ownership guides',
    'Buying advice and maintenance basics for each generation, from the XV10 to the XV80.',
    '/guides',
  ],
] as const;
export default function About() {
  return (
    <div className="container-shell pb-8 pt-10 md:pt-14">
      <PageHeader title="About TCEHub" />
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
        <div className="max-w-xl">
          <p className="text-xl leading-8 md:text-2xl md:leading-9">
            TCEHub (Toyota Camry Elite Hub) is a directory and community site
            for people who own, maintain, and enjoy Camrys in the Philippines.
          </p>
          <p className="mt-6 leading-7 text-muted">
            It started from a simple problem: finding a mechanic who knows an
            older Camry usually means asking around in group chats. TCEHub
            collects those recommendations in one place, alongside owners’ build
            stories and a calendar of meets.
          </p>
          <h2 className="meta mt-10">How shops are listed</h2>
          <p className="mt-3 leading-7 text-muted">
            Shops are added from owner submissions. Each listing notes the
            services offered and the generations the shop works on.
          </p>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden bg-subtle">
          <Image
            src="/images/scene-dusk.svg"
            alt="Illustration of a Camry on an open road at dusk"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
      <section aria-labelledby="whats-here" className="section-space mt-6">
        <h2
          id="whats-here"
          className="section-title border-t-2 border-foreground pt-4"
        >
          What’s on the site
        </h2>
        <dl className="mt-8 grid gap-x-10 border-t md:grid-cols-2">
          {sections.map(([title, body, href]) => (
            <div key={title} className="border-b py-6">
              <dt>
                <Link
                  href={href}
                  className="group inline-flex items-center gap-1 text-lg font-semibold hover:text-accent"
                >
                  {title}
                  <ChevronRight size={17} aria-hidden="true" />
                </Link>
              </dt>
              <dd className="mt-2 max-w-md leading-7 text-muted">{body}</dd>
            </div>
          ))}
        </dl>
      </section>
      <p className="border-t pt-6 text-xs leading-5 text-muted">
        TCEHub is an independent community project, not affiliated with or
        endorsed by Toyota Motor Corporation or Toyota Motor Philippines. This
        preview contains fictional demo content.
      </p>
    </div>
  );
}
