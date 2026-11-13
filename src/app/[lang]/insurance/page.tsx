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
  WHATSAPP_MESSAGES,
} from '@/lib/constants';
import { Container } from '@/components/common/Container';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Button } from '@/components/common/Button';
import { OwnerProfile } from '@/components/common/OwnerProfile';
import { ExperienceHighlight } from '@/components/common/ExperienceHighlight';
import { InsuranceCompaniesSection } from '@/components/common/InsuranceCompaniesSection';
import { InsuranceEnquiryForm } from '@/components/forms/InsuranceEnquiryForm';
import { JsonLd } from '@/components/common/JsonLd';
import {
  Shield,
  ShieldCheck,
  Award,
  Phone,
  MessageCircle,
  HelpCircle,
  MapPin,
  CheckCircle2,
  Info,
  Clock,
  PiggyBank,
  GraduationCap,
  RefreshCw,
  FileText,
  HeartPulse,
  Car,
  Building2,
  Check,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolved = await params;
  const lang: SupportedLanguage = resolved.lang === 'ta' ? 'ta' : 'en';

  const title =
    lang === 'ta'
      ? 'காப்பீட்டு சேவைகள் ஓசூர் | ஆயுள், மருத்துவம் & பொதுக் காப்பீடு | திரு. எம். மோகன் ராவ்'
      : 'Insurance Services in Hosur | Life, Health & General Insurance | M. Mohan Rao';

  const description =
    lang === 'ta'
      ? 'ஓசூரில் முழுமையான காப்பீட்டு வழிகாட்டல்: ஆயுள் காப்பீடு (LIC), மருத்துவக் காப்பீடு (Star Health), மற்றும் பொதுக் காப்பீடு (United India Insurance). திரு. எம். மோகன் ராவ் அவர்களின் நேரடி ஆலோசனை மற்றும் பாலிசிதாரர் சேவை.'
      : 'Comprehensive insurance guidance in Hosur across Life Insurance (LIC), Health Insurance (Star Health), and General Insurance (United India Insurance) by advisor M. Mohan Rao.';

  return generateSeoMetadata(lang, title, description);
}

