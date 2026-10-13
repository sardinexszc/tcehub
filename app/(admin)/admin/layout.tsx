import { AdminNav } from '@/components/admin-nav';
import type { Metadata } from 'next';
export const metadata: Metadata = { robots: { index: false, follow: false } };
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="shell min-h-dvh gap-5 py-3 md:flex md:py-5">
      <AdminNav />
      <main id="main-content" className="mt-3 min-w-0 flex-1 md:mt-0">
        <p className="mb-3 flex items-center gap-2.5 px-2 text-[14px] text-muted">
          <span aria-hidden="true" className="size-2 rounded-full bg-tail" />
          Preview workspace with demo content. Publishing is turned off.
        </p>
        {children}
      </main>
    </div>
  );
}
