import { BusinessDetails } from '@/types';

/**
 * CLIENT BUSINESS INFORMATION: M. MOHAN RAO
 * LIC Financial Advisor & Chairman's Club Member
 * Source of Truth: Authorized Business Card Reference
 */
export const BUSINESS_INFO: BusinessDetails = {
  name: 'M. Mohan Rao',
  owner: 'M. Mohan Rao',
  organization: 'Life Insurance Corporation of India (LIC)',
  designation: "Chairman's Club Member & Financial Advisor",
  agencyCode: '0195676N',
  recognitions: ['MDRT Member', "Chairman's Club Member for Agents"],
  location: 'Hosur, Tamil Nadu, India',
  phone: '+91 95002 53993',
  phoneSecondary: null,
  whatsapp: '+91 94435 64017',
  email: 'mmrthorvath@gmail.com',
  address: 'Bye-Pass Road, Hosur - 635109, Tamil Nadu, India',
  isPhoneConfigured: true,
  isWhatsAppConfigured: true,
  isEmailConfigured: true,
  isAddressConfigured: true,
};

// Verified Google Maps search URL using the exact office address
export const GOOGLE_MAPS_OFFICE_URL =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('Bye-Pass Road, Hosur - 635109, Tamil Nadu, India');

export const BRAND_TAGLINE = {
  en: 'LIC Financial Advisor & Life Insurance Guidance',
  ta: 'எல்.ஐ.சி நிதி ஆலோசகர் & ஆயுள் காப்பீட்டு வழிகாட்டல்',
};

export const CONTACT_STATUS_MESSAGES = {
  en: {
    phoneNotice: 'Direct call assistance available Mon – Sat',
    whatsappNotice: 'Chat on WhatsApp for instant guidance',
    emailNotice: 'Send your enquiry directly via email',
    addressNotice: 'Visit our office on Bye-Pass Road, Hosur',
    contactNotice: 'Contact M. Mohan Rao directly for personalized life insurance advice and policy servicing.',
    contactBadge: 'Chairman’s Club Member & MDRT Advisor',
    phonePending: 'Phone number available for enquiries',
    whatsappPending: 'WhatsApp contact available',
    contactPendingBadge: 'Available for Enquiries',
  },
  ta: {
    phoneNotice: 'திங்கள் - சனி நேரடி தொலைபேசி சேவை',
    whatsappNotice: 'உடனடி வழிகாட்டலுக்கு வாட்ஸ்அப்பில் தொடர்பு கொள்ளவும்',
    emailNotice: 'மின்னஞ்சல் மூலம் உங்கள் கேள்விகளை அனுப்பவும்',
    addressNotice: 'எங்கள் அலுவலக முகவரி: பை-பாஸ் ரோடு, ஓசூர்',
    contactNotice: 'ஆயுள் காப்பீட்டு வழிகாட்டல் மற்றும் பாலிசி சேவைகளுக்கு திரு. எம். மோகன் ராவ் அவர்களை நேரடியாக தொடர்பு கொள்ளவும்.',
    contactBadge: 'தலைவர் மன்ற உறுப்பினர் & MDRT ஆலோசகர்',
    phonePending: 'தொலைபேசி எண் ஆலோசனைக்கு தயார்',
    whatsappPending: 'வாட்ஸ்அப் தொடர்பு தயார்',
    contactPendingBadge: 'விசாரணைக்கு தொடர்புகொள்ளலாம்',
  },
};

// Direct WhatsApp prefilled message templates
export const WHATSAPP_MESSAGES = {
  en: {
    insurance: 'Hello M. Mohan Rao, I would like to enquire about LIC life insurance policies.',
    consultation: 'Hello M. Mohan Rao, I would like to book a life insurance consultation.',
    servicing: 'Hello M. Mohan Rao, I need assistance with an existing LIC policy.',
    general: 'Hello M. Mohan Rao, I am contacting you through your insurance advisor website.',
  },
  ta: {
    insurance: 'வணக்கம் திரு. எம். மோகன் ராவ், எல்.ஐ.சி ஆயுள் காப்பீட்டு பாலிசிகள் குறித்து ஆலோசனை பெற விரும்புகிறேன்.',
    consultation: 'வணக்கம் திரு. எம். மோகன் ராவ், ஆயுள் காப்பீட்டு ஆலோசனை பெற விரும்புகிறேன்.',
    servicing: 'வணக்கம் திரு. எம். மோகன் ராவ், எனது எல்.ஐ.சி பாலிசி சேவைக்கு உதவி தேவைப்படுகிறது.',
    general: 'வணக்கம் திரு. எம். மோகன் ராவ், உங்கள் இணையதளம் மூலம் தொடர்பு கொள்கிறேன்.',
  },
};

