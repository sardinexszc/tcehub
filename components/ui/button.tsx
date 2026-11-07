import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
export const buttonVariants = cva(
  'inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded text-sm font-semibold transition-colors duration-150 disabled:pointer-events-none disabled:border-border disabled:bg-subtle disabled:text-muted h-11 px-5 touch-manipulation',
  {
    variants: {
      variant: {
        default:
          'bg-accent text-accent-foreground hover:bg-accent-strong active:bg-accent-strong',
        ink: 'bg-foreground text-background hover:bg-foreground/85',
        outline:
          'border border-foreground/25 bg-transparent text-current hover:border-current',
        ghost: 'text-current hover:bg-foreground/[0.06]',
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
