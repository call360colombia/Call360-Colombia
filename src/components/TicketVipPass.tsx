"use client";

import React from "react";
import Link from "next/link";
import WhatsAppButton from "./WhatsAppButton";

export interface TicketVipPassProps {
  badge?: string;
  title: string;
  subtitle: string;
  priceTag?: string;
  benefits?: string[];
  primaryCtaText?: string;
  primaryCtaLabel?: string;
  secondaryCtaHref?: string;
  secondaryCtaLabel?: string;
  serialNumber?: string;
  className?: string;
  accentColor?: "emerald" | "cyan" | "gold" | "violet";
  isTransparent?: boolean; // For /nosotros: zero blur, pure crisp view
}

export default function TicketVipPass({
  badge = "PASE VIP DE PROYECTO",
  title,
  subtitle,
  priceTag,
  benefits,
  primaryCtaText = "Hola Juan, quiero cotizar un proyecto web / CRM para mi negocio",
  primaryCtaLabel = "Solicitar Pase VIP por WhatsApp",
  secondaryCtaHref,
  secondaryCtaLabel,
  serialNumber = "№ C360-2026-VIP",
  className = "",
  accentColor = "emerald",
  isTransparent = false,
}: TicketVipPassProps) {
  const accentBorder = {
    emerald: "border-emerald-500/40 hover:border-emerald-400",
    cyan: "border-cyan-400/40 hover:border-cyan-300",
    gold: "border-amber-400/40 hover:border-amber-300",
    violet: "border-violet-500/40 hover:border-violet-400",
  }[accentColor];

  const accentBadge = {
    emerald: "border-emerald-400/40 bg-emerald-500/10 text-emerald-300",
    cyan: "border-cyan-400/40 bg-cyan-500/10 text-cyan-300",
    gold: "border-amber-400/40 bg-amber-500/10 text-amber-300",
    violet: "border-violet-400/40 bg-violet-500/10 text-violet-300",
  }[accentColor];

  return (
    <div
      className={`relative overflow-hidden rounded-3xl border ${accentBorder} ${
        isTransparent ? "bg-black/45" : "bg-[#0c0e14]/90"
      } shadow-2xl transition-all duration-300 ${className}`}
    >
      {/* Muescas troqueladas laterales grandes de ticket de acceso */}
      <span
        className="pointer-events-none absolute -left-3.5 top-1/2 -translate-y-1/2 z-20 h-7 w-7 rounded-full bg-[#0a0a0f] shadow-inner"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 h-7 w-7 rounded-full bg-[#0a0a0f] shadow-inner"
        aria-hidden="true"
      />

      <div className="relative z-10 p-6 sm:p-10 md:p-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-dashed border-white/15 pb-6 mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-xs font-bold uppercase tracking-widest ${accentBadge}">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>★ {badge} ★</span>
          </div>

          <div className="font-mono text-xs font-bold text-white/50 tracking-wider">
            <span>SERIAL: </span>
            <span className="text-white/90">{serialNumber}</span>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="max-w-3xl">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight tracking-tight">
            {title}
          </h3>

          <p className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed font-normal">
            {subtitle}
          </p>

          {priceTag && (
            <div className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white/[0.06] border border-white/10 px-4 py-2">
              <span className="text-xs uppercase font-bold tracking-wider text-emerald-400">
                Inversión:
              </span>
              <span className="text-lg sm:text-xl font-black text-white">{priceTag}</span>
            </div>
          )}

          {benefits && benefits.length > 0 && (
            <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {benefits.map((b, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-white/85">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-black text-xs border border-emerald-500/30">
                    ✓
                  </span>
                  <span>{b}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Acciones del ticket */}
        <div className="mt-8 pt-6 border-t border-dashed border-white/15 flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3 sm:gap-4">
          <WhatsAppButton
            text={primaryCtaText}
            label={primaryCtaLabel}
            className="w-full sm:w-auto min-h-[50px] !bg-emerald-500 hover:!bg-emerald-400 text-black font-extrabold !border !border-emerald-300/50 shadow-xl shadow-emerald-500/30 text-sm px-6 py-3"
          />

          {secondaryCtaHref && secondaryCtaLabel && (
            <Link
              href={secondaryCtaHref}
              className="inline-flex w-full sm:w-auto min-h-[50px] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-6 py-3 text-sm font-bold text-white transition-all hover:border-cyan-400/50 hover:bg-white/[0.12] active:scale-[0.98]"
            >
              <span>{secondaryCtaLabel}</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
