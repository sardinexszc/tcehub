import Image from 'next/image';
import { SEO } from '@/components/seo';
import { cutouts } from '@/lib/mock-data';
export const metadata = SEO(
  'About the community',
  'A home for every generation of Toyota Camry enthusiast.',
  '/about',
);
const principles = [
  [
    'A useful directory',
    'Independent specialists by location, service, and generation.',
  ],
  [
    'Stories with substance',
    'The thinking behind community builds and everyday ownership.',
  ],
  [
    'Respect on every road',
    'Every generation celebrated, every approach welcome, always driven responsibly.',
  ],
];
export default function About() {
  return (
    <div data-tint="blush" className="container-shell pt-8 md:pt-14">
      <h1 className="page-title">(A Shared Road)</h1>
      <p className="mt-12 max-w-[17em] font-serif text-[clamp(2rem,4.6vw,4.75rem)] leading-[1.04] tracking-[-0.035em] md:mt-20 md:indent-[33%]">
        Toyota Camry Elite Hub brings together the specialists, stories, and
        gatherings that make ownership more rewarding. Whether yours is a
        cherished XV20 or a new XV80,{' '}
        <span className="relative inline-block h-[0.8em] w-[1.6em] align-[-0.04em]">
          <Image
            src={cutouts[1]}
            alt=""
            fill
            sizes="140px"
            className="object-contain"
          />
        </span>{' '}
        there’s a place for it here.
      </p>
      <div className="mt-20 grid gap-8 md:mt-32 lg:grid-cols-2 lg:gap-5">
        <h2 className="eyebrow">What we believe</h2>
        <div className="grid grid-cols-[3rem_1fr] md:grid-cols-[1fr_3fr]">
          <span className="border-t border-foreground py-2 text-[15px]">
            ({principles.length})
          </span>
          <ol className="rule-list">
            {principles.map(([title, body], i) => (
              <li
                key={title}
                className="grid grid-cols-[1fr_auto] gap-x-4 py-3 text-[15px]"
              >
                <span>
                  {title}
                  <span className="mt-1 block text-muted">{body}</span>
                </span>
                <span className="tabular-nums">{i + 1}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <p className="meta mt-20 max-w-md text-muted">
        TCEHub is an independent community project, not affiliated with or
        endorsed by Toyota. This front-end preview contains fictional demo
        content.
      </p>
    </div>
  );
}
