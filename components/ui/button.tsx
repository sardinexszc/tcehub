import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
export const buttonVariants = cva(
  'inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full text-[15px] font-medium transition-colors duration-200 disabled:pointer-events-none disabled:opacity-40 touch-manipulation',
  {
    variants: {
      variant: {
        default: 'bg-foreground text-surface hover:bg-foreground/85',
        ink: 'bg-foreground text-surface hover:bg-foreground/85',
        light: 'bg-surface text-foreground hover:bg-surface/85',
        soft: 'bg-subtle text-foreground hover:bg-border',
        outline: 'border border-border bg-surface hover:border-foreground/40',
        ghost: 'hover:bg-subtle',
      },
      size: {
        default: 'h-11 px-5',
        sm: 'h-9 px-4 text-[14px]',
        icon: 'size-11 p-0',
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
/** Round arrow disc used inside pills and on media corners. Decorative; the parent carries the name. */
export function ArrowDisc({
  className,
  tone = 'light',
}: {
  className?: string;
  tone?: 'light' | 'ink';
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'grid size-8 shrink-0 place-items-center rounded-full transition-transform duration-300 ease-out group-hover:rotate-45',
        tone === 'light'
          ? 'bg-surface text-foreground'
          : 'bg-foreground text-surface',
        className,
      )}
    >
      <ArrowUpRight size={16} strokeWidth={2} />
    </span>
  );
}
