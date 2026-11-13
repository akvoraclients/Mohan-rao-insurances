import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SupportedLanguage } from '@/types';
import { getDictionary } from '@/lib/dictionary';
import { REGULATORY_DISCLAIMER, BUSINESS_INFO, GOOGLE_MAPS_OFFICE_URL } from '@/lib/constants';
import { generateSeoMetadata } from '@/lib/seo';
import { Container } from '@/components/common/Container';
import { SectionHeader } from '@/components/common/SectionHeader';
import { OwnerProfile } from '@/components/common/OwnerProfile';
import { RecognitionGallery } from '@/components/common/RecognitionGallery';
import { ExperienceHighlight } from '@/components/common/ExperienceHighlight';
import { JsonLd } from '@/components/common/JsonLd';
import { hasVerifiedAwards } from '@/lib/recognition';
import { Shield, ShieldCheck, HeartHandshake, MapPin, Award, ExternalLink, Building2, Phone, MessageCircle } from 'lucide-react';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolved = await params;
  const lang: SupportedLanguage = resolved.lang === 'ta' ? 'ta' : 'en';

  const title =
    lang === 'ta'
      ? `திரு. எம். மோகன் ராவ் பற்றி | காப்பீட்டு ஆலோசகர் ஓசூர்`
      : `About M. Mohan Rao | Insurance Advisor in Hosur`;

  const description =
    lang === 'ta'
      ? 'ஓசூரில் செயல்படும் காப்பீட்டு ஆலோசகர் திரு. எம். மோகன் ராவ் அவர்களின் தொழில்முறை பின்னணி, அனுபவம் மற்றும் ஆயுள் (LIC), மருத்துவம் (Star Health), மற்றும் பொதுக் காப்பீடு (United India) வழிகாட்டல் நெறிகள்.'
      : 'Learn about M. Mohan Rao, Insurance Advisor in Hosur, Tamil Nadu. Professional guidance across Life Insurance (LIC Chairman’s Club Member & MDRT), Health Insurance (Star Health), and General Insurance (United India).';

  return generateSeoMetadata(lang, title, description);
}

