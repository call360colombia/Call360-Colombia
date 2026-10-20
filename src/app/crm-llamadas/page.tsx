import type { Metadata } from "next";
import Image from "next/image";
import FeatureCard from "@/components/FeatureCard";
import PricingCard from "@/components/PricingCard";
import WhatsAppButton from "@/components/WhatsAppButton";
import ComparisonTable from "@/components/ComparisonTable";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import TrustBlock from "@/components/TrustBlock";
import FAQSection from "@/components/FAQSection";
import BeforeAfter from "@/components/BeforeAfter";
import ScrollReveal from "@/components/ScrollReveal";
import IssabelDashboard from "@/components/IssabelDashboard";
import GuaranteesSection from "@/components/GuaranteesSection";
import CotizadorCRM from "@/components/CotizadorCRM";
import DemoRequestForm from "@/components/DemoRequestForm";

export const metadata: Metadata = {
  title: "CRM Llamadas con Minutos Ilimitados | Call360",
  description:
    "Sistema de llamadas predictivo con minutos ilimitados a Colombia. Marcación automática, grabación con IA y monitoreo en tiempo real. $120.000 por usuario.",
};

const features = [
  {
    title: "Minutos ilimitados a Colombia",
    description:
      "Llama a cualquier fijo o móvil en Colombia sin restricciones. Tarifa plana única por usuario con calidad empresarial.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "Marcación predictiva inteligente",
    description:
      "Algoritmo avanzado que marca automáticamente cuando un agente está disponible. Incrementa contactos efectivos hasta en 300%.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    title: "Grabación de llamadas con IA",
    description:
      "Todas las llamadas se graban automáticamente con transcripción en texto. Análisis de sentimientos y palabras clave.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  {
    title: "Monitoreo en tiempo real",
    description:
      "Panel central con métricas en vivo: tiempo promedio, tasa de cierre, agentes disponibles. Toma decisiones informadas.",
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
    title: "Números locales geográficos",
    description:
      "Selecciona números de más de 50 ciudades colombianas. Mayor respuesta al usar prefijos locales reconocibles.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="23" />
        <line x1="8" y1="23" x2="16" y2="23" />
      </svg>
    ),
  },
];

