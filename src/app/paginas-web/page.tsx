import type { Metadata } from "next";
import Image from "next/image";
import PricingCard from "@/components/PricingCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import ImageSlider from "@/components/ImageSlider";
import GuaranteesSection from "@/components/GuaranteesSection";
import ServiceLeadForm from "@/components/ServiceLeadForm";
import DemoRequestForm from "@/components/DemoRequestForm";
import WebAndEmailPricing from "@/components/WebAndEmailPricing";
import PortfolioShowcase from "@/components/PortfolioShowcase";

export const metadata: Metadata = {
  title: "Páginas Web Profesionales en Colombia | Entrega 72h & WhatsApp | Call360",
  description:
    "Diseño web para vender: lista en 72h con WhatsApp integrado, hosting de alta velocidad y correo corporativo. Planes desde $100.000/mes o $600.000/año al 50% DCTO.",
  alternates: {
    canonical: "https://call360colombia.com/paginas-web",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Páginas Web Profesionales en Colombia | Entrega 72h & WhatsApp | Call360",
    description:
      "Diseño web para vender: lista en 72h con WhatsApp integrado, hosting de alta velocidad y correo corporativo. Planes desde $100.000/mes o $600.000/año al 50% DCTO.",
    url: "https://call360colombia.com/paginas-web",
    siteName: "Call360 Colombia",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://call360colombia.com/creacion-web/hero.png",
        width: 1200,
        height: 630,
        alt: "Diseño y desarrollo de páginas web Call360 Colombia",
      },
    ],
  },
};

const paginasWebSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Desarrollo de Páginas Web Profesionales",
  "description":
    "Páginas web optimizadas para ventas con botón WhatsApp integrado, hosting de alta velocidad y entrega en 72 horas.",
  "brand": {
    "@type": "Brand",
    "name": "Call360 Colombia",
  },
  "offers": {
    "@type": "OfferCatalog",
    "name": "Planes de Páginas Web y Correo Corporativo",
    "itemListElement": [
      {
        "@type": "Offer",
        "name": "Plan Mensual Flexible",
        "description": "Página web responsiva con WhatsApp integrado, hosting y soporte continuo.",
        "price": "100000",
        "priceCurrency": "COP",
        "availability": "https://schema.org/InStock",
        "url": "https://call360colombia.com/paginas-web#planes",
      },
      {
        "@type": "Offer",
        "name": "Plan Anual Crecimiento (50% Descuento)",
        "description":
          "Página web profesional completa, hosting por 1 año, dominio .com o .co incluido y 3 cuentas de correo corporativo de obsequio.",
        "price": "600000",
        "priceCurrency": "COP",
        "availability": "https://schema.org/InStock",
        "url": "https://call360colombia.com/paginas-web#planes",
      },
      {
        "@type": "Offer",
        "name": "Plan Empresarial Pro",
        "description":
          "Plataforma a medida con base de datos dedicada, arquitectura escalable, integraciones CRM y hasta 10 correos corporativos.",
        "price": "1200000",
        "priceCurrency": "COP",
        "availability": "https://schema.org/InStock",
        "url": "https://call360colombia.com/paginas-web#planes",
      },
      {
        "@type": "Offer",
        "name": "Paquete Correo Corporativo Starter (5 Cuentas)",
        "description": "5 cuentas de correo corporativo con webmail profesional y antispam.",
        "price": "40000",
        "priceCurrency": "COP",
        "availability": "https://schema.org/InStock",
        "url": "https://call360colombia.com/paginas-web#planes",
      },
    ],
  },
};

const steps = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
    title: "Cuéntanos tu idea",
    description: "Comparte tu visión, colores y contenido. Nosotros hacemos el resto.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Diseñamos en 72h",
    description: "Tu página web profesional, optimizada para ventas y dispositivos móviles.",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Lanzas y vendes",
    description: "Publicamos tu sitio y comienzas a recibir clientes automáticamente.",
  },
];

