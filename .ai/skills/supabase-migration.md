---
name: supabase-migration
description: Prepare reviewable schema changes with published-only reads and controlled writes.
version: 1.0.0
---

# supabase-migration

## When to use

Use when adding/changing tables, constraints, RLS, indexes, or development seed content.

## Inputs

Current migrations/schema, target environment, table/domain contract, visibility rules, approved admin authorization model, and migration/rollback requirements.

## Steps / checklist

1. Inspect existing schema and current Supabase/Postgres docs; identify additive versus destructive changes before writing SQL.
2. If admin authorization is absent, prepare schema/public-read RLS only and leave writes denied; document the blocked write policy.
3. Do not add auth to satisfy this skill. Ask for approval of the future admin boundary before enabling any admin write path.
4. For an approved authenticated-admin design, use a protected allowlist or server-managed app_metadata claim; never user_metadata or TO authenticated alone.
5. For an approved server-only admin design, explain that service-role clients bypass RLS and require independent authorization on every server operation.
6. Create a timestamped supabase/migrations/<YYYYMMDDHHMMSS>_<description>.sql; never rewrite an applied migration.
7. Add explicit types, NOT NULL/defaults, unique slug constraints, valid foreign keys, and CHECK constraints for bounded values.
8. Enable RLS on every exposed table. Grant only needed operations; allow public SELECT only for published rows.
9. Scope write policies by verified administrator identity. UPDATE needs SELECT and both USING/WITH CHECK; review DELETE and INSERT separately.
10. Index demonstrated filters/joins/orderings; check query plans rather than indexing every column.
11. Put repeatable fictional fixtures in development seed.sql; use stable identifiers/ON CONFLICT and never seed production silently.
12. Apply to local/test first; verify anon published read, draft denial, unauthorized write denial, and approved-admin writes if implemented.
13. Run relevant Supabase advisors; regenerate Database types. Document forward rollback/data risks; request authorization before remote destructive changes.

## Output format

Provide migration/seed diffs, grants/policy matrix, authorization assumptions, test results, and deployment/rollback notes.

## Example

Request: "Use supabase-migration to prepare a guides table; admin authorization is not configured."

```sql
create table public.guides (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  published boolean not null default false
);
alter table public.guides enable row level security;
grant select on public.guides to anon;
create policy guides_published_read on public.guides
  for select to anon using (published = true);
```

Do not add anon write policies. Reserve admin-write SQL until its identity/authorization mechanism is approved.
