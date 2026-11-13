'use client';

import React from 'react';
import { Phone } from 'lucide-react';
import { WHATSAPP_MESSAGES } from '@/lib/constants';
import { SupportedLanguage } from '@/types';

interface FloatingContactActionsProps {
  lang?: SupportedLanguage;
  isMobileMenuOpen?: boolean;
}

export const FloatingContactActions: React.FC<FloatingContactActionsProps> = ({
  lang = 'en',
  isMobileMenuOpen = false,
}) => {
  // If mobile navigation menu is open, hide both buttons to prevent obstruction
  if (isMobileMenuOpen) {
    return null;
  }

  const isTa = lang === 'ta';
  const telUrl = 'tel:+919500253993';
  const whatsappText = encodeURIComponent(
    WHATSAPP_MESSAGES[lang]?.insurance ||
      (isTa
        ? 'வணக்கம் திரு. எம். மோகன் ராவ், ஆயுள், மருத்துவ மற்றும் பொதுக் காப்பீடுகள் குறித்து ஆலோசனை பெற விரும்புகிறேன்.'
        : 'Hello M. Mohan Rao, I would like to enquire about life, health, and general insurance options.')
  );
  const waUrl = `https://wa.me/919443564017?text=${whatsappText}`;

  return (
    <>
      {/* WhatsApp Button: Fixed Bottom-Left */}
      <aside aria-label={isTa ? 'வாட்ஸ்அப் நேரடி தொடர்பு' : 'WhatsApp Contact'}>
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ bottom: 'calc(1rem + env(safe-area-inset-bottom, 0px))' }}
          className="fixed left-4 sm:left-6 z-40 w-12 h-12 sm:w-14 sm:h-14 min-w-[48px] min-h-[48px] rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#1DA851] active:bg-[#178a42] hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center focus:outline-hidden focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer group"
          aria-label={isTa ? 'வாட்ஸ்அப் மூலம் திரு. எம். மோகன் ராவ் அவர்களை தொடர்பு கொள்ளவும்' : 'Chat on WhatsApp with M. Mohan Rao for Insurance Enquiries'}
          title={isTa ? 'வாட்ஸ்அப் தொடர்பு (94435 64017)' : 'WhatsApp Enquiry (94435 64017)'}
        >
          {/* Authentic WhatsApp SVG Icon */}
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7 fill-white transition-transform group-hover:scale-110"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="sr-only">
            {isTa ? 'வாட்ஸ்அப் மூலம் தொடர்பு கொள்ளவும்' : 'Chat on WhatsApp with M. Mohan Rao for Insurance Enquiries'}
          </span>
        </a>
      </aside>

      {/* Call Button: Fixed Bottom-Right */}
      <aside aria-label={isTa ? 'நேரடி அழைப்பு' : 'Direct Phone Call'}>
        <a
          href={telUrl}
          style={{ bottom: 'calc(1rem + env(safe-area-inset-bottom, 0px))' }}
          className="fixed right-4 sm:right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 min-w-[48px] min-h-[48px] rounded-full bg-[#0B3B60] text-white shadow-lg hover:bg-[#082C49] active:bg-[#051C30] hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center focus:outline-hidden focus:ring-4 focus:ring-amber-400/50 cursor-pointer group border-2 border-amber-400"
          aria-label={isTa ? 'திரு. எம். மோகன் ராவ் அவர்களை அழைக்கவும் (95002 53993)' : 'Call M. Mohan Rao directly at 95002 53993'}
          title={isTa ? 'நேரடி அழைப்பு: 95002 53993' : 'Call M. Mohan Rao: 95002 53993'}
        >
          <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-amber-300 transition-transform group-hover:scale-110" aria-hidden="true" />
          <span className="sr-only">
            {isTa ? 'திரு. எம். மோகன் ராவ் அவர்களை நேரடியாக அழைக்கவும்' : 'Call M. Mohan Rao directly'}
          </span>
        </a>
      </aside>
    </>
  );
};

export default FloatingContactActions;
