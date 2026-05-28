"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const POSTS = [
  {
    id: 1,
    author: "Clínica Sonrisa",
    handle: "@clinicasonrisa",
    content: "✨ ¡Nueva promoción de blanqueamiento dental! 20% de descuento este mes. Agenda tu cita hoy.",
    image: "🦷",
    likes: 234,
    comments: 18,
    shares: 42,
    time: "Hace 2h",
    platform: "instagram",
  },
  {
    id: 2,
    author: "Restaurante La Finca",
    handle: "@lafinca_bogota",
    content: "🍕 Nuevos platos del menú de esta semana. Reserva tu mesa: 320 369 3949",
    image: "🍽️",
    likes: 189,
    comments: 24,
    shares: 31,
    time: "Hace 4h",
    platform: "facebook",
  },
  {
    id: 3,
    author: "Barbería King's Cut",
    handle: "@kingscut",
    content: "💇 Corte + Barba por solo $25.000. ¡Agenda por WhatsApp! Link en bio.",
    image: "✂️",
    likes: 312,
    comments: 15,
    shares: 58,
    time: "Hace 6h",
    platform: "instagram",
  },
];

const ACTIVITIES = [
  { type: "like", user: "maria_lopez", post: "Clínica Sonrisa", time: "Hace 12s" },
  { type: "comment", user: "carlos_92", post: "Restaurante La Finca", time: "Hace 28s" },
  { type: "share", user: "ana_garcia", post: "Barbería King's Cut", time: "Hace 45s" },
  { type: "like", user: "pedro_m", post: "Clínica Sonrisa", time: "Hace 1m" },
  { type: "follow", user: "lucia_23", post: null, time: "Hace 1m" },
  { type: "like", user: "santiago_r", post: "Restaurante La Finca", time: "Hace 2m" },
  { type: "comment", user: "diana_s", post: "Barbería King's Cut", time: "Hace 3m" },
  { type: "like", user: "roberto_g", post: "Clínica Sonrisa", time: "Hace 3m" },
];

const WEEKLY_DATA = [
  { day: "Lun", posts: 4, reach: 2400 },
  { day: "Mar", posts: 3, reach: 3100 },
  { day: "Mié", posts: 5, reach: 4200 },
  { day: "Jue", posts: 3, reach: 2800 },
  { day: "Vie", posts: 6, reach: 5100 },
  { day: "Sáb", posts: 4, reach: 3800 },
  { day: "Dom", posts: 2, reach: 1900 },
];

function AnimatedNumber({ target, duration = 2000 }: { target: number; duration?: number }) {
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
  return <>{val.toLocaleString("es-CO")}</>;
}

