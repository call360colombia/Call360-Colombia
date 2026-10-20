import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import HowItWorks from "@/components/HowItWorks";
import ServiceCard from "@/components/ServiceCard";
import FAQSection from "@/components/FAQSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import ModernSaaSMockup from "@/components/ModernSaaSMockup";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 hero-bg-home" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="noise-overlay" />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-[15%] w-80 h-80 bg-violet-500/8 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-[15%] w-96 h-96 bg-cyan-500/8 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 sm:py-40 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="text-center lg:text-left">
              <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.04] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-violet-400 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
                </span>
                +200 empresas operando en Colombia
              </div>

              <h1 className="animate-fade-in-up animation-delay-100 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-[4.2rem]">
                Sistema comercial para{" "}
                <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                  Call Centers y equipos de ventas
                </span>
              </h1>

              <p className="animate-fade-in-up animation-delay-200 mx-auto mt-7 max-w-xl text-lg text-white/70 sm:mx-0 sm:text-xl leading-relaxed">
                <strong className="text-white">No pierdas prospectos por demoras en WhatsApp.</strong> Centraliza tu equipo comercial y envía campañas en minutos sin enredos técnicos. CRM de llamadas, WhatsApp multiagente y página web en un solo pago.
              </p>

              <div className="animate-fade-in-up animation-delay-300 mt-7 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-white/60 lg:justify-start">
                {[
                  "Minutos ilimitados a Colombia",
                  "CRM + WhatsApp multiagente",
                  "Página web en 72 horas",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2">
                    <span className="text-emerald-400">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {item}
                  </div>
                ))}
              </div>

              <div className="animate-fade-in-up animation-delay-400 mt-9 flex flex-wrap items-center gap-4 justify-center lg:justify-start">
                <WhatsAppButton
                  text="Hola Call360, quiero cotizar el sistema integrado para mi negocio"
                  label="Cotizar sistema integrado"
                  className="text-base px-8 py-4 shadow-lg shadow-emerald-500/20"
                />
                <a
                  href="https://wa.me/573203693949?text=Hola%20Call360%2C%20quiero%20agendar%20una%20demo"
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

              <p className="animate-fade-in-up animation-delay-400 mt-4 text-xs text-white/40 lg:text-left">
                ⚡ Desde $350.000/mes • Sin contratos de permanencia • Soporte en Bogotá
              </p>

              <div className="animate-fade-in-up animation-delay-400 mt-12 grid grid-cols-2 gap-x-4 gap-y-7 border-t border-white/[0.06] pt-10 sm:grid-cols-3 md:grid-cols-5 lg:gap-x-5">
                {[
                  { label: "empresas activas", value: "+200" },
                  { label: "usuarios activos", value: "+1.200" },
                  { label: "entrega web", value: "72h" },
                  { label: "años experiencia", value: "12+" },
                  { label: "minutos/mes", value: "+3M" },
                ].map((stat) => (
                  <div key={stat.label} className="min-w-0 overflow-visible text-center">
                    <span className="inline-block w-max whitespace-nowrap bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400 bg-clip-text pb-1.5 text-2xl font-black leading-tight text-transparent sm:text-[1.55rem] xl:text-[1.65rem]">
                      {stat.value}
                    </span>
                    <span className="block text-[10px] sm:text-xs text-white/40 font-semibold uppercase tracking-wider leading-relaxed">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative max-w-xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-cyan-500/15 to-emerald-500/15 rounded-3xl blur-3xl pointer-events-none" />
                
                {/* Modern Dark Mode SaaS Window Mockup */}
                <ModernSaaSMockup variant="hero" className="w-full" />

                {/* Floating Metric Badges with Ambient Glow */}
                <div className="absolute -bottom-6 -left-6 rounded-2xl border border-white/10 bg-[#0c0c14]/90 backdrop-blur-xl px-5 py-3 shadow-2xl shadow-cyan-500/10 animate-float pointer-events-none">
                  <div className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    72h
                  </div>
                  <div className="text-[11px] text-white/60 font-medium">Entrega promedio web</div>
                </div>

                <div className="absolute -top-6 -right-6 rounded-2xl border border-white/10 bg-[#0c0c14]/90 backdrop-blur-xl px-5 py-3 shadow-2xl shadow-emerald-500/10 animate-float delay-700 pointer-events-none">
                  <div className="text-2xl font-black bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    +200
                  </div>
                  <div className="text-[11px] text-white/60 font-medium">Empresas en Colombia</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-28 bg-[#0f0f17]/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <HowItWorks
              title="Tres pasos para tener tu operación funcionando"
              subtitle="Así funciona el ecosistema Call360"
              steps={[
                {
                  number: "1",
                  title: "Captamos leads",
                  description: "Tu página web profesional lista en 72h + marketing digital. Los clientes te encuentran en Google y redes sociales.",
                },
                {
                  number: "2",
                  title: "Los gestionas",
                  description: "CRM WhatsApp multiagente para centralizar conversaciones. Varios asesores, un solo número, historial compartido.",
                },
                {
                  number: "3",
                  title: "Los cierras",
                  description: "CRM de llamadas con marcación predictiva y minutos ilimitados. Tu equipo contacta más leads y cierra más ventas.",
                },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ECOSYSTEM MODULES */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                ⚡ Módulos del ecosistema
              </span>
              <h2 className="mt-4 text-4xl md:text-5xl font-black leading-tight tracking-tight text-white">
                Cada pieza funciona sola.{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
                  Juntas, son un sistema completo.
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-white/50 leading-relaxed">
                Elige lo que necesitas hoy y activa más módulos cuando crezcas. Sin permanencia, sin ataduras.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Páginas Web",
                headline: "Tu vitrina digital lista en 72 horas",
                description: "Diseño premium responsive, optimizado para SEO y conectado a WhatsApp. Incluye sección 'Trabaja con nosotros' para reclutamiento.",
                benefit: "Mockup gratis antes de pagar • Solo pagas si te gusta",
                image: "/inicio/web.png?v=2",
                href: "/paginas-web",
                ctaLabel: "Ver páginas web",
                gradient: "from-cyan-500/20 to-blue-500/20",
                hoverGlow: "hover:border-cyan-500/30 hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.15)]",
                ctaColor: "text-cyan-400 group-hover:text-cyan-300",
              },
              {
                title: "CRM WhatsApp",
                headline: "Varios asesores, un solo número de WhatsApp",
                description: "Sistema profesional multiagente. Responde desde un solo lugar, conserva el historial de tus clientes y haz seguimiento sin perder oportunidades.",
                benefit: "Prueba 7 días gratis • Baja probabilidad de bloqueo",
                image: "/inicio/whatsapp.png?v=2",
                href: "/crm-whatsapp",
                ctaLabel: "Ver CRM WhatsApp",
                gradient: "from-emerald-500/20 to-green-500/20",
                hoverGlow: "hover:border-emerald-500/30 hover:shadow-[0_20px_40px_-15px_rgba(16,185,129,0.15)]",
                ctaColor: "text-emerald-400 group-hover:text-emerald-300",
              },
              {
                title: "CRM Llamadas",
                headline: "Tu equipo contacta 3x más leads por día",
                description: "Marcación predictiva inteligente con minutos ilimitados a Colombia. Grabación, supervisión y métricas en tiempo real.",
                benefit: "Demo de 6 horas con acceso completo • Sin compromiso",
                image: "/inicio/vozip.png?v=2",
                href: "/crm-llamadas",
                ctaLabel: "Ver CRM de llamadas",
                gradient: "from-violet-500/20 to-purple-500/20",
                hoverGlow: "hover:border-violet-500/30 hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.15)]",
                ctaColor: "text-violet-400 group-hover:text-violet-300",
              },
            ].map((service) => (
              <ScrollReveal key={service.title} delay={150}>
                <ServiceCard {...service} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={200}>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {[
                {
                  href: "/marketing",
                  title: "Marketing",
                  desc: "Campañas en Google y redes sociales para generar leads calificados. Si no hay retorno, devolvemos tu dinero.",
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-amber-400">
                      <polygon points="12 2 2 7 12 12 22 7 12 2" />
                      <polyline points="2 17 12 22 22 17" />
                      <polyline points="2 12 12 17 22 12" />
                    </svg>
                  ),
                  hoverBorder: "hover:border-amber-500/30",
                  linkColor: "text-amber-400",
                },
                {
                  href: "/servicios",
                  title: "Ver todas las soluciones",
                  desc: "Minutos y llamadas, WhatsApp CRM, marketing y páginas web en un solo ecosistema.",
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-cyan-400">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  ),
                  hoverBorder: "hover:border-cyan-500/30",
                  linkColor: "text-cyan-400",
                },
              ].map((mod) => (
                <Link
                  key={mod.href}
                  href={mod.href}
                  className={`group flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-[#12121a] p-6 transition-all duration-300 ${mod.hoverBorder} hover:-translate-y-1`}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] group-hover:scale-110 transition-transform duration-300">
                    {mod.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-white mb-1">{mod.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed">{mod.desc}</p>
                    <span className={`mt-3 inline-flex items-center gap-1.5 text-xs font-bold ${mod.linkColor} group-hover:gap-2.5 transition-all`}>
                      Ver detalle
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-1">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="mt-12 text-center">
              <p className="text-sm text-white/40">
                ¿No estás seguro de cuál módulo necesitas primero?{" "}
                <a
                  href="https://wa.me/573203693949?text=Hola%20Call360%2C%20quiero%20asesor%C3%ADa%20gratuita%20sobre%20sus%20servicios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 inline-flex items-center gap-1 font-bold text-cyan-400 hover:text-cyan-300 underline transition-colors"
                >
                  Hablar con un consultor gratis
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="inline-block align-middle ml-1">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* WHY CHOOSE US + GUARANTEES */}
      <section className="py-28 bg-[#0f0f17]/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                ¿Por qué Call360?
              </span>
              <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                Menos proveedores, menos costo,{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
                  más control sobre tu operación
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 lg:grid-cols-2 items-start">
            <div className="space-y-5">
              {[
                {
                  title: "Un solo proveedor para todo",
                  description: "Páginas web, marketing, CRM de WhatsApp y CRM de llamadas integrados. Sin coordinar entre proveedores diferentes.",
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  ),
                  color: "cyan",
                },
                {
                  title: "Menor costo total",
                  description: "Un sistema completo cuesta menos que contratar todo por separado. Ahorro real desde el primer mes.",
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <line x1="12" y1="1" x2="12" y2="23" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  ),
                  color: "emerald",
                },
                {
                  title: "Implementación rápida",
                  description: "Tu página web en 72 horas y tus CRMs listos en menos de una semana. Sin meses de espera.",
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                    </svg>
                  ),
                  color: "amber",
                },
                {
                  title: "Respaldado por su creador, Juan David Meza",
                  description: "Plataforma desarrollada y dirigida en Colombia. Trato directo con el creador: sin intermediarios, sin bots frustrantes ni tickets eternos.",
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  ),
                  color: "violet",
                },
              ].map((benefit, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                  <div className="group flex items-start gap-5 rounded-2xl border border-white/[0.08] bg-[#12121a] p-6">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/[0.06] text-${benefit.color}-400 group-hover:scale-110 transition-transform duration-300`}>
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="mb-1.5 text-base font-bold text-white">{benefit.title}</h3>
                      <p className="text-sm leading-relaxed text-white/50">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={200}>
              <div className="rounded-3xl border border-white/[0.08] bg-[#12121a] p-8 lg:p-10">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 via-violet-500/20 to-emerald-500/20">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white">Resultados antes de cobrarte</h3>
                    <p className="text-xs text-white/50">Eliminamos todo el riesgo para tu negocio</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      service: "Páginas Web",
                      guarantee: "Mockup gratis antes de pagar. Solo pagas si te gusta el diseño.",
                      color: "cyan",
                    },
                    {
                      service: "CRM WhatsApp",
                      guarantee: "7 días de prueba con acceso completo. Sin riesgo.",
                      color: "emerald",
                    },
                    {
                      service: "CRM Llamadas",
                      guarantee: "Demo real de 6 horas con minutos ilimitados. Si no te convence, no pagas.",
                      color: "violet",
                    },
                    {
                      service: "Marketing Digital",
                      guarantee: "Si no recuperas la inversión, devolvemos tu dinero.",
                      color: "amber",
                    },
                  ].map((item) => (
                    <div
                      key={item.service}
                      className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4"
                    >
                      <div className={`mb-1.5 text-xs font-bold uppercase tracking-wider text-${item.color}-400`}>
                        {item.service}
                      </div>
                      <p className="text-sm text-white/60 leading-relaxed">{item.guarantee}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-white/[0.06] text-center">
                  <p className="text-sm font-bold bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
                    &ldquo;No vendemos promesas. Te damos resultados antes de cobrar.&rdquo;
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* INDUSTRY TEASER */}
      <section className="py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br from-[#12121a] to-[#0f0f17] p-10 sm:p-14">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/[0.04] via-violet-500/[0.04] to-amber-500/[0.04]" />
              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                  También para otros sectores
                </span>
                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                  ¿No eres Call Center?{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-amber-400 bg-clip-text text-transparent">
                    Adaptamos el sistema a tu industria
                  </span>
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-base text-white/50 leading-relaxed">
                  Clínicas, barberías, restaurantes, inmobiliarias, colegios, aseguradoras y más. 
                  El mismo ecosistema, configurado para tu tipo de negocio.
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <Link
                    href="/industrias"
                    className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/15 px-6 py-3 text-sm font-bold text-cyan-300 transition-all hover:bg-cyan-500/25"
                  >
                    Ver industrias
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <WhatsAppButton
                    text="Hola Call360, quiero saber si tienen solución para mi tipo de negocio"
                    label="Consultar por mi industria"
                    className="text-sm px-6 py-3"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection
        title="Preguntas frecuentes"
        showCta
        ctaLabel="Resolver otras dudas"
        ctaText="Hola Call360, tengo una duda sobre el servicio que no está en las preguntas frecuentes."
        items={[
          {
            question: "¿Cuánto tiempo toma tener todo funcionando?",
            answer: "Tu página web la entregamos en 72 horas. Los CRMs de WhatsApp y llamadas los activamos en menos de una semana. En 7 días tu operación está corriendo.",
          },
          {
            question: "¿Puedo contratar solo un módulo o debo comprar todo el paquete?",
            answer: "Puedes empezar con lo que necesites. Muchos clientes empiezan solo con CRM WhatsApp o solo con la página web, y agregan módulos después. Sin permanencia. Sin penalizaciones.",
          },
          {
            question: "¿Hay límite de agentes o usuarios?",
            answer: "No. Escalabilidad ilimitada. Puedes tener desde 1 agente hasta cientos en el mismo sistema. El precio se ajusta según tu volumen de uso.",
          },
          {
            question: "¿Dan factura con NIT?",
            answer: "Sí, somos una empresa colombiana con NIT y emitimos factura electrónica con todos los requisitos legales. Contamos con más de 12 años de operación en el país.",
          },
          {
            question: "¿Qué pasa si no me gusta el servicio?",
            answer: "Probamos antes de que pagues. El CRM WhatsApp tiene 7 días de prueba gratis. Las llamadas tienen demo de 6 horas. Si no funciona para ti, no pagas. Así de simple.",
          },
        ]}
      />

      {/* CTA FINAL */}
      <section className="py-28 bg-[#0f0f17]/50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#12121a] p-12 text-center sm:p-16">
              <div className="absolute inset-0 bg-gradient-to-b from-violet-500/[0.08] via-cyan-500/[0.04] to-transparent" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl">
                  Tu operación comercial puede estar{" "}
                  <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    funcionando esta semana
                  </span>
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base text-white/50">
                  Página web + CRM de WhatsApp + CRM de llamadas + marketing digital. Todo desde un solo lugar, con un solo proveedor.
                </p>
                <div className="mx-auto mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <WhatsAppButton
                    text="Hola Call360, quiero cotizar el sistema integrado para mi negocio"
                    label="Cotizar sistema integrado"
                    className="text-base px-8 py-4 shadow-lg shadow-emerald-500/20"
                  />
                  <a
                    href="https://wa.me/573203693949?text=Hola%20Call360%2C%20quiero%20agendar%20una%20demo"
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
                <p className="mt-3 text-xs text-white/40">
                  Sin permanencia · Implementación en días · Soporte en Bogotá
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
