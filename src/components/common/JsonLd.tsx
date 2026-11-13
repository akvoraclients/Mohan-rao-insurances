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

  // 1. Person Schema: M. Mohan Rao
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${BASE_URL}/#person`,
    name: 'M. Mohan Rao',
    alternateName: isTa ? 'எம். மோகன் ராவ்' : 'M. Mohan Rao',
    jobTitle: 'LIC Financial Advisor',
    description: isTa
      ? 'இந்திய ஆயுள் காப்பீட்டுக் கழகத்தின் (LIC) தலைவர் மன்ற உறுப்பினர் & MDRT நிதி ஆலோசகர் (முகவர் குறியீடு: 0195676N), ஓசூர், தமிழ்நாடு.'
      : 'Chairman’s Club Member & MDRT Financial Advisor with Life Insurance Corporation of India (Agency Code: 0195676N), based in Hosur, Tamil Nadu.',
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    url: currentUrl,
    image: ownerImageUrl,
    worksFor: {
      '@type': 'Organization',
      name: 'Life Insurance Corporation of India (LIC)',
      url: 'https://licindia.in',
    },
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
      'Term Insurance',
      'Endowment Plans',
      'Retirement Planning',
      'Pension Plans',
      'Children Education Funds',
      'Policy Servicing & Claims',
    ],
  };

  // 2. FinancialService / LocalBusiness Schema
  const financialServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    '@id': `${BASE_URL}/#organization`,
    name: isTa
      ? 'திரு. எம். மோகன் ராவ் – எல்.ஐ.சி நிதி ஆலோசகர் ஓசூர்'
      : 'M. Mohan Rao – LIC Financial Advisor in Hosur',
    legalName: 'M. Mohan Rao (LIC Agency Code: 0195676N)',
    image: ownerImageUrl,
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    url: currentUrl,
    hasMap: GOOGLE_MAPS_OFFICE_URL,
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Direct LIC Official Portal Payments, Net Banking, UPI, Official LIC Cash Counters',
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
    name: 'M. Mohan Rao – LIC Financial Advisor',
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

  // 5. FAQ Schema for Crawlable & Local AI Search
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
                ? 'திரு. எம். மோகன் ராவ் அவர்கள் இந்திய ஆயுள் காப்பீட்டுக் கழகத்தின் (LIC) அங்கீகரிக்கப்பட்ட நிதி ஆலோசகர் ஆவார் (முகவர் குறியீடு: 0195676N). இவர் எல்.ஐ.சி தலைவர் மன்ற உறுப்பினர் (Chairman’s Club Member) மற்றும் சர்வதேச MDRT உறுப்பினராக உள்ளார்.'
                : 'M. Mohan Rao is an authorized Life Insurance Corporation of India (LIC) Financial Advisor and Agent (Agency Code: 0195676N). He holds the prestigious distinctions of being an LIC Chairman’s Club Member for Agents and an MDRT Member.',
            },
          },
          {
            '@type': 'Question',
            name: isTa ? 'ஓசூரில் எல்.ஐ.சி ஆலோசகரை எவ்வாறு தொடர்பு கொள்வது?' : 'How can I contact an LIC advisor in Hosur?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: isTa
                ? 'திரு. எம். மோகன் ராவ் அவர்களை +91 95002 53993 என்ற எண்ணில் அழைக்கலாம் அல்லது +91 94435 64017 என்ற எண்ணில் வாட்ஸ்அப் மூலம் உடனடியாகத் தொடர்பு கொள்ளலாம்.'
                : 'You can contact M. Mohan Rao directly by calling +91 95002 53993 or sending a WhatsApp message to +91 94435 64017 for instant life insurance guidance in Hosur.',
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
            name: isTa ? 'ஓசூரில் எல்.ஐ.சி பாலிசி வழிகாட்டலை எவ்வாறு பெறுவது?' : 'How can I get LIC policy guidance in Hosur?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: isTa
                ? 'குடும்ப நிதிப் பாதுகாப்பு, டேர்ம் இன்சூரன்ஸ், குழந்தைகளின் கல்வித் திட்டங்கள், ஓய்வூதியத் திட்டங்கள் மற்றும் பாலிசி புதுப்பித்தல்/க்ளெய்ம் சேவைகளுக்கு இணையதள படிவம் அல்லது நேரடி தொலைபேசி மூலம் ஆலோசனை பெறலாம்.'
                : 'You can request tailored guidance on family term insurance, endowment savings, children’s higher education funds, pension annuities, policy renewals, and claims documentation through our website form or direct call.',
            },
          },
          {
            '@type': 'Question',
            name: isTa ? 'திரு. எம். மோகன் ராவ் அவர்களை வாட்ஸ்அப் மூலம் தொடர்பு கொள்வது எப்படி?' : 'How can I contact M. Mohan Rao through WhatsApp?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: isTa
                ? '+91 94435 64017 என்ற வாட்ஸ்அப் எண்ணிற்கு செய்தி அனுப்பி எல்.ஐ.சி பாலிசிகள் குறித்த தகவல்களையும் வழிகாட்டலையும் உடனடியாகப் பெறலாம்.'
                : 'You can message M. Mohan Rao directly on WhatsApp at +91 94435 64017 to enquire about LIC life insurance plans or existing policy assistance.',
            },
          },
          {
            '@type': 'Question',
            name: isTa ? 'திரு. எம். மோகன் ராவ் பெற்றுள்ள தொழில்முறை அங்கீகாரங்கள் யாவை?' : 'What professional recognitions does M. Mohan Rao have?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: isTa
                ? 'இவர் இந்திய ஆயுள் காப்பீட்டுக் கழகத்தின் முகவர்களுக்கான மிக உயர்ந்த கௌரவமான தலைவர் மன்ற உறுப்பினர் (Chairman’s Club Member) தகுதியையும், உலகளாவிய நிதி நிபுணர்களின் சங்கமான MDRT (Million Dollar Round Table) உறுப்பினர் தகுதியையும் பெற்றுள்ளார்.'
                : 'M. Mohan Rao is recognized as a Chairman’s Club Member for Agents—the highest honor for agents in Life Insurance Corporation of India—and is an MDRT (Million Dollar Round Table) Member, representing global excellence in financial advisory.',
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
