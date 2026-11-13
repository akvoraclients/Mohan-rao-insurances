import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SupportedLanguage } from '@/types';
import { getDictionary } from '@/lib/dictionary';
import { generateSeoMetadata } from '@/lib/seo';
import {
  BUSINESS_INFO,
  REGULATORY_DISCLAIMER,
  LIC_SERVICE_PORTFOLIO,
  GOOGLE_MAPS_OFFICE_URL,
  WHATSAPP_MESSAGES,
} from '@/lib/constants';
import { Container } from '@/components/common/Container';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Button } from '@/components/common/Button';
import { OwnerProfile } from '@/components/common/OwnerProfile';
import { InsuranceEnquiryForm } from '@/components/forms/InsuranceEnquiryForm';
import { AwardsGallery } from '@/components/common/AwardsGallery';
import { InsuranceCompaniesSection } from '@/components/common/InsuranceCompaniesSection';
import { JsonLd } from '@/components/common/JsonLd';
import {
  Shield,
  ShieldCheck,
  Award,
  Phone,
  MessageCircle,
  MapPin,
  CheckCircle2,
  HelpCircle,
  FileText,
  UserCheck,
  Check,
  ExternalLink,
  Info,
  Clock,
  PiggyBank,
  GraduationCap,
  RefreshCw,
  Building2,
  HeartPulse,
  Car,
} from 'lucide-react';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const resolved = await params;
  const lang: SupportedLanguage = resolved.lang === 'ta' ? 'ta' : 'en';
  return generateSeoMetadata(lang);
}

