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

      {/* FONDO DINÁMICO INTERACTIVO CON EFECTO SCROLL (80 FRAMES JUAN MEZA) */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <MezaFrameSequence
          targetId="global"
          opacity={0.38}
          className="h-full w-full"
        />
        <div className="absolute inset-0 bg-[#0a0a0f]/60 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-20 pb-20 lg:pt-28 lg:pb-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="mx-auto max-w-4xl text-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400 mb-6 backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                  </span>
                  Dirección Comercial &amp; Arquitectura de Software
                </div>

                <h1 className="text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl text-white">
                  Plataforma desarrollada y respaldada directamente por su creador,{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
                    Juan David Meza
                  </span>
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-lg sm:text-xl leading-relaxed text-white/80">
                  <strong className="text-white">Sin intermediarios, sin tickets eternos y sin demoras.</strong> Diseñamos Call360 para resolver el dolor número uno de las empresas en Colombia: perder ventas por desorden en WhatsApp y falta de seguimiento comercial.
                </p>

                {/* Badge explicativo del fondo de frames */}
                <div className="mt-4 inline-flex items-center gap-2 text-xs text-white/50 bg-black/40 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  Fondo interactivo sincronizado: haz scroll para animar la secuencia de ingeniería
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <WhatsAppButton
                    text="Hola Juan David, estuve revisando Call360 y quiero conversar contigo sobre cómo implementarlo en mi empresa"
                    label="Hablar directamente con Juan David"
                    className="text-base px-8 py-4 shadow-xl shadow-emerald-500/20"
                  />
                  <Link
                    href={DEMO_PATH}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-8 py-4 text-base font-bold text-white backdrop-blur-md transition-all hover:border-cyan-400/50 hover:bg-cyan-500/10"
                  >
                    Ver Demo del CRM
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* PROFILE & ARCHITECTURE BLOCK */}
        <section className="pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0c0c14]/85 backdrop-blur-xl p-8 sm:p-12 lg:p-16 shadow-2xl relative">
                <div className="grid gap-12 lg:grid-cols-12 items-center">
                  {/* Foto y credenciales */}
                  <div className="lg:col-span-5 flex flex-col items-center text-center">
                    <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden border-2 border-cyan-400/40 shadow-2xl shadow-cyan-500/20 group">
                      <Image
                        src="/juan-meza-director.jpg"
                        alt="Juan David Meza - Director Comercial y Desarrollador de Call360"
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c14] via-transparent to-transparent opacity-50" />
                    </div>

                    <div className="mt-6">
                      <h2 className="text-2xl font-black text-white">Juan David Meza</h2>
                      <p className="text-sm font-bold text-cyan-400 mt-1">
                        Commercial Director &amp; Software Developer
                      </p>
                      <p className="text-xs text-white/50 mt-1">Bogotá, Colombia</p>

                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        className="mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-xs font-bold text-cyan-300 transition-all hover:border-cyan-300 hover:bg-cyan-500/20"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="2" y="4" width="20" height="16" rx="2" />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                        {CONTACT_EMAIL}
                      </a>
                    </div>
                  </div>

                  {/* Copy comercial directo */}
                  <div className="lg:col-span-7 space-y-6">
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                      100% Código Propio y Respaldado
                    </span>

                    <h3 className="text-3xl font-black tracking-tight text-white sm:text-4xl leading-tight">
                      "No te vendemos una plantilla de reventa en dólares. Te entregamos un sistema que funciona hoy para cerrar clientes."
                    </h3>

                    <p className="text-base leading-relaxed text-white/70">
                      Muchos proveedores de CRM en Colombia son simples intermediarios de software extranjero: te cobran en dólares, las integraciones con WhatsApp se caen continuamente y, si tienes una duda urgente, te dejan en una cola de tickets por correo electrónico durante 72 horas.
                    </p>

                    <p className="text-base leading-relaxed text-white/70">
                      En <strong className="text-white">Call360</strong> tomamos una postura comercial distinta: la arquitectura de telefonía, el CRM multiagente y el motor de campañas fueron construidos por nosotros. Si necesitas una personalización, una integración rápida o soporte un viernes por la tarde, <strong className="text-cyan-300">hablas directamente con quien escribió el código</strong>.
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10">
                      <div className="rounded-2xl bg-white/[0.04] p-4 border border-white/[0.06]">
                        <div className="text-2xl font-black text-cyan-400">+12 años</div>
                        <div className="text-xs text-white/60 mt-1">Infraestructura TI y Ventas</div>
                      </div>
                      <div className="rounded-2xl bg-white/[0.04] p-4 border border-white/[0.06]">
                        <div className="text-2xl font-black text-emerald-400">+200</div>
                        <div className="text-xs text-white/60 mt-1">Empresas en Colombia</div>
                      </div>
                      <div className="col-span-2 sm:col-span-1 rounded-2xl bg-white/[0.04] p-4 border border-white/[0.06]">
                        <div className="text-2xl font-black text-violet-400">0 Tickets</div>
                        <div className="text-xs text-white/60 mt-1">Atención directa por WhatsApp</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* 3 PILARES COMERCIALES DE VENTA */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                  Beneficios Tangibles
                </span>
                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl text-white">
                  Por qué tu equipo venderá más con Call360
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-base text-white/60">
                  Soluciones diseñadas para resolver las fricciones diarias de tus asesores de ventas.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-8 md:grid-cols-3">
              {pilaresComerciales.map((pilar, index) => (
                <ScrollReveal key={pilar.title} delay={index * 120}>
                  <div className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-[#0c0c14]/85 backdrop-blur-xl p-8 sm:p-10 transition-all duration-300 hover:border-cyan-400/40 hover:-translate-y-1 shadow-xl">
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                          {pilar.icon}
                        </div>
                        <span className={`rounded-full border px-3 py-1 text-[11px] font-bold uppercase tracking-wider ${pilar.badgeColor}`}>
                          {pilar.badge}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{pilar.title}</h3>
                      <p className="text-xs font-semibold text-cyan-300/90 mb-4">{pilar.subtitle}</p>
                      <p className="text-sm leading-relaxed text-white/70">{pilar.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* TRAYECTORIA REAL */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center mb-16">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                  Solidez Comprobada
                </span>
                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl text-white">
                  Más de una década resolviendo la comunicación de los negocios
                </h2>
                <p className="mx-auto mt-3 max-w-2xl text-base text-white/60">
                  Call360 es la culminación de 12 años en el campo de batalla de telecomunicaciones y software.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid gap-6 md:grid-cols-3">
              {trayectoriaReal.map((item, idx) => (
                <ScrollReveal key={item.period} delay={idx * 100}>
                  <div className="h-full rounded-3xl border border-white/10 bg-[#0c0c14]/85 backdrop-blur-xl p-8 flex flex-col justify-between shadow-xl">
                    <div>
                      <span className="inline-block rounded-full bg-cyan-500/15 border border-cyan-500/30 px-3.5 py-1 text-xs font-black text-cyan-300 mb-4">
                        {item.period}
                      </span>
                      <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-white/70 mb-6">{item.desc}</p>
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

        {/* FINAL CONVERSION CTA */}
        <section className="pb-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-3xl border border-cyan-400/40 bg-gradient-to-br from-cyan-500/15 via-[#0c0c14]/95 to-violet-500/15 p-10 sm:p-14 text-center shadow-2xl backdrop-blur-xl">
                <div className="relative z-10 max-w-2xl mx-auto">
                  <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-300 mb-6">
                    Atención Inmediata en Bogotá y Todo Colombia
                  </span>
                  <h2 className="text-3xl font-black text-white sm:text-4xl">
                    ¿Quieres ver cómo opera Call360 con tus números de WhatsApp y tu equipo?
                  </h2>
                  <p className="mt-4 text-base text-white/75 leading-relaxed">
                    Escríbele directamente a Juan David Meza. Revisamos la situación actual de tu equipo comercial y configuramos una demostración con datos reales en menos de 24 horas.
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <WhatsAppButton
                      text="Hola Juan David, quiero agendar una demostración de Call360 para mi equipo de ventas"
                      label="Escribir a Juan David por WhatsApp"
                      className="text-base px-8 py-4 shadow-xl shadow-emerald-500/25"
                    />
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-8 py-4 text-base font-bold text-white transition-all hover:border-cyan-400/50 hover:bg-cyan-500/10"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
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
