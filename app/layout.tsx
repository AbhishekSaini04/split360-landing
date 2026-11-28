import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { SITE_URL, site } from '@/lib/site';
import { JsonLd } from '@/components/JsonLd';
import './globals.css';

// Self-hosted (no request to Google Fonts): faster first paint and no third-party call.
const dm = localFont({ src: './fonts/DMSans.ttf', variable: '--font-dm', display: 'swap', weight: '100 1000' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: site.title, template: '%s · Split360' },
  description: site.description,
  applicationName: site.name,
  keywords: [
    'expense tracker', 'bill splitter', 'split bills with friends', 'Splitwise alternative', 'trip expense splitter',
    'flatmate expenses', 'UPI settle up', 'group expenses India', 'expense sharing app', 'trip kitty', 'Split360',
  ],
  authors: [{ name: site.company.name, url: site.company.url }],
  creator: site.company.name,
  publisher: site.company.name,
  category: 'finance',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: site.name,
    locale: 'en_IN',
    url: '/',
    title: site.title,
    description: site.description,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Split360 app showing a trip pool. A product of IndieSoft.in' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }, { url: '/favicon.png', type: 'image/png' }],
    apple: '/apple-touch-icon.png',
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = { themeColor: '#f4f7f5', width: 'device-width', initialScale: 1 };

/** Site-wide structured data: who makes it and what it is. */
const graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${site.company.url}/#org`,
      name: site.company.name,
      url: site.company.url,
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: site.name,
      inLanguage: 'en-IN',
      publisher: { '@id': `${site.company.url}/#org` },
    },
    {
      '@type': 'SoftwareApplication',
      '@id': `${SITE_URL}/#app`,
      name: site.name,
      url: SITE_URL,
      applicationCategory: 'FinanceApplication',
      operatingSystem: 'Web, Android',
      description: site.description,
      image: `${SITE_URL}/og-image.png`,
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
      publisher: { '@id': `${site.company.url}/#org` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={dm.variable}>
      <body className="font-sans">
        <JsonLd data={graph} />
        {children}
      </body>
    </html>
  );
}
