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
        <div className="mb-8 flex items-center gap-2.5 rounded-md border bg-surface px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.12em] text-muted before:size-2 before:rounded-[2px] before:bg-accent before:ring-1 before:ring-foreground/15 before:content-['']">
          Preview workspace · mock content only. Publishing controls are
          disabled.
        </div>
        {children}
      </main>
    </div>
  );
}
