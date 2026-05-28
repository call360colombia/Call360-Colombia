import type { Metadata } from "next";
import Image from "next/image";
import FeatureCard from "@/components/FeatureCard";
import PricingCard from "@/components/PricingCard";
import ComparisonTable from "@/components/ComparisonTable";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import TrustBlock from "@/components/TrustBlock";
import FAQSection from "@/components/FAQSection";
import BeforeAfter from "@/components/BeforeAfter";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppLiveChat from "@/components/WhatsAppLiveChat";

export const metadata: Metadata = {
  title: "CRM WhatsApp Multiagente | Call360",
  description:
    "Sistema profesional de WhatsApp con múltiples agentes en un solo número. Campañas masivas, historial de chats y baja probabilidad de bloqueo. Desde $120.000/mes.",
};

const features = [
  {
    title: "Multiagente",
    description:
      "Varios usuarios atendiendo desde un solo número de WhatsApp. Ideal para equipos de servicio al cliente.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Campañas masivas",
    description:
      "Envía mensajes a miles de clientes al mismo tiempo. Segmenta por etiquetas y personaliza cada envío.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Historial de chats",
    description:
      "Consulta todas las conversaciones en un solo lugar. Busca por cliente, fecha o contenido del mensaje.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "Compatible con WhatsApp normal y API",
    description:
      "Funciona con ambas versiones de WhatsApp para máxima compatibilidad y flexibilidad.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: "Baja probabilidad de bloqueo",
    description:
      "Sistema diseñado para minimizar el riesgo de bloqueo por parte de WhatsApp.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

const plans = [
  {
    name: "1 Usuario",
    price: "$120.000",
    period: "/ mes",
    features: [
      "Multiagente",
      "Campañas masivas",
      "Historial de chats",
      "WhatsApp normal/API",
    ],
    waText: "Hola Call360, quiero el CRM WhatsApp para 1 usuario",
  },
  {
    name: "4 Usuarios",
    price: "$240.000",
    period: "/ mes",
    features: [
      "Multiagente",
      "Campañas masivas",
      "Historial de chats",
      "WhatsApp normal/API",
    ],
    featured: true,
    badge: "Más popular",
    waText: "Hola Call360, quiero el CRM WhatsApp para 4 usuarios",
  },
  {
    name: "10 Usuarios",
    price: "$500.000",
    period: "/ mes",
    features: [
      "Multiagente",
      "Campañas masivas",
      "Historial de chats",
      "WhatsApp normal/API",
    ],
    waText: "Hola Call360, quiero el CRM WhatsApp para 10 usuarios",
  },
];

export default function CRMWhatsAppPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 hero-bg-whatsapp" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="noise-overlay" />

        {/* Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="orb-1 absolute top-1/4 left-[15%] w-80 h-80 bg-emerald-500/8 rounded-full blur-[100px]" />
          <div className="orb-2 absolute bottom-1/4 right-[15%] w-96 h-96 bg-green-500/8 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="grid gap-16 md:grid-cols-2 items-center">
            <div className="text-center md:text-left">
              {/* Badge */}
              <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-emerald-400 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                CRM WhatsApp Multiagente
              </div>

              {/* Headline */}
              <h1 className="animate-fade-in-up animation-delay-100 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Gestiona clientes por{" "}
                <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
                  WhatsApp profesional
                </span>
              </h1>

              {/* Subheadline */}
              <p className="animate-fade-in-up animation-delay-200 mx-auto mt-8 max-w-lg text-lg text-white/50 sm:mx-0 leading-relaxed">
                Multiagente, campañas masivas e historial completo.{" "}
                <span className="text-white/70 font-medium">Todo desde un solo lugar.</span>
              </p>

              {/* Benefits */}
              <div className="animate-fade-in-up animation-delay-300 mt-8 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-white/60 md:justify-start">
                {[
                  "Multiagente simultáneo",
                  "Campañas masivas",
                  "Baja probabilidad de bloqueo",
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
              <div className="animate-fade-in-up animation-delay-400 mt-10 flex flex-wrap items-center justify-center gap-4 md:justify-start">
                <WhatsAppButton
                  text="Hola Call360, quiero el CRM WhatsApp"
                  className="text-base px-8 py-4"
                />
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative hidden md:block">
              <div className="relative aspect-video max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-green-500/10 to-cyan-500/10 rounded-3xl blur-3xl" />
                <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.04] p-4 group glow-emerald">
                  <Image
                    src="/whatsapp/hero.png?v=2"
                    alt="CRM WhatsApp Dashboard"
                    fill
                    priority
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-32 bg-[#0f0f17]/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-20 text-center">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                Funcionalidades
              </p>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Todo lo que necesitas para{" "}
                <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
                  atender por WhatsApp
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 100}>
                <FeatureCard {...feature} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* VISTA DEL SISTEMA */}
      <section className="py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                Vista del sistema
              </p>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Así se ve{" "}
                <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
                  por dentro
                </span>
              </h2>
            </div>
          </ScrollReveal>

          {/* Hero Image */}
          <ScrollReveal>
            <div className="relative mb-8 overflow-hidden rounded-3xl border border-white/[0.08] bg-[#12121a] p-6 group">
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/[0.05] to-transparent" />
              <div className="relative z-10 aspect-video overflow-hidden rounded-2xl bg-white/[0.04]">
                <Image
                  src="/whatsapp/WhatsappCRMPC.jpeg?v=2"
                  alt="CRM WhatsApp en PC"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Feature Images Grid */}
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { src: "/whatsapp/PanelWhatsapp.png?v=2", alt: "Panel multiagente WhatsApp", title: "Panel multiagente" },
              { src: "/whatsapp/HistorialWhatsapp.png?v=2", alt: "Historial de conversaciones", title: "Historial completo" },
              { src: "/whatsapp/CampañasWhatsapp.png?v=2", alt: "Campañas masivas WhatsApp", title: "Campañas masivas" },
            ].map((img, i) => (
              <ScrollReveal key={img.src} delay={i * 150}>
                <div className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#12121a] transition-all hover:border-emerald-500/20">
                  <div className="relative aspect-video overflow-hidden bg-white/[0.04]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-bold text-white">{img.title}</h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Secondary Images */}
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {[
              { src: "/whatsapp/WhatsappCRM.jpeg?v=2", alt: "CRM WhatsApp interfaz" },
              { src: "/whatsapp/dashboard.png?v=2", alt: "Dashboard de métricas WhatsApp" },
            ].map((img, i) => (
              <ScrollReveal key={img.src} delay={i * 150}>
                <div className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#12121a] transition-all hover:border-emerald-500/20">
                  <div className="relative aspect-video overflow-hidden bg-white/[0.04]">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* DASHBOARD INTERACTIVO */}
      <section className="py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                Conversaciones en vivo
              </p>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Gestión{" "}
                <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
                  multiagente real
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-white/50">
                Conversaciones simuladas en vivo con agentes, etiquetas y mensajes entrando en tiempo real.
              </p>
            </div>
          </ScrollReveal>

          <WhatsAppLiveChat />
        </div>
      </section>

      {/* PRICING */}
      <section className="py-32 bg-[#0f0f17]/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-20 text-center">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                Planes
              </p>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Elige tu plan
              </h2>
              <p className="mt-4 text-base text-white/50">
                Usuario adicional: $50.000/mes
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan, i) => (
              <ScrollReveal key={plan.name} delay={i * 150}>
                <PricingCard
                  name={plan.name}
                  price={plan.price}
                  period={plan.period}
                  features={plan.features}
                  featured={plan.featured}
                  badge={plan.badge}
                  waText={plan.waText}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <WhyChooseUs
              title="¿Por qué CRM WhatsApp Call360?"
              benefits={[
                {
                  title: "Todo en un solo lugar",
                  description: "Deja de usar WhatsApp normal mezclado con el del negocio.",
                },
                {
                  title: "Ahorro de costos",
                  description: "Un número profesional atiende múltiples clientes simultáneamente.",
                },
                {
                  title: "Implementación rápida",
                  description: "Listo en menos de 24 horas, sin configuración compleja.",
                },
                {
                  title: "Experiencia real",
                  description: "+200 empresas gestionan sus ventas por WhatsApp con nosotros.",
                },
                {
                  title: "Baja probabilidad de bloqueo",
                  description: "Tecnología diseñada para cumplir las políticas de WhatsApp.",
                },
                {
                  title: "Soporte local",
                  description: "Equipo en Bogotá listo para ayudarte cuando lo necesites.",
                },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <HowItWorks
              title="Cómo funciona"
              subtitle="Gestiona tus clientes como un profesional"
              steps={[
                {
                  number: "1",
                  title: "Conecta tu número",
                  description: "Escaneas un QR y tu número de WhatsApp se integra al sistema multiagente. Sin apps extra ni configuraciones complicadas.",
                },
                {
                  number: "2",
                  title: "Atiende desde cualquier lugar",
                  description: "Varios agentes pueden atender desde un mismo número. Cada uno con su área asignada y acceso controlado.",
                },
                {
                  number: "3",
                  title: "Gestiona y cierra",
                  description: "Historial completo de cada cliente, campañas masivas segmentadas y métricas de rendimiento en tiempo real.",
                },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-32 bg-[#0f0f17]/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <ComparisonTable
              title="WhatsApp personal vs CRM profesional"
              subtitle="La diferencia entre perder clientes y organizar tu atención"
              items={[
                {
                  informal: "Celular personal mezclado con chats del negocio",
                  call360: "Número profesional dedicado exclusivamente a tus clientes",
                },
                {
                  informal: "Solo un agente puede atender a la vez",
                  call360: "Múltiples agentes atendiendo simultáneamente desde un mismo número",
                },
                {
                  informal: "Chats perdidos si alguien deja la empresa",
                  call360: "Historial centralizado accesible por todo el equipo autorizado",
                },
                {
                  informal: "Respuestas manuales una por una",
                  call360: "Campañas masivas automatizadas con segmentación por etiquetas",
                },
                {
                  informal: "Sin métricas de rendimiento",
                  call360: "Reportes de tiempos de respuesta, volumen de mensajes y conversión",
                },
                {
                  informal: "Riesgo alto de bloqueo por uso intensivo",
                  call360: "Tecnología optimizada para minimizar riesgo de bloqueo",
                },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* BEFORE AFTER */}
      <section className="py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <BeforeAfter
              title="De caos operativo a gestión profesional"
              subtitle="Tu transformación con el CRM WhatsApp"
              items={[
                {
                  before: "Clientes esperando horas porque no hay nadie disponible",
                  after: "Múltiples agentes atendiendo simultáneamente sin esperas",
                },
                {
                  before: "No sabes quién atendió qué cliente",
                  after: "Cada mensaje asignado a un agente con historial completo",
                },
                {
                  before: "Envías el mismo mensaje a todos manualmente",
                  after: "Campañas masivas segmentadas por etiquetas y comportamiento",
                },
                {
                  before: "Perdiste un chat importante cuando alguien renegó",
                  after: "Historial centralizado que permanece en la empresa",
                },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* TRUST BLOCK */}
      <section className="py-32 bg-[#0f0f17]/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <TrustBlock
              title="No somos solo un proveedor de software"
              description="Hemos visto cómo empresas colombianas pierden cientos de clientes por mala gestión de WhatsApp. Por eso creamos este CRM: para que tu equipo pueda atender como los grandes, sin necesidad de ser un experto."
              bullets={[
                "Entendemos las particularidades del mercado colombiano y cómo opera WhatsApp aquí",
                "Nuestro sistema está diseñado específicamente para minimizar bloqueos usando técnicas validadas",
                "+200 empresas confían en nosotros para gestionar sus conversaciones diarias",
              ]}
              closingStatement="Esto no es un plugin más. Es el cerebro que organiza toda tu atención al cliente."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <FAQSection
              title="Preguntas frecuentes"
              items={[
                {
                  question: "¿Me van a bloquear el número?",
                  answer: "Nuestro CRM está diseñado específicamente para operar dentro de los límites seguros de WhatsApp. Con prácticas recomendadas (no spam, respetar límites de mensajes), la probabilidad de bloqueo es mínima.",
                },
                {
                  question: "¿Cuántos agentes puedo tener?",
                  answer: "Ofrecemos planes desde 1 hasta 10 usuarios, con opción de agregar más según crezca tu equipo. El costo adicional por usuario es $50.000/mes.",
                },
                {
                  question: "¿Funciona en varios dispositivos?",
                  answer: "Sí, cada agente puede acceder desde su computadora o celular. Todo sincronizado en tiempo real con el historial completo.",
                },
                {
                  question: "¿Puedo hacer campañas masivas?",
                  answer: "Sí, puedes enviar mensajes a miles de contactos a la vez. Puedes segmentar por etiquetas, historial de compras o cualquier criterio que tengas registrado.",
                },
                {
                  question: "¿Qué pasa si quiero cancelar?",
                  answer: "Sin permanencia. Los planes son mensuales y puedes cancelar cuando quieras. Solo pagas por lo que usas.",
                },
                {
                  question: "¿Necesito conocimientos técnicos?",
                  answer: "Para nada. La configuración inicial la hacemos nosotros y te capacitamos para que tu equipo empiece a usarlo inmediatamente.",
                },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-3xl border border-white/[0.08] bg-[#12121a] p-12 text-center">
              <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
                ¿Quieres ver el CRM WhatsApp en acción?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-white/50">
                Solicita una demo gratuita y descubre cómo gestionar a tus clientes
                como un profesional.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <WhatsAppButton
                  text="Hola Call360, quiero una demo del CRM WhatsApp"
                  className="text-base px-8 py-4"
                />
                <a
                  href="tel:+573203693949"
                  className="inline-flex items-center gap-2 rounded-full border border-white/[0.15] px-8 py-4 text-base font-bold text-white transition-all hover:border-emerald-400/40 hover:bg-emerald-400/5"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  320 369 3949
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
