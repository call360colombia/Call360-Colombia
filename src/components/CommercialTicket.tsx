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
  color = "emerald",
  href,
  className = "",
  isTransparent = false,
}: TicketProps) {
  const chosenColor = isTransparent ? "transparent" : color;
  const p = TICKET_PALETTES[chosenColor] ?? TICKET_PALETTES.emerald;

  const content = (
    <div
      className={`relative flex items-center h-[4.75rem] sm:h-[5.25rem] w-full max-w-[20rem] sm:w-[18.5rem] rounded-2xl ${
        p.bg
      } ${p.text} shadow-[0_12px_28px_-6px_rgba(0,0,0,0.65)] ${
        isTransparent ? "border-2 border-white/20" : "border-2 border-black/15"
      } transition-transform duration-300 hover:scale-105 hover:-translate-y-0.5 shrink-0 overflow-hidden select-none cursor-pointer ${className}`}
    >
      {/* Muescas semicirculares de troquelado a los lados (estilo ticket real) */}
      <span
        className="pointer-events-none absolute -left-2.5 top-1/2 -translate-y-1/2 z-20 h-5 w-5 rounded-full bg-[#0a0a0f] shadow-inner"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute -right-2.5 top-1/2 -translate-y-1/2 z-20 h-5 w-5 rounded-full bg-[#0a0a0f] shadow-inner"
        aria-hidden="true"
      />

      {/* TALÓN IZQUIERDO: "ADMIT ONE" VERTICAL CON LÍNEA PUNTEADA */}
      <div
        className={`w-10 sm:w-11 h-full flex flex-col items-center justify-center border-r-2 border-dashed ${
          isTransparent ? "border-white/20" : "border-black/25"
        } font-mono text-[0.6rem] sm:text-[0.64rem] font-black tracking-widest uppercase opacity-75 select-none [writing-mode:vertical-rl] rotate-180 shrink-0`}
      >
        <span>ADMIT ONE</span>
      </div>

      {/* CUERPO CENTRAL DEL TICKET: CATEGORÍA + TÍTULO + PUNTITOS + SERIAL */}
      <div className="flex-1 flex flex-col items-center justify-center px-2.5 py-1 text-center min-w-0 select-none">
        {/* Categoría superior */}
        <span className="font-mono text-[0.56rem] sm:text-[0.6rem] font-bold tracking-wider opacity-65 uppercase truncate max-w-full">
          ★ {category} ★
        </span>

        {/* Título enérgico del beneficio */}
        <h4 className="font-black text-xs sm:text-[1.02rem] leading-none tracking-tight uppercase line-clamp-1 my-1">
          {title}
        </h4>

        {subtitle ? (
          <p className="text-[0.62rem] sm:text-[0.68rem] opacity-75 line-clamp-1 font-semibold leading-tight -mt-0.5 mb-0.5">
            {subtitle}
          </p>
        ) : (
          /* Fila de puntitos troquelados como en los tickets de arcade de JuanMeza */
          <div className="flex items-center gap-1 my-0.5 opacity-35" aria-hidden="true">
            <span className="h-1 w-1 rounded-full bg-current" />
            <span className="h-1 w-1 rounded-full bg-current" />
            <span className="h-1 w-1 rounded-full bg-current" />
            <span className="h-1 w-1 rounded-full bg-current" />
            <span className="h-1 w-1 rounded-full bg-current" />
            <span className="h-1 w-1 rounded-full bg-current" />
            <span className="h-1 w-1 rounded-full bg-current" />
            <span className="h-1 w-1 rounded-full bg-current" />
          </div>
        )}

        {/* Serial numérico auténtico */}
        <span className="font-mono text-[0.6rem] sm:text-[0.66rem] font-bold tracking-wider opacity-75">
          № {serial}
        </span>
      </div>

      {/* TALÓN DERECHO: SERIAL VERTICAL Y BADGE CON LÍNEA PUNTEADA */}
      <div
        className={`w-11 sm:w-12 h-full flex flex-col items-center justify-center border-l-2 border-dashed ${
          isTransparent ? "border-white/20" : "border-black/25"
        } px-1 font-mono text-[0.56rem] font-bold opacity-80 shrink-0 select-none`}
      >
        <span className="[writing-mode:vertical-rl] tracking-tighter text-[0.52rem]">
          {serial.slice(0, 5)}
        </span>
        <span className="[writing-mode:vertical-rl] font-black tracking-widest text-[0.58rem] mt-0.5">
          {badge}
        </span>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block focus:outline-none w-full max-w-[20rem] sm:w-[18.5rem]">
        {content}
      </Link>
    );
  }

  return content;
}
