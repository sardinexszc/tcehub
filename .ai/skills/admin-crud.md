---
name: admin-crud
description: Build scoped content tables/forms with validated mutations and reversible UI updates.
version: 1.0.0
---

# admin-crud

## When to use

Use when adding an admin content screen, editor, or CRUD behavior.

## Inputs

Content type/schema, fields/table columns, existing UI conventions, accessor contracts, approved authorization boundary, and create/update/delete semantics.

## Steps / checklist

1. Inspect the admin layout and current mock controls. With no approved authorization, build local/mock interactions only and label persistence accurately.
2. Load new-component, supabase-query, and supabase-migration only when their boundaries are needed.
3. Define shared /lib/schemas/<domain>.ts Zod schemas; validate form input and repeat validation on the server.
4. Build an existing shadcn-style TanStack DataTable with stable row IDs, search, sorting, pagination, and accessible action labels.
5. Use react-hook-form with zodResolver; associate errors with labels/fields and focus the first invalid field.
6. Reuse the existing dialog/form/button primitives and approved toast infrastructure; ask before adding heavy UI packages.
7. Route approved real mutations through a server-only authorized boundary, never directly through browser service-role clients.
8. Authorize each create/update/delete server operation; validate record IDs and fields, constrain mass assignment, and handle stale edits.
9. For optimistic updates, snapshot state, assign a temporary ID for creates, disable duplicate submits, and reconcile the server's canonical record.
10. Roll back on failure; keep unsaved form values and provide accessible success/error toast or live-region feedback.
11. Require an explicit confirmation for destructive deletes; define soft delete versus irreversible removal before implementing it.
12. Invalidate matching public content caches only after a successful real mutation; mock updates must not claim publication.
13. Check validation, duplicate slug, failure rollback, concurrent edits, keyboard focus, permissions, lint, and types.

## Output format

Show table/form/schema/server-boundary diffs, mock versus persisted behavior, optimistic rollback design, and checks.

## Example

Request: "Use admin-crud for a mock guide manager."
Keep rows in component-local state, validate with the shared guide schema, and show "Preview updated; nothing saved" after edits.
Do not create a Supabase mutation endpoint until an admin authorization boundary is approved.
