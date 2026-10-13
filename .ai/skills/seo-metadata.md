---
name: seo-metadata
description: Add route-specific discoverability without leaking drafts or inventing structured claims.
version: 1.0.0
---

# seo-metadata

## When to use

Use when adding/changing public routes, article metadata, social previews, sitemap entries, or crawl rules.

## Inputs

Canonical deployment origin, route/slug, published content, title/description, share image, content schema type, and indexing intent.

## Steps / checklist

1. Inspect the SEO factory, root metadataBase, sitemap.ts, and robots.ts; use the configured canonical origin.
2. Export Metadata or generateMetadata in server files only; derive detail metadata from the same accessor used by the page.
3. Supply concise unique title/description, canonical path, OG/Twitter fields, and a reachable share image with suitable dimensions.
4. Prefer supported raster social images for production previews; do not promise that the current SVG placeholders render on all social platforms.
5. Add public published routes to sitemap; exclude admin, drafts, preview-only records, duplicate filters, and missing slugs.
6. Keep admin noindex and robots exclusions; state that crawler directives provide no authorization protection.
7. Pick structured data matching actual content: Article, Event, or LocalBusiness only with genuine relevant fields.
8. Serialize JSON-LD with JSON.stringify and escape '<' as '\u003c' before inserting it into a script tag.
9. Never invent ratings, reviews, affiliation, addresses, event offers, or publication dates to fill a schema.
10. Mark demo content honestly; do not present fictional shop ratings as real aggregateRating structured data.
11. Check response HTML, canonical origin, OG image response, sitemap/robots responses, unknown slugs, and structured-data validation.

## Output format

Show metadata/sitemap/JSON-LD diffs, the chosen schema and source fields, and verification results.

## Example

Request: "Use seo-metadata on a published journal."

```ts
const jsonLd = JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: journal.title,
}).replace(/</g, '\u003c');
```

Render this sanitized value in a script with type="application/ld+json"; add author/date/image only when supported by verified content.
