import type { Metadata } from "next";
import Link from "next/link";
import DemoRequestForm from "@/components/DemoRequestForm";
import DemoMockup from "@/components/DemoMockup";
import FAQSection from "@/components/FAQSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import { CRM_LOGIN_URL } from "@/lib/siteUrls";

export const metadata: Metadata = {
  title: "Demostración en Vivo CRM Correo, WhatsApp & IA | Call360 Colombia",
  description:
    "Conoce la centralización de Correo Corporativo y WhatsApp con IA asistida en vivo. Demostración guiada para tu equipo sin tarjetas ni registros tediosos.",
  alternates: {
    canonical: "https://call360colombia.com/demo",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Demostración en Vivo CRM Correo, WhatsApp & IA | Call360 Colombia",
    description:
      "Descubre cómo centralizar tu correo corporativo y WhatsApp, responder mejor con IA asistida y organizar tus ventas con Call360.",
    url: "https://call360colombia.com/demo",
    siteName: "Call360 Colombia",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://call360colombia.com/inicio/hero.png",
        width: 1200,
        height: 630,
        alt: "Demo CRM Correo, WhatsApp y Campañas Call360 Colombia",
      },
    ],
  },
};

const disponibleHoy = [
  {
    group: "Correo Corporativo & WhatsApp Centralizados",
    items: [
      "Bandeja de entrada compartida para múltiples asesores",
      "Conexión de línea oficial de WhatsApp y casillas de correo con dominio propio",
      "Mensajes centralizados y respuestas rápidas para el equipo comercial",
      "Atención 1:1 supervisada con historial por cliente y empresa",
      "Control de estados y asignación ágil de conversaciones",
    ],
  },
  {
    group: "Campañas y Difusión Segmentada",
    items: [
      "Campañas segmentadas y filtradas por listas de contactos (CSV / Excel)",
      "Difusión masiva y programada con fecha y hora (horario Colombia)",
      "Difusión comercial multicanal con variables dinámicas ({Nombre}, {Empresa})",
      "Reportes de seguimiento y estados de entrega en tiempo real",
      "Control de cadencia y buenas prácticas de envío",
    ],
  },
  {
    group: "Inteligencia Artificial Asistida y CRM",
    items: [
      "IA asistida para sugerencias persuasivas, resúmenes y borradores (tú decides qué enviar)",
      "Transcripción de notas de voz de WhatsApp a texto limpio",
      "Embudo comercial visual (Kanban) para organizar cotizaciones y prospectos",
      "Tarifas transparentes por 1 usuario y propuestas corporativas para 10+ asesores",
      "Gestión de permisos y roles por asesor",
    ],
  },
];

const enPreparacion = [
  "Flujos multicanal avanzados (automatizaciones cruzadas correo + WhatsApp)",
  "Automatizaciones complejas basadas en disparadores del sistema",
];

