import type { Metadata } from "next";
import Link from "next/link";
import DemoRequestForm from "@/components/DemoRequestForm";
import DemoMockup from "@/components/DemoMockup";
import FAQSection from "@/components/FAQSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import { CRM_LOGIN_URL } from "@/lib/siteUrls";

export const metadata: Metadata = {
  title: "Demo en Vivo CRM WhatsApp & Campañas | Call360 Colombia",
  description:
    "Prueba el CRM de WhatsApp multiagente y centro de campañas de Call360 en vivo. Sin registros tediosos ni tarjetas de crédito: te conectamos en minutos por WhatsApp.",
  alternates: {
    canonical: "https://call360colombia.com/demo",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Demo en Vivo CRM WhatsApp & Campañas | Call360 Colombia",
    description:
      "Descubre cómo centralizar tu equipo en WhatsApp y enviar campañas masivas con cadencia anti-bloqueo. Demo guiada en vivo.",
    url: "https://call360colombia.com/demo",
    siteName: "Call360 Colombia",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://call360colombia.com/inicio/hero.png",
        width: 1200,
        height: 630,
        alt: "Demo CRM WhatsApp y Campañas Call360 Colombia",
      },
    ],
  },
};

const disponibleHoy = [
  {
    group: "Conversaciones",
    items: [
      "CRM WhatsApp multiagente",
      "Bandeja de conversaciones compartida",
      "Mensajes entrantes centralizados",
      "Envío manual 1:1 supervisado",
      "Conexión de tu número de WhatsApp",
    ],
  },
  {
    group: "Campañas y Difusión",
    items: [
      "Centro común de campañas (WhatsApp y Correo)",
      "Envíos en lotes controlados con cadencia anti-bloqueo",
      "Programación de fecha y hora (horario Colombia)",
      "Personalización con variables ({Nombre}, {Empresa}, etc.)",
      "Importación de contactos por listas (CSV/Excel)",
      "Visibilidad de estado en bandeja de Enviados",
    ],
  },
  {
    group: "Organización y Ventas",
    items: [
      "Contactos e historial por cliente",
      "Tareas de seguimiento comercial",
      "Negocios y pipeline visual",
      "Calendario comercial integrado",
      "Gestión multiempresa",
    ],
  },
];

