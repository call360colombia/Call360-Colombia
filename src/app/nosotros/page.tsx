import type { Metadata } from "next";
import Image from "next/image";
import WhatsAppButton from "@/components/WhatsAppButton";
import TrustBlock from "@/components/TrustBlock";
import WhyChooseUs from "@/components/WhyChooseUs";

export const metadata: Metadata = {
  title: "Sobre Call360 | Nuestra Historia y Evolución",
  description:
    "De la instalación de redes a la solución completa de ventas para Colombia. +200 empresas confían en nosotros.",
};

const milestones = [
  {
    year: "2020",
    title: "Fundación",
    description: "Comenzamos instalando redes, computadores y licencias para empresas.",
    tags: ["Redes", "Computadores", "Licencias"],
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    year: "2022",
    title: "Lanzamiento Voz IP",
    description: "Iniciamos con minutos IP y tecnología predictiva para call centers.",
    tags: ["VoIP", "Predictivo", "Call Center"],
    gradient: "from-violet-500 to-purple-500",
  },
  {
    year: "2024",
    title: "WhatsApp CRM",
    description: "Integramos WhatsApp Business API y lanzamos AI Agents para automatización.",
    tags: ["WhatsApp API", "CRM", "AI Agents"],
    gradient: "from-emerald-500 to-green-500",
  },
  {
    year: "2025",
    title: "Consolidación",
    description: "Lideramos el mercado con solución completa: Voz, WhatsApp, AI, Hardware y Licencias.",
    tags: ["Solución Total", "+200 Empresas"],
    gradient: "from-amber-500 to-orange-500",
  },
];

