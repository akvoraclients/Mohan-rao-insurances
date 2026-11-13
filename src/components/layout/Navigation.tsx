'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SupportedLanguage } from '@/types';

interface NavigationProps {
  lang: SupportedLanguage;
  dict: Record<string, any>;
  className?: string;
  itemClassName?: string;
  onItemClick?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  lang,
  dict,
  className = '',
  itemClassName = '',
  onItemClick,
}) => {
  const pathname = usePathname();

  const navItems = [
    { key: 'home', label: dict.nav?.home || 'Home', href: `/${lang}` },
    { key: 'about', label: dict.nav?.about || 'About Us', href: `/${lang}/about` },
    { key: 'insurance', label: dict.nav?.insurance || 'Insurance Services', href: `/${lang}/insurance` },
    { key: 'awards', label: dict.nav?.awards || (lang === 'ta' ? 'விருதுகள் & சாதனைகள்' : 'Awards & Achievements'), href: `/${lang}/awards` },
    { key: 'contact', label: dict.nav?.contact || 'Contact Us', href: `/${lang}/contact` },
  ];

  return (
    <nav className={`flex items-center whitespace-nowrap shrink-0 ${className}`} aria-label="Main Navigation">
      {navItems.map((item) => {
        const isExactMatch = pathname === item.href || pathname === `${item.href}/`;
        const isNestedMatch = item.key !== 'home' && pathname?.startsWith(`${item.href}`);
        const isActive = isExactMatch || isNestedMatch;

        return (
          <Link
            key={item.key}
            href={item.href}
            onClick={onItemClick}
            className={`whitespace-nowrap shrink-0 text-xs xl:text-sm font-semibold transition-colors relative py-1 inline-flex items-center ${
              isActive
                ? 'text-brand-navy font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand-teal after:rounded-full'
                : 'text-slate-600 hover:text-brand-navy'
            } ${itemClassName}`}
            aria-current={isActive ? 'page' : undefined}
          >
            <span className="whitespace-nowrap">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
