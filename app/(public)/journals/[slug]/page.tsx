import { notFound } from 'next/navigation';
import { journals } from '@/lib/mock-data';
import { SEO } from '@/components/seo';
import { ArticlePage } from '@/components/article-page';
import { SectionHeading } from '@/components/section-heading';
import { JournalCard } from '@/components/content-cards';
import { formatDate } from '@/lib/utils';
export function generateStaticParams() {
  return journals.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = journals.find((i) => i.slug === slug);
  return item
    ? SEO(item.title, item.excerpt, '/journals/' + slug)
    : { title: 'Article not found' };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = journals.find((i) => i.slug === slug);
  if (!item) notFound();
  return (
    <ArticlePage
      title={item.title}
      cover={item.coverImage}
      meta={`${item.author} · ${formatDate(item.date)}`}
      tags={item.tags}
      content={item.content}
      kind="Journals"
      toc={false}
    >
      <section className="section-space mt-14 border-t">
        <SectionHeading title="Keep exploring" />
        <div className="content-grid">
          {journals
            .filter((i) => i.id !== item.id)
            .slice(0, 3)
            .map((i) => (
              <JournalCard key={i.id} journal={i} />
            ))}
        </div>
      </section>
    </ArticlePage>
  );
}
