import React from 'react';
import { SupportedLanguage } from '@/types';
import { BUSINESS_INFO, GOOGLE_MAPS_OFFICE_URL } from '@/lib/constants';
import { BASE_URL } from '@/lib/seo';

interface JsonLdProps {
  lang: SupportedLanguage;
  pageType?: 'home' | 'about' | 'insurance' | 'awards' | 'contact';
  includeFaq?: boolean;
}

export const JsonLd: React.FC<JsonLdProps> = ({
  lang,
  pageType = 'home',
  includeFaq = true,
}) => {
  const isTa = lang === 'ta';
  const currentUrl = `${BASE_URL}/${lang}`;
  const ownerImageUrl = `${BASE_URL}/images/owner.jpeg`;

  // 1. Person Schema: M. Mohan Rao – Insurance Advisor
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${BASE_URL}/#person`,
    name: 'M. Mohan Rao',
    alternateName: isTa ? 'எம். மோகன் ராவ்' : 'M. Mohan Rao',
    jobTitle: 'Insurance Advisor',
    description: isTa
      ? 'ஓசூரில் செயல்படும் சுயாதீன காப்பீட்டு ஆலோசகர். ஆயுள் காப்பீடு (LIC - தலைவர் மன்ற உறுப்பினர் & MDRT), மருத்துவக் காப்பீடு (Star Health), மற்றும் பொதுக் காப்பீடு (United India Insurance) ஆகியவற்றிற்கான தொழில்முறை வழிகாட்டல்.'
      : 'Independent Insurance Advisor based in Hosur, Tamil Nadu. Providing guidance across Life Insurance (LIC - Chairman’s Club Member & MDRT), Health Insurance (Star Health), and General Insurance (United India Insurance).',
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    url: currentUrl,
    image: ownerImageUrl,
    affiliation: [
      {
        '@type': 'Organization',
        name: 'Life Insurance Corporation of India (LIC)',
        url: 'https://licindia.in',
      },
      {
        '@type': 'Organization',
        name: 'Star Health and Allied Insurance Company Limited',
        url: 'https://www.starhealth.in',
      },
      {
        '@type': 'Organization',
        name: 'United India Insurance Company Limited',
        url: 'https://uiic.co.in',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bye-Pass Road',
      addressLocality: 'Hosur',
      postalCode: '635109',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN',
    },
    knowsAbout: [
      'Life Insurance',
      'Health Insurance',
      'General Insurance',
      'Term Life Insurance',
      'Endowment Plans',
      'Family Floater Health Plans',
      'Motor & Vehicle Insurance',
      'Retirement & Pension Planning',
      'Children Education Funds',
      'Policy Servicing & Claims',
    ],
  };

  // 2. FinancialService / InsuranceAgency LocalBusiness Schema
  const financialServiceSchema = {
    '@context': 'https://schema.org',
    '@type': ['FinancialService', 'InsuranceAgency'],
    '@id': `${BASE_URL}/#organization`,
    name: isTa
      ? 'திரு. எம். மோகன் ராவ் – காப்பீட்டு ஆலோசகர் ஓசூர்'
      : 'M. Mohan Rao – Insurance Advisor in Hosur',
    legalName: 'M. Mohan Rao – Insurance Advisory Services',
    description: isTa
      ? 'ஓசூரில் ஆயுள், மருத்துவ மற்றும் பொதுக் காப்பீடுகளுக்கான தொழில்முறை சுயாதீன வழிகாட்டல் மற்றும் பாலிசிதாரர் சேவை (LIC, Star Health, United India Insurance).'
      : 'Professional independent insurance advisory in Hosur offering guidance across Life (LIC), Health (Star Health), and General Insurance (United India Insurance).',
    image: ownerImageUrl,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    url: currentUrl,
    hasMap: GOOGLE_MAPS_OFFICE_URL,
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Official Insurer Portal Payments (LIC, Star Health, United India Insurance), Net Banking, UPI',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Bye-Pass Road',
      addressLocality: 'Hosur',
      postalCode: '635109',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 12.7409,
      longitude: 77.8253,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Hosur',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Tamil Nadu',
      },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:00',
        closes: '19:30',
      },
    ],
    founder: {
      '@id': `${BASE_URL}/#person`,
    },
  };

  // 3. WebSite Schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    url: BASE_URL,
    name: 'M. Mohan Rao – Insurance Advisor in Hosur',
    inLanguage: ['en', 'ta'],
    publisher: {
      '@id': `${BASE_URL}/#organization`,
    },
  };

  // 4. BreadcrumbList Schema
  const pageNames: Record<string, { en: string; ta: string }> = {
    home: { en: 'Home', ta: 'முகப்பு' },
    about: { en: 'About Advisor', ta: 'ஆலோசகர் பற்றி' },
    insurance: { en: 'Insurance Services', ta: 'காப்பீட்டு சேவைகள்' },
    awards: { en: 'Awards & Achievements', ta: 'விருதுகள் & சாதனைகள்' },
    contact: { en: 'Contact Us', ta: 'தொடர்பு' },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: isTa ? 'முகப்பு' : 'Home',
        item: `${BASE_URL}/${lang}`,
      },
      ...(pageType !== 'home'
        ? [
            {
              '@type': 'ListItem',
              position: 2,
              name: pageNames[pageType]?.[lang] || pageNames[pageType]?.en || pageType,
              item: `${BASE_URL}/${lang}/${pageType}`,
            },
          ]
        : []),
    ],
  };

  // 5. FAQ Schema for Local & Search Engines
  const faqSchema = includeFaq
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: isTa ? 'திரு. எம். மோகன் ராவ் யார்?' : 'Who is M. Mohan Rao?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: isTa
                ? 'திரு. எம். மோகன் ராவ் அவர்கள் தமிழ்நாட்டின் ஓசூரில் செயல்படும் ஒரு தொழில்முறை காப்பீட்டு ஆலோசகர் ஆவார். இவர் ஆயுள் காப்பீடு (LIC), மருத்துவக் காப்பீடு (Star Health), மற்றும் பொதுக் காப்பீடு (United India Insurance) ஆகிய மூன்று முன்னணி நிறுவனங்களின் பாலிசிகளுக்கு வழிகாட்டல் வழங்குகிறார்.'
                : 'M. Mohan Rao is a professional Insurance Advisor based in Hosur, Tamil Nadu. He provides dedicated insurance guidance and policyholder assistance across Life Insurance (LIC), Health Insurance (Star Health), and General Insurance (United India Insurance).',
            },
          },
          {
            '@type': 'Question',
            name: isTa ? 'திரு. எம். மோகன் ராவ் என்னென்ன காப்பீட்டு சேவைகளை வழங்குகிறார்?' : 'What insurance services does M. Mohan Rao provide?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: isTa
                ? 'ஆயுள் காப்பீடு (LIC - டேர்ம் இன்சூரன்ஸ், சேமிப்பு & ஓய்வூதியத் திட்டங்கள்), மருத்துவக் காப்பீடு (Star Health - தனிநபர் & குடும்ப மருத்துவத் திட்டங்கள்), மற்றும் பொதுக் காப்பீடு (United India - வாகனம், கடை & சொத்துப் பாதுகாப்பு).'
                : 'He provides consultation for Life Insurance (LIC: term life, endowment, children and pension plans), Health Insurance (Star Health: individual, family floater, and senior citizen plans), and General Insurance (United India: two-wheeler, car, commercial vehicle, and property insurance).',
            },
          },
          {
            '@type': 'Question',
            name: isTa ? 'ஓசூரில் காப்பீட்டு ஆலோசகரை எவ்வாறு தொடர்பு கொள்வது?' : 'How can I contact an insurance advisor in Hosur?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: isTa
                ? 'திரு. எம். மோகன் ராவ் அவர்களை +91 95002 53993 என்ற எண்ணில் அழைக்கலாம் அல்லது +91 94435 64017 என்ற எண்ணில் வாட்ஸ்அப் மூலம் உடனடியாகத் தொடர்பு கொள்ளலாம்.'
                : 'You can contact M. Mohan Rao directly by calling +91 95002 53993 or sending a WhatsApp message to +91 94435 64017 for prompt insurance consultation in Hosur.',
            },
          },
          {
            '@type': 'Question',
            name: isTa ? 'திரு. எம். மோகன் ராவ் அவர்களின் அலுவலகம் எங்குள்ளது?' : "Where is M. Mohan Rao's office located?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: isTa
                ? 'எங்கள் அலுவலகம் தமிழ்நாட்டின் ஓசூரில் உள்ள பை-பாஸ் ரோட்டில் அமைந்துள்ளது (அஞ்சல் குறியீடு: 635109).'
                : 'The advisory office is located on Bye-Pass Road, Hosur - 635109, Tamil Nadu, India. Consultations are available in person by appointment or via phone and WhatsApp.',
            },
          },
          {
            '@type': 'Question',
            name: isTa ? 'பாலிசி விண்ணப்பங்கள் மற்றும் பிரீமியம் கட்டணங்கள் எவ்வாறு செலுத்தப்படுகின்றன?' : 'How are policy proposals and premium payments processed?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: isTa
                ? 'அனைத்து பாலிசி விண்ணப்பங்களும், பிரீமியம் கட்டணங்களும் சம்பந்தப்பட்ட நிறுவனங்களின் (LIC, Star Health, United India Insurance) அதிகாரப்பூர்வ ஆன்லைன் தளங்கள் அல்லது பண கவுண்ட்டர்கள் வழியாக மட்டுமே நேரடியாகச் செலுத்தப்படுகின்றன.'
                : 'All policy proposals and premium payments are processed securely and directly through the official portals and cash counters of the respective insurers (LIC, Star Health, United India Insurance). The advisor does not accept personal payments.',
            },
          },
        ],
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(financialServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
};

export default JsonLd;
