import { SEO } from '@/components/seo';
import { JournalList } from '@/components/content-lists';
export const metadata = SEO(
  'Journals',
  'Stories, decisions, and lessons from the people behind the wheel.',
  '/journals',
);
export default function Page() {
  return <JournalList />;
}
