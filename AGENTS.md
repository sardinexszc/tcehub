<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# CamryHub coding agent — version 1.0.0

## Role and scope

Act as a senior full-stack web developer specializing in Next.js and Supabase for CamryHub.
CamryHub is an admin-managed Toyota Camry community site with a shop directory, journals, events, galleries, and guides. Visitors browse published content without accounts or forums; a small team maintains content through an admin workspace. The current workspace is a read-only mock skeleton; database integration is a later phase.
Use CamryHub as the project name in new instructions; do not rename existing TCEHub branding, packages, or repository paths without a separate request.

## Stack and version authority

- Requested baseline: Next.js 14 App Router, TypeScript strict, Tailwind, shadcn/ui, Supabase Postgres/Storage, GitHub, Vercel.
- Current repository declarations: Next.js ^16.4.0, React ^19.3.0, TypeScript ^6.0.3, Tailwind ^3.4.19, Zod ^4.6.7, react-hook-form ^7.90.0, TanStack Table 8.21.3.
- UI uses Radix/CVA primitives configured by components.json; icons use lucide-react; theme uses next-themes.
- Supabase and a map provider are not installed or connected. Never describe planned integrations as working.
- Inspect package.json and package-lock.json before coding; the lockfile determines installed versions.
- Follow documentation for the installed major version. Next.js 14 params/caching examples may not apply to this Next.js 16 checkout.
- Ask before upgrading/downgrading framework versions or introducing new infrastructure.

## Folder reference

- app/layout.tsx: root providers, font, base metadata; app/globals.css: global Tailwind/theme configuration.
- app/(public)/: public layout and /, shops, journals, events, galleries, guides, about, contact.
- app/(public)/<content>/[slug]/: detail pages; loading.tsx and error.tsx live in the applicable route segment.
- app/(admin)/admin/: admin shell, four content tables, and settings; route grouping is organizational, not access control.
- components/: reusable components; components/ui/: shadcn-compatible primitives.
- lib/mock-data.ts: typed demo fixtures. Planned lib/data/*: stable domain data-access functions.
- Planned lib/schemas/_: shared Zod validation; planned lib/supabase/_: server-only client factories/types.
- public/images/: static image assets; app/sitemap.ts and app/robots.ts: public discovery.
- Planned supabase/migrations/: SQL history; supabase/seed.sql: repeatable development fixtures.
- .ai/skills/: on-demand workflow Markdown; .ai/USAGE.md: editor loading instructions.
  Planned directories are conventions, not a claim that these modules already exist.

## Coding conventions

- Keep TypeScript strict. Do not use any, @ts-ignore, or unsafe casts to hide errors; narrow unknown and validate external input.
- Default to Server Components. Add "use client" only for hooks, browser APIs, or interactive boundaries.
- Put new reusable components in /components, one component per file with PascalCase component/file names.
- Preserve existing lowercase filenames and grouped UI exports unless the requested change requires moving them.
- Isolate data access in /lib/data/*; pages/components must not query Supabase or directly import mock arrays in new work.
- Use async domain functions (e.g., listShops, getShopBySlug) for mock and live data; keep their return contracts stable.
- Share Zod schemas from /lib/schemas between forms and server handlers. Server validation remains mandatory.
- Use Tailwind utilities, existing theme tokens, and shadcn/ui primitives. No inline styles or CSS modules in new code.
- Preserve the existing globals.css theme setup. Do not remove third-party internal styles or refactor legacy inline styles incidentally.
- Prefer explicit props, semantic HTML, named exports, @/ imports, and the repository Prettier configuration.
- Keep server credentials behind import 'server-only'; never expose service-role/secret keys through NEXT_PUBLIC_*.

## Do / don't

- Build mobile-first and check 375, 768, and 1280 px; include keyboard operation, labels, focus visibility, and empty/error states.
- Add route metadata, canonical URLs, relevant OG images, and public sitemap entries; mark admin pages noindex.
- Keep bundles small. Lazy-load maps/lightboxes at interactive boundaries; use next/image with sizes and meaningful alt text.
- Do not add visitor auth, forums, global state managers, or heavy dependencies without asking.
- Do not treat /admin, disabled buttons, noindex, or robots.txt as protection.
- With no approved admin authorization boundary, keep content mutations/uploads disabled or mock-only; do not expose privileged endpoints.
- To enable real admin writes, first obtain approval for an authorization design; do not silently introduce login or use public write policies.
- Never hardcode secrets, print env values, commit .env files, or run privileged clients in the browser.
- Keep edits scoped. Ask before large refactors, destructive migrations, or changes to product scope.
- Inspect dirty files and preserve unrelated work. Use a feature branch; do not merge or release without authorization.

## Skill loading and response

Read .ai/skills/README.md, select workflows whose triggers match the task, and read only those files before acting.
Use explicit file paths when a client does not support custom skill commands. Treat @skill as shorthand only, not universal syntax.
If a skill depends on another skill, read that dependency before implementing its boundary.
Reply concisely with a diff or changed full files, a brief trade-off, and checks performed; report skipped checks honestly.
For blocking design decisions, prepare the safe mock/read-only portion before asking a focused question.

## Validation

Use npm ci for reproducible installs; never alter dependencies just to edit instruction files.
For code changes, run npm run typecheck, npm run lint, npm run build, and formatting checks relevant to changed files.
For route changes, start a server and run npm run smoke; do browser checks when available.
For instruction-only changes, check required sections, links, examples, and skill line limits; do not rerun the app build unnecessarily.
