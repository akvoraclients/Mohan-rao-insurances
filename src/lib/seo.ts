import { Metadata } from 'next';
import { SupportedLanguage } from '@/types';
import { BUSINESS_INFO } from './constants';

export const BASE_URL = 'https://mmohanrao-insurance.com';

export function generateSeoMetadata(
  lang: SupportedLanguage,
  pageTitle?: string,
  pageDescription?: string
): Metadata {
  const isTa = lang === 'ta';

  const defaultTitle = isTa
    ? `${BUSINESS_INFO.name} | எல்.ஐ.சி நிதி ஆலோசகர் & ஆயுள் காப்பீட்டு வழிகாட்டல்`
    : `${BUSINESS_INFO.name} | LIC Financial Advisor`;

  const title = pageTitle ? `${pageTitle} | ${BUSINESS_INFO.name}` : defaultTitle;

  const defaultDescription = isTa
    ? 'எம். மோகன் ராவ் - எல்.ஐ.சி தலைவர் மன்ற உறுப்பினர் & MDRT நிதி ஆலோசகர் (முகவர் குறியீடு: 0195676N). ஓசூரில் குடும்ப நிதிப் பாதுகாப்பு, டேர்ம் இன்சூரன்ஸ் மற்றும் பாலிசி சேவைகளுக்கான தொழில்முறை வழிகாட்டல்.'
    : 'M. Mohan Rao – Chairman’s Club Member & MDRT Financial Advisor, Life Insurance Corporation of India (Agency Code: 0195676N). Professional life insurance advisory and policyholder assistance in Hosur.';

  const description = pageDescription || defaultDescription;

  return {
    title,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `/${lang}`,
      languages: {
        'en-IN': '/en',
        'ta-IN': '/ta',
      },
    },
    openGraph: {
      title,
      description,
      siteName: `${BUSINESS_INFO.name} – LIC Financial Advisor`,
      locale: isTa ? 'ta_IN' : 'en_IN',
      type: 'website',
      url: `/${lang}`,
      images: [
        {
          url: '/images/owner.jpeg',
          width: 1600,
          height: 1200,
          alt: isTa ? 'எம். மோகன் ராவ் - எல்.ஐ.சி நிதி ஆலோசகர்' : 'M. Mohan Rao - LIC Financial Advisor',
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
