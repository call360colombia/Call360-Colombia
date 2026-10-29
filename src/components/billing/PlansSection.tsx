'use client';

/**
 * components/billing/PlansSection.tsx
 *
 * Sección Comercial Oficial de Planes, Precios, Canales y Créditos IA — Call360 Colombia
 *
 * REGLAS COMERCIALES APROBADAS:
 * - Todos los precios son en COP por 1 usuario individual (sin paquetes grupales base).
 * - A partir de 10 usuarios aplica propuesta empresarial personalizada.
 * - Selector Mensual / Anual 100% responsive en móvil y escritorio.
 * - Pago total anual visible, con equivalente mensual de referencia claramente etiquetado.
 * - Los créditos IA se renuevan mensualmente de forma fija, incluso en planes anuales.
 * - USD describe únicamente el valor aproximado del beneficio IA incluido.
 * - Operación bajo IA asistida (tú revisas y decides el envío).
 */

import React, { useState } from 'react';
import Link from 'next/link';
import { PlanCard3D } from './PlanCard3D';
import {
  COMMERCIAL_PLANS,
  PLANS_SECTION_HEADER,
  FUNCTIONAL_PARITY_ROWS,
  ENTERPRISE_CUSTOM_PLAN,
  AI_CREDITS_POLICY,
  type CommercialPlan,
  type BillingPeriod,
} from '@/lib/commercialCatalog';
import { buildWhatsAppUrl } from '@/lib/formData';
import { DEMO_PATH } from '@/lib/siteUrls';

