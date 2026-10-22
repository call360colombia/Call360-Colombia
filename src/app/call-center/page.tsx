import type { Metadata } from "next";
import Image from "next/image";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import ComparisonTable from "@/components/ComparisonTable";
import PhoneSystemMockup from "@/components/PhoneSystemMockup";

export const metadata: Metadata = {
  title: "Call Center | Call360 | Sistema Comercial Integral",
  description:
    "Call360 para Call Centers: CRM de llamadas predictivo, WhatsApp multiagente, minutos ilimitados, página web y marketing. Todo en un solo proveedor.",
};

const pains = [
  {
    pain: "Pagas 4 o 5 proveedores distintos y no se integran",
    solution: "Call360 reemplaza telefonía, CRM, web y marketing en un solo sistema. Un solo pago, un solo equipo de soporte.",
  },
  {
    pain: "Tus agentes pierden tiempo marcando manualmente",
    solution: "Marcación predictiva inteligente. El sistema llama por ellos y solo pasan las llamadas conectadas. Hasta 300% más contactos efectivos.",
  },
  {
    pain: "No tienes métricas reales de gestión",
    solution: "Panel de control en vivo con llamadas, mensajes, conversión y rendimiento de cada agente. Sabrás con certeza quién vende y quién no.",
  },
  {
    pain: "WhatsApp personal mezclado con llamadas de trabajo",
    solution: "CRM WhatsApp multiagente con un solo número profesional. Campañas masivas, respuestas automáticas, historial de cada contacto.",
  },
  {
    pain: "No te alcanza el presupuesto para una página web que consiga clientes",
    solution: "Página web profesional en 72 horas con sección 'Trabaja con nosotros' para captar talento, más marketing digital para atraer prospectos.",
  },
  {
    pain: "No le das seguimiento a prospectos que se enfriaron",
    solution: "Sistema de campañas automáticas por WhatsApp y llamadas. Reactivas clientes que dejaron de comprar sin mover un dedo.",
  },
];

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: "CRM de Llamadas Predictivo",
    description: "Marcación automática, minutos ilimitados a Colombia, grabación de llamadas con IA, detección de palabras clave y monitoreo en vivo de agentes.",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "CRM WhatsApp Multiagente",
    description: "Varios agentes desde un solo número con IA incluida de Call360. Bandeja compartida, sugerencias rápidas, historial y difusión comercial.",
    gradient: "from-emerald-500/20 to-green-500/20",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Página Web + Talento",
    description: "Diseño profesional en 72h con sección 'Trabaja con nosotros' para atraer agentes. Optimizada para Google y conectada a WhatsApp y llamadas.",
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Marketing Digital",
    description: "Campañas en Google, redes y contenido constante para llenar tu embudo de prospectos. Medición de resultados en tiempo real.",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
];

const comparisonItems = [
  {
    informal: "4-5 proveedores: telefonía, CRM, web, marketing, WhatsApp",
    call360: "Un solo proveedor: Call360 lo maneja todo",
  },
  {
    informal: "Marcación manual, agentes pierden 40% del tiempo",
    call360: "Marcación predictiva: los agentes solo hablan",
  },
  {
    informal: "Sin métricas ni paneles de gestión",
    call360: "Panel de control en vivo con indicadores de cada agente",
  },
  {
    informal: "WhatsApp personal, sin historial ni campañas",
    call360: "CRM WhatsApp multiagente con campañas masivas",
  },
  {
    informal: "Soporte fragmentado entre proveedores (nadie resuelve)",
    call360: "Un solo equipo de soporte local en Bogotá",
  },
  {
    informal: "Sin página web o página que no consigue clientes",
    call360: "Web profesional en 72h con sección de talento",
  },
];

