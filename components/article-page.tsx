import Image from 'next/image';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { ArticleContent, articleSections } from '@/components/article-content';
export function ArticlePage({
  title,
  cover,
  excerpt,
  byline,
  date,
  tags,
  content,
  kind,
  toc = false,
  children,
}: {
  title: string;
  cover: string;
  excerpt?: string;
  byline: string;
  date?: string;
  tags: string[];
  content: string;
  kind: string;
  toc?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <article className="container-shell pb-8 pt-8">
      <Breadcrumbs
        items={[
          { label: kind, href: `/${kind.toLowerCase()}` },
          { label: title },
        ]}
      />
      <header className="max-w-4xl">
        <p className="eyebrow">{tags.join(' · ')}</p>
        <h1 className="display mt-3 text-4xl md:text-6xl">{title}</h1>
        {excerpt && (
          <p className="mt-5 max-w-2xl text-lg leading-8 text-muted md:text-xl">
            {excerpt}
          </p>
        )}
        <p className="mt-6 border-t pt-4 text-sm">
          By <span className="font-semibold">{byline}</span>
          {date && <span className="text-muted"> · {date}</span>}
        </p>
      </header>
      <figure className="my-10">
        <div className="relative aspect-[16/9] overflow-hidden bg-subtle md:aspect-[21/9]">
          <Image
            src={cover}
            alt={`${title}, illustrative placeholder`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <figcaption className="mt-2 text-xs text-muted">
          Illustration. Replace with the owner’s photography.
        </figcaption>
      </figure>
      <div
        className={`grid gap-12 ${toc ? 'max-w-5xl lg:grid-cols-[200px_1fr]' : 'max-w-2xl'}`}
      >
        {toc && (
          <aside className="h-fit lg:sticky lg:top-24">
            <h2 className="meta mb-3">In this guide</h2>
            <nav
              aria-label="Table of contents"
              className="grid border-l-2 text-sm"
            >
              {articleSections(content).map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="-ml-0.5 border-l-2 border-transparent py-1.5 pl-3 text-muted hover:border-accent hover:text-foreground"
                >
                  {s.title}
                </a>
              ))}
            </nav>
          </aside>
        )}
        <div className="max-w-2xl">
          <ArticleContent content={content} />
        </div>
      </div>
      {children}
    </article>
  );
}
