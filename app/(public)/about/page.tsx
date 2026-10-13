import Image from 'next/image';
import { SEO } from '@/components/seo';
import { PageIntro } from '@/components/page-intro';
import { StatRow } from '@/components/stat-row';
import { wallpapers, shops, generations, journals } from '@/lib/mock-data';
export const metadata = SEO(
  'About the community',
  'A home for every generation of Toyota Camry enthusiast.',
  '/about',
);
const beliefs = [
  [
    'Recommendations over reviews',
    'A shop is listed because an owner trusted it with their own car, not because it paid to be here.',
  ],
  [
    'Every generation counts',
    'A well-kept XV20 gets the same respect as a brand-new XV80.',
  ],
  [
    'Drive responsibly',
    'Meets are relaxed and neighbour-friendly. Keep the noise down and leave the venue cleaner than you found it.',
  ],
];
export default function About() {
  return (
    <div className="shell grid gap-3 md:gap-5">
      <PageIntro
        label="About TCEHub"
        title="Started by owners, for owners"
        intro={
          <p>
            TCEHub began as a group chat of XV40 owners trading shop
            recommendations. It is now a home for every Camry generation in the
            Philippines.
          </p>
        }
      >
        <div className="border-t pt-8">
          <StatRow
            items={[
              ['Shops recommended', String(shops.length)],
              ['Generations covered', String(generations.length)],
              ['Build stories', String(journals.length)],
              ['Membership fee', 'None'],
            ]}
          />
        </div>
      </PageIntro>
      <section
        aria-labelledby="beliefs-title"
        className="panel grid gap-10 p-6 md:grid-cols-[1fr_1.4fr] md:p-12"
      >
        <figure className="max-w-[300px] rounded-[24px] bg-subtle p-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] bg-night">
            <Image
              src={wallpapers[0]}
              alt="Illustrated silver Camry XV40 on a dark textured backdrop"
              fill
              sizes="300px"
              className="object-cover"
            />
          </div>
          <figcaption className="flex items-center justify-between px-2 pb-1 pt-3 text-[15px] font-medium">
            The founder’s XV40
            <span className="text-[13px] font-normal text-muted">
              by STXNCED
            </span>
          </figcaption>
        </figure>
        <div>
          <h2 id="beliefs-title" className="heading max-w-[16ch]">
            What we hold to
          </h2>
          <dl className="mt-8 divide-y border-y">
            {beliefs.map(([title, body]) => (
              <div
                key={title}
                className="grid gap-2 py-6 md:grid-cols-[1fr_1.3fr] md:gap-8"
              >
                <dt className="text-[21px] font-medium tracking-[-0.02em]">
                  {title}
                </dt>
                <dd className="text-muted">{body}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-[14px] text-muted">
            TCEHub is an independent community project, not affiliated with or
            endorsed by Toyota. Listings in this preview are demo content.
          </p>
        </div>
      </section>
    </div>
  );
}
