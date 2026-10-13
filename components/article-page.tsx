import Image from 'next/image';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { ArticleContent, articleSections } from '@/components/article-content';
export function ArticlePage({
  title,
  cover,
  meta,
  tags,
  content,
  kind,
  toc = false,
  children,
}: {
  title: string;
  cover: string;
  meta: string;
  tags: string[];
  content: string;
  kind: string;
  toc?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div className="shell grid gap-3 md:gap-5">
      <header className="panel p-6 md:p-12">
        <Breadcrumbs
          items={[
            { label: kind, href: `/${kind.toLowerCase()}` },
            { label: title },
          ]}
        />
        <p className="label mt-10 text-muted">{tags.join(', ')}</p>
        <h1 className="mt-5 max-w-[18ch] text-[clamp(2.75rem,6vw,5rem)] font-medium leading-[0.98] tracking-[-0.045em]">
          {title}
        </h1>
        <p className="mt-6 text-[17px] text-muted">{meta}</p>
      </header>
      <div className="relative aspect-[4/3] overflow-hidden rounded-panel bg-night md:aspect-[16/7]">
        <Image
          src={cover}
          alt={`${title}, illustrative image`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="panel grid gap-10 p-6 md:p-12 lg:grid-cols-[260px_1fr] lg:gap-16">
        <aside className="lg:sticky lg:top-6 lg:h-fit">
          <h2 className="label text-muted">
            {toc ? 'In this guide' : 'In this story'}
          </h2>
          <nav aria-label="Table of contents" className="mt-4">
            <ol className="grid gap-1">
              {articleSections(content).map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="block rounded-full px-4 py-2 text-[15px] transition-colors hover:bg-subtle"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>
        <ArticleContent content={content} />
      </div>
      {children}
    </div>
  );
}
