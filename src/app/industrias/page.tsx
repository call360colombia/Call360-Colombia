import type { Metadata } from "next";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Industrias | Call360 | Soluciones Comerciales por Sector",
  description:
    "Call360 se adapta a clínicas, barberías, restaurantes, inmobiliarias, colegios y más. Cada industria tiene su propia configuración del sistema.",
};

interface IndustryBlock {
  id: string;
  emoji: string;
  name: string;
  subtitle: string;
  pain: string;
  solution: string;
  module: string;
  accent: "cyan" | "violet" | "emerald" | "amber" | "rose";
  image?: string;
}

const industries: IndustryBlock[] = [
  {
    id: "clinicas",
    emoji: "🦷",
    name: "Clínicas y Consultorios",
    subtitle: "Odontología, estética, psicología, medicina general",
    pain: "Pierden 3 de cada 10 pacientes por demorar más de 30 min en responder",
    solution: "Agenda automatizada + 3 asesores en el mismo WhatsApp + recordatorios de citas",
    module: "CRM WhatsApp Multiagente",
    accent: "cyan",
  },
  {
    id: "barberias",
    emoji: "💈",
    name: "Barberías y Salones",
    subtitle: "Reservas por WhatsApp, campañas de fidelización",
    pain: "Las cancelaciones y no-shows les cuestan 20% de la facturación mensual",
    solution: "Confirmación automática por WhatsApp + campañas masivas + base de datos unificada",
    module: "CRM WhatsApp + Página Web",
    accent: "violet",
  },
  {
    id: "restaurantes",
    emoji: "🍽️",
    name: "Restaurantes y Domicilios",
    subtitle: "Pedidos, reservas, fidelización de clientes",
    pain: "No le dan seguimiento al cliente que pidió una vez y nunca volvió",
    solution: "Campañas automáticas a clientes viejos + recordatorios de reservas + integraciones",
    module: "CRM WhatsApp + Marketing",
    accent: "emerald",
  },
  {
    id: "inmobiliarias",
    emoji: "🏠",
    name: "Inmobiliarias",
    subtitle: "Captación de leads y cierre de ventas",
    pain: "Llegan 200 leads/mes por portales y no los llaman a todos a tiempo",
    solution: "CRM de llamadas con marcación predictiva + distribución automática de leads",
    module: "CRM Llamadas + WhatsApp",
    accent: "rose",
  },
  {
    id: "colegios",
    emoji: "🎓",
    name: "Colegios y Academias",
    subtitle: "Captación de matrículas, seguimiento a padres",
    pain: "Las campañas de matrícula se pierden en el WhatsApp personal de un coordinador",
    solution: "Múltiples asesores con un solo número + plantillas de respuesta + métricas de conversión",
    module: "CRM WhatsApp Multiagente",
    accent: "amber",
  },
  {
    id: "seguros",
    emoji: "🛡️",
    name: "Aseguradoras y Financieras",
    subtitle: "Cobranza, renovación, atención al cliente",
    pain: "Tienen una base de 50.000 clientes y solo llaman al 5% al mes",
    solution: "Marcación predictiva + grabación con IA + detección de palabras clave",
    module: "CRM Llamadas Predictivo",
    accent: "cyan",
  },
];

const accentStyles: Record<string, { border: string; bg: string; text: string; ring: string; badge: string }> = {
  cyan: {
    border: "border-cyan-500/20 hover:border-cyan-500/50",
    bg: "bg-cyan-500/[0.03]",
    text: "text-cyan-400",
    ring: "ring-cyan-500/30",
    badge: "border-cyan-500/30 bg-cyan-500/15 text-cyan-300",
  },
  violet: {
    border: "border-violet-500/20 hover:border-violet-500/50",
    bg: "bg-violet-500/[0.03]",
    text: "text-violet-400",
    ring: "ring-violet-500/30",
    badge: "border-violet-500/30 bg-violet-500/15 text-violet-300",
  },
  emerald: {
    border: "border-emerald-500/20 hover:border-emerald-500/50",
    bg: "bg-emerald-500/[0.03]",
    text: "text-emerald-400",
    ring: "ring-emerald-500/30",
    badge: "border-emerald-500/30 bg-emerald-500/15 text-emerald-300",
  },
  amber: {
    border: "border-amber-500/20 hover:border-amber-500/50",
    bg: "bg-amber-500/[0.03]",
    text: "text-amber-400",
    ring: "ring-amber-500/30",
    badge: "border-amber-500/30 bg-amber-500/15 text-amber-300",
  },
  rose: {
    border: "border-rose-500/20 hover:border-rose-500/50",
    bg: "bg-rose-500/[0.03]",
    text: "text-rose-400",
    ring: "ring-rose-500/30",
    badge: "border-rose-500/30 bg-rose-500/15 text-rose-300",
  },
};

