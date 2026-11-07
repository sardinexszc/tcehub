import { SEO } from '@/components/seo';
import { PageHeader } from '@/components/page-header';
import { JournalList } from '@/components/content-lists';
export const metadata = SEO(
  'Journals',
  'Repair, restoration, and long-term ownership write-ups from Camry owners.',
  '/journals',
);
export default function Page() {
  return (
    <div className="container-shell pb-12 pt-10 md:pt-14">
      <PageHeader
        title="Build journals"
        description="Owners write up their repairs, restorations, and long-term ownership, including what it cost and what they would do differently."
      />
      <JournalList />
    </div>
  );
}
