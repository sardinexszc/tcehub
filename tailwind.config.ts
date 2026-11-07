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
        sans: ['var(--font-archivo)', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '2px',
      },
    },
  },
  plugins: [],
} satisfies Config;
