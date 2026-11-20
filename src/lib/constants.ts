import { BusinessDetails } from '@/types';

/**
 * CLIENT BUSINESS INFORMATION: M. MOHAN RAO
 * Insurance Advisor – Life, Health & General Insurance
 * Operating in Hosur, Tamil Nadu, India
 */
export const BUSINESS_INFO: BusinessDetails = {
  name: 'M. Mohan Rao',
  owner: 'M. Mohan Rao',
  organization: 'Insurance Advisory Services (LIC • Star Health • United India Insurance)',
  designation: 'Insurance Advisor',
  agencyCode: '0195676N', // LIC Agency Code
  recognitions: ["LIC Chairman's Club Member for Agents", 'MDRT Member (LIC)'],
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

// Verified Google Maps direct location link for Mohan Rao Insurances
export const GOOGLE_MAPS_OFFICE_URL = 'https://maps.app.goo.gl/jsiJ2GTVSMMzJHyC7';

// Official Google Maps responsive embed URL for Mohan Rao Insurances
export const GOOGLE_MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d403.3454036005731!2d77.81729273902376!3d12.707207959756683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae7150bef71931%3A0x2fcd5b4465badbda!2smohan%20rao%20insurances!5e1!3m2!1sen!2sin!4v1795194554691!5m2!1sen!2sin';

export const BRAND_TAGLINE = {
  en: 'Insurance Advisor – Life, Health & General Insurance Guidance in Hosur',
  ta: 'காப்பீட்டு ஆலோசகர் – ஆயுள், மருத்துவ & பொதுக் காப்பீட்டு வழிகாட்டல், ஓசூர்',
};

export const CONTACT_STATUS_MESSAGES = {
  en: {
    phoneNotice: 'Direct call assistance available Mon – Sat',
    whatsappNotice: 'Chat on WhatsApp for instant guidance',
    emailNotice: 'Send your enquiry directly via email',
    addressNotice: 'Visit our office on Bye-Pass Road, Hosur',
    contactNotice: 'Contact M. Mohan Rao directly for personalized life, health, and general insurance guidance and policy servicing.',
    contactBadge: 'Insurance Advisor • Hosur',
    phonePending: 'Phone number available for enquiries',
    whatsappPending: 'WhatsApp contact available',
    contactPendingBadge: 'Available for Enquiries',
  },
  ta: {
    phoneNotice: 'திங்கள் - சனி நேரடி தொலைபேசி சேவை',
    whatsappNotice: 'உடனடி வழிகாட்டலுக்கு வாட்ஸ்அப்பில் தொடர்பு கொள்ளவும்',
    emailNotice: 'மின்னஞ்சல் மூலம் உங்கள் கேள்விகளை அனுப்பவும்',
    addressNotice: 'எங்கள் அலுவலக முகவரி: பை-பாஸ் ரோடு, ஓசூர்',
    contactNotice: 'ஆயுள், மருத்துவ மற்றும் பொதுக் காப்பீட்டு வழிகாட்டல் மற்றும் பாலிசி சேவைகளுக்கு திரு. எம். மோகன் ராவ் அவர்களை நேரடியாகத் தொடர்பு கொள்ளவும்.',
    contactBadge: 'காப்பீட்டு ஆலோசகர் • ஓசூர்',
    phonePending: 'தொலைபேசி எண் ஆலோசனைக்கு தயார்',
    whatsappPending: 'வாட்ஸ்அப் தொடர்பு தயார்',
    contactPendingBadge: 'விசாரணைக்கு தொடர்புகொள்ளலாம்',
  },
};

// Direct WhatsApp prefilled message templates
export const WHATSAPP_MESSAGES = {
  en: {
    general: 'Hello M. Mohan Rao, I am contacting you through your insurance advisor website for guidance.',
    insurance: 'Hello M. Mohan Rao, I would like to enquire about life, health, and general insurance options.',
    lic: 'Hello M. Mohan Rao, I would like to enquire about LIC Life Insurance policies.',
    starHealth: 'Hello M. Mohan Rao, I would like to enquire about Star Health Insurance plans.',
    unitedIndia: 'Hello M. Mohan Rao, I would like to enquire about United India General Insurance policies.',
    consultation: 'Hello M. Mohan Rao, I would like to schedule an insurance consultation with you.',
    servicing: 'Hello M. Mohan Rao, I need assistance with an existing insurance policy.',
  },
  ta: {
    general: 'வணக்கம் திரு. எம். மோகன் ராவ், உங்கள் இணையதளம் மூலம் காப்பீட்டு ஆலோசனை பெற தொடர்பு கொள்கிறேன்.',
    insurance: 'வணக்கம் திரு. எம். மோகன் ராவ், ஆயுள், மருத்துவ மற்றும் பொதுக் காப்பீடுகள் குறித்து ஆலோசனை பெற விரும்புகிறேன்.',
    lic: 'வணக்கம் திரு. எம். மோகன் ராவ், எல்.ஐ.சி ஆயுள் காப்பீட்டு பாலிசிகள் குறித்து ஆலோசனை பெற விரும்புகிறேன்.',
    starHealth: 'வணக்கம் திரு. எம். மோகன் ராவ், ஸ்டார் ஹெல்த் மருத்துவக் காப்பீட்டுத் திட்டங்கள் குறித்து ஆலோசனை பெற விரும்புகிறேன்.',
    unitedIndia: 'வணக்கம் திரு. எம். மோகன் ராவ், யுனைடெட் இந்தியா பொதுக் காப்பீட்டு பாலிசிகள் குறித்து ஆலோசனை பெற விரும்புகிறேன்.',
    consultation: 'வணக்கம் திரு. எம். மோகன் ராவ், காப்பீட்டு ஆலோசனை பெற விரும்புகிறேன்.',
    servicing: 'வணக்கம் திரு. எம். மோகன் ராவ், எனது காப்பீட்டு பாலிசி சேவைக்கு உதவி தேவைப்படுகிறது.',
  },
};

// Preserved working Formspree submission endpoint
export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/myewzlkj';

export interface InsuranceCompanyPartner {
  id: 'lic' | 'star-health' | 'united-india';
  name: string;
  shortName: string;
  category: {
    en: string;
    ta: string;
  };
  logo: string;
  badge: {
    en: string;
    ta: string;
  };
  tagline: {
    en: string;
    ta: string;
  };
  description: {
    en: string;
    ta: string;
  };
  highlights: {
    en: string[];
    ta: string[];
  };
  whatsappKey: 'lic' | 'starHealth' | 'unitedIndia';
}

// 3 Core Verified Insurance Companies We Work With
export const INSURANCE_COMPANIES: InsuranceCompanyPartner[] = [
  {
    id: 'lic',
    name: 'Life Insurance Corporation of India (LIC)',
    shortName: 'LIC of India',
    category: {
      en: 'Life Insurance',
      ta: 'ஆயுள் காப்பீடு',
    },
    logo: '/images/lic-logo.svg',
    badge: {
      en: 'Life & Savings Protection',
      ta: 'ஆயுள் & சேமிப்புப் பாதுகாப்பு',
    },
    tagline: {
      en: 'India’s Premier Life Insurer',
      ta: 'இந்தியாவின் முன்னணி ஆயுள் காப்பீட்டு நிறுவனம்',
    },
    description: {
      en: 'Comprehensive life insurance guidance including family pure-risk term plans, endowment savings, children’s higher education funds, retirement pensions, and policyholder servicing.',
      ta: 'குடும்பத்திற்கான முழுமையான டேர்ம் ஆயுள் பாதுகாப்பு, முதலீட்டு சேமிப்புத் திட்டங்கள், குழந்தைகள் கல்வி நிதி, பணி ஓய்வூதியம் மற்றும் பாலிசிதாரர் சேவை வழிகாட்டல்.',
    },
    highlights: {
      en: [
        'Pure risk term insurance for family breadwinners',
        'Guaranteed endowment and savings milestone plans',
        'Children’s higher education and future security',
        'Lifelong guaranteed pension annuities',
        'Official online portal premium payment assistance',
        'Claim documentation support for maturity and death claims',
      ],
      ta: [
        'குடும்பப் பாதுகாப்பிற்கான டேர்ம் ஆயுள் காப்பீடு',
        'உறுதியான சேமிப்பு மற்றும் நிதி முதலீட்டுத் திட்டங்கள்',
        'குழந்தைகளின் உயர்கல்வி மற்றும் எதிர்கால நிதித் திட்டங்கள்',
        'வாழ்நாள் முழுவதும் உறுதியான மாதாந்திர ஓய்வூதியம்',
        'அதிகாரப்பூர்வ ஆன்லைன் பிரீமியம் கட்டண உதவி',
        'முதிர்வு மற்றும் இறப்பு க்ளெய்ம் ஆவண ஆதரவு',
      ],
    },
    whatsappKey: 'lic',
  },
  {
    id: 'star-health',
    name: 'Star Health and Allied Insurance Company Limited',
    shortName: 'Star Health Insurance',
    category: {
      en: 'Health Insurance',
      ta: 'மருத்துவக் காப்பீடு',
    },
    logo: '/images/star-health-logo.svg',
    badge: {
      en: 'Health Insurance Specialist',
      ta: 'மருத்துவக் காப்பீட்டு நிபுணர்',
    },
    tagline: {
      en: 'Dedicated Health & Medical Protection',
      ta: 'அர்ப்பணிப்புமிக்க மருத்துவக் காப்பீட்டுப் பாதுகாப்பு',
    },
    description: {
      en: 'Specialized individual and family floater health insurance policies, pre & post hospitalisation coverage, critical illness plans, senior citizen medical cover, and cashless hospitalisation support across Hosur networks.',
      ta: 'தனிநபர் மற்றும் குடும்ப மருத்துவக் காப்பீடு, தீவிர சிகிச்சை மற்றும் அறுவைசிகிச்சை பாதுகாப்பு, மூத்த குடிமக்கள் மருத்துவத் திட்டம் மற்றும் ஓசூரில் பணமில்லா மருத்துவமனை சிகிச்சை வழிகாட்டல்.',
    },
    highlights: {
      en: [
        'Individual and family floater medical insurance options',
        'Cashless hospital network guidance across Hosur hospitals',
        'Senior citizen comprehensive health coverage',
        'Critical illness protection and major surgery benefits',
        'Pre-hospitalisation and post-discharge expense guidance',
        'Hassle-free medical insurance claim guidance and coordination',
      ],
      ta: [
        'தனிநபர் மற்றும் குடும்ப மருத்துவக் காப்பீட்டுத் தேர்வுகள்',
        'ஓசூர் மருத்துவமனைகளில் பணமில்லா சிகிச்சை வழிகாட்டல்',
        'மூத்த குடிமக்களுக்கான பிரத்யேக மருத்துவத் திட்டங்கள்',
        'தீவிர சிகிச்சை மற்றும் முக்கிய அறுவைசிகிச்சை நன்மைகள்',
        'மருத்துவமனை முந்தைய மற்றும் பிந்தைய செலவு வழிகாட்டல்',
        'எளிதான மருத்துவ க்ளெய்ம் ஆவண உதவி மற்றும் ஒருங்கிணைப்பு',
      ],
    },
    whatsappKey: 'starHealth',
  },
  {
    id: 'united-india',
    name: 'United India Insurance Company Limited',
    shortName: 'United India Insurance',
    category: {
      en: 'General Insurance',
      ta: 'பொதுக் காப்பீடு',
    },
    logo: '/images/united-india-logo.svg',
    badge: {
      en: 'General & Non-Life Assets',
      ta: 'பொது & சொத்துப் பாதுகாப்பு',
    },
    tagline: {
      en: 'Trusted Public Sector General Insurer',
      ta: 'நம்பகமான பொதுத்துறை பொதுக் காப்பீட்டு நிறுவனம்',
    },
    description: {
      en: 'Essential general insurance consultation and non-life solutions safeguarding vehicles, two-wheelers, cars, commercial transport, business premises, shops, and personal assets.',
      ta: 'மோட்டார் வாகனங்கள், இருசக்கர வாகனங்கள், கார், வணிக போக்குவரத்து, வர்த்தக நிறுவனங்கள், கடைகள் மற்றும் தனிநபர் சொத்துப் பாதுகாப்பிற்கான முழுமையான பொதுக் காப்பீட்டு வழிகாட்டல்.',
    },
    highlights: {
      en: [
        'Two-wheeler, private car & commercial vehicle insurance',
        'Third-party liability and comprehensive vehicle policies',
        'Shop, godown, factory & commercial property insurance',
        'Home structure and household content protection',
        'Personal accident insurance for individuals and families',
        'Timely policy renewals and damage claim documentation support',
      ],
      ta: [
        'இருசக்கர வாகனம், கார் மற்றும் வணிக வாகனக் காப்பீடு',
        'தேர்ட்-பார்ட்டி மற்றும் முழுமையான மோட்டார் பாலிசிகள்',
        'கடை, குடோன், தொழிற்சாலை & வர்த்தக சொத்துக் காப்பீடு',
        'வீட்டு கட்டமைப்பு மற்றும் வீட்டு உபயோகப் பொருட்கள் பாதுகாப்பு',
        'தனிநபர் விபத்துக் காப்பீடு வழிகாட்டல்',
        'சரியான நேர பாலிசி புதுப்பித்தல் & விபத்து க்ளெய்ம் ஆவண உதவி',
      ],
    },
    whatsappKey: 'unitedIndia',
  },
];

// Preserved structured service items for detailed display & backwards compatibility
export const LIC_SERVICE_PORTFOLIO = [
  {
    id: 'term-assurance',
    icon: 'Shield',
    title: {
      en: 'Term Life Insurance (LIC)',
      ta: 'டேர்ம் ஆயுள் காப்பீடு (LIC)',
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
    id: 'health-insurance',
    icon: 'HeartPulse',
    title: {
      en: 'Health Insurance (Star Health)',
      ta: 'மருத்துவக் காப்பீடு (ஸ்டார் ஹெல்த்)',
    },
    description: {
      en: 'Comprehensive individual and family floater medical protection with cashless hospitalisation guidance.',
      ta: 'குடும்பத்தினர் அனைவருக்கும் மருத்துவ செலவுப் பாதுகாப்பை வழங்கும் பணமில்லா மருத்துவமனை சிகிச்சை திட்டங்கள்.',
    },
    features: {
      en: ['Cashless hospitalisation guidance', 'Family floater & senior citizen covers', 'Critical illness protection'],
      ta: ['பணமில்லா மருத்துவமனை சிகிச்சை', 'குடும்ப மற்றும் மூத்த குடிமக்கள் திட்டம்', 'தீவிர சிகிச்சை பாதுகாப்பு'],
    },
  },
  {
    id: 'general-insurance',
    icon: 'Car',
    title: {
      en: 'General Insurance (United India)',
      ta: 'பொதுக் காப்பீடு (யுனைடெட் இந்தியா)',
    },
    description: {
      en: 'Reliable general insurance solutions for two-wheelers, cars, commercial vehicles, property, and businesses.',
      ta: 'வாகனங்கள், இருசக்கர வாகனங்கள், வணிகம் மற்றும் சொத்துக்களுக்கான நம்பகமான பொதுக் காப்பீட்டுப் பாதுகாப்பு.',
    },
    features: {
      en: ['Motor & vehicle insurance', 'Shop & property coverage', 'Personal accident protection'],
      ta: ['மோட்டார் வாகனக் காப்பீடு', 'கடை மற்றும் சொத்துப் பாதுகாப்பு', 'தனிநபர் விபத்துக் காப்பீடு'],
    },
  },
  {
    id: 'endowment-savings',
    icon: 'PiggyBank',
    title: {
      en: 'Endowment & Savings Plans (LIC)',
      ta: 'சேமிப்பு மற்றும் முதலீட்டுத் திட்டங்கள் (LIC)',
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
      en: 'Children Education & Future Funds (LIC)',
      ta: 'குழந்தைகள் கல்வி மற்றும் எதிர்காலத் திட்டங்கள் (LIC)',
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
      en: 'Retirement & Pension Annuities (LIC)',
      ta: 'ஓய்வூதியத் திட்டங்கள் (LIC)',
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
];

// Compliant multi-insurance disclosure - intermediary and advisor representation
export const REGULATORY_DISCLAIMER = {
  en: 'M. Mohan Rao is an independent Insurance Advisor based in Hosur, Tamil Nadu, providing professional guidance and policy servicing across Life Insurance (Life Insurance Corporation of India - LIC Agency Code: 0195676N), Health Insurance (Star Health and Allied Insurance Company Limited), and General Insurance (United India Insurance Company Limited). This website is an independent advisor guidance portal and is not an official corporate website of LIC, Star Health, or United India Insurance. All insurance policies, coverage terms, benefits, underwriting, bonuses, and claims are issued, approved, and settled directly by the respective insurance corporations in accordance with IRDAI rules.',
  ta: 'திரு. எம். மோகன் ராவ் அவர்கள் தமிழ்நாட்டின் ஓசூரில் செயல்படும் ஒரு சுயாதீன காப்பீட்டு ஆலோசகர் ஆவார். இவர் ஆயுள் காப்பீடு (இந்திய ஆயுள் காப்பீட்டுக் கழகம் - LIC முகவர் குறியீடு: 0195676N), மருத்துவக் காப்பீடு (ஸ்டார் ஹெல்த் அண்ட் அலைட் இன்சூரன்ஸ் நிறுவனம்), மற்றும் பொதுக் காப்பீடு (யுனைடெட் இந்தியா இன்சூரன்ஸ் நிறுவனம்) ஆகியவற்றிற்கு தொழில்முறை வழிகாட்டல் மற்றும் பாலிசி சேவைகளை வழங்குகிறார். இந்த இணையதளம் ஒரு சுயாதீன ஆலோசகர் வழிகாட்டல் தளமாகும்; இது எல்.ஐ.சி, ஸ்டார் ஹெல்த் அல்லது யுனைடெட் இந்தியா இன்சூரன்ஸ் நிறுவனங்களின் அதிகாரப்பூர்வ பெருநிறுவன தளம் அல்ல. அனைத்து பாலிசிகளும், பலன்களும், நிபந்தனைகளும், க்ளெய்ம்களும் சம்பந்தப்பட்ட காப்பீட்டு நிறுவனங்களால் மட்டுமே நேரடியாக வழங்கப்படுகின்றன.',
};
