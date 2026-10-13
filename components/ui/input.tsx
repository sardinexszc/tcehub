import * as React from 'react';
import { cn } from '@/lib/utils';
export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      'h-11 w-full border-0 border-b border-foreground bg-transparent px-0 text-base placeholder:text-muted focus-visible:ring-0 focus-visible:ring-offset-0 aria-[invalid=true]:border-danger',
      className,
    )}
    {...props}
  />
));
Input.displayName = 'Input';
