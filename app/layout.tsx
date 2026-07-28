import type { Metadata } from 'next';
import { Newsreader, Inter } from 'next/font/google';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { SITE_URL, seo, profile } from '@/data/profile';

const serif = Newsreader({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
});

const sans = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: seo.title,
    template: '%s · Chris McFadden',
  },
  description: seo.description,
  applicationName: seo.siteName,
  authors: [{ name: profile.name }],
  keywords: [
    'CTO',
    'SVP Engineering',
    'engineering leadership',
    'enterprise SaaS',
    'applied AI',
    'platform transformation',
    'cloud-native SaaS',
    'PE-backed SaaS',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: seo.siteName,
    title: seo.title,
    description: seo.description,
    // og:image is supplied by app/opengraph-image.tsx (generated at build).
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
  },
  robots: { index: true, follow: true },
  // Google Search Console, URL-prefix property. DNS TXT verification is not possible on a
  // github.io subdomain — GitHub controls that DNS — so the site verifies via meta tag.
  verification: { google: '53BnakPN15Gg193lkL556jhJbsPGrHm9Jmin0kqkZpc' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="min-h-screen font-sans antialiased">
        <a
          href="#main"
          className="no-print sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        {/* GoatCounter — cookieless page counts, no personal data, so no consent banner.
            The site's only third-party request. Deliberately a plain async tag rather than
            next/script: count.js counts on the window load event, and next/script injects
            after that event has already fired, so nothing would ever be recorded. */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          data-goatcounter="https://cristoirmac.goatcounter.com/count"
          async
          src="https://gc.zgo.at/count.js"
        />
      </body>
    </html>
  );
}
