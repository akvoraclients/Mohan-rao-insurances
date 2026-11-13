'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SupportedLanguage } from '@/types';
import { Award, X, ChevronLeft, ChevronRight, ZoomIn, Sparkles, ArrowRight } from 'lucide-react';

export interface AwardPhotoItem {
  id: number;
  filename: string;
  src: string;
  alt: {
    en: string;
    ta: string;
  };
  caption: {
    en: string;
    ta: string;
  };
}

// 21 Verified Gallery Images (1.jpeg to 21.jpeg)
export const AWARDS_GALLERY_DATA: AwardPhotoItem[] = Array.from({ length: 21 }, (_, idx) => {
  const num = idx + 1;
  return {
    id: num,
    filename: `${num}.jpeg`,
    src: `/images/${num}.jpeg`,
    alt: {
      en: `M. Mohan Rao – Professional Recognition & Milestone #${num} | LIC Financial Advisor in Hosur`,
      ta: `எம். மோகன் ராவ் – தொழில்முறை அங்கீகாரம் & சாதனை #${num} | எல்.ஐ.சி நிதி ஆலோசகர் ஓசூர்`,
    },
    caption: {
      en: `Professional Milestone & Recognition #${num}`,
      ta: `தொழில்முறை மைல்கல் & அங்கீகாரம் #${num}`,
    },
  };
});

interface AwardsGalleryProps {
  lang: SupportedLanguage;
  mode?: 'preview' | 'full';
  hideHeader?: boolean;
  className?: string;
}

