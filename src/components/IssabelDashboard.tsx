"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const SIDEBAR_ITEMS = [
  { label: "Sistema", icon: "gear" },
  { label: "PBX", icon: "phone" },
  { label: "Configuración PBX", icon: "sliders" },
  { label: "Panel del Operador", icon: "grid", active: true },
  { label: "Troncales", icon: "nodes" },
  { label: "Reportes", icon: "chart" },
  { label: "Grabaciones", icon: "mic" },
  { label: "Usuarios", icon: "users" },
];

const AGENT_NAMES = [
  "Laura Méndez", "Carlos Rojas", "Andrea Gil", "Felipe Torres",
  "Mariana Paz", "Daniel Castro", "Valeria Ríos", "Santiago Umaña",
  "Camila Duarte", "Andrés López",
];

type AgentState = "Disponible" | "Marcando" | "En llamada" | "En pausa" | "Desconectado";

interface Agent {
  name: string;
  state: AgentState;
  talkTime: number;
  callsToday: number;
  extension: string;
}

interface Notification {
  id: number;
  caller: string;
  number: string;
  time: string;
  timestamp: number;
}

function CircleIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <circle cx="12" cy="12" r="10" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function TrendingIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

function SidebarIcon({ type, className }: { type: string; className?: string }) {
  const c = className || "";
  switch (type) {
    case "gear":
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={c}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>;
    case "phone":
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={c}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>;
    case "sliders":
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={c}><line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" /><line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" /><line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" /><line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" /></svg>;
    case "grid":
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={c}><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></svg>;
    case "nodes":
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={c}><path d="M12 3v18" /><path d="M3 12h18" /><circle cx="12" cy="3" r="2" /><circle cx="12" cy="21" r="2" /><circle cx="3" cy="12" r="2" /><circle cx="21" cy="12" r="2" /></svg>;
    case "chart":
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={c}><path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" /></svg>;
    case "mic":
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={c}><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg>;
    case "users":
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={c}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
    default:
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={c}><circle cx="12" cy="12" r="10" /></svg>;
  }
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

function StatCard({ label, value, sub, icon, color }: {
  label: string; value: React.ReactNode; sub?: string; icon: React.ReactNode; color: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all hover:shadow-md">
      <div className="flex items-start justify-between mb-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">{label}</span>
        <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${color}`}>
          {icon}
        </span>
      </div>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
      {sub && <div className="mt-0.5 text-xs text-gray-400">{sub}</div>}
    </div>
  );
}

interface ActivityBarProps {
  label: string;
  pct: number;
  color: string;
}

function ActivityBar({ label, pct, color }: ActivityBarProps) {
  const [w, setW] = useState(0);
  const ran = useRef(false);
  useEffect(() => {
    if (ran.current) return;
    ran.current = true;
    requestAnimationFrame(() => setW(pct));
  }, [pct]);
  return (
    <div className="flex items-center gap-3">
      <span className="w-24 text-xs font-medium text-gray-600 truncate">{label}</span>
      <div className="flex-1 h-2.5 rounded-full bg-gray-200 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${w}%`, background: color }}
        />
      </div>
      <span className="w-8 text-right text-xs font-semibold text-gray-700">{pct}%</span>
    </div>
  );
}

