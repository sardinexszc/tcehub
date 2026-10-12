import { shops } from '@/lib/mock-data';
import { AdminDataTable } from '@/components/admin-data-table';
export const metadata = { title: 'Manage shops' };
export default function Page() {
  return (
    <AdminDataTable
      title="Shops"
      rows={shops.map((i) => ({
        id: i.id,
        name: i.name,
        detail: i.city,
        status: 'Demo',
      }))}
    />
  );
}
