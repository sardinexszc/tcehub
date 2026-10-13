import type { Metadata, Viewport } from 'next';
import { Archivo, Geist, Newsreader } from 'next/font/google';
import { siteUrl } from '@/components/seo';
import './globals.css';
const geist = Geist({ subsets: ['latin'], variable: '--font-geist' });
const serif = Newsreader({
  subsets: ['latin'],
  variable: '--font-serif',
  axes: ['opsz'],
  style: ['normal', 'italic'],
});
const display = Archivo({
  subsets: ['latin'],
  variable: '--font-display',
  axes: ['wdth'],
});
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'TCEHub — Toyota Camry Elite Hub',
    template: '%s | TCEHub',
  },
  description:
    'Discover Camry specialists, build journals, community events, and ownership guides.',
};
export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  colorScheme: 'light',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${serif.variable} ${display.variable}`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-foreground focus:p-3 focus:text-background"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
