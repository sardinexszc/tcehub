import Image from 'next/image';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { ArticleContent, articleSections } from '@/components/article-content';
import type { Tint } from '@/components/split-page';
export function ArticlePage({
  title,
  cover,
  meta,
  tags,
  content,
  kind,
  toc = false,
  tint = 'white',
  children,
}: {
  title: string;
  cover: string;
  meta: string;
  tags: string[];
  content: string;
  kind: string;
  toc?: boolean;
  tint?: Tint;
  children?: React.ReactNode;
}) {
  return (
    <article data-tint={tint} className="container-shell pt-6 md:pt-10">
      <div className="grid gap-4 lg:grid-cols-2 lg:gap-5">
        <Breadcrumbs
          items={[
            { label: kind, href: `/${kind.toLowerCase()}` },
            { label: title },
          ]}
        />
        <p className="meta lg:text-right">{tags.join(' — ')}</p>
      </div>
      <h1 className="mt-10 max-w-[14ch] font-serif text-[clamp(3rem,8vw,8.5rem)] leading-[0.92] tracking-[-0.045em] md:mt-16">
        {title}
      </h1>
      <p className="mt-6 text-[15px]">({meta})</p>
      <div className="relative mt-10 aspect-[4/3] overflow-hidden bg-subtle md:mt-14 md:aspect-[16/8]">
        <Image
          src={cover}
          alt={`${title}, illustrative image`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="mt-14 grid gap-12 md:mt-20 lg:grid-cols-2 lg:gap-5">
        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <h2 className="eyebrow mb-4">{toc ? 'In this guide' : 'Contents'}</h2>
          <nav aria-label="Table of contents">
            <ol className="rule-list max-w-sm text-[15px]">
              {articleSections(content).map((s, i) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="flex justify-between gap-4 py-2 transition-opacity hover:opacity-60"
                  >
                    {s.title}
                    <span className="tabular-nums">{i + 1}</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>
        <ArticleContent content={content} />
      </div>
      {children}
    </article>
  );
}
