import React from 'react';
import { SupportedLanguage } from '@/types';
import { getDictionary } from '@/lib/dictionary';
import { Award, ShieldCheck, HeartHandshake, FileText, PiggyBank } from 'lucide-react';

interface ExperienceHighlightProps {
  lang: SupportedLanguage;
  variant?: 'card' | 'compact' | 'stat';
  context?: 'general' | 'insurance';
  className?: string;
}

export const ExperienceHighlight: React.FC<ExperienceHighlightProps> = ({
  lang,
  variant = 'card',
  className = '',
}) => {
  const dict = getDictionary(lang);
  const isTa = lang === 'ta';
  const exp = dict.experience || {};

  const statNumber = 'MDRT & Chairman’s Club';
  const statUnit = isTa ? 'மன்ற உறுப்பினர்' : 'Club Member';
  const mainTitle = isTa
    ? 'எம். மோகன் ராவ் - எல்.ஐ.சி நிதி ஆலோசகர் & பாலிசிதாரர் சேவை'
    : 'M. Mohan Rao – LIC Financial Advisor & Policyholder Guidance';

  const mainDesc = isTa
    ? 'வாடிக்கையாளர்களின் குடும்ப நிதிப் பாதுகாப்பு, குழந்தைகளின் எதிர்கால உயர்கல்வித் தேவைகள், மற்றும் பணி ஓய்வுக்கால ஓய்வூதியத் திட்டங்களுக்கான நம்பகமான நேரடி வழிகாட்டல்.'
    : 'Dedicated, transparent life insurance advisory for family financial security, children’s future milestone funds, and retirement pensions.';

  // VARIANT 1: COMPACT
  if (variant === 'compact') {
    return (
      <div
        className={`rounded-2xl p-4 sm:p-5 bg-white border border-brand-navy-100 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${className}`}
      >
        <div className="flex items-start sm:items-center gap-3.5">
          <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-800 flex flex-col items-center justify-center shrink-0 border border-amber-200">
            <ShieldCheck className="w-5 h-5 text-amber-600" aria-hidden="true" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-brand-navy">
              {mainTitle}
            </h4>
            <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
              {mainDesc}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // VARIANT 2: STAT ONLY
  if (variant === 'stat') {
    return (
      <div className={`flex items-baseline gap-2 ${className}`}>
        <span className="text-2xl sm:text-3xl font-black text-brand-navy tracking-tight">
          {statNumber}
        </span>
        <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
          <span>{statUnit}</span>
          <span className="block text-[10px] text-slate-500 font-medium normal-case">
            {isTa ? 'ஆயுள் காப்பீட்டு வழிகாட்டல்' : 'Life Insurance Advisory'}
          </span>
        </div>
      </div>
    );
  }

  // VARIANT 3: CARD
  return (
    <div
      className={`rounded-3xl bg-gradient-to-br from-brand-navy-50/80 via-white to-amber-50/40 border border-brand-navy-200/80 p-5 sm:p-6 md:p-8 shadow-xs ${className}`}
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-brand-navy-100">
        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-brand-navy text-white flex flex-col items-center justify-center shrink-0 shadow-md border-2 border-amber-400">
            <Award className="w-7 h-7 text-amber-300" aria-hidden="true" />
          </div>

          <div>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white text-amber-800 border border-amber-200 mb-1.5 shadow-2xs">
              <ShieldCheck className="w-3 h-3 text-amber-600" aria-hidden="true" />
              <span>{exp.badge || (isTa ? 'தொழில்முறை தகுதி' : 'Professional Distinction')}</span>
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-brand-navy tracking-tight leading-snug">
              {mainTitle}
            </h3>
          </div>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal mt-4 mb-6">
        {mainDesc}
      </p>

      {/* 3 Core Experience Pillars (LIC-Focused) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
        <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
          <div className="flex items-center gap-2 mb-2">
            <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" aria-hidden="true" />
            <h4 className="text-xs sm:text-sm font-bold text-brand-navy">
              {isTa ? 'குடும்ப ஆயுள் பாதுகாப்பு' : 'Life Risk Protection'}
            </h4>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            {isTa
              ? 'டேர்ம் இன்சூரன்ஸ் மூலம் குறைந்த பிரீமியத்தில் முழுமையான குடும்ப நிதிப் பாதுகாப்பு வழிகாட்டல்.'
              : 'Pure risk cover and high sum assured term plans ensuring dependents are financially protected.'}
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
          <div className="flex items-center gap-2 mb-2">
            <PiggyBank className="w-4 h-4 text-amber-600 shrink-0" aria-hidden="true" />
            <h4 className="text-xs sm:text-sm font-bold text-brand-navy">
              {isTa ? 'சேமிப்பு & ஓய்வூதியம்' : 'Savings & Pensions'}
            </h4>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            {isTa
              ? 'குழந்தைகள் கல்வி நிதி, சேமிப்பு திட்டங்கள் மற்றும் முதியோர் ஓய்வூதியத் திட்ட வழிகாட்டல்.'
              : 'Disciplined savings for children’s education milestones and lifelong guaranteed retirement annuities.'}
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-2xs">
          <div className="flex items-center gap-2 mb-2">
            <FileText className="w-4 h-4 text-amber-600 shrink-0" aria-hidden="true" />
            <h4 className="text-xs sm:text-sm font-bold text-brand-navy">
              {isTa ? 'பாலிசி சேவை & க்ளெய்ம் உதவி' : 'Servicing & Claims Support'}
            </h4>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            {isTa
              ? 'பாலிசி புதுப்பித்தல், ஆன்லைன் கட்டணம், முகவரி மாற்றம், மற்றும் க்ளெய்ம் ஆவண முழு உதவி.'
              : 'End-to-end support for official online premium payments, policy revivals, and death/maturity claims.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceHighlight;
