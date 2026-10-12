import { notFound } from 'next/navigation';
import { guides } from '@/lib/mock-data';
import { SEO } from '@/components/seo';
import { ArticlePage } from '@/components/article-page';
import { SectionHeading } from '@/components/section-heading';
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
      meta={'TCEHub Editorial · General ownership guidance'}
      tags={[item.generation, item.category]}
      content={item.content}
      kind="Guides"
      toc={true}
    >
      <section className="section-space mt-14 border-t">
        <SectionHeading title="Keep exploring" />
        <div className="content-grid">
          {guides
            .filter((i) => i.id !== item.id)
            .slice(0, 3)
            .map((i) => (
              <GuideCard key={i.id} guide={i} />
            ))}
        </div>
      </section>
    </ArticlePage>
  );
}
