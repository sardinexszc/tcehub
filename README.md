# TCEHub — Toyota Camry Elite Hub

A mobile-first Next.js App Router front-end skeleton. All content is fictional static mock data. No auth, database queries, API routes, or submission persistence are implemented.

## Setup

Requires Node.js 20.9+ and npm.

```sh
npm ci
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. No environment values are needed for local browsing. Set `NEXT_PUBLIC_SITE_URL` to your deployed HTTPS origin before building for production.

## Scripts

- `npm run dev`: development server
- `npm run build`: production build
- `npm start`: production server
- `npm run lint`: ESLint, zero warnings allowed
- `npm run typecheck`: TypeScript
- `npm run format`: Prettier
- `npm run format:check`: check formatting
- `npm run smoke`: HTTP route checks against a running production server

## Architecture

- `app/(public)`: Home, shops, journals, events, galleries, guides, about, contact; shared navbar/footer
- `app/(admin)/admin`: separate dashboard/sidebar, four content tables, settings shell
- `components/ui`: shadcn-style Radix/CVA primitives, configured through `components.json`
- `components`: cards, filtering, pagination, drawer, lightbox, content rendering, metadata factory, tables
- `lib/mock-data.ts`: typed content arrays (8 shops, 6 journals, 8 events, 6 galleries, 6 guides)
- `public/images`: original SVG placeholders; replace with licensed community photography
- `app/sitemap.ts`, `app/robots.ts`: public discovery; admin excluded

`SEO()` wraps Next.js server metadata; it is not a head-tag client component. Detail routes pre-render their mock slugs and call `notFound()` for unknown records. Images use `next/image`. The font uses Next.js Geist optimization. Dark theme defaults to dark; the toggle persists light/dark via next-themes.

## Preview behavior

Directory search, category/generation/region filters, reset, and pagination work locally. Journal tag and guide generation filters work. Event tabs use a fixed demo reference date (October 13, 2026) so upcoming/past examples remain reproducible. Gallery lightboxes support keyboard controls. Admin tables support search, sort, and pagination; Add/Edit/Delete are intentionally disabled. Contact form validates using react-hook-form + zod and explicitly reports that nothing was sent or saved. Demo shop contact actions and calendar actions are disabled. Social links await real destinations.

Admin is an unprotected, read-only shell, as requested. Do not connect privileged mutations until a future access-control phase. Robots exclusion and noindex metadata are discovery controls, not authorization.

## Supabase later

The `.env.example` includes the requested placeholders; no Supabase SDK or client is initialized. Replace mock reads through a server-only content repository and keep existing TypeScript contracts. Store rich article content as validated structured blocks or sanitized Markdown; this skeleton renders a safe subset as plain text, not raw HTML. Map integration should replace `MapPlaceholder` and consume listing coordinates. Before exposing production data, design public read access and protected admin write access; keep the service-role key server-only. Replace the wildcard Supabase image pattern with your specific storage host at integration time.

## GitHub & Vercel

```sh
git init
git add .
git commit -m "Build TCEHub front-end skeleton"
git branch -M main
git remote add origin https://github.com/YOUR_ACCOUNT/tcehub.git
git push -u origin main
```

Create a repository in your GitHub account first. Import it into Vercel, select Next.js, use `npm run build`, and set `NEXT_PUBLIC_SITE_URL` to the intended domain. No Supabase variables are needed yet. Feature branch pushes can generate Vercel previews. No deployment or external repository write was performed while preparing this deliverable.

## Route inventory

`/`, `/shops`, `/shops/[slug]`, `/journals`, `/journals/[slug]`, `/events`, `/events/[slug]`, `/galleries`, `/galleries/[slug]`, `/guides`, `/guides/[slug]`, `/about`, `/contact`, `/admin`, `/admin/shops`, `/admin/journals`, `/admin/events`, `/admin/galleries`, `/admin/settings`.

See `VERIFICATION.md` for checks performed and remaining limitations.
