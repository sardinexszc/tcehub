---
name: deploy-check
description: Collect evidence for a specific deployment without silently publishing it.
version: 1.0.0
---

# deploy-check

## When to use

Use before a Vercel preview/production release or when diagnosing deployment readiness.

## Inputs

Git branch/commit, approved Vercel team/project/environment, intended domain, integration scope, env names, and verification access.

## Steps / checklist

1. Inspect git status, package/lockfile, changed routes, and requested release scope; identify the exact target commit and environment.
2. Run npm ci only when needed, then typecheck, lint, build, and format checks; fix failures rather than suppressing them broadly.
3. Check required env names in Vercel without printing values. Mock-only builds need no Supabase credentials.
4. Verify NEXT_PUBLIC_SITE_URL matches the intended canonical production origin; do not let temporary preview origins replace canonical URLs unintentionally.
5. Inspect bundle boundaries and lazy loading; verify exact remote image host/path rules and local assets.
6. Fetch representative routes, unknown slugs, sitemap.xml, and robots.txt; check admin noindex and absence of draft/admin sitemap entries.
7. Confirm no secrets in commits/client bundles; check RLS/Storage policies only if those integrations are actually enabled.
8. Start the supported preview/server; run npm run smoke and browser checks at 375/768/1280 when browser access is available.
9. Run a Lighthouse sanity check on home, directory, and a detail route; record tool/version/environment and actual scores/findings.
10. Check keyboard navigation, image layout shifts, console errors, and representative interactive flows; label unavailable checks as unverified.
11. For protected previews, use approved platform access; do not weaken deployment protection just to test.
12. Deployment checks alone do not authorize deployment. Publish only when the user requested it and the team/project/commit/environment are verified.
13. After authorized deployment, report returned URL/status and run scoped runtime checks; stop on failure and preserve diagnostics.

## Output format

Provide commit/target, check results, blockers/skipped checks, and READY or BLOCKED. Include a deployment URL only if one was actually created.

## Example

Request: "Use deploy-check for the mock front-end preview."
Check Next build and route responses, verify canonical origin, mark Supabase env as not required, and report Lighthouse as skipped if no browser exists.
Do not provision a database or publish production as part of the check.
