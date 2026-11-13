import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SupportedLanguage } from '@/types';
import { getDictionary } from '@/lib/dictionary';
import { generateSeoMetadata } from '@/lib/seo';
import { BUSINESS_INFO } from '@/lib/constants';
import { Container } from '@/components/common/Container';
import { SectionHeader } from '@/components/common/SectionHeader';
import { AwardsGallery } from '@/components/common/AwardsGallery';
import { JsonLd } from '@/components/common/JsonLd';
import { Award, ShieldCheck, MapPin, Phone, MessageCircle, Sparkles } from 'lucide-react';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ta' }];
}

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolved = await params;
  const lang: SupportedLanguage = resolved.lang === 'ta' ? 'ta' : 'en';

  const title =
    lang === 'ta'
      ? 'விருதுகள் & சாதனைகள் | திரு. எம். மோகன் ராவ் – எல்.ஐ.சி நிதி ஆலோசகர் ஓசூர்'
      : 'Awards & Achievements | M. Mohan Rao – LIC Financial Advisor in Hosur';

  const description =
    lang === 'ta'
      ? 'திரு. எம். மோகன் ராவ் (எல்.ஐ.சி முகவர் குறியீடு: 0195676N, தலைவர் மன்ற உறுப்பினர் & MDRT) அவர்களின் 21 தொழில்முறை அங்கீகாரங்கள், விருதுகள் மற்றும் மைல்கற்களின் ஆவணப் படத்தொகுப்பு.'
      : 'Explore the 21 documented awards, recognitions, and professional milestones of M. Mohan Rao, Chairman’s Club Member & MDRT LIC Financial Advisor in Hosur, Tamil Nadu (Agency Code: 0195676N).';

  return generateSeoMetadata(lang, title, description);
}

export default async function AwardsPage({ params }: PageProps) {
  const resolvedParams = await params;
  const lang: SupportedLanguage = resolvedParams.lang === 'ta' ? 'ta' : 'en';
  const isTa = lang === 'ta';
  const dict = getDictionary(lang);
  const awardsDict = dict.awards || {};

  return (
    <Container className="py-8 sm:py-10 md:py-12">
      <JsonLd lang={lang} pageType="awards" includeFaq={false} />

      {/* Page Header */}
      <SectionHeader
        title={awardsDict.title || (isTa ? 'விருதுகள் & சாதனைகள்' : 'Awards & Achievements')}
        subtitle={
          awardsDict.subtitle ||
          (isTa
            ? 'எல்.ஐ.சி நிதி ஆலோசகர் திரு. எம். மோகன் ராவ் அவர்களின் தொழில்முறை அங்கீகாரங்கள் மற்றும் சாதனைகளின் தொகுப்பு.'
            : 'Professional recognitions, honors, and milestone achievements of M. Mohan Rao, LIC Financial Advisor in Hosur.')
        }
        badge={awardsDict.badge || (isTa ? 'சாதனைத் தொகுப்பு' : 'Recognition Portfolio')}
        theme="navy"
      />

      {/* Advisor Credential Summary Card */}
      <div className="max-w-4xl mx-auto -mt-4 mb-8 sm:mb-10 p-4 sm:p-6 bg-gradient-to-r from-brand-navy-50 via-amber-50/50 to-brand-navy-50 border border-brand-navy-200/80 rounded-2xl shadow-2xs">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs">
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-amber-300 text-amber-900 font-bold shadow-2xs">
                <Award className="w-3.5 h-3.5 text-amber-600" aria-hidden="true" />
                <span>Chairman’s Club Member</span>
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white border border-amber-300 text-amber-900 font-bold shadow-2xs">
                <Award className="w-3.5 h-3.5 text-amber-600" aria-hidden="true" />
                <span>MDRT Member</span>
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-navy text-white font-bold text-[11px]">
                <ShieldCheck className="w-3 h-3 text-amber-400" aria-hidden="true" />
                <span>Agency Code: {BUSINESS_INFO.agencyCode}</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 font-medium pt-1">
              {awardsDict.introSubtitle ||
                (isTa
                  ? 'ஆயுள் காப்பீட்டு வழிகாட்டல் மற்றும் வாடிக்கையாளர் சேவையில் சிறந்து விளங்கியதற்காக திரு. எம். மோகன் ராவ் பெற்ற 21 தொழில்முறை அங்கீகாரங்கள் மற்றும் கௌரவங்களின் ஆவணத் தொகுப்பு.'
                  : "A documented photographic archive of 21 verified recognitions, award felicitations, and milestone moments from M. Mohan Rao's life insurance advisory career.")}
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-semibold bg-white text-slate-700 border border-slate-200">
              <MapPin className="w-3.5 h-3.5 text-amber-600" aria-hidden="true" />
              <span>Hosur, Tamil Nadu</span>
            </span>
          </div>
        </div>
      </div>

      {/* 21-Image Full Gallery with Interactive Lightbox */}
      <AwardsGallery lang={lang} mode="full" hideHeader={true} />

      {/* Bottom Consultation Banner */}
      <div className="mt-12 sm:mt-16 max-w-4xl mx-auto p-6 sm:p-8 bg-brand-navy rounded-3xl text-white text-center shadow-lg relative overflow-hidden">
        <div className="relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-amber-300 border border-white/15">
            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{isTa ? 'நேரடி எல்.ஐ.சி ஆலோசனை' : 'Direct LIC Consultation'}</span>
          </span>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight">
            {isTa
              ? 'உங்கள் குடும்பத்திற்கான சிறந்த காப்பீட்டுத் திட்டத்தை தேர்வு செய்யுங்கள்'
              : 'Protect Your Family’s Future with Proven LIC Advisory'}
          </h3>
          <p className="text-xs sm:text-sm md:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
            {isTa
              ? 'டேர்ம் இன்சூரன்ஸ், குழந்தைகளின் உயர்கல்வி சேமிப்பு, ஓய்வூதியத் திட்டங்கள் அல்லது தற்போதைய பாலிசி சேவைகளுக்கு திரு. எம். மோகன் ராவ் அவர்களை நேரடியாகத் தொடர்பு கொள்ளவும்.'
              : 'Consult directly with M. Mohan Rao for tailored family life cover, children’s higher education planning, retirement pension, or policy servicing in Hosur.'}
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:+919500253993"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold bg-amber-500 hover:bg-amber-400 text-brand-navy shadow-sm transition-colors"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>{isTa ? 'அழைக்க: +91 95002 53993' : 'Call: +91 95002 53993'}</span>
            </a>
            <a
              href={`https://wa.me/919443564017?text=${encodeURIComponent(
                isTa
                  ? 'வணக்கம் திரு. எம். மோகன் ராவ், விருதுகள் & சாதனைகள் பக்கத்தை பார்த்தேன். எல்.ஐ.சி பாலிசி குறித்து ஆலோசனை பெற விரும்புகிறேன்.'
                  : 'Hello Mr. M. Mohan Rao, I visited your Awards & Achievements page and would like to enquire about LIC life insurance plans.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition-colors"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>{isTa ? 'வாட்ஸ்அப் செய்தி' : 'WhatsApp Enquiry'}</span>
            </a>
            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-colors"
            >
              <span>{isTa ? 'தொடர்பு படிவம்' : 'Contact Form'}</span>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
