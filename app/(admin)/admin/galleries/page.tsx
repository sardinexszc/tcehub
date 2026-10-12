import { galleries } from '@/lib/mock-data';
import { AdminDataTable } from '@/components/admin-data-table';
export const metadata = { title: 'Manage galleries' };
export default function Page() {
  return (
    <AdminDataTable
      title="Galleries"
      rows={galleries.map((i) => ({
        id: i.id,
        name: i.title,
        detail: `${i.images.length} images`,
        status: 'Demo',
      }))}
    />
  );
}