export default async function HomePage({ params }: PageProps) {
  const resolvedParams = await params;
  const lang: SupportedLanguage = resolvedParams.lang === 'ta' ? 'ta' : 'en';
  const isTa = lang === 'ta';
  const dict = getDictionary(lang);
  const home = dict.home || {};

  const whatsappMessage = encodeURIComponent(
    WHATSAPP_MESSAGES[lang]?.insurance ||
      (isTa
        ? 'வணக்கம் திரு. எம். மோகன் ராவ், ஆயுள், மருத்துவ மற்றும் பொதுக் காப்பீடுகள் குறித்து ஆலோசனை பெற விரும்புகிறேன்.'
        : 'Hello M. Mohan Rao, I would like to enquire about life, health, and general insurance options.')
  );
  const whatsappUrl = `https://wa.me/919443564017?text=${whatsappMessage}`;

  return (
    <div className="flex flex-col gap-10 md:gap-14 pb-12 md:pb-16">
      {/* Structured Data: Local Business, Person, WebSite & FAQ JSON-LD */}
      <JsonLd lang={lang} pageType="home" includeFaq={true} />

      {/* =========================================================================
          SECTION 1: HERO SECTION – RESPONSIVE OWNER & MULTI-INSURANCE PRESENTATION
          M. Mohan Rao – Insurance Advisor in Hosur
          (LIC Code, Chairman's Club, and MDRT strictly removed from hero)
          ========================================================================= */}
      <section className="relative overflow-hidden py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-brand-navy-50/80 via-white to-amber-50/20 border-b border-slate-200">
        <Container>
          {/* -------------------------------------------------------------
              A. MOBILE LAYOUT (< lg screens)
              Required Mobile Order:
              1. Large owner photograph first at the top
              2. Owner name: M. Mohan Rao
              3. Designation: Insurance Advisor
              4. Insurance companies / categories badges
              5. Headline & Short introduction
              6. Contact Advisor and WhatsApp Now buttons
              ------------------------------------------------------------- */}
          <div className="flex flex-col items-center text-center lg:hidden">
            {/* 1. Large owner photograph first */}
            <div className="relative w-full max-w-[320px] sm:max-w-sm aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-2 border-amber-400 bg-brand-navy-900 mb-5">
              <Image
                src="/images/owner.jpeg"
                alt={isTa ? 'எம். மோகன் ராவ் – காப்பீட்டு ஆலோசகர் ஓசூர்' : 'M. Mohan Rao – Insurance Advisor in Hosur'}
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, 384px"
              />
            </div>

            {/* 2. Owner name */}
            <h1 className="text-2xl sm:text-3xl font-black text-brand-navy tracking-tight">
              {BUSINESS_INFO.name}
            </h1>

            {/* 3. Professional Designation */}
            <p className="text-sm sm:text-base font-bold text-amber-700 mt-1">
              {isTa ? 'காப்பீட்டு ஆலோசகர்' : 'Insurance Advisor'}
            </p>

            {/* 4. Three Insurance Companies / Multi-Insurance Badges */}
            <div className="flex flex-wrap items-center justify-center gap-1.5 mt-2.5 text-xs">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-900 font-bold">
                Life (LIC)
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 font-bold">
                Health (Star Health)
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 font-bold">
                General (United India)
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700 font-medium">
                <MapPin className="w-3.5 h-3.5 text-amber-600" aria-hidden="true" />
                <span>Hosur, Tamil Nadu</span>
              </span>
            </div>

            {/* 5. Short Introduction */}
            <div className="my-5 max-w-xl">
              <h2 className="text-lg sm:text-xl font-extrabold text-brand-navy tracking-tight mb-2 leading-snug">
                {isTa
                  ? 'ஓசூரில் உங்கள் நம்பிக்கைக்குரிய காப்பீட்டு ஆலோசகர்'
                  : 'Your Trusted Insurance Advisor in Hosur'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {isTa
                  ? 'திரு. எம். மோகன் ராவ் அவர்களிடமிருந்து ஆயுள் காப்பீடு, மருத்துவக் காப்பீடு மற்றும் பொதுக் காப்பீடுகளுக்கான தொழில்முறை வழிகாட்டலைப் பெறுங்கள். எல்.ஐ.சி, ஸ்டார் ஹெல்த் மற்றும் யுனைடெட் இந்தியா இன்சூரன்ஸ் நிறுவனங்களின் காப்பீட்டுத் தேர்வுகளை ஆராயுங்கள்.'
                  : 'Get guidance for life insurance, health insurance and general insurance from M. Mohan Rao. Explore insurance options from LIC, Star Health and United India Insurance.'}
              </p>
            </div>

            {/* 6. Contact Advisor and WhatsApp buttons */}
            <div className="w-full max-w-md flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3">
              <Button
                href={`/${lang}/contact`}
                variant="primary"
                size="md"
                icon={<Phone className="w-4 h-4 text-amber-300 shrink-0" aria-hidden="true" />}
                className="w-full sm:w-auto whitespace-nowrap shrink-0"
              >
                {isTa ? 'ஆலோசகரை தொடர்பு கொள்ள' : 'Contact Advisor'}
              </Button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm bg-emerald-600 text-white hover:bg-emerald-700 shadow-xs transition-colors whitespace-nowrap shrink-0 min-h-[44px]"
              >
                <MessageCircle className="w-4 h-4 text-white shrink-0" aria-hidden="true" />
                <span className="whitespace-nowrap">{isTa ? 'வாட்ஸ்அப்பில் பேச' : 'WhatsApp Now'}</span>
              </a>

              <Button
                href={`/${lang}/insurance`}
                variant="outline"
                size="md"
                className="w-full sm:w-auto whitespace-nowrap shrink-0"
              >
                {isTa ? 'காப்பீட்டு சேவைகள்' : 'Explore Insurance'}
              </Button>
            </div>

            <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-slate-600 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
              <span>
                {isTa
                  ? 'ஆயுள் • மருத்துவம் • பொதுக் காப்பீடு • நேரடி வழிகாட்டல் • ஓசூர்'
                  : 'Life, Health & General Insurance Guidance • Direct Support in Hosur'}
              </span>
            </div>
          </div>

          {/* -------------------------------------------------------------
              B. DESKTOP LAYOUT (lg screens and above)
              - Left: Content, headlines, 3 partner logos, buttons (~54% width)
              - Right: Prominent photograph of M. Mohan Rao (~46% width)
              ------------------------------------------------------------- */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Headlines, Partner Badges, Actions (col-span-7) */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Multi-Insurance Badge */}
              <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-xs font-bold text-brand-navy mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                <span className="text-brand-navy">
                  {isTa ? 'காப்பீட்டு ஆலோசகர் • ஓசூர்' : 'Insurance Advisor in Hosur'}
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-amber-800">
                  {isTa ? 'ஆயுள் • மருத்துவம் • பொதுக் காப்பீடு' : 'Life • Health • General Insurance'}
                </span>
              </div>

              {/* Main Hero Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-[1.15] mb-4">
                {isTa
                  ? 'ஓசூரில் உங்கள் நம்பிக்கைக்குரிய காப்பீட்டு ஆலோசகர்'
                  : 'Your Trusted Insurance Advisor in Hosur'}
              </h1>

              {/* Supporting Description */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed font-normal mb-6 max-w-2xl">
                {isTa
                  ? 'திரு. எம். மோகன் ராவ் அவர்களிடமிருந்து ஆயுள் காப்பீடு, மருத்துவக் காப்பீடு மற்றும் பொதுக் காப்பீடுகளுக்கான தொழில்முறை வழிகாட்டலைப் பெறுங்கள். எல்.ஐ.சி, ஸ்டார் ஹெல்த் மற்றும் யுனைடெட் இந்தியா இன்சூரன்ஸ் நிறுவனங்களின் காப்பீட்டுத் தேர்வுகளை ஆராயுங்கள்.'
                  : 'Get guidance for life insurance, health insurance and general insurance from M. Mohan Rao. Explore insurance options from LIC, Star Health and United India Insurance.'}
              </p>

              {/* Three Insurance Companies Partner Strip with Real Logos */}
              <div className="w-full p-4 rounded-2xl bg-white border border-slate-200 shadow-xs mb-6">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  {isTa ? 'காப்பீட்டு நிறுவனங்கள் & சேவைகள்' : 'Insurance Providers & Guidance Areas'}
                </div>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/90 flex flex-col items-center text-center">
                    <div className="relative w-full h-8 mb-1.5">
                      <Image
                        src="/images/lic-logo.svg"
                        alt="Life Insurance Corporation of India (LIC)"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-[11px] font-bold text-brand-navy">Life Insurance</span>
                    <span className="text-[10px] text-slate-500 font-medium">LIC of India</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/90 flex flex-col items-center text-center">
                    <div className="relative w-full h-8 mb-1.5">
                      <Image
                        src="/images/star-health-logo.svg"
                        alt="Star Health and Allied Insurance"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-[11px] font-bold text-brand-navy">Health Insurance</span>
                    <span className="text-[10px] text-slate-500 font-medium">Star Health</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/90 flex flex-col items-center text-center">
                    <div className="relative w-full h-8 mb-1.5">
                      <Image
                        src="/images/united-india-logo.svg"
                        alt="United India Insurance Company Limited"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="text-[11px] font-bold text-brand-navy">General Insurance</span>
                    <span className="text-[10px] text-slate-500 font-medium">United India</span>
                  </div>
                </div>
              </div>

              {/* Hero Calls to Action */}
              <div className="w-full flex flex-wrap items-center gap-3">
                <Button
                  href={`/${lang}/contact`}
                  variant="primary"
                  size="lg"
                  icon={<Phone className="w-4 h-4 text-amber-300 shrink-0" aria-hidden="true" />}
                  className="sm:w-auto whitespace-nowrap shrink-0"
                >
                  {isTa ? 'ஆலோசகரை தொடர்பு கொள்ள' : 'Contact Advisor'}
                </Button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-emerald-600 text-white hover:bg-emerald-700 shadow-xs transition-colors whitespace-nowrap shrink-0 min-h-[48px]"
                >
                  <MessageCircle className="w-4 h-4 text-white shrink-0" aria-hidden="true" />
                  <span className="whitespace-nowrap">{isTa ? 'வாட்ஸ்அப்பில் பேச' : 'WhatsApp Now'}</span>
                </a>

                <Button
                  href={`/${lang}/insurance`}
                  variant="outline"
                  size="lg"
                  className="sm:w-auto whitespace-nowrap shrink-0"
                >
                  {isTa ? 'காப்பீட்டு சேவைகள்' : 'Explore Insurance'}
                </Button>
              </div>

              {/* Factual Trust Indicators */}
              <div className="mt-5 flex items-center gap-2 text-xs text-slate-600 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
                <span>
                  {isTa
                    ? 'ஆயுள், மருத்துவம் & பொதுக் காப்பீடு • நேரடி வழிகாட்டல் • ஓசூர்'
                    : 'Independent Insurance Advisor in Hosur • Direct Personal Support'}
                </span>
              </div>
            </div>

            {/* Right Column: Prominent Owner Photograph (~46% of hero width) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-400 bg-brand-navy-900 group">
                <Image
                  src="/images/owner.jpeg"
                  alt={isTa ? 'எம். மோகன் ராவ் – காப்பீட்டு ஆலோசகர் ஓசூர்' : 'M. Mohan Rao – Insurance Advisor in Hosur'}
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 1280px) 45vw, 540px"
                />

                {/* Overlaid Sleek Identity Tag */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-navy-950/95 via-brand-navy-950/70 to-transparent p-5 pt-10 text-white">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-black text-white">{BUSINESS_INFO.name}</h3>
                      <p className="text-xs font-semibold text-amber-300">
                        {isTa ? 'காப்பீட்டு ஆலோசகர் • ஓசூர்' : 'Insurance Advisor in Hosur'}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/15 text-slate-200 border border-white/20 text-xs font-semibold shrink-0">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
                      <span>Hosur, Tamil Nadu</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 2: DEDICATED INSURANCE COMPANIES WE WORK WITH
          LIC (Life) • Star Health (Health) • United India (General)
          ========================================================================= */}
      <Container>
        <InsuranceCompaniesSection lang={lang} />
      </Container>

      {/* =========================================================================
          SECTION 3: AWARDS & ACHIEVEMENTS – PREVIEW GALLERY WITH LINK TO FULL PAGE
          Interactive Lightbox, Keyboard/Touch Navigation & Milestone Portfolio
          ========================================================================= */}
      <Container>
        <AwardsGallery lang={lang} mode="preview" />
      </Container>

      {/* =========================================================================
          SECTION 4: ABOUT THE ADVISOR
          ========================================================================= */}
      <section className="relative">
        <Container size="narrow">
          <SectionHeader
            title={home?.aboutOwner?.title || (isTa ? 'எம். மோகன் ராவ் – காப்பீட்டு ஆலோசகர்' : 'About M. Mohan Rao')}
            subtitle={
              home?.aboutOwner?.subtitle ||
              (isTa
                ? 'நேர்மையான வழிகாட்டல் மற்றும் வாடிக்கையாளர் நலன் சார்ந்த அணுகுமுறை.'
                : 'Dedicated to helping families and businesses choose suitable insurance with complete clarity.')
            }
            badge={home?.aboutOwner?.badge || (isTa ? 'ஆலோசகர் பற்றி' : 'About the Advisor')}
            theme="navy"
            align="center"
          />

          <OwnerProfile lang={lang} variant="card" showBio={true} />
        </Container>
      </section>

      {/* =========================================================================
          SECTION 5: WHY CONSULT AN ADVISOR
          ========================================================================= */}
      <section className="relative">
        <Container>
          <SectionHeader
            title={home?.whyUs?.title || (isTa ? 'எங்கள் ஆலோசனையை நீங்கள் ஏன் தேர்ந்தெடுக்க வேண்டும்?' : 'Why Consult M. Mohan Rao?')}
            subtitle={
              home?.whyUs?.subtitle ||
              (isTa
                ? 'நேரடி பொறுப்புடைமை, பல நிறுவன தீர்வுகள் மற்றும் வாடிக்கையாளர் நலன் சார்ந்த அணுகுமுறை.'
                : 'Direct personal accountability, multi-company access, and ethical insurance guidance.')
            }
            badge={home?.whyUs?.badge || (isTa ? 'நம்பகத்தன்மை' : 'Why Consult an Advisor')}
            theme="navy"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-start">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-blue-700" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-brand-navy mb-2">
                {isTa ? 'முழுமையான காப்பீட்டு தீர்வுகள்' : 'Comprehensive Portfolio'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {isTa
                  ? 'ஆயுள் காப்பீடு (LIC), மருத்துவக் காப்பீடு (Star Health), மற்றும் பொதுக் காப்பீடு (United India) அனைத்தும் ஒரே இடத்தில்.'
                  : 'Life (LIC), Health (Star Health), and General Insurance (United India) solutions all under one roof.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-start">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center mb-4">
                <UserCheck className="w-6 h-6 text-amber-600" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-brand-navy mb-2">
                {isTa ? 'நேரடி தனிநபர் வழிகாட்டல்' : 'Direct Personal Advice'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {isTa
                  ? 'கால் சென்டர்கள் அல்லது மூன்றாம் தரப்பு போட்களின் தலையீடின்றி நேரடியாக திரு. எம். மோகன் ராவ் அவர்களிடம் ஆலோசனை பெறலாம்.'
                  : 'Consult directly with M. Mohan Rao without dealing with call centers, sales bots, or third-party aggregators.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-start">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-brand-navy mb-2">
                {isTa ? 'அதிகாரப்பூர்வ பரிசீலனை' : 'Official Portal Processing'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {isTa
                  ? 'நிறுவனங்களின் அதிகாரப்பூர்வ அமைப்புகள் மூலமாக மட்டுமே விண்ணப்பங்கள் சமர்ப்பிக்கப்பட்டு ரசீதுகள் வழங்கப்படுகின்றன.'
                  : 'Proposals and premium payments are processed securely through verified insurer portal channels.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-start">
              <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-teal-700" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-brand-navy mb-2">
                {isTa ? 'க்ளெய்ம் & புதுப்பித்தல் உதவி' : 'End-to-End Claim Support'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {isTa
                  ? 'பாலிசி புதுப்பித்தல் நினைவூட்டல் முதல் மருத்துவ மற்றும் விபத்து க்ளெய்ம் ஆவண ஆதரவு வரை முழுமையான துணை.'
                  : 'Active guidance for policy renewals, cashless medical coordination, and claim documentation assistance.'}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 6: CONSULTATION ENQUIRY FORM & OFFICE LOCATION
          ========================================================================= */}
      <section className="relative" id="enquiry">
        <Container size="narrow">
          <SectionHeader
            title={home?.cta?.title || (isTa ? 'காப்பீட்டு ஆலோசனை பெற' : 'Request an Insurance Consultation')}
            subtitle={
              home?.cta?.desc ||
              (isTa
                ? 'உங்கள் தகவல்களை உள்ளிடவும். திரு. எம். மோகன் ராவ் அவர்கள் தங்களை நேரடியாக தொடர்புகொள்வார்.'
                : 'Send your requirements to M. Mohan Rao for personalized life, health, or general insurance advice.')
            }
            badge={home?.cta?.badge || (isTa ? 'தொடர்புகொள்ள' : 'Get in Touch')}
            theme="navy"
            align="center"
          />

          <InsuranceEnquiryForm lang={lang} />
        </Container>
      </section>

      {/* Regulatory Disclosure at page bottom */}
      <section className="relative">
        <Container>
          <div className="p-4 sm:p-5 rounded-2xl bg-brand-light border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
            <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
            <p className="leading-relaxed">
              {REGULATORY_DISCLAIMER[lang]}
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
