---
name: map-integration
description: Add a lazy-loaded shop map synchronized with directory filters.
version: 1.0.0
---

# map-integration

## When to use

Use when replacing MapPlaceholder or adding shop markers, location selection, or map/list synchronization.

## Inputs

Approved provider (Leaflet or Mapbox), valid shop coordinates/IDs, tile source/license, token policy, filtered results, viewport defaults, and mobile behavior.

## Steps / checklist

1. Inspect current map placeholders and directory filters; ask for the provider decision if no approved option exists.
2. Ask before installing the substantial map dependency; record its exact version, tile terms, attribution, and any usage costs.
3. For Mapbox use a restricted public map token from env; secret tokens stay server-only. Never expose a privileged token.
4. Build a dedicated client Map component; import it with next/dynamic and ssr:false from a client wrapper, not directly from a Server Component.
5. Keep the map library out of list-only page bundles; show an accessible, fixed-height loading placeholder.
6. Pass typed shop IDs/coordinates and the full filtered result set from the directory's existing state, not a second fetching/filter implementation.
7. Validate latitude/longitude bounds; omit malformed coordinates while preserving the listing and reporting missing location data.
8. Keep marker selection synchronized with the matching list card; decide explicitly whether maps show all filtered results or only the current page.
9. Fit bounds after relevant result changes; do not reset zoom on every keystroke or trap page scrolling inside the map.
10. On mobile, offer a list/map toggle with a visible return control. Keep list navigation fully usable without the map.
11. Escape popup content/render React nodes; provide keyboard-accessible location alternatives and required map/tile attribution.
12. Provide graceful provider/network failure UI; test filter reset, zero results, duplicate coordinates, selection, resize, and 375/768/1280 px.

## Output format

Show map/wrapper/filter-state diffs, provider/token/attribution choices, marker scope, and checks.

## Example

Request: "Use map-integration for approved Leaflet directory maps."
Maintain filters in ShopDirectory, derive filteredShops once, pass those records to both grid and lazy map, and use selectedShopId for marker/card selection.
Keep the map independent of pagination if it displays every filtered match; state that choice in the UI.
