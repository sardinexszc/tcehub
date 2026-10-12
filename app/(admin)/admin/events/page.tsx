import { events } from '@/lib/mock-data';
import { AdminDataTable } from '@/components/admin-data-table';
export const metadata = { title: 'Manage events' };
export default function Page() {
  return (
    <AdminDataTable
      title="Events"
      rows={events.map((i) => ({
        id: i.id,
        name: i.title,
        detail: i.location,
        status: 'Demo',
      }))}
    />
  );
}
