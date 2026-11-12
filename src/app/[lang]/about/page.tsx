import React from 'react';
import type { Metadata } from 'next';
import { SupportedLanguage } from '@/types';
import { getDictionary } from '@/lib/dictionary';
import { REGULATORY_DISCLAIMER, BUSINESS_INFO, GOOGLE_MAPS_OFFICE_URL } from '@/lib/constants';
import { generateSeoMetadata } from '@/lib/seo';
import { Container } from '@/components/common/Container';
import { SectionHeader } from '@/components/common/SectionHeader';
import { OwnerProfile } from '@/components/common/OwnerProfile';
import { RecognitionGallery } from '@/components/common/RecognitionGallery';
import { ExperienceHighlight } from '@/components/common/ExperienceHighlight';
import { hasVerifiedAwards } from '@/lib/recognition';
import { Shield, ShieldCheck, HeartHandshake, MapPin, Award, ExternalLink } from 'lucide-react';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolved = await params;
  const lang: SupportedLanguage = resolved.lang === 'ta' ? 'ta' : 'en';

  const title =
    lang === 'ta'
      ? `திரு. எம். மோகன் ராவ் பற்றி | எல்.ஐ.சி நிதி ஆலோசகர்`
      : `About M. Mohan Rao | LIC Financial Advisor`;

  const description =
    lang === 'ta'
      ? 'திரு. எம். மோகன் ராவ் - எல்.ஐ.சி தலைவர் மன்ற உறுப்பினர் & MDRT நிதி ஆலோசகர் (முகவர் குறியீடு: 0195676N). குடும்ப நிதிப் பாதுகாப்பு, டேர்ம் இன்சூரன்ஸ் மற்றும் பாலிசிதாரர் சேவை வழிகாட்டல்.'
      : 'M. Mohan Rao – Chairman’s Club Member & MDRT Financial Advisor with Life Insurance Corporation of India (Agency Code: 0195676N), based in Hosur, Tamil Nadu.';

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
      <SectionHeader
        title={about.title || (isTa ? 'எம். மோகன் ராவ் பற்றி' : 'About M. Mohan Rao')}
        subtitle={
          about.subtitle ||
          (isTa
            ? 'தலைவர் மன்ற உறுப்பினர் & MDRT எல்.ஐ.சி நிதி ஆலோசகர்.'
            : "Chairman's Club Member & MDRT LIC Financial Advisor.")
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
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" aria-hidden="true" />
            <h2 className="text-base sm:text-lg font-bold text-brand-navy">
              {about.introTitle || (isTa ? 'தொழில்முறை ஆயுள் காப்பீட்டு வழிகாட்டல் & வாடிக்கையாளர் அர்ப்பணிப்பு' : 'Professional Life Insurance Guidance & Client Commitment')}
            </h2>
          </div>

          <p>
            {about.bioP1 ||
              (isTa
                ? 'திரு. எம். மோகன் ராவ் அவர்கள் இந்திய ஆயுள் காப்பீட்டுக் கழகத்தின் (LIC) அங்கீகரிக்கப்பட்ட முகவர் மற்றும் நிதி ஆலோசகர் ஆவார் (முகவர் குறியீடு: 0195676N). இவர் தமிழ்நாட்டின் ஓசூரில் தனது அலுவலகத்தைக் கொண்டு செயல்பட்டு வருகிறார்.'
                : 'M. Mohan Rao is an authorized Life Insurance Corporation of India (LIC) Agent and Financial Advisor based in Hosur, Tamil Nadu (Agency Code: 0195676N).')}
          </p>

          <p>
            {about.bioP2 ||
              (isTa
                ? "இவர் எல்.ஐ.சி-யின் மிக உயர்ந்த கௌரவ மன்றமான 'தலைவர் மன்ற உறுப்பினர்' (Chairman's Club Member for Agents) தகுதியையும், உலகளாவிய நிதி நிபுணர்களின் முதன்மைச் சங்கமான MDRT (Million Dollar Round Table) உறுப்பினர் தகுதியையும் பெற்றுள்ளார்."
                : "He holds the prestigious distinction of being a Chairman's Club Member for Agents—LIC's highest recognition tier for exceptional performance and customer servicing—as well as an MDRT (Million Dollar Round Table) Member, representing the premier standard of financial professionals globally.")}
          </p>

          <p>
            {about.bioP3 ||
              (isTa
                ? 'திரு. எம். மோகன் ராவ் அவர்களின் முக்கிய நோக்கம் வாடிக்கையாளர்களுக்கு வெளிப்படையான, நேர்மையான வழிகாட்டலை வழங்குவதாகும். குடும்ப வருமானப் பாதுகாப்பு, குழந்தைகளின் உயர்கல்வி நிதி, மற்றும் பணி ஓய்வுக்கால ஓய்வூதியம் ஆகியவற்றிற்கு ஏற்ற அதிகாரப்பூர்வ எல்.ஐ.சி திட்டங்களை இவர் பரிந்துரைக்கிறார்.'
                : 'M. Mohan Rao’s philosophy centers on transparent, client-first advisory. Rather than pushing generic policies, he carefully analyzes family needs, liabilities, income replacement requirements, and future milestones to recommend verified LIC life insurance solutions.')}
          </p>

          <p>
            {about.bioP4 ||
              (isTa
                ? 'புதிய பாலிசி ஆலோசனை மட்டுமின்றி, பாலிசி புதுப்பித்தல், ஆன்லைன் கட்டண வழிகாட்டல், பாலிசி லோன் பெறுதல், மற்றும் முதிர்வு/இறப்பு க்ளெய்ம் ஆவண ஆதரவு போன்ற அனைத்து சேவைகளிலும் பாலிசிதாரர்களுக்கு தொடர்ந்து துணை நிற்கிறார்.'
                : 'Beyond new policy consultation, clients receive lifelong policy servicing including official online premium payment support, policy revival assistance, loan against policy guidance, and compassionate, thorough claims documentation support for death and maturity claims.')}
          </p>
        </div>

        {/* Experience & Core Advisory Pillars */}
        <ExperienceHighlight lang={lang} variant="card" />

        {/* Verified Company Recognition Gallery */}
        {hasVerifiedAwards() && (
          <div id="recognition">
            <RecognitionGallery
              lang={lang}
              title={isTa ? 'நிறுவன விருதுகள் & அங்கீகாரங்கள்' : 'Verified Honors & Recognition'}
              subtitle={
                isTa
                  ? 'எல்.ஐ.சி தலைவர் மன்றம் மற்றும் சர்வதேச MDRT அங்கீகாரங்கள்.'
                  : 'Distinctions honoring outstanding performance, client trust, and advisory excellence.'
              }
            />
          </div>
        )}

        {/* Verified Office Location */}
        <div className="rounded-3xl bg-brand-navy text-white p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-amber-300 border border-white/20 mb-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
                <span>{isTa ? 'அலுவலக முகவரி' : 'Public Office Location'}</span>
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                {BUSINESS_INFO.address}
              </h3>
              <p className="text-xs text-slate-300">
                {isTa ? 'ஓசூர், தமிழ்நாடு, இந்தியா • முகவர் குறியீடு: 0195676N' : 'Hosur, Tamil Nadu, India • Agency Code: 0195676N'}
              </p>
            </div>

            <a
              href={GOOGLE_MAPS_OFFICE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-brand-navy font-bold text-xs transition-colors shrink-0"
            >
              <span>{isTa ? 'கூகுள் வரைபடம்' : 'Open in Google Maps'}</span>
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Regulatory & Intermediary Principles */}
        <div className="p-5 sm:p-6 rounded-2xl bg-amber-50/60 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
          <Shield className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
          <div className="space-y-1">
            <h4 className="font-bold text-brand-navy">
              {isTa ? 'ஒழுங்குமுறை மற்றும் சட்டப்பூர்வ வெளிப்பாடு' : 'Regulatory & Independent Intermediary Notice'}
            </h4>
            <p className="leading-relaxed text-slate-700">
              {REGULATORY_DISCLAIMER[lang]}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
