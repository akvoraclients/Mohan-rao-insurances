import { AwardItem, AwardCategory, OwnerProfileInfo } from '@/types';

/**
 * PROFESSIONAL PROFILE DATA: M. MOHAN RAO
 * Source: Official LIC Agent Credentials (Agency Code: 0195676N)
 * Profile Photograph: /images/owner.jpeg
 */
export const OWNER_PROFILE: OwnerProfileInfo = {
  name: 'M. Mohan Rao',
  role: {
    en: "Chairman's Club Member & LIC Financial Advisor",
    ta: 'தலைவர் மன்ற உறுப்பினர் & எல்.ஐ.சி நிதி ஆலோசகர்',
  },
  location: {
    en: 'Hosur, Tamil Nadu, India',
    ta: 'ஓசூர், தமிழ்நாடு, இந்தியா',
  },
  imageSrc: '/images/owner.jpeg',
  hasGenuinePhoto: true,
};

/**
 * VERIFIED RECOGNITION & AWARDS DATA
 * Factual recognition claims strictly matching the client's credentials:
 * 1. MDRT Member (Million Dollar Round Table)
 * 2. Chairman's Club Member for Agents (LIC of India)
 */
export const COMPANY_RECOGNITION_AWARDS: AwardItem[] = [
  {
    id: 'mdrt-member',
    category: 'lic',
    companyName: 'MDRT (Million Dollar Round Table)',
    imageSrc: '/images/awards/mdrt-badge.svg',
    altText: {
      en: 'MDRT Member - The Premier Association of Financial Professionals',
      ta: 'MDRT உறுப்பினர் - நிதி நிபுணர்களின் முதன்மையான உலகளாவிய சங்கம்',
    },
    title: {
      en: 'MDRT Member',
      ta: 'MDRT உறுப்பினர்',
    },
    caption: {
      en: 'Recognized for premier professional standards and excellence in life insurance advisory.',
      ta: 'ஆயுள் காப்பீட்டு வழிகாட்டலில் உலகத்தரம் வாய்ந்த தொழில்முறை சேவைகளுக்கான அங்கீகாரம்.',
    },
    isVerified: true,
  },
  {
    id: 'chairmans-club',
    category: 'lic',
    companyName: 'Life Insurance Corporation of India (LIC)',
    imageSrc: '/images/awards/chairmans-club-badge.svg',
    altText: {
      en: "Chairman's Club Member for Agents - Life Insurance Corporation of India",
      ta: 'தலைவர் மன்ற உறுப்பினர் - இந்திய ஆயுள் காப்பீட்டுக் கழகம் (LIC)',
    },
    title: {
      en: "Chairman's Club Member for Agents",
      ta: 'தலைவர் மன்ற உறுப்பினர் (LIC)',
    },
    caption: {
      en: 'Member of LIC’s highest and most prestigious recognition club for outstanding agent performance and client servicing.',
      ta: 'வாடிக்கையாளர் சேவை மற்றும் சிறப்பான பங்களிப்பிற்காக எல்.ஐ.சி-யின் முதன்மை மன்ற உறுப்பினர் கௌரவம்.',
    },
    isVerified: true,
  },
];

/**
 * Retrieve verified awards.
 */
export function getVerifiedAwards(category?: AwardCategory): AwardItem[] {
  return COMPANY_RECOGNITION_AWARDS.filter(
    (item) => item.isVerified && (!category || item.category === category)
  );
}

/**
 * Check if verified awards exist.
 */
export function hasVerifiedAwards(category?: AwardCategory): boolean {
  return getVerifiedAwards(category).length > 0;
}
