---
name: supabase-query
description: Implement typed server-side public content reads with deliberate caching.
version: 1.0.0
---

# supabase-query

## When to use

Use when replacing mock reads, fetching published content, or fixing a Supabase query.

## Inputs

Domain accessor, approved Supabase project/environment, table/schema, generated Database types, published visibility rules, filters, and freshness target.

## Steps / checklist

1. Read AGENTS.md and the existing accessor. Verify current Supabase docs/SDK signatures and installed Next.js caching behavior.
2. Inspect existing migrations/table columns and RLS; do not invent column names or create schema as a side effect of reading.
3. Generate/reuse Database types; pin any approved Supabase SDK dependency and commit its lockfile.
4. Keep client creation in /lib/supabase/server.ts with import 'server-only'; expose domain accessors in /lib/data/*.
5. Use a publishable/anon key for public content reads; public RLS must limit results to published records.
6. Select explicit columns, map snake_case rows into the domain contract, order deterministically, and paginate with an upper bound.
7. Validate search/filter inputs with shared Zod schemas; allowlist column/sort identifiers rather than interpolating raw SQL.
8. Inspect both data and error. Throw a safe application error on failure; return null only for a successful missing detail record.
9. Choose a documented cache policy: public shared content can use installed-version-supported caching with a stated TTL/revalidate strategy.
10. A Supabase SDK call does not inherit Next fetch revalidation automatically. In Next.js 14 use a supported wrapper such as unstable_cache; inspect newer-version APIs before applying it here.
11. Never cache privileged/admin responses in a public shared cache; define invalidation after approved content mutations.
12. Verify published-only reads, unknown slug, query failure, filters, ordering, pagination, and TTL/invalidation behavior.

## Output format

Show accessor/client/type diffs, selected fields, RLS assumptions, cache TTL/invalidation, and verification evidence without secrets.

## Example

Request: "Use supabase-query to replace listShops with published Supabase rows."

```ts
const { data, error } = await client
  .from('shops')
  .select('id, slug, name, city')
  .eq('published', true)
  .order('name');
if (error) throw new Error('Unable to load shops');
```

Assume a Database-typed client and validated schema; map rows to the accessor's declared return type. Specify the cache wrapper separately.
