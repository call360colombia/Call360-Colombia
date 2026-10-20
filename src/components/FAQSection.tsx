"use client";

import { useState } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
  showCta?: boolean;
  ctaLabel?: string;
  ctaText?: string;
  ctaSubtext?: string;
}

export default function FAQSection({
  items,
  title = "Preguntas frecuentes",
  showCta = false,
  ctaLabel = "Resolver otras dudas",
  ctaText = "Hola Call360, tengo una duda sobre el servicio que no está en las preguntas frecuentes.",
  ctaSubtext,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            {title}
          </h2>
        </div>
        
        <div className="space-y-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-white/[0.08] bg-[#12121a] transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-base font-bold text-white">{item.question}</span>
                <svg
                  className={`ml-4 h-5 w-5 shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 pt-0">
                  <p className="text-sm leading-relaxed text-white/60">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showCta && (
          <div className="mt-12 flex flex-col items-center justify-center gap-3">
            <WhatsAppButton label={ctaLabel} text={ctaText} />
            {ctaSubtext && <p className="text-xs text-white/40">{ctaSubtext}</p>}
          </div>
        )}
      </div>
    </section>
  );
}
