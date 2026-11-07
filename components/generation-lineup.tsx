import Link from 'next/link';
import { shops, guides, generations, generationYears } from '@/lib/mock-data';
/** Model-lineup strip, after OEM "all vehicles" rows: one column per Camry generation. */
export function GenerationLineup() {
  return (
    <section
      aria-labelledby="lineup-title"
      className="container-shell section-space"
    >
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <h2 id="lineup-title" className="section-title">
          Shop by generation
        </h2>
        <p className="text-sm text-muted">
          Pick your car to see shops that service it.
        </p>
      </div>
      <ol className="flex snap-x overflow-x-auto border-l border-t [scrollbar-width:thin] sm:grid sm:grid-cols-4 sm:overflow-visible lg:grid-cols-7">
        {generations.map((g, i) => {
          const shopCount = shops.filter((s) =>
            s.generations.includes(g),
          ).length;
          const guideCount = guides.filter((x) => x.generation === g).length;
          return (
            <li
              key={g}
              className="w-36 shrink-0 snap-start border-b border-r sm:w-auto"
            >
              <Link
                href={`/shops?generation=${g}`}
                className="group flex h-full flex-col gap-1 p-4 transition-colors hover:bg-subtle md:p-5"
              >
                <span className="text-xs text-muted">
                  {i + 1 === generations.length ? 'Current' : `Gen ${i + 1}`}
                </span>
                <span className="display text-4xl group-hover:text-accent">
                  {g}
                </span>
                <span className="text-[13px] tabular-nums">
                  {generationYears[g]}
                </span>
                <span className="mt-4 text-xs text-muted">
                  {shopCount} {shopCount === 1 ? 'shop' : 'shops'} ·{' '}
                  {guideCount} {guideCount === 1 ? 'guide' : 'guides'}
                </span>
              </Link>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
