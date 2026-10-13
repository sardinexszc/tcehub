import type { Metadata, Viewport } from 'next';
import { Instrument_Serif, Urbanist } from 'next/font/google';
import { siteUrl } from '@/components/seo';
import './globals.css';
const sans = Urbanist({ subsets: ['latin'], variable: '--font-sans' });
const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
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
  themeColor: '#E4E7EA',
  colorScheme: 'light',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${serif.variable}`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-foreground focus:px-5 focus:py-3 focus:text-surface"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
