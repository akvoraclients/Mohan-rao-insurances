import { Metadata } from 'next';
import { SupportedLanguage } from '@/types';
import { BUSINESS_INFO } from './constants';

export const BASE_URL = 'https://mmohanrao-insurance.com';

export const HOSUR_LOCAL_KEYWORDS = [
  'LIC advisor in Hosur',
  'LIC insurance agent in Hosur',
  'Best insurance advisor in Hosur',
  'Life insurance advisor Hosur',
  'LIC financial advisor Hosur',
  'LIC policy advisor Hosur',
  'Life insurance consultant Hosur',
  'Insurance advisor near me',
  'LIC agent near me',
  'Life insurance guidance Hosur',
  'Family life insurance planning',
  'Life insurance consultation',
  'LIC policy information',
  'Financial protection planning',
  'Life insurance for families',
  'LIC policy assistance',
  'Insurance consultation in Hosur',
  'LIC agent Tamil Nadu',
  'Life insurance services Hosur',
];

export function generateSeoMetadata(
  lang: SupportedLanguage,
  pageTitle?: string,
  pageDescription?: string
): Metadata {
  const isTa = lang === 'ta';

  const defaultTitle = isTa
    ? `${BUSINESS_INFO.name} | எல்.ஐ.சி நிதி ஆலோசகர் ஓசூர்`
    : `${BUSINESS_INFO.name} | LIC Financial Advisor in Hosur`;

  const title = pageTitle ? `${pageTitle} | ${BUSINESS_INFO.name}` : defaultTitle;

  const defaultDescription = isTa
    ? 'ஓசூரில் எல்.ஐ.சி ஆயுள் காப்பீட்டு வழிகாட்டல் தேவையா? தலைவர் மன்ற உறுப்பினர் & MDRT ஆலோசகர் திரு. எம். மோகன் ராவ் (முகவர் குறியீடு: 0195676N) அவர்களை தொடர்பு கொண்டு ஆயுள் காப்பீட்டு ஆலோசனை மற்றும் பாலிசி சேவைகளைப் பெறுங்கள்.'
    : "Looking for LIC insurance guidance in Hosur? Contact M. Mohan Rao, LIC Financial Advisor and Chairman's Club Member (Agency Code: 0195676N), for life insurance consultation and policy assistance.";

  const description = pageDescription || defaultDescription;

  return {
    title,
    description,
    keywords: HOSUR_LOCAL_KEYWORDS,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `/${lang}`,
      languages: {
        'en-IN': '/en',
        'ta-IN': '/ta',
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title,
      description,
      siteName: `${BUSINESS_INFO.name} – LIC Financial Advisor in Hosur`,
      locale: isTa ? 'ta_IN' : 'en_IN',
      type: 'website',
      url: `/${lang}`,
      images: [
        {
          url: '/images/owner.jpeg',
          width: 1600,
          height: 1200,
          alt: isTa
            ? 'எம். மோகன் ராவ் – எல்.ஐ.சி நிதி ஆலோசகர் ஓசூர்'
            : 'M. Mohan Rao – LIC Financial Advisor in Hosur',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/owner.jpeg'],
    },
    icons: {
      icon: [
        { url: '/favicon.svg', type: 'image/svg+xml' },
        { url: '/favicon.ico', sizes: 'any' },
      ],
      shortcut: '/favicon.ico',
    },
  };
}
