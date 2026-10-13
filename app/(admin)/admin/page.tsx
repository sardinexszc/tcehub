import Link from 'next/link';
import { shops, journals, events, galleries } from '@/lib/mock-data';
import { ArrowDisc } from '@/components/ui/button';
export const metadata = { title: 'Admin overview' };
export default function Admin() {
  return (
    <div className="grid gap-3">
      <header className="panel p-6 md:p-8">
        <h1 className="text-[clamp(2.25rem,4vw,3.25rem)] font-medium tracking-[-0.04em]">
          Workspace
        </h1>
        <p className="mt-2 max-w-lg text-muted">
          Browse the records behind the public site. Adding, editing, and
          deleting arrive with the publishing workflow.
        </p>
      </header>
      <ul className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {(
          [
            ['Shops', shops.length, 'shops'],
            ['Journals', journals.length, 'journals'],
            ['Events', events.length, 'events'],
            ['Galleries', galleries.length, 'galleries'],
          ] as const
        ).map(([label, count, route]) => (
          <li key={label}>
            <Link
              href={`/admin/${route}`}
              className="panel group flex h-full flex-col p-6"
            >
              <span className="flex items-center justify-between text-[15px] font-medium">
                {label}
                <ArrowDisc tone="ink" />
              </span>
              <span className="stat mt-10">{count}</span>
              <span className="stat-caption">records</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
