"use client";

import React from "react";
import CommercialTicket, { TicketColor } from "./CommercialTicket";
import ScrollReveal from "./ScrollReveal";

const TICKETS_DATA: {
  category: string;
  title: string;
  subtitle?: string;
  serial: string;
  badge: string;
  color: TicketColor;
  href: string;
}[] = [
  {
    category: "PÁGINAS WEB",
    title: "Entrega en 72h",
    subtitle: "Al aire desde $100k/mes",
    serial: "720914",
    badge: "FAST",
    color: "cyan", // Azul Cian Retro
    href: "/paginas-web",
  },
  {
    category: "CRM WHATSAPP",
    title: "Multiagente 1 Número",
    subtitle: "Cierres rápidos sin fugas",
    serial: "912045",
    badge: "PRO",
    color: "emerald", // Verde Menta Arcade
    href: "/crm-whatsapp",
  },
  {
    category: "PLAN ANUAL VIP",
    title: "50% Descuento",
    subtitle: "Dominio + 3 Correos Free",
    serial: "600202",
    badge: "TOP",
    color: "gold", // Amarillo Mostaza / Oro Arcade
    href: "/paginas-web#planes",
  },
  {
    category: "GARANTÍA CALL360",
    title: "Mockup Sin Costo",
    subtitle: "Pagas solo si te convence",
    serial: "385610",
    badge: "VIP",
    color: "coral", // Coral / Mandarina Cálido
    href: "/paginas-web",
  },
];

export default function CommercialTicketsBanner({
  title = "Pases y Garantías Comerciales de Alto Impacto",
  subtitle = "Sin cobros sorpresa ni intermediarios. Cada solución viene lista para facturar.",
  className = "",
}: {
  title?: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <section className={`py-10 sm:py-16 relative overflow-hidden ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-500/10 px-4 py-1.5 text-xs font-mono font-bold uppercase tracking-[0.18em] text-amber-300">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-ping" />
              BENEFICIOS &amp; PASES EXCLUSIVOS
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              {title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-white/70 max-w-xl mx-auto">
              {subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* Grid de tickets auténticos de arcade: 1 columna en móvil, 2 en tablet, 4 en desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 justify-items-center w-full">
          {TICKETS_DATA.map((t, idx) => (
            <ScrollReveal key={t.serial} delay={idx * 80} className="w-full flex justify-center">
              <CommercialTicket {...t} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
