---
name: new-component
description: Build a small typed, responsive, accessible reusable component.
version: 1.0.0
---

# new-component

## When to use

Use when adding a reusable card, control, content block, or interaction.

## Inputs

Component purpose/name, props/data shape, interactions, visual states, reuse sites, and accessibility requirements.

## Steps / checklist

1. Check existing components/ui primitives and nearby components before creating a duplicate.
2. Create /components/<PascalCaseName>.tsx with one exported component and explicit props; use unknown rather than any for external data.
3. Keep it server-renderable unless hooks/events/browser APIs require "use client".
4. Accept data through props; leave fetching/mutations in /lib/data and validated server boundaries.
5. Use Tailwind theme tokens and cn for class merging. Do not add inline styles, CSS modules, or fixed viewport widths.
6. Choose semantic links for navigation and buttons for actions; avoid nested interactive elements.
7. Add accessible names, field associations, focus indicators, reduced-motion behavior where animation exists, and keyboard support.
8. Represent loading, empty, error, selected, and disabled states when relevant; do not imply disabled demo actions are working.
9. Use next/image with dimensions or a sized fill container, responsive sizes, and suitable alt text.
10. Keep dependencies and props serializable across server/client boundaries; lazy-load substantial optional UI.
11. Check narrow/wide layouts, long labels, missing images, keyboard use, lint, and type safety.

## Output format

Provide the component file/diff, typed props, one usage example, and checks performed.

## Example

Request: "Use new-component to add a GenerationBadge."

```tsx
import { Badge } from '@/components/ui/badge';
type GenerationBadgeProps = { generation: string };
export function GenerationBadge({ generation }: GenerationBadgeProps) {
  return <Badge>{generation}</Badge>;
}
```

Keep this component server-renderable; its text already supplies an accessible name.
