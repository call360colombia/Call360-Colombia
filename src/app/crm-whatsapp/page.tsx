import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ModernSaaSMockup from "@/components/ModernSaaSMockup";
import WhatsAppLiveChat from "@/components/WhatsAppLiveChat";
import PlansSection from "@/components/billing/PlansSection";
import FAQSection from "@/components/FAQSection";
import DemoRequestForm from "@/components/DemoRequestForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import { DEMO_PATH } from "@/lib/siteUrls";

export const metadata: Metadata = {
  title: "Centralización de Correo y WhatsApp con IA | CRM Call360",
  description:
    "Atiende en equipo, unifica correo corporativo y WhatsApp con IA asistida y gestiona tus oportunidades de venta. Planes desde $40.000 COP/usuario.",
  alternates: {
    canonical: "https://call360colombia.com/crm-whatsapp",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Centralización de Correo y WhatsApp con IA | CRM Call360",
    description:
      "Atiende en equipo, unifica correo corporativo y WhatsApp con IA asistida y gestiona tus oportunidades de venta.",
    url: "https://call360colombia.com/crm-whatsapp",
    siteName: "Call360 Colombia",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://call360colombia.com/inicio/whatsapp.png",
        width: 1200,
        height: 630,
        alt: "CRM Correo y WhatsApp Comercial Call360 Colombia",
      },
    ],
  },
};

