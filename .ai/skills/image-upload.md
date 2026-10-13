---
name: image-upload
description: Prepare authorized Storage uploads and optimized image presentation.
version: 1.0.0
---

# image-upload

## When to use

Use when adding shop/gallery image uploads, image replacement, or Storage display.

## Inputs

Approved admin boundary, bucket/privacy policy, allowed image MIME types/size limits, path convention, content record relationship, and image metadata.

## Steps / checklist

1. Read AGENTS.md and inspect Storage/client configuration; verify current Supabase Storage docs before implementation.
2. If authorization is absent, build a local file-selection/preview UI only; do not issue upload credentials or permit anonymous Storage writes.
3. Once authorized, validate image extension, MIME, decoded file content, byte limit, dimensions, and ownership of the target record server-side.
4. Prefer JPEG/PNG/WebP; reject unsanitized SVG uploads and never trust an HTML accept attribute as server validation.
5. Configure bucket MIME/size restrictions and least-privilege policies. Public viewing does not imply public uploading.
6. Use random object IDs in controlled prefixes; do not use an arbitrary client-supplied path or silently overwrite another record's object.
7. Use an authorized server upload or narrowly scoped short-lived signed-upload flow; never expose service-role secrets.
8. Grant only required Storage operations; approved upsert requires INSERT, SELECT, and UPDATE access.
9. Save object path, alt text, dimensions, and sort order through an authorized validated mutation; reconcile partial upload/database failures.
10. Remove orphan objects safely; distinguish removing an album reference from deleting a shared object.
11. Display with next/image, sizes, fixed aspect containers, and the exact approved Storage host/path in remotePatterns.
12. Reuse the lazy-loaded ImageGallery/lightbox; avoid uploading huge originals for thumbnail delivery without a transformation plan.
13. Test oversized/invalid files, permission denial, failed upload rollback, display URLs, image domains, and keyboard controls.

## Output format

Show preview/upload/server/schema/policy diffs, limits, partial-failure behavior, and verification. State whether persistence is enabled.

## Example

Request: "Use image-upload for galleries before admin protection exists."
Implement file selection and local previews, revoke object URLs on cleanup, and display "Preview only; uploads are not saved."
Keep upload and publish controls disabled until the authorized Storage boundary exists.
