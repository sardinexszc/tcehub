import { SEO } from '@/components/seo';
import { PageHeader } from '@/components/page-header';
import { JournalList } from '@/components/content-lists';
export const metadata = SEO(
  'Journals',
  'Stories, decisions, and lessons from the people behind the wheel.',
  '/journals',
);
export default function Page() {
  return (
    <div className="container-shell pb-12 pt-10 md:pt-14">
      <PageHeader
        kicker="Behind the build"
        title="Built to be driven."
        description="Stories, decisions, and lessons from the people behind the wheel."
      />
      <JournalList />
    </div>
  );
}
