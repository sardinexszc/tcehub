import Image from 'next/image';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { ArticleContent, articleSections } from '@/components/article-content';
import { Badge } from '@/components/ui/badge';
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
    <div className="container-shell py-10">
      <Breadcrumbs
        items={[
          { label: kind, href: `/${kind.toLowerCase()}` },
          { label: title },
        ]}
      />
      <div className="mx-auto max-w-3xl">
        <div className="mb-5 flex gap-2">
          {tags.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
        <h1 className="page-title">{title}</h1>
        <p className="my-6 text-sm text-muted">{meta}</p>
      </div>
      <div className="relative my-10 aspect-[16/7] overflow-hidden rounded-xl border">
        <Image
          src={cover}
          alt={`${title} illustrative placeholder`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div
        className={`mx-auto grid max-w-5xl gap-12 ${toc ? 'lg:grid-cols-[1fr_220px]' : 'max-w-3xl'}`}
      >
        <ArticleContent content={content} />
        {toc && (
          <aside className="order-first h-fit rounded-xl border bg-surface p-5 lg:sticky lg:top-28 lg:order-last">
            <h2 className="meta mb-4">In this guide</h2>
            <nav aria-label="Table of contents" className="grid gap-4">
              {articleSections(content).map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {s.title}
                </a>
              ))}
            </nav>
          </aside>
        )}
      </div>
      {children}
    </div>
  );
}
