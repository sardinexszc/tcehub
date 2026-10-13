import type { Config } from 'tailwindcss';
const token = (name: string) => `hsl(var(--${name}) / <alpha-value>)`;
export default {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: token('mist'),
        surface: token('paper'),
        foreground: token('ink'),
        muted: token('slate'),
        border: token('line'),
        subtle: token('well'),
        night: token('night'),
        tail: token('tail'),
        accent: {
          DEFAULT: token('ink'),
          strong: token('ink'),
          foreground: token('paper'),
        },
        danger: token('tail'),
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      borderRadius: {
        panel: '32px',
        media: '20px',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
} satisfies Config;
