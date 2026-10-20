import React from "react";
import WhatsAppButton from "./WhatsAppButton";
import ScrollReveal from "./ScrollReveal";

export default function WebAndEmailPricing({ className = "" }: { className?: string }) {
  return (
    <div className={`space-y-24 ${className}`}>
      {/* ========================================================================= */}
      {/* SECCIÓN A: DESARROLLO DE PÁGINAS WEB (3 PLANES) */}
      {/* ========================================================================= */}
      <div>
        <ScrollReveal>
          <div className="mb-14 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
              Desarrollo Web Profesional
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              Planes de Páginas Web{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Creadas para Vender
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/60">
              Sin demoras ni sorpresas. Sitios modernos, rápidos y conectados a tu WhatsApp listos en 72 horas.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* 1. PLAN MENSUAL FLEXIBLE */}
          <ScrollReveal delay={0}>
            <div className="relative flex h-full flex-col justify-between rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-[#12121a] p-5 sm:p-8 md:p-10 transition-all duration-300 hover:border-white/20 hover:-translate-y-1">
              <div>
                <div className="mb-4">
                  <span className="rounded-full bg-white/[0.06] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white/70">
                    Baja Inversión Inicial
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white">Plan Mensual Flexible</h3>
                <p className="mt-2 text-sm text-white/50">
                  Ideal para arrancar sin descapitalizarte y con soporte continuo mes a mes.
                </p>

                <div className="my-6 border-y border-white/[0.08] py-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-white/50">Desde</span>
                    <span className="text-4xl font-black text-white">$100.000</span>
                    <span className="text-xs text-white/50">COP / mes</span>
                  </div>
                  <p className="mt-2 text-xs font-semibold text-cyan-400">
                    Primer pago de inicio: $140.000 COP
                  </p>
                </div>

                <ul className="space-y-3.5 text-sm text-white/70">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
                      ✓
                    </span>
                    <span>Tu página web <strong>tunegocio.com</strong> lista para vender</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
                      ✓
                    </span>
                    <span>Diseño responsivo optimizado 100% para celulares</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
                      ✓
                    </span>
                    <span>Integración directa a tu WhatsApp de ventas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-400">
                      ✓
                    </span>
                    <span>Soporte técnico y mantenimiento continuo</span>
                  </li>
                  <li className="flex items-start gap-3 text-xs text-cyan-300/80 bg-cyan-500/5 p-2 rounded-xl border border-cyan-500/20">
                    <span>💡 <strong>Opcional:</strong> Agrega correo corporativo por +$20.000 COP / mes</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.08]">
                <WhatsAppButton
                  text="Hola Call360, me interesa el Plan Mensual Flexible de página web ($100.000 COP/mes)"
                  label="Empezar Plan Mensual"
                  className="w-full justify-center !bg-transparent border border-white/20 hover:!bg-white/[0.08]"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* 2. PLAN ANUAL CRECIMIENTO (DESTACADO) */}
          <ScrollReveal delay={100}>
            <div className="relative flex h-full flex-col justify-between rounded-2xl sm:rounded-3xl border-2 border-cyan-400/60 bg-gradient-to-b from-cyan-500/[0.15] via-[#12121a] to-[#12121a] p-5 sm:p-8 md:p-10 shadow-[0_0_50px_-10px_rgba(6,182,212,0.25)] transition-all duration-300 hover:border-cyan-300 hover:-translate-y-1">
              {/* Badge Destacado */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 max-w-[90%] truncate rounded-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 px-3.5 sm:px-5 py-1 text-[11px] sm:text-xs font-black uppercase tracking-wider text-black shadow-xl shadow-cyan-500/40">
                ⚡ Ahorra 50% · Mejor Valor
              </div>

              <div>
                <div className="mb-4">
                  <span className="rounded-full bg-cyan-500/20 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300">
                    El más elegido
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white">Plan Anual Crecimiento</h3>
                <p className="mt-2 text-sm text-white/60">
                  La solución integral definitiva para empresas que quieren presencia sólida por todo el año.
                </p>

                <div className="my-6 border-y border-white/[0.1] py-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white">$600.000</span>
                    <span className="text-xs text-white/50">COP / año</span>
                  </div>
                  <p className="mt-2 text-xs font-bold text-emerald-400">
                    Ahorro del 50% frente al pago mensual
                  </p>
                </div>

                <ul className="space-y-3.5 text-sm text-white/80">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-black font-black text-xs">
                      ✓
                    </span>
                    <span>Tu <strong>página web profesional completa</strong> y personalizada</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-black font-black text-xs">
                      ✓
                    </span>
                    <span><strong>Hosting de alta velocidad</strong> incluido por 1 año completo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-black font-black text-xs">
                      ✓
                    </span>
                    <span><strong>Dominio web incluido</strong> (.com o .co a tu nombre)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-black font-black text-xs">
                      ✓
                    </span>
                    <span className="text-cyan-200">
                      🎁 <strong>Obsequio especial:</strong> 3 cuentas de correo corporativo configuradas
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-black font-black text-xs">
                      ✓
                    </span>
                    <span>Certificado SSL de seguridad y optimización SEO en Google</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.1]">
                <WhatsAppButton
                  text="Hola Call360, quiero aprovechar el 50% de descuento en el Plan Anual Crecimiento de página web ($600.000 COP/año)"
                  label="Aprovechar 50% de Descuento"
                  className="w-full justify-center !bg-gradient-to-r !from-cyan-400 !to-blue-500 !text-black font-black hover:!from-cyan-300 hover:!to-blue-400 shadow-xl shadow-cyan-500/20"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* 3. PLAN EMPRESARIAL PRO */}
          <ScrollReveal delay={200}>
            <div className="relative flex h-full flex-col justify-between rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-[#12121a] p-5 sm:p-8 md:p-10 transition-all duration-300 hover:border-violet-500/40 hover:-translate-y-1">
              <div>
                <div className="mb-4">
                  <span className="rounded-full bg-violet-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-violet-400 border border-violet-500/20">
                    Solución a Medida
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white">Plan Empresarial Pro</h3>
                <p className="mt-2 text-sm text-white/50">
                  Para negocios con requerimientos especiales, bases de datos o plataformas operativas.
                </p>

                <div className="my-6 border-y border-white/[0.08] py-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white">$1.200.000</span>
                    <span className="text-xs text-white/50">COP</span>
                  </div>
                  <p className="mt-2 text-xs font-semibold text-violet-400">
                    Cotización y alcance de proyecto personalizado
                  </p>
                </div>

                <ul className="space-y-3.5 text-sm text-white/70">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-violet-500/20 text-violet-400">
                      ✓
                    </span>
                    <span>Plataforma web corporativa de <strong>alto rendimiento y escalabilidad</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-violet-500/20 text-violet-400">
                      ✓
                    </span>
                    <span>Arquitectura con <strong>base de datos</strong> dedicada</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-violet-500/20 text-violet-400">
                      ✓
                    </span>
                    <span>Sistema de usuarios, autenticación y roles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-violet-500/20 text-violet-400">
                      ✓
                    </span>
                    <span>Integraciones personalizadas con APIs o CRM</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-violet-500/20 text-violet-400">
                      ✓
                    </span>
                    <span>Hasta <strong>10 cuentas de correo corporativo</strong></span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.08]">
                <WhatsAppButton
                  text="Hola Call360, quiero cotizar el Plan Empresarial Pro de página web ($1.200.000 COP)"
                  label="Cotizar Proyecto Empresarial"
                  className="w-full justify-center !bg-transparent border border-white/20 hover:!bg-white/[0.08]"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* SECCIÓN B: CORREO CORPORATIVO, CRM E INTELIGENCIA ARTIFICIAL */}
      {/* ========================================================================= */}
      <div className="rounded-2xl sm:rounded-3xl border border-white/[0.08] bg-[#0c0c14] p-5 sm:p-10 lg:p-16 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <ScrollReveal>
          <div className="mb-14 text-center relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">
              Comunicaciones &amp; Tecnología Comercial
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              Correo Corporativo, CRM &amp;{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Inteligencia Artificial
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-white/60">
              Da imagen profesional a tu negocio con tu propio dominio, organiza tus prospectos en el CRM y potencia tus respuestas con IA.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
          {/* MODALIDAD 1: BÁSICO MENSUAL */}
          <ScrollReveal delay={0}>
            <div className="flex h-full flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#12121a] p-6 transition-all duration-300 hover:border-white/20">
              <div>
                <span className="rounded-full bg-white/[0.06] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white/60">
                  Mensual
                </span>
                <h3 className="mt-3 text-lg font-bold text-white">Correo Corporativo Básico</h3>
                <div className="mt-4 mb-4">
                  <div className="text-3xl font-black text-white">$40.000</div>
                  <span className="text-xs text-white/40">COP / mes</span>
                </div>
                <p className="text-xs leading-relaxed text-white/60">
                  Cuentas corporativas seguras con tu propio dominio (ej. <em>ventas@tudominio.com</em>), acceso webmail seguro y configuración DNS completa.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.08]">
                <WhatsAppButton
                  text="Hola Call360, me interesa activar Correo Corporativo Básico ($40.000 COP/mes)"
                  label="Contratar Básico"
                  className="w-full justify-center min-h-[44px] sm:min-h-[46px] !py-2.5 !text-xs sm:!text-sm !bg-transparent border border-white/20 hover:!bg-white/[0.06]"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* MODALIDAD 2: CORREO + CRM + IA (MENSUAL DESTACADO) */}
          <ScrollReveal delay={80}>
            <div className="relative flex h-full flex-col justify-between rounded-2xl border-2 border-emerald-400/50 bg-gradient-to-b from-emerald-500/[0.12] to-[#12121a] p-6 transition-all duration-300 hover:border-emerald-400 shadow-xl shadow-emerald-500/10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 max-w-[90%] truncate rounded-full bg-emerald-500 px-3 py-0.5 text-[10px] font-black uppercase tracking-wider text-black">
                Recomendado
              </div>
              <div>
                <span className="rounded-full bg-emerald-500/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-300">
                  Suite Integrada
                </span>
                <h3 className="mt-3 text-lg font-bold text-white">Correo + CRM + IA</h3>
                <div className="mt-4 mb-4">
                  <div className="text-3xl font-black text-emerald-400">$60.000</div>
                  <span className="text-xs text-white/40">COP / mes</span>
                </div>
                <p className="text-xs leading-relaxed text-white/70">
                  Suite de correo corporativo integrada al CRM de Call360 + <strong>100 créditos mensuales de Inteligencia Artificial</strong> para asistencia y redacción comercial.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.08]">
                <WhatsAppButton
                  text="Hola Call360, quiero activar Correo Corporativo + CRM + IA ($60.000 COP/mes)"
                  label="Activar con CRM e IA"
                  className="w-full justify-center min-h-[44px] sm:min-h-[46px] !py-2.5 !text-xs sm:!text-sm !bg-emerald-500 !text-black font-bold hover:!bg-emerald-400"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* MODALIDAD 3: CORREO ANUAL */}
          <ScrollReveal delay={160}>
            <div className="flex h-full flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#12121a] p-6 transition-all duration-300 hover:border-white/20">
              <div>
                <span className="rounded-full bg-cyan-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-cyan-300 border border-cyan-500/20">
                  Ahorro Anual
                </span>
                <h3 className="mt-3 text-lg font-bold text-white">Correo Corporativo Anual</h3>
                <div className="mt-4 mb-4">
                  <div className="text-3xl font-black text-white">$120.000</div>
                  <span className="text-xs text-white/40">COP / año</span>
                </div>
                <p className="text-xs leading-relaxed text-white/60">
                  Ahorro anual representativo para operación básica y estable de correo corporativo durante 12 meses (sin módulo CRM / sin IA).
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.08]">
                <WhatsAppButton
                  text="Hola Call360, me interesa el plan de Correo Corporativo Anual ($120.000 COP/año)"
                  label="Contratar Anual"
                  className="w-full justify-center min-h-[44px] sm:min-h-[46px] !py-2.5 !text-xs sm:!text-sm !bg-transparent border border-white/20 hover:!bg-white/[0.06]"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* MODALIDAD 4: ANUAL PRO + IA */}
          <ScrollReveal delay={240}>
            <div className="flex h-full flex-col justify-between rounded-2xl border border-violet-500/30 bg-gradient-to-b from-violet-500/[0.08] to-[#12121a] p-6 transition-all duration-300 hover:border-violet-400">
              <div>
                <span className="rounded-full bg-violet-500/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-violet-300 border border-violet-500/30">
                  Anual Potenciado
                </span>
                <h3 className="mt-3 text-lg font-bold text-white">Correo Anual Pro + IA</h3>
                <div className="mt-4 mb-4">
                  <div className="text-3xl font-black text-violet-400">$180.000</div>
                  <span className="text-xs text-white/40">COP / año</span>
                </div>
                <p className="text-xs leading-relaxed text-white/70">
                  Suite completa de correo anual con <strong>100 créditos mensuales de IA</strong> para optimizar y redactar comunicaciones durante todo el año.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/[0.08]">
                <WhatsAppButton
                  text="Hola Call360, quiero el plan de Correo Corporativo Anual Pro + IA ($180.000 COP/año)"
                  label="Contratar Anual Pro"
                  className="w-full justify-center min-h-[44px] sm:min-h-[46px] !py-2.5 !text-xs sm:!text-sm !bg-violet-600 !text-white font-bold hover:!bg-violet-500"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
