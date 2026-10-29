import React from "react";
import WhatsAppButton from "./WhatsAppButton";

const correoBeneficios = [
  {
    title: "Te ves como empresa",
    description:
      "ventas@tunegocio.com genera más confianza que un correo personal con números y guiones bajos.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: "Te responden más",
    description:
      "Los mensajes que salen de tu dominio no parecen spam y llegan a la bandeja correcta del cliente.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M4 4h16v12H5.17L4 17.17V4z" />
        <polyline points="8 9 11 12 16 7" />
      </svg>
    ),
  },
  {
    title: "Tu equipo se ve ordenado",
    description:
      "Cada área con su cuenta: ventas@, gerencia@, facturacion@. Nada de mezclar lo personal con el negocio.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="3" y="4" width="18" height="4" rx="1" />
        <rect x="3" y="10" width="18" height="4" rx="1" />
        <rect x="3" y="16" width="18" height="4" rx="1" />
      </svg>
    ),
  },
  {
    title: "La información se queda en tu empresa",
    description:
      "Si cambia un empleado o un celular, los correos y las conversaciones siguen siendo tuyos.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
];

const planesWeb = [
  {
    name: "Plan Mensual Flexible",
    tag: "Baja inversión inicial",
    tagClass: "bg-white/[0.06] text-white/70",
    description: "Para empezar sin descapitalizarte.",
    price: "$100.000",
    period: "COP / mes",
    note: "Primer pago de inicio: $140.000 COP",
    noteClass: "text-cyan-400",
    features: [
      "Tu página web con dominio propio",
      "Diseño pensado para celular y carga rápida",
      "Botones de WhatsApp listos para vender",
      "Soporte y cambios mes a mes",
    ],
    extra: "Correo corporativo opcional: +$20.000 / mes",
    cta: "Empezar plan mensual",
    waText: "Hola Call360, me interesa el Plan Mensual Flexible de página web ($100.000 COP/mes)",
    featured: false,
  },
  {
    name: "Plan Anual Crecimiento",
    tag: "El más elegido",
    tagClass: "bg-cyan-500/20 text-cyan-300",
    description: "Presencia todo el año con 50% de ahorro.",
    price: "$600.000",
    period: "COP / año",
    note: "Equivale a $50.000 COP al mes",
    noteClass: "text-emerald-400",
    features: [
      "Página web completa y personalizada",
      "Dominio .com o .co a tu nombre",
      "Hosting rápido y certificado de seguridad",
      "3 correos corporativos de obsequio",
      "Optimización básica para Google",
    ],
    extra: null,
    cta: "Aprovechar el 50%",
    waText:
      "Hola Call360, quiero el Plan Anual Crecimiento de página web con 50% de descuento ($600.000 COP/año)",
    featured: true,
  },
  {
    name: "Plan Empresarial Pro",
    tag: "A la medida",
    tagClass: "bg-violet-500/10 text-violet-300 border border-violet-500/20",
    description: "Para bases de datos, usuarios o plataformas.",
    price: "$1.200.000",
    period: "COP",
    note: "Alcance definido contigo antes de empezar",
    noteClass: "text-violet-300",
    features: [
      "Web corporativa de alto rendimiento",
      "Base de datos y sistema de usuarios",
      "Integraciones con CRM o APIs",
      "Hasta 10 correos corporativos",
    ],
    extra: null,
    cta: "Cotizar mi proyecto",
    waText: "Hola Call360, quiero cotizar el Plan Empresarial Pro de página web ($1.200.000 COP)",
    featured: false,
  },
];

const planesCorreo = [
  {
    name: "Plan Correo Mensual",
    tag: "Mensual",
    price: "$40.000",
    period: "COP / usuario / mes",
    description: "Correo corporativo con dominio propio + CRM comercial con 500 créditos IA al mes.",
    cta: "Contratar Plan Correo",
    waText: "Hola Call360, me interesa el Plan Correo ($40.000 COP/usuario/mes) con 500 créditos IA",
    style: "border-cyan-500/40 bg-gradient-to-b from-cyan-500/[0.08] to-[#11131c]",
    priceClass: "text-cyan-300",
    ctaClass: "!bg-cyan-500 !text-black font-black hover:!bg-cyan-400",
    recommended: true,
  },
  {
    name: "Plan Correo Anual",
    tag: "Ahorro anual",
    price: "$240.000",
    period: "COP / usuario / año",
    description: "Equiv. ref. $20.000/mes. Correo corporativo + CRM + 500 créditos IA/mes con renovación mensual fija.",
    cta: "Contratar Plan Correo Anual",
    waText: "Hola Call360, me interesa el Plan Correo Anual ($240.000 COP/usuario/año) con 500 créditos IA",
    style: "border-emerald-400/50 bg-gradient-to-b from-emerald-500/[0.12] to-[#11131c]",
    priceClass: "text-emerald-400",
    ctaClass: "!bg-none !bg-emerald-500 !text-black font-black hover:!bg-emerald-400",
  },
];

