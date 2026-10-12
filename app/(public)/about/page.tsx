import { SEO } from '@/components/seo';
export const metadata = SEO(
  'About the community',
  'A home for every generation of Toyota Camry enthusiast.',
  '/about',
);
export default function About() {
  return (
    <div className="container-shell section-space">
      <p className="eyebrow mb-5">The people behind the cars</p>
      <h1 className="page-title max-w-3xl">
        A shared road.
        <br />A shared passion.
      </h1>
      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <p className="text-xl leading-9 text-muted">
          Toyota Camry Elite Hub brings together the specialists, stories, and
          gatherings that make ownership more rewarding. Whether yours is a
          cherished XV20 or a new XV80, there’s a place for it here.
        </p>
        <div className="space-y-8">
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
          ].map(([title, body]) => (
            <section key={title}>
              <h2 className="mb-3 text-xl font-semibold">{title}</h2>
              <p className="leading-7 text-muted">{body}</p>
            </section>
          ))}
        </div>
      </div>
      <p className="mt-16 border-t pt-6 text-sm text-muted">
        TCEHub is an independent community project, not affiliated with or
        endorsed by Toyota. This front-end skeleton contains fictional demo
        content.
      </p>
    </div>
  );
}