export default function CallCenterPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(6,182,212,0.12),transparent_60%)]" />
        <div className="absolute inset-0 grid-pattern opacity-15" />
        <div className="noise-overlay" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-[15%] w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-[15%] w-96 h-96 bg-violet-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-cyan-300">
                Solución para Call Centers
              </div>
              <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight break-words">
                El sistema comercial que tu{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-amber-400 bg-clip-text text-transparent">
                  Call Center necesita
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-white/60 leading-relaxed">
                CRM de llamadas predictivo, WhatsApp multiagente, página web, marketing digital. 
                Todo en un solo sistema, con soporte local en Bogotá y sin tener que coordinar 
                entre 5 proveedores distintos.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-white/60">
                {["Minutos ilimitados Colombia", "Marcación predictiva", "WhatsApp multiagente", "Panel de control en vivo"].map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2"
                    >
                      <span className="text-cyan-400">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      {item}
                    </div>
                  ),
                )}
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <WhatsAppButton
                  text="Hola Call360, quiero cotizar el sistema para mi Call Center"
                  label="Cotizar sistema para Call Center"
                  className="text-base px-8 py-4"
                />
                <a
                  href="https://wa.me/573203693949?text=Hola%20Call360%2C%20quiero%20agendar%20una%20demo%20para%20mi%20Call%20Center"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-4 text-base font-bold text-white transition-all hover:border-cyan-400/40 hover:bg-cyan-400/5"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                  Agendar demo
                </a>
              </div>
            </div>

            {/* PBX & Dialer Mockup */}
            <div className="relative mt-8 lg:mt-0 w-full max-w-xl mx-auto">
              <PhoneSystemMockup />
            </div>
          </div>
        </div>
      </section>

      {/* PAINS */}
      <section className="py-28 bg-[#0f0f17]/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-rose-400">
                Problemas reales
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight break-words">
                ¿Te suena familiar?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-white/50">
                Estos son los dolores más comunes que vemos en Call Centers colombianos.
                Si te identificas con al menos 3, necesitas Call360.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-4">
            {pains.map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="group grid gap-4 rounded-2xl border border-white/[0.08] bg-[#12121a] p-5 transition-all hover:border-cyan-500/20 hover:bg-[#1a1a24] sm:grid-cols-2 sm:p-6">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 shrink-0 text-lg" aria-hidden="true">❌</span>
                    <p className="text-sm leading-relaxed text-white/70">{item.pain}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 shrink-0 text-lg" aria-hidden="true">✅</span>
                    <p className="text-sm leading-relaxed text-cyan-300/90">{item.solution}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                Módulos del sistema
              </span>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Todo lo que necesita un{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-amber-400 bg-clip-text text-transparent">
                  Call Center moderno
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2">
            {features.map((f, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="group rounded-2xl border border-white/[0.08] bg-[#12121a] p-8 transition-all hover:border-cyan-500/30 hover:bg-[#1a1a24]">
                  <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-white/[0.06] text-cyan-400 transition-all group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:${f.gradient}`}>
                    {f.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-white">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-white/50">{f.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-28 bg-[#0f0f17]/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <ComparisonTable
              title="Tener 4 proveedores vs tener Call360"
              subtitle="El costo oculto de trabajar con múltiples proveedores"
              items={comparisonItems}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* RESULTS */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                Resultados
              </span>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Lo que dicen los números
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {[
              { label: "empresas activas", value: "+200" },
              { label: "agentes usando el sistema", value: "+1.200" },
              { label: "minutos/mes cursados", value: "+3M" },
              { label: "años de experiencia", value: "12+" },
              { label: "entrega del sistema", value: "72h" },
            ].map((stat) => (
              <ScrollReveal key={stat.label} delay={100}>
                <div className="text-center">
                  <div className="text-4xl font-black sm:text-5xl bg-gradient-to-r from-cyan-400 via-violet-400 to-amber-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-xs text-white/50 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-[#0f0f17]/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#12121a] p-12 text-center sm:p-16">
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/[0.08] to-transparent" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl">
                  ¿Listo para unificar tu{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-amber-400 bg-clip-text text-transparent">
                    operación en un solo sistema?
                  </span>
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base text-white/50">
                  Cotiza hoy y empieza a operar con llamadas ilimitadas, WhatsApp multiagente y panel de control en vivo.
                </p>
                <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <WhatsAppButton
                    text="Hola Call360, quiero cotizar el sistema para mi Call Center"
                    label="Cotizar sistema Call Center"
                    className="text-base px-8 py-4"
                  />
                  <a
                    href="https://wa.me/573203693949?text=Hola%20Call360%2C%20quiero%20una%20demostracion%20para%20mi%20Call%20Center"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-4 text-base font-bold text-white transition-all hover:border-cyan-400/40 hover:bg-cyan-400/5"
                  >
                    Agendar demostración
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