export default function DemoPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden py-14 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(6,182,212,0.10),transparent_60%)]" />
        <div className="noise-overlay" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                Demostración · Colombia
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                Solicita una demostración en vivo de Call360
              </h1>
              <p className="mx-auto mt-5 sm:mt-6 max-w-xl text-base sm:text-lg text-white/60 leading-relaxed">
                Te mostramos el sistema funcionando con los casos reales de tu empresa. Sin
                formularios interminables, sin tarjetas de crédito y sin compromiso.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none mx-auto">
                <DemoRequestForm
                  requireConsent
                  title="Solicita tu demostración"
                  subtitle="Completa tus datos y la solicitud llega directo a nuestro WhatsApp."
                  triggerLabel="Solicitar demostración por WhatsApp"
                  ctaLabel="Solicitar por WhatsApp"
                  triggerClassName="w-full sm:w-auto min-h-[48px] sm:min-h-[52px] text-sm sm:text-base px-6 sm:px-8 py-3.5"
                  className="w-full sm:w-auto"
                />
                <a
                  href={CRM_LOGIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full sm:w-auto min-h-[48px] sm:min-h-[52px] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.06] backdrop-blur-md px-6 sm:px-8 py-3 text-sm sm:text-base font-bold text-white transition-all hover:border-violet-400/40 hover:bg-violet-400/10 active:scale-[0.98]"
                >
                  <span>Acceder al CRM</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* QUÉ ENTREGA CALL360 */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <ScrollReveal>
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                  Qué entrega Call360
                </p>
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                  Un sistema completo para atraer, gestionar y cerrar clientes
                </h2>
                <ul className="mt-6 space-y-4">
                  {[
                    {
                      title: "Conserva el historial de tus clientes",
                      desc: "Cada conversación, tarea y negocio queda guardado por contacto y empresa sin perder datos.",
                    },
                    {
                      title: "Responde desde un solo lugar",
                      desc: "Tu equipo atiende WhatsApp y Correo Corporativo desde una bandeja compartida con asignación ágil.",
                    },
                    {
                      title: "Haz seguimiento sin perder oportunidades",
                      desc: "Tareas, embudo comercial y calendario te muestran con claridad qué sigue con cada cliente.",
                    },
                    {
                      title: "Comunícate y organiza tu operación",
                      desc: "Minutos ilimitados a Colombia, campañas de difusión, marketing y página web con un solo proveedor.",
                    },
                  ].map((b) => (
                    <li key={b.title} className="flex items-start gap-3">
                      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <div>
                        <p className="text-sm font-bold text-white">{b.title}</p>
                        <p className="mt-0.5 text-sm text-white/50">{b.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <DemoMockup />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* DISPONIBLE HOY */}
      <section className="bg-[#0f0f17]/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10 text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                Disponible hoy
              </span>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                Capacidades que ya puedes usar en tu empresa
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-white/50">
                Esto es lo que verás funcionando en tu demostración, con total transparencia y sin letra pequeña.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-3">
            {disponibleHoy.map((block, i) => (
              <ScrollReveal key={block.group} delay={i * 100}>
                <div className="h-full rounded-2xl border border-white/[0.08] bg-[#12121a] p-6 sm:p-8">
                  <h3 className="text-lg font-bold text-white">{block.group}</h3>
                  <ul className="mt-4 space-y-3">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-white/70">
                        <span className="mt-0.5 text-emerald-400 shrink-0">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* EN PREPARACIÓN */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10 text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
                En preparación
              </span>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                Próximas funciones avanzadas
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-white/50">
                Claridad ante todo: estas dos capacidades están en fase final de integración técnica y se habilitarán muy pronto.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2 max-w-3xl mx-auto">
            {enPreparacion.map((item, i) => (
              <ScrollReveal key={item} delay={i * 60}>
                <div className="flex h-full items-center justify-between gap-3 rounded-2xl border border-dashed border-white/[0.15] bg-white/[0.02] p-5">
                  <span className="text-sm font-semibold text-white/70">{item}</span>
                  <span className="shrink-0 rounded-full bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-300">
                    Próximamente
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="bg-[#0f0f17]/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-10 text-center">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                Paso a paso
              </p>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                De la solicitud a tu acceso en 3 sencillos pasos
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Solicita por WhatsApp",
                desc: "Completa el formulario con tu nombre, empresa y requerimiento. La solicitud nos llega directamente al WhatsApp comercial.",
              },
              {
                step: "2",
                title: "Te mostramos el sistema",
                desc: "Coordinamos una sesión donde ves la bandeja compartida, los contactos, las campañas y el embudo comercial funcionando.",
              },
              {
                step: "3",
                title: "Accedes a tu CRM",
                desc: "Si decides continuar, configuramos tu empresa y te entregamos los accesos del equipo. Sin registros públicos ni demoras.",
              },
            ].map((s, i) => (
              <ScrollReveal key={s.step} delay={i * 100}>
                <div className="h-full rounded-2xl border border-white/[0.08] bg-[#12121a] p-6 sm:p-8 text-center">
                  <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/15 text-base font-black text-cyan-300">
                    {s.step}
                  </div>
                  <h3 className="text-base font-bold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal delay={200}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <DemoRequestForm
                requireConsent
                title="Solicita tu demostración"
                subtitle="Completa tus datos y la solicitud llega directo a nuestro WhatsApp."
                triggerLabel="Solicitar demostración por WhatsApp"
                ctaLabel="Solicitar por WhatsApp"
                className="inline-flex"
              />
              <WhatsAppButton
                text="Hola Call360, quiero una demostración del CRM para mi empresa"
                label="Hablar por WhatsApp"
                className="text-base px-8 py-4"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        title="Preguntas frecuentes sobre la demostración"
        showCta
        ctaLabel="Resolver otras dudas"
        ctaText="Hola Call360, tengo una duda sobre la demostración que no está en las preguntas frecuentes."
        items={[
          {
            question: "¿La demostración crea un usuario definitivo del CRM?",
            answer:
              "No. La demostración es una sesión personalizada donde te mostramos el sistema en acción. Solo si decides continuar creamos tu empresa y te entregamos accesos exclusivos. No hay registros públicos con datos expuestos.",
          },
          {
            question: "¿Las campañas de difusión masiva ya están incluidas?",
            answer:
              "Sí. Call360 incluye un centro unificado para crear y programar campañas tanto por correo como por WhatsApp a tus listas de contactos importadas, con variables personalizadas, reportes de entrega y control de cadencia por lotes con IA integrada. Los flujos multicanal avanzados y automatizaciones complejas por disparadores son lo único que sigue en preparación.",
          },
          {
            question: "¿Necesito tarjeta de crédito o firmar cláusula de permanencia?",
            answer:
              "No. Para la demostración no pedimos tarjeta y los planes no tienen contratos de permanencia obligatoria. Solo necesitas aceptar ser contactado para coordinar la sesión.",
          },
          {
            question: "¿Cómo accedo a mi CRM después de contratar?",
            answer:
              "Con el usuario y credenciales seguras que asignamos para tu empresa, ingresando directamente desde el portal oficial del CRM. El botón “Acceder al CRM” de esta web siempre te lleva a la pantalla oficial de ingreso.",
          },
        ]}
      />

      {/* VOLVER */}
      <section className="pb-28 pt-4">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <ScrollReveal>
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-4 text-base font-bold text-white transition-all hover:border-cyan-400/40 hover:bg-cyan-400/5"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Volver a servicios
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
