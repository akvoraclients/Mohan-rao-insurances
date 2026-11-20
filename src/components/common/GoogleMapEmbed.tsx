import React from 'react';
import { SupportedLanguage } from '@/types';
import { BUSINESS_INFO, GOOGLE_MAPS_OFFICE_URL, GOOGLE_MAPS_EMBED_URL } from '@/lib/constants';
import { MapPin, Navigation, ExternalLink, ShieldCheck, Clock } from 'lucide-react';

interface GoogleMapEmbedProps {
  lang: SupportedLanguage;
  variant?: 'full' | 'compact';
  className?: string;
}

export const GoogleMapEmbed: React.FC<GoogleMapEmbedProps> = ({
  lang,
  variant = 'full',
  className = '',
}) => {
  const isTa = lang === 'ta';
  const isCompact = variant === 'compact';

  if (isCompact) {
    return (
      <div className={`relative w-full rounded-2xl overflow-hidden border border-slate-200 shadow-xs bg-slate-100 ${className}`}>
        <iframe
          src={GOOGLE_MAPS_EMBED_URL}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title={isTa ? 'மோகன் ராவ் இன்சூரன்ஸ் - கூகுள் வரைபடம்' : 'Mohan Rao Insurances - Google Maps Location'}
          className="w-full h-64 sm:h-72"
        />
        <div className="p-3 bg-white border-t border-slate-100 flex items-center justify-between gap-2">
          <span className="text-xs font-semibold text-slate-700 truncate">
            {BUSINESS_INFO.address}
          </span>
          <a
            href={GOOGLE_MAPS_OFFICE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:text-amber-800 shrink-0 whitespace-nowrap"
          >
            <span>{isTa ? 'வரைபடத்தில் பார்க்க' : 'Open in Maps'}</span>
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs ${className}`}>
      {/* Map Header Card */}
      <div className="p-6 sm:p-7 border-b border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gradient-to-r from-slate-50 via-white to-amber-50/30">
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-900 border border-amber-200">
              <MapPin className="w-3.5 h-3.5 text-amber-600" aria-hidden="true" />
              <span>{isTa ? 'அலுவலக இருப்பிடம்' : 'Office Location'}</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-brand-navy-50 text-brand-navy border border-brand-navy-200">
              <ShieldCheck className="w-3 h-3 text-amber-600" aria-hidden="true" />
              <span>LIC Agency: {BUSINESS_INFO.agencyCode}</span>
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-brand-navy tracking-tight">
            {isTa ? 'மோகன் ராவ் இன்சூரன்ஸ் (Mohan Rao Insurances)' : 'Mohan Rao Insurances'}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-xl">
            {BUSINESS_INFO.address}
          </p>
        </div>

        {/* Direct Google Maps Direction Link */}
        <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto">
          <a
            href={GOOGLE_MAPS_OFFICE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold bg-brand-navy text-white hover:bg-brand-navy-900 shadow-xs hover:shadow-md transition-all whitespace-nowrap cursor-pointer min-h-[44px]"
            aria-label="Open Mohan Rao Insurances in Google Maps"
          >
            <Navigation className="w-4 h-4 text-amber-400" aria-hidden="true" />
            <span className="whitespace-nowrap">
              {isTa ? 'கூகுள் வரைபடத்தில் பார்க்க' : 'Open in Google Maps'}
            </span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-300" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Embedded Google Maps iFrame */}
      <div className="relative w-full aspect-[16/10] sm:aspect-[21/9] min-h-[320px] sm:min-h-[420px] bg-slate-100">
        <iframe
          src={GOOGLE_MAPS_EMBED_URL}
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title={isTa ? 'மோகன் ராவ் இன்சூரன்ஸ் - கூகுள் வரைபட இருப்பிடம்' : 'Mohan Rao Insurances - Google Maps Location'}
          className="w-full h-full"
        />
      </div>

      {/* Footer Details: Business Hours & Landmark info */}
      <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
        <div className="flex items-center gap-2 font-medium">
          <Clock className="w-4 h-4 text-amber-600 shrink-0" aria-hidden="true" />
          <span>{isTa ? 'திங்கள் – சனி: காலை 9:00 – இரவு 7:30' : 'Monday – Saturday: 9:00 AM – 7:30 PM'}</span>
        </div>

        <a
          href={GOOGLE_MAPS_OFFICE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-700 hover:text-amber-800 font-bold inline-flex items-center gap-1.5"
        >
          <span>{isTa ? 'திசைகளைப் பெற (Get Directions)' : 'Get Directions (Google Maps)'}</span>
          <ExternalLink className="w-3 h-3" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
};

export default GoogleMapEmbed;
