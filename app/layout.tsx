import type { Metadata } from 'next';
import { Geist } from 'next/font/google';
import { Providers } from '@/components/providers';
import { siteUrl } from '@/components/seo';
import './globals.css';
const geist = Geist({ subsets: ['latin'], variable: '--font-geist' });
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'TCEHub — Toyota Camry Elite Hub',
    template: '%s | TCEHub',
  },
  description:
    'Discover Camry specialists, build journals, community events, and ownership guides.',
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geist.variable}>
        <Providers>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-accent focus:p-3 focus:text-white"
          >
            Skip to content
          </a>
          {children}
        </Providers>
      </body>
    </html>
  );
}