// Preserved working Formspree submission endpoint
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/myewzlkj";

// Core LIC Life Insurance Portfolio & Guidance Services
export const LIC_SERVICE_PORTFOLIO = [
  {
    id: 'term-assurance',
    icon: 'Shield',
    title: {
      en: 'Term Life Insurance',
      ta: 'டேர்ம் ஆயுள் காப்பீடு',
    },
    description: {
      en: 'High financial protection at affordable premiums to secure your family against life uncertainties.',
      ta: 'குடும்பத்தின் எதிர்கால நிதிப் பாதுகாப்பை உறுதி செய்வதற்கான குறைந்த பிரீமியத்திலான ஆயுள் காப்பீட்டு பாதுகாப்பு.',
    },
    features: {
      en: ['Pure life risk cover', 'High sum assured options', 'Financial security for dependents'],
      ta: ['முழுமையான ஆயுள் பாதுகாப்பு', 'அதிக காப்பீட்டுத் தொகை தேர்வுகள்', 'குடும்பத்தினருக்கு நிதிப் பாதுகாப்பு'],
    },
  },
  {
    id: 'endowment-savings',
    icon: 'PiggyBank',
    title: {
      en: 'Endowment & Savings Plans',
      ta: 'சேமிப்பு மற்றும் முதலீட்டுத் திட்டங்கள்',
    },
    description: {
      en: 'Combine disciplined savings with life insurance protection to build a secure financial foundation.',
      ta: 'ஆயுள் காப்பீட்டுப் பாதுகாப்புடன் ஒழுங்கமைக்கப்பட்ட சேமிப்பை வழங்கி எதிர்கால நிதியை உருவாக்கும் திட்டங்கள்.',
    },
    features: {
      en: ['Life cover with maturity benefits', 'Disciplined long-term savings', 'Tax planning benefits under IT laws'],
      ta: ['முதிர்வுப் பலனுடன் ஆயுள் பாதுகாப்பு', 'ஒழுங்கான நீண்டகால சேமிப்பு', 'வருமான வரிச் சட்டத்தின் கீழ் வரிச் சலுகை'],
    },
  },
  {
    id: 'children-education',
    icon: 'GraduationCap',
    title: {
      en: 'Children Education & Future Planning',
      ta: 'குழந்தைகள் கல்வி மற்றும் எதிர்காலத் திட்டங்கள்',
    },
    description: {
      en: 'Plan ahead for your children’s higher education and vital milestones with assured milestone funds.',
      ta: 'குழந்தைகளின் உயர்கல்வி மற்றும் முக்கிய எதிர்காலத் தேவைகளுக்கு உறுதியான நிதிப் பாதுகாப்பை அமைக்கும் திட்டங்கள்.',
    },
    features: {
      en: ['Education milestone funds', 'Premium waiver benefits on parent’s demise', 'Secured bright future for children'],
      ta: ['கல்வி நிதி பலன்கள்', 'பெற்றோர் இல்லாத சூழ்நிலையிலும் தொடரும் பாதுகாப்பு', 'குழந்தைகளுக்கு பாதுகாப்பான எதிர்காலம்'],
    },
  },
  {
    id: 'retirement-pension',
    icon: 'Clock',
    title: {
      en: 'Retirement & Pension Plans',
      ta: 'ஓய்வூதியத் திட்டங்கள்',
    },
    description: {
      en: 'Ensure steady, reliable lifelong income after retirement with guaranteed pension options.',
      ta: 'பணி ஓய்வுக்குப் பின் வாழ்நாள் முழுவதும் மாதாந்திர ஓய்வூதியத்தை வழங்கும் நம்பகமான ஓய்வூதியத் திட்டங்கள்.',
    },
    features: {
      en: ['Guaranteed lifelong annuity options', 'Immediate or deferred annuity', 'Financial independence in retirement'],
      ta: ['வாழ்நாள் முழுவதும் உறுதியான வருமானம்', 'உடனடி அல்லது எதிர்கால ஓய்வூதியம்', 'சுயசார்பான ஓய்வுக்கால வாழ்க்கை'],
    },
  },
  {
    id: 'money-back',
    icon: 'RefreshCw',
    title: {
      en: 'Money Back & Milestone Plans',
      ta: 'மணி பேக் திட்டங்கள்',
    },
    description: {
      en: 'Receive periodic liquidity returns at specified intervals along with full life cover protection throughout.',
      ta: 'குறிப்பிட்ட கால இடைவெளிகளில் பண பலன்களும் முழு ஆயுள் பாதுகாப்பும் ஒருங்கிணைந்த திட்டங்கள்.',
    },
    features: {
      en: ['Periodic payouts during policy term', 'Continuous life risk cover', 'Lump sum maturity return'],
      ta: ['குறிப்பிட்ட காலங்களில் பண பலன்கள்', 'தொடர்ச்சியான ஆயுள் பாதுகாப்பு', 'முதிர்வின் போது மொத்தத் தொகை'],
    },
  },
  {
    id: 'policyholder-servicing',
    icon: 'FileText',
    title: {
      en: 'Policy Servicing & Claims Assistance',
      ta: 'பாலிசி சேவை & க்ளெய்ம் உதவி',
    },
    description: {
      en: 'End-to-end guidance for renewals, official portal payments, revivals, address updates, and claims documentation.',
      ta: 'பாலிசி புதுப்பித்தல், அதிகாரப்பூர்வ ஆன்லைன் கட்டணம், முகவரி மாற்றம், மற்றும் க்ளெய்ம் ஆவணங்களுக்கான முழுமையான வழிகாட்டல்.',
    },
    features: {
      en: ['Official portal premium payment guidance', 'Death and maturity claim documentation', 'Nominee and address modification support'],
      ta: ['அதிகாரப்பூர்வ ஆன்லைன் பிரீமியம் கட்டண வழிகாட்டல்', 'முதிர்வு மற்றும் இறப்பு க்ளெய்ம் ஆவண உதவி', 'வாரிசுதாரர் மற்றும் முகவரி புதுப்பித்தல்'],
    },
  },
];