export default function CRMLlamadasPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 hero-bg-voip" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="noise-overlay" />

        {/* Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="orb-1 absolute top-1/4 left-[15%] w-80 h-80 bg-violet-500/8 rounded-full blur-[100px]" />
          <div className="orb-2 absolute bottom-1/4 right-[15%] w-96 h-96 bg-purple-500/8 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-40 sm:py-48 sm:px-6 lg:px-8">
          <div className="grid gap-16 md:grid-cols-2 items-center">
            <div className="text-center md:text-left">
              {/* Badge */}
              <div className="animate-fade-in-up mb-8 inline-flex items-center gap-2.5 rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-violet-400 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
                </span>
                CRM Llamadas VoIP
              </div>

              {/* Headline */}
              <h1 className="animate-fade-in-up animation-delay-100 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                Multiplica tus llamadas con{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  minutos ilimitados
                </span>
              </h1>

              {/* Subheadline */}
              <p className="animate-fade-in-up animation-delay-200 mx-auto mt-8 max-w-lg text-lg text-white/50 sm:mx-0 leading-relaxed">
                Marcación predictiva para contactar 3 veces más clientes.{" "}
                <span className="text-white/70 font-medium">Desde $120.000/mes.</span>
              </p>              {/* Benefits */}
              <div className="animate-fade-in-up animation-delay-300 mt-8 flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-white/60 md:justify-start">
                {[
                  "Minutos ilimitados",
                  "Marcación predictiva",
                  "Monitoreo en tiempo real",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2">
                    <span className="text-violet-400">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    {item}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="animate-fade-in-up animation-delay-400 mt-10">
                <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
                  <WhatsAppButton
                    text="Hola Call360, quiero una demo del CRM de llamadas con minutos ilimitados"
                    label="Solicitar demo gratuita"
                    className="text-base px-8 py-4 shadow-lg shadow-violet-500/20"
                  />
                  <a
                    href="#panel-en-vivo"
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-sm font-bold text-white transition-all hover:bg-white/[0.08] hover:border-white/20 hover:scale-105"
                  >
                    Ver demo en vivo
                  </a>
                </div>
                <p className="mt-3 text-xs text-white/40 md:text-left">
                  ⚡ Demo real de 6 horas gratis • Minutos ilimitados • Activación en 24h
                </p>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative hidden md:block">
              <div className="relative aspect-video max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-purple-500/10 to-cyan-500/10 rounded-3xl blur-3xl" />
                <div className="relative h-full w-full overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.04] p-4 group glow-violet">
                  <Image
                    src="/predictivo/hero.png?v=2"
                    alt="CRM Llamadas Dashboard"
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
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-violet-400">
                Funcionalidades
              </p>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Todo lo que necesitas para{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  vender por teléfono
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
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-violet-400">
                Vista del sistema
              </p>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Así luce{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  el sistema
                </span>
              </h2>
            </div>
          </ScrollReveal>

          {/* Hero Image */}
          <ScrollReveal>
            <div className="relative mb-8 overflow-hidden rounded-3xl border border-white/[0.08] bg-[#12121a] p-6 group">
              <div className="absolute inset-0 bg-gradient-to-b from-violet-500/[0.05] to-transparent" />
              <div className="relative z-10 aspect-video overflow-hidden rounded-2xl bg-white/[0.04]">
                <Image
                  src="/predictivo/llamada.jpeg?v=2"
                  alt="Llamada en curso - CRM Llamadas"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Dashboard Images */}
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { src: "/predictivo/dashboard.jpeg?v=2", alt: "Dashboard de métricas de llamadas" },
              { src: "/predictivo/Dashboard 2.jpeg?v=2", alt: "Panel de control de agentes" },
            ].map((img, i) => (
              <ScrollReveal key={img.src} delay={i * 150}>
                <div className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#12121a] transition-all hover:border-violet-500/20">
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
      <section id="panel-en-vivo" className="pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-violet-400">
                Panel en vivo
              </p>
              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Operación{" "}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  en tiempo real
                </span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-white/50">
                Sistema Issabel PBX con agentes simulados en vivo, temporizadores y métricas reales.
              </p>
            </div>
          </ScrollReveal>

          <IssabelDashboard />
        </div>
      </section>

      {/* GUARANTEES SECTION */}
      <GuaranteesSection />

      {/* COTIZADOR INTERACTIVO */}
      <section className="py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-violet-400">
              ⚡ Cotiza al instante
            </span>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Calcula tu inversión{" "}
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                en segundos
              </span>
            </h2>
            <p className="mt-3 text-base text-white/50">
              Selecciona el número de agentes y obtén el costo mensual exacto.
              Te enviamos la cotización a tu WhatsApp.
            </p>
          </div>
          <CotizadorCRM defaultType="llamadas" />
        </div>
      </section>

      {/* PRICING */}
      <section className="pb-24">
        <div className="mx-auto max-w-lg px-4 sm:px-6 lg:px-8">
          <PricingCard
            name="CRM Llamadas"
            price="$120.000"
            period="por usuario / mes"
            description="Solución completa para ventas telefónicas"
            features={[
              "Minutos ilimitados a Colombia",
              "Marcación predictiva inteligente",
              "Grabación con transcripción IA",
              "Monitoreo en tiempo real",
              "Números locales geográficos",
              "Integración con CRM WhatsApp",
            ]}
            featured
            badge="Precio único"
            waText="Hola Call360, quiero el CRM de llamadas"
          />
          
          <div className="mt-8 rounded-2xl border border-violet-500/20 bg-violet-500/[0.03] p-6 text-center">
            <h4 className="text-base font-bold text-violet-300">📈 Descuento por Volumen y Servidor Local</h4>
            <p className="mt-2 text-sm text-white/70">
              A partir de <strong>10 usuarios</strong>, el valor baja a <strong>$100.000/mes</strong> por usuario.
            </p>
            <p className="mt-2 text-xs text-white/50 leading-relaxed">
              📍 <strong>Beneficio Bogotá:</strong> Si tu equipo está en Bogotá y contratas 10+ usuarios, instalamos un <strong>servidor local en comodato (prestado sin costo)</strong> directamente en tu oficina para garantizar la mejor velocidad, latencia cero y máxima calidad de voz.
            </p>
          </div>
          
          <p className="mt-4 text-center text-xs text-white/40">
            * Garantía de prueba de 6 horas • Sin cláusulas de permanencia • Activación en menos de 24 horas
          </p>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <WhyChooseUs
              title="¿Por qué CRM Llamadas Call360?"
              showCta={true}
              ctaLabel="Hablar con un asesor de llamadas"
              ctaText="Hola Call360, quiero hablar con un asesor sobre el CRM de Llamadas con minutos ilimitados."
              ctaSubtext="Garantía de prueba de 6 horas • Sin cláusulas de permanencia"
              benefits={[
                {
                  title: "Minutos ilimitados reales",
                  description: "Llama a todo Colombia sin preocuparte por la factura. Tarifa plana por usuario.",
                },
                {
                  title: "Ahorro masivo de costos",
                  description: "Deja de pagar por minuto. Con un solo pago tienes llamadas ilimitadas.",
                },
                {
                  title: "Implementación en 24 horas",
                  description: "Listo para usar el mismo día que contratas. Sin configuraciones complejas.",
                },
                {
                  title: "Experiencia comprobada",
                  description: "+200 empresas usan nuestro sistema predictivo para cerrar ventas.",
                },
                {
                  title: "Tecnología predictiva",
                  description: "Marcación automática que incrementa tus contactos hasta en 300%.",
                },
                {
                  title: "Soporte local colombiano",
                  description: "Equipo en Bogotá listo para ayudarte cuando lo necesites.",
                },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-32 bg-[#0f0f17]/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <HowItWorks
              title="Cómo funciona"
              subtitle="Vende más por teléfono con tecnología predictiva"
              image="/predictivo/voip_dashboard_mockup.png"
              steps={[
                {
                  number: "1",
                  title: "Configura tu número local",
                  description: "Elige un número de cualquier ciudad de Colombia. Tus clientes responden mejor cuando ven un prefijo familiar.",
                },
                {
                  number: "2",
                  title: "Carga tu base de datos",
                  description: "Sube tus prospectos y el sistema comenzará a marcar automáticamente. Los agentes solo hablan con interesados reales.",
                },
                {
                  number: "3",
                  title: "Cierra ventas con seguimiento",
                  description: "Grabación automática, monitoreo en tiempo real y métricas para optimizar constantemente tu equipo.",
                },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <ComparisonTable
              title="Call center informal vs Sistema profesional"
              subtitle="La diferencia entre perder tiempo y vender más"
              showCta={true}
              ctaLabel="Quiero dar el salto profesional"
              ctaText="Hola Call360, quiero optimizar mi call center con marcación predictiva y minutos ilimitados."
              ctaSubtext="Marcación automática que triplica tus contactos"
              items={[
                {
                  informal: "Agentes marcando manualmente uno por uno",
                  call360: "Marcación predictiva que marca automáticamente cuando hay agente disponible",
                },
                {
                  informal: "Factura telefónica impredecible y costosa",
                  call360: "Minutos ilimitados a Colombia por tarifa plana fija",
                },
                {
                  informal: "Sin grabación, no sabes qué está pasando",
                  call360: "Todas las llamadas grabadas automáticamente para capacitación y control",
                },
                {
                  informal: "Supervisor sin visión en tiempo real",
                  call360: "Panel central donde ves quién habla, quién espera y quién está disponible",
                },
                {
                  informal: "Clientes desconfían de números desconocidos",
                  call360: "Números locales de +50 ciudades colombianas que generan mayor respuesta",
                },
                {
                  informal: "Tiempo promedio de llamada desconocido",
                  call360: "Métricas en tiempo real: volumen, conversión, tiempos promedio",
                },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* BEFORE AFTER */}
      <section className="py-32 bg-[#0f0f17]/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <BeforeAfter
              title="De caos operativo a venta organizada"
              subtitle="Tu transformación con el CRM de llamadas"
              showCta={true}
              ctaLabel="Comenzar mi transformación"
              ctaText="Hola Call360, me interesa la transformación a marcación predictiva con llamadas ilimitadas."
              ctaSubtext="Activación rápida sin configuraciones ocultas"
              items={[
                {
                  before: "Agentes perdiendo tiempo marcando números manualmente",
                  after: "Sistema predictivo que maximiza llamadas por hora automáticamente",
                },
                {
                  before: "No sabes cuántas llamadas reales estás haciendo",
                  after: "Reportes detallados con volumen, duración y conversión en tiempo real",
                },
                {
                  before: "Factura telefónica que nunca puedes predecir",
                  after: "Costo fijo mensual con minutos ilimitados a todo Colombia",
                },
                {
                  before: "Agentes nuevos aprendiendo desde cero cada vez",
                  after: "Grabación de todas las llamadas para entrenamiento continuo",
                },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* TRUST BLOCK */}
      <section className="py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <TrustBlock
              title="No somos solo un proveedor de VoIP"
              description="Hemos visto cómo empresas colombianas pierden miles de pesos en facturas telefónicas impredecibles y equipos que no saben medir su rendimiento. Por eso creamos este CRM: para que vendas más con costos fijos y control total."
              showCta={true}
              ctaLabel="Iniciar prueba de llamadas"
              ctaText="Hola Call360, quiero empezar a utilizar el CRM de llamadas con minutos ilimitados."
              ctaSubtext="Probado por más de 200 empresas en Colombia"
              bullets={[
                "Más de 3 millones de minutos mensuales procesados a través de nuestro sistema",
                "Enfoque específico en el mercado colombiano con números locales de todo el país",
                "Tecnología predictiva probada con equipos de ventas de diferentes industrias",
              ]}
              closingStatement="Esto no es una línea telefónica más. Es el motor de ventas que organiza toda tu operación telefónica."
            />
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-[#0f0f17]/50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <FAQSection
              title="Preguntas frecuentes"
              showCta={true}
              ctaLabel="Tengo una pregunta diferente"
              ctaText="Hola Call360, tengo una pregunta sobre el CRM de llamadas que no encontré en el FAQ."
              ctaSubtext="Te respondemos en menos de 3 minutos por WhatsApp"
              items={[
                {
                  question: "¿Los minutos son realmente ilimitados?",
                  answer: "Sí, minutos ilimitados a cualquier número fijo o móvil de Colombia. Tarifa plana única por usuario sin sorpresas en la factura.",
                },
                {
                  question: "¿Necesito infraestructura especial?",
                  answer: "No. Solo necesitas conexión a internet estable, audífonos con micrófono y computadoras para tus agentes. Nosotros proveemos el resto.",
                },
                {
                  question: "¿Cuánto tarda la implementación?",
                  answer: "En menos de 24 horas tienes tu sistema listo. Configuramos los números, integramos tu equipo y te capacitamos para empezar a vender.",
                },
                {
                  question: "¿Funciona si mi internet no es perfecto?",
                  answer: "Sí, nuestro sistema VoIP está optimizado para funcionar bien incluso con conexiones básicas. Recomendamos mínimo 2 Mbps por agente.",
                },
                {
                  question: "¿Qué pasa si quiero cancelar?",
                  answer: "Sin permanencia. El plan es mensual por usuario y puedes cancelar cuando quieras. Solo pagas por lo que usas.",
                },
                {
                  question: "¿Mis agentes pueden trabajar remoto?",
                  answer: "Absolutamente. Desde cualquier lugar con internet pueden acceder al sistema y hacer llamadas como si estuvieran en la oficina.",
                },
              ]}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/[0.08] bg-[#12121a] p-12 text-center">
            <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
              ¿Listo para optimizar tus ventas telefónicas?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/50">
              Agenda una demo personalizada y descubre cómo nuestro CRM puede 
              incrementar tus contactos efectivos hasta en 300%.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <DemoRequestForm
                title="Demo personalizada del CRM Llamadas"
                subtitle="Te mostramos el sistema en vivo con números reales"
                ctaLabel="Solicitar demo"
                defaultService="crm-llamadas"
                className="text-base px-8 py-4"
              />
              <DemoRequestForm
                title="Hablar con un especialista"
                subtitle="Resolvemos tus dudas técnicas o comerciales"
                ctaLabel="Hablar con asesor"
                defaultService="crm-llamadas"
                className="inline-flex items-center gap-2 rounded-full border border-white/[0.15] px-8 py-4 text-base font-bold text-white transition-all hover:border-violet-400/40 hover:bg-violet-400/5"
              />
            </div>
            <p className="mt-3 text-xs text-white/40">Demo gratis de 6 horas • Sin tarjeta • Activación en 24 horas</p>
          </div>
        </div>
      </section>
    </>
  );
}
