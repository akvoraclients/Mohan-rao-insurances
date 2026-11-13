import { Metadata } from 'next';
import { SupportedLanguage } from '@/types';
import { BUSINESS_INFO } from './constants';

export const BASE_URL = 'https://mmohanrao-insurance.com';

export const HOSUR_LOCAL_KEYWORDS = [
  'Insurance advisor in Hosur',
  'Best insurance advisor in Hosur',
  'LIC advisor in Hosur',
  'LIC insurance agent in Hosur',
  'Star Health insurance advisor in Hosur',
  'Health insurance advisor in Hosur',
  'United India Insurance advisor in Hosur',
  'Health insurance consultation Hosur',
  'Life insurance advisor Hosur',
  'General insurance guidance Hosur',
  'Insurance agent near me',
  'Insurance consultation in Hosur',
  'Family life insurance planning Hosur',
  'Vehicle insurance Hosur',
  'Two-wheeler insurance Hosur',
  'Car insurance advisor Hosur',
  'Term insurance advisor Hosur',
  'Family health cover Hosur',
  'Senior citizen health insurance Hosur',
  'Insurance policy servicing Hosur',
  'M. Mohan Rao insurance advisor',
];

export function generateSeoMetadata(
  lang: SupportedLanguage,
  pageTitle?: string,
  pageDescription?: string
): Metadata {
  const isTa = lang === 'ta';

  const defaultTitle = isTa
    ? `${BUSINESS_INFO.name} | காப்பீட்டு ஆலோசகர் ஓசூர் | LIC • Star Health • United India`
    : `${BUSINESS_INFO.name} | Insurance Advisor in Hosur | LIC • Star Health • United India`;

  const title = pageTitle ? `${pageTitle} | ${BUSINESS_INFO.name}` : defaultTitle;

  const defaultDescription = isTa
    ? 'ஓசூரில் உங்கள் நம்பிக்கைக்குரிய காப்பீட்டு ஆலோசகர் திரு. எம். மோகன் ராவ். ஆயுள் காப்பீடு (LIC), மருத்துவக் காப்பீடு (Star Health), மற்றும் பொதுக் காப்பீடு (United India Insurance) பாலிசிகளுக்கான முழுமையான வழிகாட்டல் மற்றும் பாலிசிதாரர் சேவைகள்.'
    : 'Get guidance for life insurance, health insurance, and general insurance from M. Mohan Rao, Insurance Advisor in Hosur. Explore insurance options from LIC, Star Health, and United India Insurance with dedicated personal assistance.';

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
      type: 'website',
      locale: isTa ? 'ta_IN' : 'en_IN',
      url: `${BASE_URL}/${lang}`,
      title,
      description,
      siteName: `${BUSINESS_INFO.name} – Insurance Advisor`,
      images: [
        {
          url: `${BASE_URL}/images/owner.jpeg`,
          width: 1200,
          height: 900,
          alt: `${BUSINESS_INFO.name} – Insurance Advisor in Hosur`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [`${BASE_URL}/images/owner.jpeg`],
    },
  };
}
