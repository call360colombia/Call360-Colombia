import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import MezaFrameSequence from "@/components/MezaFrameSequence";
import { DEMO_PATH, CONTACT_EMAIL } from "@/lib/siteUrls";

export const metadata: Metadata = {
  title: "Nosotros | Juan David Meza & Arquitectura de Software Call360 Colombia",
  description:
    "Plataforma desarrollada y respaldada directamente por su creador, Juan David Meza. Centraliza tu equipo comercial y WhatsApp sin intermediarios, sin tickets eternos ni demoras.",
  alternates: {
    canonical: "https://call360colombia.com/nosotros",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Nosotros | Juan David Meza & Dirección Técnica Call360 Colombia",
    description:
      "Tecnología propia creada para vender. Conoce la dirección técnica de Juan David Meza detrás de la infraestructura CRM y telecomunicaciones de Call360.",
    url: "https://call360colombia.com/nosotros",
    siteName: "Call360 Colombia",
    locale: "es_CO",
    type: "profile",
    images: [
      {
        url: "https://call360colombia.com/juan-meza-director.jpg",
        width: 800,
        height: 800,
        alt: "Juan David Meza - Director Comercial y Desarrollador de Software Call360",
      },
    ],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://call360colombia.com/#organization",
      "name": "Call360 Colombia",
      "url": "https://call360colombia.com",
      "logo": "https://call360colombia.com/call360.png",
      "email": CONTACT_EMAIL,
      "telephone": "+573203693949",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bogotá",
        "addressRegion": "Cundinamarca",
        "addressCountry": "CO",
      },
    },
    {
      "@type": "Person",
      "@id": "https://call360colombia.com/nosotros#juan-meza",
      "name": "Juan David Meza",
      "jobTitle": "Commercial Director & Software Developer",
      "worksFor": {
        "@id": "https://call360colombia.com/#organization",
      },
      "image": "https://call360colombia.com/juan-meza-director.jpg",
      "email": CONTACT_EMAIL,
      "telephone": "+573203693949",
      "description":
        "Director Comercial y Arquitecto de Software en Call360 Colombia. Especialista en infraestructura de telecomunicaciones, servidores de telefonía IP y desarrollo full-stack de CRM comercial.",
    },
  ],
};

