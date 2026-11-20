import React from 'react';
import type { Metadata } from 'next';
import { SupportedLanguage } from '@/types';
import { getDictionary } from '@/lib/dictionary';
import {
  BUSINESS_INFO,
  GOOGLE_MAPS_OFFICE_URL,
  WHATSAPP_MESSAGES,
} from '@/lib/constants';
import { generateSeoMetadata } from '@/lib/seo';
import { Container } from '@/components/common/Container';
import { SectionHeader } from '@/components/common/SectionHeader';
import { OwnerProfile } from '@/components/common/OwnerProfile';
import { EnquiryForm } from '@/components/forms/EnquiryForm';
import { GoogleMapEmbed } from '@/components/common/GoogleMapEmbed';
import { JsonLd } from '@/components/common/JsonLd';
import { MapPin, Phone, Mail, MessageCircle, ExternalLink, ShieldCheck } from 'lucide-react';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolved = await params;
  const lang: SupportedLanguage = resolved.lang === 'ta' ? 'ta' : 'en';

  const title =
    lang === 'ta'
      ? `தொடர்புக்கு | திரு. எம். மோகன் ராவ் – காப்பீட்டு ஆலோசகர் ஓசூர்`
      : `Contact Insurance Advisor in Hosur | M. Mohan Rao`;

  const description =
    lang === 'ta'
      ? 'ஓசூரில் உள்ள காப்பீட்டு ஆலோசகர் திரு. எம். மோகன் ராவ் அவர்களை ஆயுள் (LIC), மருத்துவம் (Star Health), மற்றும் பொதுக் காப்பீடு (United India) ஆலோசனைகளுக்கு தொலைபேசி (+91 95002 53993), வாட்ஸ்அப் (+91 94435 64017) அல்லது பை-பாஸ் ரோடு அலுவலகத்தில் தொடர்பு கொள்ளலாம்.'
      : 'Contact M. Mohan Rao, Insurance Advisor in Hosur for Life (LIC), Health (Star Health), and General Insurance (United India) via phone (+91 95002 53993), WhatsApp (+91 94435 64017), or at Bye-Pass Road, Hosur.';

  return generateSeoMetadata(lang, title, description);
}

