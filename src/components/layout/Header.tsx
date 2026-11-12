'use client';

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { SupportedLanguage } from '@/types';
import { BUSINESS_INFO, WHATSAPP_MESSAGES } from '@/lib/constants';
import { Logo } from '@/components/common/Logo';
import { Navigation } from './Navigation';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileNavigation } from './MobileNavigation';
import { Menu, Phone, MapPin, MessageCircle, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  lang: SupportedLanguage;
  dict: Record<string, any>;
  isMobileMenuOpen?: boolean;
  onOpenMobileMenu?: () => void;
  onCloseMobileMenu?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  dict,
  isMobileMenuOpen: controlledOpen,
  onOpenMobileMenu,
  onCloseMobileMenu,
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const isMobileMenuOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const isTa = lang === 'ta';

  const handleCloseMobileMenu = useCallback(() => {
    if (onCloseMobileMenu) {
      onCloseMobileMenu();
    } else {
      setInternalOpen(false);
    }
  }, [onCloseMobileMenu]);

  const handleOpenMobileMenu = useCallback(() => {
    if (onOpenMobileMenu) {
      onOpenMobileMenu();
    } else {
      setInternalOpen(true);
    }
  }, [onOpenMobileMenu]);

  const whatsappMessage = encodeURIComponent(
    WHATSAPP_MESSAGES[lang]?.insurance ||
      (isTa
        ? 'வணக்கம் திரு. எம். மோகன் ராவ், எல்.ஐ.சி ஆயுள் காப்பீட்டு பாலிசிகள் குறித்து ஆலோசனை பெற விரும்புகிறேன்.'
        : 'Hello M. Mohan Rao, I would like to enquire about LIC life insurance policies.')
  );
  const whatsappUrl = `https://wa.me/919443564017?text=${whatsappMessage}`;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top Professional Credentials Micro-bar */}
      <div className="bg-brand-navy text-white text-xs py-1.5 px-3 sm:px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center gap-2">
          <div className="flex items-center gap-2 truncate min-w-0">
            <span className="font-semibold text-amber-300 inline-flex items-center gap-1 shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" aria-hidden="true" />
              <span>LIC Code: {BUSINESS_INFO.agencyCode}</span>
            </span>
            <span className="text-slate-400 hidden sm:inline" aria-hidden="true">•</span>
            <span className="text-slate-200 truncate text-[11px] sm:text-xs">
              {isTa ? 'தலைவர் மன்ற உறுப்பினர் & MDRT நிதி ஆலோசகர்' : "Chairman's Club Member & MDRT Advisor"}
            </span>
            <span className="text-slate-400 hidden md:inline" aria-hidden="true">•</span>
            <span className="text-slate-300 hidden md:inline-flex items-center gap-1 text-[11px]">
              <MapPin className="w-3 h-3 text-amber-300 shrink-0" aria-hidden="true" />
              <span>{BUSINESS_INFO.location}</span>
            </span>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="tel:+919500253993"
              className="inline-flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors py-0.5"
              aria-label="Call primary mobile 95002 53993"
            >
              <Phone className="w-3 h-3 text-amber-400" aria-hidden="true" />
              <span className="text-xs font-semibold">95002 53993</span>
            </a>
            <span className="text-slate-500 hidden sm:inline" aria-hidden="true">|</span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors text-xs font-semibold py-0.5"
              aria-label="WhatsApp 94435 64017"
            >
              <MessageCircle className="w-3 h-3 text-emerald-400" aria-hidden="true" />
              <span>WhatsApp: 94435 64017</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-6xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between">
        {/* Brand Logo & Wordmark */}
        <Logo lang={lang} variant="header" showTagline={true} />

        {/* Desktop Navigation & Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <Navigation lang={lang} dict={dict} className="flex items-center gap-6" />

          <div className="h-5 w-px bg-slate-200" aria-hidden="true" />

          {/* Quick Contact & Consultation Actions */}
          <div className="flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200 transition-colors"
              aria-label="Chat on WhatsApp 94435 64017"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>

            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-brand-navy text-white hover:bg-brand-navy-900 shadow-xs transition-colors"
            >
              <span>{dict.common?.getQuotation || (isTa ? 'ஆலோசனை பெற' : 'Get Consultation')}</span>
            </Link>
          </div>

          <div className="h-5 w-px bg-slate-200" aria-hidden="true" />
          <LanguageSwitcher currentLang={lang} />
        </div>

        {/* Mobile Controls: Language Switcher + Hamburger Menu Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-emerald-600 bg-emerald-50 border border-emerald-200 flex items-center justify-center min-w-[40px] min-h-[40px]"
            aria-label="WhatsApp 94435 64017"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
          </a>
          <LanguageSwitcher currentLang={lang} />
          <button
            type="button"
            onClick={handleOpenMobileMenu}
            className="p-2.5 rounded-xl text-slate-700 hover:text-brand-navy hover:bg-slate-100 transition-colors focus:ring-2 focus:ring-brand-gold min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
            aria-label={dict.nav?.menu || 'Menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <Menu className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Responsive Mobile Drawer Navigation */}
      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={handleCloseMobileMenu}
        lang={lang}
        dict={dict}
      />
    </header>
  );
};

export default Header;