const PILARES = [
  {
    icon: (
      <svg className="h-6 w-6 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "1. Atiende en equipo",
    subtitle: "Una sola línea comercial, múltiples asesores",
    description:
      "Conecta tu número oficial y permite que todo tu equipo responda desde una bandeja unificada. Asigna chats, supervisa conversaciones en tiempo real y conserva el historial completo de cada contacto.",
    highlights: [
      "Bandeja compartida para múltiples asesores",
      "Asignación de conversaciones y notas internas",
      "Historial centralizado por cliente y empresa",
    ],
  },
  {
    icon: (
      <svg className="h-6 w-6 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      </svg>
    ),
    title: "2. Responde mejor con IA incluida",
    subtitle: "IA gestionada y lista para usar por tu equipo",
    description:
      "Tus asesores reciben sugerencias comerciales inteligentes, reescritura persuasiva, síntesis de conversaciones largas y transcripción de audios. Todo administrado por Call360, sin que tengas que conectar APIs ni pagar proveedores externos.",
    highlights: [
      "Sugerencias y reescritura comercial al instante",
      "Resumen automático de chats y notas de voz",
      "IA incluida de Call360: sin claves ni configuraciones técnicas",
    ],
  },
  {
    icon: (
      <svg className="h-6 w-6 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 20V10M18 20V4M6 20v-4" />
      </svg>
    ),
    title: "3. Organiza tu seguimiento comercial",
    subtitle: "Convierte conversaciones en ventas cerradas",
    description:
      "No dejes prospectos en el olvido. Visualiza tus negocios en un embudo comercial claro, programa tareas de seguimiento con fecha y hora, y segmenta tus contactos para campañas de difusión comercial efectivas.",
    highlights: [
      "Embudo visual de oportunidades y cotizaciones",
      "Tareas y recordatorios para cada asesor",
      "Campañas y difusión comercial a listas segmentadas",
    ],
  },
];

export default function CRMWhatsAppPage() {
  return (
    <>
      {/* ========================================================
          HERO SECTION — DALE SUPERPODERES A TU WHATSAPP
          ======================================================== */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 hero-bg-whatsapp" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="noise-overlay" />

        {/* Orbes de fondo animados */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="orb-1 absolute top-1/4 left-[15%] w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px]" />
          <div className="orb-2 absolute bottom-1/4 right-[15%] w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 sm:py-32 lg:py-36 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 lg:items-center">
            <div className="text-center lg:text-left">
              {/* Badge oficial */}
              <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-emerald-400 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Centralización Comercial · Correo + WhatsApp con IA
              </div>

              {/* Titular principal obligatorio */}
              <h1 className="animate-fade-in-up animation-delay-100 text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
                Centraliza tu{" "}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  Correo y WhatsApp con IA
                </span>
              </h1>

              {/* Subtítulo de referencia */}
              <p className="animate-fade-in-up animation-delay-200 mx-auto lg:mx-0 mt-6 max-w-xl text-base sm:text-lg text-white/70 leading-relaxed">
                Atiende en equipo, unifica tu correo corporativo y WhatsApp, responde mejor con IA asistida y convierte cada conversación en oportunidades de venta. Todo desde Call360.
              </p>

              {/* Los 3 Pilares en píldoras destacadas */}
              <div className="animate-fade-in-up animation-delay-300 mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs sm:text-sm font-semibold text-white/70">
                <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3.5 py-1.5 backdrop-blur-sm">
                  <span className="text-emerald-400">✓</span> Correo + WhatsApp Unificados
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3.5 py-1.5 backdrop-blur-sm">
                  <span className="text-cyan-400">✓</span> IA asistida integrada
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3.5 py-1.5 backdrop-blur-sm">
                  <span className="text-amber-400">✓</span> Precios por 1 usuario (sin paquetes base)
                </div>
              </div>

              {/* CTAs de Conversión */}
              <div className="animate-fade-in-up animation-delay-400 mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 justify-center lg:justify-start">
                <a
                  href="#planes"
                  className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-3.5 text-sm sm:text-base font-black text-slate-950 shadow-xl shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Ver Planes Comerciales</span>
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>

                <Link
                  href={DEMO_PATH}
                  className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.06] backdrop-blur-md px-6 sm:px-8 py-3.5 text-sm sm:text-base font-bold text-white transition-all hover:border-emerald-400/40 hover:bg-emerald-400/10 active:scale-[0.98]"
                >
                  <span>Solicitar Demo Guiada</span>
                </Link>
              </div>

              <div className="animate-fade-in-up animation-delay-400 mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs">
                <a
                  href="#chat-interactivo"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 font-bold hover:bg-emerald-500/20 transition-all"
                >
                  <span>⚡ Probar Bandeja en Vivo</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <Link
                  href="/#calculadora-ahorro"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 font-bold hover:bg-cyan-500/20 transition-all"
                >
                  <span>💰 Calcular Ahorro en COP</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/#comparativa-saas"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-white/70 font-bold hover:text-white hover:bg-white/[0.08] transition-all"
                >
                  <span>⚖️ Comparar vs Extranjeros</span>
                </Link>
              </div>

              <p className="animate-fade-in-up animation-delay-400 mt-4 text-xs text-white/40">
                ⚡ Precios en COP por usuario • Renovación mensual fija de créditos IA • Soporte directo en Colombia
              </p>
            </div>

            {/* Visual real del SaaS Mockup */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-cyan-500/15 to-transparent rounded-3xl blur-3xl pointer-events-none" />
              <ModernSaaSMockup variant="whatsapp" className="w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          LOS TRES PILARES COMERCIALES
          ======================================================== */}
      <section className="py-20 sm:py-28 bg-[#0c0d14]/80 border-y border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
                Pilares Fundamentales
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                El sistema que transforma tu atención de WhatsApp en ventas
              </h2>
              <p className="mt-3 text-base text-white/60">
                Todo lo necesario para que tu equipo comercial opere con orden y responda con calidad profesional.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 lg:grid-cols-3">
            {PILARES.map((pilar, index) => (
              <ScrollReveal key={pilar.title} delay={index * 120}>
                <div className="h-full rounded-3xl border border-white/10 bg-[#12121a] p-7 flex flex-col justify-between hover:border-emerald-500/30 transition-all hover:-translate-y-1 shadow-lg">
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.05] mb-5 border border-white/10">
                      {pilar.icon}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                      {pilar.subtitle}
                    </span>
                    <h3 className="text-xl font-bold text-white mt-1 mb-3">
                      {pilar.title}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed mb-6">
                      {pilar.description}
                    </p>
                  </div>

                  <ul className="space-y-2 pt-4 border-t border-white/[0.08] text-xs text-white/80">
                    {pilar.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-emerald-400 shrink-0">✓</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SIMULADOR INTERACTIVO DE CONVERSACIONES MULTIAGENTE
          ======================================================== */}
      <section id="chat-interactivo" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                Demostración Visual
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
                Así trabaja tu equipo en una{" "}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  bandeja multiagente
                </span>
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm sm:text-base text-white/50">
                Interactúa con la simulación para experimentar cómo se organizan asesores, estados y respuestas rápidas.
              </p>
            </div>
          </ScrollReveal>

          <WhatsAppLiveChat />
        </div>
      </section>

      {/* ========================================================
          SECCIÓN OFICIAL DE PLANES 3D Y CRÉDITOS IA
          ======================================================== */}
      <PlansSection />

      {/* ========================================================
          CÓMO FUNCIONA EL ONBOARDING
          ======================================================== */}
      <section className="py-20 sm:py-28 bg-[#0c0d14]/60 border-t border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Paso a Paso
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">
                Conecta tu operación en 3 pasos sencillos
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Conecta tu línea comercial",
                desc: "Escaneas el código QR desde tu WhatsApp y la línea queda conectada al sistema de forma segura.",
              },
              {
                step: "02",
                title: "Invita a tus asesores",
                desc: "Configura a tu equipo comercial. Cada asesor ingresa con su usuario y atiende la misma línea unificada.",
              },
              {
                step: "03",
                title: "Responde con IA y cierra negocios",
                desc: "Aprovecha sugerencias con IA asistida, resúmenes de chats y el embudo de ventas para convertir cada oportunidad (tú revisas y decides el envío).",
              },
            ].map((st, i) => (
              <ScrollReveal key={st.step} delay={i * 100}>
                <div className="rounded-3xl border border-white/[0.08] bg-[#12121a] p-7 text-center h-full flex flex-col justify-between">
                  <div>
                    <span className="inline-block text-2xl font-black text-emerald-400 mb-3">
                      {st.step}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-2">{st.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{st.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          PREGUNTAS FRECUENTES (FAQ)
          ======================================================== */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <FAQSection
              title="Preguntas frecuentes sobre Call360 Correo y WhatsApp"
              showCta={true}
              ctaLabel="Hablar con un asesor"
              ctaText="Hola Call360, tengo una pregunta sobre los planes comerciales de Correo y WhatsApp con IA."
              ctaSubtext="Te asesoramos directamente por WhatsApp"
              items={[
                {
                  question: "¿Los planes se cobran por usuario o por empresa?",
                  answer:
                    "Todos los precios son en COP por 1 usuario individual. No existen paquetes grupales base. Cada usuario cuenta con sus accesos y su cupo mensual de Créditos IA correspondiente al plan elegido. A partir de 10 usuarios aplica una propuesta empresarial personalizada.",
                },
                {
                  question: "¿Cómo se renuevan los Créditos IA en los planes anuales?",
                  answer:
                    "Los Créditos IA se renuevan mensualmente de forma fija al inicio de cada mes, incluso cuando contratas la suscripción anual. Por ejemplo, en el Plan Pro recibes 3.000 créditos cada mes durante los 12 meses.",
                },
                {
                  question: "¿Qué canales incluye cada plan?",
                  answer:
                    "Plan Correo ($40.000 COP/usuario/mes) incluye Correo corporativo + CRM (no incluye WhatsApp). Starter ($65.000 COP/usuario/mes) incluye 1 solo canal a elección (Correo + CRM ó WhatsApp + CRM). Pro ($120.000 COP/usuario/mes, Más vendido) integra ambos canales: WhatsApp + Correo corporativo + CRM. Deluxe ($220.000 COP/usuario/mes, Mejor oferta) integra ambos canales con la cuota máxima de 10.000 créditos IA al mes.",
                },
                {
                  question: "¿Qué significa el valor en USD indicado en los planes?",
                  answer:
                    "Los valores de suscripción se cobran 100% en pesos colombianos (COP). El valor en USD (ej. aprox. USD 10, USD 20, USD 60 o USD 100) describe exclusivamente el valor comercial de referencia de la bolsa de Créditos IA que ya viene incluida dentro de cada plan.",
                },
                {
                  question: "¿Qué pasa si mi empresa necesita más de 10 usuarios?",
                  answer:
                    "Para equipos comerciales de 10 o más usuarios configuramos una propuesta empresarial personalizada con tarifas preferenciales por volumen, bolsa corporativa de Créditos IA y soporte prioritario.",
                },
                {
                  question: "¿Se requiere contratar WhatsApp Business API oficial de Meta?",
                  answer:
                    "No requieres pagar cargos por mensaje de API oficial ni trámites complejos. El sistema se vincula directamente a tu línea comercial existente mediante código QR seguro, conservando tu número oficial de contacto.",
                },
                {
                  question: "¿Las respuestas con IA son 100% autónomas o asistidas?",
                  answer:
                    "Operamos bajo el modelo de IA asistida (tú revisas y decides): la IA sugiere borradores, analiza el contexto y transcribe notas de voz, pero el asesor comercial siempre revisa y autoriza el mensaje antes de enviarlo. No se prometen automatizaciones autónomas no supervisadas.",
                },
                {
                  question: "¿Puedo cambiar de plan o pasar de facturación mensual a anual?",
                  answer:
                    "Sí. Puedes actualizar tu plan o migrar a facturación anual en cualquier momento para aprovechar el descuento del pago anual y el equivalente mensual de referencia.",
                },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ========================================================
          CTA FINAL
          ======================================================== */}
      <section className="py-16 sm:py-24 bg-[#0c0d14]/60 border-t border-white/[0.06]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#12121a] to-[#0a0a0f] p-8 sm:p-14 shadow-2xl">
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                ¿Listo para darle superpoderes a tu WhatsApp?
              </h2>
              <p className="mt-4 text-base text-white/60 max-w-xl mx-auto leading-relaxed">
                Comienza hoy tu prueba de 14 días con 100 Créditos IA incluidos. Organiza tus
                conversaciones y acelera el cierre de negocios de tu equipo.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href={DEMO_PATH}
                  className="inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-3.5 text-sm sm:text-base font-black text-slate-950 transition-all hover:scale-[1.02] shadow-xl shadow-emerald-500/20"
                >
                  <span>Probar gratis durante 14 días</span>
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>

                <WhatsAppButton
                  text="Hola Call360, quiero consultar con un asesor sobre el CRM de WhatsApp"
                  label="Hablar con ventas"
                  className="min-h-[50px] text-sm sm:text-base px-6 py-3.5"
                />
              </div>
              <p className="mt-4 text-xs text-white/40">
                Activación guiada • Sin permanencia obligatoria • Soporte directo en Colombia
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
