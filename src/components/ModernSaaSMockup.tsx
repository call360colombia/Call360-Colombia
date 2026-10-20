"use client";

import React, { useState } from "react";

interface ModernSaaSMockupProps {
  variant?: "hero" | "whatsapp" | "campaigns";
  className?: string;
}

export default function ModernSaaSMockup({
  variant = "hero",
  className = "",
}: ModernSaaSMockupProps) {
  const [activeTab, setActiveTab] = useState<"chat" | "campaigns" | "pipeline">("chat");

  return (
    <div
      className={`relative rounded-2xl md:rounded-3xl border border-white/10 bg-[#0c0c14]/90 p-1 md:p-2 shadow-2xl shadow-cyan-500/10 backdrop-blur-2xl transition-all duration-500 hover:border-cyan-500/30 group ${className}`}
    >
      {/* Ambient Glows */}
      <div className="absolute -top-12 -right-12 h-44 w-44 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 h-44 w-44 rounded-full bg-emerald-500/15 blur-3xl pointer-events-none" />

      {/* Mac Browser Header */}
      <div className="flex items-center justify-between border-b border-white/[0.08] px-3.5 py-2.5 md:px-5 md:py-3 bg-white/[0.02] rounded-t-xl md:rounded-t-2xl">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]/80 border border-[#e0443e]/40 shadow-sm" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]/80 border border-[#dea123]/40 shadow-sm" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]/80 border border-[#1aab29]/40 shadow-sm" />
          <div className="hidden sm:flex items-center gap-1.5 ml-3 rounded-md bg-white/[0.05] border border-white/[0.06] px-2.5 py-0.5 text-[11px] font-mono text-white/50">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-emerald-400">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            app.call360colombia.site/crm
          </div>
        </div>

        {/* Live Status Badge */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-[10px] md:text-xs font-bold text-emerald-400 tracking-wide uppercase">
            WhatsApp Conectado · 4 Asesores
          </span>
        </div>
      </div>

      {/* Main SaaS Window Body */}
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[380px] md:min-h-[420px] bg-[#09090f]/90 rounded-b-xl md:rounded-b-2xl overflow-hidden text-left">
        {/* Sidebar Nav (Mini) */}
        <div className="hidden md:flex md:col-span-1 flex-col items-center justify-between py-4 border-r border-white/[0.06] bg-[#0c0c14]/50">
          <div className="flex flex-col gap-4">
            <button
              onClick={() => setActiveTab("chat")}
              title="Bandeja Multicanal"
              className={`p-2.5 rounded-xl transition-all ${
                activeTab === "chat"
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                  : "text-white/40 hover:text-white hover:bg-white/[0.05]"
              }`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </button>
            <button
              onClick={() => setActiveTab("campaigns")}
              title="Campañas de Difusión"
              className={`p-2.5 rounded-xl transition-all ${
                activeTab === "campaigns"
                  ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                  : "text-white/40 hover:text-white hover:bg-white/[0.05]"
              }`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
            <button
              onClick={() => setActiveTab("pipeline")}
              title="Pipeline de Ventas"
              className={`p-2.5 rounded-xl transition-all ${
                activeTab === "pipeline"
                  ? "bg-violet-500/20 text-violet-400 border border-violet-500/30"
                  : "text-white/40 hover:text-white hover:bg-white/[0.05]"
              }`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
              </svg>
            </button>
          </div>
          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-cyan-500 to-emerald-500 flex items-center justify-center text-xs font-black text-black">
            JD
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "chat" && (
          <>
            {/* Conversation List */}
            <div className="hidden sm:block md:col-span-4 border-r border-white/[0.06] p-3 space-y-2 bg-[#0d0d16]/40">
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] px-1">
                <span className="text-xs font-bold uppercase tracking-wider text-white/60">
                  Chats Activos (18)
                </span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">
                  En Vivo
                </span>
              </div>

              {/* Chat Item 1 (Selected) */}
              <div className="p-2.5 rounded-xl bg-gradient-to-r from-emerald-500/15 to-transparent border border-emerald-500/30 shadow-sm cursor-pointer">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-emerald-500/20 text-emerald-300 font-bold flex items-center justify-center text-xs border border-emerald-500/40">
                      CM
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white">Dra. Carolina Martínez</div>
                      <div className="text-[10px] text-white/50">Clínica Dental Chapinero</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-medium">10:42 AM</span>
                </div>
                <p className="mt-2 text-xs text-white/80 line-clamp-1">
                  "Perfecto, cerremos el plan anual con los 3 números..."
                </p>
                <div className="mt-2 flex items-center gap-1.5">
                  <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-semibold">
                    Cotización Enviada
                  </span>
                  <span className="text-[9px] bg-white/[0.06] text-white/60 px-1.5 py-0.5 rounded">
                    $1.800.000 COP
                  </span>
                </div>
              </div>

              {/* Chat Item 2 */}
              <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.05] transition-all cursor-pointer">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-cyan-500/20 text-cyan-300 font-bold flex items-center justify-center text-xs">
                      AG
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white/90">Andrés Gutiérrez</div>
                      <div className="text-[10px] text-white/40">Distribuciones del Valle</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-white/40">10:35 AM</span>
                </div>
                <p className="mt-2 text-xs text-white/50 line-clamp-1">
                  "¿Cuántos agentes pueden atender al tiempo?"
                </p>
              </div>

              {/* Chat Item 3 */}
              <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:bg-white/[0.05] transition-all cursor-pointer">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-violet-500/20 text-violet-300 font-bold flex items-center justify-center text-xs">
                      VR
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white/90">Valeria Rojas</div>
                      <div className="text-[10px] text-white/40">Inmobiliaria Sabana</div>
                    </div>
                  </div>
                  <span className="text-[10px] text-white/40">09:58 AM</span>
                </div>
                <p className="mt-2 text-xs text-white/50 line-clamp-1">
                  "Campaña enviada a 840 propietarios con éxito."
                </p>
              </div>
            </div>

            {/* Active Chat Conversation */}
            <div className="col-span-1 sm:col-span-8 md:col-span-7 flex flex-col justify-between p-3.5 md:p-4 bg-radial from-[#12121e]/80 to-[#0a0a10]">
              {/* Header Contact */}
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <div className="flex items-center gap-2.5">
                  <div className="h-9 w-9 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 flex items-center justify-center text-xs font-black">
                    CM
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs md:text-sm font-bold text-white">Dra. Carolina Martínez</span>
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </div>
                    <div className="text-[10px] text-white/50">+57 314 892 4110 · Asesor: Juan David Meza</div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-1 text-[10px] font-bold text-emerald-300">
                    Lead Calificado
                  </span>
                </div>
              </div>

              {/* Chat Thread Messages */}
              <div className="py-4 space-y-3.5">
                {/* Incoming Message */}
                <div className="max-w-[85%] md:max-w-[75%] rounded-2xl rounded-tl-sm bg-white/[0.06] border border-white/[0.08] p-3 text-xs text-white/90 shadow-md">
                  <p className="leading-relaxed">
                    Hola Juan David, revisé la propuesta que me diste por WhatsApp. ¿La plataforma ya incluye la cadencia anti-bloqueo para nuestras campañas de citas odontológicas?
                  </p>
                  <span className="mt-1 block text-[9px] text-white/40 text-right">10:40 AM</span>
                </div>

                {/* Outgoing Message */}
                <div className="ml-auto max-w-[85%] md:max-w-[75%] rounded-2xl rounded-tr-sm bg-gradient-to-r from-emerald-600/30 to-cyan-600/30 border border-emerald-500/40 p-3 text-xs text-white shadow-lg shadow-emerald-950/30">
                  <p className="leading-relaxed font-medium">
                    ¡Totalmente Carolina! Tienes control de despacho regulado (1 mensaje cada 8-15 segundos con variables de nombre personalizadas). Cero riesgo de baneo y tus 3 recepcionistas atienden desde el mismo número.
                  </p>
                  <div className="mt-2.5 rounded-xl bg-black/40 border border-white/10 p-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px] font-black">
                        PDF
                      </div>
                      <span className="text-[11px] font-semibold text-white/90">Propuesta_Call360_Clinica.pdf</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-bold">1.2 MB</span>
                  </div>
                  <span className="mt-1 block text-[9px] text-emerald-300/80 text-right">10:41 AM · Entregado y Leído ✓✓</span>
                </div>

                {/* Incoming Confirmation */}
                <div className="max-w-[85%] md:max-w-[75%] rounded-2xl rounded-tl-sm bg-white/[0.06] border border-white/[0.08] p-3 text-xs text-white/90 shadow-md">
                  <p className="leading-relaxed">
                    ¡Excelente! Cerremos con el plan anual con el 50% de descuento. ¿A qué cuenta hago la transferencia?
                  </p>
                  <span className="mt-1 block text-[9px] text-white/40 text-right">10:42 AM</span>
                </div>
              </div>

              {/* Chat Input Bar */}
              <div className="mt-2 flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] p-1.5 md:p-2">
                <input
                  type="text"
                  readOnly
                  value="Escribe una respuesta o usa plantilla rápida (/cotizar, /horarios)..."
                  className="w-full bg-transparent px-2 text-xs text-white/40 focus:outline-none"
                />
                <button
                  aria-label="Enviar mensaje de demostración"
                  className="h-7 px-3 rounded-lg bg-emerald-500 text-black text-xs font-bold hover:bg-emerald-400 transition-colors flex items-center gap-1 shadow-md"
                >
                  <span>Enviar</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </div>
            </div>
          </>
        )}

        {/* Tab Campaigns */}
        {activeTab === "campaigns" && (
          <div className="col-span-12 p-6 md:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
              <div>
                <h3 className="text-base font-bold text-white">Centro de Difusión &amp; Campañas</h3>
                <p className="text-xs text-white/50">Envíos masivos regulados sin riesgo de bloqueo por WhatsApp</p>
              </div>
              <span className="rounded-full bg-cyan-500/15 border border-cyan-500/30 px-3.5 py-1 text-xs font-bold text-cyan-300 self-start">
                Cadencia Inteligente Activa
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-xs text-white/50 font-medium">Contactos Alcanzados</div>
                <div className="text-2xl font-black text-white mt-1">12.450</div>
                <div className="text-[10px] text-emerald-400 mt-1 font-semibold">↑ 98.4% entrega efectiva</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-xs text-white/50 font-medium">Tasa de Respuesta</div>
                <div className="text-2xl font-black text-cyan-400 mt-1">34.2%</div>
                <div className="text-[10px] text-cyan-300 mt-1 font-semibold">4.257 prospectos iniciaron chat</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
                <div className="text-xs text-white/50 font-medium">Tiempo Promedio Respuesta</div>
                <div className="text-2xl font-black text-emerald-400 mt-1">18 seg</div>
                <div className="text-[10px] text-white/40 mt-1 font-semibold">Atención multiagente inmediata</div>
              </div>
            </div>
          </div>
        )}

        {/* Tab Pipeline */}
        {activeTab === "pipeline" && (
          <div className="col-span-12 p-6 md:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <div>
                <h3 className="text-base font-bold text-white">Pipeline de Oportunidades</h3>
                <p className="text-xs text-white/50">Visibilidad comercial completa del ciclo de venta</p>
              </div>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
                Total en curso: $42.500.000 COP
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3">
                <div className="text-xs font-bold text-white/60 uppercase tracking-wider">Por Contactar (14)</div>
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                  <div className="text-xs font-bold text-white">Ferretería Central</div>
                  <div className="text-[11px] text-cyan-400 mt-1 font-semibold">$1.200.000 COP · Plan Anual</div>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3">
                <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider">En Negociación (8)</div>
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                  <div className="text-xs font-bold text-white">Clínica Chapinero</div>
                  <div className="text-[11px] text-emerald-400 mt-1 font-semibold">$1.800.000 COP · Listo para pago</div>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] space-y-3">
                <div className="text-xs font-bold text-violet-400 uppercase tracking-wider">Cerrados Este Mes (22)</div>
                <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/30">
                  <div className="text-xs font-bold text-white">Inmobiliaria Sabana</div>
                  <div className="text-[11px] text-violet-300 mt-1 font-semibold">$3.600.000 COP · Facturado</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Floating Stats Pill */}
      <div className="hidden sm:flex items-center justify-between px-4 py-2 mt-2 bg-white/[0.02] rounded-xl text-[11px] text-white/50">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          <span>Sincronización en tiempo real con base de datos local</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-emerald-400 font-bold">100% Código Propio</span>
          <span>•</span>
          <span className="text-white/70">Diseñado en Bogotá, Colombia</span>
        </div>
      </div>
    </div>
  );
}
