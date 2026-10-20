"use client";

import React from "react";
import Link from "next/link";

export type TicketColor =
  | "coral"
  | "gold"
  | "emerald"
  | "cyan"
  | "yellow"
  | "lavender"
  | "violet"
  | "dark"
  | "transparent";

export interface TicketProps {
  category: string;
  title: string;
  subtitle?: string;
  serial: string;
  badge: string;
  stubLabel?: string;
  color?: TicketColor;
  href?: string;
  className?: string;
  isTransparent?: boolean;
}

// Colores exactos extraídos fielmente de D:\Proyectos\JuanMeza (ARCADE_TICKETS)
const TICKET_PALETTES: Record<
  TicketColor,
  {
    bg: string;
    text: string;
    accent: string;
  }
> = {
  coral: {
    bg: "bg-[#ff7657]", // Coral / Mandarina cálido
    text: "text-[#220904]",
    accent: "text-[#ff7657]",
  },
  gold: {
    bg: "bg-[#f4ba3d]", // Amarillo Mostaza / Oro Arcade
    text: "text-[#291a00]",
    accent: "text-[#f4ba3d]",
  },
  emerald: {
    bg: "bg-[#8be0ac]", // Verde Menta Arcade
    text: "text-[#052e18]",
    accent: "text-[#8be0ac]",
  },
  cyan: {
    bg: "bg-[#6be1f7]", // Azul Cian Retro
    text: "text-[#052834]",
    accent: "text-[#6be1f7]",
  },
  yellow: {
    bg: "bg-[#fbe389]", // Amarillo Crema Pastel
    text: "text-[#2f2200]",
    accent: "text-[#fbe389]",
  },
  lavender: {
    bg: "bg-[#c3bdfa]", // Lavanda Suave Arcade
    text: "text-[#1d164d]",
    accent: "text-[#c3bdfa]",
  },
  violet: {
    bg: "bg-[#c3bdfa]", // Alias para lavanda
    text: "text-[#1d164d]",
    accent: "text-[#c3bdfa]",
  },
  dark: {
    bg: "bg-[#0d1117]/90",
    text: "text-white",
    accent: "text-emerald-400",
  },
  transparent: {
    bg: "bg-black/50",
    text: "text-white",
    accent: "text-emerald-400",
  },
};

export default function CommercialTicket({
  category,
  title,
  subtitle,
  serial,
  badge,
  stubLabel = "PASE VIP",
  color = "emerald",
  href,
  className = "",
  isTransparent = false,
}: TicketProps) {
  const chosenColor = isTransparent ? "transparent" : color;
  const p = TICKET_PALETTES[chosenColor] ?? TICKET_PALETTES.emerald;

  const content = (
    <div
      className={`relative flex flex-col justify-between w-full max-w-full rounded-2xl ${
        p.bg
      } ${p.text} shadow-[0_12px_28px_-6px_rgba(0,0,0,0.65)] ${
        isTransparent ? "border-2 border-white/20" : "border-2 border-black/15"
      } transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 shrink-0 overflow-hidden select-none cursor-pointer p-3.5 sm:p-4.5 ${className}`}
    >
      {/* Muescas semicirculares de troquelado a los lados (estilo ticket real) */}
      <span
        className="pointer-events-none absolute -left-3 top-1/2 -translate-y-1/2 z-20 h-6 w-6 rounded-full bg-[#0a0a0f] shadow-inner"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute -right-3 top-1/2 -translate-y-1/2 z-20 h-6 w-6 rounded-full bg-[#0a0a0f] shadow-inner"
        aria-hidden="true"
      />

      {/* CABECERA: CATEGORÍA + SERIAL Y BADGE HORIZONTALES (CERO TEXTO VERTICAL ROTO) */}
      <div className="flex items-center justify-between gap-2 border-b border-dashed border-current/25 pb-2 px-1">
        <span className="font-mono text-[0.62rem] sm:text-[0.68rem] font-bold tracking-wider uppercase opacity-85 truncate">
          ★ {category} ★
        </span>
        <span className="font-mono text-[0.6rem] sm:text-[0.66rem] font-black tracking-wider uppercase opacity-90 shrink-0 px-2 py-0.5 rounded-full bg-black/10 border border-black/10">
          № {serial} · {badge}
        </span>
      </div>

      {/* CUERPO CENTRAL: TÍTULO Y SUBTÍTULO CON ANCHO COMPLETO Y MÁXIMA LEGIBILIDAD */}
      <div className="py-2.5 sm:py-3 px-1 text-center min-w-0">
        <h4 className="font-black text-sm sm:text-base leading-snug tracking-tight uppercase text-center break-normal max-w-full">
          {title}
        </h4>

        {subtitle && (
          <p className="text-xs sm:text-[0.82rem] opacity-90 font-medium leading-relaxed mt-1 text-center break-normal max-w-full">
            {subtitle}
          </p>
        )}
      </div>

      {/* PIE DEL TICKET: TALÓN DE CORTESÍA HORIZONTAL Y PUNTOS TROQUELADOS */}
      <div className="flex items-center justify-between gap-2 border-t border-dashed border-current/25 pt-2 px-1">
        <span className="font-mono text-[0.6rem] sm:text-[0.65rem] font-black tracking-widest uppercase opacity-85">
          ✦ {stubLabel}
        </span>
        <div className="flex items-center gap-1 opacity-40 shrink-0" aria-hidden="true">
          <span className="h-1 w-1 rounded-full bg-current" />
          <span className="h-1 w-1 rounded-full bg-current" />
          <span className="h-1 w-1 rounded-full bg-current" />
          <span className="h-1 w-1 rounded-full bg-current" />
          <span className="h-1 w-1 rounded-full bg-current" />
        </div>
        <span className="font-mono text-[0.58rem] sm:text-[0.62rem] font-bold uppercase tracking-wider opacity-75">
          CALL360 OFICIAL
        </span>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block focus:outline-none w-full max-w-full">
        {content}
      </Link>
    );
  }

  return content;
}