export default async function ContactPage({ params }: PageProps) {
  const resolvedParams = await params;
  const lang: SupportedLanguage = resolvedParams.lang === 'ta' ? 'ta' : 'en';
  const isTa = lang === 'ta';
  const dict = getDictionary(lang);
  const contactText = dict.contact || {};

  const whatsappMessage = encodeURIComponent(
    WHATSAPP_MESSAGES[lang]?.general ||
      (isTa
        ? 'வணக்கம் திரு. எம். மோகன் ராவ், உங்கள் இணையதளம் மூலம் தொடர்பு கொள்கிறேன்.'
        : 'Hello M. Mohan Rao, I am contacting you through your insurance advisor website.')
  );
  const whatsappUrl = `https://wa.me/919443564017?text=${whatsappMessage}`;

  return (
    <Container className="py-8 sm:py-10 md:py-12">
      <JsonLd lang={lang} pageType="contact" includeFaq={false} />
      <SectionHeader
        title={contactText.title || (isTa ? 'தொடர்பு கொள்ள' : 'Contact M. Mohan Rao')}
        subtitle={
          contactText.subtitle ||
          (isTa
            ? 'ஆயுள், மருத்துவ மற்றும் பொதுக் காப்பீட்டு ஆலோசனை மற்றும் பாலிசி சேவைகளுக்கு தொடர்பு கொள்ளவும்.'
            : 'Reach out directly by phone, WhatsApp, or our online form for personalized life, health, and general insurance advice.')
        }
        badge={isTa ? 'தொடர்பு' : 'Contact'}
        theme="navy"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Contact Info & Direct Channels */}
        <div className="space-y-6">
          {/* Advisor Introduction Profile */}
          <OwnerProfile lang={lang} variant="hero" />

          {/* Quick Direct Actions Card */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" aria-hidden="true" />
              <h2 className="text-lg font-bold text-brand-navy">
                {isTa ? 'நேரடி தொடர்பு வழிகள்' : 'Direct Communication Channels'}
              </h2>
            </div>

            <p className="text-xs text-slate-600 mb-5 leading-relaxed">
              {isTa
                ? 'ஆயுள் (LIC), மருத்துவம் (Star Health), மற்றும் பொதுக் காப்பீடு (United India) ஆலோசனைகள் மற்றும் பாலிசி சேவைகளுக்கு திரு. எம். மோகன் ராவ் அவர்களை நேரடியாக தொடர்பு கொள்ளவும்.'
                : 'Connect directly with M. Mohan Rao for prompt life, health, and general insurance advice and policy assistance.'}
            </p>

            <div className="space-y-3">
              {/* Primary Call Action */}
              <a
                href="tel:+919500253993"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-brand-navy text-white hover:bg-brand-navy-900 transition-colors shadow-xs"
                aria-label="Call M. Mohan Rao at 95002 53993"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-amber-300" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-300 block">{isTa ? 'முதன்மை தொலைபேசி' : 'Primary Mobile'}</span>
                    <span className="text-sm font-bold text-white tracking-wide">+91 95002 53993</span>
                  </div>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-white/15 text-amber-300 whitespace-nowrap shrink-0">
                  {isTa ? 'அழைக்க' : 'Call'}
                </span>
              </a>

              {/* WhatsApp Action */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-xs"
                aria-label="Chat on WhatsApp with M. Mohan Rao at 94435 64017"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <span className="text-xs text-emerald-100 block">{isTa ? 'வாட்ஸ்அப்' : 'WhatsApp'}</span>
                    <span className="text-sm font-bold text-white tracking-wide whitespace-nowrap">+91 94435 64017</span>
                  </div>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-white/20 text-white whitespace-nowrap shrink-0">
                  {isTa ? 'அரட்டை' : 'Chat'}
                </span>
              </a>

              {/* Email Action */}
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center justify-between p-3.5 rounded-2xl bg-white border border-slate-200 text-slate-800 hover:bg-slate-50 transition-colors"
                aria-label={`Send email to ${BUSINESS_INFO.email}`}
              >
                <div className="flex items-center gap-3 truncate">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-brand-navy" aria-hidden="true" />
                  </div>
                  <div className="truncate">
                    <span className="text-xs text-slate-500 block">{isTa ? 'மின்னஞ்சல் முகவரி' : 'Email Address'}</span>
                    <span className="text-xs sm:text-sm font-bold text-brand-navy truncate block">
                      {BUSINESS_INFO.email}
                    </span>
                  </div>
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-slate-100 text-slate-600 shrink-0 whitespace-nowrap">
                  Email
                </span>
              </a>
            </div>
          </div>

          {/* Office Address & Location Card */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-4">
            <h2 className="text-lg font-bold text-brand-navy">
              {isTa ? 'அலுவலக முகவரி & தகவல்' : 'Office Location & Information'}
            </h2>

            <div className="flex items-start gap-3.5 text-xs sm:text-sm text-slate-700">
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-800 border border-amber-200 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-5 h-5 text-amber-600" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-slate-900">{isTa ? 'பொது அலுவலக முகவரி:' : 'Public Business Address:'}</p>
                <p className="text-slate-700 leading-relaxed mt-1 font-medium">
                  {BUSINESS_INFO.address}
                </p>
                <a
                  href={GOOGLE_MAPS_OFFICE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-amber-700 hover:text-amber-800 font-bold mt-2 whitespace-nowrap shrink-0"
                >
                  <span className="whitespace-nowrap">{isTa ? 'கூகுள் வரைபடத்தில் பார்க்க' : 'Open in Google Maps'}</span>
                  <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-4 flex flex-wrap items-center gap-3 text-xs text-slate-600">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-brand-navy-50 border border-brand-navy-200 text-brand-navy font-bold">
                <ShieldCheck className="w-4 h-4 text-amber-600" aria-hidden="true" />
                <span>LIC Agency Code: {BUSINESS_INFO.agencyCode}</span>
              </span>
              <span className="text-slate-400">•</span>
              <span className="font-semibold text-slate-700">{isTa ? 'திங்கள் – சனி: காலை 9:00 – இரவு 7:30' : 'Mon – Sat: 9:00 AM – 7:30 PM'}</span>
            </div>
          </div>
        </div>

        {/* Online General Consultation Form */}
        <div>
          <EnquiryForm lang={lang} defaultCategory="general" />
        </div>
      </div>

      {/* Verified Google Maps Office Location */}
      <div className="mt-10 sm:mt-12">
        <GoogleMapEmbed lang={lang} variant="full" />
      </div>
    </Container>
  );
}
