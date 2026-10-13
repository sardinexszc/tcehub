import * as React from 'react';
import { cn } from '@/lib/utils';
export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      'h-11 w-full rounded-full bg-subtle px-5 text-base placeholder:text-muted aria-[invalid=true]:ring-2 aria-[invalid=true]:ring-tail',
      className,
    )}
    {...props}
  />
));
Input.displayName = 'Input';
