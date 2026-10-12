import { journals } from '@/lib/mock-data';
import { AdminDataTable } from '@/components/admin-data-table';
export const metadata = { title: 'Manage journals' };
export default function Page() {
  return (
    <AdminDataTable
      title="Journals"
      rows={journals.map((i) => ({
        id: i.id,
        name: i.title,
        detail: i.author,
        status: 'Demo',
      }))}
    />
  );
}