function AgentCard({ agent }: { agent: Agent }) {
  const stateColors: Record<AgentState, string> = {
    Disponible: "bg-emerald-500",
    Marcando: "bg-amber-500",
    "En llamada": "bg-violet-500",
    "En pausa": "bg-gray-400",
    Desconectado: "bg-red-500",
  };
  const stateBg: Record<AgentState, string> = {
    Disponible: "bg-emerald-50 border-emerald-200",
    Marcando: "bg-amber-50 border-amber-200",
    "En llamada": "bg-violet-50 border-violet-200",
    "En pausa": "bg-gray-50 border-gray-200",
    Desconectado: "bg-red-50 border-red-200",
  };
  return (
    <div className={`rounded-xl border p-4 transition-all duration-500 ${stateBg[agent.state]}`}>
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2.5">
          <div className="relative">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-sm font-bold text-gray-700">
              {agent.name.split(" ").map(s => s[0]).join("").slice(0, 2)}
            </div>
            <span className={`absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white ${stateColors[agent.state]}`} />
          </div>
          <div>
            <div className="text-sm font-bold text-gray-900">{agent.name}</div>
            <div className="text-xs text-gray-500">Ext. {agent.extension}</div>
          </div>
        </div>
        <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
          agent.state === "Disponible" ? "bg-emerald-100 text-emerald-700" :
          agent.state === "Marcando" ? "bg-amber-100 text-amber-700" :
          agent.state === "En llamada" ? "bg-violet-100 text-violet-700" :
          agent.state === "En pausa" ? "bg-gray-100 text-gray-600" :
          "bg-red-100 text-red-700"
        }`}>
          {agent.state === "En llamada" && <span className="h-1.5 w-1.5 rounded-full bg-violet-500 animate-pulse" />}
          {agent.state}
        </span>
      </div>
      <div className="flex items-center gap-4 text-xs text-gray-500">
        <span className="flex items-center gap-1">
          {agent.state === "En llamada" ? (
            <><ClockIcon className="text-violet-500" /> {formatTime(agent.talkTime)}</>
          ) : agent.state === "Desconectado" ? (
            <span className="text-gray-400">—</span>
          ) : (
            <span className="text-gray-400">Listo</span>
          )}
        </span>
        <span>{agent.callsToday} llamadas hoy</span>
      </div>
    </div>
  );
}

function NotificationItem({ n, onRemove }: { n: Notification; onRemove: (id: number) => void }) {
  useEffect(() => {
    const t = setTimeout(() => onRemove(n.id), 5000);
    return () => clearTimeout(t);
  }, [n.id, onRemove]);
  return (
    <div className="flex items-center gap-3 rounded-lg border border-violet-200 bg-white px-4 py-3 shadow-sm animate-fade-in-up">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-100 text-violet-600">
        <PhoneIcon />
      </span>
      <div className="flex-1 min-w-0">
        <div className="text-sm font-semibold text-gray-900">{n.caller}</div>
        <div className="text-xs text-gray-500">{n.number} · {n.time}</div>
      </div>
      <span className="h-2 w-2 rounded-full bg-violet-500 animate-pulse" />
    </div>
  );
}

function AnimatedCounter({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [val, setVal] = useState(0);
  const ran = useRef(false);
  useEffect(() => {
    if (ran.current) return;
    ran.current = true;
    const start = performance.now();
    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [target, duration]);
  return <>{val}{suffix}</>;
}

export default function IssabelDashboard() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const [agents, setAgents] = useState<Agent[]>(() =>
    AGENT_NAMES.map((name, i) => ({
      name,
      state: "Disponible" as AgentState,
      talkTime: 0,
      callsToday: Math.floor(Math.random() * 12) + 3,
      extension: `20${10 + i}`,
    }))
  );

  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [notifId, setNotifId] = useState(0);
  const [liveTime, setLiveTime] = useState("");

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // Update clock
  useEffect(() => {
    function tick() {
      const d = new Date();
      setLiveTime(d.toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true }));
    }
    tick();
    const t = setInterval(tick, 1000);
    return () => clearInterval(t);
  }, []);

  // Agent simulation
  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      setAgents(prev => prev.map((agent, i) => {
        if (agent.state === "Desconectado" && Math.random() > 0.1) return agent;
        const roll = Math.random();
        if (agent.state === "Disponible") {
          if (roll < 0.35) return { ...agent, state: "Marcando" as AgentState };
          if (roll < 0.5) return { ...agent, state: "En pausa" as AgentState };
        }
        if (agent.state === "Marcando") {
          if (roll < 0.7) return { ...agent, state: "En llamada" as AgentState, talkTime: 0 };
          if (roll < 0.85) return { ...agent, state: "Disponible" as AgentState };
        }
        if (agent.state === "En llamada") {
          if (roll < 0.25) return {
            ...agent, state: "Disponible" as AgentState,
            callsToday: agent.callsToday + 1, talkTime: 0,
          };
          if (roll < 0.35) return { ...agent, state: "En pausa" as AgentState };
        }
        if (agent.state === "En pausa") {
          if (roll < 0.6) return { ...agent, state: "Disponible" as AgentState };
        }
        return agent;
      }));
    }, 3000);
    return () => clearInterval(interval);
  }, [visible]);

  // Talk time ticker
  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      setAgents(prev => prev.map(agent =>
        agent.state === "En llamada" ? { ...agent, talkTime: agent.talkTime + 1 } : agent
      ));
    }, 1000);
    return () => clearInterval(interval);
  }, [visible]);

  // Notifications
  useEffect(() => {
    if (!visible) return;
    const names = ["Carlos M.", "Ana P.", "Roberto G.", "Diana S.", "Miguel A.", "Sofía L.", "Pedro H.", "Lucía R."];
    const interval = setInterval(() => {
      if (Math.random() > 0.45) return;
      const caller = names[Math.floor(Math.random() * names.length)];
      const num = `+57 3${Array.from({ length: 9 }, () => Math.floor(Math.random() * 10)).join("")}`;
      const time = new Date().toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" });
      setNotifications(prev => [...prev, { id: notifId, caller, number: num, time, timestamp: Date.now() }].slice(-4));
      setNotifId(id => id + 1);
    }, 7000);
    return () => clearInterval(interval);
  }, [visible, notifId]);

  const removeNotification = useCallback((id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  const online = agents.filter(a => a.state !== "Desconectado").length;
  const inCall = agents.filter(a => a.state === "En llamada").length;
  const dialing = agents.filter(a => a.state === "Marcando").length;
  const paused = agents.filter(a => a.state === "En pausa").length;
  const totalCalls = agents.reduce((s, a) => s + a.callsToday, 0);
  const avgTalk = agents.filter(a => a.state === "En llamada").reduce((s, a) => s + a.talkTime, 0);
  const avgTalkSeconds = inCall > 0 ? Math.round(avgTalk / inCall) : 0;

  return (
    <div ref={sectionRef} className="w-full">
      <div className={`overflow-hidden rounded-2xl border border-gray-200 shadow-xl transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}>
        <div className="flex min-h-[600px]">
          {/* SIDEBAR */}
          <aside className="hidden md:flex md:flex-col w-56 shrink-0 bg-[#2d1b4e] text-white/80">
            <div className="flex items-center gap-3 border-b border-white/10 px-5 py-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-white">
                <PhoneIcon />
              </div>
              <div>
                <div className="text-sm font-bold text-white tracking-tight">IssabelPBX</div>
                <div className="text-xs text-white/50">v4.0 · Call360</div>
              </div>
            </div>
            <nav className="flex-1 space-y-0.5 px-3 py-4">
              {SIDEBAR_ITEMS.map(item => (
                <button
                  key={item.label}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all ${
                    item.active
                      ? "bg-violet-500/20 text-white shadow-sm"
                      : "text-white/60 hover:bg-white/5 hover:text-white/90"
                  }`}
                >
                  <SidebarIcon type={item.icon} className="shrink-0" />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
            <div className="border-t border-white/10 px-5 py-4">
              <div className="flex items-center gap-2 text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Conectado
              </div>
              <div className="mt-1 text-xs text-white/40">Servidor: pbx01.call360.co</div>
            </div>
          </aside>

          {/* MAIN PANEL */}
          <div className="flex-1 bg-gray-100 min-w-0">
            {/* Top bar */}
            <div className="flex items-center justify-between border-b border-gray-200 bg-white px-6 py-3">
              <div>
                <h2 className="text-base font-bold text-gray-900">Panel del Operador</h2>
                <p className="text-xs text-gray-500">
                  <AnimatedCounter target={totalCalls} /> llamadas hoy · {online} agentes en línea
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex items-center gap-1.5 text-xs text-gray-500">
                  <ClockIcon className="text-gray-400" />
                  {liveTime}
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-600">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  Sistema activo
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-6 pb-2">
              <StatCard
                label="Llamadas Hoy"
                value={<AnimatedCounter target={totalCalls} />}
                sub={`${inCall} en curso`}
                icon={<TrendingIcon className="text-white" />}
                color="bg-violet-500"
              />
              <StatCard
                label="Canales Activos"
                value={<AnimatedCounter target={inCall} />}
                sub={`${dialing} marcando`}
                icon={<PhoneIcon className="text-white" />}
                color="bg-amber-500"
              />
              <StatCard
                label="Agentes"
                value={<AnimatedCounter target={online} />}
                sub={`${paused} en pausa`}
                icon={<UsersIcon className="text-white" />}
                color="bg-emerald-500"
              />
              <StatCard
                label="Duración Prom."
                value={formatTime(avgTalkSeconds)}
                sub="llamadas activas"
                icon={<ClockIcon className="text-white" />}
                color="bg-blue-500"
              />
            </div>

            {/* Activity Bars + Agents */}
            <div className="grid lg:grid-cols-3 gap-4 p-6 pt-3">
              {/* Activity bars */}
              <div className="lg:col-span-1 space-y-4">
                <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-gray-700">Actividad del sistema</h3>
                  <div className="space-y-3">
                    <ActivityBar label="Ocupación" pct={inCall > 0 ? Math.min(Math.round((inCall / online) * 100), 100) : 0} color="#7c3aed" />
                    <ActivityBar label="Disponibilidad" pct={online > 0 ? Math.round(((online - inCall - dialing - paused) / online) * 100) : 0} color="#10b981" />
                    <ActivityBar label="Llamadas exitosas" pct={Math.min(Math.round((totalCalls / (totalCalls + 50)) * 100), 100)} color="#3b82f6" />
                    <ActivityBar label="Tasa de contacto" pct={Math.min(Math.round(((totalCalls - dialing) / (totalCalls || 1)) * 100), 100)} color="#f59e0b" />
                  </div>
                </div>

                {/* Notifications */}
                <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-700">Llamadas entrantes</h3>
                  <div className="space-y-2">
                    {notifications.length === 0 && (
                      <p className="text-xs text-gray-400 italic">Esperando llamadas...</p>
                    )}
                    {notifications.map(n => (
                      <NotificationItem key={n.id} n={n} onRemove={removeNotification} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Agent Grid */}
              <div className="lg:col-span-2">
                <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-700">Agentes en línea</h3>
                    <span className="text-xs text-gray-500">{online} de {agents.length} conectados</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {agents.filter(a => a.state !== "Desconectado").map(agent => (
                      <AgentCard key={agent.name} agent={agent} />
                    ))}
                    {agents.filter(a => a.state === "Desconectado").map(agent => (
                      <AgentCard key={agent.name} agent={agent} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
