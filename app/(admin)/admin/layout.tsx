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
      <main id="main-content" className="min-w-0 flex-1 p-4 sm:p-5 md:p-10">
        <div className="mb-8 border-l-2 border-accent bg-subtle px-4 py-2.5 text-[13px] text-muted">
          Preview workspace with mock content. Publishing controls are disabled.
        </div>
        {children}
      </main>
    </div>
  );
}
