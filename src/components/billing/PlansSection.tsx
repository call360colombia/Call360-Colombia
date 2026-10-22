'use client';

/**
 * components/billing/PlansSection.tsx
 *
 * Sección Comercial Completa de Planes y Créditos IA para Call360.
 *
 * CONTRATO COMERCIAL VIGENTE:
 * - Titular: "Todas las funciones desde el primer día."
 * - Subtítulo: "Prueba el CRM completo y elige el cupo de Créditos IA que necesita tu empresa. La IA ya está incluida: no necesitas configurar APIs."
 * - Mismas funciones en Demo, Starter, Pro y Deluxe.
 * - Tarjetas 3D físicas idénticas al CRM.
 * - Sección común "Incluido en Demo, Starter, Pro y Deluxe" con matriz de paridad funcional.
 * - 5to Plan diferenciado: "Solo Correo" con 200 créditos IA y precio "Consulta las condiciones".
 */

import React, { useState } from 'react';
import Link from 'next/link';
import { PlanCard3D } from './PlanCard3D';
import {
  COMMERCIAL_PLANS,
  PLANS_SECTION_HEADER,
  SHARED_INCLUDED_CAPABILITIES,
  FUNCTIONAL_PARITY_ROWS,
  EMAIL_ONLY_PLAN,
  ENTERPRISE_CUSTOM_PLAN,
  AI_CREDITS_POLICY,
  type CommercialPlan,
  type Currency,
} from '@/lib/commercialCatalog';
import { buildWhatsAppUrl } from '@/lib/formData';
import { DEMO_PATH } from '@/lib/siteUrls';

