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
    question: "Nunca he tenido una página web y no sé de tecnología, ¿cómo me ayuda Call360?",
    answer:
      "No necesitas saber nada de sistemas ni programación. Nosotros hacemos todo el trabajo por ti: registramos tu dominio, configuramos el hosting de alta velocidad, creamos el diseño profesional a la medida de tu negocio y lo conectamos directo a tu WhatsApp. Te entregamos un boceto previo gratis sin costo: solo pagas si te convence el diseño.",
  },
  {
    question: "¿Por qué mi negocio necesita una página web si ya tengo redes sociales o WhatsApp?",
    answer:
      "Tu negocio o local atiende en un horario comercial; tu página web está abierta las 24 horas del día, los 7 días de la semana en Google. Además, hoy los clientes desconfían de empresas que solo tienen un número de celular o redes sociales: una página web oficial con dominio propio (.com o .co) y correos corporativos le da a tu negocio la seguridad, formalidad y profesionalismo que cierran ventas.",
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
              <span className="break-words">Tu Empresa Abierta 24/7 en Internet</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-white mb-5 sm:mb-6 animate-fade-in-up animation-delay-100 break-words">
              Ten la página web de tu negocio lista en{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                72 horas
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-sm xs:text-base sm:text-lg lg:text-xl text-white/80 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200 px-2 sm:px-0">
              <strong className="text-white">Tu local o tu oficina atienden en un horario; tu página web vende las 24 horas del día:</strong> da seguridad y confianza a tus clientes, posiciona tu empresa en Google y recibe clientes directo en tu WhatsApp. Desde <strong className="text-cyan-300 font-black">$100.000 COP/mes</strong> o plan anual con 50% de descuento.
            </p>

            {/* CTA Buttons Ergonómicos */}
            <div className="flex flex-col items-center justify-center gap-4 animate-fade-in-up animation-delay-300 w-full max-w-full">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full max-w-lg mx-auto">
                <WhatsAppButton
                  text="Hola Call360, quiero tener la página web de mi negocio lista en 72 horas y solicitar mi boceto previo gratis"
                  label="Tener mi web lista en 72 horas"
                  className="w-full sm:w-auto min-h-[50px] sm:min-h-[58px] text-sm sm:text-lg px-4 sm:px-10 py-3.5 sm:py-4 font-black shadow-2xl shadow-cyan-500/30 justify-center text-center"
                />
                <a
                  href="#por-que-tener-web"
                  className="inline-flex w-full sm:w-auto min-h-[50px] sm:min-h-[58px] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.08] backdrop-blur-md px-5 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white transition-all hover:border-cyan-400/50 hover:bg-cyan-400/10 active:scale-[0.98] group text-center"
                >
                  <span>¿Por qué la necesitas?</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-y-0.5 shrink-0">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <polyline points="19 12 12 19 5 12" />
                  </svg>
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2.5 text-xs mt-2">
                <a
                  href="#por-que-tener-web"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 font-bold hover:bg-emerald-500/20 transition-all"
                >
                  <span>💡 ¿Por qué vender 24/7 con tu web?</span>
                </a>
                <a
                  href="#planes"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 font-bold hover:bg-cyan-500/20 transition-all"
                >
                  <span>⚡ Ver Planes desde $100k/mes</span>
                </a>
                <Link
                  href="/#simulador-en-vivo"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-white/70 font-bold hover:text-white hover:bg-white/[0.08] transition-all"
                >
                  <span>🚀 Test de Velocidad (0.8s)</span>
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

      {/* BLOQUE EDUCATIVO Y COMERCIAL: POR QUÉ TU NEGOCIO NECESITA UNA PÁGINA WEB HOY */}
      <section id="por-que-tener-web" className="py-16 sm:py-24 bg-[#0a0c14]/95 border-b border-white/[0.06] relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-300 mb-4 shadow-sm">
              ★ Lo que nadie te explica sobre tener una web ★
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              ¿Por qué tu negocio se posiciona mejor con una{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-300 bg-clip-text text-transparent">
                página web profesional?
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-white/70 leading-relaxed">
              Si nunca has tenido una página web o dudas si realmente vale la pena para tu negocio, esto es exactamente lo que cambia desde el primer día:
            </p>
          </div>

          {/* 4 Pilares Comerciales Irrefutables */}
          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4 items-stretch mb-14">
            {/* Pilar 1 */}
            <div className="rounded-3xl border border-white/10 bg-[#12141f] p-6 sm:p-7 flex flex-col justify-between hover:border-cyan-400/40 hover:-translate-y-1 transition-all shadow-xl">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-400 mb-5 border border-cyan-500/20">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md">
                  Venta 24/7 Sin Descanso
                </span>
                <h3 className="text-lg font-black text-white mt-3 mb-2">
                  Tu negocio atiende en un horario; tu web vende las 24 horas
                </h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  Tu local, consultorio u oficina física cierran en la noche y fines de semana. Tu página web nunca duerme: muestra tus productos, explica tus servicios y te deja prospectos listos en tu WhatsApp a las 11:00 PM o un domingo en la mañana.
                </p>
              </div>
            </div>

            {/* Pilar 2 */}
            <div className="rounded-3xl border border-white/10 bg-[#12141f] p-6 sm:p-7 flex flex-col justify-between hover:border-emerald-400/40 hover:-translate-y-1 transition-all shadow-xl">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-400 mb-5 border border-emerald-500/20">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md">
                  Confianza &amp; Seguridad
                </span>
                <h3 className="text-lg font-black text-white mt-3 mb-2">
                  Seguridad inmediata para que tus clientes no desconfíen
                </h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  Hoy en día, un cliente que solo ve un número de celular suelto o una cuenta en redes sospecha de si eres una empresa real o una estafa. Una web con dominio propio (.com o .co) y correos oficiales le da tranquilidad para transferir y comprar.
                </p>
              </div>
            </div>

            {/* Pilar 3 */}
            <div className="rounded-3xl border border-white/10 bg-[#12141f] p-6 sm:p-7 flex flex-col justify-between hover:border-amber-400/40 hover:-translate-y-1 transition-all shadow-xl">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-400 mb-5 border border-amber-500/20">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md">
                  Posicionamiento Google
                </span>
                <h3 className="text-lg font-black text-white mt-3 mb-2">
                  Aparece cuando tus clientes buscan lo que vendes en Google
                </h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  Cuando alguien necesita tus servicios en tu ciudad, lo primero que hace es buscar en Google. Google solo recomienda empresas con página web. Si tú no estás ahí, ese cliente que ya tiene la plata en la mano le compra a tu competencia.
                </p>
              </div>
            </div>

            {/* Pilar 4 */}
            <div className="rounded-3xl border border-white/10 bg-[#12141f] p-6 sm:p-7 flex flex-col justify-between hover:border-violet-400/40 hover:-translate-y-1 transition-all shadow-xl">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/15 text-violet-400 mb-5 border border-violet-500/20">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-violet-400 bg-violet-500/10 px-2.5 py-1 rounded-md">
                  Imagen de Primer Nivel
                </span>
                <h3 className="text-lg font-black text-white mt-3 mb-2">
                  Profesionalismo que te diferencia del 90% informal
                </h3>
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  Deja de mandar fotos desordenadas o PDFs pesados por chat. Envía el enlace de tu web: rápida, limpia y optimizada para celulares. Tus fotos, testimonios y precios se ven impecables, proyectando la seriedad de una empresa consolidada.
                </p>
              </div>
            </div>
          </div>

          {/* Gran Banner de Cero Riesgo: Mockup Gratis */}
          <div className="rounded-3xl border-2 border-cyan-400/40 bg-gradient-to-r from-cyan-500/15 via-[#121727] to-emerald-500/15 p-6 sm:p-10 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="max-w-2xl text-center lg:text-left space-y-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-400/40">
                  🤝 Cero Riesgo · Garantía Call360
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  ¿Nunca has tenido web? Te hacemos un boceto previo gratis antes de pagar
                </h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                  No tienes que saber nada de diseño, programación ni servidores. Nuestro equipo en Bogotá arma una muestra visual de cómo se verá tu página web. Solo cuando veas el resultado y te encante, cerramos el proyecto y la publicamos en 72 horas.
                </p>
              </div>
              <div className="shrink-0 w-full lg:w-auto">
                <WhatsAppButton
                  text="Hola Call360, nunca he tenido página web y quiero solicitar mi boceto previo gratuito en 72 horas para mi negocio."
                  label="Pedir mi boceto previo gratis"
                  className="w-full lg:w-auto !min-h-[52px] !px-8 !py-3.5 shadow-xl shadow-cyan-500/25 justify-center text-center font-black"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

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
                ¿Listo para que tu negocio empiece a vender 24/7?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-white/70 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                Ten la página web de tu empresa lista en 72 horas con dominio propio, WhatsApp integrado y boceto inicial gratuito. Da el paso hoy y proyecta la seguridad que tus clientes buscan.
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
