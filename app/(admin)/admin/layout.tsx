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
      <main id="main-content" className="min-w-0 flex-1 p-5 md:p-10">
        <div className="mb-8 rounded-lg border border-amber-500/25 bg-amber-500/5 px-4 py-3 text-xs leading-5 text-muted">
          Preview workspace · mock content only. Publishing controls are
          disabled.
        </div>
        {children}
      </main>
    </div>
  );
}
