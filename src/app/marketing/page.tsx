import type { Metadata } from "next";
import Image from "next/image";
import PricingCard from "@/components/PricingCard";
import ComparisonTable from "@/components/ComparisonTable";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import TrustBlock from "@/components/TrustBlock";
import FAQSection from "@/components/FAQSection";
import BeforeAfter from "@/components/BeforeAfter";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import MarketingDashboard from "@/components/MarketingDashboard";
import GuaranteesSection from "@/components/GuaranteesSection";

export const metadata: Metadata = {
  title: "Marketing Digital | Call360",
  description:
    "Contenido profesional para redes sociales. Plan Crece desde $350.000/mes y Plan Pro desde $650.000/mes.",
};

const benefits = [
  {
    title: "Contenido constante",
    description:
      "Publicaciones regulares que mantienen tu negocio activo en redes sociales. Sin días sin contenido.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
  {
    title: "Diseños profesionales",
    description:
      "Imágenes y videos de alta calidad que destacan tu marca sobre la competencia.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
  },
  {
    title: "Estrategia de contenido",
    description:
      "Planificación mensual de publicaciones alineadas con los objetivos de tu negocio.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "Anuncios en redes",
    description:
      "Campañas publicitarias que llegan a clientes potenciales interesados en lo que vendes.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
  {
    title: "Reportes mensuales",
    description:
      "Métricas claras de rendimiento para que veas el impacto de tu inversión.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
];

export default function MarketingDigitalPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 hero-bg-marketing" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="noise-overlay" />

        {/* Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="orb-1 absolute top-1/4 left-[15%] w-80 h-80 bg-amber-500/8 rounded-full blur-[100px]" />
          <div className="orb-2 absolute bottom-1/4 right-[15%] w-96 h-96 bg-orange-500/8 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-40 sm:py-48 text-center sm:px-6 lg:px-8">
          {/* Badge */}
          <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-amber-400 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
            </span>
            Marketing Digital Profesional
          </div>

          {/* Headline */}
          <h1 className="animate-fade-in-up animation-delay-100 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
            Contenido que{" "}
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
              atrae clientes
            </span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in-up animation-delay-200 mx-auto mt-8 max-w-2xl text-lg text-white/50 leading-relaxed">
            Deja de preguntarte qué publicar.{" "}
            <span className="text-white/70 font-medium">Nosotros creamos el contenido que necesita tu negocio para crecer.</span>
          </p>

          {/* Benefits */}
          <div className="animate-fade-in-up animation-delay-300 mt-8 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-white/60">
            {[
              "Contenido constante",
              "Diseños profesionales",
              "Reportes mensuales",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2">
                <span className="text-amber-400">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                {item}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="animate-fade-in-up animation-delay-400 mt-10">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <WhatsAppButton
                text="Hola Call360, quiero una propuesta de marketing digital"
                label="Cotizar plan de marketing"
                className="text-base px-8 py-4 shadow-lg shadow-amber-500/20"
              />
              <a
                href="#panel-marketing"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-sm font-bold text-white transition-all hover:bg-white/[0.08] hover:border-white/20 hover:scale-105"
              >
                Ver demo en vivo
              </a>
            </div>
            <p className="mt-3 text-xs text-white/40">
              ⚡ Garantía de retorno • Planes fijos desde $350K/mes • Sin contratos de permanencia
            </p>
          </div>
        </div>
      </section>

      {/* ESTRATEGIA DE CONTENIDO */}
      <section className="py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
              <div className="order-2 md:order-1 text-center md:text-left">
                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
                  Estrategia
                </p>
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                  Planificación que{" "}
                  <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                    genera resultados
                  </span>
                </h2>
                <p className="mt-6 text-base text-white/50">
                  Planificamos tu contenido mensual alineado con los objetivos de tu negocio.
                </p>
                <ul className="mt-6 space-y-3">
                  {["Calendario mensual de publicaciones", "Contenido alineado con objetivos", "Seguimiento de métricas clave"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 text-xs">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="order-1 md:order-2 relative aspect-video overflow-hidden rounded-2xl bg-white/[0.04] p-4 group">
                <Image
                  src="/Marketing/EstrategiaDeContenido.jpeg?v=2"
                  alt="Estrategia de Contenido Digital"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* DISEÑO DE CONTENIDO */}
      <section className="pb-24 bg-[#0f0f17]/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            <div className="order-1 md:order-2 text-center md:text-left">
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                Diseño{" "}
                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                  Profesional
                </span>
              </h2>
              <p className="mt-6 text-base text-white/50">
                Imágenes y videos de alta calidad que destacan tu marca y atraen 
                a tu audiencia objetivo. Nuestros diseños son únicos y crean impacto.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3 text-sm text-white/70">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 text-xs">
                    ✓
                  </span>
                  Imágenes profesionales de alta resolución
                </li>
                <li className="flex items-start gap-3 text-sm text-white/70">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 text-xs">
                    ✓
                  </span>
                  Videos cortos y atractivos
                </li>
                <li className="flex items-start gap-3 text-sm text-white/70">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 text-xs">
                    ✓
                  </span>
                  Diseño consistente con tu marca
                </li>
              </ul>
            </div>
            <div className="order-2 md:order-1 relative aspect-video overflow-hidden rounded-2xl bg-white/[0.04] p-4 group">
              <Image
                src="/Marketing/DiseñosProfesionales.png?v=2"
                alt="Diseños Profesionales para Marketing"
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FRECUENCIA DE PUBLICACIONES */}
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            <div className="order-2 md:order-1 text-center md:text-left">
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                Contenido{" "}
                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                  Constante
                </span>
              </h2>
              <p className="mt-6 text-base text-white/50">
                Publicaciones regulares que mantienen tu negocio activo en redes sociales. 
                Sin días sin contenido y sin excusas.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3 text-sm text-white/70">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 text-xs">
                    ✓
                  </span>
                  Publicaciones diarias
                </li>
                <li className="flex items-start gap-3 text-sm text-white/70">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 text-xs">
                    ✓
                  </span>
                  Planificación mensual
                </li>
                <li className="flex items-start gap-3 text-sm text-white/70">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 text-xs">
                    ✓
                  </span>
                  Sin días sin contenido
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 relative aspect-video overflow-hidden rounded-2xl bg-white/[0.04] p-4 group">
              <Image
                src="/Marketing/ContenidoConstante.png?v=2"
                alt="Contenido Constante en Redes Sociales"
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PUBLICIDAD PAGA */}
      <section className="pb-24 bg-[#0f0f17]/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            <div className="order-1 md:order-2 text-center md:text-left">
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                Anuncios{" "}
                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                  en Redes
                </span>
              </h2>
              <p className="mt-6 text-base text-white/50">
                Campañas publicitarias que llegan a clientes potenciales interesados 
                en lo que vendes. Maximiza tu alcance y conversiones.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3 text-sm text-white/70">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 text-xs">
                    ✓
                  </span>
                  Campañas segmentadas por audiencia
                </li>
                <li className="flex items-start gap-3 text-sm text-white/70">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 text-xs">
                    ✓
                  </span>
                  Análisis de rendimiento en tiempo real
                </li>
                <li className="flex items-start gap-3 text-sm text-white/70">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 text-xs">
                    ✓
                  </span>
                  Máxima conversión posible
                </li>
              </ul>
            </div>
            <div className="order-2 md:order-1 relative aspect-video overflow-hidden rounded-2xl bg-white/[0.04] p-4 group">
              <Image
                src="/Marketing/AnunciosEnRedes.png?v=2"
                alt="Anuncios en Redes Sociales"
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* REPORTES Y MÉTRICAS */}
      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            <div className="order-2 md:order-1 text-center md:text-left">
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                Reportes{" "}
                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                  Mensuales
                </span>
              </h2>
              <p className="mt-6 text-base text-white/50">
                Métricas claras de rendimiento para que veas el impacto de tu inversión. 
                Informes detallados con recomendaciones de mejora.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3 text-sm text-white/70">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 text-xs">
                    ✓
                  </span>
                  Métricas clave de rendimiento
                </li>
                <li className="flex items-start gap-3 text-sm text-white/70">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 text-xs">
                    ✓
                  </span>
                  Informes mensuales detallados
                </li>
                <li className="flex items-start gap-3 text-sm text-white/70">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-500/20 text-amber-400 text-xs">
                    ✓
                  </span>
                  Recomendaciones de mejora
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 relative aspect-video overflow-hidden rounded-2xl bg-white/[0.04] p-4 group">
              <Image
                src="/Marketing/ReportesMensuales.png?v=2"
                alt="Reportes Mensuales de Marketing"
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DASHBOARD INTERACTIVO */}
      <section id="panel-marketing" className="py-32 bg-[#0f0f17]/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
                Panel en vivo
              </p>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Gestión{" "}
                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                  en tiempo real
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-white/50">
                Métricas de rendimiento, publicaciones activas y actividad de engagement en vivo.
              </p>
            </div>
          </ScrollReveal>

          <MarketingDashboard />
        </div>
      </section>

      {/* GUARANTEES SECTION */}
      <GuaranteesSection />

      {/* PRICING */}
      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
                Planes
              </p>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Elige tu plan
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-white/50">
                Contenido profesional para redes sociales, precios fijos sin sorpresas
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            <ScrollReveal>
              <PricingCard
                name="Plan Crece"
                price="$350.000"
                period="/ mes"
                description="Presencia digital constante"
                imageUrl="/Marketing/PlanCrece.png?v=2"
                imageAlt="Plan Crece Marketing Digital"
                features={[
                  "Contenido mensual",
                  "Gestión de redes sociales",
                  "Imágenes profesionales",
                ]}
                waText="Hola Call360, quiero el Plan Crece de marketing"
              />
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <PricingCard
                name="Plan Pro"
                price="$650.000"
                period="/ mes"
                description="Máxima visibilidad y alcance"
                imageUrl="/Marketing/PlanPro.png?v=2"
                imageAlt="Plan Pro Marketing Digital"
                features={[
                  "Contenido avanzado",
                  "Gestión completa de redes",
                  "Videos profesionales",
                  "Campañas publicitarias",
                ]}
                featured
                badge="Recomendado"
                waText="Hola Call360, quiero el Plan Pro de marketing"
              />
            </ScrollReveal>
          </div>
          <p className="mt-8 text-center text-xs text-white/40">
            * Garantía de retorno: Si no recuperas tu inversión tras implementar nuestras recomendaciones y campañas, te devolvemos el dinero de la gestión.
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <WhyChooseUs
              title="¿Por qué Marketing Digital Call360?"
              showCta={true}
              ctaLabel="Hablar con un consultor"
              ctaText="Hola Call360, quiero hablar con un consultor de marketing sobre el Plan Crece o Pro."
              ctaSubtext="Te asesoramos sin costo sobre tu presencia en redes"
              benefits={[
                {
                  title: "Contenido constante",
                  description: "Publicaciones regulares que mantienen tu negocio activo en redes sociales.",
                },
                {
                  title: "Diseños profesionales",
                  description: "Imágenes y videos de alta calidad que destacan tu marca sobre la competencia.",
                },
                {
                  title: "Estrategia de contenido",
                  description: "Planificación mensual alineada con los objetivos de tu negocio.",
                },
                {
                  title: "Anuncios en redes",
                  description: "Campañas publicitarias que llegan a clientes potenciales interesados.",
                },
                {
                  title: "Reportes mensuales",
                  description: "Métricas claras de rendimiento para que veas el impacto de tu inversión.",
                },
                {
                  title: "Sin preocupaciones",
                  description: "Nosotros nos encargamos de todo. Tú solo recibes los resultados.",
                },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-32 bg-[#0f0f17]/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <HowItWorks
              title="Cómo funciona"
              subtitle="Tu estrategia de contenido lista en tiempo récord"
              image="/Marketing/marketing_scheduler_mockup.png"
              steps={[
                {
                  number: "1",
                  title: "Analizamos tu negocio",
                  description: "Entendemos tu industria, tu audiencia y tus objetivos para crear una estrategia personalizada.",
                },
                {
                  number: "2",
                  title: "Creamos contenido estratégico",
                  description: "Diseñamos publicaciones, imágenes y videos que reflejan tu marca y atraen a tu público ideal.",
                },
                {
                  number: "3",
                  title: "Publicamos y optimizamos",
                  description: "Programamos contenido mensual y ajustamos la estrategia según los resultados y métricas.",
                },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <ComparisonTable
              title="Marketing informal vs Estrategia profesional"
              subtitle="La diferencia entre publicar por publicar y generar resultados"
              showCta={true}
              ctaLabel="Profesionalizar mi marketing"
              ctaText="Hola Call360, quiero delegar mi marketing digital y ver resultados reales."
              ctaSubtext="Diseño coherente y anuncios enfocados en ventas"
              items={[
                {
                  informal: "Publicas cuando tienes tiempo o inspiración",
                  call360: "Calendario editorial planificado con anticipación para consistencia total",
                },
                {
                  informal: "Diseños improvisados sin identidad de marca",
                  call360: "Creación visual coherente que refuerza tu posicionamiento",
                },
                {
                  informal: "Sin estrategia detrás de lo que publicas",
                  call360: "Planificación mensual alineada con objetivos comerciales reales",
                },
                {
                  informal: "No sabes si lo que publicas funciona",
                  call360: "Reportes mensuales con métricas claras de engagement y alcance",
                },
                {
                  informal: "Inviertes en anuncios sin segmentación",
                  call360: "Campañas dirigidas a audiencias específicas con mayor conversión",
                },
                {
                  informal: "Competencia te supera con mejor presencia",
                  call360: "Diferenciación visual que hace destacar tu marca en el feed",
                },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* BEFORE AFTER */}
      <section className="py-32 bg-[#0f0f17]/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <BeforeAfter
              title="De inconsistente a estrategia consolidada"
              subtitle="Tu transformación con marketing digital profesional"
              showCta={true}
              ctaLabel="Comenzar mi plan mensual"
              ctaText="Hola Call360, quiero comenzar mi plan de marketing digital."
              ctaSubtext="Sin cláusulas de permanencia • Cancelación flexible"
              items={[
                {
                  before: "Publicas ocasionalmente sin constancia",
                  after: "Calendario editorial mensual que mantiene tu marca siempre activa",
                },
                {
                  before: "Diseños caseros que no reflejan tu valor",
                  after: "Material visual profesional que eleva tu percepción de marca",
                },
                {
                  before: "No sabes qué tipo de contenido funciona",
                  after: "Estrategia basada en datos y objetivos medibles",
                },
                {
                  before: "Tarda horas crear cada publicación",
                  after: "Todo listo y programado. Tú solo apruebas y publicas",
                },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* TRUST BLOCK */}
      <section className="py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <TrustBlock
              title="No somos una agencia creativa más"
              description="Hemos visto cómo empresas colombianas pierden oportunidades porque su presencia en redes es inconsistente o poco profesional. Por eso creamos este servicio: contenido que realmente genera engagement y lleva a conversiones, no solo likes vacíos."
              showCta={true}
              ctaLabel="Iniciar con garantía de retorno"
              ctaText="Hola Call360, quiero contratar el plan de marketing digital con garantía de retorno de inversión."
              ctaSubtext="Soporte y diseño premium de Colombia"
              bullets={[
                "Más de 200 empresas confían en nosotros para su presencia digital",
                "Enfoque en resultados: cada pieza de contenido tiene un propósito comercial",
                "Equipo especializado que entiende el mercado colombiano y sus tendencias",
              ]}
              closingStatement="Esto no es solo contenido bonito. Es tu voz profesional en redes 24/7."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-[#0f0f17]/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <FAQSection
              title="Preguntas frecuentes"
              showCta={true}
              ctaLabel="Resolver otra pregunta"
              ctaText="Hola Call360, tengo una duda sobre el servicio de marketing digital."
              ctaSubtext="Respondemos rápido por WhatsApp"
              items={[
                {
                  question: "¿Con qué frecuencia publican?",
                  answer: "Depende del plan. Plan Crece incluye publicaciones regulares para mantener presencia constante. Plan Pro incluye contenido diario y campañas activas para máxima visibilidad.",
                },
                {
                  question: "¿Qué redes sociales gestionan?",
                  answer: "Gestionamos Facebook, Instagram y TikTok principalmente. También podemos incluir LinkedIn o YouTube según las necesidades de tu negocio.",
                },
                {
                  question: "¿Necesito darles fotos o materiales?",
                  answer: "Puedes proporcionarnos material existente, pero nuestro equipo puede crear todo desde cero incluyendo fotografía profesional si lo necesitas.",
                },
                {
                  question: "¿Recibo reportes de resultados?",
                  answer: "Sí, incluimos reportes mensuales detallados con métricas de engagement, alcance, crecimiento de seguidores y recomendaciones de mejora.",
                },
                {
                  question: "¿Puedo cancelar cuando quiera?",
                  answer: "Los planes son mensuales sin permanencia. Puedes cancelar en cualquier momento solo pagando por el mes actual.",
                },
                {
                  question: "¿Incluyen gestión de comentarios y mensajes?",
                  answer: "Sí, respondemos comentarios y mensajes directos como parte del servicio para mantener buena interacción con tu comunidad.",
                },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-3xl border border-white/[0.08] bg-[#12121a] p-8 md:p-12">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
                    ¿Quieres que tu negocio crezca en redes?
                  </h2>
                  <p className="mx-auto mt-4 max-w-xl text-base text-white/50 md:mx-0">
                    Solicita una propuesta personalizada y empieza a atraer clientes
                    con contenido profesional.
                  </p>
                  <div className="mt-8 flex flex-col items-center gap-4 md:items-start">
                    <WhatsAppButton
                      text="Hola Call360, quiero una propuesta de marketing"
                      label="Solicitar propuesta de marketing"
                      className="text-base px-8 py-4"
                    />
                    <p className="text-xs text-white/40">Garantía de retorno • Plan Crece o Pro sin ataduras</p>
                  </div>
                </div>
                
                <div className="relative aspect-video overflow-hidden rounded-2xl bg-white/[0.04] p-4 group">
                  <Image
                    src="/Marketing/SolicitarPropuesta.png?v=2"
                    alt="Solicitar Propuesta de Marketing"
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
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