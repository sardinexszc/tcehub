'use client';
import * as React from 'react';
import * as Primitive from '@radix-ui/react-select';
import { Check, ChevronDown } from 'lucide-react';
export const Select = Primitive.Root;
export const SelectValue = Primitive.Value;
export function SelectTrigger({
  children,
  ...props
}: React.ComponentProps<typeof Primitive.Trigger>) {
  return (
    <Primitive.Trigger
      className="flex h-11 w-full cursor-pointer items-center justify-between gap-3 rounded-md border bg-surface px-3 text-sm transition-colors hover:border-foreground/30"
      {...props}
    >
      {children}
      <Primitive.Icon>
        <ChevronDown size={16} />
      </Primitive.Icon>
    </Primitive.Trigger>
  );
}
export function SelectContent({
  children,
}: React.ComponentProps<typeof Primitive.Content>) {
  return (
    <Primitive.Portal>
      <Primitive.Content
        position="popper"
        className="z-50 max-h-72 min-w-[var(--radix-select-trigger-width)] overflow-hidden rounded-lg border bg-surface p-1 shadow-[0_12px_32px_-12px_hsl(var(--foreground)/0.25)]"
      >
        <Primitive.Viewport>{children}</Primitive.Viewport>
      </Primitive.Content>
    </Primitive.Portal>
  );
}
export function SelectItem({
  children,
  ...props
}: React.ComponentProps<typeof Primitive.Item>) {
  return (
    <Primitive.Item
      className="relative cursor-pointer rounded-md px-8 py-2 text-sm outline-none data-[highlighted]:bg-subtle data-[state=checked]:font-medium"
      {...props}
    >
      <Primitive.ItemText>{children}</Primitive.ItemText>
      <Primitive.ItemIndicator className="absolute left-2">
        <Check size={14} />
      </Primitive.ItemIndicator>
    </Primitive.Item>
  );
}
