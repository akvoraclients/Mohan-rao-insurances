export type SupportedLanguage = 'en' | 'ta';

export type ServiceCategory = 'insurance' | 'general';

export interface BusinessDetails {
  name: string;
  owner: string;
  organization: string;
  designation: string;
  agencyCode: string;
  recognitions: string[];
  location: string;
  phone: string | null;
  phoneSecondary: string | null;
  whatsapp: string | null;
  email: string | null;
  address: string | null;
  isPhoneConfigured: boolean;
  isWhatsAppConfigured: boolean;
  isEmailConfigured: boolean;
  isAddressConfigured: boolean;
}

export interface NavItem {
  key: string;
  label: string;
  href: string;
}

export interface InsuranceServiceInfo {
  id: string;
  name: string;
  shortName: string;
  services: string[];
}

export type AwardCategory = 'lic' | 'new-india' | 'star-health';

export interface AwardItem {
  id: string;
  category: AwardCategory;
  companyName: string;
  imageSrc: string;
  altText: {
    en: string;
    ta: string;
  };
  title?: {
    en: string;
    ta: string;
  };
  year?: string;
  caption?: {
    en: string;
    ta: string;
  };
  isVerified: boolean;
}

export interface OwnerProfileInfo {
  name: string;
  role: {
    en: string;
    ta: string;
  };
  location: {
    en: string;
    ta: string;
  };
  imageSrc: string;
  hasGenuinePhoto: boolean;
}

// Formspree submission payload structure
export interface FormspreePayload {
  _service: string;
  _subject: string;
  _gotcha?: string;
  _replyto?: string;
  name: string;
  phone: string;
  email?: string;
  [key: string]: unknown;
}
