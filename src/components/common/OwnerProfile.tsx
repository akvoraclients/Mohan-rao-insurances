import React from 'react';
import Image from 'next/image';
import { SupportedLanguage } from '@/types';
import { OWNER_PROFILE } from '@/lib/recognition';
import { BUSINESS_INFO } from '@/lib/constants';
import { MapPin, ShieldCheck, Award, User } from 'lucide-react';

interface OwnerProfileProps {
  lang: SupportedLanguage;
  variant?: 'compact' | 'card' | 'hero' | 'about';
  showBio?: boolean;
  className?: string;
}

export const OwnerProfile: React.FC<OwnerProfileProps> = ({
  lang,
  variant = 'card',
  showBio = true,
  className = '',
}) => {
  const profile = OWNER_PROFILE;
  const isTa = lang === 'ta';
  const roleText = profile.role[lang] || profile.role.en;
  const locationText = profile.location[lang] || profile.location.en;
  const imageSrc = profile.imageSrc || '/images/owner.jpeg';
  const hasPhoto = profile.hasGenuinePhoto || Boolean(imageSrc);

  const imageAlt = isTa
    ? `${profile.name} - ${roleText}`
    : `${profile.name} – ${roleText}`;

  // Compact variant
  if (variant === 'compact') {
    return (
      <div className={`inline-flex items-center gap-3 p-2.5 pr-4 rounded-2xl bg-white border border-brand-navy-100 shadow-xs ${className}`}>
        <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-brand-navy-50 border border-brand-navy-200 shrink-0 flex items-center justify-center">
          {hasPhoto ? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover object-center"
              sizes="48px"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-brand-navy-800 to-brand-navy-950 text-amber-300">
              <User className="w-6 h-6 text-amber-300" aria-hidden="true" />
            </div>
          )}
        </div>
        <div className="min-w-0">
          <p className="text-xs font-bold text-brand-navy truncate">{profile.name}</p>
          <p className="text-[11px] text-amber-700 font-semibold truncate">LIC Code: {BUSINESS_INFO.agencyCode}</p>
        </div>
      </div>
    );
  }

  // Hero variant
  if (variant === 'hero') {
    return (
      <div className={`relative rounded-3xl bg-white border border-brand-navy-200/90 p-5 shadow-xs ${className}`}>
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-brand-navy-800 border border-amber-400 shrink-0 flex items-center justify-center shadow-xs">
            {hasPhoto ? (
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 640px) 64px, 80px"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-brand-navy-800 to-brand-navy-950 text-amber-300">
                <User className="w-9 h-9 text-amber-300" aria-hidden="true" />
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-1.5 mb-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 text-[11px] font-bold border border-amber-200">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-600" aria-hidden="true" />
                <span>Agency Code: {BUSINESS_INFO.agencyCode}</span>
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-extrabold text-brand-navy truncate">
              {profile.name}
            </h3>
            <p className="text-xs text-amber-700 font-semibold truncate">{roleText}</p>
            <p className="text-[11px] text-slate-500 flex items-center gap-1 mt-1 truncate">
              <MapPin className="w-3 h-3 text-amber-600 shrink-0" aria-hidden="true" />
              <span>{locationText}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Card & About variant
  return (
    <div className={`rounded-3xl bg-white border border-slate-200 p-5 sm:p-6 md:p-8 shadow-xs ${className}`}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        {/* Photo Container */}
        <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden bg-brand-navy-800 border-2 border-amber-400 shrink-0 shadow-md flex items-center justify-center">
          {hasPhoto ? (
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 112px, 144px"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-brand-navy-800 via-brand-navy-900 to-brand-navy-950 text-amber-300 p-3 text-center">
              <div className="w-14 h-14 rounded-2xl bg-white/10 border border-amber-400/40 flex items-center justify-center text-amber-300 shadow-xs mb-1">
                <User className="w-8 h-8 text-amber-300" aria-hidden="true" />
              </div>
              <span className="text-xs font-extrabold text-white">{profile.name}</span>
              <span className="text-[10px] text-amber-400 font-semibold">LIC Advisor</span>
            </div>
          )}
        </div>

        {/* Profile Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600" aria-hidden="true" />
              <span>LIC Code: {BUSINESS_INFO.agencyCode}</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-navy-50 text-brand-navy border border-brand-navy-200">
              <Award className="w-3.5 h-3.5 text-brand-gold-600" aria-hidden="true" />
              <span>MDRT Member</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-navy-50 text-brand-navy border border-brand-navy-200">
              <Award className="w-3.5 h-3.5 text-brand-gold-600" aria-hidden="true" />
              <span>Chairman&apos;s Club Member</span>
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-navy mb-1 tracking-tight">
            {profile.name}
          </h3>
          <p className="text-sm sm:text-base font-bold text-amber-700 mb-2">
            {roleText}
          </p>

          <p className="text-xs text-slate-500 flex items-center gap-1.5 mb-3">
            <MapPin className="w-3.5 h-3.5 text-amber-600 shrink-0" aria-hidden="true" />
            <span>{BUSINESS_INFO.address}</span>
          </p>

          {showBio && (
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-100 pt-3">
              {isTa
                ? 'இந்திய ஆயுள் காப்பீட்டுக் கழகத்தின் (LIC) தலைவர் மன்ற உறுப்பினர் மற்றும் MDRT நிதி ஆலோசகரான திரு. எம். மோகன் ராவ் (முகவர் குறியீடு: 0195676N), வாடிக்கையாளர்களுக்கு நேர்மையான ஆயுள் காப்பீட்டு வழிகாட்டலை வழங்குகிறார். குடும்ப நிதிப் பாதுகாப்பு, குழந்தைகளின் கல்வித் திட்டங்கள், ஓய்வூதியத் திட்டங்கள், பாலிசி புதுப்பித்தல் மற்றும் க்ளெய்ம் ஆவண ஆதரவு போன்ற சேவைகள் வெளிப்படைத்தன்மையுடன் வழங்கப்படுகின்றன.'
                : 'As a Chairman’s Club Member and MDRT Financial Advisor with Life Insurance Corporation of India (Agency Code: 0195676N), M. Mohan Rao provides expert, personalized life insurance guidance. From family financial protection, children’s milestone funds, and retirement pensions to policy servicing and death/maturity claim documentation, clients receive dedicated and ethical advisory support.'}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OwnerProfile;