const benefits = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Disponible 24/7",
    description: "Tu negocio nunca duerme. Tus clientes te encuentran cuando quieren.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "WhatsApp integrado",
    description: "Botón directo que conecta visitantes contigo en un clic.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Entrega en 72 horas",
    description: "Sin demoras. Tu web lista para vender en 3 días o menos.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    title: "SEO optimizado",
    description: "Aparece en Google cuando busquen lo que vendes.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    title: "100% responsive",
    description: "Se ve perfecto en celular, tablet y computador.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "Fácil de editar",
    description: "Actualiza contenido tú mismo sin saber programar.",
  },
];

const comparisonItems = [
  { label: "Tiempo de entrega", solo: "2-4 semanas", call360: "72 horas" },
  { label: "Costo inicial", solo: "$2M - $5M+", call360: "Desde $100K/mes" },
  { label: "Conexión WhatsApp", solo: "Manual o nada", call360: "Integrada nativamente" },
  { label: "Optimización móvil", solo: "Variable", call360: "100% responsive garantizado" },
  { label: "SEO incluido", solo: "Extra costoso", call360: "Optimizado desde el inicio" },
  { label: "Soporte", solo: "Por horas o tickets", call360: "Equipo dedicado en Bogotá" },
];

const faqItems = [
  {
    question: "¿Qué necesito para empezar?",
    answer: "Solo tu información básica: qué vendes, colores de marca, fotos (si tienes) y textos. Si no tienes nada, nosotros te ayudamos a crearlo.",
  },
  {
    question: "¿Puedo editarla después?",
    answer: "Sí. Todas nuestras páginas son editables. Te capacitamos para que actualices contenidos, precios y fotos sin depender de nadie.",
  },
  {
    question: "¿Incluye dominio y hosting?",
    answer: "El Plan Starter incluye subdominio y hosting básico. El Plan Premium incluye dominio propio (.com o .co), correos corporativos y hosting avanzado.",
  },
  {
    question: "¿Funciona para mi industria?",
    answer: "Sí. Hemos creado páginas para clínicas, restaurantes, barberías, consultores, e-commerce y muchos más. El diseño se adapta a tu sector.",
  },
];

