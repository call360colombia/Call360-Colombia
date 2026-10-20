"use client";

import React, { useState } from "react";

const BENEFITS = [
  {
    feature: "Hosting de Alta Velocidad",
    example: "Servidores Cloud SSD Ultrarrápidos",
    color: "text-cyan-300 bg-cyan-500/15 border-cyan-500/25",
  },
  {
    feature: "Dominio Propio Incluido",
    example: ".com o .co configurado para tu empresa",
    color: "text-emerald-300 bg-emerald-500/15 border-emerald-500/25",
  },
  {
    feature: "Correos Corporativos con IA",
    example: "Cuentas oficiales con asistente integrado",
    color: "text-violet-300 bg-violet-500/15 border-violet-500/25",
  },
  {
    feature: "Seguridad SSL & Certificados",
    example: "Candado seguro y encriptación bancaria",
    color: "text-amber-300 bg-amber-500/15 border-amber-500/25",
  },
  {
    feature: "Páginas Web en 72 Horas",
    example: "Al aire desde $100.000 COP/mes",
    color: "text-cyan-300 bg-cyan-500/15 border-cyan-500/25",
  },
  {
    feature: "CRM WhatsApp Multiagente",
    example: "1 solo número para todo el equipo de ventas",
    color: "text-emerald-300 bg-emerald-500/15 border-emerald-500/25",
  },
  {
    feature: "Soporte Directo con Desarrollador",
    example: "Atención personalizada en Bogotá sin bots",
    color: "text-rose-300 bg-rose-500/15 border-rose-500/25",
  },
  {
    feature: "Copias y Mantenimiento Continuo",
    example: "Respaldo automático y estabilidad 24/7",
    color: "text-cyan-300 bg-cyan-500/15 border-cyan-500/25",
  },
];

export default function LiveBenefitsTicker({ className = "" }: { className?: string }) {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicamos exactamente una vez para un ciclo continuo suave y sin sobrecargar el ancho
  const duplicatedItems = [...BENEFITS, ...BENEFITS];

  return (
    <div
      className={`relative w-full overflow-hidden border-y border-white/[0.08] bg-[#07090d]/95 select-none ${className}`}
      aria-label="Beneficios y garantías comerciales Call360"
    >
      <div
        className="relative flex h-10 sm:h-11 w-full items-center px-2 sm:px-3 overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Distintivo de señal en vivo */}
        <div className="z-10 flex shrink-0 items-center gap-1.5 sm:gap-2 rounded-md bg-emerald-500/15 px-2.5 sm:px-3 py-1 text-[0.62rem] sm:text-[0.68rem] font-bold tracking-wider text-emerald-400 uppercase border border-emerald-500/30 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="hidden sm:inline">BENEFICIOS INCLUIDOS</span>
          <span className="sm:hidden">INCLUIDO</span>
        </div>

        {/* Separador vertical */}
        <div className="z-10 mx-2 sm:mx-3 h-4 w-px bg-white/20 shrink-0" aria-hidden="true" />

        {/* Contenedor del ticker pausado y calmado */}
        <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_3%,black_97%,transparent)]">
          <div
            className="flex w-max items-center gap-6 sm:gap-8 py-1 animate-ticker pointer-events-auto"
            style={{
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {duplicatedItems.map((item, index) => (
              <span
                key={`${item.feature}-${index}`}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white/90 whitespace-nowrap"
              >
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-400/20 text-[0.65rem] font-black text-emerald-400 border border-emerald-400/40 shrink-0">
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

        {/* Indicador de pausa visual sutil cuando se toca o se hace hover */}
        {isPaused && (
          <span className="z-10 ml-2 hidden sm:inline-flex items-center gap-1 rounded bg-white/10 px-1.5 py-0.5 text-[9px] font-mono text-white/70 shrink-0">
            Pausado
          </span>
        )}
      </div>
    </div>
  );
}