// Factual and compliant insurance disclosure - intermediary and agency representation
export const REGULATORY_DISCLAIMER = {
  en: 'M. Mohan Rao is an authorized Life Insurance Corporation of India (LIC) Agent and Financial Advisor (Agency Code: 0195676N). This website is an independent financial advisor platform operated to provide policy information, guidance, and policyholder servicing. This website is not an official corporate website of the Life Insurance Corporation of India. All life insurance policies, terms, conditions, benefits, and claims are underwritten, approved, and settled exclusively by the Life Insurance Corporation of India in accordance with its regulatory rules and guidelines.',
  ta: 'எம். மோகன் ராவ் அவர்கள் ஆயுள் காப்பீட்டுக் கழகத்தின் (LIC) அங்கீகரிக்கப்பட்ட முகவர் மற்றும் நிதி ஆலோசகர் ஆவார் (முகவர் குறியீடு: 0195676N). இந்த இணையதளம் வாடிக்கையாளர்களுக்கு பாலிசி வழிகாட்டல், தகவல் மற்றும் சேவைகளை வழங்குவதற்காக இயங்கும் ஒரு சுயாதீன நிதி ஆலோசகர் தளமாகும். இது இந்திய ஆயுள் காப்பீட்டுக் கழகத்தின் (LIC) அதிகாரப்பூர்வ பெருநிறுவன இணையதளம் அல்ல. அனைத்து ஆயுள் காப்பீட்டு பாலிசிகளும், விதிமுறைகளும், பலன்களும், க்ளெய்ம்களும் இந்திய ஆயுள் காப்பீட்டுக் கழகத்தினால் (LIC) மட்டுமே நேரடியாகப் பரிசீலிக்கப்பட்டு வழங்கப்படுகின்றன.',
};
