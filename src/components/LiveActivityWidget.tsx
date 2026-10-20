"use client";

import { useState, useEffect, useRef, useSyncExternalStore } from "react";

interface Activity {
  id: number;
  type: "call" | "message" | "web";
  title: string;
  detail: string;
  time: string;
  color: string;
  bgColor: string;
}

const CITIES = ["Bogotá", "Medellín", "Cali", "Barranquilla", "Bucaramanga", "Cartagena", "Pereira", "Manizales"];

function randomCity(): string {
  return CITIES[Math.floor(Math.random() * CITIES.length)];
}

function generateActivity(id: number): Activity {
  const roll = Math.random();
  if (roll > 0.6) {
    return {
      id, type: "call",
      title: "Llamada completada",
      detail: `${randomCity()} → +57 3${Math.floor(Math.random() * 900 + 100)} ${Math.floor(Math.random() * 9000 + 1000)}`,
      time: "Ahora",
      color: "text-violet-400", bgColor: "bg-violet-500/15",
    };
  } else if (roll > 0.3) {
    return {
      id, type: "message",
      title: "Mensaje de WhatsApp",
      detail: `Cliente de ${randomCity()} · ${["Hola, quiero info", "¿Precios?", "Me interesa", "¿Disponibilidad?"][Math.floor(Math.random() * 4)]}`,
      time: "Ahora",
      color: "text-emerald-400", bgColor: "bg-emerald-500/15",
    };
  } else {
    return {
      id, type: "web",
      title: "Nueva visita web",
      detail: `${randomCity()} · Página ${["/", "/servicios", "/crm-llamadas", "/paginas-web"][Math.floor(Math.random() * 4)]}`,
      time: "Ahora",
      color: "text-cyan-400", bgColor: "bg-cyan-500/15",
    };
  }
}

function subscribe() {
  return () => {};
}

function getClientSnapshot(): true {
  return true;
}

function getServerSnapshot(): false {
  return false;
}

function useIsClient(): boolean {
  return useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
}

export default function LiveActivityWidget() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isClient = useIsClient();
  const [visible, setVisible] = useState(false);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [nextId, setNextId] = useState(4);
  const [counters, setCounters] = useState({ calls: 0, messages: 0, web: 0 });

  useEffect(() => {
    if (!isClient) return;
    setActivities(Array.from({ length: 4 }, (_, i) => generateActivity(i)));
  }, [isClient]);

  useEffect(() => {
    if (!isClient) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, [isClient]);

  useEffect(() => {
    if (!visible) return;
    // Animate initial counters
    const duration = 2500;
    const start = performance.now();
    const targets = { calls: 847, messages: 1243, web: 3891 };
    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounters({
        calls: Math.round(eased * targets.calls),
        messages: Math.round(eased * targets.messages),
        web: Math.round(eased * targets.web),
      });
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [visible]);

  // Add new activity every 4 seconds
  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      setActivities(prev => [generateActivity(nextId), ...prev].slice(0, 5));
      setNextId(id => id + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, [visible, nextId]);

  return (
    <div ref={sectionRef} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      <div className="rounded-3xl border border-white/[0.08] bg-[#12121a] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 via-violet-500/20 to-amber-500/20">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Actividad del sistema</h3>
              <p className="text-xs text-white/40">Todo funcionando en tiempo real</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold text-emerald-400">En vivo</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-0 md:divide-x divide-white/[0.06]">
          {/* Left: Counters */}
          <div className="p-6">
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-black bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                  {counters.calls.toLocaleString("es-CO")}
                </div>
                <div className="text-[10px] text-white/40 font-medium mt-1">Llamadas hoy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                  {counters.messages.toLocaleString("es-CO")}
                </div>
                <div className="text-[10px] text-white/40 font-medium mt-1">Mensajes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {counters.web.toLocaleString("es-CO")}
                </div>
                <div className="text-[10px] text-white/40 font-medium mt-1">Visitas web</div>
              </div>
            </div>

            {/* Mini bars */}
            <div className="space-y-3">
              {[
                { label: "CRM Llamadas", pct: 78, color: "bg-violet-500" },
                { label: "CRM WhatsApp", pct: 92, color: "bg-emerald-500" },
                { label: "Páginas Web", pct: 65, color: "bg-cyan-500" },
              ].map(bar => (
                <div key={bar.label}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-white/50">{bar.label}</span>
                    <span className="text-xs text-white/30">{bar.pct}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                    <div className={`h-full rounded-full ${bar.color} transition-all duration-2000 ease-out`}
                      style={{ width: visible ? `${bar.pct}%` : "0%" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Live Feed */}
          <div className="p-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-3">Actividad reciente</h4>
            <div className="space-y-2">
              {activities.map((item) => (
                <div key={item.id} className="flex items-center gap-3 rounded-lg bg-white/[0.02] px-3 py-2.5 animate-fade-in-up">
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${item.bgColor}`}>
                    {item.type === "call" && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={item.color}>
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    )}
                    {item.type === "message" && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={item.color}>
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                    )}
                    {item.type === "web" && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={item.color}>
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                    )}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-white">{item.title}</div>
                    <div className="text-[11px] text-white/40 truncate">{item.detail}</div>
                  </div>
                  <span className="text-[10px] text-white/20 shrink-0">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
