import type { Metadata } from "next";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServiceLeadForm from "@/components/ServiceLeadForm";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import WebAndEmailPricing from "@/components/WebAndEmailPricing";
import WebPreviewPhone from "@/components/WebPreviewPhone";

export const metadata: Metadata = {
  title: "Páginas Web para tu Negocio en Colombia | Call360",
  description:
    "Una página web profesional para que tu negocio aparezca en Google, se vea confiable y reciba clientes por WhatsApp. Dominio propio, diseño para celular y entrega en 72 horas. Boceto gratis.",
  alternates: {
    canonical: "https://call360colombia.com/paginas-web",
  },
  openGraph: {
    title: "Si no estás en internet, para tus clientes no existes | Call360",
    description:
      "Páginas web profesionales para negocios colombianos: rápidas, hechas para celular y conectadas a tu WhatsApp. Primero ves el diseño, después pagas.",
    url: "https://call360colombia.com/paginas-web",
    siteName: "Call360 Colombia",
    locale: "es_CO",
    type: "website",
    images: [
      {
        url: "https://call360colombia.com/inicio/web.png?v=2",
        width: 1200,
        height: 630,
        alt: "Páginas web profesionales Call360 Colombia",
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
    "Páginas web de alto rendimiento para empresas y comercios en Colombia con entrega en 72 horas, dominio, hosting y conexión directa a WhatsApp.",
  brand: {
    "@type": "Brand",
    name: "Call360 Colombia",
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "COP",
    lowPrice: "100000",
    highPrice: "1200000",
    offerCount: "3",
  },
};

const pasosDelCliente = [
  {
    title: "Abre el celular",
    description: "Escribe qué necesita y dónde está: “odontólogo cerca”, “comida a domicilio”, “arreglo de fugas”.",
  },
  {
    title: "Compara tres opciones",
    description: "No llama a todas. Mira las que tienen web, fotos, reseñas y un botón para escribir.",
  },
  {
    title: "Le escribe a la que ve seria",
    description: "Casi nunca a la que solo tiene un número suelto o una foto de perfil sin información.",
  },
];

const beneficios = [
  {
    title: "Te encuentran a toda hora",
    description:
      "Tu local cierra a las 6 de la tarde. Tu página sigue abierta a las 11 de la noche y un domingo.",
    color: "cyan",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Te ven confiable",
    description:
      "Un dominio propio y un correo de empresa cambian la cara: el cliente deja de dudar y se anima a pagar.",
    color: "emerald",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Dejas de competir solo por precio",
    description:
      "Muestras tu trabajo, tus fotos y tus resultados. El cliente compara calidad, no solamente cuánto cobras.",
    color: "amber",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M3 3v18h18" />
        <path d="M7 15l4-5 3 3 5-7" />
      </svg>
    ),
  },
  {
    title: "Llega gente que ya quiere comprar",
    description:
      "Quien te encuentra en Google ya está buscando lo que haces. Solo tienes que responderle rápido.",
    color: "violet",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
];

const pasosDelProyecto = [
  {
    step: "1",
    title: "Nos cuentas qué vendes",
    description:
      "Por WhatsApp. Logo, fotos y lo que quieres lograr. Si no tienes fotos o textos, te ayudamos a construirlos.",
  },
  {
    step: "2",
    title: "Ves el diseño antes de pagar",
    description:
      "Te mostramos cómo va a quedar tu página en celular y en computador. Si no te gusta, no pagas nada.",
  },
  {
    step: "3",
    title: "La publicamos en 72 horas",
    description:
      "Dominio propio, carga rápida, botones a WhatsApp y los correos de empresa si los quieres.",
  },
];

const comparacion = [
  { label: "Tiempo de entrega", solo: "4 a 8 semanas", call360: "72 horas" },
  { label: "Diseño", solo: "Plantilla genérica", call360: "Hecho para vender" },
  { label: "Contacto por WhatsApp", solo: "Un enlace básico", call360: "Botones y mensajes listos" },
  { label: "Dominio y hosting", solo: "Cobros aparte", call360: "Incluidos en el plan" },
  { label: "Soporte", solo: "Tickets lentos", call360: "Directo con el desarrollador" },
];

const faqItems = [
  {
    question: "¿En serio la página queda lista en 72 horas?",
    answer:
      "Sí. Con tu logo, tus servicios, tus fotos y tus datos de contacto desarrollamos y publicamos el sitio en 72 horas hábiles, con dominio y WhatsApp integrados.",
  },
  {
    question: "Nunca he tenido página web y no sé de tecnología, ¿es complicado?",
    answer:
      "No tienes que saber nada de sistemas ni de diseño. Nosotros registramos el dominio, configuramos el hosting, armamos el diseño y lo conectamos a tu WhatsApp. Tú solo nos cuentas de tu negocio.",
  },
  {
    question: "¿Tengo que pagar antes de ver cómo queda?",
    answer:
      "No. Primero te mostramos un boceto de tu página sin costo. Solo cuando lo veas y te guste, pagas para publicarla en tu dominio definitivo.",
  },
  {
    question: "La situación está difícil. ¿Me conviene invertir en esto ahora?",
    answer:
      "Justamente cuando el presupuesto aprieta no puedes regalar el primer contacto. Cada persona que busca tu servicio en tu ciudad y no te encuentra termina comprándole a otro. Tenemos un plan mensual desde $100.000 COP para que empieces sin descapitalizarte, y el boceto no se cobra.",
  },
  {
    question: "¿Por qué una web y no solo redes sociales o WhatsApp?",
    answer:
      "Las redes y el WhatsApp sirven para conversar, pero no aparecen cuando alguien busca tu servicio en Google. Una web con dominio propio te hace visible a cualquier hora, te da respaldo y permite que el cliente vea precios, fotos y servicios sin depender de una conversación.",
  },
  {
    question: "¿La página se ve bien en celulares?",
    answer:
      "Sí. La mayoría de tus clientes te va a visitar desde el teléfono, así que diseñamos primero para celular: letra legible, botones grandes y contacto a WhatsApp en un toque.",
  },
  {
    question: "¿Qué incluye el plan anual de $600.000?",
    answer:
      "La página completa, dominio .com o .co a tu nombre por un año, hosting de alta velocidad, certificado de seguridad, 3 correos corporativos con IA y soporte directo con el desarrollador.",
  },
];

const benefitAccent: Record<string, { border: string; icon: string }> = {
  cyan: { border: "hover:border-cyan-400/40", icon: "bg-cyan-500/15 text-cyan-300 border-cyan-500/25" },
  emerald: { border: "hover:border-emerald-400/40", icon: "bg-emerald-500/15 text-emerald-300 border-emerald-500/25" },
  amber: { border: "hover:border-amber-400/40", icon: "bg-amber-500/15 text-amber-300 border-amber-500/25" },
  violet: { border: "hover:border-violet-400/40", icon: "bg-violet-500/15 text-violet-300 border-violet-500/25" },
};

export default function PaginasWebPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(paginasWebSchema) }}
      />

      {/* 1. HERO: GANCHO EMOCIONAL + VISTA PREVIA (SIN PRECIOS) */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(6,182,212,0.16),transparent_70%)]" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 pt-10 pb-14 sm:px-6 sm:pt-14 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="text-center lg:text-left">
              <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-cyan-300 xs:text-[11px]">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
                </span>
                Páginas web para negocios en Colombia
              </span>

              <h1 className="mt-5 text-[2rem] font-black leading-[1.08] tracking-tight text-white xs:text-[2.3rem] sm:text-5xl lg:text-[3.4rem]">
                Si tu negocio no está en internet, para tus clientes{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                  no existe
                </span>
                .
              </h1>

              <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/75 sm:text-lg lg:mx-0">
                Nadie sale a dar vueltas por la ciudad buscando un negocio. Abre el celular, compara
                tres opciones y le escribe a la que ve más seria. Tu página web decide quién recibe
                ese mensaje.
              </p>

              <div className="mt-7 flex w-full flex-col items-stretch gap-2.5 sm:flex-row sm:items-center lg:justify-start">
                <WhatsAppButton
                  text="Hola Call360, quiero que mi negocio aparezca en internet con una página web. ¿Me ayudan con el boceto gratis?"
                  label="Quiero que me encuentren"
                  className="w-full justify-center min-h-[52px] px-6 text-[15px] font-black shadow-xl shadow-emerald-500/25 sm:w-auto sm:px-8 sm:text-base"
                />                <a href="#ejemplos"
                  className="inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-5 text-sm font-bold text-white transition-all hover:border-cyan-400/40 hover:bg-cyan-400/10 active:scale-[0.98] sm:w-auto"
                >
                  Ver páginas en vivo
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <polyline points="19 12 12 19 5 12" />
                  </svg>
                </a>
              </div>

              <p className="mt-4 text-[11px] leading-relaxed text-white/50">
                Boceto gratis · Solo pagas si te gusta · Lista en 72 horas
              </p>
              <a
                href="#planes"
                className="mt-2 inline-flex min-h-[32px] items-center gap-1 text-[11px] font-bold text-cyan-300/90 underline decoration-cyan-400/40 underline-offset-4 hover:text-cyan-200"
              >
                Ver planes y precios
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <polyline points="19 12 12 19 5 12" />
                </svg>
              </a>
            </div>

            <WebPreviewPhone />
          </div>
        </div>
      </section>

      {/* 2. LA REALIDAD: CÓMO BUSCA UN CLIENTE HOY */}
      <section className="border-y border-white/[0.06] bg-[#0a0c14]/80 py-14 sm:py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-400">
              Lo que pasa hoy
            </p>
            <h2 className="mt-3 text-[1.65rem] font-black leading-tight text-white xs:text-3xl sm:text-4xl">
              Tu cliente ya está buscando. La pregunta es{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
                a quién encuentra
              </span>
              .
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/65 sm:text-base">
              La gente no dejó de comprar. Cambió la forma de buscar: primero el celular, después la
              decisión.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            {pasosDelCliente.map((paso, index) => (
              <div
                key={paso.title}
                className="flex gap-3.5 rounded-2xl border border-white/[0.07] bg-[#10121b]/80 p-4 sm:flex-col sm:p-5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-500/25 bg-cyan-500/10 text-sm font-black text-cyan-300">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-[15px] font-black text-white">{paso.title}</h3>
                  <p className="mt-1 text-[13px] leading-relaxed text-white/60">{paso.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-cyan-400/25 bg-gradient-to-br from-cyan-500/[0.13] via-[#0c1420] to-[#0b0e16] p-5 sm:p-8">
            <p className="text-xl font-black leading-snug text-white sm:text-2xl">
              “En internet, no aparecer es igual a no existir.”
            </p>
            <p className="mt-2.5 text-sm leading-relaxed text-white/70">
              Mientras esperas que el cliente dé vueltas por la ciudad, él ya le escribió a otro
              negocio que encontró en el celular. No porque sea mejor, sino porque{" "}
              <strong className="text-white">fue más fácil de encontrar</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* 3. BENEFICIOS: ¿EN QUÉ ME AYUDA UNA WEB? */}
      <section id="beneficios" className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-400">
              ¿En qué te beneficia?
            </p>
            <h2 className="mt-3 text-[1.65rem] font-black leading-tight text-white xs:text-3xl sm:text-4xl lg:text-5xl">
              Una web no es un adorno. Es tu vendedor que{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                nunca duerme
              </span>
              .
            </h2>
          </div>

          <div className="scrollbar-none -mx-4 mt-7 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-4 sm:overflow-visible sm:px-0 lg:grid-cols-4">
            {beneficios.map((beneficio) => {
              const accent = benefitAccent[beneficio.color];
              return (
                <article
                  key={beneficio.title}
                  className={`w-[82%] shrink-0 snap-center rounded-2xl border border-white/[0.08] bg-[#11131c] p-5 transition-colors sm:w-auto ${accent.border}`}
                >
                  <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl border ${accent.icon}`}>
                    {beneficio.icon}
                  </div>
                  <h3 className="text-[16px] font-black leading-snug text-white">{beneficio.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/60">{beneficio.description}</p>
                </article>
              );
            })}
          </div>

          <div className="mt-4 flex flex-col items-center gap-2 sm:mt-6">
            <WhatsAppButton
              text="Hola Call360, quiero una página web para mi negocio. Vi los beneficios y quiero saber cómo empezar."
              label="Quiero esto para mi negocio"
              className="w-full max-w-xs justify-center min-h-[50px] font-black sm:w-auto sm:max-w-none"
            />
          </div>

          {/* Objeción real: la situación está difícil */}
          <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-white/10 bg-[#0f1119] p-5 sm:mt-14 sm:p-8">
            <span className="inline-flex items-center rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-amber-300">
              Hablemos claro
            </span>
            <h3 className="mt-3 text-xl font-black leading-snug text-white sm:text-2xl">
              “La situación está difícil” es la razón más cara para seguir invisible.
            </h3>
            <p className="mt-2.5 text-sm leading-relaxed text-white/65">
              Cuando el presupuesto aprieta, no se puede regalar el primer contacto:
            </p>
            <ul className="mt-3 space-y-2.5">
              {[
                "Cada persona que busca tu servicio en tu ciudad y no te encuentra, le compra a otro.",
                "Tu competencia no es mejor que tú: solo es más fácil de encontrar.",
                "Una página web trabaja 365 días al año y no pide aumento de sueldo.",
              ].map((item) => (
                <li key={item} className="flex gap-2.5 text-[13px] leading-relaxed text-white/70">
                  <span className="mt-[3px] flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-[10px] font-black text-emerald-400">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#planes"
              className="mt-5 inline-flex min-h-[46px] items-center gap-2 text-sm font-bold text-cyan-300 hover:text-cyan-200"
            >
              Ver cómo empezar sin gastar de más
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* 4. EJEMPLOS REALES */}
      <section id="ejemplos" className="border-y border-white/[0.06] bg-[#0a0c13]/70 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-400">
              Conoce lo que hacemos
            </p>
            <h2 className="mt-3 text-[1.65rem] font-black leading-tight text-white xs:text-3xl sm:text-4xl lg:text-5xl">
              Páginas reales, de negocios{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
                como el tuyo
              </span>
              .
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/60 sm:text-base">
              Toca un proyecto y mira el diseño por dentro. Los que están marcados en vivo puedes
              abrirlos y navegarlos como un cliente, desde tu celular.
            </p>
          </div>

          <div className="mt-6 sm:mt-10">
            <PortfolioShowcase />
          </div>

          <div className="mt-7 flex flex-col items-center gap-2">
            <WhatsAppButton
              text="Hola Call360, vi los ejemplos de páginas web que hicieron y quiero una así para mi negocio."
              label="Quiero una así para mi negocio"
              className="w-full max-w-xs justify-center min-h-[50px] font-black sm:w-auto sm:max-w-none"
            />
            <p className="text-[11px] text-white/40">Te mostramos el diseño antes de que pagues nada.</p>
          </div>
        </div>
      </section>

      {/* 5. CÓMO TRABAJAMOS + COMPARATIVA */}
      <section id="como-funciona" className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-400">
              Sin complicaciones
            </p>
            <h2 className="mt-3 text-[1.65rem] font-black leading-tight text-white xs:text-3xl sm:text-4xl lg:text-5xl">
              Así trabajamos{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
                contigo
              </span>
            </h2>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            {pasosDelProyecto.map((paso) => (
              <div
                key={paso.step}
                className="rounded-2xl border border-white/[0.08] bg-[#11131c] p-5"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/15 text-sm font-black text-cyan-300">
                  {paso.step}
                </span>
                <h3 className="mt-3 text-[16px] font-black text-white">{paso.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-white/60">{paso.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3">
            {[
              "Boceto antes de pagar",
              "Publicada en 72 horas",
              "Soporte con el desarrollador",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/[0.07] px-3.5 py-2.5"
              >
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-[11px] font-black text-emerald-400">
                  ✓
                </span>
                <span className="text-[12px] font-bold text-emerald-200/90">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-400">
                Por qué con nosotros
              </p>
              <h3 className="mt-2 text-2xl font-black text-white sm:text-3xl">
                Una plantilla no vende igual que una web pensada para tu negocio
              </h3>
            </div>

            {/* Vista móvil: filas legibles */}
            <div className="mt-6 space-y-2.5 sm:hidden">
              {comparacion.map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/[0.08] bg-[#11131c] p-3.5">
                  <p className="text-[12px] font-black uppercase tracking-wider text-white/60">
                    {item.label}
                  </p>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-2.5">
                      <span className="mb-1 block text-[9px] font-bold uppercase tracking-wider text-red-400">
                        ✕ Plantilla
                      </span>
                      <p className="text-[12px] leading-snug text-white/55">{item.solo}</p>
                    </div>
                    <div className="rounded-xl border border-cyan-500/25 bg-cyan-500/10 p-2.5">
                      <span className="mb-1 block text-[9px] font-bold uppercase tracking-wider text-cyan-300">
                        ✓ Call360
                      </span>
                      <p className="text-[12px] font-semibold leading-snug text-cyan-200">{item.call360}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Vista tablet / escritorio */}
            <div className="mt-8 hidden overflow-x-auto rounded-3xl border border-white/[0.08] bg-[#11131c] sm:block">
              <div className="min-w-[560px]">
                <div className="grid grid-cols-3 border-b border-white/[0.08] bg-[#0f0f17]">
                  <div className="p-5 text-sm font-bold text-white/60">Aspecto</div>
                  <div className="p-5 text-center text-sm font-bold text-white/40">Plantilla / agencia</div>
                  <div className="p-5 text-center">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/15 px-3 py-1 text-xs font-bold text-cyan-300">
                      ✓ Call360
                    </span>
                  </div>
                </div>
                {comparacion.map((item, index) => (
                  <div
                    key={item.label}
                    className={`grid grid-cols-3 ${
                      index === comparacion.length - 1 ? "" : "border-b border-white/[0.06]"
                    }`}
                  >
                    <div className="p-4 text-sm font-medium text-white/90">{item.label}</div>
                    <div className="p-4 text-center text-sm text-white/40">{item.solo}</div>
                    <div className="p-4 text-center text-sm font-bold text-cyan-300">{item.call360}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PLANES: PRIMERO EL VALOR, DESPUÉS EL PRECIO */}
      <section id="planes" className="border-y border-white/[0.06] bg-[#0a0c13]/90 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-400">
              Ya viste de qué se trata
            </p>
            <h2 className="mt-3 text-[1.65rem] font-black leading-tight text-white xs:text-3xl sm:text-4xl lg:text-5xl">
              Ahora sí,{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
                los planes
              </span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/60 sm:text-base">
              Dominio, hosting, seguridad y conexión a WhatsApp incluidos. Sin cobros sorpresa.
            </p>
          </div>

          <div className="mt-8 sm:mt-12">
            <WebAndEmailPricing />
          </div>

          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-white/10 bg-[#11131c] p-4 text-center sm:p-6">
            <p className="text-sm font-bold text-white">¿No sabes cuál elegir?</p>
            <p className="mt-1 text-[13px] leading-relaxed text-white/60">
              Escríbenos y en pocos minutos te decimos qué plan tiene sentido para tu negocio. Sin
              compromiso.
            </p>
            <div className="mt-3 flex flex-col items-center justify-center gap-2 sm:flex-row">
              <WhatsAppButton
                text="Hola Call360, no sé qué plan de página web me conviene. ¿Me asesoran?"
                label="Que me asesoren"
                className="w-full justify-center min-h-[46px] text-sm font-black sm:w-auto"
              />
              <ServiceLeadForm
                service="pagina-web"
                triggerLabel="Prefiero dejar mis datos"
                triggerVariant="cyan"
                triggerClassName="w-full sm:w-auto min-h-[46px] text-sm px-6"
              />
            </div>
          </div>

          <p className="mt-6 text-center text-[11px] text-white/40">
            Garantía Call360: diseñamos el boceto de tu web sin costo. Solo pagas si el diseño te convence.
          </p>
        </div>
      </section>

      {/* 7. FAQ */}
      <section id="preguntas" className="py-14 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-center sm:mb-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-cyan-400">
              Antes de escribirnos
            </p>
            <h2 className="mt-3 text-[1.65rem] font-black leading-tight text-white xs:text-3xl sm:text-4xl">
              Preguntas{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
                frecuentes
              </span>
            </h2>
          </div>

          <div className="space-y-2.5">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-white/[0.08] bg-[#11131c] transition-colors hover:border-cyan-500/30"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-3 px-4 py-3.5 text-left sm:px-5 sm:py-4">
                  <span className="text-[14px] font-bold leading-snug text-white sm:text-[15px]">
                    {item.question}
                  </span>
                  <svg
                    className="h-4 w-4 shrink-0 text-cyan-400 transition-transform duration-300 group-open:rotate-180"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    aria-hidden="true"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <div className="px-4 pb-4 sm:px-5">
                  <p className="text-[13px] leading-relaxed text-white/60">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CIERRE */}
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-cyan-500/[0.12] via-[#11131c] to-violet-500/[0.12] p-5 text-center sm:p-10">
            <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-2xl font-black leading-tight text-white sm:text-4xl">
                Que el próximo cliente que te busque te encuentre.
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
                Cuéntanos qué vende tu negocio y te mostramos cómo se vería tu página. Sin pagar nada
                por adelantado.
              </p>

              <div className="mt-6 flex flex-col items-stretch justify-center gap-2.5 sm:flex-row sm:items-center">
                <WhatsAppButton
                  text="Hola Call360, quiero que el próximo cliente que busque mi negocio me encuentre. ¿Me muestran cómo se vería mi página web?"
                  label="Pedir mi boceto gratis"
                  className="w-full justify-center min-h-[52px] font-black sm:w-auto sm:px-8"
                />
                <ServiceLeadForm
                  service="pagina-web"
                  triggerLabel="Prefiero dejar mis datos"
                  triggerVariant="cyan"
                  triggerClassName="w-full sm:w-auto min-h-[52px] px-6"
                />
              </div>

              <p className="mt-4 text-[11px] text-white/45">
                72 horas · Dominio propio · Soporte directo en Colombia ·{" "}
                <Link href="/nosotros" className="underline decoration-white/30 underline-offset-2 hover:text-white/70">
                  Conoce a quién te atiende
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
