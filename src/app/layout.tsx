import type { Metadata, Viewport } from 'next';
import './globals.css';
import { BUSINESS_INFO, BRAND_TAGLINE } from '@/lib/constants';

export const metadata: Metadata = {
  title: `${BUSINESS_INFO.name} | LIC Financial Advisor`,
  description:
    'M. Mohan Rao – Chairman’s Club Member & MDRT Financial Advisor, Life Insurance Corporation of India (Agency Code: 0195676N). Professional life insurance guidance in Hosur.',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    shortcut: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0B3B60',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-brand-light text-brand-charcoal">
        {children}
      </body>
    </html>
  );
}
