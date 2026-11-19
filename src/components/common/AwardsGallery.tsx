'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SupportedLanguage } from '@/types';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

export interface AwardPhotoItem {
  id: number;
  filename: string;
  src: string;
  width: number;
  height: number;
  aspectRatio: number;
  orientation: 'portrait' | 'landscape' | 'square';
  alt: {
    en: string;
    ta: string;
  };
}

/**
 * 21 Verified Gallery Images (1.jpeg to 21.jpeg)
 * Preserves original intrinsic dimensions and orientations:
 * - 8 Portrait / Vertical Certificates & Trophies (5, 9, 13, 16, 17, 18, 20, 21)
 * - 12 Landscape / Ceremonies & Banners (1, 2, 3, 6, 7, 8, 10, 11, 12, 14, 15, 19)
 * - 1 Square Ceremony (4)
 */
export const AWARDS_GALLERY_DATA: AwardPhotoItem[] = [
  {
    id: 1,
    filename: "1.jpeg",
    src: "/images/1.jpeg",
    width: 1280,
    height: 960,
    aspectRatio: 1280 / 960,
    orientation: "landscape",
    alt: {
      en: "M. Mohan Rao – Award & Recognition #1 | Insurance Advisor in Hosur",
      ta: "எம். மோகன் ராவ் – விருது & அங்கீகாரம் #1 | காப்பீட்டு ஆலோசகர் ஓசூர்",
    },
  },
  {
    id: 2,
    filename: "2.jpeg",
    src: "/images/2.jpeg",
    width: 1600,
    height: 1200,
    aspectRatio: 1600 / 1200,
    orientation: "landscape",
    alt: {
      en: "M. Mohan Rao – Award & Recognition #2 | Insurance Advisor in Hosur",
      ta: "எம். மோகன் ராவ் – விருது & அங்கீகாரம் #2 | காப்பீட்டு ஆலோசகர் ஓசூர்",
    },
  },
  {
    id: 3,
    filename: "3.jpeg",
    src: "/images/3.jpeg",
    width: 1600,
    height: 1200,
    aspectRatio: 1600 / 1200,
    orientation: "landscape",
    alt: {
      en: "M. Mohan Rao – Award & Recognition #3 | Insurance Advisor in Hosur",
      ta: "எம். மோகன் ராவ் – விருது & அங்கீகாரம் #3 | காப்பீட்டு ஆலோசகர் ஓசூர்",
    },
  },
  {
    id: 4,
    filename: "4.jpeg",
    src: "/images/4.jpeg",
    width: 1600,
    height: 1600,
    aspectRatio: 1600 / 1600,
    orientation: "square",
    alt: {
      en: "M. Mohan Rao – Award & Recognition #4 | Insurance Advisor in Hosur",
      ta: "எம். மோகன் ராவ் – விருது & அங்கீகாரம் #4 | காப்பீட்டு ஆலோசகர் ஓசூர்",
    },
  },
  {
    id: 5,
    filename: "5.jpeg",
    src: "/images/5.jpeg",
    width: 1200,
    height: 1600,
    aspectRatio: 1200 / 1600,
    orientation: "portrait",
    alt: {
      en: "M. Mohan Rao – Certificate of Appreciation #5 | Insurance Advisor in Hosur",
      ta: "எம். மோகன் ராவ் – பாராட்டுச் சான்றிதழ் #5 | காப்பீட்டு ஆலோசகர் ஓசூர்",
    },
  },
  {
    id: 6,
    filename: "6.jpeg",
    src: "/images/6.jpeg",
    width: 1600,
    height: 721,
    aspectRatio: 1600 / 721,
    orientation: "landscape",
    alt: {
      en: "M. Mohan Rao – Award & Recognition #6 | Insurance Advisor in Hosur",
      ta: "எம். மோகன் ராவ் – விருது & அங்கீகாரம் #6 | காப்பீட்டு ஆலோசகர் ஓசூர்",
    },
  },
  {
    id: 7,
    filename: "7.jpeg",
    src: "/images/7.jpeg",
    width: 1600,
    height: 1200,
    aspectRatio: 1600 / 1200,
    orientation: "landscape",
    alt: {
      en: "M. Mohan Rao – Award & Recognition #7 | Insurance Advisor in Hosur",
      ta: "எம். மோகன் ராவ் – விருது & அங்கீகாரம் #7 | காப்பீட்டு ஆலோசகர் ஓசூர்",
    },
  },
  {
    id: 8,
    filename: "8.jpeg",
    src: "/images/8.jpeg",
    width: 1072,
    height: 712,
    aspectRatio: 1072 / 712,
    orientation: "landscape",
    alt: {
      en: "M. Mohan Rao – Award & Recognition #8 | Insurance Advisor in Hosur",
      ta: "எம். மோகன் ராவ் – விருது & அங்கீகாரம் #8 | காப்பீட்டு ஆலோசகர் ஓசூர்",
    },
  },
  {
    id: 9,
    filename: "9.jpeg",
    src: "/images/9.jpeg",
    width: 1200,
    height: 1600,
    aspectRatio: 1200 / 1600,
    orientation: "portrait",
    alt: {
      en: "M. Mohan Rao – Award & Recognition #9 | Insurance Advisor in Hosur",
      ta: "எம். மோகன் ராவ் – விருது & அங்கீகாரம் #9 | காப்பீட்டு ஆலோசகர் ஓசூர்",
    },
  },
  {
    id: 10,
    filename: "10.jpeg",
    src: "/images/10.jpeg",
    width: 1600,
    height: 1200,
    aspectRatio: 1600 / 1200,
    orientation: "landscape",
    alt: {
      en: "M. Mohan Rao – Award & Recognition #10 | Insurance Advisor in Hosur",
      ta: "எம். மோகன் ராவ் – விருது & அங்கீகாரம் #10 | காப்பீட்டு ஆலோசகர் ஓசூர்",
    },
  },
  {
    id: 11,
    filename: "11.jpeg",
    src: "/images/11.jpeg",
    width: 1600,
    height: 1200,
    aspectRatio: 1600 / 1200,
    orientation: "landscape",
    alt: {
      en: "M. Mohan Rao – Award & Recognition #11 | Insurance Advisor in Hosur",
      ta: "எம். மோகன் ராவ் – விருது & அங்கீகாரம் #11 | காப்பீட்டு ஆலோசகர் ஓசூர்",
    },
  },
  {
    id: 12,
    filename: "12.jpeg",
    src: "/images/12.jpeg",
    width: 1600,
    height: 901,
    aspectRatio: 1600 / 901,
    orientation: "landscape",
    alt: {
      en: "M. Mohan Rao – Award & Recognition #12 | Insurance Advisor in Hosur",
      ta: "எம். மோகன் ராவ் – விருது & அங்கீகாரம் #12 | காப்பீட்டு ஆலோசகர் ஓசூர்",
    },
  },
  {
    id: 13,
    filename: "13.jpeg",
    src: "/images/13.jpeg",
    width: 1200,
    height: 1600,
    aspectRatio: 1200 / 1600,
    orientation: "portrait",
    alt: {
      en: "M. Mohan Rao – Award & Recognition #13 | Insurance Advisor in Hosur",
      ta: "எம். மோகன் ராவ் – விருது & அங்கீகாரம் #13 | காப்பீட்டு ஆலோசகர் ஓசூர்",
    },
  },
  {
    id: 14,
    filename: "14.jpeg",
    src: "/images/14.jpeg",
    width: 1600,
    height: 1200,
    aspectRatio: 1600 / 1200,
    orientation: "landscape",
    alt: {
      en: "M. Mohan Rao – Award & Recognition #14 | Insurance Advisor in Hosur",
      ta: "எம். மோகன் ராவ் – விருது & அங்கீகாரம் #14 | காப்பீட்டு ஆலோசகர் ஓசூர்",
    },
  },
  {
    id: 15,
    filename: "15.jpeg",
    src: "/images/15.jpeg",
    width: 1032,
    height: 581,
    aspectRatio: 1032 / 581,
    orientation: "landscape",
    alt: {
      en: "M. Mohan Rao – Award & Recognition #15 | Insurance Advisor in Hosur",
      ta: "எம். மோகன் ராவ் – விருது & அங்கீகாரம் #15 | காப்பீட்டு ஆலோசகர் ஓசூர்",
    },
  },
  {
    id: 16,
    filename: "16.jpeg",
    src: "/images/16.jpeg",
    width: 901,
    height: 1600,
    aspectRatio: 901 / 1600,
    orientation: "portrait",
    alt: {
      en: "M. Mohan Rao – Standing Trophy #16 | Insurance Advisor in Hosur",
      ta: "எம். மோகன் ராவ் – சாதனைச் சின்னம் #16 | காப்பீட்டு ஆலோசகர் ஓசூர்",
    },
  },
  {
    id: 17,
    filename: "17.jpeg",
    src: "/images/17.jpeg",
    width: 1024,
    height: 1536,
    aspectRatio: 1024 / 1536,
    orientation: "portrait",
    alt: {
      en: "M. Mohan Rao – Certificate of Honor #17 | Insurance Advisor in Hosur",
      ta: "எம். மோகன் ராவ் – பாராட்டுச் சான்றிதழ் #17 | காப்பீட்டு ஆலோசகர் ஓசூர்",
    },
  },
  {
    id: 18,
    filename: "18.jpeg",
    src: "/images/18.jpeg",
    width: 1079,
    height: 1566,
    aspectRatio: 1079 / 1566,
    orientation: "portrait",
    alt: {
      en: "M. Mohan Rao – Certificate of Honor #18 | Insurance Advisor in Hosur",
      ta: "எம். மோகன் ராவ் – பாராட்டுச் சான்றிதழ் #18 | காப்பீட்டு ஆலோசகர் ஓசூர்",
    },
  },
  {
    id: 19,
    filename: "19.jpeg",
    src: "/images/19.jpeg",
    width: 1600,
    height: 1200,
    aspectRatio: 1600 / 1200,
    orientation: "landscape",
    alt: {
      en: "M. Mohan Rao – Award & Recognition #19 | Insurance Advisor in Hosur",
      ta: "எம். மோகன் ராவ் – விருது & அங்கீகாரம் #19 | காப்பீட்டு ஆலோசகர் ஓசூர்",
    },
  },
  {
    id: 20,
    filename: "20.jpeg",
    src: "/images/20.jpeg",
    width: 3000,
    height: 4000,
    aspectRatio: 3000 / 4000,
    orientation: "portrait",
    alt: {
      en: "M. Mohan Rao – Award & Recognition #20 | Insurance Advisor in Hosur",
      ta: "எம். மோகன் ராவ் – விருது & அங்கீகாரம் #20 | காப்பீட்டு ஆலோசகர் ஓசூர்",
    },
  },
  {
    id: 21,
    filename: "21.jpeg",
    src: "/images/21.jpeg",
    width: 1200,
    height: 1600,
    aspectRatio: 1200 / 1600,
    orientation: "portrait",
    alt: {
      en: "M. Mohan Rao – Award & Recognition #21 | Insurance Advisor in Hosur",
      ta: "எம். மோகன் ராவ் – விருது & அங்கீகாரம் #21 | காப்பீட்டு ஆலோசகர் ஓசூர்",
    },
  },
  {
    id: 22,
    filename: "22.jpeg",
    src: "/images/22.jpeg",
    width: 1200,
    height: 1600,
    aspectRatio: 1200 / 1600,
    orientation: "portrait",
    alt: {
      en: "M. Mohan Rao – Award & Recognition #22 | Insurance Advisor in Hosur",
      ta: "எம். மோகன் ராவ் – விருது & அங்கீகாரம் #22 | காப்பீட்டு ஆலோசகர் ஓசூர்",
    },
  },
  {
    id: 23,
    filename: "23.jpeg",
    src: "/images/23.jpeg",
    width: 1600,
    height: 1200,
    aspectRatio: 1600 / 1200,
    orientation: "portrait",
    alt: {
      en: "M. Mohan Rao – Award & Recognition #23 | Insurance Advisor in Hosur",
      ta: "எம். மோகன் ராவ் – விருது & அங்கீகாரம் #23 | காப்பீட்டு ஆலோசகர் ஓசூர்",
    },
  },
  {
    id: 24,
    filename: "24.jpeg",
    src: "/images/24.jpeg",
    width: 1600,
    height: 1200,
    aspectRatio: 1600 / 1200,
    orientation: "portrait",
    alt: {
      en: "M. Mohan Rao – Award & Recognition #24 | Insurance Advisor in Hosur",
      ta: "எம். மோகன் ராவ் – விருது & அங்கீகாரம் #24 | காப்பீட்டு ஆலோசகர் ஓசூர்",
    },
  },
  {
    id: 25,
    filename: "25.jpeg",
    src: "/images/25.jpeg",
    width: 1200,
    height: 1600,
    aspectRatio: 1200 / 1600,
    orientation: "portrait",
    alt: {
      en: "M. Mohan Rao – Award & Recognition #25 | Insurance Advisor in Hosur",
      ta: "எம். மோகன் ராவ் – விருது & அங்கீகாரம் #25 | காப்பீட்டு ஆலோசகர் ஓசூர்",
    },
  },
];

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

  // Lightbox index tracks the item in the unified gallery
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Touch tracking for mobile swipe gestures
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  // References for accessibility and scroll locking
  const lightboxRef = useRef<HTMLDivElement>(null);
  const triggerElementRef = useRef<HTMLElement | null>(null);

  // Unified single gallery: All 21 images in full mode, top 8 in preview mode
  const displayItems = React.useMemo(() => {
    return isFull ? AWARDS_GALLERY_DATA : AWARDS_GALLERY_DATA.slice(0, 8);
  }, [isFull]);

  const isLightboxOpen = lightboxIndex !== null;
  const currentImage = lightboxIndex !== null ? displayItems[lightboxIndex] : null;

  // Open Full-Screen Viewer with accessible trigger tracking
  const openLightbox = useCallback((index: number, triggerEl?: HTMLElement) => {
    if (triggerEl) {
      triggerElementRef.current = triggerEl;
    } else if (typeof document !== 'undefined') {
      triggerElementRef.current = document.activeElement as HTMLElement;
    }
    setLightboxIndex(index);
  }, []);

  // Close Full-Screen Viewer and restore keyboard focus
  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    if (triggerElementRef.current) {
      setTimeout(() => {
        triggerElementRef.current?.focus();
      }, 50);
    }
  }, []);

  // Next Image with circular navigation
  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % displayItems.length : null));
  }, [displayItems.length]);

  // Previous Image with circular navigation
  const prevImage = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + displayItems.length) % displayItems.length : null
    );
  }, [displayItems.length]);

  // =========================================================================
  // CRITICAL REQUIREMENT: Complete Background Scroll Lock
  // Works on desktop, Android, and iOS Safari.
  // Preserves exact scroll position and restores original document styles.
  // =========================================================================
  useEffect(() => {
    if (!isLightboxOpen) return;

    // 1. Capture exact current scroll position
    const scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

    // 2. Measure scrollbar width to prevent page layout jump
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

    // 3. Save original body & html styles for clean restoration
    const originalBodyStyles = {
      position: document.body.style.position,
      top: document.body.style.top,
      left: document.body.style.left,
      right: document.body.style.right,
      width: document.body.style.width,
      overflow: document.body.style.overflow,
      paddingRight: document.body.style.paddingRight,
    };
    const originalHtmlOverflow = document.documentElement.style.overflow;

    // 4. Lock page completely using fixed body positioning
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }
    document.documentElement.style.overflow = 'hidden';

    // 5. Keyboard Navigation Listener (Escape, Left, Right, Home, End)
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevImage();
      } else if (e.key === 'Home') {
        e.preventDefault();
        setLightboxIndex(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setLightboxIndex(displayItems.length - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // 6. Cleanup function: runs on close or component unmount (e.g. route change)
    return () => {
      document.body.style.position = originalBodyStyles.position;
      document.body.style.top = originalBodyStyles.top;
      document.body.style.left = originalBodyStyles.left;
      document.body.style.right = originalBodyStyles.right;
      document.body.style.width = originalBodyStyles.width;
      document.body.style.overflow = originalBodyStyles.overflow;
      document.body.style.paddingRight = originalBodyStyles.paddingRight;
      document.documentElement.style.overflow = originalHtmlOverflow;

      // Restore exact scroll position
      window.scrollTo(0, scrollY);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLightboxOpen, closeLightbox, nextImage, prevImage, displayItems.length]);

  // Touch Swipe Handlers for Mobile Full-Screen Navigation
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
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      nextImage(); // Swiped left -> next image
    } else if (distance < -minSwipeDistance) {
      prevImage(); // Swiped right -> previous image
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <section className={`relative py-6 sm:py-10 md:py-12 ${className}`} id="awards">
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
              ? 'தொழில்முறை அங்கீகாரங்கள், சாதனைகள் மற்றும் மறக்கமுடியாத மைல்கற்கள்.'
              : 'Professional recognitions, achievements and memorable milestones.'}
          </p>

          {/* Quick Lightbox Action Button */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={(e) => openLightbox(0, e.currentTarget)}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-brand-navy text-white hover:bg-brand-navy-900 shadow-xs transition-colors cursor-pointer whitespace-nowrap shrink-0 min-h-[40px]"
            >
              <ZoomIn className="w-4 h-4 text-amber-300 shrink-0" aria-hidden="true" />
              <span className="whitespace-nowrap">
                {isTa ? 'சாதனைகள் அனைத்தையும் காண்க' : 'Open Full Gallery View'}
              </span>
            </button>
            <span className="text-xs text-slate-500 font-medium whitespace-nowrap">
              {isTa ? '21 சாதனைகளின் ஆவணத் தொகுப்பு' : '21 Documented Honors & Milestones'}
            </span>
          </div>
        </div>
      )}

      {/* =========================================================================
          CLEAN, UNIFIED 21-IMAGE GALLERY GRID WITH ANIMATED GLOWING BORDER
          - Single unified gallery containing all 21 images (no category filters)
          - No portrait/landscape labels
          - No image dimensions or size info
          - No milestone or recognition text on cards
          - Only the pure achievement image visually displayed
          - Continuous clockwise glowing light traveling around all 4 edges on hover
          - Subtle card elevation and image scale without cropping
          - Zero layout shifts
          ========================================================================= */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-5 [column-fill:_balance]">
        {displayItems.map((item, idx) => {
          return (
            <div
              key={item.id}
              role="button"
              tabIndex={0}
              onClick={(e) => openLightbox(idx, e.currentTarget)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(idx, e.currentTarget);
                }
              }}
              aria-label={item.alt[lang] || item.alt.en}
              className="award-glow-card group break-inside-avoid mb-4 sm:mb-5 focus:outline-hidden focus:ring-2 focus:ring-amber-500"
            >
              {/* Animated Glowing Light Tracer: travels clockwise around all 4 perimeter edges */}
              <div className="award-glow-tracer" aria-hidden="true" />

              {/* Inner Image Container: Only the Achievement Image Displayed */}
              <div
                className="award-glow-inner"
                style={{ aspectRatio: `${item.width} / ${item.height}` }}
              >
                <Image
                  src={item.src}
                  alt={item.alt[lang] || item.alt.en}
                  width={item.width}
                  height={item.height}
                  loading={idx < 4 ? 'eager' : 'lazy'}
                  priority={idx < 2}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  className="w-full h-auto object-contain object-center transition-transform duration-300 group-hover:scale-[1.025]"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Preview Mode Call-to-Action to Dedicated Full Page */}
      {!isFull && (
        <div className="mt-8 sm:mt-10 text-center flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href={`/${lang}/awards`}
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-brand-navy text-white hover:bg-brand-navy-900 shadow-xs hover:shadow-md transition-all duration-200 group cursor-pointer whitespace-nowrap shrink-0 min-h-[44px]"
          >
            <span className="whitespace-nowrap">
              {isTa ? 'அனைத்து 21 சாதனைகளையும் காண்க' : 'Explore All 21 Achievements'}
            </span>
            <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform shrink-0" />
          </Link>
          <span className="text-xs text-slate-500 font-medium">
            {isTa
              ? 'முழு உயர் தெளிவுத்திறன் படத்தொகுப்பிற்கு செல்க'
              : 'View complete high-resolution photo portfolio'}
          </span>
        </div>
      )}

      {/* =========================================================================
          FULL-SCREEN IMAGE VIEWER ON CLICK
          - Covers entire viewport with solid dark background: rgb(5, 10, 20) (no blur)
          - Displays complete original image with object-fit: contain (never cropped)
          - As large as possible inside viewport
          - Controls: Close button in top-right, Prev/Next buttons, Counter (e.g. 5 / 21)
          - Keyboard navigation: Left/Right arrows, Escape to close
          - Backdrop click closes viewer; clicking image does not close
          - Touch swipe navigation on mobile
          ========================================================================= */}
      {isLightboxOpen && currentImage && (
        <div
          ref={lightboxRef}
          role="dialog"
          aria-modal="true"
          aria-label={
            isTa ? 'விருதுகள் மற்றும் சாதனைகள் முழுத் திரை காட்சி' : 'Awards & Achievements Full-Screen Viewer'
          }
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex flex-col items-center justify-between p-3 sm:p-5 select-none animate-in fade-in duration-200 cursor-pointer"
          style={{
            backgroundColor: 'rgb(5, 10, 20)',
            overscrollBehavior: 'contain',
            touchAction: 'none',
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Bar: Counter & Close Button */}
          <div className="w-full max-w-7xl flex items-center justify-between py-2 text-white z-20 shrink-0 pointer-events-none">
            {/* Image Counter */}
            <div className="pointer-events-auto">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs sm:text-sm font-bold border border-white/15">
                {lightboxIndex + 1} / {displayItems.length}
              </span>
            </div>

            {/* Close Button in Top-Right Corner */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              className="pointer-events-auto p-2.5 sm:p-3 rounded-full text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 border border-white/15 transition-all focus:outline-hidden focus:ring-2 focus:ring-amber-400 cursor-pointer"
              aria-label={isTa ? 'படத்தொகுப்பை மூடுக' : 'Close Viewer'}
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
            </button>
          </div>

          {/* Main Display Area: Centered, Large, Complete Original Image */}
          <div className="relative flex-1 w-full max-w-7xl flex items-center justify-center my-2 sm:my-3 min-h-0 pointer-events-none">
            {/* Previous Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="pointer-events-auto absolute left-2 sm:left-4 z-30 p-3 sm:p-4 rounded-full bg-black/75 text-white hover:bg-amber-500 hover:text-brand-navy border border-white/20 transition-all duration-200 focus:outline-hidden focus:ring-2 focus:ring-amber-400 cursor-pointer shadow-xl active:scale-95"
              aria-label={isTa ? 'முந்தைய படம்' : 'Previous Image'}
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" aria-hidden="true" />
            </button>

            {/* Complete Original Image Container (Never Cropped) */}
            <div
              className="pointer-events-auto relative w-full h-full max-h-[80vh] sm:max-h-[85vh] flex items-center justify-center cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={currentImage.src}
                alt={currentImage.alt[lang] || currentImage.alt.en}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1600px"
                className="object-contain object-center drop-shadow-2xl"
              />
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="pointer-events-auto absolute right-2 sm:right-4 z-30 p-3 sm:p-4 rounded-full bg-black/75 text-white hover:bg-amber-500 hover:text-brand-navy border border-white/20 transition-all duration-200 focus:outline-hidden focus:ring-2 focus:ring-amber-400 cursor-pointer shadow-xl active:scale-95"
              aria-label={isTa ? 'அடுத்த படம்' : 'Next Image'}
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" aria-hidden="true" />
            </button>
          </div>

          {/* Bottom Bar: Instructions */}
          <div className="w-full max-w-7xl flex items-center justify-center text-xs text-slate-400 py-1 shrink-0 z-20 pointer-events-none">
            <span className="hidden sm:inline">
              {isTa
                ? 'முந்தைய / அடுத்த படத்திற்கு ← / → அம்புக்குறிகளைப் பயன்படுத்தவும் • மூட பின்னணியை அல்லது Esc அழுத்தவும்'
                : 'Use ← / → arrow keys to navigate • Click backdrop or press Esc to close'}
            </span>
            <span className="sm:hidden text-[11px]">
              {isTa ? 'அடுத்த படத்திற்கு ஸ்வைப் செய்யவும்' : 'Swipe left/right to navigate • Tap backdrop to close'}
            </span>
          </div>
        </div>
      )}
    </section>
  );
};

export default AwardsGallery;
