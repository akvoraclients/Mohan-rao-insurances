import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SupportedLanguage } from '@/types';
import { getDictionary } from '@/lib/dictionary';
import { generateSeoMetadata } from '@/lib/seo';
import {
  BUSINESS_INFO,
  REGULATORY_DISCLAIMER,
  LIC_SERVICE_PORTFOLIO,
  WHATSAPP_MESSAGES,
} from '@/lib/constants';
import { Container } from '@/components/common/Container';
import { SectionHeader } from '@/components/common/SectionHeader';
import { Button } from '@/components/common/Button';
import { OwnerProfile } from '@/components/common/OwnerProfile';
import { ExperienceHighlight } from '@/components/common/ExperienceHighlight';
import { RecognitionGallery } from '@/components/common/RecognitionGallery';
import { InsuranceEnquiryForm } from '@/components/forms/InsuranceEnquiryForm';
import { hasVerifiedAwards } from '@/lib/recognition';
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
  FileCheck2,
  Check,
} from 'lucide-react';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolved = await params;
  const lang: SupportedLanguage = resolved.lang === 'ta' ? 'ta' : 'en';

  const title =
    lang === 'ta'
      ? `எல்.ஐ.சி ஆயுள் காப்பீட்டு சேவைகள் | திரு. எம். மோகன் ராவ்`
      : `LIC Life Insurance Services | M. Mohan Rao`;

  const description =
    lang === 'ta'
      ? 'எல்.ஐ.சி டேர்ம் இன்சூரன்ஸ், சேமிப்பு, குழந்தைகள் கல்வி, ஓய்வூதியத் திட்டங்கள் மற்றும் பாலிசிதாரர் சேவை. திரு. எம். மோகன் ராவ், தலைவர் மன்ற உறுப்பினர் (LIC முகவர் குறியீடு: 0195676N).'
      : 'Comprehensive LIC life insurance guidance, term protection, savings, retirement annuities, and policyholder servicing by M. Mohan Rao (Agency Code: 0195676N).';

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

  const whatsappMessage = encodeURIComponent(
    WHATSAPP_MESSAGES[lang]?.insurance ||
      (isTa
        ? 'வணக்கம் திரு. எம். மோகன் ராவ், எல்.ஐ.சி ஆயுள் காப்பீட்டு பாலிசிகள் குறித்து ஆலோசனை பெற விரும்புகிறேன்.'
        : 'Hello M. Mohan Rao, I would like to enquire about LIC life insurance policies.')
  );
  const whatsappUrl = `https://wa.me/919443564017?text=${whatsappMessage}`;

  return (
    <div className="flex flex-col gap-10 md:gap-14 pb-12 md:pb-16">
      {/* =========================================================================
          SECTION 1 – INSURANCE HERO
          ========================================================================= */}
      <section className="relative overflow-hidden py-8 sm:py-12 bg-gradient-to-b from-brand-navy-50/80 via-white to-amber-50/20 border-b border-slate-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Heading, description, scope, CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Credentials Badge */}
              <div className="inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-amber-300 shadow-xs text-xs font-bold text-brand-navy mb-4">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" aria-hidden="true" />
                <span className="text-amber-800">
                  {hero.badge || (isTa ? 'அங்கீகரிக்கப்பட்ட எல்.ஐ.சி வழிகாட்டல்' : 'Authorized LIC Advisory')}
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-brand-navy">Code: {BUSINESS_INFO.agencyCode}</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-[1.15] mb-4">
                {hero.heading || (isTa ? 'உங்களுக்காக வடிவமைக்கப்பட்ட தொழில்முறை ஆயுள் காப்பீட்டு ஆலோசனை' : 'Professional Life Insurance Guidance Tailored for You')}
              </h1>

              {/* Supporting Description */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal mb-6 max-w-2xl">
                {hero.description ||
                  (isTa
                    ? 'திரு. எம். மோகன் ராவ் அவர்கள் எல்.ஐ.சி ஆயுள் காப்பீட்டு பாலிசிகள் மூலம் உங்கள் குடும்பத்திற்கு வலுவான நிதிப் பாதுகாப்பை அமைக்க உதவுகிறார்.'
                    : 'M. Mohan Rao provides personalized consultation for LIC life insurance solutions, helping you build solid financial protection for your loved ones.')}
              </p>

              {/* Service Scope Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs font-medium text-slate-700 mb-6 shadow-2xs">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0" aria-hidden="true" />
                <span>
                  <strong>{isTa ? 'அலுவலகம்:' : 'Office:'}</strong> {BUSINESS_INFO.address}
                </span>
              </div>

              {/* Primary & Secondary CTAs */}
              <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Button
                  href="#enquiry"
                  variant="primary"
                  size="lg"
                  icon={<Shield className="w-4 h-4 text-amber-300" aria-hidden="true" />}
                  className="sm:w-auto"
                >
                  {isTa ? 'ஆலோசனை பெற' : 'Request Consultation'}
                </Button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-emerald-600 text-white hover:bg-emerald-700 shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-white" aria-hidden="true" />
                  <span>WhatsApp 94435 64017</span>
                </a>

                <Button
                  href={`/${lang}/contact`}
                  variant="outline"
                  size="lg"
                  className="sm:w-auto"
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
          SECTION 2 – CORE LIC POLICY CATEGORIES
          ========================================================================= */}
      <section className="relative">
        <Container>
          <SectionHeader
            title={isTa ? 'எல்.ஐ.சி ஆயுள் காப்பீட்டு தீர்வுகள்' : 'LIC Life Insurance Portfolio'}
            subtitle={
              isTa
                ? 'உங்கள் வாழ்க்கையின் ஒவ்வொரு முக்கிய கட்டத்திற்கும் ஏற்ற அதிகாரப்பூர்வ எல்.ஐ.சி திட்டங்கள்.'
                : 'Tailored solutions designed to safeguard your family’s financial future across life milestones.'
            }
            badge={isTa ? 'திட்டப் பிரிவுகள்' : 'Policy Portfolio'}
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
                  className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-7 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-brand-navy-50 border border-brand-navy-200 flex items-center justify-center mb-4 text-brand-navy">
                      {service.id === 'term-assurance' && <Shield className="w-6 h-6 text-amber-600" aria-hidden="true" />}
                      {service.id === 'endowment-savings' && <PiggyBank className="w-6 h-6 text-amber-600" aria-hidden="true" />}
                      {service.id === 'children-education' && <GraduationCap className="w-6 h-6 text-amber-600" aria-hidden="true" />}
                      {service.id === 'retirement-pension' && <Clock className="w-6 h-6 text-amber-600" aria-hidden="true" />}
                      {service.id === 'money-back' && <RefreshCw className="w-6 h-6 text-amber-600" aria-hidden="true" />}
                      {service.id === 'policyholder-servicing' && <FileText className="w-6 h-6 text-amber-600" aria-hidden="true" />}
                    </div>

                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      {serviceTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                      {serviceDesc}
                    </p>
                  </div>

                  <div>
                    <ul className="space-y-2 text-xs text-slate-700 border-t border-slate-100 pt-3 mb-5">
                      {serviceFeatures.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" aria-hidden="true" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    <Button href="#enquiry" variant="outline" size="sm" fullWidth>
                      {isTa ? 'ஆலோசனை கேட்க' : 'Enquire About This Plan'}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* =========================================================================
          SECTION 3 – HOW M. MOHAN RAO ASSISTS CLIENTS
          ========================================================================= */}
      <section className="relative py-10 sm:py-12 bg-white border-y border-slate-200">
        <Container>
          <SectionHeader
            title={services.title || (isTa ? 'திரு. எம். மோகன் ராவ் எவ்வாறு உதவுகிறார்?' : 'How M. Mohan Rao Assists Clients')}
            subtitle={
              services.subtitle ||
              (isTa
                ? 'உங்கள் ஆயுள் காப்பீட்டுப் பயணத்தின் ஒவ்வொரு கட்டத்திலும் வெளிப்படையான வழிகாட்டல்.'
                : 'Personalized, ethical support throughout your life insurance journey.')
            }
            badge={services.badge || (isTa ? 'சேவை வரம்பு' : 'Scope of Assistance')}
            theme="navy"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(services.items || []).map((item: any, idx: number) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-brand-light border border-slate-200 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-4 text-brand-navy">
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
          SECTION 4 – RECOGNITION GALLERY (MDRT & CHAIRMAN'S CLUB)
          ========================================================================= */}
      {hasVerifiedAwards() && (
        <section className="relative">
          <Container>
            <RecognitionGallery
              lang={lang}
              title={isTa ? 'நிறுவன அங்கீகாரங்கள் & கௌரவங்கள்' : 'Honors & Professional Recognition'}
              subtitle={
                isTa
                  ? 'எல்.ஐ.சி தலைவர் மன்றம் மற்றும் சர்வதேச MDRT அங்கீகாரங்கள்.'
                  : 'Distinctions reflecting high standards of financial professionalism and policyholder commitment.'
              }
            />
          </Container>
        </section>
      )}

      {/* =========================================================================
          SECTION 5 – CONSULTATION ENQUIRY FORM
          ========================================================================= */}
      <section className="relative" id="enquiry">
        <Container size="narrow">
          <SectionHeader
            title={isTa ? 'எல்.ஐ.சி ஆயுள் காப்பீட்டு ஆலோசனை பெற' : 'Request a Life Insurance Consultation'}
            subtitle={
              isTa
                ? 'உங்கள் தகவல்களை உள்ளிடவும். திரு. எம். மோகன் ராவ் அவர்கள் தங்களை நேரடியாக தொடர்புகொள்வார்.'
                : 'Send your requirements to M. Mohan Rao for personalized life insurance advice.'
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
                ? 'எல்.ஐ.சி பாலிசிகள் மற்றும் ஆலோசகர் சேவைகள் பற்றிய தெளிவான பதில்கள்.'
                : 'Factual, straightforward answers about life insurance policies and advisor servicing.')
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
