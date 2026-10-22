import type { Metadata } from "next";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServiceLeadForm from "@/components/ServiceLeadForm";
import DemoRequestForm from "@/components/DemoRequestForm";
import GuaranteesSection from "@/components/GuaranteesSection";
import ImageSlider from "@/components/ImageSlider";
import WebAndEmailPricing from "@/components/WebAndEmailPricing";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import CommercialTicket from "@/components/CommercialTicket";
import LiveBenefitsTicker from "@/components/LiveBenefitsTicker";

export const metadata: Metadata = {
  title: "Páginas Web en 72 Horas en Colombia · Call360",
  description:
    "Páginas web profesionales para negocios y empresas en Colombia listas en 72 horas. Diseño de alta velocidad, optimización móvil y conexión directa a WhatsApp desde $100.000/mes.",
  alternates: {
    canonical: "https://call360colombia.com/paginas-web",
  },
  openGraph: {
    title: "Páginas Web Profesionales en 72 Horas | Call360 Colombia",
    description:
      "Tu página web lista para vender en 72 horas. Sin agencias costosas ni demoras. Diseñada para generar prospectos y conectada a WhatsApp.",
    url: "https://call360colombia.com/paginas-web",
    siteName: "Call360 Colombia",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://call360colombia.com/inicio/web.png?v=2",
        width: 1200,
        height: 630,
        alt: "Páginas Web Profesionales Call360 Colombia",
      },
    ],
  },
};

const paginasWebSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Desarrollo de Páginas Web Profesionales Call360",
  image: "https://call360colombia.com/inicio/web.png?v=2",
  description:
    "Páginas web de alto rendimiento para empresas y comercios en Colombia con entrega en 72 horas, hosting, dominio y conexión directa a WhatsApp.",
  brand: {
    "@type": "Brand",
    name: "Call360 Colombia",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "COP",
    lowPrice: "100000",
    highPrice: "600000",
    offerCount: "3",
  },
};

const comparisonItems = [
  {
    label: "Tiempo de entrega",
    solo: "4 a 8 semanas",
    call360: "72 horas garantizadas",
  },
  {
    label: "Diseño y estructura",
    solo: "Plantilla genérica sin optimizar",
    call360: "Diseño comercial enfocado en ventas",
  },
  {
    label: "Integración WhatsApp",
    solo: "Enlace básico o plugin lento",
    call360: "Botones directos y prellenados",
  },
  {
    label: "Hosting y dominio propio",
    solo: "Cobros extras por separado",
    call360: "Todo incluido en tu plan anual",
  },
  {
    label: "Correos corporativos",
    solo: "Configuración manual compleja",
    call360: "3 cuentas oficiales listas con IA",
  },
  {
    label: "Soporte y cambios",
    solo: "Tickets lentos o cobro por hora",
    call360: "Atención directa con el desarrollador",
  },
];

