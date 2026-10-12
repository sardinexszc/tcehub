import { SEO } from '@/components/seo';
import { JournalList } from '@/components/content-lists';
export const metadata = SEO(
  'Journals',
  'Stories, decisions, and lessons from the people behind the wheel.',
  '/journals',
);
export default function Page() {
  return (
    <div className="container-shell py-12">
      <p className="eyebrow mb-4">Behind the build</p>
      <h1 className="page-title">Built to be driven.</h1>
      <p className="mb-10 mt-5 max-w-xl leading-7 text-muted">
        Stories, decisions, and lessons from the people behind the wheel.
      </p>
      <JournalList />
    </div>
  );
}
