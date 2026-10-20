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
    feature: "Soporte Directo Desarrollador",
    example: "Sin Bots ni Tickets Eternos",
    color: "text-cyan-300 bg-cyan-500/15 border-cyan-500/25",
  },
];

export default function LiveBenefitsTicker({ className = "" }: { className?: string }) {
  // Duplicamos ítems para loop continuo en pantallas medianas y grandes
  const duplicatedItems = [...BENEFITS, ...BENEFITS, ...BENEFITS];

  return (
    <div
      className={`relative w-full overflow-hidden border-y border-white/[0.08] bg-[#07090d]/95 select-none ${className}`}
      aria-label="Beneficios y garantías comerciales Call360"
    >
      {/* VISTA MÓVIL (< 640px): Rejilla limpia de 2 columnas que fluye con la sección sin descuadrar la pantalla */}
      <div className="sm:hidden px-3.5 py-3 w-full">
        <div className="flex items-center gap-1.5 mb-2.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="text-[10px] font-mono font-bold tracking-wider text-emerald-400 uppercase">
            Garantías y Beneficios Incluidos
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {BENEFITS.slice(0, 4).map((item) => (
            <div
              key={item.feature}
              className="flex items-start gap-1.5 rounded-lg border border-white/[0.06] bg-white/[0.03] p-2"
            >
              <span className="text-emerald-400 text-xs font-bold shrink-0 mt-0.5">✓</span>
              <div className="min-w-0">
                <p className="text-[11px] font-bold text-white leading-tight truncate">
                  {item.feature}
                </p>
                <p className="text-[9px] font-mono text-emerald-300/80 leading-tight truncate mt-0.5">
                  {item.example}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* VISTA TABLET Y DESKTOP (>= 640px): Ticker continuo estilo Breaking News / Live Feed */}
      <div className="hidden sm:flex h-11 w-full items-center px-3">
        {/* Distintivo de señal en vivo */}
        <div className="z-10 flex shrink-0 items-center gap-2 rounded-md bg-emerald-500/15 px-3 py-1 text-[0.68rem] font-bold tracking-wider text-emerald-400 uppercase border border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span>BENEFICIOS INCLUIDOS</span>
        </div>

        {/* Separador vertical */}
        <div className="z-10 mx-3 h-4 w-px bg-white/20 shrink-0" aria-hidden="true" />

        {/* Contenedor del ticker con máscara de degradado en los extremos */}
        <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)]">
          <div className="flex w-max items-center gap-8 py-1 animate-ticker pointer-events-none">
            {duplicatedItems.map((item, index) => (
              <span
                key={`${item.feature}-${index}`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-white/90 whitespace-nowrap"
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400/20 text-[0.65rem] font-black text-emerald-400 border border-emerald-400/40">
                  ✓
                </span>
                <span className="text-white font-semibold">{item.feature}</span>
                <span className={`font-mono text-[0.72rem] px-2 py-0.5 rounded-md border ${item.color}`}>
                  → {item.example}
                </span>
                <span className="text-white/20 text-[0.65rem] pl-2">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
