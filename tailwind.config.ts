import type { Config } from 'tailwindcss';
const token = (name: string) => `hsl(var(--${name}) / <alpha-value>)`;
export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: token('page'),
        foreground: token('foreground'),
        surface: token('surface'),
        subtle: token('subtle'),
        muted: token('muted'),
        border: token('border'),
        accent: {
          DEFAULT: token('foreground'),
          strong: token('foreground'),
          foreground: token('surface'),
        },
        danger: token('danger'),
      },
      fontFamily: {
        sans: ['var(--font-geist)', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        display: ['var(--font-display)', 'Arial Narrow', 'sans-serif'],
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config;
