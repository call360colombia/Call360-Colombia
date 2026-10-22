"use client";

import { useState } from "react";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";

type SimulatorTab = "whatsapp" | "llamadas" | "web" | "marketing";

interface ChatMessage {
  id: string;
  sender: "client" | "agent" | "bot";
  name: string;
  text: string;
  time: string;
  tag?: string;
}

export default function InteractiveProductSimulator() {
  const [activeTab, setActiveTab] = useState<SimulatorTab>("whatsapp");

  // WhatsApp Simulator State
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      sender: "client",
      name: "Dra. Carolina (Clínica Dental)",
      text: "Hola! Vi el anuncio en Instagram, me interesa el software para que mis 3 recepcionistas atiendan un solo WhatsApp.",
      time: "10:14 AM",
    },
    {
      id: "2",
      sender: "agent",
      name: "Juan David (Call360)",
      text: "¡Hola Dra. Carolina! Con gusto. Con Call360 las 3 recepcionistas tienen acceso simultáneo al mismo número de WhatsApp sin desconectarse y con historial compartido.",
      time: "10:15 AM",
      tag: "Asesor Asignado",
    },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [leadStage, setLeadStage] = useState("🔥 Cliente Caliente");

  // Dialer Simulator State
  const [isDialing, setIsDialing] = useState(false);
  const [callDuration, setCallDuration] = useState("01:24");
  const [callStatus, setCallStatus] = useState("Llamada en curso — Grabando en HD");

  // Web Compare State
  const [webMode, setWebMode] = useState<"after" | "before">("after");

  const sendSampleAiResponse = () => {
    const newMsg: ChatMessage = {
      id: String(Date.now()),
      sender: "bot",
      name: "Asistente IA Call360",
      text: "Te acabo de enviar la propuesta al WhatsApp. ¿Deseas agendar una demostración de 15 minutos hoy a las 3:00 PM?",
      time: "Ahora mismo",
      tag: "Respuesta IA Generada",
    };
    setMessages((prev) => [...prev, newMsg]);
  };

  const handleCustomSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const userMsg: ChatMessage = {
      id: String(Date.now()),
      sender: "agent",
      name: "Tú (Asesor Call360)",
      text: chatInput,
      time: "Ahora",
    };
    setMessages((prev) => [...prev, userMsg]);
    setChatInput("");
  };

  return (
    <section className="py-16 sm:py-24 bg-[#0a0d16]/80 border-y border-white/[0.08] relative overflow-hidden" id="simulador-en-vivo">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300 mb-4 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            Demostración Interactiva Sin Registro
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
            Prueba cómo funciona el{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
              Ecosistema Call360 en Vivo
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-white/70 leading-relaxed">
            Sin formularios interminables ni tarjetas de crédito. Experimenta la interfaz real que usan cientos de empresas en Colombia para captar, atender y cerrar clientes todos los días.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {[
            {
              id: "whatsapp" as SimulatorTab,
              label: "1. CRM WhatsApp Multiagente",
              badge: "14 Días Gratis",
              color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
              activeColor: "border-emerald-400 bg-emerald-500/20 text-white shadow-lg shadow-emerald-500/20",
            },
            {
              id: "llamadas" as SimulatorTab,
              label: "2. Telefonía IP & Marcador",
              badge: "Minutos Ilimitados",
              color: "text-violet-400 border-violet-500/30 bg-violet-500/10",
              activeColor: "border-violet-400 bg-violet-500/20 text-white shadow-lg shadow-violet-500/20",
            },
            {
              id: "web" as SimulatorTab,
              label: "3. Páginas Web en 72h",
              badge: "Mockup Gratis",
              color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
              activeColor: "border-cyan-400 bg-cyan-500/20 text-white shadow-lg shadow-cyan-500/20",
            },
            {
              id: "marketing" as SimulatorTab,
              label: "4. Marketing & Retorno",
              badge: "Garantía Devolución",
              color: "text-amber-400 border-amber-500/30 bg-amber-500/10",
              activeColor: "border-amber-400 bg-amber-500/20 text-white shadow-lg shadow-amber-500/20",
            },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2.5 px-4 sm:px-6 py-3 rounded-full border text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive ? tab.activeColor : "border-white/10 bg-white/[0.03] text-white/60 hover:bg-white/[0.08]"
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border font-mono ${tab.color}`}>
                  {tab.badge}
                </span>
              </button>
            );
          })}
        </div>

        {/* SIMULATOR WINDOW CONTAINER */}
        <div className="rounded-3xl border border-white/15 bg-[#0f111a] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden">
          {/* Mac/Browser Top Bar */}
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-[#141724]">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-3 font-mono text-xs text-white/40 hidden sm:inline-block">
                app.call360colombia.com/live-sandbox
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Conexión Servidor Bogotá Activa</span>
            </div>
          </div>

          {/* TAB 1: CRM WHATSAPP */}
          {activeTab === "whatsapp" && (
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="grid gap-6 lg:grid-cols-12 items-start">
                {/* Left: Chat Simulator Screen */}
                <div className="lg:col-span-8 rounded-2xl border border-white/10 bg-[#0b1014] overflow-hidden flex flex-col h-[460px]">
                  {/* Chat Header */}
                  <div className="p-3.5 bg-[#17212b] border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-400 flex items-center justify-center font-bold text-black text-sm">
                          DC
                        </div>
                        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-emerald-400 border-2 border-[#17212b]" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-bold text-white">Dra. Carolina (Clínica Dental)</h4>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                            {leadStage}
                          </span>
                        </div>
                        <p className="text-xs text-white/50">WhatsApp Business • +57 312 849 2011</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-white/60 font-mono hidden sm:inline">3 Asesores Conectados</span>
                    </div>
                  </div>

                  {/* Chat Messages Body */}
                  <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#0a0f13]/90">
                    {messages.map((m) => (
                      <div
                        key={m.id}
                        className={`flex flex-col max-w-[85%] sm:max-w-[70%] ${
                          m.sender === "client" ? "mr-auto items-start" : "ml-auto items-end"
                        }`}
                      >
                        <span className="text-[10px] text-white/40 mb-1 px-1">
                          {m.name} • {m.time}
                        </span>
                        <div
                          className={`p-3 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                            m.sender === "client"
                              ? "bg-[#1e2a38] text-white rounded-tl-sm border border-white/5"
                              : m.sender === "bot"
                              ? "bg-gradient-to-r from-cyan-600/90 to-blue-600/90 text-white rounded-tr-sm border border-cyan-400/40"
                              : "bg-[#005c4b] text-white rounded-tr-sm"
                          }`}
                        >
                          {m.text}
                          {m.tag && (
                            <span className="mt-2 block text-[10px] font-mono uppercase tracking-wider text-white/80 bg-black/20 px-2 py-0.5 rounded w-max">
                              ⚡ {m.tag}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Chat Input Bar */}
                  <form onSubmit={handleCustomSend} className="p-3 bg-[#17212b] border-t border-white/10 flex items-center gap-2">
                    <input
                      type="text"
                      value={chatInput}
                      onChange={(e) => setChatInput(e.target.value)}
                      placeholder="Escribe un mensaje de prueba como asesor..."
                      className="flex-1 rounded-xl bg-black/40 border border-white/10 px-4 py-2.5 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none focus:border-emerald-400"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-bold text-xs sm:text-sm transition-all"
                    >
                      Enviar
                    </button>
                  </form>
                </div>

                {/* Right: Interactive Controls & Value Props */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                    <h4 className="text-sm font-bold text-white mb-2">Simula Acciones Comerciales:</h4>
                    <p className="text-xs text-white/60 mb-4">Haz clic para ver cómo la IA asistida de Call360 agiliza las respuestas de tus asesores:</p>

                    <div className="space-y-2.5">
                      <button
                        type="button"
                        onClick={sendSampleAiResponse}
                        className="w-full flex items-center justify-between p-3 rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 text-xs font-bold transition-all text-left"
                      >
                        <span className="flex items-center gap-2">
                          <span>✨</span>
                          <span>Sugerir Respuesta con IA (Tú decides)</span>
                        </span>
                        <span className="text-[10px] bg-cyan-500/20 px-2 py-0.5 rounded">Probar</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setLeadStage("💰 Venta Cerrada - $650.000")}
                        className="w-full flex items-center justify-between p-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 text-xs font-bold transition-all text-left"
                      >
                        <span className="flex items-center gap-2">
                          <span>🏷️</span>
                          <span>Cambiar Estado a: Venta Cerrada</span>
                        </span>
                        <span className="text-[10px] bg-emerald-500/20 px-2 py-0.5 rounded">Probar</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          const promoMsg: ChatMessage = {
                            id: String(Date.now()),
                            sender: "agent",
                            name: "Campaña Masiva (250 Clientes)",
                            text: "📢 ¡Novedad especial de octubre! Agenda tu cita hoy y recibe 20% de descuento en tu tratamiento.",
                            time: "Enviado a 250",
                            tag: "98% Entregabilidad sin Bloqueo",
                          };
                          setMessages((prev) => [...prev, promoMsg]);
                        }}
                        className="w-full flex items-center justify-between p-3 rounded-xl border border-violet-500/30 bg-violet-500/10 text-violet-300 hover:bg-violet-500/20 text-xs font-bold transition-all text-left"
                      >
                        <span className="flex items-center gap-2">
                          <span>🚀</span>
                          <span>Simular Difusión Masiva</span>
                        </span>
                        <span className="text-[10px] bg-violet-500/20 px-2 py-0.5 rounded">Probar</span>
                      </button>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                      Oferta Comercial Activa
                    </span>
                    <h4 className="text-base font-black text-white mb-2">
                      14 Días de Prueba Gratis
                    </h4>
                    <p className="text-xs text-white/70 leading-relaxed mb-4">
                      Incluye 100 créditos IA para sugerir respuestas y redacción asistida, con soporte directo en Bogotá.
                    </p>
                    <WhatsAppButton
                      text="Hola Call360, probé el simulador de CRM WhatsApp en la web y quiero activar los 14 días gratis para mi equipo."
                      label="Activar 14 Días Gratis"
                      className="w-full justify-center !text-xs !py-3"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: TELEFONÍA IP & MARCADOR */}
          {activeTab === "llamadas" && (
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="grid gap-6 lg:grid-cols-12 items-center">
                <div className="lg:col-span-7 rounded-2xl border border-violet-500/30 bg-[#100d1e] p-6 sm:p-8">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-violet-500/20 border border-violet-500/40 flex items-center justify-center text-violet-400">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-white">Marcador Predictivo Issabel / Call360</h4>
                        <p className="text-xs text-white/50">Línea dedicada • Troncal SIP Colombia</p>
                      </div>
                    </div>
                    <span className="font-mono text-xs px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/40 font-bold">
                      {callDuration}
                    </span>
                  </div>

                  {/* Audio Waveform Animation */}
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-6 text-center mb-6">
                    <p className="text-xs text-white/50 mb-3 uppercase tracking-wider font-mono">
                      {callStatus}
                    </p>
                    <div className="flex items-center justify-center gap-1.5 h-14">
                      {[40, 65, 80, 45, 90, 70, 30, 85, 100, 60, 40, 75, 95, 50, 60, 85, 40].map((h, i) => (
                        <span
                          key={i}
                          className="w-1.5 bg-gradient-to-t from-violet-500 to-cyan-400 rounded-full animate-pulse"
                          style={{
                            height: `${h}%`,
                            animationDelay: `${i * 80}ms`,
                            animationDuration: "800ms",
                          }}
                        />
                      ))}
                    </div>
                    <p className="text-xs font-mono text-cyan-400 mt-4">
                      Prospecto atendido: +57 (601) 745-9200 (Bogotá D.C.)
                    </p>
                  </div>

                  {/* Quick dialer controls */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    <button
                      type="button"
                      onClick={() => setCallStatus("🔴 Grabando audio HD en la nube...")}
                      className="p-3 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-center text-xs font-semibold text-white transition-all"
                    >
                      <span>🎙️ Grabación</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setCallStatus("🎧 Supervisor conectado en modo susurro...")}
                      className="p-3 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-center text-xs font-semibold text-white transition-all"
                    >
                      <span>👂 Susurro</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setIsDialing(true);
                        setCallDuration("00:03");
                        setCallStatus("📞 Siguiente prospecto conectado en 1 segundo...");
                      }}
                      className="p-3 rounded-xl border border-violet-500/40 bg-violet-500/20 hover:bg-violet-500/30 text-center text-xs font-bold text-violet-300 transition-all"
                    >
                      <span>⚡ Siguiente</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setCallStatus("✅ Tipificado: 'Venta Cerrada'")}
                      className="p-3 rounded-xl border border-emerald-500/40 bg-emerald-500/20 hover:bg-emerald-500/30 text-center text-xs font-bold text-emerald-300 transition-all"
                    >
                      <span>✔️ Tipificar</span>
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-violet-400 block mb-2">
                      El Fin de la Marcación Manual
                    </span>
                    <h3 className="text-xl font-black text-white mb-3">
                      Tu equipo pasa de 60 a 250 llamadas efectivas al día
                    </h3>
                    <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-4">
                      El marcador predictivo filtra buzones, ocupados y números desconectados. Tus asesores solo hablan con personas reales listas para comprar.
                    </p>

                    <div className="space-y-2.5 pt-3 border-t border-white/10 text-xs text-white/80">
                      <div className="flex items-center gap-2">
                        <span className="text-emerald-400 font-bold">✓</span>
                        <span><strong>Minutos ilimitados</strong> a todos los operadores en Colombia</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-emerald-400 font-bold">✓</span>
                        <span>Tarifa plana de <strong>$120.000 COP</strong> por usuario al mes</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-emerald-400 font-bold">✓</span>
                        <span>Grabación, monitoreo y cambio de número incluido</span>
                      </div>
                    </div>
                  </div>

                  <WhatsAppButton
                    text="Hola Call360, quiero probar la demo real de 6 horas de CRM de llamadas con minutos ilimitados."
                    label="Solicitar Demo 6 Horas Sin Costo"
                    className="w-full justify-center !text-sm !py-3.5 !bg-violet-600 hover:!bg-violet-500"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PÁGINAS WEB EN 72H */}
          {activeTab === "web" && (
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="grid gap-6 lg:grid-cols-12 items-center">
                <div className="lg:col-span-7 rounded-2xl border border-cyan-500/30 bg-[#0d151e] p-6 sm:p-8">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                    <div>
                      <h4 className="text-base font-bold text-white">Comparativa en Vivo de Rendimiento Web</h4>
                      <p className="text-xs text-white/50">Prueba el impacto en tus ventas según la velocidad de carga</p>
                    </div>

                    <div className="flex rounded-xl bg-black/40 border border-white/10 p-1">
                      <button
                        type="button"
                        onClick={() => setWebMode("after")}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                          webMode === "after" ? "bg-cyan-500 text-black shadow-md" : "text-white/60 hover:text-white"
                        }`}
                      >
                        Con Call360
                      </button>
                      <button
                        type="button"
                        onClick={() => setWebMode("before")}
                        className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                          webMode === "before" ? "bg-red-500 text-white shadow-md" : "text-white/60 hover:text-white"
                        }`}
                      >
                        Web Antigua / Lenta
                      </button>
                    </div>
                  </div>

                  {webMode === "after" ? (
                    <div className="space-y-4">
                      <div className="rounded-2xl border-2 border-emerald-500/40 bg-emerald-500/10 p-5">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-black text-emerald-400 uppercase tracking-widest">
                            ⚡ Google Lighthouse: 99 / 100
                          </span>
                          <span className="text-xs font-mono text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded">
                            0.7 Segundos de Carga
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-white mb-2">
                          Web Moderna en Next.js con Botón WhatsApp Instantáneo
                        </h4>
                        <p className="text-xs text-white/80 leading-relaxed">
                          El 92% de los colombianos navega desde su celular. Si la página carga en menos de 1 segundo con WhatsApp visible, la conversión se cuadruplica.
                        </p>
                      </div>

                      <div className="grid grid-cols-3 gap-3 text-center">
                        <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                          <span className="text-xl font-black text-emerald-400 block font-mono">72h</span>
                          <span className="text-[10px] text-white/50">Entrega garantizada</span>
                        </div>
                        <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                          <span className="text-xl font-black text-cyan-400 block font-mono">100%</span>
                          <span className="text-[10px] text-white/50">Diseño a tu medida</span>
                        </div>
                        <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10">
                          <span className="text-xl font-black text-amber-400 block font-mono">$0</span>
                          <span className="text-[10px] text-white/50">Riesgo (Mockup gratis)</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-5">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-black text-red-400 uppercase tracking-widest">
                            ⚠️ Google Lighthouse: 34 / 100
                          </span>
                          <span className="text-xs font-mono text-red-300 bg-red-500/20 px-2 py-0.5 rounded">
                            7.4 Segundos de Carga
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-white mb-2">
                          Plantilla Pesada de WordPress o Wix Sin Optimizar
                        </h4>
                        <p className="text-xs text-white/70 leading-relaxed">
                          El 70% de los visitantes abandona el sitio antes de ver tu teléfono. Pierdes dinero en publicidad todos los días por una web desactualizada.
                        </p>
                      </div>

                      <div className="grid grid-cols-3 gap-3 text-center opacity-60">
                        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                          <span className="text-xl font-black text-red-400 block font-mono">+30 días</span>
                          <span className="text-[10px] text-white/40">Demora en entrega</span>
                        </div>
                        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                          <span className="text-xl font-black text-red-400 block font-mono">78%</span>
                          <span className="text-[10px] text-white/40">Tasa de rebote</span>
                        </div>
                        <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                          <span className="text-xl font-black text-red-400 block font-mono">$$$</span>
                          <span className="text-[10px] text-white/40">Mantenimiento caro</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                      Garantía Comercial Call360
                    </span>
                    <h3 className="text-xl font-black text-white mb-2">
                      Mockup Gratis Antes de Pagar un Solo Peso
                    </h3>
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-4">
                      Diseñamos una muestra visual de cómo quedará la página web de tu empresa. Solo si te encanta el diseño, cerramos el proyecto.
                    </p>
                    <div className="text-xs text-white/60 space-y-1 mb-5">
                      <p>• Plan Starter: <strong>$350.000 COP</strong> (4 secciones + hosting)</p>
                      <p>• Plan Premium: <strong>$650.000 COP</strong> (Dominio .com/.co + correos corporativos + SSL)</p>
                    </div>

                    <WhatsAppButton
                      text="Hola Call360, quiero solicitar mi mockup gratis de página web en 72h antes de pagar."
                      label="Pedir Mockup Gratis en WhatsApp"
                      className="w-full justify-center !text-sm !py-3.5"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: MARKETING & RETORNO */}
          {activeTab === "marketing" && (
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="grid gap-6 lg:grid-cols-12 items-center">
                <div className="lg:col-span-7 rounded-2xl border border-amber-500/30 bg-[#16120b] p-6 sm:p-8">
                  <div className="border-b border-white/10 pb-4 mb-6">
                    <h4 className="text-base font-bold text-white">Embudo de Captación Call360</h4>
                    <p className="text-xs text-white/50">Desde el clic en Google/Meta hasta el chat de WhatsApp</p>
                  </div>

                  <div className="space-y-3">
                    {[
                      { step: "1. Anuncio Optimizado", desc: "Segmentado por ciudad en Colombia y palabras clave de alta intención.", stat: "+3.200 clics calificados" },
                      { step: "2. Landing en 0.8s", desc: "Página directa sin distracciones que carga al instante en smartphones.", stat: "92% retención de visita" },
                      { step: "3. Conversación WhatsApp", desc: "El prospecto abre chat directo con tus asesores con mensaje predeterminado.", stat: "+450 chats nuevos/mes" },
                      { step: "4. Cierre y Venta", desc: "Seguimiento organizado con embudo visual y llamada directa sin perder prospectos.", stat: "Retorno positivo asegurado" },
                    ].map((s, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/10">
                        <div>
                          <h5 className="text-xs sm:text-sm font-bold text-white">{s.step}</h5>
                          <p className="text-[11px] text-white/60">{s.desc}</p>
                        </div>
                        <span className="font-mono text-xs font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-lg shrink-0">
                          {s.stat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                      Cero Riesgo Publicitario
                    </span>
                    <h3 className="text-xl font-black text-white mb-2">
                      Garantía de Retorno o Devolución
                    </h3>
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-4">
                      No cobramos por &quot;likes&quot; ni métricas vanidosas. Nuestro objetivo son clientes reales escribiendo a tu WhatsApp. Si las campañas no generan retorno, te devolvemos el valor del servicio.
                    </p>
                    <WhatsAppButton
                      text="Hola Call360, quiero cotizar el plan de marketing digital con garantía de retorno para mi empresa."
                      label="Cotizar Campañas con Garantía"
                      className="w-full justify-center !text-sm !py-3.5 !bg-amber-500 hover:!bg-amber-400 text-black font-black"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
