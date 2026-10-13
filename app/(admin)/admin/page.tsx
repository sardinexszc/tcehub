import Link from 'next/link';
import { shops, journals, events, galleries } from '@/lib/mock-data';
export const metadata = { title: 'Admin overview' };
export default function Admin() {
  return (
    <>
      <h1 className="page-title">(Workspace)</h1>
      <p className="mt-6 max-w-md indent-[4.5em]">
        A home for the content that keeps the community moving. Browse sample
        records using the tables; add, edit, and delete are placeholders for a
        future publishing workflow.
      </p>
      <ul className="mt-16 grid gap-x-5 sm:grid-cols-2 xl:grid-cols-4">
        {(
          [
            ['Shops', shops.length, 'shops'],
            ['Journals', journals.length, 'journals'],
            ['Events', events.length, 'events'],
            ['Galleries', galleries.length, 'galleries'],
          ] as const
        ).map(([label, count, route], i) => (
          <li key={label} className="border-t border-foreground">
            <Link
              href={`/admin/${route}`}
              className="group flex items-baseline justify-between gap-4 py-3 transition-opacity hover:opacity-60"
            >
              <span className="text-[15px]">
                ({i + 1}) {label} →
              </span>
              <span className="wordmark text-8xl tabular-nums">{count}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
