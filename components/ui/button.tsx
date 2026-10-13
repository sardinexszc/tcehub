import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
export const buttonVariants = cva(
  'inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors duration-200 disabled:pointer-events-none disabled:opacity-45 h-11 px-5 touch-manipulation',
  {
    variants: {
      variant: {
        default:
          'bg-accent text-accent-foreground hover:bg-accent-strong active:bg-accent-strong',
        ink: 'bg-foreground text-background hover:bg-foreground/85',
        outline:
          'border border-foreground/15 bg-surface text-foreground hover:border-foreground/40',
        ghost: 'text-foreground hover:bg-subtle',
      },
      size: {
        default: 'h-11',
        sm: 'h-9 px-3.5 text-[13px]',
        icon: 'h-11 w-11 p-0',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  },
);
export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';