export default async function AboutPage({ params }: PageProps) {
  const resolvedParams = await params;
  const lang: SupportedLanguage = resolvedParams.lang === 'ta' ? 'ta' : 'en';
  const isTa = lang === 'ta';
  const dict = getDictionary(lang);
  const about = dict.about || {};

  return (
    <Container size="narrow" className="py-8 sm:py-10 md:py-12">
      <JsonLd lang={lang} pageType="about" includeFaq={false} />
      <SectionHeader
        title={about.title || (isTa ? 'எம். மோகன் ராவ் பற்றி' : 'About M. Mohan Rao')}
        subtitle={
          about.subtitle ||
          (isTa
            ? 'காப்பீட்டு ஆலோசகர் ஓசூர் • ஆயுள், மருத்துவம் & பொதுக் காப்பீடு.'
            : 'Insurance Advisor in Hosur • Life, Health & General Insurance.')
        }
        badge={about.badge || (isTa ? 'ஆலோசகர் சுயவிவரம்' : 'Advisor Profile')}
        theme="navy"
      />

      <div className="space-y-8 sm:space-y-10">
        {/* Professional Advisor Profile Card */}
        <OwnerProfile lang={lang} variant="card" showBio={false} />

        {/* Factual Professional Narrative */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
          <div className="border-b border-slate-100 pb-3 mb-2 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" aria-hidden="true" />
            <h2 className="text-base sm:text-lg font-bold text-brand-navy">
              {about.introTitle ||
                (isTa
                  ? 'அர்ப்பணிப்புமிக்க காப்பீட்டு வழிகாட்டல் & வாடிக்கையாளர் சேவை'
                  : 'Dedicated Insurance Guidance & Client Commitment')}
            </h2>
          </div>

          <p>
            {about.bioP1 ||
              (isTa
                ? 'திரு. எம். மோகன் ராவ் அவர்கள் தமிழ்நாட்டின் ஓசூரில் செயல்படும் ஒரு தொழில்முறை காப்பீட்டு ஆலோசகர் ஆவார். இவர் ஆயுள் காப்பீடு (இந்திய ஆயுள் காப்பீட்டுக் கழகம் - LIC), மருத்துவக் காப்பீடு (ஸ்டார் ஹெல்த் அண்ட் அலைட் இன்சூரன்ஸ் நிறுவனம்), மற்றும் பொதுக் காப்பீடு (யுனைடெட் இந்தியா இன்சூரன்ஸ் நிறுவனம்) ஆகியவற்றிற்கு வழிகாட்டல் மற்றும் பாலிசி சேவைகளை வழங்குகிறார்.'
                : 'M. Mohan Rao is a professional Insurance Advisor based in Hosur, Tamil Nadu. He provides dedicated insurance consultation and policyholder servicing across Life Insurance (Life Insurance Corporation of India - LIC), Health Insurance (Star Health and Allied Insurance Company Limited), and General Insurance (United India Insurance Company Limited).')}
          </p>

          <p>
            {about.bioP2 ||
              (isTa
                ? "எல்.ஐ.சி ஆயுள் காப்பீட்டு ஆலோசனையில், இவர் எல்.ஐ.சி-யின் மிக உயர்ந்த கௌரவ மன்றமான 'தலைவர் மன்ற உறுப்பினர்' (Chairman's Club Member for Agents) தகுதியையும், உலகளாவிய நிதி நிபுணர்களின் முதன்மைச் சங்கமான MDRT (Million Dollar Round Table) உறுப்பினர் தகுதியையும் பெற்றுள்ளார் (LIC முகவர் குறியீடு: 0195676N)."
                : "In his life insurance advisory with LIC, he holds the prestigious distinctions of being an LIC Chairman's Club Member for Agents—LIC's premier recognition tier for performance and client trust—as well as an MDRT (Million Dollar Round Table) Member, representing the highest standards of financial professionals globally (LIC Agency Code: 0195676N).")}
          </p>

          <p>
            {about.bioP3 ||
              (isTa
                ? 'திரு. எம். மோகன் ராவ் அவர்களின் முக்கிய நோக்கம் வாடிக்கையாளர்களுக்கு வெளிப்படையான, நேர்மையான வழிகாட்டலை வழங்குவதாகும். குடும்பத்தின் மருத்துவத் தேவைகள், ஆயுள் வருமானப் பாதுகாப்பு, குழந்தைகளின் உயர்கல்வி, மற்றும் வாகன/வணிக சொத்துக்களுக்கு ஏற்ற அதிகாரப்பூர்வ காப்பீட்டுத் திட்டங்களை இவர் பரிந்துரைக்கிறார்.'
                : 'M. Mohan Rao’s philosophy centers on transparent, client-first advisory. Rather than pushing generic policies, he carefully analyzes family medical requirements, income protection needs, liabilities, vehicle assets, and future financial milestones to recommend verified insurance solutions from appropriate companies.')}
          </p>

          <p>
            {about.bioP4 ||
              (isTa
                ? 'புதிய பாலிசி ஆலோசனை மட்டுமின்றி, பாலிசி புதுப்பித்தல், ஸ்டார் ஹெல்த் பணமில்லா மருத்துவமனை வழிகாட்டல், யுனைடெட் இந்தியா மோட்டார் விபத்து க்ளெய்ம் உதவி, மற்றும் எல்.ஐ.சி முதிர்வு/இறப்பு க்ளெய்ம் ஆவண ஆதரவு போன்ற அனைத்து சேவைகளிலும் வாடிக்கையாளர்களுக்கு தொடர்ந்து துணை நிற்கிறார்.'
                : 'Beyond initial policy consultation, clients receive lifelong policy servicing including official online premium payment support, policy revival assistance, cashless hospitalisation guidance for Star Health, motor claim coordination for United India, and thorough claims documentation support for life and maturity claims.')}
          </p>
        </div>

        {/* Multi-Company Scope Card Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 text-center">
            <span className="text-xs font-bold text-blue-900 block mb-1">Life Insurance</span>
            <span className="text-sm font-black text-brand-navy block mb-1">LIC of India</span>
            <span className="text-[11px] text-slate-600 block">Agency Code: {BUSINESS_INFO.agencyCode}</span>
          </div>
          <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-center">
            <span className="text-xs font-bold text-emerald-900 block mb-1">Health Insurance</span>
            <span className="text-sm font-black text-brand-navy block mb-1">Star Health</span>
            <span className="text-[11px] text-slate-600 block">Cashless Hospital Network</span>
          </div>
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-center">
            <span className="text-xs font-bold text-amber-900 block mb-1">General Insurance</span>
            <span className="text-sm font-black text-brand-navy block mb-1">United India</span>
            <span className="text-[11px] text-slate-600 block">Motor & Property Cover</span>
          </div>
        </div>

        {/* Experience & Professional Distinctions */}
        <ExperienceHighlight lang={lang} variant="card" />

        {/* Verified Recognition (MDRT & Chairman's Club - specifically contextualized as LIC distinctions) */}
        {hasVerifiedAwards() && (
          <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="border-b border-slate-100 pb-3 mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">
                {isTa ? 'ஆயுள் காப்பீட்டு கௌரவங்கள்' : 'Life Insurance Honors'}
              </span>
              <h3 className="text-lg font-bold text-brand-navy">
                {isTa ? 'எல்.ஐ.சி தலைவர் மன்றம் & MDRT சர்வதேச அங்கீகாரம்' : "LIC Chairman's Club & International MDRT Recognition"}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                {isTa
                  ? 'இந்திய ஆயுள் காப்பீட்டுக் கழகத்தின் (LIC) ஆயுள் காப்பீட்டு வழிகாட்டலில் பெற்ற தொழில்முறை கௌரவங்கள்.'
                  : 'Distinctions achieved specifically in Life Insurance advisory with Life Insurance Corporation of India.'}
              </p>
            </div>
            <RecognitionGallery
              lang={lang}
              title=""
              subtitle=""
            />
          </div>
        )}

        {/* Office Location & Contact Card */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="flex items-start gap-3 mb-4">
            <MapPin className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <h3 className="text-base font-bold text-brand-navy">
                {isTa ? 'அலுவலக முகவரி & தொடர்பு' : 'Hosur Advisory Office & Contact'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                {BUSINESS_INFO.address}
              </p>
            </div>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-3">
            <a
              href="tel:+919500253993"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-amber-500 text-brand-navy hover:bg-amber-400 transition-colors whitespace-nowrap shrink-0 min-h-[40px]"
            >
              <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span className="whitespace-nowrap">+91 95002 53993</span>
            </a>

            <a
              href="https://wa.me/919443564017"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors whitespace-nowrap shrink-0 min-h-[40px]"
            >
              <MessageCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span className="whitespace-nowrap">WhatsApp: 94435 64017</span>
            </a>

            <a
              href={GOOGLE_MAPS_OFFICE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-semibold bg-slate-50 text-slate-700 border border-slate-200 hover:bg-slate-100 transition-colors whitespace-nowrap shrink-0 min-h-[40px]"
            >
              <span className="whitespace-nowrap">{isTa ? 'கூகுள் வரைபடம்' : 'View on Google Maps'}</span>
              <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Regulatory Disclaimer */}
        <div className="p-4 sm:p-5 rounded-2xl bg-brand-light border border-slate-200 text-xs text-slate-600 flex items-start gap-3">
          <Shield className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
          <p className="leading-relaxed">
            {REGULATORY_DISCLAIMER[lang]}
          </p>
        </div>
      </div>
    </Container>
  );
}
