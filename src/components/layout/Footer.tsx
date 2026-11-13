import React from 'react';
import Link from 'next/link';
import { SupportedLanguage } from '@/types';
import { BUSINESS_INFO, BRAND_TAGLINE, REGULATORY_DISCLAIMER, GOOGLE_MAPS_OFFICE_URL } from '@/lib/constants';
import { Logo } from '@/components/common/Logo';
import { ShieldCheck, Phone, MapPin, Mail, MessageCircle, ExternalLink } from 'lucide-react';

interface FooterProps {
  lang: SupportedLanguage;
  dict: Record<string, any>;
}

export const Footer: React.FC<FooterProps> = ({ lang, dict }) => {
  const isTa = lang === 'ta';

  return (
    <footer className="bg-brand-charcoal text-slate-300 pt-10 pb-10 md:pt-14 md:pb-12 border-t border-brand-charcoal-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-brand-charcoal-700">
          {/* Brand Identity & Overview */}
          <div className="md:col-span-2 space-y-3">
            <Logo lang={lang} variant="footer" showTagline={false} />
            <p className="text-sm font-semibold text-amber-400">
              {BRAND_TAGLINE[lang]}
            </p>
            <p className="text-xs text-slate-300 leading-relaxed max-w-md">
              {isTa
                ? 'திரு. எம். மோகன் ராவ் – ஓசூரில் செயல்படும் காப்பீட்டு ஆலோசகர். ஆயுள் காப்பீடு (LIC), மருத்துவக் காப்பீடு (Star Health), மற்றும் பொதுக் காப்பீடு (United India Insurance) ஆகியவற்றிற்கான முழுமையான வழிகாட்டல் மற்றும் பாலிசிதாரர் சேவை.'
                : 'M. Mohan Rao – Insurance Advisor in Hosur, Tamil Nadu. Professional guidance and policyholder servicing across Life Insurance (LIC), Health Insurance (Star Health), and General Insurance (United India Insurance).'}
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
              <span className="px-2.5 py-1 rounded-md bg-brand-charcoal-800 text-amber-300 font-semibold border border-brand-charcoal-600">
                Life Insurance (LIC)
              </span>
              <span className="px-2.5 py-1 rounded-md bg-brand-charcoal-800 text-cyan-300 font-semibold border border-brand-charcoal-600">
                Health Insurance (Star Health)
              </span>
              <span className="px-2.5 py-1 rounded-md bg-brand-charcoal-800 text-amber-200 font-semibold border border-brand-charcoal-600">
                General Insurance (United India)
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              {dict.nav?.services || (isTa ? 'பக்கங்கள்' : 'Quick Navigation')}
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link
                  href={`/${lang}`}
                  className="hover:text-amber-400 transition-colors py-0.5 inline-block"
                >
                  {dict.nav?.home || (isTa ? 'முகப்பு' : 'Home')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/about`}
                  className="hover:text-white transition-colors py-0.5 inline-block"
                >
                  {dict.nav?.about || (isTa ? 'எங்களைப் பற்றி' : 'About the Advisor')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/insurance`}
                  className="hover:text-amber-400 transition-colors py-0.5 inline-block"
                >
                  {dict.nav?.insurance || (isTa ? 'காப்பீட்டு சேவைகள்' : 'Insurance Services')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/awards`}
                  className="hover:text-amber-400 transition-colors py-0.5 inline-block"
                >
                  {dict.nav?.awards || (isTa ? 'விருதுகள் & சாதனைகள்' : 'Awards & Achievements')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${lang}/contact`}
                  className="hover:text-white transition-colors py-0.5 inline-block"
                >
                  {dict.nav?.contact || (isTa ? 'தொடர்புகொள்ள' : 'Contact Us')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Location & Verified Contact Details */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
              {dict.common?.addressLabel || (isTa ? 'அலுவலகம் & தொடர்பு' : 'Office & Contact')}
            </h3>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="leading-relaxed block">{BUSINESS_INFO.address}</span>
                  <a
                    href={GOOGLE_MAPS_OFFICE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-amber-400 hover:text-amber-300 mt-1 font-medium"
                  >
                    <span>{isTa ? 'வரைபடத்தில் பார்க்க' : 'View on Google Maps'}</span>
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Telephone Numbers */}
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                <a
                  href="tel:+919500253993"
                  className="hover:text-white transition-colors font-semibold text-slate-200"
                >
                  <span>+91 95002 53993</span>
                  <span className="text-amber-400 text-[10px] ml-1.5 font-normal">
                    ({isTa ? 'முதன்மை' : 'Mobile'})
                  </span>
                </a>
              </div>

              {/* WhatsApp Action */}
              <div className="flex items-start gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                <a
                  href="https://wa.me/919443564017"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 text-emerald-400 transition-colors font-semibold"
                >
                  <span>+91 94435 64017</span>
                  <span className="text-slate-400 text-[10px] ml-1.5 font-normal">
                    (WhatsApp)
                  </span>
                </a>
              </div>

              {/* Email Address */}
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="hover:text-white transition-colors text-slate-300 break-all"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Factual Regulatory & Agency Disclosure */}
        <div className="my-6 p-4 sm:p-5 rounded-2xl bg-brand-charcoal-900 border border-brand-charcoal-700 text-xs text-slate-300">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
            <div>
              <p className="font-bold text-white mb-1.5">
                {dict.common?.disclaimer || (isTa ? 'சட்டப்பூர்வ ஒழுங்குமுறைத் தகவல்' : 'Regulatory & Independent Intermediary Notice')}
              </p>
              <p className="text-slate-300 leading-relaxed text-[11px] sm:text-xs">
                {REGULATORY_DISCLAIMER[lang]}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Attribution & Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-2">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name} – Insurance Advisor. All rights reserved.</p>
          <p>{BUSINESS_INFO.location}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
