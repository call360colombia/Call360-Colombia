"use client";

import { useState } from "react";
import { formatCOP, buildWhatsAppUrl } from "@/lib/formData";

export default function RoiSavingsCalculator() {
  const [agents, setAgents] = useState(3);
  const [hasWhatsApp, setHasWhatsApp] = useState(true);
  const [hasCalls, setHasCalls] = useState(true);
  const [hasWeb, setHasWeb] = useState(false);

  const [timeframe, setTimeframe] = useState<"monthly" | "yearly">("monthly");

  // Cost estimates with foreign/traditional tools in USD converted to COP
  // Traditional: USD $45/agent CRM (HubSpot/Zendesk) + USD $30/agent Twilio telephony + variable minutes + USD $20/month WhatsApp API = ~350,000 COP/agent + fixed fees
  const foreignCostPerAgent = 360000;
  const foreignBaseFee = 250000;
  const traditionalTotal = agents * foreignCostPerAgent + (hasWhatsApp ? foreignBaseFee : 100000) + (hasCalls ? 150000 : 0);

  // Call360 calculation:
  // WhatsApp CRM: 1 user = 120k, 4 users = 240k, 10 users = 500k, extra = 50k
  let call360Wa = 0;
  if (hasWhatsApp) {
    if (agents <= 1) call360Wa = 120000;
    else if (agents <= 4) call360Wa = 240000;
    else if (agents <= 10) call360Wa = 500000;
    else call360Wa = 500000 + (agents - 10) * 50000;
  }

  // Call360 Calls: 120,000 per user with unlimited minutes to Colombia
  const call360Calls = hasCalls ? agents * 120000 : 0;

  // Web Starter (one-time amortized or monthly comparison)
  const call360Total = (hasWhatsApp || hasCalls) ? (call360Wa + call360Calls) : 120000;

  const monthlySavings = Math.max(0, traditionalTotal - call360Total);
  const yearlySavings = monthlySavings * 12;
  const percentageSavings = Math.round((monthlySavings / traditionalTotal) * 100);

  const displayTraditional = timeframe === "yearly" ? traditionalTotal * 12 : traditionalTotal;
  const displayCall360 = timeframe === "yearly" ? call360Total * 12 : call360Total;
  const displaySavings = timeframe === "yearly" ? yearlySavings : monthlySavings;

  const handleWhatsAppQuote = () => {
    const services = [
      hasWhatsApp ? "CRM WhatsApp Multiagente" : null,
      hasCalls ? "CRM Llamadas con Minutos Ilimitados" : null,
      hasWeb ? "Página Web en 72h" : null,
    ].filter(Boolean).join(" + ");

    const text = `Hola Call360! Usé la calculadora en la web:
- Asesores: ${agents}
- Servicios de interés: ${services || "Ecosistema completo"}
- Cotización Call360 estimada: ${formatCOP(call360Total)}/mes
- Ahorro mensual proyectado: ${formatCOP(monthlySavings)}/mes (${percentageSavings}%)
- Ahorro anual estimado: ${formatCOP(yearlySavings)}/año

Quiero activar este plan o solicitar una asesoría personalizada.`;

    window.open(buildWhatsAppUrl(text), "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden" id="calculadora-ahorro">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-violet-500/10 to-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-emerald-400 mb-4 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Calculadora de Retorno &amp; Ahorro Real en Colombia
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            ¿Cuánto dinero ahorras al mes con{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
              Call360 Colombia?
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed">
            Compara pagar licencias extranjeras en dólares (con TRM variable y minutos cobrados por segundo) frente a la tarifa plana en pesos colombianos de Call360.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 items-stretch">
          {/* Controls Panel */}
          <div className="lg:col-span-7 rounded-3xl border border-white/10 bg-[#12121a]/90 backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-white/10 mb-6">
                <span className="text-sm font-bold uppercase tracking-wider text-white/60">
                  Configura tu equipo
                </span>
                <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                  Tarifas en Pesos Colombianos (COP)
                </span>
              </div>

              {/* Slider Asesores */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-400">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    Número de asesores comerciales:
                  </label>
                  <span className="text-xl sm:text-2xl font-black text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded-xl">
                    {agents} {agents === 1 ? "asesor" : "asesores"}
                  </span>
                </div>

                <input
                  type="range"
                  min="1"
                  max="25"
                  value={agents}
                  onChange={(e) => setAgents(parseInt(e.target.value, 10))}
                  className="w-full h-3 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-400 transition-all"
                />

                <div className="flex justify-between text-[11px] text-white/40 mt-2 font-mono">
                  <span>1 asesor</span>
                  <span>5 asesores</span>
                  <span>10 asesores</span>
                  <span>15 asesores</span>
                  <span>25+ asesores</span>
                </div>
              </div>

              {/* Checkboxes de módulos */}
              <div className="space-y-3 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-white/50 block mb-2">
                  Selecciona los módulos a incluir:
                </span>

                <button
                  type="button"
                  onClick={() => setHasWhatsApp(!hasWhatsApp)}
                  className={`w-full flex items-center justify-between p-3.5 sm:p-4 rounded-2xl border transition-all text-left ${
                    hasWhatsApp
                      ? "border-emerald-500/40 bg-emerald-500/10 text-white"
                      : "border-white/10 bg-white/[0.02] text-white/50 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`flex h-6 w-6 items-center justify-center rounded-lg text-xs font-black ${hasWhatsApp ? "bg-emerald-500 text-black" : "bg-white/10 text-white/40"}`}>
                      {hasWhatsApp ? "✓" : ""}
                    </span>
                    <div>
                      <span className="text-sm sm:text-base font-bold text-white block">
                        CRM WhatsApp Multiagente
                      </span>
                      <span className="text-xs text-white/60">
                        Varios asesores en un número, campañas masivas, respuestas rápidas y crédito IA.
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-400 shrink-0">
                    Desde $120.000/mes
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setHasCalls(!hasCalls)}
                  className={`w-full flex items-center justify-between p-3.5 sm:p-4 rounded-2xl border transition-all text-left ${
                    hasCalls
                      ? "border-violet-500/40 bg-violet-500/10 text-white"
                      : "border-white/10 bg-white/[0.02] text-white/50 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`flex h-6 w-6 items-center justify-center rounded-lg text-xs font-black ${hasCalls ? "bg-violet-500 text-white" : "bg-white/10 text-white/40"}`}>
                      {hasCalls ? "✓" : ""}
                    </span>
                    <div>
                      <span className="text-sm sm:text-base font-bold text-white block">
                        CRM Llamadas &amp; Marcación Predictiva
                      </span>
                      <span className="text-xs text-white/60">
                        Minutos ilimitados a Colombia, grabación, supervisión y 3x más contactos al día.
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-violet-400 shrink-0">
                    $120.000/agente/mes
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setHasWeb(!hasWeb)}
                  className={`w-full flex items-center justify-between p-3.5 sm:p-4 rounded-2xl border transition-all text-left ${
                    hasWeb
                      ? "border-cyan-500/40 bg-cyan-500/10 text-white"
                      : "border-white/10 bg-white/[0.02] text-white/50 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`flex h-6 w-6 items-center justify-center rounded-lg text-xs font-black ${hasWeb ? "bg-cyan-500 text-black" : "bg-white/10 text-white/40"}`}>
                      {hasWeb ? "✓" : ""}
                    </span>
                    <div>
                      <span className="text-sm sm:text-base font-bold text-white block">
                        Página Web Profesional en 72 Horas
                      </span>
                      <span className="text-xs text-white/60">
                        Diseño corporativo, SEO, hosting y botón directo a WhatsApp. Mockup gratis previo.
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold text-cyan-400 shrink-0">
                    Desde $350.000 único
                  </span>
                </button>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-white/50">
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-400">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Factura electrónica con NIT
              </span>
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-400">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Sin cláusula de permanencia
              </span>
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-400">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                Soporte directo en Bogotá
              </span>
            </div>
          </div>

          {/* Results Comparison Card */}
          <div className="lg:col-span-5 rounded-3xl border-2 border-emerald-500/40 bg-gradient-to-b from-emerald-500/[0.12] via-[#0e171b] to-[#0c0d14] p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            {/* Top Badge */}
            <div className="absolute top-0 right-0 bg-emerald-500 text-black font-black text-xs uppercase px-4 py-1.5 rounded-bl-2xl shadow-lg">
              {percentageSavings}% DE AHORRO
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 block">
                  Balance Económico
                </span>
                {/* Timeframe selector */}
                <div className="inline-flex rounded-full border border-white/20 bg-black/40 p-1 text-xs">
                  <button
                    type="button"
                    onClick={() => setTimeframe("monthly")}
                    className={`px-3 py-1 rounded-full font-bold transition-all ${
                      timeframe === "monthly"
                        ? "bg-emerald-500 text-black shadow-sm"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    Mensual
                  </button>
                  <button
                    type="button"
                    onClick={() => setTimeframe("yearly")}
                    className={`px-3 py-1 rounded-full font-bold transition-all ${
                      timeframe === "yearly"
                        ? "bg-emerald-500 text-black shadow-sm"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    Anual (12 Meses)
                  </button>
                </div>
              </div>

              <h3 className="text-2xl font-black text-white mb-5">
                Resultado de tu Operación {timeframe === "yearly" ? "Anual" : "Mensual"}
              </h3>

              {/* Side-by-side cost breakdown */}
              <div className="space-y-4 mb-6">
                <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-4">
                  <div className="flex justify-between items-center text-xs text-white/50 mb-1">
                    <span>Otras herramientas en USD + telefonía por minuto:</span>
                    <span className="font-mono text-red-400 line-through font-bold">
                      {formatCOP(displayTraditional)}/{timeframe === "yearly" ? "año" : "mes"}
                    </span>
                  </div>
                  <p className="text-[11px] text-white/40">
                    *HubSpot/Zendesk/Twilio cobrados con TRM fluctuante, cargos por mensaje y cobro por segundo.
                  </p>
                </div>

                <div className="rounded-2xl border-2 border-emerald-500/40 bg-emerald-500/10 p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 block">
                        Con Call360 Colombia:
                      </span>
                      <span className="text-xs text-white/60">
                        Tarifa plana en COP • Todo incluido
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">
                        {formatCOP(displayCall360)}
                      </span>
                      <span className="text-xs text-white/50 block">/{timeframe === "yearly" ? "año" : "mes"}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Big Savings Metric */}
              <div className="rounded-2xl border border-emerald-500/30 bg-black/50 p-5 text-center mb-6 shadow-inner">
                <span className="text-xs font-bold uppercase tracking-wider text-white/50 block mb-1">
                  Dinero neto que se queda en tu empresa:
                </span>
                <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent font-mono">
                  +{formatCOP(displaySavings)} / {timeframe === "yearly" ? "año" : "mes"}
                </div>
                <div className="text-xs text-emerald-300 font-semibold mt-1">
                  {timeframe === "monthly" 
                    ? `Ahorro proyectado de ${formatCOP(yearlySavings)} al año garantizado` 
                    : `Equivale a ${formatCOP(monthlySavings)} guardados mes a mes`}
                </div>
              </div>
            </div>

            {/* Direct CTA */}
            <div>
              <button
                type="button"
                onClick={handleWhatsAppQuote}
                className="w-full min-h-[54px] flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-emerald-400 hover:from-emerald-400 hover:to-emerald-300 text-black font-black text-base shadow-xl shadow-emerald-500/30 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Activar este plan con ahorro de {formatCOP(monthlySavings)}</span>
              </button>
              <p className="text-[11px] text-white/50 text-center mt-3">
                Hablas directamente con Juan David Meza • Sin intermediarios ni compromisos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
