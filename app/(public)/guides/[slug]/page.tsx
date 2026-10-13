import { notFound } from 'next/navigation';
import { guides } from '@/lib/mock-data';
import { SEO } from '@/components/seo';
import { ArticlePage } from '@/components/article-page';
import { Related } from '@/components/related';
import { GuideCard } from '@/components/content-cards';

export function generateStaticParams() {
  return guides.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = guides.find((i) => i.slug === slug);
  return item
    ? SEO(item.title, item.excerpt, '/guides/' + slug)
    : { title: 'Article not found' };
}
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = guides.find((i) => i.slug === slug);
  if (!item) notFound();
  return (
    <ArticlePage
      title={item.title}
      cover={item.coverImage}
      meta={'Written by the TCEHub editors as general guidance'}
      tags={[item.generation, item.category]}
      content={item.content}
      kind="Guides"
      toc={true}
    >
      <Related title="More guides" href="/guides" linkLabel="All guides">
        {guides
          .filter((i) => i.id !== item.id)
          .slice(0, 3)
          .map((i) => (
            <GuideCard key={i.id} guide={i} />
          ))}
      </Related>
    </ArticlePage>
  );
}
