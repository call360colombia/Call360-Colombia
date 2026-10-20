import type { Metadata } from "next";
import Image from "next/image";
import ComparisonTable from "@/components/ComparisonTable";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Servicios | Call360",
  description:
    "Descubre todos nuestros servicios: CRM Llamadas, CRM WhatsApp, Páginas Web y Marketing Digital.",
};

const services = [
  {
    title: "CRM Minutos Ilimitados Colombia",
    description:
      "Sistema de llamadas predictivo con minutos ilimitados a Colombia. Marcación automática, grabación y monitoreo en tiempo real.",
    benefit: "Ideal para equipos de ventas que cierran por teléfono",
    href: "/crm-llamadas",
    gradient: "from-violet-500/20 to-purple-500/20",
    hoverBorder: "hover:border-violet-500/30",
    image: "/predictivo/hero.png?v=2",
    alt: "CRM Llamadas Predictivo",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    title: "CRM WhatsApp",
    description:
      "Gestiona a tus clientes con un sistema profesional de WhatsApp. Multiagente, bandeja compartida e historial de chats.",
    benefit: "Para negocios que atienden por WhatsApp",
    href: "/crm-whatsapp",
    gradient: "from-emerald-500/20 to-green-500/20",
    hoverBorder: "hover:border-emerald-500/30",
    image: "/whatsapp/hero.png?v=2",
    alt: "CRM WhatsApp Multiagente",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Diseño de Páginas Web",
    description:
      "Creamos tu página web profesional en 3 días o menos. Diseño moderno, optimizado para Google y conectado a WhatsApp.",
    benefit: "Tu negocio disponible 24/7 en internet",
    href: "/paginas-web",
    gradient: "from-cyan-500/20 to-blue-500/20",
    hoverBorder: "hover:border-cyan-500/30",
    image: "/creacion-web/hero.png?v=2",
    alt: "Diseño de Páginas Web Profesionales",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Marketing Digital",
    description:
      "Contenido profesional para redes sociales. Diseños, estrategia de contenido y anuncios que atraen clientes.",
    benefit: "Deja de preguntarte qué publicar",
    href: "/marketing",
    gradient: "from-amber-500/20 to-orange-500/20",
    hoverBorder: "hover:border-amber-500/30",
    image: "/Marketing/EstrategiaDeContenido.jpeg?v=2",
    alt: "Marketing Digital Profesional",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
];

export default function ServiciosPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="noise-overlay" />

        {/* Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-[10%] w-72 h-72 bg-cyan-500/8 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-[10%] w-96 h-96 bg-violet-500/8 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            {/* Text */}
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                Nuestros servicios
              </p>
              <h1 className="text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Todo lo que necesitas para{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-amber-400 bg-clip-text text-transparent">
                  hacer crecer tu negocio
                </span>
              </h1>
              <p className="mt-6 max-w-lg text-lg text-white/50 leading-relaxed">
                Te conseguimos clientes y te damos el sistema para atenderlos. Elige
                el servicio que necesitas.
              </p>

              {/* Benefits */}
              <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-white/60">
                {["CRM Ilimitado", "WhatsApp Multiagente", "Web en 72h", "Marketing Pro"].map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2">
                    <span className="text-cyan-400">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {item}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap gap-4">
                <WhatsAppButton
                  text="Hola Call360, quiero información sobre sus servicios"
                  className="text-base px-8 py-4"
                />
                <a
                  href="tel:+573203693949"
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.15] px-8 py-4 text-base font-bold text-white transition-all hover:border-cyan-400/40 hover:bg-cyan-400/5"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  320 369 3949
                </a>
              </div>
            </div>

            {/* Hero Image Collage */}
            <div className="relative hidden lg:block">
              <div className="relative aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-violet-500/10 to-amber-500/10 rounded-3xl blur-3xl" />
                <div className="relative grid grid-cols-2 gap-3 p-4">
                  <div className="space-y-3">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#12121a] group">
                      <Image src="/predictivo/hero.png?v=2" alt="CRM Llamadas" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#12121a] group">
                      <Image src="/whatsapp/hero.png?v=2" alt="CRM WhatsApp" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                  </div>
                  <div className="space-y-3 pt-8">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#12121a] group">
                      <Image src="/creacion-web/hero.png?v=2" alt="Páginas Web" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#12121a] group">
                      <Image src="/Marketing/EstrategiaDeContenido.jpeg?v=2" alt="Marketing Digital" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                  </div>
                </div>

                {/* Floating stat */}
                <div className="absolute -bottom-4 -left-4 rounded-2xl border border-white/[0.08] bg-[#12121a]/90 backdrop-blur-xl px-5 py-3 shadow-xl animate-float">
                  <div className="text-xl font-black bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">+200</div>
                  <div className="text-xs text-white/50">Empresas activas</div>
                </div>
                <div className="absolute -top-4 -right-4 rounded-2xl border border-white/[0.08] bg-[#12121a]/90 backdrop-blur-xl px-5 py-3 shadow-xl animate-float delay-700">
                  <div className="text-xl font-black bg-gradient-to-r from-violet-400 to-amber-400 bg-clip-text text-transparent">4</div>
                  <div className="text-xs text-white/50">Servicios</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID — con imágenes */}
      <section className="pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, i) => (
              <ScrollReveal key={service.href} delay={i * 100}>
                <a href={service.href} className="group block">
                  <div className={`relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#12121a] transition-all duration-500 ${service.hoverBorder} hover:bg-[#1a1a24]`}>
                    {/* Image */}
                    <div className="relative aspect-[16/9] overflow-hidden bg-white/[0.04]">
                      <Image
                        src={service.image}
                        alt={service.alt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#12121a] via-transparent to-transparent" />
                    </div>
                    {/* Content */}
                    <div className="relative p-8">
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                      <div className="relative z-10">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.08] text-white/80">
                          {service.icon}
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-white">{service.title}</h3>
                        <p className="mb-3 text-sm leading-relaxed text-white/50">{service.description}</p>
                        <p className="mb-4 text-sm font-semibold text-cyan-400">{service.benefit}</p>
                        <span className="inline-flex items-center gap-2 text-sm font-bold text-white transition-all duration-300 group-hover:text-cyan-400 group-hover:gap-3">
                          Ver más
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform duration-300 group-hover:translate-x-1">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="py-32 bg-[#0f0f17]/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-20 text-center">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                Proceso simple
              </p>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Cualquier servicio,{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-amber-400 bg-clip-text text-transparent">
                  mismo proceso
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Cuéntanos tu negocio",
                description: "Nos dices qué vendes, a quién y qué necesitas. Nosotros te recomendamos la mejor solución.",
                gradient: "from-cyan-500/20 to-blue-500/20",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                ),
              },
              {
                step: "2",
                title: "Lo configuramos por ti",
                description: "Nuestro equipo implementa todo: número, sistema, página web o contenido. Sin que te preocupes.",
                gradient: "from-violet-500/20 to-purple-500/20",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                ),
              },
              {
                step: "3",
                title: "Empiezas a vender",
                description: "Con todo funcionando, solo dedícate a atender clientes y cerrar ventas. Nosotros te acompañamos.",
                gradient: "from-amber-500/20 to-orange-500/20",
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 150}>
                <div className="group relative rounded-3xl border border-white/[0.08] bg-[#12121a] p-10 text-center transition-all duration-500 hover:border-white/[0.15]">
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                  <div className="relative z-10">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/[0.08] text-cyan-400 transition-all duration-500 group-hover:scale-110 group-hover:bg-cyan-500/10">
                      {item.icon}
                    </div>
                    <div className="mx-auto mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20 text-xs font-black text-cyan-400">
                      {item.step}
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-white">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-white/50">{item.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* VISTA DE SERVICIOS — imágenes de cada servicio */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                En acción
              </p>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Así se ve{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-amber-400 bg-clip-text text-transparent">
                  cada sistema
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-white/50">
                Herramientas reales que usan tus clientes todos los días
              </p>
            </div>
          </ScrollReveal>

          {/* Row 1: CRM Llamadas + WhatsApp */}
          <div className="grid gap-6 md:grid-cols-2 mb-6">
            <ScrollReveal>
              <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#12121a] transition-all duration-500 hover:border-violet-500/20">
                <div className="relative aspect-video overflow-hidden bg-white/[0.04]">
                  <Image src="/predictivo/dashboard.jpeg?v=2" alt="Dashboard CRM Llamadas" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white">CRM Llamadas Predictivo</h3>
                  <p className="mt-1 text-sm text-white/50">Dashboard con agentes en vivo, métricas y control total</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#12121a] transition-all duration-500 hover:border-emerald-500/20">
                <div className="relative aspect-video overflow-hidden bg-white/[0.04]">
                  <Image src="/whatsapp/PanelWhatsapp.png?v=2" alt="Panel CRM WhatsApp" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white">CRM WhatsApp Multiagente</h3>
                  <p className="mt-1 text-sm text-white/50">Varios agentes atendiendo desde un mismo número</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Row 2: Páginas Web + Marketing */}
          <div className="grid gap-6 md:grid-cols-2">
            <ScrollReveal>
              <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#12121a] transition-all duration-500 hover:border-cyan-500/20">
                <div className="relative aspect-video overflow-hidden bg-white/[0.04]">
                  <Image src="/creacion-web/Diseño1.png?v=2" alt="Diseño de Páginas Web" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white">Diseño de Páginas Web</h3>
                  <p className="mt-1 text-sm text-white/50">Diseños modernos optimizados para conversión</p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#12121a] transition-all duration-500 hover:border-amber-500/20">
                <div className="relative aspect-video overflow-hidden bg-white/[0.04]">
                  <Image src="/Marketing/ContenidoConstante.png?v=2" alt="Marketing Digital" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white">Marketing Digital</h3>
                  <p className="mt-1 text-sm text-white/50">Contenido profesional que atrae clientes</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* POR QUÉ ELEGIRNOS */}
      <section className="py-32 bg-[#0f0f17]/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                ¿Por qué Call360?
              </p>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                No somos una herramienta,{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-amber-400 bg-clip-text text-transparent">
                  somos tu sistema
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Todo en un solo lugar",
                description: "Páginas web, marketing y CRM integrados. Sin proveedores diferentes.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                ),
              },
              {
                title: "Ahorro de costos",
                description: "Un sistema completo cuesta menos que contratar todo por separado.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="12" y1="1" x2="12" y2="23" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                ),
              },
              {
                title: "Implementación rápida",
                description: "Tu página web en 72 horas y tus CRMs listos en menos de una semana.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                ),
              },
              {
                title: "+200 empresas activas",
                description: "Empresas de todo Colombia confían en nuestra plataforma.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
              },
              {
                title: "Soporte local",
                description: "Equipo en Bogotá listo para ayudarte cuando lo necesites.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                ),
              },
              {
                title: "Experiencia real",
                description: "+12 años ayudando empresas colombianas a organizar sus ventas.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                ),
              },
            ].map((benefit, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="group rounded-2xl border border-white/[0.08] bg-[#12121a] p-8 transition-all duration-500 hover:border-cyan-500/30 hover:bg-[#1a1a24]">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-white/[0.06] text-cyan-400 transition-all duration-500 group-hover:bg-cyan-500/10 group-hover:scale-110">
                    {benefit.icon}
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-white">{benefit.title}</h3>
                  <p className="text-sm leading-relaxed text-white/50">{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARACIÓN */}
      <section className="py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <ComparisonTable
              title="Contratar por separado vs Call360"
              subtitle="Todo integrado, sin complicaciones"
              items={[
                {
                  informal: "Pagar por separado: web, CRM, marketing",
                  call360: "Todo integrado en un solo plan",
                },
                {
                  informal: "Coordinar entre proveedores diferentes",
                  call360: "Un solo equipo que lo maneja todo",
                },
                {
                  informal: "Soporte fragmentado, nadie asume responsabilidad",
                  call360: "Soporte unificado y responsable",
                },
                {
                  informal: "Costos impredecibles cada mes",
                  call360: "Planes fijos sin sorpresas",
                },
                {
                  informal: "Implementación lenta entre múltiples frentes",
                  call360: "Todo listo en días, no semanas",
                },
                {
                  informal: "Sin visibilidad completa del negocio",
                  call360: "Dashboard integrado con toda la operación",
                },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[#0f0f17]/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#12121a] p-12 text-center sm:p-16">
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/[0.08] to-transparent" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl">
                  ¿Listo para empezar a{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-amber-400 bg-clip-text text-transparent">
                    vender más?
                  </span>
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base text-white/50">
                  Cuéntanos qué necesitas y te recomendamos la mejor solución para tu negocio.
                </p>
                <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <WhatsAppButton
                    text="Hola Call360, quiero información sobre sus servicios"
                    className="text-base px-8 py-4"
                  />
                  <a
                    href="tel:+573203693949"
                    className="inline-flex items-center gap-2 rounded-full border border-white/[0.15] px-8 py-4 text-base font-bold text-white transition-all hover:border-cyan-400/40 hover:bg-cyan-400/5"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    320 369 3949
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
