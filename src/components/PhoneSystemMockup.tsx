"use client";

import React, { useState } from "react";

interface PhoneSystemMockupProps {
  className?: string;
}

export default function PhoneSystemMockup({ className = "" }: PhoneSystemMockupProps) {
  const [activeTab, setActiveTab] = useState<"dialer" | "agents" | "analytics">("dialer");
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div
      className={`relative rounded-2xl md:rounded-3xl border border-white/10 bg-[#0c0c14]/90 p-1 md:p-2 shadow-2xl shadow-violet-500/10 backdrop-blur-2xl transition-all duration-500 hover:border-violet-500/30 group ${className}`}
    >
      {/* Ambient Glow */}
      <div className="absolute -top-12 -right-12 h-44 w-44 rounded-full bg-violet-500/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 h-44 w-44 rounded-full bg-cyan-500/15 blur-3xl pointer-events-none" />

      {/* Header Estilo Consola PBX */}
      <div className="flex items-center justify-between border-b border-white/[0.08] px-3.5 py-2.5 md:px-5 md:py-3 bg-white/[0.02] rounded-t-xl md:rounded-t-2xl">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f56]/80" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]/80" />
          <span className="h-3 w-3 rounded-full bg-[#27c93f]/80" />
          <div className="hidden sm:flex items-center gap-1.5 ml-3 rounded-md bg-white/[0.05] border border-white/[0.06] px-2.5 py-0.5 text-[11px] font-mono text-white/50">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-violet-400">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            pbx.call360colombia.site/telefonia
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 px-2.5 py-0.5 text-[10px] font-bold text-violet-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Troncal SIP Conectada
          </span>
          <span className="hidden sm:inline-flex text-[10px] text-white/40">Bogotá GMT-5</span>
        </div>
      </div>

      {/* Tabs Móviles */}
      <div className="flex sm:hidden border-b border-white/[0.06] bg-[#0c0c14]/70 p-1 text-xs">
        <button
          onClick={() => setActiveTab("dialer")}
          className={`flex-1 py-1.5 rounded-lg text-center font-bold ${
            activeTab === "dialer" ? "bg-violet-500/20 text-violet-400 border border-violet-500/30" : "text-white/50"
          }`}
        >
          Llamada Activa
        </button>
        <button
          onClick={() => setActiveTab("agents")}
          className={`flex-1 py-1.5 rounded-lg text-center font-bold ${
            activeTab === "agents" ? "bg-violet-500/20 text-violet-400 border border-violet-500/30" : "text-white/50"
          }`}
        >
          Agentes
        </button>
        <button
          onClick={() => setActiveTab("analytics")}
          className={`flex-1 py-1.5 rounded-lg text-center font-bold ${
            activeTab === "analytics" ? "bg-violet-500/20 text-violet-400 border border-violet-500/30" : "text-white/50"
          }`}
        >
          Métricas
        </button>
      </div>

      {/* Cuerpo Principal del Mockup */}
      <div className="p-3 sm:p-5 text-left grid gap-4 lg:grid-cols-12 bg-[#09090f]/90 rounded-b-xl md:rounded-b-2xl">
        {/* Panel Izquierdo: Llamada en Curso */}
        <div className={`lg:col-span-7 space-y-3.5 ${activeTab === "dialer" ? "block" : "hidden sm:block"}`}>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:p-5 relative overflow-hidden">
            <div className="absolute top-3 right-3 flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-red-500 animate-ping" />
              <span className="text-[10px] font-mono font-bold text-red-400">REC 00:03:48</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 text-white font-black text-lg shadow-lg shadow-violet-500/30">
                CM
              </div>
              <div className="min-w-0">
                <div className="text-sm sm:text-base font-black text-white truncate">
                  Carlos Mendoza
                </div>
                <div className="text-xs text-white/50 font-mono">
                  +57 312 450 8820 • Distribuidora El Sol
                </div>
              </div>
            </div>

            {/* Onda de Audio Animada en Vivo */}
            <div className="mt-4 p-3 rounded-xl bg-black/40 border border-white/[0.06] flex items-center justify-between gap-1">
              <span className="text-[10px] font-mono text-violet-300">Audio HD (Opus Codec)</span>
              <div className="flex items-center gap-1 h-5">
                {[40, 75, 30, 90, 60, 100, 45, 80, 50, 95, 35, 70, 85, 40].map((h, i) => (
                  <span
                    key={i}
                    className="w-1 bg-gradient-to-t from-violet-500 to-cyan-400 rounded-full animate-pulse"
                    style={{
                      height: `${h}%`,
                      animationDelay: `${i * 90}ms`,
                      animationDuration: "800ms",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Controles de Llamada */}
            <div className="mt-4 flex items-center justify-center gap-3">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all ${
                  isMuted ? "bg-red-500/20 border-red-500/40 text-red-400" : "bg-white/[0.06] border-white/10 text-white hover:bg-white/[0.12]"
                }`}
                title="Silenciar"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" y1="19" x2="12" y2="22" />
                </svg>
              </button>

              <button
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white hover:bg-white/[0.12] transition-all"
                title="Transferir a otro asesor"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 14 20 9 15 4" />
                  <path d="M4 20v-7a4 4 0 0 1 4-4h12" />
                </svg>
              </button>

              <button
                className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-600/30 transition-all"
                title="Finalizar llamada"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91" />
                  <line x1="23" y1="1" x2="1" y2="23" />
                </svg>
              </button>
            </div>
          </div>

          {/* Tipificación Inmediata */}
          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3 text-xs flex items-center justify-between">
            <span className="text-white/60">Tipificación:</span>
            <div className="flex gap-2">
              <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-emerald-300 font-bold">
                ✓ Cotización Enviada
              </span>
              <span className="rounded-md border border-cyan-500/30 bg-cyan-500/10 px-2 py-0.5 text-cyan-300 font-bold">
                WhatsApp Demo
              </span>
            </div>
          </div>
        </div>

        {/* Panel Derecho: Métricas & Cola de Agentes */}
        <div className={`lg:col-span-5 space-y-3.5 ${activeTab === "agents" || activeTab === "analytics" ? "block" : "hidden sm:block"}`}>
          {/* Métricas en Tiempo Real */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="p-3 rounded-xl border border-white/10 bg-white/[0.03]">
              <div className="text-[10px] text-white/50 uppercase font-semibold">Minutos Hoy</div>
              <div className="text-lg font-black text-cyan-400 mt-0.5">1.480 Min</div>
              <div className="text-[10px] text-emerald-400 font-medium">Tarifa Plana Ilimitada</div>
            </div>
            <div className="p-3 rounded-xl border border-white/10 bg-white/[0.03]">
              <div className="text-[10px] text-white/50 uppercase font-semibold">Llamadas Conectadas</div>
              <div className="text-lg font-black text-violet-400 mt-0.5">99.8%</div>
              <div className="text-[10px] text-white/40 font-medium">Troncales Issabel IP</div>
            </div>
          </div>

          {/* Estado de Asesores en Línea */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 space-y-2">
            <div className="text-xs font-bold text-white flex items-center justify-between mb-1">
              <span>Cola de Agentes en Vivo</span>
              <span className="text-[10px] text-emerald-400 font-mono">4 Conectados</span>
            </div>

            {[
              { name: "Asesor 01 - Juan Camilo", ext: "Ext 101", status: "En Llamada", color: "text-amber-400 bg-amber-400/10 border-amber-400/20" },
              { name: "Asesor 02 - Laura Gómez", ext: "Ext 102", status: "Disponible", color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20" },
              { name: "Asesor 03 - Andrés Silva", ext: "Ext 103", status: "En Llamada", color: "text-amber-400 bg-amber-400/10 border-amber-400/20" },
            ].map((a) => (
              <div key={a.ext} className="flex items-center justify-between p-2 rounded-lg bg-black/30 border border-white/[0.04] text-xs">
                <div>
                  <div className="font-semibold text-white/90">{a.name}</div>
                  <div className="text-[10px] text-white/40 font-mono">{a.ext}</div>
                </div>
                <span className={`px-2 py-0.5 rounded-full border text-[10px] font-bold ${a.color}`}>
                  {a.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