export default async function InsurancePage({ params }: PageProps) {
  const resolvedParams = await params;
  const lang: SupportedLanguage = resolvedParams.lang === 'ta' ? 'ta' : 'en';
  const isTa = lang === 'ta';
  const dict = getDictionary(lang);
  const ins = dict.insurance || {};
  const hero = ins.hero || {};
  const services = ins.servicesProvided || {};
  const faqData = ins.faq || {};

  const whatsappGeneral = `https://wa.me/919443564017?text=${encodeURIComponent(
    WHATSAPP_MESSAGES[lang]?.insurance || ''
  )}`;
  const whatsappLic = `https://wa.me/919443564017?text=${encodeURIComponent(
    WHATSAPP_MESSAGES[lang]?.lic || ''
  )}`;
  const whatsappStar = `https://wa.me/919443564017?text=${encodeURIComponent(
    WHATSAPP_MESSAGES[lang]?.starHealth || ''
  )}`;
  const whatsappUnited = `https://wa.me/919443564017?text=${encodeURIComponent(
    WHATSAPP_MESSAGES[lang]?.unitedIndia || ''
  )}`;

  return (
    <div className="flex flex-col gap-10 md:gap-14 pb-12 md:pb-16">
      <JsonLd lang={lang} pageType="insurance" includeFaq={true} />

      {/* =========================================================================
          SECTION 1 – INSURANCE HERO
          ========================================================================= */}
      <section className="relative overflow-hidden py-8 sm:py-12 bg-gradient-to-b from-brand-navy-50/80 via-white to-amber-50/20 border-b border-slate-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, description, scope, CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Multi-Insurance Badge */}
              <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-xs text-xs font-bold text-brand-navy mb-4">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                <span className="text-brand-navy">
                  {hero.badge || (isTa ? 'பல-காப்பீட்டு வழிகாட்டல்' : 'Multi-Insurance Advisory')}
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-amber-800">
                  {isTa ? 'ஆயுள் • மருத்துவம் • பொது' : 'Life • Health • General'}
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-[1.15] mb-4">
                {hero.heading ||
                  (isTa
                    ? 'ஓசூரில் ஆயுள், மருத்துவம் & பொதுக் காப்பீடுகளுக்கான தொழில்முறை வழிகாட்டல்'
                    : 'Comprehensive Life, Health & General Insurance Guidance in Hosur')}
              </h1>

              {/* Supporting Description */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal mb-6 max-w-2xl">
                {hero.description ||
                  (isTa
                    ? 'திரு. எம். மோகன் ராவ் அவர்கள் எல்.ஐ.சி ஆயுள் காப்பீடு, ஸ்டார் ஹெல்த் மருத்துவப் பாதுகாப்பு மற்றும் யுனைடெட் இந்தியா பொதுக் காப்பீடுகளுக்கு தனிப்பயனாக்கப்பட்ட ஆலோசனையை வழங்குகிறார்.'
                    : 'M. Mohan Rao provides personalized consultation for LIC Life Insurance, Star Health Medical Coverage, and United India General Insurance, helping you safeguard your family, health, and assets.')}
              </p>

              {/* Service Scope Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-700 mb-6 shadow-2xs">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0" aria-hidden="true" />
                <span>
                  <strong>{isTa ? 'அலுவலகம்:' : 'Office:'}</strong> {BUSINESS_INFO.address}
                </span>
              </div>

              {/* Primary & Secondary CTAs */}
              <div className="w-full flex flex-wrap items-center gap-3">
                <Button
                  href="#enquiry"
                  variant="primary"
                  size="lg"
                  icon={<Shield className="w-4 h-4 text-amber-300 shrink-0" aria-hidden="true" />}
                  className="sm:w-auto whitespace-nowrap shrink-0"
                >
                  {isTa ? 'ஆலோசனை பெற' : 'Request Consultation'}
                </Button>

                <a
                  href={whatsappGeneral}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-emerald-600 text-white hover:bg-emerald-700 shadow-xs transition-colors whitespace-nowrap shrink-0 min-h-[48px]"
                >
                  <MessageCircle className="w-4 h-4 text-white shrink-0" aria-hidden="true" />
                  <span className="whitespace-nowrap">WhatsApp: 94435 64017</span>
                </a>

                <Button
                  href={`/${lang}/contact`}
                  variant="outline"
                  size="lg"
                  className="sm:w-auto whitespace-nowrap shrink-0"
                >
                  {isTa ? 'தொடர்புகொள்ள' : 'Contact Us'}
                </Button>
              </div>
            </div>

            {/* Right Column: Advisor Profile & Experience Highlight */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <OwnerProfile lang={lang} variant="hero" />
              <ExperienceHighlight lang={lang} variant="compact" />
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 2 – INSURANCE COMPANIES WE WORK WITH
          ========================================================================= */}
      <Container>
        <InsuranceCompaniesSection lang={lang} />
      </Container>

      {/* =========================================================================
          SECTION 3 – THREE MAJOR INSURANCE CATEGORIES
          Life (LIC) • Health (Star Health) • General (United India)
          ========================================================================= */}
      <section className="relative py-10 sm:py-12 bg-white border-y border-slate-200" id="categories">
        <Container>
          <SectionHeader
            title={isTa ? 'முக்கிய காப்பீட்டுப் பிரிவுகள்' : 'Insurance Categories & Plan Guidance'}
            subtitle={
              isTa
                ? 'உங்கள் வாழ்க்கையின் ஒவ்வொரு தேவைக்கும் ஏற்றவாறு பிரிக்கப்பட்ட மூன்று முக்கிய காப்பீட்டு சேவைகள்.'
                : 'Structured guidance across Life Insurance, Health Insurance, and General Insurance solutions.'
            }
            badge={isTa ? 'சேவைப் பிரிவுகள்' : 'Core Categories'}
            theme="navy"
            align="center"
          />

          <div className="space-y-8 sm:space-y-10">
            {/* 1. Life Insurance Category (LIC) */}
            <div className="rounded-3xl bg-gradient-to-br from-blue-50/60 via-white to-slate-50 border border-blue-200/80 p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-blue-100">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Shield className="w-7 h-7 text-amber-300" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-100 text-blue-900 border border-blue-200 mb-1.5">
                      <span>{isTa ? 'பிரிவு 1: ஆயுள் காப்பீடு' : 'Category 1: Life Insurance'}</span>
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-brand-navy">
                      {isTa ? 'ஆயுள் காப்பீடு – இந்திய ஆயுள் காப்பீட்டுக் கழகம் (LIC)' : 'Life Insurance – Life Insurance Corporation of India (LIC)'}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                      {isTa
                        ? 'LIC முகவர் குறியீடு: 0195676N • தலைவர் மன்ற உறுப்பினர் & MDRT நிதி ஆலோசகர்'
                        : 'Official LIC Agency Code: 0195676N • Chairman’s Club Member & MDRT Advisor'}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                  <a
                    href={whatsappLic}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl font-bold text-xs bg-emerald-600 text-white hover:bg-emerald-700 shadow-xs transition-colors whitespace-nowrap shrink-0 min-h-[40px]"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span className="whitespace-nowrap">{isTa ? 'LIC வாட்ஸ்அப்' : 'WhatsApp LIC Enquiry'}</span>
                  </a>
                  <Button href="#enquiry" variant="primary" size="sm" className="whitespace-nowrap shrink-0 min-h-[40px]">
                    {isTa ? 'ஆலோசனை கேட்க' : 'Enquire About Life Cover'}
                  </Button>
                </div>
              </div>

              {/* Plan Cards Grid for Life Insurance */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
                <div className="p-4 rounded-2xl bg-white border border-slate-200">
                  <h4 className="text-sm font-bold text-brand-navy mb-1 flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-amber-600" aria-hidden="true" />
                    <span>{isTa ? 'டேர்ம் ஆயுள் காப்பீடு' : 'Term Life Insurance'}</span>
                  </h4>
                  <p className="text-xs text-slate-600">
                    {isTa
                      ? 'குறைந்த பிரீமியத்தில் குடும்பத்திற்கு அதிகபட்ச நிதிப் பாதுகாப்பு வழங்கும் தூய பாதுகாப்புத் திட்டங்கள்.'
                      : 'Affordable, pure risk protection securing family dependants with high sum assured coverage.'}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200">
                  <h4 className="text-sm font-bold text-brand-navy mb-1 flex items-center gap-1.5">
                    <PiggyBank className="w-4 h-4 text-amber-600" aria-hidden="true" />
                    <span>{isTa ? 'சேமிப்பு & முதலீட்டுத் திட்டங்கள்' : 'Endowment & Savings Plans'}</span>
                  </h4>
                  <p className="text-xs text-slate-600">
                    {isTa
                      ? 'ஆயுள் பாதுகாப்புடன் ஒழுங்கான சேமிப்பு மற்றும் முதிர்வுத் தொகையை வழங்கும் திட்டங்கள்.'
                      : 'Combine disciplined savings with guaranteed life cover and tax planning under IT laws.'}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200">
                  <h4 className="text-sm font-bold text-brand-navy mb-1 flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 text-amber-600" aria-hidden="true" />
                    <span>{isTa ? 'குழந்தைகள் கல்வி & எதிர்காலம்' : 'Children Future & Education Funds'}</span>
                  </h4>
                  <p className="text-xs text-slate-600">
                    {isTa
                      ? 'குழந்தைகளின் உயர்கல்வி மற்றும் திருமணத் தேவைகளுக்கான முதிர்வு நிதி மற்றும் பிரீமியம் தள்ளுபடி நன்மைகள்.'
                      : 'Guaranteed funds for higher education and vital milestones with parent premium waiver benefits.'}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200">
                  <h4 className="text-sm font-bold text-brand-navy mb-1 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-amber-600" aria-hidden="true" />
                    <span>{isTa ? 'ஓய்வூதியத் திட்டங்கள்' : 'Retirement & Pension Annuities'}</span>
                  </h4>
                  <p className="text-xs text-slate-600">
                    {isTa
                      ? 'பணி ஓய்வுக்குப் பின் வாழ்நாள் முழுவதும் மாதாந்திர உத்தரவாத வருமானம் வழங்கும் எல்.ஐ.சி திட்டங்கள்.'
                      : 'Lifelong regular pension options ensuring sustained financial independence after retirement.'}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200">
                  <h4 className="text-sm font-bold text-brand-navy mb-1 flex items-center gap-1.5">
                    <RefreshCw className="w-4 h-4 text-amber-600" aria-hidden="true" />
                    <span>{isTa ? 'மணி பேக் திட்டங்கள்' : 'Money Back Liquidity Plans'}</span>
                  </h4>
                  <p className="text-xs text-slate-600">
                    {isTa
                      ? 'குறிப்பிட்ட கால இடைவெளிகளில் ரொக்க பலன்களும் தொடர்ச்சியான ஆயுள் பாதுகாப்பும் ஒருங்கிணைந்த திட்டங்கள்.'
                      : 'Periodic survival payouts during the policy term along with full life cover throughout.'}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200">
                  <h4 className="text-sm font-bold text-brand-navy mb-1 flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-amber-600" aria-hidden="true" />
                    <span>{isTa ? 'பாலிசி புதுப்பித்தல் & க்ளெய்ம்' : 'Policy Servicing & Claims'}</span>
                  </h4>
                  <p className="text-xs text-slate-600">
                    {isTa
                      ? 'முதிர்வு/இறப்பு க்ளெய்ம் ஆவணங்கள், அதிகாரப்பூர்வ ஆன்லைன் கட்டணம், மற்றும் முகவரி மாற்றம்.'
                      : 'End-to-end guidance for renewals, address updates, lapsed policy revivals, and death/maturity claims.'}
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Health Insurance Category (Star Health) */}
            <div className="rounded-3xl bg-gradient-to-br from-emerald-50/60 via-white to-slate-50 border border-emerald-200/80 p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-emerald-100">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <HeartPulse className="w-7 h-7 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-900 border border-emerald-200 mb-1.5">
                      <span>{isTa ? 'பிரிவு 2: மருத்துவக் காப்பீடு' : 'Category 2: Health Insurance'}</span>
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-brand-navy">
                      {isTa ? 'மருத்துவக் காப்பீடு – ஸ்டார் ஹெல்த் அண்ட் அலைட் இன்சூரன்ஸ்' : 'Health Insurance – Star Health and Allied Insurance'}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                      {isTa
                        ? 'தனிநபர் & குடும்ப மருத்துவத் திட்டம் • பணமில்லா மருத்துவமனை சிகிச்சை வழிகாட்டல்'
                        : 'Specialized Medical Protection • Cashless Hospitalization Support in Hosur'}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                  <a
                    href={whatsappStar}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl font-bold text-xs bg-emerald-600 text-white hover:bg-emerald-700 shadow-xs transition-colors whitespace-nowrap shrink-0 min-h-[40px]"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span className="whitespace-nowrap">{isTa ? 'ஸ்டார் ஹெல்த் வாட்ஸ்அப்' : 'WhatsApp Health Enquiry'}</span>
                  </a>
                  <Button href="#enquiry" variant="primary" size="sm" className="whitespace-nowrap shrink-0 min-h-[40px]">
                    {isTa ? 'மருத்துவக் காப்பீடு கேட்க' : 'Enquire About Health Cover'}
                  </Button>
                </div>
              </div>

              {/* Plan Cards Grid for Health Insurance */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
                <div className="p-4 rounded-2xl bg-white border border-slate-200">
                  <h4 className="text-sm font-bold text-brand-navy mb-1 flex items-center gap-1.5">
                    <HeartPulse className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                    <span>{isTa ? 'குடும்ப ஃப்ளோட்டர் மருத்துவத் திட்டம்' : 'Family Floater Health Cover'}</span>
                  </h4>
                  <p className="text-xs text-slate-600">
                    {isTa
                      ? 'ஒரே பாலிசியில் குடும்ப உறுப்பினர்கள் அனைவருக்கும் முழுமையான மருத்துவமனை சிகிச்சை பாதுகாப்பு.'
                      : 'Comprehensive medical coverage shared across family members with high sum insured options.'}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200">
                  <h4 className="text-sm font-bold text-brand-navy mb-1 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                    <span>{isTa ? 'பணமில்லா மருத்துவமனை சிகிச்சை' : 'Cashless Hospitalization Guidance'}</span>
                  </h4>
                  <p className="text-xs text-slate-600">
                    {isTa
                      ? 'ஓசூர் மற்றும் சுற்றியுள்ள முன்னணி நெட்வொர்க் மருத்துவமனைகளில் பணமில்லா சிகிச்சை வழிகாட்டல்.'
                      : 'Guidance through Star Health network hospitals in Hosur for cashless admission and discharge.'}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200">
                  <h4 className="text-sm font-bold text-brand-navy mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                    <span>{isTa ? 'மூத்த குடிமக்கள் மருத்துவத் திட்டம்' : 'Senior Citizens Health Insurance'}</span>
                  </h4>
                  <p className="text-xs text-slate-600">
                    {isTa
                      ? 'பெற்றோர்கள் மற்றும் மூத்த குடிமக்களுக்கான பிரத்யேக மருத்துவ சிகிச்சை மற்றும் அறுவைசிகிச்சை பாதுகாப்பு.'
                      : 'Tailored medical plans catering specifically to senior citizens and elderly parent medical needs.'}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200">
                  <h4 className="text-sm font-bold text-brand-navy mb-1 flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                    <span>{isTa ? 'தீவிர சிகிச்சை & அறுவைசிகிச்சை' : 'Critical Illness Protection'}</span>
                  </h4>
                  <p className="text-xs text-slate-600">
                    {isTa
                      ? 'முக்கிய நோய்கள் மற்றும் அவசர அறுவை சிகிச்சைகளுக்கான கூடுதல் நிதி பாதுகாப்பு நன்மைகள்.'
                      : 'Lump-sum payouts upon diagnosis of covered critical illnesses and major surgical procedures.'}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200">
                  <h4 className="text-sm font-bold text-brand-navy mb-1 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                    <span>{isTa ? 'முன் & பின் மருத்துவ செலவு உதவி' : 'Pre & Post Hospitalization'}</span>
                  </h4>
                  <p className="text-xs text-slate-600">
                    {isTa
                      ? 'மருத்துவமனையில் அனுமதிக்கப்படுவதற்கு முந்தைய மற்றும் டிஸ்சார்ஜிற்கு பிந்தைய மருத்துவ செலவு வழிகாட்டல்.'
                      : 'Coverage guidance for diagnostic tests, doctor visits, and medications before and after admission.'}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200">
                  <h4 className="text-sm font-bold text-brand-navy mb-1 flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                    <span>{isTa ? 'மருத்துவ க்ளெய்ம் ஒருங்கிணைப்பு' : 'Medical Claim Coordination'}</span>
                  </h4>
                  <p className="text-xs text-slate-600">
                    {isTa
                      ? 'மருத்துவ பில்கள், டிஸ்சார்ஜ் சுருக்கம் மற்றும் ரீஇம்பர்ஸ்மென்ட் க்ளெய்ம் ஆவணங்களைத் தயாரிப்பதில் உதவி.'
                      : 'Hands-on support with discharge paperwork, bill submission, and reimbursement claim tracking.'}
                  </p>
                </div>
              </div>
            </div>

            {/* 3. General Insurance Category (United India Insurance) */}
            <div className="rounded-3xl bg-gradient-to-br from-amber-50/60 via-white to-slate-50 border border-amber-200/80 p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-amber-100">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-amber-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Car className="w-7 h-7 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-900 border border-amber-200 mb-1.5">
                      <span>{isTa ? 'பிரிவு 3: பொதுக் காப்பீடு' : 'Category 3: General Insurance'}</span>
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-brand-navy">
                      {isTa ? 'பொதுக் காப்பீடு – யுனைடெட் இந்தியா இன்சூரன்ஸ்' : 'General Insurance – United India Insurance Company Limited'}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                      {isTa
                        ? 'வாகனங்கள், வர்த்தக நிறுவனங்கள் & சொத்துப் பாதுகாப்பு • முன்னணி பொதுத்துறை நிறுவனம்'
                        : 'Motor, Vehicle, Commercial & Asset Protection • Trusted Public Sector Insurer'}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2.5 shrink-0">
                  <a
                    href={whatsappUnited}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl font-bold text-xs bg-emerald-600 text-white hover:bg-emerald-700 shadow-xs transition-colors whitespace-nowrap shrink-0 min-h-[40px]"
                  >
                    <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                    <span className="whitespace-nowrap">{isTa ? 'யுனைடெட் இந்தியா வாட்ஸ்அப்' : 'WhatsApp General Enquiry'}</span>
                  </a>
                  <Button href="#enquiry" variant="primary" size="sm" className="whitespace-nowrap shrink-0 min-h-[40px]">
                    {isTa ? 'பொதுக் காப்பீடு கேட்க' : 'Enquire About General Insurance'}
                  </Button>
                </div>
              </div>

              {/* Plan Cards Grid for General Insurance */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
                <div className="p-4 rounded-2xl bg-white border border-slate-200">
                  <h4 className="text-sm font-bold text-brand-navy mb-1 flex items-center gap-1.5">
                    <Car className="w-4 h-4 text-amber-600" aria-hidden="true" />
                    <span>{isTa ? 'இருசக்கர & கார் காப்பீடு' : 'Two-Wheeler & Private Car Insurance'}</span>
                  </h4>
                  <p className="text-xs text-slate-600">
                    {isTa
                      ? 'இருசக்கர வாகனங்கள் மற்றும் கார்களுக்கான தேர்ட்-பார்ட்டி மற்றும் முழுமையான விபத்துப் பாதுகாப்பு பாலிசிகள்.'
                      : 'Comprehensive and third-party liability coverage protecting personal vehicles against damage and accidents.'}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200">
                  <h4 className="text-sm font-bold text-brand-navy mb-1 flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-amber-600" aria-hidden="true" />
                    <span>{isTa ? 'வணிக வாகனக் காப்பீடு' : 'Commercial Vehicle Insurance'}</span>
                  </h4>
                  <p className="text-xs text-slate-600">
                    {isTa
                      ? 'சரக்கு வாகனங்கள், வாடகை கார்கள் மற்றும் வணிக போக்குவரத்திற்கான நம்பகமான பொதுக் காப்பீடு.'
                      : 'Robust insurance solutions tailored for commercial transport, goods carriers, and fleet vehicles.'}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200">
                  <h4 className="text-sm font-bold text-brand-navy mb-1 flex items-center gap-1.5">
                    <Shield className="w-4 h-4 text-amber-600" aria-hidden="true" />
                    <span>{isTa ? 'கடை & வணிக நிறுவனப் பாதுகாப்பு' : 'Shop & Commercial Property Cover'}</span>
                  </h4>
                  <p className="text-xs text-slate-600">
                    {isTa
                      ? 'வணிக வளாகங்கள், கடைகள், மற்றும் குடோன்களுக்கான தீ விபத்து, திருட்டு மற்றும் சேதப் பாதுகாப்பு.'
                      : 'Safeguard shops, warehouses, machinery, and commercial premises against fire, theft, and natural hazards.'}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200">
                  <h4 className="text-sm font-bold text-brand-navy mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-amber-600" aria-hidden="true" />
                    <span>{isTa ? 'தனிநபர் விபத்துக் காப்பீடு' : 'Personal Accident Cover'}</span>
                  </h4>
                  <p className="text-xs text-slate-600">
                    {isTa
                      ? 'விபத்துக்களினால் ஏற்படும் ஊனம் அல்லது உயிரிழப்பிற்கு குடும்பத்தினருக்கு உத்தரவாத நிதிப் பாதுகாப்பு.'
                      : 'Financial compensation for accidental injury, disability, or demise supporting dependents.'}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200">
                  <h4 className="text-sm font-bold text-brand-navy mb-1 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-amber-600" aria-hidden="true" />
                    <span>{isTa ? 'சரியான நேர பாலிசி புதுப்பித்தல்' : 'Timely Policy Renewals'}</span>
                  </h4>
                  <p className="text-xs text-slate-600">
                    {isTa
                      ? 'வாகன பாலிசி காலாவதியாகாமல் சரியான நேரத்தில் நினைவூட்டல் மற்றும் புதுப்பித்தல் வழிகாட்டல்.'
                      : 'Advance reminders and quick digital renewal processing to prevent policy lapse and fines.'}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-slate-200">
                  <h4 className="text-sm font-bold text-brand-navy mb-1 flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-amber-600" aria-hidden="true" />
                    <span>{isTa ? 'வாகன விபத்து க்ளெய்ம் உதவி' : 'Motor Accident Claim Guidance'}</span>
                  </h4>
                  <p className="text-xs text-slate-600">
                    {isTa
                      ? 'வாகன சேதம், சர்வேயர் மதிப்பீடு மற்றும் விபத்து க்ளெய்ம் ஆவணங்களைத் தயாரிப்பதில் முழு உதவி.'
                      : 'Practical assistance with surveyor inspection, repair documentation, and insurance claim tracking.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 4 – HOW M. MOHAN RAO ASSISTS CLIENTS
          ========================================================================= */}
      <section className="relative py-10 sm:py-12 bg-slate-50 border-b border-slate-200">
        <Container>
          <SectionHeader
            title={services.title || (isTa ? 'திரு. எம். மோகன் ராவ் எவ்வாறு உதவுகிறார்?' : 'How M. Mohan Rao Assists Clients')}
            subtitle={
              services.subtitle ||
              (isTa
                ? 'உங்கள் காப்பீட்டுப் பயணத்தின் ஒவ்வொரு கட்டத்திலும் வெளிப்படையான வழிகாட்டல்.'
                : 'Personalized, ethical support throughout your insurance journey.')
            }
            badge={services.badge || (isTa ? 'சேவை வரம்பு' : 'Scope of Assistance')}
            theme="navy"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(services.items || []).map((item: any, idx: number) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-brand-navy-50 border border-brand-navy-200 flex items-center justify-center mb-4 text-brand-navy">
                    <CheckCircle2 className="w-5 h-5 text-amber-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-bold text-brand-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 5 – CONSULTATION ENQUIRY FORM (Preserved & Working)
          ========================================================================= */}
      <section className="relative" id="enquiry">
        <Container size="narrow">
          <SectionHeader
            title={isTa ? 'காப்பீட்டு ஆலோசனை பெற' : 'Request an Insurance Consultation'}
            subtitle={
              isTa
                ? 'உங்கள் தகவல்களை உள்ளிடவும். திரு. எம். மோகன் ராவ் அவர்கள் தங்களை நேரடியாக தொடர்புகொள்வார்.'
                : 'Send your requirements to M. Mohan Rao for tailored life, health, or general insurance advice.'
            }
            badge={isTa ? 'விசாரணை' : 'Consultation Enquiry'}
            theme="navy"
            align="center"
          />

          <InsuranceEnquiryForm lang={lang} />
        </Container>
      </section>

      {/* =========================================================================
          SECTION 6 – FREQUENTLY ASKED QUESTIONS
          ========================================================================= */}
      <section className="relative">
        <Container size="narrow">
          <SectionHeader
            title={faqData.title || (isTa ? 'அடிக்கடி கேட்கப்படும் கேள்விகள்' : 'Frequently Asked Questions')}
            subtitle={
              faqData.subtitle ||
              (isTa
                ? 'காப்பீட்டு பாலிசிகள் மற்றும் ஆலோசகர் சேவைகள் பற்றிய தெளிவான பதில்கள்.'
                : 'Factual, straightforward answers about insurance policies and advisor servicing.')
            }
            badge={isTa ? 'கேள்வி & பதில்' : 'FAQ'}
            theme="navy"
            align="center"
          />

          <div className="space-y-4">
            {(faqData.items || []).map((faqItem: any, idx: number) => (
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
