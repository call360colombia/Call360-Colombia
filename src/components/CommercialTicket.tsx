"use client";

import React from "react";
import Link from "next/link";

export type TicketColor = "gold" | "emerald" | "cyan" | "violet" | "coral" | "dark";

export interface TicketProps {
  category: string;
  title: string;
  subtitle?: string;
  serial: string;
  badge: string;
  color?: TicketColor;
  href?: string;
  className?: string;
  isTransparent?: boolean; // For /nosotros to ensure 0 blur and clean visibility over 80 frames
}

const COLOR_MAP: Record<
  TicketColor,
  {
    bg: string;
    text: string;
    categoryText: string;
    border: string;
    badgeBg: string;
    badgeText: string;
    shadow: string;
  }
> = {
  gold: {
    bg: "bg-[#f4ba3d]",
    text: "text-[#291a00]",
    categoryText: "text-[#4a3300]",
    border: "border-amber-400/40",
    badgeBg: "bg-black/15",
    badgeText: "text-[#291a00]",
    shadow: "shadow-amber-500/20",
  },
  emerald: {
    bg: "bg-[#8be0ac]",
    text: "text-[#052e18]",
    categoryText: "text-[#0b4e2a]",
    border: "border-emerald-400/40",
    badgeBg: "bg-black/15",
    badgeText: "text-[#052e18]",
    shadow: "shadow-emerald-500/20",
  },
  cyan: {
    bg: "bg-[#6be1f7]",
    text: "text-[#052834]",
    categoryText: "text-[#07465c]",
    border: "border-cyan-400/40",
    badgeBg: "bg-black/15",
    badgeText: "text-[#052834]",
    shadow: "shadow-cyan-500/20",
  },
  violet: {
    bg: "bg-[#c3bdfa]",
    text: "text-[#1d164d]",
    categoryText: "text-[#342a78]",
    border: "border-violet-400/40",
    badgeBg: "bg-black/15",
    badgeText: "text-[#1d164d]",
    shadow: "shadow-violet-500/20",
  },
  coral: {
    bg: "bg-[#ff7657]",
    text: "text-[#220904]",
    categoryText: "text-[#4d190f]",
    border: "border-rose-400/40",
    badgeBg: "bg-black/15",
    badgeText: "text-[#220904]",
    shadow: "shadow-rose-500/20",
  },
  dark: {
    bg: "bg-[#0d1117]/85",
    text: "text-white",
    categoryText: "text-cyan-300",
    border: "border-white/20",
    badgeBg: "bg-white/10",
    badgeText: "text-emerald-300",
    shadow: "shadow-black/50",
  },
};

export default function CommercialTicket({
  category,
  title,
  subtitle,
  serial,
  badge,
  color = "emerald",
  href,
  className = "",
  isTransparent = false,
}: TicketProps) {
  const c = COLOR_MAP[color];

  const content = (
    <div
      className={`relative flex h-24 sm:h-28 w-full max-w-[340px] items-stretch overflow-hidden rounded-xl sm:rounded-2xl border ${
        c.border
      } ${
        isTransparent ? "bg-black/45 text-white" : `${c.bg} ${c.text}`
      } shadow-lg ${c.shadow} transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 cursor-pointer select-none ${className}`}
    >
      {/* Muesca troquelada semicircular izquierda */}
      <span
        className="pointer-events-none absolute -left-2.5 top-1/2 -translate-y-1/2 z-20 h-5 w-5 rounded-full bg-[#0a0a0f] shadow-inner"
        aria-hidden="true"
      />
      {/* Muesca troquelada semicircular derecha */}
      <span
        className="pointer-events-none absolute -right-2.5 top-1/2 -translate-y-1/2 z-20 h-5 w-5 rounded-full bg-[#0a0a0f] shadow-inner"
        aria-hidden="true"
      />

      {/* TALÓN IZQUIERDO: "ADMIT ONE" VERTICAL */}
      <div
        className={`w-9 sm:w-10 h-full flex flex-col items-center justify-center border-r-2 border-dashed ${
          isTransparent ? "border-white/20" : "border-black/25"
        } font-mono text-[0.55rem] sm:text-[0.6rem] font-black tracking-widest uppercase opacity-75 select-none [writing-mode:vertical-rl] rotate-180 shrink-0`}
      >
        <span>ADMIT ONE</span>
      </div>

      {/* CUERPO CENTRAL DEL TICKET */}
      <div className="flex-1 flex flex-col items-center justify-center px-3 py-2 text-center min-w-0">
        <span
          className={`font-mono text-[0.58rem] sm:text-[0.62rem] font-black tracking-wider uppercase ${
            isTransparent ? "text-cyan-300" : c.categoryText
          }`}
        >
          ★ {category} ★
        </span>

        <h4 className="font-black text-xs sm:text-sm leading-tight uppercase line-clamp-1 my-1">
          {title}
        </h4>

        {subtitle && (
          <p className="text-[0.65rem] sm:text-[0.7rem] line-clamp-1 opacity-80 font-medium">
            {subtitle}
          </p>
        )}

        {/* Fila de puntitos troquelados estilo arcade */}
        <div className="flex items-center gap-1 my-1 opacity-40" aria-hidden="true">
          <span className="h-1 w-1 rounded-full bg-current" />
          <span className="h-1 w-1 rounded-full bg-current" />
          <span className="h-1 w-1 rounded-full bg-current" />
          <span className="h-1 w-1 rounded-full bg-current" />
          <span className="h-1 w-1 rounded-full bg-current" />
          <span className="h-1 w-1 rounded-full bg-current" />
        </div>

        <span
          className={`font-mono text-[0.6rem] sm:text-[0.65rem] font-bold tracking-wider ${
            isTransparent ? "text-white/60" : "opacity-75"
          }`}
        >
          № {serial}
        </span>
      </div>

      {/* TALÓN DERECHO: SERIAL + BADGE CON LÍNEA PUNTEADA */}
      <div
        className={`w-11 sm:w-12 h-full flex flex-col items-center justify-center border-l-2 border-dashed ${
          isTransparent ? "border-white/20" : "border-black/25"
        } px-1 font-mono text-[0.55rem] sm:text-[0.6rem] font-bold opacity-90 shrink-0`}
      >
        <span className="[writing-mode:vertical-rl] tracking-tighter text-[0.52rem]">
          {serial.slice(0, 5)}
        </span>
        <span
          className={`[writing-mode:vertical-rl] font-black tracking-widest text-[0.58rem] mt-1 px-1 py-0.5 rounded ${
            isTransparent ? "bg-white/10 text-emerald-300" : `${c.badgeBg} ${c.badgeText}`
          }`}
        >
          {badge}
        </span>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block focus:outline-none">
        {content}
      </Link>
    );
  }

  return content;
}