const enPreparacion = [
  "Automatizaciones basadas en disparadores",
  "Flujos multicanal condicionales (Email + WhatsApp)",
  "Reportes gráficos avanzados de conversión",
  "Asistente de IA para redacción y análisis",
  "Captura integrada de opt-in y consentimiento",
  "Acciones automáticas por eventos del pipeline",
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
                Demo · Colombia
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
                Solicita una demo de Call360
              </h1>
              <p className="mx-auto mt-5 sm:mt-6 max-w-xl text-base sm:text-lg text-white/60 leading-relaxed">
                Te mostramos el sistema funcionando con tus casos reales. Sin
                registro, sin contraseñas, sin compromiso.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none mx-auto">
                <DemoRequestForm
                  requireConsent
                  title="Solicita tu demo"
                  subtitle="Completa tus datos y la solicitud llega directo a nuestro WhatsApp."
                  triggerLabel="Solicitar demo por WhatsApp"
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

      {/* QUÉ VENDE CALL360 */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <ScrollReveal>
              <div>
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                  Qué vende Call360
                </p>
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                  Un sistema para conseguir, gestionar y cerrar clientes
                </h2>
                <ul className="mt-6 space-y-4">
                  {[
                    {
                      title: "Conserva el historial de tus clientes",
                      desc: "Cada conversación, tarea y negocio queda guardado por contacto y empresa.",
                    },
                    {
                      title: "Responde desde un solo lugar",
                      desc: "Tu equipo atiende el mismo WhatsApp con bandeja compartida.",
                    },
                    {
                      title: "Haz seguimiento sin perder oportunidades",
                      desc: "Tareas, pipeline y calendario te muestran qué sigue con cada cliente.",
                    },
                    {
                      title: "Llama y organiza tu operación",
                      desc: "Minutos y llamadas, marketing y página web en un solo proveedor.",
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
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                Capacidades que ya puedes usar
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-white/50">
                Esto es lo que verás funcionando en tu demo, sin letra pequeña.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-3">
            {disponibleHoy.map((block, i) => (
              <ScrollReveal key={block.group} delay={i * 100}>
                <div className="h-full rounded-2xl border border-white/[0.08] bg-[#12121a] p-8">
                  <h3 className="text-lg font-bold text-white">{block.group}</h3>
                  <ul className="mt-4 space-y-3">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-white/65">
                        <span className="mt-0.5 text-emerald-400">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        {item}
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
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                Lo que estamos construyendo
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-white/50">
                Queremos ser transparentes: estas funciones aún no están
                activas. Te avisaremos cuando estén listas.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {enPreparacion.map((item, i) => (
              <ScrollReveal key={item} delay={i * 60}>
                <div className="flex h-full items-center justify-between gap-3 rounded-2xl border border-dashed border-white/[0.12] bg-white/[0.02] p-5">
                  <span className="text-sm font-semibold text-white/60">{item}</span>
                  <span className="shrink-0 rounded-full bg-amber-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-300">
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
                Cómo funciona
              </p>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                De la solicitud a tu acceso en 3 pasos
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Solicita por WhatsApp",
                desc: "Completa el formulario con tu nombre, empresa y servicio de interés. La solicitud llega directo a nuestro WhatsApp.",
              },
              {
                step: "2",
                title: "Te mostramos el sistema",
                desc: "Agendamos una demo donde ves la bandeja, los contactos, las tareas y el pipeline funcionando.",
              },
              {
                step: "3",
                title: "Accedes a tu CRM",
                desc: "Si decides continuar, creamos tu empresa y te entregamos tus accesos. Sin registro público ni contraseñas inventadas.",
              },
            ].map((s, i) => (
              <ScrollReveal key={s.step} delay={i * 100}>
                <div className="h-full rounded-2xl border border-white/[0.08] bg-[#12121a] p-8 text-center">
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
                title="Solicita tu demo"
                subtitle="Completa tus datos y la solicitud llega directo a nuestro WhatsApp."
                triggerLabel="Solicitar demo por WhatsApp"
                ctaLabel="Solicitar por WhatsApp"
                className="inline-flex"
              />
              <WhatsAppButton
                text="Hola Call360, quiero una demo del CRM"
                label="Hablar por WhatsApp"
                className="text-base px-8 py-4"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        title="Preguntas frecuentes sobre la demo"
        showCta
        ctaLabel="Resolver otras dudas"
        ctaText="Hola Call360, tengo una duda sobre la demo que no está en las preguntas frecuentes."
        items={[
          {
            question: "¿La demo crea un usuario del CRM?",
            answer:
              "No. La demo es una sesión donde te mostramos el sistema funcionando. Solo si decides continuar creamos tu empresa y te entregamos accesos personales. No hay registro público.",
          },
          {
            question: "¿Las campañas masivas están incluidas?",
            answer:
              "Sí. Call360 incluye un centro unificado para crear y programar campañas tanto por correo como por WhatsApp a tus listas de contactos importadas, con variables personalizadas y control de cadencia por lotes. Los flujos automatizados complejos con disparadores e IA autónoma siguen en desarrollo.",
          },
          {
            question: "¿Necesito tarjeta o firmar permanencia?",
            answer:
              "No. La demo no pide tarjeta y los planes no tienen permanencia. Solo necesitas aceptar ser contactado para coordinar la sesión.",
          },
          {
            question: "¿Cómo accedo a mi CRM después?",
            answer:
              "Con el usuario que creamos para tu empresa, desde la página de acceso del CRM. El botón “Acceder al CRM” de esta página siempre te lleva a la URL oficial de ingreso.",
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
