import type { MetadataRoute } from 'next';
import { siteUrl } from '@/components/seo';
import { shops, journals, events, galleries, guides } from '@/lib/mock-data';
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '',
    '/shops',
    '/journals',
    '/events',
    '/galleries',
    '/guides',
    '/about',
    '/contact',
    ...Object.entries({ shops, journals, events, galleries, guides }).flatMap(
      ([kind, items]) => items.map((i) => `/${kind}/${i.slug}`),
    ),
  ];
  return paths.map((path) => ({
    url: siteUrl + path,
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.7,
  }));
}
