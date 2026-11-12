import React from 'react';
import type { Metadata } from 'next';
import { SupportedLanguage } from '@/types';
import { BUSINESS_INFO } from '@/lib/constants';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { Home } from 'lucide-react';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'ta' }];
}

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const lang: SupportedLanguage = resolvedParams.lang === 'ta' ? 'ta' : 'en';

  return {
    title:
      lang === 'ta'
        ? `ஆலோசனை கோரிக்கை வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது | ${BUSINESS_INFO.name}`
        : `Consultation Request Submitted | ${BUSINESS_INFO.name}`,
    description:
      lang === 'ta'
        ? 'உங்கள் ஆலோசனை கோரிக்கை வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது. திரு. எம். மோகன் ராவ் விரைவில் தங்களைத் தொடர்பு கொள்வார்.'
        : 'Your consultation request has been submitted successfully. M. Mohan Rao will contact you shortly.',
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function SuccessPage({ params }: PageProps) {
  const resolvedParams = await params;
  const lang: SupportedLanguage = resolvedParams.lang === 'ta' ? 'ta' : 'en';
  const isTa = lang === 'ta';

  const heading = isTa
    ? 'ஆலோசனை கோரிக்கை வெற்றிகரமாக சமர்ப்பிக்கப்பட்டது!'
    : 'Consultation Request Submitted Successfully!';

  const message = isTa
    ? 'திரு. எம். மோகன் ராவ் (எல்.ஐ.சி நிதி ஆலோசகர்) அவர்களை தொடர்பு கொண்டதற்கு நன்றி. உங்கள் கோரிக்கை வெற்றிகரமாகப் பெறப்பட்டது. விரைவில் தங்களைத் தொடர்பு கொண்டு வழிகாட்டல் வழங்கப்படும்.'
    : 'Thank you for reaching out to M. Mohan Rao – LIC Financial Advisor. Your consultation request has been received successfully. You will be contacted shortly with personalized guidance.';

  const buttonText = isTa ? 'முகப்பிற்குச் செல்லவும்' : 'Go to Home';

  return (
    <div className="min-h-[calc(100vh-140px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-navy-50/40 via-white to-slate-50/60">
      <Container size="narrow" className="w-full flex items-center justify-center">
        <div
          role="status"
          aria-live="polite"
          className="w-full max-w-xl mx-auto bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 md:p-14 text-center shadow-xl shadow-slate-200/50 flex flex-col items-center justify-center"
        >
          {/* Circular Success Icon & Checkmark animation */}
          <div className="relative mb-6 sm:mb-8 flex items-center justify-center">
            <div
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-emerald-50 border-2 border-emerald-500/80 flex items-center justify-center animate-success-circle shadow-lg shadow-emerald-500/10"
              aria-hidden="true"
            >
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-600"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="26"
                  cy="26"
                  r="24"
                  stroke="#10B981"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="opacity-20"
                />
                <path
                  d="M14 27L22 35L38 17"
                  stroke="#059669"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="animate-success-check"
                />
              </svg>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-navy tracking-tight mb-4 animate-success-title max-w-lg leading-tight">
            {heading}
          </h1>

          {/* Confirmation message */}
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-lg mb-8 sm:mb-10 animate-success-body">
            {message}
          </p>

          {/* Go to Home Button */}
          <div className="animate-success-actions">
            <Button
              href={`/${lang}`}
              variant="primary"
              size="lg"
              icon={<Home className="w-5 h-5 text-teal-300" aria-hidden="true" />}
              className="shadow-md hover:shadow-lg transition-all"
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
