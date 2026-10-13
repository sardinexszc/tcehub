import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { siteUrl } from '@/components/seo';
import './globals.css';
const geist = Geist({ subsets: ['latin'], variable: '--font-geist' });
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
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
  themeColor: '#F4F4F0',
  colorScheme: 'light',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable}`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:p-3 focus:text-accent-foreground"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
