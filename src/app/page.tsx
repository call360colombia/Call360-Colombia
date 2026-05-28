import type { Metadata } from "next";
import Image from "next/image";
import WhatsAppButton from "@/components/WhatsAppButton";
import ComparisonTable from "@/components/ComparisonTable";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import TrustBlock from "@/components/TrustBlock";
import FAQSection from "@/components/FAQSection";
import BeforeAfter from "@/components/BeforeAfter";
import ScrollReveal from "@/components/ScrollReveal";
import LiveActivityWidget from "@/components/LiveActivityWidget";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 hero-bg-home" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="noise-overlay" />

        {/* Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="orb-1 absolute top-1/4 left-[15%] w-80 h-80 bg-cyan-500/8 rounded-full blur-[100px]" />
          <div className="orb-2 absolute bottom-1/4 right-[15%] w-96 h-96 bg-violet-500/8 rounded-full blur-[120px]" />
          <div className="orb-1 absolute top-1/2 left-1/2 -translate-x-1/2 w-64 h-64 bg-amber-500/5 rounded-full blur-[80px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.04] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-cyan-400 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                </span>
                Sistema completo de ventas para Colombia
              </div>

              {/* Headline */}
              <h1 className="animate-fade-in-up animation-delay-100 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                ¿Tu negocio no está{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-amber-400 bg-clip-text text-transparent">
                  consiguiendo clientes?
                </span>
              </h1>

              {/* Subheadline */}
              <p className="animate-fade-in-up animation-delay-200 mx-auto mt-8 max-w-lg text-lg text-white/50 sm:mx-0 sm:text-xl leading-relaxed">
                Te conseguimos clientes y te damos el sistema para gestionarlos.{" "}
                <span className="text-white/70 font-medium">Todo integrado.</span>
              </p>

              {/* Benefits Pills */}
              <div className="animate-fade-in-up animation-delay-300 mt-8 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-white/60 lg:justify-start">
                {[
                  "Página web en 72h",
                  "Clientes desde Google",
                  "CRM + minutos ilimitados",
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

              {/* CTA */}
              <div className="animate-fade-in-up animation-delay-400 mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
                <WhatsAppButton
                  text="Hola Call360, quiero cotizar mi página web y sistema de ventas"
                  className="text-base px-8 py-4"
                />
                <a
                  href="/servicios"
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.15] px-8 py-4 text-sm font-bold text-white transition-all hover:border-cyan-400/40 hover:bg-cyan-400/5 group"
                >
                  Ver servicios
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Stats */}
              <div className="animate-fade-in-up animation-delay-400 mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
                {[
                  { label: "empresas activas", value: "+200" },
                  { label: "clientes activos", value: "+1.200" },
                  { label: "entrega web", value: "72h" },
                  { label: "años experiencia", value: "12+" },
                  { label: "minutos/mes", value: "+3M" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-black sm:text-3xl bg-gradient-to-r from-cyan-400 via-violet-400 to-amber-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs text-white/40 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative hidden lg:block">
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Glow behind image */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-violet-500/10 to-amber-500/10 rounded-3xl blur-3xl" />

                <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.04] p-6 group glow-cyan">
                  <Image
                    src="/inicio/hero.png?v=2"
                    alt="Call360 - Sistema Completo de Ventas"
                    fill
                    priority
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Floating Stats */}
                <div className="absolute -bottom-6 -left-8 rounded-2xl border border-white/[0.08] bg-[#12121a]/90 backdrop-blur-xl px-6 py-4 shadow-xl animate-float">
                  <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    72h
                  </div>
                  <div className="text-xs text-white/50 font-medium">Entrega promedio</div>
                </div>

                <div className="absolute -top-6 -right-8 rounded-2xl border border-white/[0.08] bg-[#12121a]/90 backdrop-blur-xl px-6 py-4 shadow-xl animate-float delay-700">
                  <div className="text-3xl font-black bg-gradient-to-r from-violet-400 to-amber-400 bg-clip-text text-transparent">
                    +200
                  </div>
                  <div className="text-xs text-white/50 font-medium">Empresas activas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-20 text-center">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                Nuestra propuesta
              </p>
              <h2 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl">
                No solo te conseguimos clientes,{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-amber-400 bg-clip-text text-transparent">
                  te damos el sistema para atenderlos
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                step: "1",
                title: "Conseguimos clientes",
                desc: "Página web + marketing para que te encuentren en Google y redes.",
                gradient: "from-cyan-500/20 to-blue-500/20",
                glow: "group-hover:shadow-cyan-500/20",
              },
              {
                step: "2",
                title: "Los gestionas",
                desc: "CRM WhatsApp multiagente para atender cada cliente.",
                gradient: "from-emerald-500/20 to-green-500/20",
                glow: "group-hover:shadow-emerald-500/20",
              },
              {
                step: "3",
                title: "Los cierras",
                desc: "CRM de llamadas con minutos ilimitados a Colombia.",
                gradient: "from-violet-500/20 to-purple-500/20",
                glow: "group-hover:shadow-violet-500/20",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 150}>
                <div className={`group relative rounded-3xl border border-white/[0.08] bg-[#12121a] p-10 premier-card ${item.glow}`}>
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.08] text-xl font-black text-white/80 group-hover:scale-110 transition-transform duration-300">
                      {item.step}
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-white/50">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* VISUAL SERVICES */}
      <section className="py-32 bg-[#0f0f17]/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                Nuestros servicios
              </p>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Todo lo que necesitas para{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-amber-400 bg-clip-text text-transparent">
                  vender más
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Páginas Web",
                desc: "Tu vitrina digital 24/7",
                image: "/inicio/web.png?v=2",
                gradient: "from-cyan-500/20 to-blue-500/20",
                href: "/paginas-web",
              },
              {
                title: "CRM WhatsApp",
                desc: "Gestión centralizada",
                image: "/inicio/whatsapp.png?v=2",
                gradient: "from-emerald-500/20 to-green-500/20",
                href: "/crm-whatsapp",
              },
              {
                title: "CRM Llamadas",
                desc: "Minutos ilimitados",
                image: "/inicio/vozip.png?v=2",
                gradient: "from-violet-500/20 to-purple-500/20",
                href: "/crm-llamadas",
              },
            ].map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 150}>
                <a
                  href={service.href}
                  className="group relative block overflow-hidden rounded-3xl border border-white/[0.08] bg-[#12121a] premier-card"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative z-10 p-8">
                    <div className="mb-6 aspect-video overflow-hidden rounded-2xl bg-white/[0.04] p-4 group-hover:p-3 transition-all duration-300">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    <h3 className="mb-2 text-xl font-bold text-white">{service.title}</h3>
                    <p className="text-sm text-white/50">{service.desc}</p>

                    <div className="mt-5 flex items-center gap-2 text-sm font-bold text-cyan-400 transition-colors group-hover:text-cyan-300">
                      Explorar
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-32">
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
                title: "Experiencia real",
                description: "+12 años ayudando empresas colombianas a organizar sus ventas.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                ),
              },
              {
                title: "Enfoque en resultados",
                description: "No vendemos herramientas, vendemos clientes y organización.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                  </svg>
                ),
              },
              {
                title: "Soporte local",
                description: "Equipo en Bogotá listo para ayudarte cuando lo necesites.",
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                ),
              },
            ].map((benefit, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="group rounded-2xl border border-white/[0.08] bg-[#12121a] p-8 premier-card">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-white/[0.06] text-cyan-400 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-white">{benefit.title}</h3>
                  <p className="text-sm leading-relaxed text-white/50">
                    {benefit.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE AFTER */}
      <section className="py-32 bg-[#0f0f17]/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-20 text-center">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                Transformación
              </p>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Adiós al{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-amber-400 bg-clip-text text-transparent">
                  desorden operativo
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <BeforeAfter
            items={[
              {
                before: "Clientes perdidos porque no tienes página web",
                after: "Página web profesional lista en 72 horas, 24/7",
              },
              {
                before: "WhatsApp personal mezclado con el del negocio",
                after: "CRM WhatsApp multiagente con historial centralizado",
              },
              {
                before: "Llamadas desde celulares sin control ni métricas",
                after: "CRM predictivo con minutos ilimitados y grabación",
              },
              {
                before: "Hojas de Excel desorganizadas",
                after: "Base de datos centralizada con funnel visible",
              },
            ]}
          />
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <ComparisonTable
              title="Operar como siempre o hacerlo bien"
              subtitle="La diferencia entre perder clientes y organizar tu negocio"
              items={[
                {
                  informal: "Hojas impresas que se pierden",
                  call360: "Base de datos centralizada con historial",
                },
                {
                  informal: "Excel desorganizados sin control",
                  call360: "Sistema integrado con funnel visible",
                },
                {
                  informal: "Celulares personales mezclados",
                  call360: "Líneas colombianas separadas por función",
                },
                {
                  informal: "Llamadas sin supervisión",
                  call360: "Grabación automática para capacitación",
                },
                {
                  informal: "Audio de mala calidad",
                  call360: "Voz HD y conexión estable",
                },
                {
                  informal: "Sin métricas, solo intuición",
                  call360: "Métricas en tiempo real",
                },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-32 bg-[#0f0f17]/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <HowItWorks
              title="Cómo funciona el sistema"
              subtitle="Tu negocio organizado en 3 pasos"
              steps={[
                {
                  number: "1",
                  title: "Generamos clientes",
                  description: "Página web profesional + marketing digital para atraer prospectos 24/7.",
                },
                {
                  number: "2",
                  title: "Gestionas conversaciones",
                  description: "CRM WhatsApp multiagente para atender múltiples clientes simultáneamente.",
                },
                {
                  number: "3",
                  title: "Cierras ventas",
                  description: "CRM de llamadas con minutos ilimitados y seguimiento profesional.",
                },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* LIVE ACTIVITY */}
      <section className="py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                Actividad del sistema
              </p>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Todo funciona{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-amber-400 bg-clip-text text-transparent">
                  en tiempo real
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-white/50">
                Llamadas, mensajes y visitas web en tiempo real. Nuestros clientes están vendiendo.
              </p>
            </div>
          </ScrollReveal>

          <LiveActivityWidget />
        </div>
      </section>

      {/* TRUST BLOCK */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <TrustBlock
              title="No somos otra agencia tecnológica"
              description="Después de +12 años viendo cómo empresas colombianas pierden dinero con sistemas fragmentados, creamos Call360: un ecosistema completo donde cada pieza está diseñada para trabajar juntas."
              bullets={[
                "Entendemos el mercado colombiano porque trabajamos aquí",
                "Nuestros sistemas están probados con +200 empresas activas",
                "Te acompañamos desde la implementación hasta ver resultados",
              ]}
              closingStatement="Esto no es una herramienta más. Es el sistema que organiza todo tu negocio."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-[#0f0f17]/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <FAQSection
              title="Preguntas frecuentes"
              items={[
                {
                  question: "¿Cuándo empiezo a ver resultados?",
                  answer: "Tu página web estará lista en 72 horas. El tráfico comienza en cuanto publicamos.",
                },
                {
                  question: "¿Necesito experiencia técnica?",
                  answer: "No. Nosotros hacemos la configuración inicial y te capacitamos.",
                },
                {
                  question: "¿Qué pasa si mi equipo no sabe usarlo?",
                  answer: "Incluimos capacitación completa. Los sistemas son intuitivos.",
                },
                {
                  question: "¿Tienen permanencia?",
                  answer: "No. Los planes de CRM son mensuales y puedes cancelar cuando quieras.",
                },
                {
                  question: "¿Me pueden bloquear el WhatsApp?",
                  answer: "Nuestro CRM está diseñado para minimizar ese riesgo.",
                },
                {
                  question: "¿Funciona para mi negocio?",
                  answer: "Sí. Hemos trabajado con clínicas, restaurantes, consultores y más.",
                },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#12121a] p-12 text-center sm:p-16">
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/[0.08] to-transparent" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl">
                  Tu negocio puede empezar a{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-amber-400 bg-clip-text text-transparent">
                    vender en 72 horas
                  </span>
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base text-white/50">
                  Página web + Marketing + CRM con minutos ilimitados. Todo en un solo lugar.
                </p>
                <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                  <WhatsAppButton
                    text="Hola Call360, quiero cotizar mi página web y sistema de ventas"
                    className="text-base px-8 py-4"
                  />
                  <span className="text-sm font-bold text-white/40">
                    320 369 3949
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
