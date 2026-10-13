import * as React from 'react';
import { cn } from '@/lib/utils';
export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      'h-11 w-full rounded-md border bg-surface px-3 text-base transition-colors placeholder:text-muted hover:border-foreground/30 aria-[invalid=true]:border-danger sm:text-sm',
      className,
    )}
    {...props}
  />
));
Input.displayName = 'Input';