export const AwardsGallery: React.FC<AwardsGalleryProps> = ({
  lang,
  mode = 'preview',
  hideHeader = false,
  className = '',
}) => {
  const isTa = lang === 'ta';
  const isFull = mode === 'full';
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);

  const isLightboxOpen = lightboxIndex !== null;
  const currentImage = lightboxIndex !== null ? AWARDS_GALLERY_DATA[lightboxIndex] : null;

  // Determine items to display in grid (8 in preview, all 21 in full)
  const displayItems = isFull ? AWARDS_GALLERY_DATA : AWARDS_GALLERY_DATA.slice(0, 8);

  // Open Lightbox
  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  // Close Lightbox
  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  // Next Image
  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % AWARDS_GALLERY_DATA.length : null));
  }, []);

  // Previous Image
  const prevImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + AWARDS_GALLERY_DATA.length) % AWARDS_GALLERY_DATA.length : null
    );
  }, []);

  // Keyboard navigation & scroll locking
  useEffect(() => {
    if (!isLightboxOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLightboxOpen, closeLightbox, nextImage, prevImage]);

  // Mobile Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
    setTouchEndX(null);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // Swiped left -> next
      nextImage();
    } else if (distance < -minSwipeDistance) {
      // Swiped right -> prev
      prevImage();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <section className={`relative py-8 sm:py-12 md:py-14 ${className}`} id="awards">
      {/* Section Header (rendered if not explicitly hidden) */}
      {!hideHeader && (
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 px-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-200 mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" aria-hidden="true" />
            <span>{isTa ? 'விருதுகள் & சாதனைகள்' : 'Awards & Achievements'}</span>
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy tracking-tight mb-3">
            {isTa
              ? 'அங்கீகாரங்கள், சாதனைகள் & தொழில்முறை மைல்கற்கள்'
              : 'Recognition, Achievements & Professional Milestones'}
          </h2>

          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-normal">
            {isTa
              ? 'எல்.ஐ.சி நிதி ஆலோசகராக திரு. எம். மோகன் ராவ் அவர்களின் தொழில்முறை அங்கீகாரங்கள், சாதனைகள் மற்றும் முக்கிய மைல்கற்களின் தொகுப்பு.'
              : "A collection of professional recognitions, achievements and memorable milestones from M. Mohan Rao's journey as an LIC financial advisor."}
          </p>

          {/* Quick Lightbox Action Button */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => openLightbox(0)}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-brand-navy text-white hover:bg-brand-navy-900 shadow-xs transition-colors cursor-pointer whitespace-nowrap shrink-0 min-h-[40px]"
            >
              <ZoomIn className="w-4 h-4 text-amber-300 shrink-0" aria-hidden="true" />
              <span className="whitespace-nowrap">{isTa ? 'சாதனைகள் அனைத்தையும் காண்க' : 'Open Full Lightbox View'}</span>
            </button>
            <span className="text-xs text-slate-500 font-medium whitespace-nowrap">
              {isTa ? '21 சாதனைகளின் ஆவணத் தொகுப்பு' : '21 Documented Honors & Milestones'}
            </span>
          </div>
        </div>
      )}

      {/* Responsive Gallery Grid */}
      {/* Desktop: 3 to 4 columns. Mobile: 2 columns. */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
        {displayItems.map((item, idx) => (
          <div
            key={item.id}
            role="button"
            tabIndex={0}
            onClick={() => openLightbox(idx)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                openLightbox(idx);
              }
            }}
            aria-label={`${item.caption[lang] || item.caption.en} - ${isTa ? 'பெரிதாக்க கிளிக் செய்க' : 'Click to expand'}`}
            className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all duration-300 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-amber-500"
          >
            <Image
              src={item.src}
              alt={item.alt[lang] || item.alt.en}
              fill
              loading="lazy"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
            />

            {/* Subtle Gradient & Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-200 flex flex-col justify-between p-3">
              <div className="self-end">
                <span className="w-8 h-8 rounded-lg bg-black/60 text-amber-300 backdrop-blur-xs flex items-center justify-center shadow-xs">
                  <ZoomIn className="w-4 h-4" aria-hidden="true" />
                </span>
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 block">
                  {item.caption[lang] || item.caption.en}
                </span>
                <span className="text-xs font-semibold text-white truncate block">
                  {isTa ? `மைல்கல் #${item.id}` : `Milestone #${item.id}`}
                </span>
              </div>
            </div>

            {/* Visible Position Tag */}
            <div className="absolute top-2 left-2 z-10 pointer-events-none">
              <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-brand-navy/80 text-amber-300 backdrop-blur-xs border border-white/10">
                #{item.id}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Preview Mode Call-to-Action to Dedicated Page */}
      {!isFull && (
        <div className="mt-8 sm:mt-10 text-center flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href={`/${lang}/awards`}
            className="inline-flex items-center justify-center gap-2.5 px-5 sm:px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-brand-navy text-white hover:bg-brand-navy-900 shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer whitespace-nowrap shrink-0 min-h-[44px]"
          >
            <span className="whitespace-nowrap">{isTa ? 'அனைத்து 21 சாதனைகளையும் காண்க' : 'Explore All 21 Achievements'}</span>
            <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform shrink-0" />
          </Link>
          <span className="text-xs text-slate-500 font-medium">
            {isTa ? 'முழு பக்க தொகுப்பிற்கு செல்லவும்' : 'View full high-resolution gallery page'}
          </span>
        </div>
      )}

      {/* =========================================================================
          INTERACTIVE FULLSCREEN LIGHTBOX (Covers all 21 items)
          ========================================================================= */}
      {isLightboxOpen && currentImage && (
        <div
          ref={lightboxRef}
          role="dialog"
          aria-modal="true"
          aria-label={isTa ? 'விருதுகள் மற்றும் சாதனைகள் படத்தொகுப்பு' : 'Awards & Achievements Lightbox'}
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6 transition-opacity duration-300 animate-in fade-in"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Bar: Title, Counter & Close Button */}
          <div className="w-full max-w-5xl flex items-center justify-between py-2 text-white border-b border-white/10 z-10">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30">
                <Award className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
                <span>
                  {isTa
                    ? `${lightboxIndex + 1} / ${AWARDS_GALLERY_DATA.length}`
                    : `${lightboxIndex + 1} of ${AWARDS_GALLERY_DATA.length}`}
                </span>
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-200 hidden sm:inline">
                {currentImage.caption[lang] || currentImage.caption.en}
              </span>
            </div>

            <button
              type="button"
              onClick={closeLightbox}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors focus:ring-2 focus:ring-amber-400 cursor-pointer"
              aria-label={isTa ? 'படத்தொகுப்பை மூடுக' : 'Close Lightbox'}
            >
              <X className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>

          {/* Main Image Display Area with Prev/Next Buttons */}
          <div className="relative flex-1 w-full max-w-5xl flex items-center justify-center my-3 sm:my-4">
            {/* Previous Button */}
            <button
              type="button"
              onClick={prevImage}
              className="absolute left-1 sm:left-3 z-20 p-2 sm:p-3 rounded-full bg-black/60 text-white hover:bg-amber-500 hover:text-brand-navy border border-white/20 transition-colors focus:ring-2 focus:ring-amber-400 cursor-pointer"
              aria-label={isTa ? 'முந்தைய படம்' : 'Previous Image'}
            >
              <ChevronLeft className="w-6 h-6" aria-hidden="true" />
            </button>

            {/* Active Large Image */}
            <div className="relative w-full h-full max-h-[75vh] sm:max-h-[80vh] flex items-center justify-center">
              <Image
                src={currentImage.src}
                alt={currentImage.alt[lang] || currentImage.alt.en}
                fill
                priority
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 1200px"
              />
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={nextImage}
              className="absolute right-1 sm:right-3 z-20 p-2 sm:p-3 rounded-full bg-black/60 text-white hover:bg-amber-500 hover:text-brand-navy border border-white/20 transition-colors focus:ring-2 focus:ring-amber-400 cursor-pointer"
              aria-label={isTa ? 'அடுத்த படம்' : 'Next Image'}
            >
              <ChevronRight className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>

          {/* Bottom Bar: Instructions & Mobile Indicator */}
          <div className="w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 py-2 border-t border-white/10 gap-2">
            <span className="text-center sm:text-left text-slate-300">
              {currentImage.caption[lang] || currentImage.caption.en}
            </span>
            <div className="flex items-center gap-4 text-[11px] text-slate-400">
              <span className="hidden sm:inline">
                {isTa ? 'முந்தைய / அடுத்த படத்திற்கு அம்புக்குறிகளைப் பயன்படுத்தலாம்' : 'Use ← / → keys or swipe to navigate'}
              </span>
              <span>
                {isTa ? 'மூட Escape அழுத்தவும்' : 'Press Esc to close'}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AwardsGallery;
