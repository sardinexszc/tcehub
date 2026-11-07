import type { Metadata, Viewport } from 'next';
import { Archivo } from 'next/font/google';
import { siteUrl } from '@/components/seo';
import './globals.css';
// Variable width axis gives condensed headlines and normal-width body text from one family.
const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--font-archivo',
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
      <body className={`${archivo.variable}`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-accent focus:p-3 focus:text-accent-foreground"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
