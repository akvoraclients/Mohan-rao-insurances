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
import { RecognitionGallery } from '@/components/common/RecognitionGallery';
import { ExperienceHighlight } from '@/components/common/ExperienceHighlight';
import { InsuranceEnquiryForm } from '@/components/forms/InsuranceEnquiryForm';
import { AwardsGallery } from '@/components/common/AwardsGallery';
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
  const insDict = dict.insurance || {};

  const whatsappMessage = encodeURIComponent(
    WHATSAPP_MESSAGES[lang]?.insurance ||
      (isTa
        ? 'வணக்கம் திரு. எம். மோகன் ராவ், எல்.ஐ.சி ஆயுள் காப்பீட்டு பாலிசிகள் குறித்து ஆலோசனை பெற விரும்புகிறேன்.'
        : 'Hello M. Mohan Rao, I would like to enquire about LIC life insurance policies.')
  );
  const whatsappUrl = `https://wa.me/919443564017?text=${whatsappMessage}`;

  return (
    <div className="flex flex-col gap-10 md:gap-14 pb-12 md:pb-16">
      {/* Structured Data: Local Business, Person, WebSite & FAQ JSON-LD */}
      <JsonLd lang={lang} pageType="home" includeFaq={true} />

      {/* =========================================================================
          SECTION 1: HERO SECTION – RESPONSIVE OWNER PRESENTATION
          M. Mohan Rao – LIC Financial Advisor in Hosur
          ========================================================================= */}
      <section className="relative overflow-hidden py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-brand-navy-50/80 via-white to-amber-50/20 border-b border-slate-200">
        <Container>
          {/* -------------------------------------------------------------
              A. MOBILE LAYOUT (< lg screens)
              Strict Required Mobile Order:
              1. Large owner photograph
              2. Owner name: M. Mohan Rao
              3. Designation: LIC Financial Advisor
              4. Agency Code: 0195676N
              5. Recognition badges (MDRT & Chairman's Club)
              6. Short introduction
              7. Contact Advisor and WhatsApp buttons
              ------------------------------------------------------------- */}
          <div className="flex flex-col items-center text-center lg:hidden">
            {/* 1. Large owner photograph */}
            <div className="relative w-full max-w-[320px] sm:max-w-sm aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-2 border-amber-400 bg-brand-navy-900 mb-5">
              <Image
                src="/images/owner.jpeg"
                alt="M. Mohan Rao – LIC Financial Advisor in Hosur"
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

            {/* 3. Designation */}
            <p className="text-sm sm:text-base font-bold text-amber-700 mt-1">
              {isTa ? 'எல்.ஐ.சி நிதி ஆலோசகர் • தலைவர் மன்ற உறுப்பினர்' : 'LIC Financial Advisor • Chairman’s Club Member'}
            </p>

            {/* 4. Agency Code */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-navy-50 border border-brand-navy-200 text-brand-navy text-xs font-bold mt-2.5 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600" aria-hidden="true" />
              <span>LIC Agency Code: {BUSINESS_INFO.agencyCode}</span>
            </div>

            {/* 5. Recognition Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-3 text-xs">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-amber-300 text-amber-800 font-bold shadow-2xs">
                <Award className="w-3.5 h-3.5 text-amber-600" aria-hidden="true" />
                <span>MDRT Member</span>
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-amber-300 text-amber-800 font-bold shadow-2xs">
                <Award className="w-3.5 h-3.5 text-amber-600" aria-hidden="true" />
                <span>Chairman’s Club Member</span>
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700 font-medium">
                <MapPin className="w-3.5 h-3.5 text-amber-600" aria-hidden="true" />
                <span>Hosur, Tamil Nadu</span>
              </span>
            </div>

            {/* 6. Short Introduction */}
            <div className="my-5 max-w-xl">
              <h2 className="text-lg sm:text-xl font-extrabold text-brand-navy tracking-tight mb-2 leading-snug">
                {home?.hero?.headline || (isTa ? 'சரியான ஆயுள் காப்பீட்டு வழிகாட்டல் மூலம் உங்கள் குடும்பத்தின் எதிர்காலத்தை பாதுகாத்திடுங்கள்' : "Secure Your Family's Future with the Right Life Insurance Guidance in Hosur")}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {home?.hero?.description ||
                  (isTa
                    ? 'ஓசூரில் எல்.ஐ.சி ஆயுள் காப்பீட்டு பாலிசிகள் மற்றும் சேவைகளுக்கு தலைவர் மன்ற உறுப்பினர் திரு. எம். மோகன் ராவ் அவர்களின் தொழில்முறை ஆலோசனையைப் பெறுங்கள்.'
                    : "Looking for trusted LIC insurance guidance in Hosur? Contact M. Mohan Rao, LIC Financial Advisor and Chairman's Club Member, for personalized life insurance consultation, family financial protection planning, and policy assistance.")}
              </p>
            </div>

            {/* 7. Contact Advisor and WhatsApp buttons */}
            <div className="w-full max-w-md flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              <Button
                href={`/${lang}/contact`}
                variant="primary"
                size="lg"
                icon={<Phone className="w-4 h-4 text-amber-300" aria-hidden="true" />}
                className="w-full sm:w-auto"
              >
                {isTa ? 'ஆலோசகரை தொடர்பு கொள்ள' : 'Contact Advisor'}
              </Button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-emerald-600 text-white hover:bg-emerald-700 shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-white" aria-hidden="true" />
                <span>{isTa ? 'வாட்ஸ்அப்பில் பேச' : 'WhatsApp Now'}</span>
              </a>

              <Button
                href={`/${lang}/insurance`}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                {isTa ? 'பாலிசி விவரங்கள்' : 'Explore Policies'}
              </Button>
            </div>

            <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-slate-600 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
              <span>
                {isTa
                  ? 'நேரடி எல்.ஐ.சி முகவர் சேவை • அதிகாரப்பூர்வ ரசீதுகள் • ஓசூர்'
                  : 'Direct LIC Advisor Guidance in Hosur • Official Portal Payments'}
              </span>
            </div>
          </div>

          {/* -------------------------------------------------------------
              B. DESKTOP LAYOUT (lg screens and above)
              - Left: Content, headlines, credentials, buttons (~52% width)
              - Right: Prominent photograph occupying 45-48% width
              ------------------------------------------------------------- */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Headlines, Credentials, Actions (col-span-7) */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Credentials Badge */}
              <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-amber-300 shadow-xs text-xs font-bold text-brand-navy mb-4">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" aria-hidden="true" />
                <span className="text-amber-800">
                  {home?.hero?.badge || (isTa ? 'தலைவர் மன்ற உறுப்பினர் & MDRT ஆலோசகர்' : "Chairman's Club Member & MDRT Advisor")}
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-brand-navy">LIC Code: {BUSINESS_INFO.agencyCode}</span>
              </div>

              {/* Main Hero Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-[1.15] mb-4">
                {home?.hero?.headline || (isTa ? 'சரியான ஆயுள் காப்பீட்டு வழிகாட்டல் மூலம் உங்கள் குடும்பத்தின் எதிர்காலத்தை பாதுகாத்திடுங்கள்' : "Secure Your Family's Future with the Right Life Insurance Guidance in Hosur")}
              </h1>

              {/* Supporting Description */}
              <p className="text-sm sm:text-base lg:text-lg text-slate-700 leading-relaxed font-normal mb-6 max-w-2xl">
                {home?.hero?.description ||
                  (isTa
                    ? 'ஓசூரில் எல்.ஐ.சி ஆயுள் காப்பீட்டு பாலிசிகள் மற்றும் சேவைகளுக்கு தலைவர் மன்ற உறுப்பினர் திரு. எம். மோகன் ராவ் அவர்களின் தொழில்முறை ஆலோசனையைப் பெறுங்கள்.'
                    : "Looking for trusted LIC insurance guidance in Hosur? Contact M. Mohan Rao, LIC Financial Advisor and Chairman's Club Member, for personalized life insurance consultation, family financial protection planning, and policy assistance.")}
              </p>

              {/* Verified Identity Card Strip */}
              <div className="w-full p-4 rounded-2xl bg-white border border-slate-200 shadow-xs mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                  <div>
                    <h2 className="text-lg font-black text-brand-navy">
                      {BUSINESS_INFO.name}
                    </h2>
                    <p className="text-xs font-bold text-amber-700">
                      {isTa ? 'எல்.ஐ.சி நிதி ஆலோசகர் • தலைவர் மன்ற உறுப்பினர்' : "LIC Financial Advisor • Chairman's Club Member"}
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-brand-navy-50 border border-brand-navy-200 text-brand-navy text-xs font-bold shrink-0">
                    <ShieldCheck className="w-4 h-4 text-amber-600" aria-hidden="true" />
                    <span>LIC Agency Code: {BUSINESS_INFO.agencyCode}</span>
                  </div>
                </div>

                <div className="pt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-600">
                  <span className="inline-flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-amber-600 shrink-0" aria-hidden="true" />
                    <strong className="text-slate-800">MDRT Member</strong>
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="inline-flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-amber-600 shrink-0" aria-hidden="true" />
                    <strong className="text-slate-800">Chairman&apos;s Club Member for Agents</strong>
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" aria-hidden="true" />
                    <span>Hosur, Tamil Nadu</span>
                  </span>
                </div>
              </div>

              {/* Hero Calls to Action */}
              <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Button
                  href={`/${lang}/contact`}
                  variant="primary"
                  size="lg"
                  icon={<Phone className="w-4 h-4 text-amber-300" aria-hidden="true" />}
                  className="w-full sm:w-auto"
                >
                  {isTa ? 'ஆலோசகரை தொடர்பு கொள்ள' : 'Contact Advisor'}
                </Button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-emerald-600 text-white hover:bg-emerald-700 shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-white" aria-hidden="true" />
                  <span>{isTa ? 'வாட்ஸ்அப்பில் பேச' : 'WhatsApp Now'}</span>
                </a>

                <Button
                  href={`/${lang}/insurance`}
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {isTa ? 'பாலிசி விவரங்கள்' : 'Explore Policies'}
                </Button>
              </div>

              {/* Factual Trust Indicators */}
              <div className="mt-5 flex items-center gap-2 text-xs text-slate-600 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
                <span>
                  {isTa
                    ? 'நேரடி எல்.ஐ.சி முகவர் சேவை • அதிகாரப்பூர்வ ரசீதுகள் • ஓசூர் பாலிசிதாரர் வழிகாட்டல்'
                    : 'Direct LIC Advisor Guidance in Hosur • Official Portal Payments • Lifetime Policyholder Support'}
                </span>
              </div>
            </div>

            {/* Right Column: Prominent Owner Photograph (~45-48% of hero width) */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-400 bg-brand-navy-900 group">
                <Image
                  src="/images/owner.jpeg"
                  alt="M. Mohan Rao – LIC Financial Advisor in Hosur"
                  fill
                  priority
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 1280px) 45vw, 540px"
                />

                {/* Overlaid Sleek Credential Tag */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-navy-950/95 via-brand-navy-950/70 to-transparent p-5 pt-10 text-white">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-black text-white">{BUSINESS_INFO.name}</h3>
                      <p className="text-xs font-semibold text-amber-300">
                        {isTa ? 'தலைவர் மன்ற உறுப்பினர் & எல்.ஐ.சி நிதி ஆலோசகர்' : "Chairman's Club Member & LIC Financial Advisor"}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/15 text-amber-300 border border-white/20 text-xs font-bold shrink-0">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
                      <span>Code: {BUSINESS_INFO.agencyCode}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Experience Highlight */}
              <ExperienceHighlight lang={lang} variant="compact" />
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 2: PROFESSIONAL RECOGNITION (MDRT & CHAIRMAN'S CLUB)
          ========================================================================= */}
      <section className="relative">
        <Container>
          <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 md:p-10 shadow-xs">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-200 mb-2">
                <Award className="w-3.5 h-3.5 text-amber-600" aria-hidden="true" />
                <span>{home?.recognition?.badge || (isTa ? 'தொழில்முறை தகுதிகள்' : 'Professional Honors')}</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy tracking-tight mb-2">
                {home?.recognition?.title || (isTa ? 'மதிப்புமிக்க நிறுவன விருதுகள் & கௌரவங்கள்' : 'Honors & Industry Recognition')}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                {home?.recognition?.subtitle ||
                  (isTa
                    ? 'வாடிக்கையாளர் சேவை மற்றும் ஆயுள் காப்பீட்டுத் துறையில் உயர் தரத்திற்கான அங்கீகாரங்கள்.'
                    : 'Verified professional distinctions reflecting high standards in life insurance advisory.')}
              </p>
            </div>

            {/* Visual Recognition Showcase */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* MDRT Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-brand-navy-50/70 to-white border border-brand-navy-200 shadow-2xs flex flex-col items-center text-center">
                <div className="relative w-28 h-28 mb-4">
                  <Image
                    src="/images/awards/mdrt-badge.svg"
                    alt="MDRT Member Badge"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-black text-brand-navy mb-1">
                  MDRT Member
                </h3>
                <span className="text-xs font-bold text-amber-700 mb-2">
                  Million Dollar Round Table
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {home?.recognition?.mdrtDesc ||
                    (isTa
                      ? 'மில்லியன் டாலர் ரவுண்ட் டேபிள் (MDRT) கௌரவம் - சர்வதேச நிதி நிபுணர்களின் முதன்மையான உலகளாவிய சங்கத்தின் உறுப்பினர் தகுதி.'
                      : 'Recognized by the Million Dollar Round Table—the premier global association of financial professionals upholding the highest standards of client service and knowledge.')}
                </p>
              </div>

              {/* Chairman's Club Card */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50/70 to-white border border-amber-200 shadow-2xs flex flex-col items-center text-center">
                <div className="relative w-28 h-28 mb-4">
                  <Image
                    src="/images/awards/chairmans-club-badge.svg"
                    alt="Chairman's Club Member Badge"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-black text-brand-navy mb-1">
                  {isTa ? 'தலைவர் மன்ற உறுப்பினர்' : "Chairman's Club Member for Agents"}
                </h3>
                <span className="text-xs font-bold text-amber-700 mb-2">
                  Life Insurance Corporation of India (LIC)
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {home?.recognition?.chairmansDesc ||
                    (isTa
                      ? "இந்திய ஆயுள் காப்பீட்டுக் கழகத்தின் (LIC) முகவர்களுக்கான மிக உயர்ந்த மற்றும் கௌரவமிக்க 'தலைவர் மன்ற உறுப்பினர்' தகுதி."
                      : "LIC’s highest and most prestigious recognition club for agents, honoring sustained performance, client trust, and exceptional policyholder service.")}
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
                <ShieldCheck className="w-4 h-4 text-amber-600" aria-hidden="true" />
                <span>Authorized LIC Agency Code: <strong>{BUSINESS_INFO.agencyCode}</strong></span>
              </span>
            </div>
          </div>
        </Container>
      </section>

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
            title={home?.aboutOwner?.title || (isTa ? 'எம். மோகன் ராவ் – எல்.ஐ.சி நிதி ஆலோசகர்' : 'About M. Mohan Rao')}
            subtitle={
              home?.aboutOwner?.subtitle ||
              (isTa
                ? 'நேர்மையான வழிகாட்டல் மற்றும் வாடிக்கையாளர் நலன் சார்ந்த அணுகுமுறை.'
                : 'Dedicated to helping families choose suitable life insurance with complete clarity.')
            }
            badge={home?.aboutOwner?.badge || (isTa ? 'ஆலோசகர் பற்றி' : 'About the Advisor')}
            theme="navy"
            align="center"
          />

          <OwnerProfile lang={lang} variant="card" showBio={true} />
        </Container>
      </section>

      {/* =========================================================================
          SECTION 4: LIC INSURANCE GUIDANCE & POLICY CATEGORIES
          ========================================================================= */}
      <section className="relative py-10 sm:py-12 bg-white border-y border-slate-200">
        <Container>
          <SectionHeader
            title={isTa ? 'எல்.ஐ.சி ஆயுள் காப்பீட்டு தீர்வுகள்' : 'LIC Life Insurance Solutions'}
            subtitle={
              isTa
                ? 'உங்கள் குடும்பத்தின் நிதிப் பாதுகாப்பு மற்றும் எதிர்காலத் தேவைகளுக்கான எல்.ஐ.சி திட்டங்கள்.'
                : 'Factual, transparent guidance across verified Life Insurance Corporation of India policy categories.'
            }
            badge={isTa ? 'பாலிசி தீர்வுகள்' : 'Policy Guidance'}
            theme="navy"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {LIC_SERVICE_PORTFOLIO.map((service) => {
              const serviceTitle = service.title[lang] || service.title.en;
              const serviceDesc = service.description[lang] || service.description.en;
              const serviceFeatures = service.features[lang] || service.features.en;

              return (
                <div
                  key={service.id}
                  className="p-6 rounded-2xl bg-brand-light border border-slate-200 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-brand-navy-50 border border-brand-navy-200 flex items-center justify-center mb-4 text-brand-navy">
                      {service.id === 'term-assurance' && <Shield className="w-5 h-5 text-amber-600" aria-hidden="true" />}
                      {service.id === 'endowment-savings' && <PiggyBank className="w-5 h-5 text-amber-600" aria-hidden="true" />}
                      {service.id === 'children-education' && <GraduationCap className="w-5 h-5 text-amber-600" aria-hidden="true" />}
                      {service.id === 'retirement-pension' && <Clock className="w-5 h-5 text-amber-600" aria-hidden="true" />}
                      {service.id === 'money-back' && <RefreshCw className="w-5 h-5 text-amber-600" aria-hidden="true" />}
                      {service.id === 'policyholder-servicing' && <FileText className="w-5 h-5 text-amber-600" aria-hidden="true" />}
                    </div>

                    <h3 className="text-base font-bold text-brand-navy mb-2">
                      {serviceTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4">
                      {serviceDesc}
                    </p>
                  </div>

                  <div>
                    <ul className="space-y-1.5 text-xs text-slate-700 border-t border-slate-200/80 pt-3">
                      {serviceFeatures.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" aria-hidden="true" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <Link
              href={`/${lang}/insurance`}
              className="inline-flex items-center gap-2 text-xs font-bold text-brand-navy hover:text-amber-700 transition-colors"
            >
              <span>{isTa ? 'அனைத்து காப்பீட்டு சேவைகளையும் விரிவாகப் பார்க்க' : 'View Full Insurance Services & FAQs'}</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
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
                ? 'நேரடி பொறுப்புடைமை, சர்வதேச அங்கீகாரம் மற்றும் வாடிக்கையாளர் நலன் சார்ந்த அணுகுமுறை.'
                : 'Direct accountability, recognized excellence, and ethical life insurance guidance.')
            }
            badge={home?.whyUs?.badge || (isTa ? 'நம்பகத்தன்மை' : 'Why Consult an Advisor')}
            theme="navy"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-start">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-amber-600" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-brand-navy mb-2">
                {isTa ? 'MDRT & தலைவர் மன்றம்' : "MDRT & Chairman's Club"}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {isTa
                  ? 'ஆயுள் காப்பீட்டுத் துறையில் மிக உயர்ந்த தகுதி, நேர்மை மற்றும் வாடிக்கையாளர் அர்ப்பணிப்பிற்கான கௌரவங்கள்.'
                  : 'Distinctions reflecting the highest standards of financial professionalism, knowledge, and integrity.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-start">
              <div className="w-12 h-12 rounded-xl bg-brand-navy-50 border border-brand-navy-200 flex items-center justify-center mb-4">
                <UserCheck className="w-6 h-6 text-brand-navy" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-brand-navy mb-2">
                {isTa ? 'நேரடி வழிகாட்டல்' : 'Direct Personal Advice'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {isTa
                  ? 'கால் சென்டர்கள் இன்றி, திரு. எம். மோகன் ராவ் அவர்களுடன் நேரடியாகப் பேசி உங்கள் சந்தேகங்களைத் தீர்க்கலாம்.'
                  : 'Consult directly with M. Mohan Rao without dealing with call centers or impersonal third-party algorithms.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-start">
              <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-amber-600" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-brand-navy mb-2">
                {isTa ? 'அதிகாரப்பூர்வ எல்.ஐ.சி கட்டணம்' : 'Official Portal Security'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {isTa
                  ? 'அனைத்து பிரீமியங்களும் எல்.ஐ.சி அதிகாரப்பூர்வ தளங்கள் மூலம் மட்டுமே செலுத்தப்படுகின்றன.'
                  : 'All applications and payments are processed directly through official LIC systems with verified receipts.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col justify-start">
              <div className="w-12 h-12 rounded-xl bg-brand-navy-50 border border-brand-navy-200 flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-brand-navy" aria-hidden="true" />
              </div>
              <h3 className="text-base font-bold text-brand-navy mb-2">
                {isTa ? 'க்ளெய்ம் & பாலிசி சேவை' : 'Lifetime Claim Support'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {isTa
                  ? 'பாலிசி எடுத்த பிறகும் புதுப்பித்தல், லோன் மற்றும் முதிர்வு/இறப்பு க்ளெய்ம் ஆவணங்களில் குடும்பத்தினருக்கு முழு உதவி.'
                  : 'Continued assistance for renewals, policy loans, nominee updates, and full claim settlement paperwork.'}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 6: CONSULTATION PROCESS (4 STEPS)
          ========================================================================= */}
      <section className="relative py-10 sm:py-12 bg-white border-y border-slate-200">
        <Container>
          <SectionHeader
            title={home?.process?.title || (isTa ? 'எங்கள் ஆலோசனை செயல்முறை எவ்வாறு செயல்படுகிறது?' : 'How Our Consultation Process Works')}
            subtitle={
              home?.process?.subtitle ||
              (isTa
                ? 'குழப்பமின்றி சரியான பாலிசியைத் தேர்வு செய்ய 4 எளிய வழிகாட்டல் படிகள்.'
                : 'A transparent, step-by-step approach ensuring you choose the right life cover without confusion.')
            }
            badge={isTa ? 'செயல்முறை' : '4-Step Consultation'}
            theme="navy"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-6 rounded-2xl bg-brand-light border border-slate-200 shadow-2xs">
              <span className="w-9 h-9 rounded-xl bg-brand-navy text-amber-300 text-xs font-black flex items-center justify-center shrink-0 mb-3 border border-amber-400">
                01
              </span>
              <h3 className="text-sm font-bold text-brand-navy mb-1.5">
                {isTa ? 'குடும்ப தேவைகளை அறிதல்' : "Understand Family Needs"}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isTa
                  ? 'குடும்ப நிதிப் பொறுப்புகள், சார்ந்திருப்போரின் பாதுகாப்பு, மற்றும் எதிர்கால முக்கிய இலக்குகளை விரிவாகக் கேட்டறிகிறோம்.'
                  : "We review your financial goals, family protection priorities, dependents' needs, and income replacement."}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-light border border-slate-200 shadow-2xs">
              <span className="w-9 h-9 rounded-xl bg-brand-navy text-amber-300 text-xs font-black flex items-center justify-center shrink-0 mb-3 border border-amber-400">
                02
              </span>
              <h3 className="text-sm font-bold text-brand-navy mb-1.5">
                {isTa ? 'எல்.ஐ.சி திட்டங்களை ஒப்பிடுதல்' : 'Compare Verified Plans'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isTa
                  ? 'டேர்ம் இன்சூரன்ஸ், சேமிப்பு அல்லது ஓய்வூதியத் திட்டங்களின் பலன்கள் மற்றும் பிரீமியம் விவரங்களை எளிய தமிழில் விளக்குகிறோம்.'
                  : 'We review suitable LIC plans—term protection, endowment, or pension—explaining terms and benefits clearly.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-light border border-slate-200 shadow-2xs">
              <span className="w-9 h-9 rounded-xl bg-brand-navy text-amber-300 text-xs font-black flex items-center justify-center shrink-0 mb-3 border border-amber-400">
                03
              </span>
              <h3 className="text-sm font-bold text-brand-navy mb-1.5">
                {isTa ? 'அதிகாரப்பூர்வ பதிவு' : 'Official Portal Submission'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isTa
                  ? 'எல்.ஐ.சி-யின் அதிகாரப்பூர்வ போர்டல் மூலம் விண்ணப்பங்கள் துல்லியமாகப் பதிவு செய்யப்பட்டு, அதிகாரப்பூர்வ ரசீதுகள் வழங்கப்படுகின்றன.'
                  : 'Your proposal is processed securely through official LIC channels, ensuring verified receipts and bond issuance.'}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-brand-light border border-slate-200 shadow-2xs">
              <span className="w-9 h-9 rounded-xl bg-brand-navy text-amber-300 text-xs font-black flex items-center justify-center shrink-0 mb-3 border border-amber-400">
                04
              </span>
              <h3 className="text-sm font-bold text-brand-navy mb-1.5">
                {isTa ? 'வாழ்நாள் பாலிசிதாரர் சேவை' : 'Lifetime Policy Servicing'}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {isTa
                  ? 'பிரீமியம் புதுப்பித்தல் நினைவூட்டல்கள், முகவரி மாற்றம், மற்றும் க்ளெய்ம் ஆவணங்களுக்கான தொடர்ச்சியான உதவி வழங்கப்படுகிறது.'
                  : 'Receive dedicated support for premium due dates, policy updates, and full claim settlement paperwork.'}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 7: CONTACT INFORMATION & OFFICE LOCATION
          ========================================================================= */}
      <section className="relative">
        <Container>
          <div className="rounded-3xl bg-brand-navy text-white p-6 sm:p-8 md:p-10 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-amber-300 border border-white/20">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
                  <span>{isTa ? 'அலுவலக முகவரி & தொடர்பு' : 'Office Location & Contact'}</span>
                </span>

                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  {isTa ? 'திரு. எம். மோகன் ராவ் அவர்களுடன் தொடர்புகொள்ளுங்கள்' : 'Get in Touch with M. Mohan Rao'}
                </h2>

                <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
                  {isTa
                    ? 'ஆயுள் காப்பீட்டு பாலிசி ஆலோசனைகள் மற்றும் பாலிசிதாரர் சேவைகளுக்கு எங்கள் ஓசூர் அலுவலகத்திற்கு நேரில் வரலாம் அல்லது தொலைபேசி / வாட்ஸ்அப் மூலம் தொடர்பு கொள்ளலாம்.'
                    : 'For life insurance consultations and policy servicing, visit our office on Bye-Pass Road, Hosur or reach out directly via mobile or WhatsApp.'}
                </p>

                <div className="space-y-3 pt-2 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-bold text-white">{BUSINESS_INFO.address}</p>
                      <a
                        href={GOOGLE_MAPS_OFFICE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-amber-200 mt-1 font-semibold"
                      >
                        <span>{isTa ? 'கூகுள் வரைபடத்தில் பார்க்க' : 'Open in Google Maps'}</span>
                        <ExternalLink className="w-3 h-3" aria-hidden="true" />
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-6 pt-2">
                    <a
                      href="tel:+919500253993"
                      className="inline-flex items-center gap-2 text-slate-200 hover:text-white font-bold"
                    >
                      <Phone className="w-4 h-4 text-amber-400" aria-hidden="true" />
                      <span>+91 95002 53993</span>
                      <span className="text-xs text-amber-300 font-normal">({isTa ? 'முதன்மை' : 'Mobile'})</span>
                    </a>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200 font-bold"
                    >
                      <MessageCircle className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                      <span>+91 94435 64017</span>
                      <span className="text-xs text-slate-400 font-normal">(WhatsApp)</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Consultation Enquiry CTA Panel */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center space-y-4">
                <ShieldCheck className="w-10 h-10 text-amber-400 mx-auto" aria-hidden="true" />
                <h3 className="text-lg font-bold text-white">
                  {isTa ? 'நேரடி ஆலோசனை பெற' : 'Request Consultation'}
                </h3>
                <p className="text-xs text-slate-300">
                  {isTa
                    ? 'ஆன்லைன் படிவத்தின் மூலம் உங்கள் தேவைகளைப் பகிருங்கள். விரைவில் தங்களைத் தொடர்பு கொள்வோம்.'
                    : 'Submit your requirement online or contact directly via phone or WhatsApp.'}
                </p>
                <div className="flex flex-col gap-2.5 pt-2">
                  <a
                    href="tel:+919500253993"
                    className="w-full py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-brand-navy font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    {isTa ? 'அழைக்க: 95002 53993' : 'Call 95002 53993'}
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    {isTa ? 'வாட்ஸ்அப்: 94435 64017' : 'WhatsApp 94435 64017'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 8: ONLINE CONSULTATION ENQUIRY FORM
          ========================================================================= */}
      <section className="relative" id="enquiry">
        <Container size="narrow">
          <SectionHeader
            title={isTa ? 'ஆலோசனை கோரிக்கை படிவம்' : 'Request a Consultation'}
            subtitle={
              isTa
                ? 'உங்கள் தகவல்களை உள்ளிடவும். திரு. எம். மோகன் ராவ் அவர்கள் தங்களை நேரடியாக தொடர்புகொள்வார்.'
                : 'Send your requirements directly to M. Mohan Rao for personalized life insurance advice.'
            }
            badge={isTa ? 'விசாரணை' : 'Consultation Enquiry'}
            theme="navy"
            align="center"
          />

          <InsuranceEnquiryForm lang={lang} />
        </Container>
      </section>

      {/* =========================================================================
          SECTION 9: FREQUENTLY ASKED QUESTIONS
          ========================================================================= */}
      <section className="relative">
        <Container size="narrow">
          <SectionHeader
            title={insDict?.faq?.title || (isTa ? 'அடிக்கடி கேட்கப்படும் கேள்விகள்' : 'Frequently Asked Questions')}
            subtitle={
              insDict?.faq?.subtitle ||
              (isTa
                ? 'எல்.ஐ.சி பாலிசிகள் மற்றும் ஆலோசகர் சேவைகள் பற்றிய தெளிவான பதில்கள்.'
                : 'Clear, factual answers regarding LIC insurance guidance and advisor servicing.')
            }
            badge={isTa ? 'கேள்வி & பதில்' : 'FAQ'}
            theme="navy"
            align="center"
          />

          <div className="space-y-4">
            {(insDict?.faq?.items || []).map((faqItem: any, idx: number) => (
              <div key={idx} className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center shrink-0 mt-0.5 border border-amber-200">
                    <HelpCircle className="w-4 h-4 text-amber-600" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-brand-navy mb-1.5">
                      {faqItem.q}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {faqItem.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 10: REGULATORY & INTERMEDIARY DISCLAIMER
          ========================================================================= */}
      <section className="relative">
        <Container>
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 flex items-start gap-3 shadow-2xs">
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