export default function PlansSection() {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>('monthly');
  const [showParityTable, setShowParityTable] = useState(false);

  const handlePlanAction = (plan: CommercialPlan) => {
    const periodText =
      billingPeriod === 'annual'
        ? `plan anual (${plan.pricing.annual.formatted} COP/año)`
        : `plan mensual (${plan.pricing.monthly.formatted} COP/mes)`;
    const message = `Hola Call360, quiero contratar el ${plan.name} en ${periodText} para 1 usuario con ${plan.aiCreditsLabel}.`;
    const url = buildWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleEnterpriseContact = () => {
    const url = buildWhatsAppUrl(ENTERPRISE_CUSTOM_PLAN.waMessage);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="planes" className="relative py-20 sm:py-28 lg:py-32 overflow-hidden">
      {/* Fondos y resplandores controlados */}
      <div className="absolute inset-0 bg-[#0c0d14]/85" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ========================================================
            ENCABEZADO OFICIAL
            ======================================================== */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
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

          {/* ========================================================
              SELECTOR MENSUAL / ANUAL (RESPONSIVE MÓVIL Y ESCRITORIO)
              ======================================================== */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="inline-flex items-center p-1.5 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md shadow-inner w-full sm:w-auto max-w-xs sm:max-w-none">
              <button
                type="button"
                onClick={() => setBillingPeriod('monthly')}
                className={`flex-1 sm:flex-none px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all min-h-[44px] cursor-pointer ${
                  billingPeriod === 'monthly'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md'
                    : 'text-white/60 hover:text-white'
                }`}
                aria-pressed={billingPeriod === 'monthly'}
              >
                Facturación Mensual
              </button>
              <button
                type="button"
                onClick={() => setBillingPeriod('annual')}
                className={`flex-1 sm:flex-none px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all min-h-[44px] cursor-pointer flex items-center justify-center gap-1.5 ${
                  billingPeriod === 'annual'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md'
                    : 'text-white/60 hover:text-white'
                }`}
                aria-pressed={billingPeriod === 'annual'}
              >
                <span>Facturación Anual</span>
                <span className="hidden xs:inline-block px-1.5 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider bg-amber-400 text-slate-950">
                  Ahorro
                </span>
              </button>
            </div>

            {billingPeriod === 'annual' && (
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 bg-amber-500/15 border border-amber-400/30 px-3 py-1.5 rounded-full animate-fade-in">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                Pago total anual visible · Hasta 50% de ahorro por usuario
              </span>
            )}
          </div>
        </div>

        {/* ========================================================
            GRID DE LAS 4 TARJETAS 3D + DETALLE COMERCIAL COMPLETO
            ======================================================== */}
        <div className="grid gap-6 sm:gap-6 md:grid-cols-2 lg:grid-cols-4 items-stretch">
          {COMMERCIAL_PLANS.map((plan) => {
            const pricing = plan.pricing[billingPeriod];

            return (
              <div
                key={plan.id}
                className={`flex flex-col justify-between rounded-3xl p-4 sm:p-5 border transition-all duration-300 backdrop-blur-sm ${
                  plan.isRecommended
                    ? 'border-emerald-500/60 bg-gradient-to-b from-emerald-500/[0.08] via-[#121422] to-[#0e101b] shadow-2xl shadow-emerald-950/40 ring-1 ring-emerald-400/40'
                    : plan.isBestOffer
                      ? 'border-amber-500/50 bg-gradient-to-b from-amber-500/[0.08] via-[#16131c] to-[#0e101b] shadow-2xl shadow-amber-950/40 ring-1 ring-amber-400/30'
                      : 'border-white/[0.1] bg-[#12121a]/95 hover:border-white/20'
                }`}
              >
                {/* 1. Tarjeta 3D Física Interactiva */}
                <div className="w-full mb-4">
                  <PlanCard3D
                    plan={plan}
                    billingPeriod={billingPeriod}
                    currency="COP"
                    onActionClick={handlePlanAction}
                  />
                </div>

                {/* 2. Bloque Descriptivo Completo */}
                <div className="flex-1 flex flex-col justify-between pt-1">
                  <div>
                    {/* Encabezado: Nombre del Plan + Etiqueta Obligatoria */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-lg font-black uppercase tracking-wider text-white">
                        {plan.name}
                      </span>
                      {plan.badge && (
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                            plan.isBestOffer
                              ? 'bg-amber-400/20 text-amber-300 border border-amber-300/60'
                              : 'bg-emerald-500/20 text-emerald-300 border border-emerald-400/60'
                          }`}
                        >
                          {plan.isBestOffer ? '💎 ' : '🔥 '}
                          {plan.badge}
                        </span>
                      )}
                    </div>

                    {/* Canales incluidos claramente visibles */}
                    <div className="mb-3 p-2.5 rounded-xl border border-white/[0.08] bg-white/[0.02]">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-white/50 block mb-0.5">
                        Canales incluidos:
                      </span>
                      <p className="text-xs font-semibold text-cyan-300 leading-snug">
                        {plan.channelsDetail}
                      </p>
                    </div>

                    {/* Precios: Pago Total y Referencia Mensual */}
                    <div className="mb-3 p-3 rounded-2xl border border-white/[0.08] bg-black/40">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xl sm:text-2xl font-black text-white font-mono">
                          {pricing.formatted}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-white/60">
                          COP
                        </span>
                      </div>
                      <span className="text-[11px] text-white/50 block font-medium">
                        {pricing.period}
                      </span>
                      {pricing.referenceMonthly && (
                        <div className="mt-1.5 pt-1.5 border-t border-white/10 flex items-center justify-between text-[11px]">
                          <span className="text-white/50">Equivalente mensual:</span>
                          <span className="font-bold text-emerald-400 font-mono">
                            {pricing.referenceMonthly.formatted} / mes (ref)
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Cupo de Créditos IA + Beneficio en USD */}
                    <div className="mb-3 rounded-2xl border border-cyan-500/30 bg-cyan-500/[0.06] p-3">
                      <div className="flex items-center justify-between gap-1 mb-1">
                        <span className="text-xs font-black uppercase tracking-wider text-cyan-300">
                          {plan.aiCreditsLabel}
                        </span>
                        <span className="text-[9px] font-bold uppercase text-white/50">
                          Fija mensual
                        </span>
                      </div>
                      <p className="text-[11px] font-semibold text-white/80">
                        {plan.aiBenefitUsd}
                      </p>
                      <p className="text-[10px] text-white/50 mt-0.5 leading-snug">
                        * Los créditos IA se renuevan cada mes, incluso en suscripciones anuales.
                      </p>
                    </div>

                    {/* Base de cobro por 1 usuario */}
                    <div className="flex items-center gap-1.5 text-[11px] text-white/60 mb-3 px-1">
                      <svg className="h-3.5 w-3.5 text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      <span>Tarifa base por 1 usuario individual (sin paquetes base)</span>
                    </div>

                    {/* Lista de características */}
                    <div className="border-t border-white/[0.08] pt-3 mb-4">
                      <span className="block text-[10px] font-black uppercase tracking-wider text-white/50 mb-2">
                        Incluido en el plan:
                      </span>
                      <ul className="space-y-2 text-xs text-white/80">
                        {plan.features.map((f, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <svg className="h-4 w-4 text-emerald-400 mt-0.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                            <span className="leading-snug">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Botón de Acción Principal */}
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => handlePlanAction(plan)}
                      className={`inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-xs font-black transition-all shadow-lg active:scale-[0.98] cursor-pointer ${
                        plan.isBestOffer
                          ? 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 text-slate-950 shadow-amber-500/30 hover:brightness-110'
                          : plan.isRecommended
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-400 hover:to-teal-400 border border-emerald-300/40 shadow-emerald-500/30'
                            : 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white hover:from-cyan-500 hover:to-teal-500 border border-cyan-400/40 shadow-cyan-600/30'
                      }`}
                    >
                      <span>{plan.ctaLabel}</span>
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================
            SECCIÓN CORPORATIVA (A PARTIR DE 10 USUARIOS)
            ======================================================== */}
        <div className="mt-12 rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-white/[0.04] via-cyan-500/[0.08] to-emerald-500/[0.05] p-6 sm:p-10 backdrop-blur-md shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-3xl text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 mb-3">
                {ENTERPRISE_CUSTOM_PLAN.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {ENTERPRISE_CUSTOM_PLAN.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-white/70 leading-relaxed">
                {ENTERPRISE_CUSTOM_PLAN.description}
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-white/60">
                <span className="inline-flex items-center gap-1">✓ Tarifas preferenciales por volumen</span>
                <span className="inline-flex items-center gap-1">✓ Bolsa corporativa de Créditos IA</span>
                <span className="inline-flex items-center gap-1">✓ Soporte e implementación prioritaria</span>
              </div>
            </div>
            <button
              type="button"
              onClick={handleEnterpriseContact}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 px-7 py-4 text-sm font-black text-slate-950 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/25 shrink-0 cursor-pointer"
            >
              <span>{ENTERPRISE_CUSTOM_PLAN.ctaText}</span>
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* ========================================================
            TABLA COMPARATIVA Y PARIDAD FUNCIONAL
            ======================================================== */}
        <div className="mt-14 rounded-3xl border border-white/10 bg-[#10121d]/90 p-6 sm:p-8 backdrop-blur-md">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Comparativa detallada entre planes
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-white/60">
              Revisa los canales, base de cobro por usuario y cupos de créditos IA de cada plan.
            </p>
          </div>

          <div className="text-center mb-6">
            <button
              type="button"
              onClick={() => setShowParityTable((v) => !v)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/15 bg-white/[0.04] text-xs font-bold text-white/80 hover:text-white hover:border-white/30 transition-all cursor-pointer"
            >
              <span>{showParityTable ? 'Ocultar comparativa detallada' : 'Ver tabla comparativa completa'}</span>
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

          {showParityTable && (
            <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#0a0c13]">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.03] text-white/80 font-bold uppercase tracking-wider text-[10px]">
                    <th className="p-3.5">Característica / Plan</th>
                    <th className="p-3.5 text-center">Plan Correo</th>
                    <th className="p-3.5 text-center">Starter</th>
                    <th className="p-3.5 text-center text-emerald-400">Pro (Más vendido)</th>
                    <th className="p-3.5 text-center text-amber-300">Deluxe (Mejor oferta)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.06] text-white/70">
                  {FUNCTIONAL_PARITY_ROWS.map((row, i) => (
                    <tr key={i} className="hover:bg-white/[0.02]">
                      <td className="p-3.5 font-medium text-white">{row.feature}</td>
                      <td className="p-3.5 text-center">{row.correo}</td>
                      <td className="p-3.5 text-center">{row.starter}</td>
                      <td className="p-3.5 text-center font-bold text-emerald-300">{row.pro}</td>
                      <td className="p-3.5 text-center font-bold text-amber-300">{row.deluxe}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Nota de conexión técnica segura */}
          <div className="mt-6 p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] flex items-start gap-3 text-xs text-white/50">
            <svg className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <p>
              <strong>Conexión directa y segura:</strong> El cliente conecta su propia línea de WhatsApp escaneando el código QR seguro desde la aplicación, o sus casillas de correo corporativo mediante configuración estándar. No requiere contratación de APIs externas de terceros.
            </p>
          </div>
        </div>

        {/* ========================================================
            POLÍTICA Y REGLAS CLARAS DE CRÉDITOS IA
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
            * Renovación mensual fija de Créditos IA en todos los planes. Errores de conexión o reintentos técnicos nunca descuentan créditos duplicados.
          </p>
        </div>
      </div>
    </section>
  );
}
