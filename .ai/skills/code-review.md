---
name: code-review
description: Review scoped changes for correctness, accessibility, performance, and security.
version: 1.0.0
---

# code-review

## When to use

Use when reviewing a PR/diff, auditing a feature, or checking convention compliance.

## Inputs

PR/branch/diff and base commit, user story, changed files, AGENTS.md, relevant schema/policies, and available checks.

## Steps / checklist

1. Read the requested diff and surrounding callers; identify what behavior should change before judging implementation.
2. Read relevant workflow skills; compare against installed versions, not remembered API signatures.
3. Check strict typing, unsafe casts/any, unvalidated external data, schema drift, and stable domain accessor contracts.
4. Check Server/Client boundaries, props serialization, heavy imports, repeated fetches, and cache isolation/invalidation.
5. Check semantic HTML, accessible names, associated form errors, focus management, keyboard paths, and small-screen overflow.
6. Check metadata/canonicals, draft visibility, sitemap completeness, image sizes/alt text, and lazy optional UI.
7. Trace every mutation/upload to authorization and server-side Zod validation; /admin routing or UI hiding is insufficient.
8. Inspect env leakage, service-role exposure, RLS grants/policies, draft read access, and Storage permissions where applicable.
9. Flag public writes, user_metadata authorization, raw SQL interpolation, unsafe JSON-LD/HTML, and untrusted upload content.
10. Check optimistic failure rollback and concurrent edits; ensure mock feedback never claims a successful persisted operation.
11. Run targeted existing checks; add tests only for meaningful behavior/risk. Do not claim browser/DB validation from source inspection alone.
12. Present actionable findings ordered by severity with file/line, concrete trigger, impact, and smallest fix; distinguish blockers from suggestions.
13. Do not edit, post review comments, approve, merge, or deploy unless the user asked for that action.

## Output format

List P0/P1/P2/P3 findings with evidence and proposed fix, then open questions and verified/skipped checks. If no findings exist, say so and state verification limits.

## Example

Request: "Use code-review on an image-upload PR."
Finding: "P1: An unauthenticated handler invokes a service-role upload. Anyone can write bucket objects; require the approved admin boundary before minting upload access."
Inspect the handler and Storage policy; do not recommend adding visitor login as an incidental fix.
