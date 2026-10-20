import type { Metadata } from "next";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollReveal from "@/components/ScrollReveal";
import { CRM_LOGIN_URL, DEMO_PATH, CONTACT_EMAIL } from "@/lib/siteUrls";

export const metadata: Metadata = {
  title: "Contacto Directo | Call360 Colombia & Juan David Meza",
  description:
    "Hablemos de tu operación comercial en Colombia: soporte directo, cotizaciones en minutos por WhatsApp o correo oficial juanmeza@call360colombia.com.",
  alternates: {
    canonical: "https://call360colombia.com/contacto",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Contacto Directo | Call360 Colombia & Juan David Meza",
    description:
      "Atención inmediata en Bogotá y todo Colombia. Páginas web, CRM WhatsApp multiagente y campañas sin intermediarios.",
    url: "https://call360colombia.com/contacto",
    siteName: "Call360 Colombia",
    locale: "es_CO",
    type: "website",
  },
};

const WHATSAPP_URL =
  "https://wa.me/573203693949?text=Hola%20Call360%2C%20quiero%20informaci%C3%B3n";

export default function ContactoPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(16,185,129,0.10),transparent_60%)]" />
        <div className="noise-overlay" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
                Contacto · Colombia
              </p>
              <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Hablemos de tu operación{" "}
                <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  en Colombia
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg text-white/60">
                Páginas web, CRM WhatsApp, CRM de llamadas con minutos
                ilimitados y marketing digital. Un solo proveedor, un solo
                sistema.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <WhatsAppButton
                  text="Hola Call360, quiero información sobre sus servicios"
                  label="Cotizar por WhatsApp"
                  className="text-base px-8 py-4"
                />
                <Link
                  href={DEMO_PATH}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-8 py-4 text-base font-bold text-white transition-all hover:border-cyan-400/40 hover:bg-cyan-400/5"
                >
                  Crear demo
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CANALES */}
      <section className="pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ScrollReveal>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-white/[0.08] bg-[#12121a] p-8 transition-all duration-300 hover:border-emerald-500/30 hover:-translate-y-1"
              >
                <div className="mb-4 text-sm font-bold uppercase tracking-wider text-emerald-400">
                  WhatsApp
                </div>
                <div className="text-xl font-black text-white">+57 320 369 3949</div>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  Respuesta rápida en horario comercial. Cotizaciones, demos y
                  soporte.
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                  Escribir ahora →
                </span>
              </a>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <a
                href="tel:+573203693949"
                className="group block rounded-2xl border border-white/[0.08] bg-[#12121a] p-8 transition-all duration-300 hover:border-cyan-500/30 hover:-translate-y-1"
              >
                <div className="mb-4 text-sm font-bold uppercase tracking-wider text-cyan-400">
                  Llamadas
                </div>
                <div className="text-xl font-black text-white">320 369 3949</div>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  Habla con un consultor sobre minutos ilimitados, CRM WhatsApp
                  o tu página web.
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400">
                  Llamar →
                </span>
              </a>
            </ScrollReveal>
            <ScrollReveal delay={160}>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="group block rounded-2xl border border-white/[0.08] bg-[#12121a] p-8 transition-all duration-300 hover:border-blue-500/30 hover:-translate-y-1"
              >
                <div className="mb-4 text-sm font-bold uppercase tracking-wider text-blue-400">
                  Correo Oficial
                </div>
                <div className="text-base font-black text-white break-all">{CONTACT_EMAIL}</div>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  Escríbenos para propuestas corporativas, facturación y consultas comerciales.
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-blue-400">
                  Escribir correo →
                </span>
              </a>
            </ScrollReveal>
            <ScrollReveal delay={240}>
              <a
                href={CRM_LOGIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-white/[0.08] bg-[#12121a] p-8 transition-all duration-300 hover:border-violet-500/30 hover:-translate-y-1"
              >
                <div className="mb-4 text-sm font-bold uppercase tracking-wider text-violet-400">
                  Clientes CRM
                </div>
                <div className="text-xl font-black text-white">Acceder al CRM</div>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  ¿Ya eres cliente? Ingresa a tu CRM de WhatsApp y llamadas.
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-violet-400">
                  Ir al login →
                </span>
              </a>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={150}>
            <div className="mt-6 rounded-2xl border border-white/[0.08] bg-[#12121a] p-8 text-center">
              <p className="text-sm font-bold uppercase tracking-wider text-white/60">
                Cobertura
              </p>
              <p className="mt-2 text-base text-white/70">
                Fontibón, Bogotá D.C. · Atención a todo Colombia
              </p>
              <p className="mt-1 text-xs text-white/40">
                Soporte local en español · Sin permanencia · Implementación en días
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
