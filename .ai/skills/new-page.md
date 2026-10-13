---
name: new-page
description: Scaffold a public or admin App Router route with metadata and resilient states.
version: 1.0.0
---

# new-page

## When to use

Use when adding a route, detail page, or content listing.

## Inputs

Route path/group, page purpose, domain type, list/detail behavior, content source, metadata, and loading/error expectations.

## Steps / checklist

1. Read AGENTS.md, package.json, and the adjacent layout/page; select the public or admin route group.
2. Check that the URL does not conflict across route groups. Reuse the appropriate layout instead of nesting a second header/footer.
3. Define a typed /lib/data/<domain>.ts accessor backed by lib/mock-data.ts until live reads are explicitly requested.
4. Use an async data-access function as the mock data hook/seam; do not add a React fetching hook to a Server Component.
5. Create page.tsx as a Server Component. Match params typing to the installed Next.js version; await params in this checkout.
6. Use notFound() for unknown slugs; distinguish a successful empty list from a failed fetch.
7. Add static metadata or generateMetadata through the SEO helper; use seo-metadata for canonical, sitemap, and structured data.
8. Add loading.tsx with a layout-stable, accessible skeleton and error.tsx as a minimal client error boundary with retry/reset.
9. Do not leak exception messages or credentials in error UI; preserve server diagnostics safely.
10. Extract repeated UI into a typed component using new-component. Add client boundaries only around interaction.
11. Add generateStaticParams only when pre-rendering known slugs is appropriate; verify newly published slugs remain reachable.
12. Check 404/empty/loading/failure states, responsive layout, metadata, lint, typecheck, build, and route smoke coverage.

## Output format

List created/changed files, the accessor contract, metadata/caching choices, and passed/skipped checks. Show the route diff.

## Example

Request: "Use new-page to add a shop recommendations page with mock content."
Expected files: app/(public)/recommendations/page.tsx, loading.tsx, error.tsx, and lib/data/shops.ts.
Data seam:

```ts
import { shops, type Shop } from '@/lib/mock-data';
export async function listFeaturedShops(): Promise<Shop[]> {
  // TODO: replace this implementation with a typed Supabase query.
  return shops.filter((shop) => shop.featured);
}
```

The page calls listFeaturedShops(); loading/error UI belongs to the route segment, not the accessor.
