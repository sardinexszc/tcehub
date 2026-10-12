import Link from 'next/link';
import {
  ArrowUpRight,
  Store,
  NotebookPen,
  CalendarDays,
  Images,
} from 'lucide-react';
import { shops, journals, events, galleries } from '@/lib/mock-data';
export const metadata = { title: 'Admin overview' };
export default function Admin() {
  return (
    <>
      <p className="eyebrow mb-4">Your community, at a glance</p>
      <h1 className="text-4xl font-semibold tracking-tight">
        Workspace overview
      </h1>
      <p className="mt-4 text-muted">
        A home for the content that keeps the community moving.
      </p>
      <div className="my-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
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
              className="rounded-xl border bg-surface p-6"
            >
              <div className="flex justify-between text-muted">
                <Component size={20} />
                <ArrowUpRight size={17} />
              </div>
              <p className="mt-6 text-4xl font-semibold">{String(count)}</p>
              <p className="mt-2 text-sm text-muted">{String(label)}</p>
            </Link>
          );
        })}
      </div>
      <section className="rounded-xl border bg-surface p-7">
        <h2 className="text-xl font-semibold">
          Ready for your first editorial pass
        </h2>
        <p className="mt-4 max-w-xl leading-7 text-muted">
          Browse sample listings and article records using the sidebar. Tables
          support search, sorting, and pagination. Add, edit, and delete
          controls are placeholders for a future publishing workflow.
        </p>
      </section>
    </>
  );
}
