import { SEO } from '@/components/seo';
import { PageHeader } from '@/components/page-header';
export const metadata = SEO(
  'About the community',
  'A home for every generation of Toyota Camry enthusiast.',
  '/about',
);
export default function About() {
  return (
    <div className="container-shell pb-16 pt-10 md:pt-14">
      <PageHeader
        kicker="The people behind the cars"
        title={
          <>
            A shared road.
            <br />A shared passion.
          </>
        }
      />
      <p className="max-w-3xl text-2xl leading-snug tracking-[-0.02em] md:text-3xl">
        Toyota Camry Elite Hub brings together the specialists, stories, and
        gatherings that make ownership more rewarding. Whether yours is a
        cherished XV20 or a new XV80,{' '}
        <span className="text-muted">there’s a place for it here.</span>
      </p>
      <div className="hairline-grid mt-14 md:grid-cols-3">
        {[
          [
            'A useful directory',
            'Discover independent specialists by location, service, and generation.',
          ],
          [
            'Stories with substance',
            'Explore the thinking behind community builds and everyday ownership.',
          ],
          [
            'Respect on every road',
            'Celebrate every generation, welcome different approaches, and drive responsibly.',
          ],
        ].map(([title, body], i) => (
          <section key={title} className="p-6 md:p-8">
            <span className="font-mono text-[11px] tracking-[0.14em] text-muted">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h2 className="mt-10 text-xl font-medium tracking-[-0.02em]">
              {title}
            </h2>
            <p className="mt-3 leading-7 text-muted">{body}</p>
          </section>
        ))}
      </div>
      <p className="meta mt-12 border-t pt-6 normal-case tracking-normal">
        TCEHub is an independent community project, not affiliated with or
        endorsed by Toyota. This front-end skeleton contains fictional demo
        content.
      </p>
    </div>
  );
}
