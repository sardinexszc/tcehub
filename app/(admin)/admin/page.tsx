import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { shops, journals, events, galleries } from '@/lib/mock-data';
export const metadata = { title: 'Admin overview' };
export default function Admin() {
  return (
    <>
      <h1 className="section-title">Overview</h1>
      <p className="mt-3 text-muted">Records in the preview data set.</p>
      <dl className="my-10 grid border-l border-t sm:grid-cols-2 xl:grid-cols-4">
        {(
          [
            ['Shops', shops.length, 'shops'],
            ['Journals', journals.length, 'journals'],
            ['Events', events.length, 'events'],
            ['Galleries', galleries.length, 'galleries'],
          ] as const
        ).map(([label, count, route]) => (
          <div key={label} className="border-b border-r">
            <Link
              href={`/admin/${route}`}
              className="group flex flex-col p-5 transition-colors hover:bg-subtle"
            >
              <dt className="flex items-center justify-between text-sm font-semibold">
                {label}
                <ChevronRight
                  size={16}
                  aria-hidden="true"
                  className="text-muted group-hover:text-accent"
                />
              </dt>
              <dd className="display mt-6 text-5xl tabular-nums">{count}</dd>
            </Link>
          </div>
        ))}
      </dl>
      <section className="max-w-xl border-t-2 border-foreground pt-5">
        <h2 className="text-lg font-semibold">About this workspace</h2>
        <p className="mt-3 leading-7 text-muted">
          Tables support search, sorting, and pagination. Add, edit, and delete
          are disabled until a publishing workflow and access control are in
          place.
        </p>
      </section>
    </>
  );
}