const faqItems = [
  {
    question: "¿En serio la página está lista en 72 horas?",
    answer:
      "Sí. Contamos con una metodología estructurada: tras recibir la información básica de tu negocio (logo, servicios, fotos y datos de contacto), desarrollamos y publicamos tu sitio en 72 horas hábiles con dominio y WhatsApp integrados.",
  },
  {
    question: "¿Qué incluye el Plan Anual con 50% de descuento?",
    answer:
      "Por solo $600.000 COP al año (equivalente a $50.000 COP/mes), recibes la página web completa, dominio propio (.com o .co) a tu nombre por 1 año, 3 correos corporativos con IA, hosting en la nube de alta velocidad, certificado de seguridad SSL y soporte prioritario directo.",
  },
  {
    question: "¿Tengo que pagar antes de ver el diseño?",
    answer:
      "No. En Call360 te preparamos un boceto preliminar de tu web sin costo inicial. Solo cuando veas la propuesta y te guste cómo luce, realizas el pago para publicar en tu dominio definitivo.",
  },
  {
    question: "¿La página web funciona bien en celulares?",
    answer:
      "Totalmente. El 80% de tus clientes en Colombia te visitarán desde su teléfono. Todos nuestros sitios son diseñados con enfoque móvil nativo: cargan en menos de 1 segundo en redes 4G y facilitan el contacto inmediato por WhatsApp.",
  },
  {
    question: "¿Puedo conectar la web al CRM de WhatsApp más adelante?",
    answer:
      "Sí. Call360 es un ecosistema modular. Puedes empezar hoy con tu página web y luego activar el CRM WhatsApp multiagente o la telefonía cuando tu equipo comercial lo requiera, sin rehacer nada.",
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

      {/* BLOQUE 1: HERO (GANCHO COMERCIAL DIRECTO + CTA ERGONÓMICO) */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(6,182,212,0.15),transparent_70%)]" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="noise-overlay" />
        
        {/* Floating Elements Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 sm:px-4 py-1.5 sm:py-2 text-[10px] xs:text-xs font-bold uppercase tracking-[0.1em] sm:tracking-[0.2em] text-cyan-400 mb-6 sm:mb-8 animate-fade-in-up text-center">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              <span className="break-words">Páginas Web Creadas Para Vender</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-white mb-5 sm:mb-6 animate-fade-in-up animation-delay-100 break-words">
              No pierdas clientes por una web lenta: lista en{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                72 horas
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-white/70 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200 px-2 sm:px-0">
              Páginas web de alta velocidad desde <strong className="text-white font-black">$100.000 COP/mes</strong> y ecosistema comercial conectado a tu WhatsApp. Sin agencias costosas ni demoras.
            </p>

            {/* CTA Buttons Ergonómicos */}
            <div className="flex flex-col items-center justify-center gap-4 animate-fade-in-up animation-delay-300 w-full max-w-full">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full max-w-lg mx-auto">
                <WhatsAppButton
                  text="Hola Call360, quiero cotizar mi página web profesional y mi CRM ahora"
                  label="Cotizar mi página / CRM ahora"
                  className="w-full sm:w-auto min-h-[50px] sm:min-h-[58px] text-sm sm:text-lg px-4 sm:px-10 py-3.5 sm:py-4 font-black shadow-2xl shadow-cyan-500/30 justify-center text-center"
                />
                <a
                  href="#planes"
                  className="inline-flex w-full sm:w-auto min-h-[50px] sm:min-h-[58px] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.08] backdrop-blur-md px-5 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white transition-all hover:border-cyan-400/50 hover:bg-cyan-400/10 active:scale-[0.98] group text-center"
                >
                  <span>Ver planes y precios</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-y-0.5 shrink-0">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <polyline points="19 12 12 19 5 12" />
                  </svg>
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs mt-2">
                <a
                  href="#planes"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 font-bold hover:bg-cyan-500/20 transition-all"
                >
                  <span>⚡ Planes desde $100k/mes</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <Link
                  href="/#simulador-en-vivo"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 font-bold hover:bg-emerald-500/20 transition-all"
                >
                  <span>🚀 Test Velocidad (0.8s vs 7.4s)</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  href="/#calculadora-ahorro"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-white/70 font-bold hover:text-white hover:bg-white/[0.08] transition-all"
                >
                  <span>💰 Calculadora de Ahorro</span>
                </Link>
              </div>

              <p className="text-[11px] sm:text-xs text-white/50 mt-1 text-center px-2">
                ⚡ Boceto inicial sin costo • Dominio propio (.com o .co) • Soporte directo en Bogotá
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CINTA DE BENEFICIOS INCLUIDOS EN PÁGINAS WEB (CALIBRADA A 48s) */}
      <LiveBenefitsTicker />

      {/* BLOQUE 2 INMEDIATO: PLANES CLAROS Y TRANSPARENTES + TICKETS DE OBSEQUIO (CRO) */}
      <section className="py-14 sm:py-20 lg:py-28 bg-[#0a0c13]/90 border-b border-white/[0.06]" id="planes">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* SHOWCASE DE TICKETS DE OBSEQUIO & BONOS EXCLUSIVOS */}
          <div className="mb-14 sm:mb-20 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-amber-300 mb-4 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-amber-400 animate-ping" />
              Pases &amp; Bonos Exclusivos de Obsequio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              Pases Incluidos en tu{" "}
              <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Plan Anual de $600.000 COP
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg text-white/70 leading-relaxed">
              Al contratar tu página web anual (con 50% de descuento directo), recibes de inmediato estos 4 pases comerciales de cortesía sin cobros sorpresa:
            </p>

            {/* 4 TICKETS AMPLIADOS: CERO RECORTE NI PUNTOS SUSPENSIVOS */}
            <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 justify-items-stretch">
              <CommercialTicket
                category="PASE DE CORTESÍA"
                title="DOMINIO .COM O .CO INCLUIDO"
                subtitle="Registro a tu nombre por 1 año completo sin cobros ocultos."
                serial="DOM-2026"
                badge="ÉLITE"
                stubLabel="PASE VIP"
                color="gold"
              />
              <CommercialTicket
                category="PASE DE CORTESÍA"
                title="3 CORREOS CORPORATIVOS"
                subtitle="tudominio.com con Webmail seguro y alta velocidad."
                serial="MAIL-360"
                badge="PRO"
                stubLabel="CORREOS"
                color="cyan"
              />
              <CommercialTicket
                category="PASE DE INTELIGENCIA ARTIFICIAL"
                title="100 CRÉDITOS DE IA MENSUALES"
                subtitle="Generación de textos, respuestas y asistencia comercial."
                serial="AI-PRO100"
                badge="IA"
                stubLabel="PASE IA"
                color="lavender"
              />
              <CommercialTicket
                category="SOPORTE PRIORITARIO"
                title="SOPORTE Y CAMBIOS DIRECTOS"
                subtitle="Mantenimiento prioritario sin intermediarios ni tickets lentos."
                serial="SOP-DIRECT"
                badge="ÁGIL"
                stubLabel="DIRECTO"
                color="emerald"
              />
            </div>
          </div>

          {/* TABLA DE PRECIOS */}
          <WebAndEmailPricing />
          
          <p className="mt-12 text-center text-xs text-white/50">
            * Garantía de satisfacción Call360: Diseñamos un boceto preliminar de tu web sin costo. Solo pagas si el diseño final te convence.
          </p>
        </div>
      </section>

      {/* BLOQUE 3: CASOS DE ÉXITO REALES Y PRUEBA SOCIAL DE PESO */}
      <section className="py-14 sm:py-20 lg:py-28" id="casos-reales">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
              ★ Casos de Éxito Reales
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Empresas colombianas que ya{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                venden con su web Call360
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-white/60 leading-relaxed">
              Explora proyectos reales en producción diseñados para convertir visitas en clientes reales por WhatsApp.
            </p>
          </div>

          {/* Componente Interactivo de Proyectos Reales */}
          <PortfolioShowcase />

          {/* Galería Slider de Proyectos Reales */}
          <div className="mt-16 sm:mt-24">
            <div className="text-center mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Muestras adicionales de diseño responsive
              </h3>
              <p className="text-sm text-white/50 mt-1">
                Visualiza cómo lucen los portales de nuestros clientes en computadores y dispositivos móviles.
              </p>
            </div>
            <ImageSlider
              images={[
                { src: "/shots/clinica.jpg", alt: "New Clinic — Odontología y Armonización Orofacial", urlPreview: "newclinic.com.co" },
                { src: "/shots/alfayomega.jpg", alt: "Alfa & Omega — Extintores y Control de Plagas / Fumigación", urlPreview: "alfayomegaingenieria.com" },
                { src: "/shots/tulicencia.jpg", alt: "Tu Licencia — Gestión Legal y Trámites", urlPreview: "tulicenciacolombia.com" },
                { src: "/shots/yajuridico.jpg", alt: "YA Jurídico — Servicios Legales y Asesoría Corporativa", urlPreview: "yajuridico.com" },
                { src: "/shots/reservadelguamo.jpg", alt: "Reserva del Guamo Tolima — Desarrollo Inmobiliario y Lotes Campestres", urlPreview: "reservadelguamo.com" },
                { src: "/shots/call360.jpg", alt: "Call360 Colombia — Plataforma Comercial SaaS & CRM", urlPreview: "call360colombia.com" },
              ]}
              interval={4500}
            />
          </div>
        </div>
      </section>

      {/* BLOQUE 4: CÓMO FUNCIONA + COMPARATIVA + RESPALDO */}
      <section id="como-funciona" className="py-14 sm:py-20 lg:py-28 bg-[#0f0f17]/50 border-t border-white/[0.06]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 sm:mb-20">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 mb-4">
              Proceso simple
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
              Tu web en{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                3 pasos sencillos
              </span>
            </h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-3">
            {[
              {
                step: "1",
                title: "Cuéntanos de tu negocio",
                desc: "Completas una breve asesoría por WhatsApp. Nos compartes tu logo, servicios principales y fotos si las tienes.",
              },
              {
                step: "2",
                title: "Boceto y desarrollo en 72h",
                desc: "Estructuramos tu sitio con diseño moderno, textos persuasivos, botones de WhatsApp y optimización para Google.",
              },
              {
                step: "3",
                title: "Publicación y entrega",
                desc: "Conectamos tu dominio definitivo (.com o .co), configuramos tus correos corporativos y te entregamos el control total.",
              },
            ].map((s) => (
              <div key={s.step} className="rounded-2xl border border-white/[0.08] bg-[#12121a] p-8 text-center flex flex-col justify-between">
                <div>
                  <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/15 text-lg font-black text-cyan-300">
                    {s.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Comparativa */}
          <div className="mt-20 sm:mt-28">
            <div className="text-center mb-12 sm:mb-16">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 mb-4">
                Comparativa
              </p>
              <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white">
                Hacerlo solo vs{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                  Call360
                </span>
              </h3>
            </div>

            {/* VISTA MÓVIL: TARJETAS RESPONSIVAS Y 100% LEGIBLES (CERO TEXTO APRETADO) */}
            <div className="sm:hidden space-y-3.5">
              {comparisonItems.map((item, index) => (
                <div key={index} className="rounded-2xl border border-white/[0.08] bg-[#12121a] p-4 shadow-md">
                  <div className="font-bold text-sm text-white mb-3 pb-2 border-b border-white/[0.06] flex items-center justify-between">
                    <span>{item.label}</span>
                    <span className="text-[10px] font-mono text-cyan-400/80">#0{index + 1}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="rounded-xl bg-white/[0.02] border border-white/[0.05] p-3 text-white/55">
                      <span className="block text-[10px] font-bold text-red-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                        <span>✕</span> Hacerlo solo
                      </span>
                      <p className="leading-snug">{item.solo}</p>
                    </div>
                    <div className="rounded-xl bg-gradient-to-b from-cyan-500/10 to-blue-500/10 border border-cyan-500/25 p-3 text-cyan-300 font-semibold shadow-sm">
                      <span className="block text-[10px] font-bold text-cyan-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                        <span>✓</span> Con Call360
                      </span>
                      <p className="leading-snug">{item.call360}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* VISTA TABLET / ESCRITORIO: TABLA ESPACIOSA Y FLUIDA */}
            <div className="hidden sm:block overflow-x-auto rounded-3xl border border-white/[0.08] bg-[#12121a]">
              <div className="min-w-[620px]">
                <div className="grid grid-cols-3 border-b border-white/[0.08] bg-[#0f0f17]">
                  <div className="p-5 md:p-6 text-sm font-bold text-white/60">Aspecto de Entrega</div>
                  <div className="p-5 md:p-6 text-center">
                    <div className="text-sm font-bold text-white/40">Hacerlo por tu cuenta / Agencias</div>
                  </div>
                  <div className="p-5 md:p-6 text-center flex items-center justify-center">
                    <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-4 py-1.5 text-sm font-bold text-cyan-400 border border-cyan-500/30">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="shrink-0">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Call360 Colombia
                    </div>
                  </div>
                </div>

                {comparisonItems.map((item, index) => (
                  <div
                    key={index}
                    className={`grid grid-cols-3 border-b border-white/[0.06] transition-colors hover:bg-white/[0.02] ${
                      index === comparisonItems.length - 1 ? "border-b-0" : ""
                    }`}
                  >
                    <div className="p-5 md:p-6 flex items-center min-w-0">
                      <span className="text-sm font-medium text-white/90 leading-tight">{item.label}</span>
                    </div>
                    <div className="p-5 md:p-6 flex items-center justify-center text-center min-w-0">
                      <span className="text-sm text-white/40 leading-snug">{item.solo}</span>
                    </div>
                    <div className="p-5 md:p-6 flex items-center justify-center text-center min-w-0">
                      <span className="text-sm font-bold text-cyan-400 leading-snug">{item.call360}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE DE CONFIANZA Y ENLACE A NOSOTROS */}
      <section className="py-14 sm:py-20 lg:py-28 bg-[#0f0f17]/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-[#12121a] p-6 sm:p-12 md:p-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 sm:py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 mb-6">
              Respaldo Directo en Colombia
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4 sm:mb-6">
              Somos tu departamento de tecnología comercial
            </h2>
            
            <p className="text-sm sm:text-base md:text-lg text-white/60 mb-8 leading-relaxed max-w-2xl mx-auto">
              Después de +12 años viendo cómo empresas colombianas pierden dinero con 
              agencias costosas y proyectos que nunca terminan, creamos Call360: 
              páginas web que realmente funcionan como herramienta de ventas, respaldadas directamente por su desarrollador.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-6 max-w-md mx-auto mb-8 sm:mb-10">
              <div className="rounded-xl sm:rounded-2xl border border-white/[0.08] bg-[#0f0f17] p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1 sm:mb-2">
                  72h
                </div>
                <div className="text-[11px] sm:text-xs text-white/50">Entrega promedio</div>
              </div>
              <div className="rounded-xl sm:rounded-2xl border border-white/[0.08] bg-[#0f0f17] p-4 sm:p-6">
                <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-1 sm:mb-2">
                  12+
                </div>
                <div className="text-[11px] sm:text-xs text-white/50">Años de experiencia</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/nosotros"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-6 py-3 text-sm font-bold text-white transition-all hover:border-cyan-400/40 hover:bg-cyan-400/10"
              >
                <span>Conoce al creador y nuestra filosofía</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-20 lg:py-28">
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

          <div className="space-y-3 sm:space-y-4">
            {faqItems.map((item, index) => (
              <details
                key={index}
                className="group rounded-2xl border border-white/[0.08] bg-[#12121a] transition-all duration-300 hover:border-cyan-500/30"
              >
                <summary className="flex cursor-pointer items-center justify-between px-4 sm:px-6 py-4 sm:py-5 text-left">
                  <span className="text-sm sm:text-base font-bold text-white pr-4 sm:pr-8">{item.question}</span>
                  <svg
                    className="ml-2 sm:ml-4 h-5 w-5 shrink-0 text-cyan-400 transition-transform duration-300 group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-0">
                  <p className="text-xs sm:text-sm leading-relaxed text-white/60">
                    {item.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* GARANTÍAS */}
      <GuaranteesSection />

      {/* CTA FINAL DE CIERRE */}
      <section className="py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-gradient-to-br from-cyan-500/[0.1] via-[#12121a] to-violet-500/[0.1] p-6 sm:p-12 md:p-16 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 sm:mb-6">
                ¿Listo para empezar hoy?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-white/60 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                Tu página web profesional lista en 72 horas con dominio propio y WhatsApp conectado. Sin costos ocultos.
              </p>
              
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none mx-auto">
                <WhatsAppButton
                  text="Hola Call360, quiero iniciar mi página web profesional y mi CRM ahora"
                  label="Cotizar mi página / CRM ahora"
                  className="w-full sm:w-auto min-h-[50px] sm:min-h-[56px] text-sm sm:text-base px-4 sm:px-8 py-3.5 justify-center text-center"
                />
                <ServiceLeadForm
                  service="pagina-web"
                  triggerLabel="Solicitar llamada de asesoría"
                  triggerVariant="cyan"
                  triggerClassName="w-full sm:w-auto min-h-[50px] sm:min-h-[56px] text-sm sm:text-base px-4 sm:px-8 py-3.5"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
