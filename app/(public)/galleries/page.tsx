import { SEO } from '@/components/seo';
import { GalleryList } from '@/components/content-lists';
export const metadata = SEO(
  'Galleries',
  'Community gatherings, memorable roads, and details worth a closer look.',
  '/galleries',
);
export default function Page() {
  return (
    <div className="container-shell py-12">
      <p className="eyebrow mb-4">Through the lens</p>
      <h1 className="page-title">The moments between drives.</h1>
      <p className="mb-10 mt-5 max-w-xl leading-7 text-muted">
        Community gatherings, memorable roads, and details worth a closer look.
      </p>
      <GalleryList />
    </div>
  );
}
