'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SupportedLanguage } from '@/types';
import { INSURANCE_COMPANIES, WHATSAPP_MESSAGES } from '@/lib/constants';
import { Shield, MessageCircle, ArrowRight, CheckCircle2, Building2 } from 'lucide-react';

interface InsuranceCompaniesSectionProps {
  lang: SupportedLanguage;
  className?: string;
  id?: string;
}

export const InsuranceCompaniesSection: React.FC<InsuranceCompaniesSectionProps> = ({
  lang,
  className = '',
  id = 'companies',
}) => {
  const isTa = lang === 'ta';

  return (
    <section className={`relative py-10 sm:py-14 md:py-16 ${className}`} id={id}>
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 px-4">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-navy-50 text-brand-navy border border-brand-navy-200 mb-3 shadow-2xs">
          <Building2 className="w-3.5 h-3.5 text-amber-600" aria-hidden="true" />
          <span>
            {isTa
              ? 'நாங்கள் இணைந்து செயல்படும் காப்பீட்டு நிறுவனங்கள்'
              : 'Insurance Companies We Work With'}
          </span>
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy tracking-tight mb-3">
          {isTa
            ? 'முழுமையான பாதுகாப்பிற்கான முன்னணி காப்பீட்டு நிறுவனங்கள்'
            : 'Comprehensive Protection Across Leading Insurers'}
        </h2>

        <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-normal">
          {isTa
            ? 'ஓசூரில் ஆயுள், மருத்துவ மற்றும் பொதுக் காப்பீடுகளுக்கான தொழில்முறை வழிகாட்டல் மற்றும் பாலிசிதாரர் சேவை. உங்கள் தேவைகளுக்கு ஏற்ற சிறந்த காப்பீட்டுத் திட்டத்தை தேர்வு செய்யுங்கள்.'
            : 'Get unbiased guidance and dedicated policyholder servicing across Life Insurance, Health Insurance, and General Insurance from M. Mohan Rao in Hosur.'}
        </p>
      </div>

      {/* 3 Responsive Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {INSURANCE_COMPANIES.map((company) => {
          const categoryName = company.category[lang] || company.category.en;
          const badgeText = company.badge[lang] || company.badge.en;
          const desc = company.description[lang] || company.description.en;
          const highlights = company.highlights[lang] || company.highlights.en;
          const whatsappMsg = encodeURIComponent(
            WHATSAPP_MESSAGES[lang]?.[company.whatsappKey] || WHATSAPP_MESSAGES[lang]?.insurance || ''
          );
          const whatsappUrl = `https://wa.me/919443564017?text=${whatsappMsg}`;

          // Distinct category accent color
          const badgeColor =
            company.id === 'lic'
              ? 'bg-blue-50 text-blue-900 border-blue-200'
              : company.id === 'star-health'
              ? 'bg-emerald-50 text-emerald-900 border-emerald-200'
              : 'bg-amber-50 text-amber-900 border-amber-200';

          const accentLine =
            company.id === 'lic'
              ? 'from-blue-600 to-indigo-700'
              : company.id === 'star-health'
              ? 'from-emerald-600 to-teal-700'
              : 'from-amber-600 to-yellow-600';

          return (
            <div
              key={company.id}
              className="group relative rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Top Accent Gradient Bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${accentLine}`}
                aria-hidden="true"
              />

              <div>
                {/* Header: Logo & Category Badge */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="relative w-40 sm:w-44 h-12 shrink-0 bg-white rounded-xl p-1">
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      fill
                      className="object-contain object-left"
                      sizes="180px"
                    />
                  </div>
                  <span
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-bold border shrink-0 ${badgeColor}`}
                  >
                    {categoryName}
                  </span>
                </div>

                {/* Company Name & Badge */}
                <h3 className="text-lg sm:text-xl font-black text-brand-navy mb-1 group-hover:text-amber-700 transition-colors">
                  {company.name}
                </h3>
                <p className="text-xs font-semibold text-amber-700 mb-3">
                  {badgeText}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                  {desc}
                </p>

                {/* Highlights List */}
                <div className="space-y-2.5 border-t border-slate-100 pt-4 mb-6">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    {isTa ? 'முக்கிய சிறப்பம்சங்கள்' : 'Key Guidance Areas'}
                  </span>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {highlights.slice(0, 4).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2
                          className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span className="leading-tight">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 border-t border-slate-100">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl font-bold text-xs bg-emerald-600 text-white hover:bg-emerald-700 shadow-xs transition-colors whitespace-nowrap shrink-0 min-h-[40px]"
                  aria-label={`Enquire about ${company.name} on WhatsApp`}
                >
                  <MessageCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span className="whitespace-nowrap">{isTa ? 'வாட்ஸ்அப்' : 'WhatsApp'}</span>
                </a>

                <Link
                  href={`/${lang}/insurance`}
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 py-2.5 rounded-xl font-bold text-xs bg-brand-navy-50 hover:bg-brand-navy text-brand-navy hover:text-white border border-brand-navy-200 transition-colors whitespace-nowrap shrink-0 min-h-[40px]"
                >
                  <span className="whitespace-nowrap">{isTa ? 'விவரங்கள்' : 'Enquire'}</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default InsuranceCompaniesSection;
