import { SEO } from '@/components/seo';
import { GuideList } from '@/components/content-lists';
export const metadata = SEO(
  'Guides',
  'Practical starting points for buying, maintaining, and enjoying your car.',
  '/guides',
);
export default function Page() {
  return (
    <div className="container-shell py-12">
      <p className="eyebrow mb-4">The ownership bookshelf</p>
      <h1 className="page-title">Know your Camry.</h1>
      <p className="mb-10 mt-5 max-w-xl leading-7 text-muted">
        Practical starting points for buying, maintaining, and enjoying your
        car.
      </p>
      <GuideList />
    </div>
  );
}