export default function NosotrosPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(6,182,212,0.10),transparent_60%)]" />
        <div className="noise-overlay" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="text-center md:text-left">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
                Sobre Call360
              </p>
              <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                De la instalación de redes al{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-amber-400 bg-clip-text text-transparent">
                  sistema completo de ventas
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-lg text-lg text-white/60 sm:mx-0">
                +12 años transformando cómo las empresas colombianas consiguen, 
                gestionan y cierran clientes.
              </p>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-white/[0.04] p-4 group">
              <Image
                src="/inicio/hero.png?v=2"
                alt="Call360 - Sistema Completo de Ventas"
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-24 bg-[#0f0f17]/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
              Nuestra Evolución
            </p>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Construyendo el{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-amber-400 bg-clip-text text-transparent">
                futuro de las ventas
              </span>
            </h2>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 via-violet-500/50 to-amber-500/50 hidden lg:block" />
            
            <div className="space-y-12 lg:space-y-0">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-16 ${
                    index % 2 === 0 ? "lg:items-start" : "lg:items-end"
                  }`}
                >
                  {/* Left Side - Content */}
                  <div className={`lg:text-right ${index % 2 === 0 ? "lg:order-1" : "lg:order-2 lg:col-start-1"}`}>
                    <div className="rounded-2xl border border-white/[0.08] bg-[#12121a] p-8 hover-lift">
                      <div className={`inline-block mb-4 rounded-full bg-gradient-to-r ${milestone.gradient} px-4 py-2 text-sm font-black text-white`}>
                        {milestone.year}
                      </div>
                      <h3 className="mb-3 text-xl font-bold text-white">
                        {milestone.title}
                      </h3>
                      <p className="mb-4 text-sm leading-relaxed text-white/50">
                        {milestone.description}
                      </p>
                      <div className="flex flex-wrap gap-2 justify-start lg:justify-end">
                        {milestone.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="rounded-full bg-white/[0.06] px-3 py-1 text-xs font-semibold text-white/70"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Center - Dot */}
                  <div className="absolute left-1/2 -translate-x-1/2 lg:relative lg:left-auto lg:translate-x-0">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${milestone.gradient} shadow-lg`}>
                      <span className="text-sm font-black text-white">
                        {milestone.year.slice(-2)}
                      </span>
                    </div>
                  </div>
                  
                  {/* Right Side - Empty for balance */}
                  <div className={`hidden lg:block ${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Mission */}
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#12121a] p-12">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.08] to-transparent" />
              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/10">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-cyan-400">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                </div>
                <h3 className="mb-6 text-2xl font-black text-white">Nuestra Misión</h3>
                <p className="text-lg leading-relaxed text-white/70 italic">
                  "Automatizar y optimizar cada interacción comercial a través de tecnología inteligente, 
                  haciendo que las empresas se concentren en lo que realmente importa: 
                  <span className="font-bold text-white"> cerrar ventas y fidelizar clientes</span>."
                </p>
              </div>
            </div>
            
            {/* Vision */}
            <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#12121a] p-12">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.08] to-transparent" />
              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-violet-500/10">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-violet-400">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <h3 className="mb-6 text-2xl font-black text-white">Nuestra Visión</h3>
                <p className="text-lg leading-relaxed text-white/70 italic">
                  "Ser el partner tecnológico integral para call centers y equipos comerciales en 
                  <span className="font-bold text-white"> Latinoamérica</span>, 
                  liderando con innovación constante y soporte excepcional."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <WhyChooseUs
        title="¿Por qué confiar en Call360?"
        benefits={[
          {
            title: "Experiencia comprobada",
            description: "+12 años en el mercado colombiano entendiendo las necesidades reales de las empresas.",
          },
          {
            title: "+200 empresas activas",
            description: "Nuestros sistemas procesan millones de interacciones mensuales para clientes satisfechos.",
          },
          {
            title: "Evolución constante",
            description: "De redes a AI Agents: siempre innovando para darte la tecnología más avanzada.",
          },
          {
            title: "Solución integral",
            description: "No necesitas múltiples proveedores. Todo tu sistema de ventas en un solo lugar.",
          },
          {
            title: "Soporte local",
            description: "Equipo en Bogotá listo para ayudarte. Hablamos tu mismo idioma, literal y figurativamente.",
          },
          {
            title: "Enfoque en resultados",
            description: "No vendemos herramientas bonitas. Vendemos sistemas que generan ventas reales.",
          },
        ]}
      />

      {/* TRUST BLOCK */}
      <TrustBlock
        title="Más que proveedores, somos partners"
        description="Empezamos instalando redes y computadores. Escuchamos a nuestros clientes, entendimos sus dolores reales y construimos Call360: el sistema que nos hubiera gustado tener cuando empezamos. Hoy, +200 empresas nos eligen porque entendemos que la tecnología no es el fin, es el medio para vender más y operar mejor."
        bullets={[
          "Hemos estado donde estás: entendemos los desafíos de operar un negocio en Colombia",
          "Nuestra evolución fue guiada por las necesidades reales de nuestros clientes, no por tendencias",
          "Cada producto nuevo nació de resolver un problema concreto que vimos repetirse una y otra vez",
        ]}
        closingStatement="Esto no es solo tecnología. Es la experiencia de +12 años organizada para ayudarte a vender más."
      />

      {/* STATS */}
      <section className="py-24 bg-[#0f0f17]/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {[
              { label: "empresas activas", value: "+200" },
              { label: "clientes activos", value: "+1.200" },
              { label: "años experiencia", value: "12+" },
              { label: "minutos/mes", value: "+3M" },
              { label: "entrega web", value: "72h" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-black sm:text-5xl bg-gradient-to-r from-cyan-400 via-violet-400 to-amber-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-white/50 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#12121a] p-12 text-center sm:p-16">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/[0.08] to-transparent" />
            <div className="relative z-10">
              <h2 className="text-3xl font-black leading-tight tracking-tight sm:text-4xl">
                ¿Listo para trabajar con{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-amber-400 bg-clip-text text-transparent">
                  quien sí entiende tu negocio?
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-white/50">
                Después de +12 años y +200 empresas, sabemos exactamente lo que necesitas.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <WhatsAppButton
                  text="Hola Call360, quiero conocer más sobre sus servicios"
                  className="text-base"
                />
                <a
                  href="tel:+573203693949"
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.15] px-6 py-3 text-sm font-bold text-white transition-all hover:border-cyan-400/40 hover:bg-cyan-400/5"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  320 369 3949
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
