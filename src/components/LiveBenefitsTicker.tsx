"use client";

import React from "react";

const BENEFITS = [
  {
    feature: "Páginas Web en 72h",
    example: "Al aire desde $100.000/mes",
    color: "text-cyan-300 bg-cyan-500/15 border-cyan-500/25",
  },
  {
    feature: "CRM WhatsApp Multiagente",
    example: "1 Solo Número para Todo el Equipo",
    color: "text-emerald-300 bg-emerald-500/15 border-emerald-500/25",
  },
  {
    feature: "Plan Anual 50% DCTO",
    example: "Dominio .com + 3 Correos de Obsequio",
    color: "text-amber-300 bg-amber-500/15 border-amber-500/25",
  },
  {
    feature: "Correos con Inteligencia Artificial",
    example: "100 Créditos IA/Mes Incluidos",
    color: "text-violet-300 bg-violet-500/15 border-violet-500/25",
  },
  {
    feature: "Telefonía IP Issabel",
    example: "Minutos Ilimitados a Todo Colombia",
    color: "text-emerald-300 bg-emerald-500/15 border-emerald-500/25",
  },
  {
    feature: "Soporte Directo con el Desarrollador",
    example: "Sin Bots ni Tickets Eternos",
    color: "text-cyan-300 bg-cyan-500/15 border-cyan-500/25",
  },
];

export default function LiveBenefitsTicker({ className = "" }: { className?: string }) {
  // Cuadruplicamos para loop continuo perfecto
  const items = [...BENEFITS, ...BENEFITS, ...BENEFITS, ...BENEFITS];

  return (
    <div
      className={`relative flex h-10 w-full items-center overflow-hidden border-y border-white/[0.08] bg-[#07090d]/90 px-2 select-none ${className}`}
      aria-label="Beneficios y garantías comerciales Call360"
    >
      {/* Insignia izquierda tipo señal de noticias en directo */}
      <div className="z-10 flex shrink-0 items-center gap-1.5 sm:gap-2 rounded-md bg-emerald-500/15 px-2.5 py-1 text-[0.62rem] sm:text-[0.68rem] font-bold tracking-wider text-emerald-400 uppercase border border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
        <span className="hidden xs:inline">BENEFICIOS INCLUIDOS</span>
        <span className="xs:hidden">INCLUIDO</span>
      </div>

      <div className="z-10 mx-2 h-4 w-px bg-white/15 shrink-0" aria-hidden="true" />

      {/* Contenedor del ticker continuo con animación CSS pura */}
      <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
        <div className="flex w-max items-center gap-6 sm:gap-8 py-1 animate-ticker">
          {items.map((item, index) => (
            <span
              key={`${item.feature}-${index}`}
              className="inline-flex items-center gap-2 text-xs font-semibold text-white/90 whitespace-nowrap"
            >
              <span className="flex h-3.5 w-3.5 items-center justify-center rounded-full bg-emerald-400/20 text-[0.6rem] font-black text-emerald-400 border border-emerald-400/30">
                ✓
              </span>
              <span className="text-white font-semibold">{item.feature}</span>
              <span
                className={`font-mono text-[0.68rem] sm:text-[0.72rem] px-2 py-0.5 rounded-md border ${item.color}`}
              >
                → {item.example}
              </span>
              <span className="text-white/20 text-[0.65rem] pl-2">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
