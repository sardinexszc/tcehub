import Link from 'next/link';
import { Store, NotebookPen, CalendarDays, Images } from 'lucide-react';
import { shops, journals, events, galleries } from '@/lib/mock-data';
import { CornerArrow } from '@/components/corner-arrow';
export const metadata = { title: 'Admin overview' };
export default function Admin() {
  return (
    <>
      <p className="eyebrow mb-4">Your community, at a glance</p>
      <h1 className="text-4xl font-medium tracking-[-0.035em]">
        Workspace overview
      </h1>
      <p className="mt-4 text-muted">
        A home for the content that keeps the community moving.
      </p>
      <div className="hairline-grid my-10 sm:grid-cols-2 xl:grid-cols-4">
        {[
          ['Shops', shops.length, Store, 'shops'],
          ['Journals', journals.length, NotebookPen, 'journals'],
          ['Events', events.length, CalendarDays, 'events'],
          ['Galleries', galleries.length, Images, 'galleries'],
        ].map(([label, count, Icon, route]) => {
          const Component = Icon as typeof Store;
          return (
            <Link
              key={String(label)}
              href={`/admin/${route}`}
              className="group p-6 transition-colors hover:!bg-subtle"
            >
              <div className="flex items-start justify-between">
                <span className="meta flex items-center gap-2">
                  <Component size={15} aria-hidden="true" />
                  {String(label)}
                </span>
                <CornerArrow className="size-7 bg-transparent ring-1 ring-border transition-colors group-hover:bg-accent group-hover:ring-transparent" />
              </div>
              <p className="mt-8 text-5xl font-medium tabular-nums tracking-[-0.04em]">
                {String(count)}
              </p>
              <p className="mt-2 text-[13px] text-muted">records · demo</p>
            </Link>
          );
        })}
      </div>
      <section className="rounded-xl border bg-surface p-6 md:p-8">
        <p className="eyebrow mb-4">Next step</p>
        <h2 className="text-xl font-medium tracking-[-0.02em]">
          Ready for your first editorial pass
        </h2>
        <p className="mt-3 max-w-xl leading-7 text-muted">
          Browse sample listings and article records using the sidebar. Tables
          support search, sorting, and pagination. Add, edit, and delete
          controls are placeholders for a future publishing workflow.
        </p>
      </section>
    </>
  );
}
