import React from 'react';
import Link from 'next/link';
import { SupportedLanguage } from '@/types';
import { BUSINESS_INFO } from '@/lib/constants';

interface LogoProps {
  lang?: SupportedLanguage;
  variant?: 'header' | 'footer' | 'standalone';
  showTagline?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  lang = 'en',
  variant = 'header',
  showTagline = true,
  className = '',
}) => {
  const isFooter = variant === 'footer';
  const isTa = lang === 'ta';

  // Professional Financial Advisor Emblem (Shield with Golden Flame / Protective Star)
  const LogoMark = (
    <svg
      width="38"
      height="38"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform group-hover:scale-105"
      aria-hidden="true"
    >
      {/* Background Soft Rounded Container */}
      <rect
        width="40"
        height="40"
        rx="10"
        fill={isFooter ? '#154673' : '#0B3B60'}
      />
      {/* Protective Shield Outline */}
      <path
        d="M20 9L29 13V20C29 25.5 25.2 30.2 20 31.5C14.8 30.2 11 25.5 11 20V13L20 9Z"
        fill={isFooter ? '#0B3B60' : '#154673'}
        stroke="#F59E0B"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      {/* Golden Inner Flame of Security */}
      <path
        d="M20 14C19 17 16.5 19 16.5 21.5C16.5 23.5 18 25 20 25C22 25 23.5 23.5 23.5 21.5C23.5 19 21 17 20 14Z"
        fill="#F59E0B"
      />
      <circle cx="20" cy="21.5" r="1.5" fill="#FEF3C7" />
    </svg>
  );

  const content = (
    <div className={`flex items-center gap-3 ${className}`}>
      {LogoMark}
      <div className="flex flex-col">
        <span
          className={`text-base sm:text-lg md:text-xl font-extrabold tracking-tight leading-tight ${
            isFooter ? 'text-white' : 'text-brand-navy'
          }`}
        >
          {BUSINESS_INFO.name}
        </span>
        {showTagline && (
          <span
            className={`text-[11px] sm:text-xs font-semibold tracking-wide leading-tight mt-0.5 ${
              isFooter ? 'text-amber-400' : 'text-brand-gold-600'
            }`}
          >
            {isTa ? 'காப்பீட்டு ஆலோசகர்' : 'Insurance Advisor'}
          </span>
        )}
      </div>
    </div>
  );

  return (
    <Link
      href={`/${lang}`}
      className="group inline-flex items-center focus:outline-hidden focus:ring-2 focus:ring-brand-gold rounded-lg p-0.5"
      aria-label={`${BUSINESS_INFO.name} - ${isTa ? 'காப்பீட்டு ஆலோசகர் முகப்பு' : 'Insurance Advisor Home'}`}
    >
      {content}
    </Link>
  );
};

export default Logo;