export default function WebAndEmailPricing({ className = "" }: { className?: string }) {
  return (
    <div className={`space-y-14 sm:space-y-20 ${className}`}>
      {/* PÁGINAS WEB */}
      <div>
        <div className="mb-6 text-center sm:mb-8">
          <h3 className="text-xl font-black text-white sm:text-2xl">Planes de páginas web</h3>
          <p className="mx-auto mt-1.5 max-w-lg text-[13px] leading-relaxed text-white/55 sm:text-sm">
            Elige cómo pagarla. La página es la misma: rápida, hecha para celular y conectada a tu
            WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3">
          {planesWeb.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex h-full flex-col justify-between rounded-2xl p-5 sm:p-6 ${
                plan.featured
                  ? "border-2 border-cyan-400/60 bg-gradient-to-b from-cyan-500/[0.14] via-[#11131c] to-[#11131c] shadow-[0_0_50px_-15px_rgba(6,182,212,0.35)]"
                  : "border border-white/[0.08] bg-[#11131c]"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-black shadow-lg">
                  ⚡ Ahorra 50%
                </span>
              )}

              <div>
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${plan.tagClass}`}
                >
                  {plan.tag}
                </span>
                <h4 className="mt-3 text-xl font-black text-white">{plan.name}</h4>
                <p className="mt-1 text-[13px] leading-relaxed text-white/50">{plan.description}</p>

                <div className="my-4 border-y border-white/[0.08] py-4">
                  <div className="flex flex-wrap items-baseline gap-x-1.5">
                    <span className="text-[2rem] font-black leading-none text-white">{plan.price}</span>
                    <span className="text-[11px] text-white/50">{plan.period}</span>
                  </div>
                  <p className={`mt-1.5 text-[11px] font-semibold ${plan.noteClass}`}>{plan.note}</p>
                </div>

                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-[13px] leading-snug text-white/70">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-500/15 text-[10px] font-black text-cyan-400">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                  {plan.extra && (
                    <li className="rounded-lg border border-cyan-500/20 bg-cyan-500/[0.06] px-2.5 py-1.5 text-[11px] text-cyan-200/90">
                      {plan.extra}
                    </li>
                  )}
                </ul>
              </div>

              <div className="mt-5 border-t border-white/[0.08] pt-4">
                <WhatsAppButton
                  text={plan.waText}
                  label={plan.cta}
                  className={`w-full justify-center min-h-[46px] text-[13px] ${
                    plan.featured
                      ? "!bg-gradient-to-r !from-cyan-400 !to-blue-500 !text-black font-black hover:!from-cyan-300 hover:!to-blue-400"
                      : "!bg-none !bg-transparent border border-white/20 hover:!bg-white/[0.08]"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CORREO CORPORATIVO: BENEFICIOS ANTES DE PRECIOS */}
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0e16] p-4 sm:p-8">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative z-10">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-300">
              ¿Y el correo?
            </span>
            <h3 className="mt-3 text-[1.35rem] font-black leading-tight text-white sm:text-2xl">
              En qué te beneficia tener correo con tu dominio
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-[13px] leading-relaxed text-white/60 sm:text-sm">
              Si hoy escribes desde un Gmail personal, tu cliente ve{" "}
              <span className="text-white/80">“ventas.minegocio@gmail.com”</span> y algo no cuadra.
              Con un correo de empresa pasa lo contrario:
            </p>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {correoBeneficios.map((beneficio) => (
              <div
                key={beneficio.title}
                className="flex gap-3 rounded-xl border border-white/[0.07] bg-white/[0.02] p-3.5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-emerald-300">
                  {beneficio.icon}
                </span>
                <div>
                  <h4 className="text-[13.5px] font-black text-white">{beneficio.title}</h4>
                  <p className="mt-0.5 text-[12px] leading-relaxed text-white/55">
                    {beneficio.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 text-center">
            <h4 className="text-lg font-black text-white">Planes de correo corporativo</h4>
            <p className="mt-1 text-[12px] text-white/50">
              Incluyen configuración en tu celular, webmail y las apps que ya usas.
            </p>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {planesCorreo.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex h-full flex-col justify-between rounded-xl p-4 ${plan.style}`}
              >
                {plan.recommended && (
                  <span className="absolute -top-2.5 left-4 rounded-full bg-emerald-500 px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-black">
                    Recomendado
                  </span>
                )}
                <div>
                  <span className="text-[9.5px] font-bold uppercase tracking-wider text-white/45">
                    {plan.tag}
                  </span>
                  <h5 className="mt-1 text-[15px] font-black leading-snug text-white">{plan.name}</h5>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className={`text-2xl font-black ${plan.priceClass}`}>{plan.price}</span>
                    <span className="text-[10px] text-white/45">{plan.period}</span>
                  </div>
                  <p className="mt-1.5 text-[11.5px] leading-relaxed text-white/55">{plan.description}</p>
                </div>
                <div className="mt-3 border-t border-white/[0.07] pt-3">
                  <WhatsAppButton
                    text={plan.waText}
                    label={plan.cta}
                    className={`w-full justify-center min-h-[42px] text-[11.5px] ${plan.ctaClass}`}
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-center text-[11px] leading-relaxed text-white/45">
            Si ya contrataste tu página anual, tus 3 correos ya están incluidos: no pagues dos veces.
          </p>
        </div>
      </div>
    </div>
  );
}
