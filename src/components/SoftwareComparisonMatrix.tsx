"use client";

import WhatsAppButton from "@/components/WhatsAppButton";

const COMPARISON_ROWS = [
  {
    feature: "Moneda y Facturación",
    foreign: "Cobro en dólares (USD) indexado a TRM variable, recargo por tarjeta internacional",
    call360: "Tarifa plana fija en Pesos Colombianos (COP) con Factura Electrónica y NIT legal",
    badge: "100% Legal en Colombia",
  },
  {
    feature: "Soporte Técnico & Respuestas",
    foreign: "Tickets por email en inglés con respuesta en 48-72h, bots automatizados",
    call360: "Atención directa en WhatsApp con Juan David Meza y equipo de ingenieros en Bogotá",
    badge: "Sin Intermediarios",
  },
  {
    feature: "Telefonía y Minutos",
    foreign: "Cobro por minuto / segundo + cargos por troncal que inflan la factura mensual",
    call360: "Minutos ilimitados incluidos a cualquier operador móvil y fijo en Colombia",
    badge: "Cero Sorpresas",
  },
  {
    feature: "WhatsApp Multiagente",
    foreign: "Cargos extra por cada mensaje o plantilla enviada, interfaces complejas",
    call360: "Múltiples asesores en una sola línea, campañas masivas y créditos IA incluidos",
    badge: "Baja Probabilidad Bloqueo",
  },
  {
    feature: "Páginas Web y Lanzamiento",
    foreign: "Meses de espera con agencias tradicionales o plantillas genéricas sin WhatsApp",
    call360: "Web profesional de alto impacto entregada en 72 horas con mockup gratis previo",
    badge: "Entrega Récord 72h",
  },
  {
    feature: "Permanencia y Riesgo",
    foreign: "Contratos anuales obligatorios con penalidades por cancelación",
    call360: "Sin cláusulas de permanencia • 14 días gratis CRM WhatsApp • Demo 6h de llamadas",
    badge: "Cero Riesgo",
  },
];

export default function SoftwareComparisonMatrix() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden" id="comparativa-saas">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-violet-300 mb-4 shadow-sm">
            ★ Análisis Comparativo de Mercado ★
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            ¿Por qué las empresas colombianas eligen{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Call360 frente a software extranjero?
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed">
            Elimina el sobrecosto del dólar, los intermediarios y las semanas de espera. Descubre la ventaja de operar con infraestructura local propia.
          </p>
        </div>

        {/* Comparison Table Grid */}
        <div className="rounded-3xl border border-white/10 bg-[#12141f] shadow-2xl overflow-hidden">
          {/* Header Row */}
          <div className="grid grid-cols-12 border-b border-white/10 bg-[#171b29] text-xs sm:text-sm font-black uppercase tracking-wider">
            <div className="col-span-12 md:col-span-4 p-4 sm:p-5 text-white/50">
              Factor Decisivo
            </div>
            <div className="hidden md:block md:col-span-4 p-4 sm:p-5 text-red-400/90 border-l border-white/10">
              ✕ Software Extranjero / Proveedores Tradicionales
            </div>
            <div className="hidden md:block md:col-span-4 p-4 sm:p-5 text-emerald-400 bg-emerald-500/10 border-l border-emerald-500/20">
              ✓ Ecosistema Comercial Call360 Colombia
            </div>
          </div>

          {/* Data Rows */}
          <div className="divide-y divide-white/[0.06]">
            {COMPARISON_ROWS.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 transition-colors hover:bg-white/[0.02]"
              >
                {/* Feature Title */}
                <div className="col-span-12 md:col-span-4 p-4 sm:p-5 flex flex-col justify-center">
                  <span className="text-sm sm:text-base font-bold text-white block">
                    {row.feature}
                  </span>
                  <span className="text-[11px] font-mono text-cyan-400 mt-1">
                    {row.badge}
                  </span>
                </div>

                {/* Foreign Competitors */}
                <div className="col-span-12 md:col-span-4 p-4 sm:p-5 border-t md:border-t-0 md:border-l border-white/10 flex items-start gap-2.5 bg-red-500/[0.02]">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-400 text-[10px] font-bold">
                    ✕
                  </span>
                  <div>
                    <span className="text-xs sm:text-sm text-white/50 leading-relaxed block">
                      {row.foreign}
                    </span>
                    <span className="text-[10px] text-red-400/70 font-mono mt-1 block md:hidden">
                      (Software tradicional)
                    </span>
                  </div>
                </div>

                {/* Call360 Colombia */}
                <div className="col-span-12 md:col-span-4 p-4 sm:p-5 border-t md:border-t-0 md:border-l border-emerald-500/20 bg-emerald-500/[0.05] flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-black text-[10px] font-black">
                    ✓
                  </span>
                  <div>
                    <span className="text-xs sm:text-sm text-white font-medium leading-relaxed block">
                      {row.call360}
                    </span>
                    <span className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider mt-1 block md:hidden">
                      (Ventaja Call360)
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer of Table */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-violet-500/10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-base sm:text-lg font-black text-white">
                ¿Listo para migrar tu operación comercial a Call360?
              </h4>
              <p className="text-xs sm:text-sm text-white/70">
                Migración asistida sin perder tus números ni tus historiales de clientes.
              </p>
            </div>
            <WhatsAppButton
              text="Hola Call360, quiero migrar mi sistema comercial y cotizar las soluciones para mi empresa."
              label="Hablar con un Asesor en Bogotá"
              className="w-full sm:w-auto shrink-0 shadow-lg shadow-emerald-500/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
