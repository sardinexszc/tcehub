import type { Metadata } from 'next';
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
// Next.js metadata is server-only; this factory is the SEO wrapper, not a rendered tag component.
export function SEO(
  title: string,
  description: string,
  path: string,
  image = '/images/camry-studio.svg',
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: 'TCEHub',
      images: [{ url: image }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}
