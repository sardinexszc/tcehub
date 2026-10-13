import { AdminNav } from '@/components/admin-nav';
import type { Metadata } from 'next';
export const metadata: Metadata = { robots: { index: false, follow: false } };
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-dvh md:flex">
      <AdminNav />
      <main id="main-content" className="min-w-0 flex-1 p-4 md:p-10">
        <p className="meta mb-10 text-muted">
          Preview workspace · mock content only · publishing controls are
          disabled
        </p>
        {children}
      </main>
    </div>
  );
}