export default function IndustriasPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(139,92,246,0.10),transparent_60%)]" />
        <div className="noise-overlay" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-violet-400">
              Soluciones por industria
            </p>
            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Call360 se adapta a{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-amber-400 bg-clip-text text-transparent">
                tu tipo de negocio
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60 leading-relaxed">
              Aunque nuestro fuerte son los Call Centers, el mismo sistema se configura para 
              clínicas, barberías, restaurantes, inmobiliarias y más. Cada industria recibe 
              su propia combinación de módulos.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {industries.map((ind) => (
                <span
                  key={ind.id}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-white/70"
                >
                  {ind.emoji} {ind.name.split(" ")[0]}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES GRID */}
      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => {
              const s = accentStyles[ind.accent];
              return (
                <ScrollReveal key={ind.id} delay={i * 80}>
                  <div className={`group flex flex-col rounded-2xl border ${s.border} ${s.bg} p-6 transition-all hover:scale-[1.02] hover:ring-1 ${s.ring}`}>
                    <div className="mb-4 flex items-start justify-between">
                      <div className="text-4xl" aria-hidden="true">{ind.emoji}</div>
                      <span className={`rounded-full border ${s.badge} px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider`}>
                        {ind.module}
                      </span>
                    </div>
                    <h3 className="mb-1 text-lg font-black text-white">{ind.name}</h3>
                    <p className="mb-4 text-xs text-white/40">{ind.subtitle}</p>
                    <div className="mb-4 space-y-3 flex-1">
                      <div>
                        <div className="mb-1 text-[10px] font-bold uppercase tracking-wider text-rose-400/80">
                          ❌ Dolor típico
                        </div>
                        <p className="text-xs leading-relaxed text-white/70">{ind.pain}</p>
                      </div>
                      <div>
                        <div className={`mb-1 text-[10px] font-bold uppercase tracking-wider ${s.text}`}>
                          ✅ Solución Call360
                        </div>
                        <p className="text-xs leading-relaxed text-white/80">{ind.solution}</p>
                      </div>
                    </div>
                    <Link
                      href={`https://wa.me/573203693949?text=${encodeURIComponent(`Hola Call360, quiero cotizar el sistema para mi ${ind.name.toLowerCase()}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-auto flex items-center justify-between border-t border-white/[0.06] pt-4 text-xs font-bold ${s.text}`}
                    >
                      <span>Cotizar para mi negocio</span>
                      <svg
                        className="transition-transform group-hover:translate-x-1"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-[#0f0f17]/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#12121a] p-12 text-center sm:p-16">
              <div className="absolute inset-0 bg-gradient-to-b from-violet-500/[0.08] to-transparent" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl">
                  ¿No ves tu industria?{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-amber-400 bg-clip-text text-transparent">
                    Pregúntanos
                  </span>
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base text-white/50">
                  El sistema se adapta a cualquier negocio que atienda clientes, 
                  cierre ventas o gestione llamadas. Cuéntanos qué haces y te recomendamos 
                  la configuración ideal.
                </p>
                <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <WhatsAppButton
                    text="Hola Call360, quiero saber si tienen solución para mi tipo de negocio"
                    label="Consultar por mi industria"
                    className="text-base px-8 py-4"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