export default function PlansSection() {
  const [currency, setCurrency] = useState<Currency>('COP');
  const [showPromo, setShowPromo] = useState(false);
  const [showParityTable, setShowParityTable] = useState(false);

  const handlePlanAction = (plan: CommercialPlan) => {
    if (plan.id === 'demo') {
      window.location.href = DEMO_PATH;
      return;
    }
    const url = buildWhatsAppUrl(plan.waMessage);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleEmailPlanAction = () => {
    const url = buildWhatsAppUrl(EMAIL_ONLY_PLAN.waMessage);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleEnterpriseContact = () => {
    const url = buildWhatsAppUrl(ENTERPRISE_CUSTOM_PLAN.waMessage);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="planes" className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
      {/* Fondos y resplandores controlados */}
      <div className="absolute inset-0 bg-[#0c0d14]/80" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ========================================================
            ENCABEZADO OFICIAL
            ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400 mb-4">
            {PLANS_SECTION_HEADER.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            {PLANS_SECTION_HEADER.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed">
            {PLANS_SECTION_HEADER.subtitle}
          </p>
          <p className="mt-2 text-xs font-bold uppercase tracking-widest text-emerald-400/90">
            {PLANS_SECTION_HEADER.brandTagline}
          </p>

          {/* Selector de Moneda y Oferta de Lanzamiento */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {/* Toggle COP / USD */}
            <div className="inline-flex items-center p-1 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md shadow-inner">
              <button
                type="button"
                onClick={() => setCurrency('COP')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  currency === 'COP'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                🇨🇴 Pesos Colombianos (COP)
              </button>
              <button
                type="button"
                onClick={() => setCurrency('USD')}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  currency === 'USD'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                🌎 Dólares (USD)
              </button>
            </div>

            {/* Toggle Promo Lanzamiento Starter */}
            <button
              type="button"
              onClick={() => setShowPromo((v) => !v)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-bold transition-all ${
                showPromo
                  ? 'border-amber-400/80 bg-amber-500/20 text-amber-200 shadow-md shadow-amber-500/20'
                  : 'border-white/10 bg-white/[0.03] text-white/60 hover:text-white hover:border-white/20'
              }`}
            >
              <span className={`h-2 w-2 rounded-full ${showPromo ? 'bg-amber-400 animate-ping' : 'bg-white/30'}`} />
              <span>Promo Starter (50% OFF mes 1)</span>
            </button>
          </div>
        </div>

        {/* ========================================================
            GRID DE LAS 4 TARJETAS 3D FINTECH
            ======================================================== */}
        <div className="grid gap-6 sm:gap-6 md:grid-cols-2 lg:grid-cols-4 items-stretch">
          {COMMERCIAL_PLANS.map((plan) => {
            const pricing =
              showPromo && plan.launchPromo?.enabled
                ? plan.launchPromo.pricing[currency]
                : plan.pricing[currency];

            return (
              <div
                key={plan.id}
                className={`flex flex-col justify-between rounded-3xl p-3 sm:p-4 border transition-all duration-300 backdrop-blur-sm ${
                  plan.isRecommended
                    ? 'border-emerald-500/50 bg-emerald-500/[0.03] shadow-xl shadow-emerald-950/20'
                    : 'border-white/[0.08] bg-[#12121a]/80 hover:border-white/20'
                }`}
              >
                {/* Tarjeta 3D Física */}
                <div className="w-full mb-4">
                  <PlanCard3D
                    plan={plan}
                    currency={currency}
                    showPromo={showPromo}
                    onActionClick={handlePlanAction}
                  />
                </div>

                {/* Bloque descriptivo de la columna */}
                <div className="flex-1 flex flex-col justify-between px-2 pt-2">
                  <div>
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="text-xs font-black uppercase tracking-wider text-white/80">
                        {plan.name}
                      </span>
                      <span className="text-xs font-black text-cyan-400 font-mono">
                        {pricing.formatted}
                      </span>
                    </div>

                    {/* Tagline común en las 4: CRM completo + IA incluida */}
                    <div className="mb-2">
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                        CRM completo + IA incluida
                      </span>
                    </div>

                    {/* Descripción orientativa según directriz */}
                    <p className="text-xs text-white/70 mb-3 min-h-[36px] leading-relaxed">
                      {plan.description}
                    </p>

                    {/* Resumen de cupos de IA */}
                    <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-2.5 mb-4 text-center">
                      <span className="block text-xs font-bold text-emerald-300 font-mono">
                        {plan.aiCreditsLabel}
                      </span>
                      <span className="block text-[10px] text-white/40 mt-0.5">
                        Cupo compartido por empresa
                      </span>
                    </div>

                    {/* Capacidades compartidas destacadas */}
                    <ul className="space-y-1.5 mb-6 text-[11px] text-white/70">
                      {plan.features.slice(0, 4).map((f, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <svg className="h-3.5 w-3.5 text-emerald-400 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Botón de Acción Principal */}
                  <div className="pt-2">
                    {plan.id === 'demo' ? (
                      <Link
                        href={DEMO_PATH}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-400/40 px-4 py-3 text-xs font-bold text-white transition-all shadow-md active:scale-[0.98]"
                      >
                        <span>{plan.ctaLabel}</span>
                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handlePlanAction(plan)}
                        className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs font-bold transition-all shadow-md active:scale-[0.98] ${
                          plan.tier === 'premium'
                            ? 'bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 font-black shadow-amber-500/25 hover:from-amber-300 hover:to-yellow-300'
                            : plan.tier === 'silver_emerald'
                              ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold hover:from-emerald-500 hover:to-teal-500 border border-emerald-400/40 shadow-emerald-950/40'
                              : 'bg-gradient-to-r from-amber-700 to-yellow-700 text-amber-50 font-bold hover:from-amber-600 hover:to-yellow-600 border border-amber-400/40'
                        }`}
                      >
                        <span>{plan.ctaLabel}</span>
                        <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================
            SECCIÓN COMÚN: INCLUIDO EN DEMO, STARTER, PRO Y DELUXE
            ======================================================== */}
        <div className="mt-16 sm:mt-24 rounded-3xl border border-white/10 bg-[#10121d]/90 p-6 sm:p-10 backdrop-blur-md">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
              Mismo CRM, Todas las Capacidades
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Incluido en Demo, Starter, Pro y Deluxe
            </h3>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              No recortamos funciones por nivel. Transcripción, informes, análisis, sugerencias, traducción y asistente comercial están incluidos en todos los planes. La única diferencia es la duración del Demo y el cupo de Créditos IA que tu empresa consume al mes.
            </p>
          </div>

          {/* Grid de Capacidades Compartidas */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5 mb-8">
            {SHARED_INCLUDED_CAPABILITIES.map((cap, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-4 flex flex-col justify-between hover:border-emerald-500/30 transition-all"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2 text-emerald-400">
                    <svg className="h-4 w-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <h4 className="text-xs font-bold text-white leading-tight">{cap.title}</h4>
                  </div>
                  <p className="text-[11px] text-white/50 leading-relaxed">{cap.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Toggle para Ver Matriz Completa de Paridad */}
          <div className="text-center pt-2 border-t border-white/[0.06]">
            <button
              type="button"
              onClick={() => setShowParityTable((v) => !v)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 bg-white/[0.04] text-xs font-bold text-white/80 hover:text-white hover:border-white/30 transition-all"
            >
              <span>{showParityTable ? 'Ocultar Matriz de Paridad Funcional' : 'Ver Matriz de Paridad Funcional (Todas Iguales)'}</span>
              <svg
                className={`h-3.5 w-3.5 transition-transform duration-300 ${showParityTable ? 'rotate-180' : ''}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          {/* Tabla de Paridad Funcional */}
          {showParityTable && (
            <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10 bg-[#0a0c13]">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.03] text-white/80 font-bold uppercase tracking-wider text-[10px]">
                    <th className="p-3.5">Función o Característica</th>
                    <th className="p-3.5 text-center">Demo</th>
                    <th className="p-3.5 text-center">Starter</th>
                    <th className="p-3.5 text-center text-emerald-400">Pro</th>
                    <th className="p-3.5 text-center">Deluxe</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06] text-white/70">
                  {FUNCTIONAL_PARITY_ROWS.map((row, i) => (
                    <tr key={i} className="hover:bg-white/[0.02]">
                      <td className="p-3.5 font-medium text-white">{row.feature}</td>
                      <td className="p-3.5 text-center font-mono font-bold">{row.demo}</td>
                      <td className="p-3.5 text-center font-mono font-bold">{row.starter}</td>
                      <td className="p-3.5 text-center font-mono font-bold text-emerald-300">{row.pro}</td>
                      <td className="p-3.5 text-center font-mono font-bold">{row.deluxe}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Nota aclaratoria sobre conexión de cuentas */}
          <div className="mt-6 p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] flex items-start gap-3 text-xs text-white/50">
            <svg className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <p>
              <strong>Aclaración de conexión:</strong> Tener acceso completo no significa que las conexiones estén ya autorizadas sin la intervención del titular. El cliente debe conectar su propia línea comercial de WhatsApp o sus cuentas de correo cuando corresponda mediante el código QR seguro.
            </p>
          </div>
        </div>

        {/* ========================================================
            5TO PLAN: SECCIÓN SEPARADA — SOLO CORREO
            ======================================================== */}
        <div className="mt-14 rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/[0.06] via-[#10141f] to-[#0c0e17] p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300 mb-3">
                ✉️ Modalidad Especializada
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {EMAIL_ONLY_PLAN.sectionTitle}
              </h3>
              <p className="mt-1 text-sm font-semibold text-cyan-300">
                Plan {EMAIL_ONLY_PLAN.name} · {EMAIL_ONLY_PLAN.benefit}
              </p>
              <p className="mt-3 text-xs sm:text-sm text-white/60 leading-relaxed">
                {EMAIL_ONLY_PLAN.sectionSubtitle}
              </p>

              {/* Puntos clave */}
              <ul className="mt-4 grid gap-2 sm:grid-cols-2 text-xs text-white/75">
                {EMAIL_ONLY_PLAN.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold shrink-0">•</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Caja de Acción y Precio Pendiente */}
            <div className="rounded-2xl border border-cyan-500/40 bg-black/50 p-6 text-center w-full sm:w-auto shrink-0 shadow-lg min-w-[280px]">
              <span className="block text-xs font-bold uppercase tracking-widest text-white/50 mb-1">
                Cupo Asignado
              </span>
              <span className="text-xl sm:text-2xl font-black text-cyan-300 font-mono block mb-2">
                {EMAIL_ONLY_PLAN.aiCreditsLabel}
              </span>
              <div className="p-2.5 rounded-xl border border-white/10 bg-white/[0.03] mb-4">
                <span className="text-xs text-white/60 block">Tarifa comercial:</span>
                <span className="text-sm font-black text-amber-300">
                  {EMAIL_ONLY_PLAN.priceLabel}
                </span>
              </div>
              <button
                type="button"
                onClick={handleEmailPlanAction}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 px-6 py-3 text-xs font-black text-slate-950 transition-all hover:scale-[1.02] shadow-lg shadow-cyan-500/25 cursor-pointer"
              >
                <span>{EMAIL_ONLY_PLAN.ctaText}</span>
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <span className="block text-[10px] text-white/40 mt-2">
                Sin checkout automático · Atención directa por WhatsApp
              </span>
            </div>
          </div>
        </div>

        {/* ========================================================
            BANNER EMPRESAS (+10 USUARIOS / EQUIPOS GRANDES)
            ======================================================== */}
        <div className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-r from-white/[0.04] via-emerald-500/[0.05] to-cyan-500/[0.04] p-6 sm:p-10 backdrop-blur-md">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 mb-3">
                Equipos y Empresas
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                {ENTERPRISE_CUSTOM_PLAN.title}
              </h3>
              <p className="mt-2 text-sm text-white/60 leading-relaxed">
                {ENTERPRISE_CUSTOM_PLAN.description}
              </p>
            </div>
            <button
              type="button"
              onClick={handleEnterpriseContact}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 px-6 sm:px-8 py-3.5 text-sm font-black text-slate-950 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/25 shrink-0 cursor-pointer"
            >
              <span>{ENTERPRISE_CUSTOM_PLAN.ctaText}</span>
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* ========================================================
            EXPLICACIÓN TRANSPARENTE DE CRÉDITOS IA (ASISTIDA)
            ======================================================== */}
        <div className="mt-16 sm:mt-24">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              {AI_CREDITS_POLICY.title}
            </h3>
            <p className="mt-2 text-sm text-white/50">
              {AI_CREDITS_POLICY.subtitle}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {AI_CREDITS_POLICY.items.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/[0.08] bg-[#12121a]/90 p-5 hover:border-white/20 transition-all"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400 shrink-0">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-bold text-white">{item.title}</h4>
                </div>
                <p className="text-xs text-white/60 leading-relaxed pl-9">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-xs text-white/40">
            * Los cupos se asignan mensualmente por empresa (14 días en Demo). Errores de conexión o reintentos técnicos nunca descuentan créditos duplicados.
          </p>
        </div>
      </div>
    </section>
  );
}
