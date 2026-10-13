# CamryHub workflow index

Read AGENTS.md first. Load only the workflows relevant to the current task; follow dependency references inside each workflow.
These Markdown files are repository-local instructions, not automatically installed native editor skills.
Use: "Read .ai/skills/new-page.md and use the new-page skill to add a route."

| Skill                                       | Purpose                                                                                   | When to invoke                                                    |
| ------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| [new-page](new-page.md)                     | Scaffold a public or admin App Router route with metadata and resilient states.           | Use new-page when adding a route.                                 |
| [new-component](new-component.md)           | Build a small typed, responsive, accessible reusable component.                           | Use new-component when adding reusable UI.                        |
| [supabase-query](supabase-query.md)         | Implement typed server-side public content reads with deliberate caching.                 | Use supabase-query when replacing mock data reads.                |
| [supabase-migration](supabase-migration.md) | Prepare reviewable schema changes with published-only reads and controlled writes.        | Use supabase-migration when changing database schema or policies. |
| [admin-crud](admin-crud.md)                 | Build scoped content tables/forms with validated mutations and reversible UI updates.     | Use admin-crud when adding a content editor.                      |
| [seo-metadata](seo-metadata.md)             | Add route-specific discoverability without leaking drafts or inventing structured claims. | Use seo-metadata when adding or auditing route SEO.               |
| [image-upload](image-upload.md)             | Prepare authorized Storage uploads and optimized image presentation.                      | Use image-upload when adding gallery/shop uploads.                |
| [map-integration](map-integration.md)       | Add a lazy-loaded shop map synchronized with directory filters.                           | Use map-integration when replacing a map placeholder.             |
| [deploy-check](deploy-check.md)             | Collect evidence for a specific deployment without silently publishing it.                | Use deploy-check when checking a release candidate.               |
| [code-review](code-review.md)               | Review scoped changes for correctness, accessibility, performance, and security.          | Use code-review when reviewing a PR or scoped diff.               |

Each file must contain When to use, Inputs, Steps / checklist, Output format, and Example; keep it under 150 lines.
The workflows do not authorize auth, new infrastructure, destructive operations, deployment, or messages to other people.