const pilaresComerciales = [
  {
    title: "No pierdas prospectos por demoras en WhatsApp",
    subtitle: "Centraliza tu equipo en un solo número sin fugas",
    description:
      "El 70% de las ventas en Colombia se caen por tardar en contestar o porque el asesor no tiene el contexto del cliente. Con Call360 tu equipo comparte una sola bandeja, distribuye chats en segundos y conserva el historial completo.",
    badge: "Cero Prospectos Perdidos",
    badgeColor: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Campañas masivas en minutos sin enredos técnicos",
    subtitle: "Difusión regulada con cadencia anti-bloqueo",
    description:
      "Envía novedades, promociones y reactivación de cartera a bases de datos segmentadas sin miedo al bloqueo. Controlas la velocidad de despacho, programas horarios hábiles y personalizas cada mensaje con el nombre del cliente.",
    badge: "Conversión Inmediata",
    badgeColor: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
      </svg>
    ),
  },
  {
    title: "Respaldado directamente por su creador",
    subtitle: "Trato directo con Juan David Meza: sin tickets eternos",
    description:
      "Olvídate de call centers robotizados o proveedores extranjeros que cobran en dólares y tardan días en contestar. Aquí hablas de frente con quien programa y optimiza la infraestructura, resolviendo cualquier necesidad al instante.",
    badge: "Soporte Sin Intermediarios",
    badgeColor: "border-violet-500/30 bg-violet-500/10 text-violet-400",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

const trayectoriaReal = [
  {
    period: "2014 - 2020",
    title: "Infraestructura & Servidores de Misión Crítica",
    desc: "Años instalando cableado estructurado, redes empresariales y conmutadores IP para más de un centenar de empresas en Bogotá. Entendimiento real del fierro y la conectividad.",
    badge: "Conocimiento Técnico Base",
  },
  {
    period: "2021 - 2023",
    title: "Telefonía Voz IP & Marcación Masiva",
    desc: "Desarrollo de troncales SIP y servidores Asterisk/Issabel dedicados, gestionando millones de minutos al mes para call centers con tarifas planas y estabilidad ininterrumpida.",
    badge: "+3 Millones de Minutos/Mes",
  },
  {
    period: "2024 - 2026",
    title: "Ecosistema Comercial Unificado Call360",
    desc: "Integración de CRM WhatsApp multiagente, desarrollo web en 72h con correo corporativo y campañas automatizadas. Un solo sistema pensado para que las empresas cierren más ventas.",
    badge: "Solución Comercial 360°",
  },
];

export default function NosotrosPage() {
  return (
    <>
      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* FONDO FIJO EN TODA LA PÁGINA: SECUENCIA DE 80 FRAMES */}
      <MezaFrameSequence />

      {/* CONTENIDO PRINCIPAL TRANSPARENTE (SIN BLUR PARA VER EL FONDO NÍTIDO) */}
      <div className="relative z-10 text-white min-h-screen">
        
        {/* HERO SECTION DE LA PÁGINA NOSOTROS */}
        <section className="pt-20 sm:pt-28 pb-16 sm:pb-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-black/35 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300 mb-6 shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                </span>
                Dirección Técnica &amp; Arquitectura de Software
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
                Juan David Meza &amp;{" "}
                <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  Call360 Colombia
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-white/80 leading-relaxed font-medium">
                Tecnología propia creada para vender. Plataforma desarrollada y respaldada directamente por su creador: sin intermediarios, sin plantillas extranjeras en dólares y sin tickets eternos.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none mx-auto">
                <WhatsAppButton
                  text="Hola Juan David, quiero una asesoría directa sobre cómo implementar Call360 en mi empresa"
                  label="Hablar con Juan David"
                  className="w-full sm:w-auto shadow-lg shadow-emerald-500/20"
                />
                <Link
                  href={DEMO_PATH}
                  className="inline-flex w-full sm:w-auto min-h-[48px] sm:min-h-[52px] items-center justify-center gap-2 rounded-full border border-white/20 bg-black/35 px-6 sm:px-8 py-3 text-sm sm:text-base font-bold text-white transition-all hover:border-cyan-400/40 hover:bg-black/50 active:scale-[0.98]"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-400 shrink-0">
                    <rect x="2" y="3" width="20" height="14" rx="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                  </svg>
                  <span>Probar Demo CRM</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* PROFILE & ARCHITECTURE BLOCK (TRANSPARENTE SIN BLUR) */}
        <section className="pb-20 sm:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 bg-black/35 p-6 sm:p-10 md:p-14 shadow-2xl relative">
                <div className="grid gap-10 lg:grid-cols-12 items-center">
                  {/* Foto y credenciales */}
                  <div className="lg:col-span-5 flex flex-col items-center text-center">
                    <div className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-cyan-400/40 shadow-2xl shadow-cyan-500/20 group">
                      <Image
                        src="/juan-meza-director.jpg"
                        alt="Juan David Meza - Director Comercial y Desarrollador de Call360"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </div>

                    <div className="mt-5">
                      <h2 className="text-2xl font-black text-white">Juan David Meza</h2>
                      <p className="text-sm font-bold text-cyan-400 mt-1">
                        Commercial Director &amp; Software Developer
                      </p>
                      <p className="text-xs text-white/50 mt-1">Bogotá, Colombia</p>

                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-black/40 px-4 py-2 text-xs font-bold text-cyan-300 transition-all hover:border-cyan-300 hover:bg-black/60"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
                          <rect x="2" y="4" width="20" height="16" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                        <span>{CONTACT_EMAIL}</span>
                      </a>
                    </div>
                  </div>

                  {/* Copy comercial directo */}
                  <div className="lg:col-span-7 space-y-6">
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-black/35 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400 shadow-sm">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      100% Código Propio y Respaldado
                    </span>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight">
                      &ldquo;No te vendemos una plantilla de reventa en dólares. Te entregamos un sistema que funciona hoy para cerrar clientes.&rdquo;
                    </h3>

                    <p className="text-sm sm:text-base leading-relaxed text-white/80">
                      Muchos proveedores de CRM en Colombia son simples intermediarios de software extranjero: te cobran en dólares, las integraciones con WhatsApp se caen continuamente y, si tienes una duda urgente, te dejan en una cola de tickets por correo electrónico durante 72 horas.
                    </p>

                    <p className="text-sm sm:text-base leading-relaxed text-white/80">
                      En <strong className="text-white">Call360</strong> tomamos una postura comercial distinta: la arquitectura de telefonía, el CRM multiagente y el motor de campañas fueron construidos por nosotros. Si necesitas una personalización, una integración rápida o soporte un viernes por la tarde, <strong className="text-cyan-300">hablas directamente con quien escribió el código</strong>.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 pt-6 border-t border-white/10">
                      <div className="rounded-2xl bg-black/40 p-4 border border-white/10 shadow-sm">
                        <div className="text-xl sm:text-2xl font-black text-cyan-400">+12 años</div>
                        <div className="text-xs text-white/70 mt-1">Infraestructura TI y Ventas</div>
                      </div>
                      <div className="rounded-2xl bg-black/40 p-4 border border-white/10 shadow-sm">
                        <div className="text-xl sm:text-2xl font-black text-emerald-400">+200</div>
                        <div className="text-xs text-white/70 mt-1">Empresas en Colombia</div>
                      </div>
                      <div className="col-span-2 sm:col-span-1 rounded-2xl bg-black/40 p-4 border border-white/10 shadow-sm">
                        <div className="text-xl sm:text-2xl font-black text-violet-400">0 Tickets</div>
                        <div className="text-xs text-white/70 mt-1">Atención directa por WhatsApp</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 3 PILARES COMERCIALES DE VENTA (TRANSPARENTE SIN BLUR) */}
        <section className="py-14 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-14">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                  Beneficios Tangibles
                </span>
                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl text-white">
                  Por qué tu equipo venderá más con Call360
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-base text-white/70">
                  Soluciones diseñadas para resolver las fricciones diarias de tus asesores de ventas.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 md:grid-cols-3">
              {pilaresComerciales.map((pilar, index) => (
                <ScrollReveal key={pilar.title} delay={index * 120}>
                  <div className="flex h-full flex-col justify-between rounded-2xl sm:rounded-3xl border border-white/15 bg-black/35 p-6 sm:p-8 transition-all duration-300 hover:border-cyan-400/40 hover:bg-black/45 hover:-translate-y-1 shadow-xl">
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-5">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15 border border-cyan-500/25 text-cyan-400">
                          {pilar.icon}
                        </div>
                        <span className={`rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${pilar.badgeColor}`}>
                          {pilar.badge}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{pilar.title}</h3>
                      <p className="text-xs font-semibold text-cyan-300/90 mb-3">{pilar.subtitle}</p>
                      <p className="text-sm leading-relaxed text-white/75">{pilar.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* TRAYECTORIA REAL (TRANSPARENTE SIN BLUR) */}
        <section className="py-14 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-14">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                  Solidez Comprobada
                </span>
                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl text-white">
                  Más de una década resolviendo la comunicación de los negocios
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-base text-white/70">
                  Call360 es la culminación de 12 años en el campo de batalla de telecomunicaciones y software.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 md:grid-cols-3">
              {trayectoriaReal.map((item, idx) => (
                <ScrollReveal key={item.period} delay={idx * 100}>
                  <div className="h-full rounded-2xl sm:rounded-3xl border border-white/15 bg-black/35 p-6 sm:p-8 flex flex-col justify-between shadow-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-black/45 hover:-translate-y-1">
                    <div>
                      <span className="inline-block rounded-full bg-cyan-500/20 border border-cyan-500/30 px-3.5 py-1 text-xs font-black text-cyan-300 mb-4">
                        {item.period}
                      </span>
                      <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-white/75 mb-6">{item.desc}</p>
                    </div>
                    <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{item.badge}</span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* HERO DE CIERRE COMERCIAL (SINCRONIZADO CON FRAME 80) */}
        <section className="pt-16 sm:pt-24 pb-28 sm:pb-36 lg:pb-44" id="cierre-comercial">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-3xl sm:rounded-4xl border border-emerald-500/40 bg-black/40 p-8 sm:p-12 md:p-16 text-center shadow-2xl shadow-emerald-500/10">
                <div className="relative z-10 max-w-3xl mx-auto">
                  {/* Badge superior con punto pulsante verde esmeralda */}
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-black/45 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-emerald-300 mb-6 shadow-md">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                    Tecnología y Diseño en Acción
                  </div>

                  {/* Titular principal grande y directo */}
                  <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white leading-[1.15] tracking-tight">
                    ¿Te gustó esta experiencia?{" "}
                    <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
                      Puedes tener una página web así o un CRM a la medida para tu negocio.
                    </span>
                  </h2>

                  {/* Subtítulo persuasivo */}
                  <p className="mt-5 sm:mt-6 text-base sm:text-lg text-white/85 leading-relaxed font-normal">
                    No usamos plantillas genéricas ni intermediarios. Diseñamos sitios web de alto impacto desde{" "}
                    <strong className="text-emerald-400 font-bold">$100.000/mes</strong> y sistemas CRM con WhatsApp que cargan rápido y convierten visitantes en clientes reales. Escríbeme y lo armamos.
                  </p>

                  {/* Botones de Acción Directa ergonómicos (min-h-[52px]) */}
                  <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full">
                    {/* CTA Primario: WhatsApp Directo */}
                    <WhatsAppButton
                      text="Hola Juan, acabo de ver tu página en Call360 y quiero cotizar una página web / CRM para mi negocio."
                      label="Quiero una página así — Escríbeme por WhatsApp"
                      className="w-full sm:w-auto min-h-[52px] !bg-emerald-500 hover:!bg-emerald-400 text-black font-extrabold !border !border-emerald-300/50 shadow-2xl shadow-emerald-500/40 text-sm sm:text-base px-6 sm:px-8 py-3.5"
                    />

                    {/* CTA Secundario: Explorar Planes Web */}
                    <Link
                      href="/paginas-web"
                      className="inline-flex w-full sm:w-auto min-h-[52px] items-center justify-center gap-2 rounded-full border border-white/20 bg-black/45 px-6 sm:px-8 py-3.5 text-sm sm:text-base font-bold text-white transition-all hover:border-cyan-400/50 hover:bg-black/60 active:scale-[0.98] shadow-lg shadow-black/40"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-400 shrink-0">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                        <path d="M2 12h20" />
                      </svg>
                      <span>Ver planes de Páginas Web ($100k/mes)</span>
                    </Link>
                  </div>

                  {/* Enlace rápido de correo */}
                  <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-2 text-xs sm:text-sm text-white/70">
                    <span>O escríbeme directo a</span>
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="font-bold text-cyan-300 hover:text-cyan-200 underline underline-offset-4 transition-colors"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </>
  );
}
