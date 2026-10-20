"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import WhatsAppButton from "./WhatsAppButton";
import Link from "next/link";
import { DEMO_PATH } from "@/lib/siteUrls";

const TOTAL_FRAMES = 80;
const frameSrc = (i: number) =>
  `/media/frames/${String(i + 1).padStart(2, "0")}.webp`;

export default function MezaScrollExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [displayFrame, setDisplayFrame] = useState(0);
  const [displayProgress, setDisplayProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);

  // Cache de imágenes con carga predictiva
  const cacheRef = useRef<Map<number, HTMLImageElement>>(new Map());
  const pendingRef = useRef<Set<number>>(new Set());
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const currentFrameRef = useRef(-1);
  const isCancelledRef = useRef(false);

  // Función para dibujar un frame con encuadre cover inteligente
  const draw = useCallback((idx: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    // Obtener imagen del cache
    let img = cacheRef.current.get(idx);
    if (!img || !img.complete || img.naturalWidth === 0) {
      // Buscar frame cargado más cercano hacia atrás
      for (let k = idx - 1; k >= 0; k--) {
        const candidate = cacheRef.current.get(k);
        if (candidate?.complete && candidate.naturalWidth > 0) {
          img = candidate;
          break;
        }
      }
      // Si no, buscar hacia adelante
      if (!img || !img.complete || img.naturalWidth === 0) {
        for (let k = idx + 1; k < TOTAL_FRAMES; k++) {
          const candidate = cacheRef.current.get(k);
          if (candidate?.complete && candidate.naturalWidth > 0) {
            img = candidate;
            break;
          }
        }
      }
    }

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const cw = canvas.width;
    const ch = canvas.height;
    if (cw < 2 || ch < 2) return;

    // Proporción cover
    const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
    const dw = img.naturalWidth * scale;
    const dh = img.naturalHeight * scale;

    // Centrado con punto focal en el rostro (~46% X, ~40% Y)
    const clampN = (v: number, lo: number, hi: number) =>
      v < lo ? lo : v > hi ? hi : v;
    const dx =
      dw <= cw ? (cw - dw) / 2 : clampN(cw * 0.5 - 0.46 * dw, cw - dw, 0);
    const dy =
      dh <= ch ? (ch - dh) * 0.42 : clampN(ch * 0.44 - 0.4 * dh, ch - dh, 0);

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, dx, dy, dw, dh);
    currentFrameRef.current = idx;
  }, []);

  // Función de carga con disparo inmediato de redibujo
  const loadFrame = useCallback(
    (idx: number): HTMLImageElement | null => {
      if (idx < 0 || idx >= TOTAL_FRAMES) return null;
      const hit = cacheRef.current.get(idx);
      if (hit?.complete && hit.naturalWidth > 0) return hit;
      if (pendingRef.current.has(idx)) return null;
      pendingRef.current.add(idx);

      const img = new Image();
      img.decoding = "async";
      img.fetchPriority = idx < 6 ? "high" : "low";
      img.src = frameSrc(idx);

      img.onload = () => {
        pendingRef.current.delete(idx);
        if (isCancelledRef.current) return;
        cacheRef.current.set(idx, img);

        if (idx === 0 && !isReady) {
          setIsReady(true);
        }

        // Si el usuario está detenido en este frame exacto o es el primer render
        const targetFrame = Math.min(
          TOTAL_FRAMES - 1,
          Math.max(0, Math.floor(currentProgressRef.current * (TOTAL_FRAMES - 1)))
        );
        if (targetFrame === idx || currentFrameRef.current === -1) {
          draw(idx);
        }
      };

      img.onerror = () => {
        pendingRef.current.delete(idx);
      };

      cacheRef.current.set(idx, img);
      return null;
    },
    [draw, isReady]
  );

  // Precarga dinámica alrededor de la posición actual del usuario
  const preloadAround = useCallback(
    (center: number) => {
      // Priorizar los siguientes 8 frames en dirección de avance y 3 hacia atrás
      const offsets = [0, 1, 2, 3, 4, 5, 6, 7, 8, -1, -2, -3];
      for (const off of offsets) {
        const target = center + off;
        if (target >= 0 && target < TOTAL_FRAMES) {
          loadFrame(target);
        }
      }
    },
    [loadFrame]
  );

  // Redimensionar canvas adaptado a Retina Display
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1, 2);
    const w = Math.round(canvas.clientWidth * dpr);
    const h = Math.round(canvas.clientHeight * dpr);

    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
      if (currentFrameRef.current >= 0) {
        draw(currentFrameRef.current);
      }
    }
  }, [draw]);

  // Ciclo principal de inicialización, precarga y Loop RAF con interpolación suave
  useEffect(() => {
    isCancelledRef.current = false;

    // 1. Cargar frames iniciales prioritarios
    for (let i = 0; i < 6; i++) {
      loadFrame(i);
    }

    // 2. Precarga progresiva rápida en segundo plano de todos los 80 frames
    const timers: number[] = [];
    const batchLoad = (from: number, to: number) => {
      if (isCancelledRef.current) return;
      for (let i = from; i <= to && i < TOTAL_FRAMES; i++) {
        loadFrame(i);
      }
    };

    timers.push(window.setTimeout(() => batchLoad(6, 22), 60));
    timers.push(window.setTimeout(() => batchLoad(23, 48), 200));
    timers.push(window.setTimeout(() => batchLoad(49, 68), 450));
    timers.push(window.setTimeout(() => batchLoad(69, 79), 750));

    // 3. Loop RAF continuo con interpolación suave (Lerp)
    let rafId = 0;
    let lastRenderedFrame = -1;

    const loop = () => {
      // Interpolación suave y pausada del progreso de scroll (ritmo cinematográfico 0.10)
      const diff = targetProgressRef.current - currentProgressRef.current;
      if (Math.abs(diff) > 0.0003) {
        currentProgressRef.current += diff * 0.10;
      } else {
        currentProgressRef.current = targetProgressRef.current;
      }

      const p = currentProgressRef.current;
      const targetIdx = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.floor(p * (TOTAL_FRAMES - 1)))
      );

      if (targetIdx !== lastRenderedFrame) {
        lastRenderedFrame = targetIdx;
        setDisplayFrame(targetIdx);
        setDisplayProgress(p);
        draw(targetIdx);
        preloadAround(targetIdx);
      }

      rafId = requestAnimationFrame(loop);
    };

    // 4. Cálculo instantáneo de scroll en contenedor
    const updateScrollProgress = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const containerHeight = rect.height;
      const windowHeight = window.innerHeight || 1;

      const totalScrollable = containerHeight - windowHeight;
      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      const rawProgress = scrolled / totalScrollable;
      targetProgressRef.current = Math.min(1, Math.max(0, rawProgress));
    };

    resizeCanvas();
    updateScrollProgress();
    currentProgressRef.current = targetProgressRef.current;
    loop();

    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", () => {
      resizeCanvas();
      updateScrollProgress();
    }, { passive: true });

    return () => {
      isCancelledRef.current = true;
      if (rafId) cancelAnimationFrame(rafId);
      timers.forEach((t) => window.clearTimeout(t));
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [draw, loadFrame, preloadAround, resizeCanvas]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[520vh] sm:h-[600vh] bg-[#080B11]"
      id="scroll-experiencia"
    >
      {/* CAPA STICKY QUE SE FIJA EN PANTALLA COMPLETA MIENTRAS EL USUARIO HACE SCROLL */}
      <div className="sticky top-0 h-[100dvh] sm:h-screen w-full overflow-hidden flex items-center justify-center">
        {/* CANVAS PRINCIPAL (RENDERIZADO CONTINUO DE FRAMES) */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
          style={{
            opacity: isReady ? 1 : 0.4,
            filter: "contrast(1.06) saturate(1.05) brightness(0.96)",
          }}
        />

        {/* VELOS CINEMATOGRÁFICOS SUTILES PARA DEJAR PROTAGONISTA EL CANVAS */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080B11] via-transparent to-[#080B11]/50 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(8,11,17,0.65)_100%)] pointer-events-none" />

        {/* INDICADOR DE PROGRESO Y CONTADOR DE FRAMES (GLASSMORPHIC) */}
        <div className="absolute top-20 sm:top-24 left-4 sm:left-8 z-30 flex items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/20 px-3.5 py-1 text-xs font-mono font-bold text-cyan-300 backdrop-blur-md shadow-lg shadow-black/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
            </span>
            <span>FRAME {String(displayFrame + 1).padStart(2, "0")} / 80</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 text-xs text-white/60 bg-black/20 border border-white/10 px-3 py-1 rounded-full backdrop-blur-md">
            <span>Scroll cinematográfico</span>
          </div>
        </div>

        {/* BARRA DE PROGRESO DE SCROLL LATERAL (DERECHA) */}
        <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-2 pointer-events-none">
          <div className="w-1 h-36 sm:h-52 rounded-full bg-white/10 overflow-hidden relative backdrop-blur-sm">
            <div
              className="w-full bg-gradient-to-b from-cyan-400 to-emerald-400 rounded-full transition-all duration-75"
              style={{ height: `${Math.round(displayProgress * 100)}%` }}
            />
          </div>
          <span className="text-[10px] font-mono text-cyan-400 font-bold">
            {Math.round(displayProgress * 100)}%
          </span>
        </div>

        {/* CAPA DE TEXTOS COMERCIALES SUPERPUESTOS SINCRONIZADOS CON FASES DE SCROLL (GLASSMORPHISM REAL) */}
        <div className="relative z-20 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full pointer-events-none">
          {/* FASE 1: 0% a 25% — Presentación y Dirección de Juan David Meza */}
          <div
            className={`transition-all duration-500 transform ${
              displayProgress < 0.26
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-6 pointer-events-none absolute inset-x-0"
            }`}
          >
            <div className="max-w-xl mx-auto md:mx-0 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-black/25 border border-white/10 hover:border-cyan-400/40 backdrop-blur-md shadow-2xl shadow-black/40 transition-all duration-300">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300 mb-4 backdrop-blur-sm">
                Arquitectura &amp; Dirección Comercial
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                Juan David Meza
              </h2>
              <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed font-medium">
                Plataforma desarrollada y respaldada directamente por su creador. Sin intermediarios, sin plantillas extranjeras en dólares y sin tickets eternos.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <WhatsAppButton
                  text="Hola Juan David, quiero una asesoría directa sobre cómo implementar Call360 en mi empresa"
                  label="Hablar con Juan David"
                  className="min-h-[46px] sm:min-h-[48px] text-xs sm:text-sm px-5 py-2.5 !bg-emerald-500/25 hover:!bg-emerald-500/35 !border !border-emerald-400/40 backdrop-blur-md shadow-lg shadow-black/30"
                />
                <span className="text-xs text-white/60 font-medium">
                  Desliza para ver la tecnología ↓
                </span>
              </div>
            </div>
          </div>

          {/* FASE 2: 26% a 55% — Dolor y Solución WhatsApp Multiagente */}
          <div
            className={`transition-all duration-500 transform ${
              displayProgress >= 0.26 && displayProgress < 0.58
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-6 pointer-events-none absolute inset-x-0"
            }`}
          >
            <div className="max-w-xl mx-auto md:ml-auto p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-black/25 border border-white/10 hover:border-emerald-400/40 backdrop-blur-md shadow-2xl shadow-black/40 transition-all duration-300">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4 backdrop-blur-sm">
                Cero Prospectos Perdidos
              </span>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
                No pierdas clientes por demoras al responder en WhatsApp
              </h2>
              <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed font-medium">
                Varios asesores atendiendo desde el mismo número comercial con historial compartido, tareas de seguimiento y bandeja unificada.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-white/80">
                <div className="p-3 rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm">
                  <strong className="block text-emerald-400 text-sm font-black">18 Segundos</strong>
                  Tiempo promedio respuesta
                </div>
                <div className="p-3 rounded-xl sm:rounded-2xl bg-white/[0.04] border border-white/10 backdrop-blur-sm">
                  <strong className="block text-cyan-400 text-sm font-black">1 Solo Número</strong>
                  Múltiples agentes en simultáneo
                </div>
              </div>
            </div>
          </div>

          {/* FASE 3: 58% a 82% — Campañas Masivas con Cadencia Anti-Bloqueo */}
          <div
            className={`transition-all duration-500 transform ${
              displayProgress >= 0.58 && displayProgress < 0.85
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-6 pointer-events-none absolute inset-x-0"
            }`}
          >
            <div className="max-w-xl mx-auto md:mx-0 p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-black/25 border border-white/10 hover:border-cyan-400/40 backdrop-blur-md shadow-2xl shadow-black/40 transition-all duration-300">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300 mb-4 backdrop-blur-sm">
                Campañas Sin Enredos
              </span>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
                Difusión masiva con cadencia segura y horario colombiano
              </h2>
              <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed font-medium">
                Envía promociones y reactiva tu cartera de clientes sin riesgo de baneo. Despacho programado con variables personalizadas ({`{Nombre}`}, {`{Empresa}`}).
              </p>
              <div className="mt-5 p-3.5 rounded-xl sm:rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-200 backdrop-blur-sm">
                ⚡ <strong>Protección anti-bloqueo:</strong> Intervalos variables entre mensajes y control estricto de velocidad de envío.
              </div>
            </div>
          </div>

          {/* FASE 4: 85% a 100% — Trato Directo y Cierre */}
          <div
            className={`transition-all duration-500 transform ${
              displayProgress >= 0.85
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-6 pointer-events-none absolute inset-x-0"
            }`}
          >
            <div className="max-w-xl mx-auto p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-black/30 border border-cyan-400/30 hover:border-cyan-400/50 backdrop-blur-md shadow-2xl shadow-black/50 text-center transition-all duration-300">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-300 mb-4 backdrop-blur-sm">
                Soporte Inmediato
              </span>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
                Hablas directamente con el creador del software
              </h2>
              <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed font-medium">
                Revisamos la operación de tu negocio y estructuramos tu CRM de WhatsApp o llamadas en menos de 24 horas.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 w-full sm:w-auto">
                <WhatsAppButton
                  text="Hola Juan David, vi toda la animación de scroll y quiero agendar una demostración para mi empresa"
                  label="Contactar a Juan David"
                  className="w-full sm:w-auto min-h-[46px] sm:min-h-[48px] text-xs sm:text-sm px-6 py-3 !bg-emerald-500/25 hover:!bg-emerald-500/35 !border !border-emerald-400/40 backdrop-blur-md shadow-xl shadow-black/30"
                />
                <Link
                  href={DEMO_PATH}
                  className="w-full sm:w-auto min-h-[46px] sm:min-h-[48px] inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-6 py-3 text-xs sm:text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/[0.12] hover:border-white/30 active:scale-[0.98]"
                >
                  Ver Demo Guiada
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* HINT VISUAL DE SCROLL INFERIOR (DESAPARECE TRAS EL INICIO) */}
        <div
          className={`absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 transition-opacity duration-500 pointer-events-none ${
            displayProgress < 0.15 ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-[11px] font-bold uppercase tracking-widest text-cyan-400 drop-shadow">
            Desliza para animar
          </span>
          <div className="w-5 h-8 rounded-full border-2 border-cyan-400/40 flex items-start justify-center p-1 backdrop-blur-sm">
            <div className="w-1 h-2 rounded-full bg-cyan-400 animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
}
