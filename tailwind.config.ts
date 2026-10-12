import type { Config } from 'tailwindcss';
export default {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        surface: 'hsl(var(--surface))',
        muted: 'hsl(var(--muted))',
        border: 'hsl(var(--border))',
        accent: '#E11D2E',
      },
      fontFamily: {
        sans: ['var(--font-geist)', 'Inter', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