export default function PaginasWebPage() {
  return (
    <>
      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(paginasWebSchema) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(6,182,212,0.15),transparent_70%)]" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="noise-overlay" />
        
        {/* Floating Elements Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-40 sm:py-48">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 mb-8 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              Páginas Web Creadas Para Vender
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight text-white mb-6 animate-fade-in-up animation-delay-100">
              No pierdas clientes por una web lenta: lista en{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                72 horas
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Diseño premium conectado directamente a tu WhatsApp. Sin agencias costosas, sin demoras y con planes desde $100.000/mes o $600.000/año al 50% de descuento.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-3 animate-fade-in-up animation-delay-300">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <WhatsAppButton
                  text="Hola Call360, quiero iniciar el diseño de mi página web profesional"
                  label="Cotizar página por WhatsApp"
                  className="text-base px-8 py-4 shadow-lg shadow-cyan-500/20"
                />
                <a
                  href="#planes"
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.15] px-8 py-4 text-base font-bold text-white transition-all hover:border-cyan-400/40 hover:bg-cyan-400/5 group"
                >
                  Ver planes y precios
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-y-1">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <polyline points="19 12 12 19 5 12" />
                  </svg>
                </a>
              </div>
              <p className="text-xs text-white/40">
                ⚡ Mockup preliminar sin costo • Dominio propio (.com o .co) • Soporte directo en Bogotá
              </p>
            </div>

            {/* Hero Visual: Showcase de Proyectos Reales */}
            <div className="mt-14 relative animate-fade-in-up animation-delay-400">
              <PortfolioShowcase />
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="como-funciona" className="py-32 bg-[#0f0f17]/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 mb-4">
              Proceso simple
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
              Tu web en{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                3 pasos
              </span>
            </h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Steps Stack */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl border border-white/[0.06] bg-[#12121a] p-6 transition-all duration-500 hover:border-cyan-500/20 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    {/* Step Number */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 text-lg font-black text-white shadow-lg shadow-cyan-500/30">
                      {index + 1}
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="mb-1 text-lg font-bold text-white">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-white/50">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mockup Visual Modernizado */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0c0c14]/90 p-5 group shadow-2xl shadow-cyan-500/10 hover:-translate-y-1 transition-all duration-500">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-[#ff5f56]/80" />
                  <span className="h-3 w-3 rounded-full bg-[#ffbd2e]/80" />
                  <span className="h-3 w-3 rounded-full bg-[#27c93f]/80" />
                </div>
                <div className="text-xs font-mono text-cyan-400 font-bold">
                  ⚡ Rendimiento Google: 100/100
                </div>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400 text-lg">🚀</span>
                    <div>
                      <div className="text-xs font-bold text-white">Velocidad Extrema</div>
                      <div className="text-[11px] text-white/50">Carga en menos de 1 segundo en redes 4G</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 font-mono">0.6s</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-cyan-400 text-lg">💬</span>
                    <div>
                      <div className="text-xs font-bold text-white">WhatsApp Flotante</div>
                      <div className="text-[11px] text-white/50">Mensajes precargados por servicio</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-cyan-400 font-mono">1 Clic</span>
                </div>

                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-violet-400 text-lg">🔒</span>
                    <div>
                      <div className="text-xs font-bold text-white">SSL &amp; Dominio Propio</div>
                      <div className="text-[11px] text-white/50">Certificado de seguridad bancario</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-violet-400 font-mono">HTTPS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 mb-4">
              Por qué elegirnos
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
              Más que una{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                página bonita
              </span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-white/[0.08] bg-[#12121a] p-8 transition-all duration-500 hover:border-cyan-500/30 hover:bg-[#1a1a24] hover:-translate-y-1"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-white/[0.06] text-cyan-400 transition-all duration-500 group-hover:bg-cyan-500/10 group-hover:scale-110 group-hover:rotate-3">
                  {benefit.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold text-white">
                  {benefit.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/50">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE PREVIEW */}
      <section className="py-32 bg-[#0f0f17]/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 mb-4">
                Vista previa
              </p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
                Diseños que{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                  venden
                </span>
              </h2>
              <p className="text-lg text-white/60 mb-8">
                Cada página está diseñada estratégicamente para convertir visitantes 
                en clientes. Botones de llamada a la acción, integración con WhatsApp 
                y optimización para ventas.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#12121a] px-5 py-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-white">WhatsApp integrado</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#12121a] px-5 py-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500/10 text-violet-400">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-white">SEO optimizado</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#12121a] px-5 py-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/10 text-amber-400">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="5" y="2" width="14" height="20" rx="2" />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-white">100% móvil</span>
                </div>
              </div>
            </div>

            {/* Image Slider de Proyectos Reales */}
            <ImageSlider
              images={[
                { src: "/shots/call360.jpg", alt: "Plataforma SaaS Call360 — Web Comercial & CRM" },
                { src: "/shots/clinica.jpg", alt: "Página Web Especializada para Clínica Odontológica" },
                { src: "/shots/reservadelguamo.jpg", alt: "Portal Turístico y Hotelero Reserva del Guamo" },
                { src: "/shots/barberpro.jpg", alt: "Sitio Web y Sistema de Citas Barber Pro" },
                { src: "/shots/yajuridico.jpg", alt: "Página Web Corporativa para Firma Jurídica" },
                { src: "/shots/alfayomega.jpg", alt: "Sitio Web Empresarial para Ingeniería Alfa y Omega" },
              ]}
              interval={4000}
            />
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 mb-4">
              Comparativa
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
              Hacerlo solo vs{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Call360
              </span>
            </h2>
          </div>

          <div className="overflow-hidden rounded-3xl border border-white/[0.08] bg-[#12121a]">
            {/* Header */}
            <div className="grid grid-cols-3 border-b border-white/[0.08] bg-[#0f0f17]">
              <div className="p-6" />
              <div className="p-6 text-center">
                <div className="text-sm font-bold text-white/40">Hacerlo solo</div>
              </div>
              <div className="p-6 text-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-4 py-1 text-sm font-bold text-cyan-400">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Call360
                </div>
              </div>
            </div>

            {/* Rows */}
            {comparisonItems.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 border-b border-white/[0.06] transition-colors hover:bg-white/[0.02] ${
                  index === comparisonItems.length - 1 ? "border-b-0" : ""
                }`}
              >
                <div className="p-6 flex items-center">
                  <span className="text-sm font-medium text-white/70">{item.label}</span>
                </div>
                <div className="p-6 flex items-center justify-center">
                  <span className="text-sm text-white/40">{item.solo}</span>
                </div>
                <div className="p-6 flex items-center justify-center">
                  <span className="text-sm font-bold text-cyan-400">{item.call360}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BLOCK */}
      <section className="py-32 bg-[#0f0f17]/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/[0.08] bg-[#12121a] p-12 md:p-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 mb-6">
              No somos una agencia
            </div>
            
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Somos tu departamento de tecnología
            </h2>
            
            <p className="text-lg text-white/60 mb-8 leading-relaxed">
              Después de +12 años viendo cómo empresas colombianas pierden dinero con 
              agencias costosas y proyectos que nunca terminan, creamos Call360: 
              páginas web que realmente funcionan como herramienta de ventas.
            </p>

            <div className="grid gap-6 md:grid-cols-3 mb-10">
              <div className="rounded-2xl border border-white/[0.08] bg-[#0f0f17] p-6">
                <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  72h
                </div>
                <div className="text-xs text-white/50">Entrega promedio</div>
              </div>
              <div className="rounded-2xl border border-white/[0.08] bg-[#0f0f17] p-6">
                <div className="text-3xl font-black bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-2">
                  12+
                </div>
                <div className="text-xs text-white/50">Años experiencia</div>
              </div>
            </div>

            <p className="text-xl font-bold text-white">
              Esto no es solo una página bonita. Es tu vendedor digital 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 mb-4">
              FAQ
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
              Preguntas{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                frecuentes
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <details
                key={index}
                className="group rounded-2xl border border-white/[0.08] bg-[#12121a] transition-all duration-300 hover:border-cyan-500/30"
              >
                <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-left">
                  <span className="text-base font-bold text-white pr-8">{item.question}</span>
                  <svg
                    className="ml-4 h-5 w-5 shrink-0 text-cyan-400 transition-transform duration-300 group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 pt-0">
                  <p className="text-sm leading-relaxed text-white/60">
                    {item.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEES SECTION */}
      <GuaranteesSection />

      {/* PRICING */}
      <section className="py-32 bg-[#0f0f17]/50" id="planes">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <WebAndEmailPricing />
          <p className="mt-12 text-center text-xs text-white/40">
            * Garantía de satisfacción Call360: Creamos un mockup preliminar de tu web sin costo. Solo pagas si el diseño final te convence.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-cyan-500/[0.1] via-[#12121a] to-violet-500/[0.1] p-12 md:p-20 text-center">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                ¿Listo para empezar?
              </h2>
              <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
                Tu página web profesional lista en 72 horas. Sin complicaciones. 
                Sin sorpresas.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <ServiceLeadForm
                  service="pagina-web"
                  triggerLabel="Cotizar mi página web"
                  triggerVariant="cyan"
                  triggerClassName="text-base px-8 py-4"
                />
                <DemoRequestForm
                  title="Ver ejemplos de páginas que vendemos"
                  subtitle="Te enseñamos sitios reales y cómo los diseñamos en 72h"
                  ctaLabel="Solicitar ejemplos"
                  defaultService="pagina-web"
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.15] px-8 py-4 text-base font-bold text-white transition-all hover:border-cyan-400/40 hover:bg-cyan-400/5"
                />
              </div>
              <p className="mt-3 text-xs text-white/40">Mockup preliminar gratis • Soporte ilimitado por WhatsApp</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
