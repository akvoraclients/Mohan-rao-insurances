'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SupportedLanguage } from '@/types';
import { BUSINESS_INFO, WHATSAPP_MESSAGES } from '@/lib/constants';
import { Logo } from '@/components/common/Logo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { X, ArrowRight, MapPin, Phone, MessageCircle, Mail, ShieldCheck } from 'lucide-react';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  lang: SupportedLanguage;
  dict: Record<string, any>;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  onClose,
  lang,
  dict,
}) => {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const lastPathnameRef = React.useRef(pathname);
  const scrollPosRef = React.useRef(0);
  const isTa = lang === 'ta';

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close drawer upon actual route change
  useEffect(() => {
    if (lastPathnameRef.current !== pathname) {
      lastPathnameRef.current = pathname;
      onClose();
    }
  }, [pathname, onClose]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Robust, cross-platform scroll locking for mobile Safari & Android
  useEffect(() => {
    if (!mounted) return;

    if (isOpen) {
      // 1. Capture exact current scroll offset
      scrollPosRef.current =
        window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      const scrollY = scrollPosRef.current;

      // 2. Lock both HTML and Body, pinning body with fixed position at scrollY
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.overscrollBehavior = 'none';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      document.body.style.overscrollBehavior = 'none';
    } else {
      // 3. Restore styles and restore user's scroll position
      const savedScrollY = scrollPosRef.current;
      document.documentElement.style.overflow = '';
      document.documentElement.style.overscrollBehavior = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      document.body.style.overscrollBehavior = '';
      if (savedScrollY) {
        window.scrollTo(0, savedScrollY);
      }
    }

    return () => {
      const savedScrollY = scrollPosRef.current;
      document.documentElement.style.overflow = '';
      document.documentElement.style.overscrollBehavior = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      document.body.style.overscrollBehavior = '';
      if (savedScrollY) {
        window.scrollTo(0, savedScrollY);
      }
    };
  }, [isOpen, mounted]);

  const navItems = [
    { key: 'home', label: dict.nav?.home || 'Home', href: `/${lang}` },
    { key: 'about', label: dict.nav?.about || 'About Us', href: `/${lang}/about` },
    { key: 'insurance', label: dict.nav?.insurance || 'Insurance Services', href: `/${lang}/insurance` },
    { key: 'awards', label: dict.nav?.awards || (lang === 'ta' ? 'விருதுகள் & சாதனைகள்' : 'Awards & Achievements'), href: `/${lang}/awards` },
    { key: 'contact', label: dict.nav?.contact || 'Contact Us', href: `/${lang}/contact` },
  ];

  if (!mounted) {
    return null;
  }

  const whatsappMessage = encodeURIComponent(
    WHATSAPP_MESSAGES[lang]?.insurance ||
      (isTa
        ? 'வணக்கம் திரு. எம். மோகன் ராவ், எல்.ஐ.சி ஆயுள் காப்பீட்டு பாலிசிகள் குறித்து ஆலோசனை பெற விரும்புகிறேன்.'
        : 'Hello M. Mohan Rao, I would like to enquire about LIC life insurance policies.')
  );
  const whatsappUrl = `https://wa.me/919443564017?text=${whatsappMessage}`;

  const drawerContent = (
    <div
      className={`fixed inset-0 z-[100] lg:hidden transition-all duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto visible' : 'opacity-0 pointer-events-none invisible'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label={dict.nav?.menu || 'Navigation Menu'}
    >
      {/* Dimmed backdrop */}
      <div
        className={`fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
        onTouchMove={(e) => {
          e.preventDefault();
        }}
        aria-hidden="true"
      />

      {/* Slide-out drawer panel */}
      <div
        className={`fixed top-0 right-0 h-[100dvh] max-h-[100dvh] w-full max-w-xs sm:max-w-sm bg-white shadow-2xl flex flex-col justify-between overflow-y-auto overscroll-contain transition-transform duration-300 ease-out z-[101] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          overscrollBehavior: 'contain',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {/* Top bar with logo and close button */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-10">
          <Logo lang={lang} showTagline={false} />
          <button
            type="button"
            onClick={onClose}
            className="p-2.5 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors focus:ring-2 focus:ring-brand-gold min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
            aria-label={dict.nav?.closeMenu || 'Close Menu'}
          >
            <X className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>

        {/* Credentials Pill inside mobile menu */}
        <div className="px-4 py-2.5 bg-brand-navy-50 border-b border-brand-navy-100 flex items-center gap-2 text-xs text-brand-navy font-semibold">
          <ShieldCheck className="w-4 h-4 text-brand-gold-600 shrink-0" aria-hidden="true" />
          <span>LIC Agency Code: {BUSINESS_INFO.agencyCode}</span>
        </div>

        {/* Language switcher bar */}
        <div className="px-5 py-3 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-600">
            {dict.common?.language || 'Language'}:
          </span>
          <LanguageSwitcher currentLang={lang} />
        </div>

        {/* Navigation links list */}
        <nav className="p-4 flex-1 space-y-1" aria-label="Mobile Menu Links">
          {navItems.map((item) => {
            const isExactMatch = pathname === item.href || pathname === `${item.href}/`;
            const isNestedMatch = item.key !== 'home' && pathname?.startsWith(`${item.href}`);
            const isActive = isExactMatch || isNestedMatch;

            return (
              <Link
                key={item.key}
                href={item.href}
                onClick={onClose}
                className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-semibold transition-colors min-h-[48px] ${
                  isActive
                    ? 'bg-brand-navy text-white font-bold'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-brand-navy'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                <span>{item.label}</span>
                <ArrowRight
                  className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-300'}`}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </nav>

        {/* Bottom quick contact actions */}
        <div className="p-4 border-t border-slate-100 bg-slate-50 space-y-3">
          <div className="flex items-start gap-2 text-xs text-slate-600">
            <MapPin className="w-4 h-4 text-brand-gold-600 shrink-0 mt-0.5" aria-hidden="true" />
            <span className="leading-relaxed">{BUSINESS_INFO.address}</span>
          </div>

          <div className="space-y-2 pt-1 border-t border-slate-200">
            {/* Primary Phone Action */}
            <a
              href="tel:+919500253993"
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-brand-navy text-white text-xs font-bold hover:bg-brand-navy-900 transition-colors min-h-[44px]"
            >
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
                <span>95002 53993</span>
              </div>
              <span className="text-[10px] text-amber-300 font-semibold uppercase tracking-wider">
                {isTa ? 'அழைக்க' : 'Call Primary'}
              </span>
            </a>

            {/* WhatsApp Action */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-colors min-h-[44px]"
            >
              <div className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-white" aria-hidden="true" />
                <span>94435 64017</span>
              </div>
              <span className="text-[10px] text-emerald-100 font-semibold uppercase tracking-wider">
                WhatsApp
              </span>
            </a>

            {/* Email Action */}
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-100 transition-colors min-h-[44px]"
            >
              <div className="flex items-center gap-2 truncate">
                <Mail className="w-3.5 h-3.5 text-brand-navy shrink-0" aria-hidden="true" />
                <span className="truncate">{BUSINESS_INFO.email}</span>
              </div>
              <span className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider shrink-0">
                Email
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(drawerContent, document.body);
};

export default MobileNavigation;
