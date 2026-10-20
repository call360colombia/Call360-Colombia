"use client";

import React from "react";
import CommercialTicket, { TicketColor } from "./CommercialTicket";
import ScrollReveal from "./ScrollReveal";

const TICKETS_DATA: {
  category: string;
  title: string;
  subtitle: string;
  serial: string;
  badge: string;
  color: TicketColor;
  href: string;
}[] = [
  {
    category: "PÁGINAS WEB",
    title: "Entrega en 72h",
    subtitle: "Sitio web al aire desde $100k/mes",
    serial: "720914",
    badge: "FAST",
    color: "cyan",
    href: "/paginas-web",
  },
  {
    category: "CRM WHATSAPP",
    title: "Multiagente 1 Número",
    subtitle: "Campañas y cierre sin fugas",
    serial: "912045",
    badge: "PRO",
    color: "emerald",
    href: "/crm-whatsapp",
  },
  {
    category: "PLAN ANUAL VIP",
    title: "50% Descuento",
    subtitle: "Dominio .com + 3 Correos de Obsequio",
    serial: "600202",
    badge: "GOLD",
    color: "gold",
    href: "/paginas-web#planes",
  },
  {
    category: "CORREO & IA",
    title: "100 Créditos IA/Mes",
    subtitle: "Webmail corporativo anti-spam",
    serial: "385610",
    badge: "AI",
    color: "violet",
    href: "/paginas-web",
  },
];

export default function CommercialTicketsBanner({
  title = "Pases y Beneficios Exclusivos Incluidos",
  subtitle = "Sin cobros sorpresa ni intermediarios. Cada solución viene lista para facturar.",
  className = "",
}: {
  title?: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <section className={`py-12 sm:py-16 relative overflow-hidden ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.18em] text-amber-300">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-ping" />
              Garantías &amp; Obsequios Comerciales
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              {title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-white/60 max-w-xl mx-auto">
              {subtitle}
            </p>
          </div>
        </ScrollReveal>

        {/* Grid de 4 tickets de alto impacto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 justify-items-center">
          {TICKETS_DATA.map((t, idx) => (
            <ScrollReveal key={t.serial} delay={idx * 100}>
              <CommercialTicket {...t} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
