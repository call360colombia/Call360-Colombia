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
  title: "Dale Superpoderes a tu WhatsApp | CRM Comercial Call360",
  description:
    "Atiende en equipo, responde mejor con IA y convierte tus conversaciones en oportunidades de venta. Todo desde Call360. Prueba gratis durante 14 días.",
  alternates: {
    canonical: "https://call360colombia.com/crm-whatsapp",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Dale Superpoderes a tu WhatsApp | CRM Comercial Call360",
    description:
      "Atiende en equipo, responde mejor con IA y convierte tus conversaciones en oportunidades de venta. Todo desde Call360.",
    url: "https://call360colombia.com/crm-whatsapp",
    siteName: "Call360 Colombia",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://call360colombia.com/inicio/whatsapp.png",
        width: 1200,
        height: 630,
        alt: "CRM WhatsApp Comercial Call360 Colombia",
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
                CRM Comercial · IA Incluida y Administrada
              </div>

              {/* Titular principal obligatorio */}
              <h1 className="animate-fade-in-up animation-delay-100 text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white">
                Dale superpoderes a tu{" "}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                  WhatsApp
                </span>
              </h1>

              {/* Subtítulo de referencia */}
              <p className="animate-fade-in-up animation-delay-200 mx-auto lg:mx-0 mt-6 max-w-xl text-base sm:text-lg text-white/70 leading-relaxed">
                Atiende en equipo, responde mejor con IA y convierte tus conversaciones en
                oportunidades de venta. Todo desde Call360.
              </p>

              {/* Los 3 Pilares en píldoras destacadas */}
              <div className="animate-fade-in-up animation-delay-300 mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs sm:text-sm font-semibold text-white/70">
                <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3.5 py-1.5 backdrop-blur-sm">
                  <span className="text-emerald-400">✓</span> Atención en equipo
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3.5 py-1.5 backdrop-blur-sm">
                  <span className="text-cyan-400">✓</span> IA incluida Call360
                </div>
                <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3.5 py-1.5 backdrop-blur-sm">
                  <span className="text-amber-400">✓</span> Seguimiento comercial
                </div>
              </div>

              {/* CTAs de Conversión */}
              <div className="animate-fade-in-up animation-delay-400 mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 justify-center lg:justify-start">
                <Link
                  href={DEMO_PATH}
                  className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-3.5 text-sm sm:text-base font-black text-slate-950 shadow-xl shadow-emerald-500/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Prueba Call360 durante 14 días</span>
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>

                <a
                  href="#planes"
                  className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.06] backdrop-blur-md px-6 sm:px-8 py-3.5 text-sm sm:text-base font-bold text-white transition-all hover:border-emerald-400/40 hover:bg-emerald-400/10 active:scale-[0.98]"
                >
                  <span>Ver planes</span>
                </a>
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
                ⚡ 14 días de prueba con 100 créditos IA • Sin tarjeta de crédito • Migración gratuita en 24h
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
                desc: "Aprovecha sugerencias automáticas, resúmenes de chats y el embudo de ventas para convertir cada oportunidad.",
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
              title="Preguntas frecuentes sobre Call360 WhatsApp"
              showCta={true}
              ctaLabel="Hablar con ventas"
              ctaText="Hola Call360, tengo una pregunta sobre el CRM de WhatsApp y los planes de IA."
              ctaSubtext="Te asesoramos directamente por WhatsApp"
              items={[
                {
                  question: "¿Cómo funciona la prueba Demo de 14 días?",
                  answer:
                    "Recibes 14 días de acceso completo a la plataforma con 100 Créditos IA incluidos para toda la prueba. No requerimos tarjeta de crédito. Al finalizar la prueba, puedes elegir el plan comercial que mejor se adapte a tu empresa.",
                },
                {
                  question: "¿Qué significa que la IA está incluida y administrada?",
                  answer:
                    "Significa que no tienes que preocuparte por contratar proveedores externos, configurar modelos ni conectar claves API. Call360 administra la infraestructura y tu equipo simplemente disfruta de sugerencias, reescritura comercial, resúmenes y transcripción.",
                },
                {
                  question: "¿Cómo se consumen los Créditos IA?",
                  answer:
                    "1 acción estándar completada (una sugerencia de respuesta, una reescritura o un análisis de chat) consume 1 Crédito IA según el tarifario vigente. Los reintentos por fallas técnicas nunca descuentan créditos dobles.",
                },
                {
                  question: "¿Los planes se cobran por usuario o por empresa?",
                  answer:
                    "Los precios y bolsas de créditos se asignan por empresa (tenant) y se comparten entre todos los asesores autorizados del equipo. No cobramos precios individuales por usuario en los planes vigentes.",
                },
                {
                  question: "¿Qué pasa si mi empresa necesita más de 10 usuarios?",
                  answer:
                    "Contáctanos directamente. Para equipos comerciales grandes configuramos un plan personalizado con la capacidad operativa y bolsa de créditos IA que requiera tu operación.",
                },
                {
                  question: "¿Puedo conservar mi número actual de WhatsApp?",
                  answer:
                    "Sí. El sistema se vincula directamente a tu línea comercial existente mediante código QR, conservando tu número oficial de contacto.",
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