function PlatformIcon({ platform }: { platform: string }) {
  if (platform === "instagram") {
    return (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-pink-400">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-blue-400">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function StatCard({ label, value, sub, color, icon }: {
  label: string; value: number; sub?: string; color: string; icon: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-[#12121a] p-5 transition-all hover:border-amber-500/20">
      <div className="flex items-start justify-between mb-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-white/40">{label}</span>
        <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${color}`}>
          {icon}
        </span>
      </div>
      <div className="text-2xl font-bold text-white">
        <AnimatedNumber target={value} />
      </div>
      {sub && <div className="mt-0.5 text-xs text-white/40">{sub}</div>}
    </div>
  );
}

export default function MarketingDashboard() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [likes, setLikes] = useState(POSTS.map(p => p.likes));
  const [comments, setComments] = useState(POSTS.map(p => p.comments));
  const [shares, setShares] = useState(POSTS.map(p => p.shares));
  const [feed, setFeed] = useState(ACTIVITIES.slice(0, 3));
  const [feedIdx, setFeedIdx] = useState(3);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // Animate engagement numbers
  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      const postIdx = Math.floor(Math.random() * 3);
      const action = Math.random();
      if (action > 0.6) {
        setLikes(prev => prev.map((v, i) => i === postIdx ? v + Math.floor(Math.random() * 3) + 1 : v));
      } else if (action > 0.3) {
        setComments(prev => prev.map((v, i) => i === postIdx ? v + 1 : v));
      } else {
        setShares(prev => prev.map((v, i) => i === postIdx ? v + 1 : v));
      }
    }, 2500);
    return () => clearInterval(interval);
  }, [visible]);

  // Feed notifications
  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      const types = ["like", "comment", "share", "follow", "like", "like"];
      const users = ["maria_lopez", "carlos_92", "ana_garcia", "pedro_m", "santiago_r", "diana_s", "lucia_23", "roberto_g"];
      const posts = ["Clínica Sonrisa", "Restaurante La Finca", "Barbería King's Cut", null];
      const type = types[Math.floor(Math.random() * types.length)];
      setFeed(prev => [{
        type: type as any,
        user: users[Math.floor(Math.random() * users.length)],
        post: posts[Math.floor(Math.random() * posts.length)],
        time: "Ahora",
      }, ...prev].slice(0, 5));
    }, 5000);
    return () => clearInterval(interval);
  }, [visible]);

  const maxReach = Math.max(...WEEKLY_DATA.map(d => d.reach));

  return (
    <div ref={sectionRef} className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      {/* Stats Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <StatCard
          label="Publicaciones"
          value={27}
          sub="este mes"
          color="bg-amber-500/20"
          icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-400"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 21V9" /></svg>}
        />
        <StatCard
          label="Alcance"
          value={23300}
          sub="personas"
          color="bg-violet-500/20"
          icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-violet-400"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>}
        />
        <StatCard
          label="Engagement"
          value={4850}
          sub="interacciones"
          color="bg-emerald-500/20"
          icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-400"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>}
        />
        <StatCard
          label="Seguidores"
          value={847}
          sub="+12% este mes"
          color="bg-cyan-500/20"
          icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-400"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>}
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Posts Feed */}
        <div className="lg:col-span-2 space-y-4">
          <div className="rounded-xl border border-white/[0.08] bg-[#12121a] p-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4">Publicaciones recientes</h3>
            <div className="space-y-4">
              {POSTS.map((post, i) => (
                <div key={post.id} className="flex gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-all hover:border-amber-500/20 hover:bg-white/[0.04]">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-2xl">
                    {post.image}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <PlatformIcon platform={post.platform} />
                      <span className="text-sm font-bold text-white">{post.author}</span>
                      <span className="text-xs text-white/30">{post.handle}</span>
                      <span className="ml-auto text-xs text-white/30">{post.time}</span>
                    </div>
                    <p className="text-sm text-white/60 mb-3 leading-relaxed">{post.content}</p>
                    <div className="flex items-center gap-5 text-xs text-white/40">
                      <span className="flex items-center gap-1.5 transition-all hover:text-pink-400">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                        <span className="font-semibold text-pink-400">{likes[i]}</span>
                      </span>
                      <span className="flex items-center gap-1.5 transition-all hover:text-blue-400">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                        <span>{comments[i]}</span>
                      </span>
                      <span className="flex items-center gap-1.5 transition-all hover:text-emerald-400">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                          <polyline points="16 6 12 2 8 6" />
                          <line x1="12" y1="2" x2="12" y2="15" />
                        </svg>
                        <span>{shares[i]}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Chart */}
          <div className="rounded-xl border border-white/[0.08] bg-[#12121a] p-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4">Rendimiento semanal</h3>
            <div className="flex items-end gap-2 h-40">
              {WEEKLY_DATA.map((d, i) => (
                <div key={d.day} className="flex-1 flex flex-col items-center gap-1">
                  <span className="text-[10px] text-white/30 font-medium">{(d.reach / 1000).toFixed(1)}k</span>
                  <div className="w-full rounded-t-md bg-gradient-to-t from-amber-500/40 to-amber-400/80 transition-all duration-1000 ease-out"
                    style={{ height: `${(d.reach / maxReach) * 100}%`, minHeight: "8px" }} />
                  <span className="text-[10px] text-white/40 font-medium">{d.day}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-6 text-xs text-white/40">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-amber-400" /> Alcance
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-amber-600" /> Publicaciones: {WEEKLY_DATA.reduce((s, d) => s + d.posts, 0)}
              </span>
            </div>
          </div>
        </div>

        {/* Activity Feed */}
        <div className="lg:col-span-1">
          <div className="rounded-xl border border-white/[0.08] bg-[#12121a] p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-bold uppercase tracking-wider text-white/40">Actividad en vivo</h3>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
            </div>
            <div className="space-y-3">
              {feed.map((item, i) => (
                <div key={`${item.user}-${item.time}-${i}`} className="flex items-center gap-3 rounded-lg bg-white/[0.02] px-3 py-2.5 animate-fade-in-up">
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs ${
                    item.type === "like" ? "bg-pink-500/20 text-pink-400" :
                    item.type === "comment" ? "bg-blue-500/20 text-blue-400" :
                    item.type === "share" ? "bg-emerald-500/20 text-emerald-400" :
                    "bg-violet-500/20 text-violet-400"
                  }`}>
                    {item.type === "like" && "♥"}
                    {item.type === "comment" && "💬"}
                    {item.type === "share" && "↗"}
                    {item.type === "follow" && "+"}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-white/70">
                      <span className="font-semibold">{item.user}</span>
                      {item.type === "like" && " le gustó "}
                      {item.type === "comment" && " comentó en "}
                      {item.type === "share" && " compartió "}
                      {item.type === "follow" && " siguió "}
                      {item.post && <span className="text-amber-400">{item.post}</span>}
                      {!item.post && <span className="text-amber-400">tu perfil</span>}
                    </div>
                    <div className="text-[10px] text-white/30">{item.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content Calendar Preview */}
          <div className="mt-6 rounded-xl border border-white/[0.08] bg-[#12121a] p-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-3">Calendario</h3>
            <div className="grid grid-cols-7 gap-1 text-center">
              {["L", "M", "X", "J", "V", "S", "D"].map(d => (
                <div key={d} className="text-[10px] text-white/30 font-medium py-1">{d}</div>
              ))}
              {Array.from({ length: 28 }, (_, i) => {
                const hasPost = [2, 5, 7, 9, 12, 14, 16, 19, 21, 23, 26].includes(i);
                const isToday = i === 14;
                return (
                  <div key={i} className={`relative flex items-center justify-center rounded-md py-1.5 text-xs transition-all ${
                    isToday ? "bg-amber-500/30 text-amber-300 font-bold ring-1 ring-amber-500/50" :
                    hasPost ? "bg-amber-500/10 text-white/50" :
                    "text-white/20"
                  }`}>
                    {i + 1}
                    {hasPost && !isToday && <span className="absolute -top-0.5 -right-0.5 h-1 w-1 rounded-full bg-amber-400" />}
                  </div>
                );
              })}
            </div>
            <div className="mt-3 flex items-center gap-3 text-[10px] text-white/30">
              <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-amber-400" /> Publicado</span>
              <span className="flex items-center gap-1"><span className="h-1.5 w-1.5 rounded-full bg-amber-500/50 ring-1 ring-amber-500" /> Hoy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
