import type { Config } from 'tailwindcss';
const token = (name: string) => `hsl(var(--${name}) / <alpha-value>)`;
export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: token('background'),
        foreground: token('foreground'),
        surface: token('surface'),
        subtle: token('subtle'),
        muted: token('muted'),
        border: token('border'),
        accent: {
          DEFAULT: token('accent'),
          strong: token('accent-strong'),
          foreground: token('accent-foreground'),
        },
        danger: token('danger'),
      },
      fontFamily: {
        sans: ['var(--font-geist)', 'Inter', 'Arial', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'ui-monospace', 'monospace'],
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config;
