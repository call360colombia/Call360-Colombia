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

  const [progress, setProgress] = useState(0);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isReady, setIsReady] = useState(false);

  // Cache de imágenes precargadas
  const imagesRef = useRef<(HTMLImageElement | null)[]>(
    new Array(TOTAL_FRAMES).fill(null)
  );
  const loadedCountRef = useRef(0);
  const lastRenderedIndexRef = useRef(-1);

  // Función para dibujar un frame con ajuste "cover" y punto focal en el rostro
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    // Buscar el frame deseado o el más cercano cargado
    let img = imagesRef.current[index];
    if (!img || !img.complete || img.naturalWidth === 0) {
      // Buscar hacia atrás
      for (let i = index - 1; i >= 0; i--) {
        const candidate = imagesRef.current[i];
        if (candidate?.complete && candidate.naturalWidth > 0) {
          img = candidate;
          break;
        }
      }
      // Si aún no, buscar hacia adelante
      if (!img || !img.complete || img.naturalWidth === 0) {
        for (let i = index + 1; i < TOTAL_FRAMES; i++) {
          const candidate = imagesRef.current[i];
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

    // Proporción "cover"
    const hRatio = cw / img.naturalWidth;
    const vRatio = ch / img.naturalHeight;
    const scale = Math.max(hRatio, vRatio);

    const dw = img.naturalWidth * scale;
    const dh = img.naturalHeight * scale;

    // Encuadre inteligente con punto focal en rostro (~46% X, ~40% Y)
    const clampN = (v: number, lo: number, hi: number) =>
      v < lo ? lo : v > hi ? hi : v;

    const dx =
      dw <= cw ? (cw - dw) / 2 : clampN(cw * 0.5 - 0.46 * dw, cw - dw, 0);
    const dy =
      dh <= ch ? (ch - dh) * 0.42 : clampN(ch * 0.44 - 0.4 * dh, ch - dh, 0);

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(img, dx, dy, dw, dh);
    lastRenderedIndexRef.current = index;
  }, []);

  // Redimensionar el canvas adaptado a Retina display
  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = Math.round(canvas.clientWidth * dpr);
    const h = Math.round(canvas.clientHeight * dpr);

    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
      if (lastRenderedIndexRef.current >= 0) {
        drawFrame(lastRenderedIndexRef.current);
      }
    }
  }, [drawFrame]);

  // Precarga progresiva e inteligente de los 80 frames
  useEffect(() => {
    let isCancelled = false;

    // 1. Prioridad máxima a los primeros 4 frames para render instantáneo
    for (let i = 0; i < 4; i++) {
      const img = new Image();
      img.decoding = "async";
      img.fetchPriority = "high";
      img.src = frameSrc(i);
      img.onload = () => {
        if (isCancelled) return;
        imagesRef.current[i] = img;
        loadedCountRef.current++;
        if (i === 0) {
          setIsReady(true);
          resizeCanvas();
          drawFrame(0);
        }
      };
    }

    // 2. Carga en lotes progresivos del resto para no saturar la red en móviles
    const timers: number[] = [];

    const loadRange = (start: number, end: number) => {
      if (isCancelled) return;
      for (let i = start; i <= end && i < TOTAL_FRAMES; i++) {
        if (imagesRef.current[i]) continue;
        const img = new Image();
        img.decoding = "async";
        img.fetchPriority = "low";
        img.src = frameSrc(i);
        img.onload = () => {
          if (isCancelled) return;
          imagesRef.current[i] = img;
          loadedCountRef.current++;
        };
      }
    };

    timers.push(window.setTimeout(() => loadRange(4, 20), 80));
    timers.push(window.setTimeout(() => loadRange(21, 45), 250));
    timers.push(window.setTimeout(() => loadRange(46, 65), 550));
    timers.push(window.setTimeout(() => loadRange(66, 79), 900));

    return () => {
      isCancelled = true;
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, [drawFrame, resizeCanvas]);

  // Manejador de scroll de alto rendimiento con requestAnimationFrame
  useEffect(() => {
    let rafId = 0;

    const handleScroll = () => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        rafId = 0;
        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const containerHeight = rect.height;
        const windowHeight = window.innerHeight || 1;

        // Recorrido total disponible
        const totalScrollable = containerHeight - windowHeight;
        if (totalScrollable <= 0) return;

        // Cuánto se ha scrolleado del contenedor
        const scrolled = -rect.top;
        const rawProgress = scrolled / totalScrollable;
        const clampedProgress = Math.min(1, Math.max(0, rawProgress));

        setProgress(clampedProgress);

        // Mapear directamente a los 80 frames (0 a 79)
        const frameIdx = Math.min(
          TOTAL_FRAMES - 1,
          Math.max(0, Math.floor(clampedProgress * (TOTAL_FRAMES - 1)))
        );

        setCurrentFrame(frameIdx);
        drawFrame(frameIdx);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", resizeCanvas, { passive: true });

    // Primer ajuste
    resizeCanvas();
    handleScroll();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [drawFrame, resizeCanvas]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[320vh] sm:h-[360vh] bg-[#0a0a0f]"
      id="scroll-experiencia"
    >
      {/* CAPA STICKY QUE SE FIJA EN PANTALLA COMPLETA MIENTRAS EL USUARIO HACE SCROLL */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* CANVAS PRINCIPAL (RENDERIZADO CONTINUO DE FRAMES) */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
          style={{
            opacity: isReady ? 1 : 0.4,
            filter: "contrast(1.08) saturate(1.05) brightness(0.94)",
          }}
        />

        {/* VELOS CINEMATOGRÁFICOS PARA CONTRASTE Y LEGIBILIDAD EN MÓVIL Y PC */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-black/40 to-[#0a0a0f]/80 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(10,10,15,0.85)_95%)] pointer-events-none" />

        {/* INDICADOR DE PROGRESO Y CONTADOR DE FRAMES */}
        <div className="absolute top-20 sm:top-24 left-4 sm:left-8 z-30 flex items-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-black/60 px-3.5 py-1 text-xs font-mono font-bold text-cyan-300 backdrop-blur-md shadow-lg shadow-cyan-950/40">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
            </span>
            <span>FRAME {String(currentFrame + 1).padStart(2, "0")} / 80</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 text-xs text-white/50 bg-black/40 border border-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
            <span>Scroll interactivo activo</span>
          </div>
        </div>

        {/* BARRA DE PROGRESO DE SCROLL LATERAL (DERECHA) */}
        <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-2 pointer-events-none">
          <div className="w-1 h-32 sm:h-48 rounded-full bg-white/10 overflow-hidden relative">
            <div
              className="w-full bg-gradient-to-b from-cyan-400 to-emerald-400 rounded-full transition-all duration-75"
              style={{ height: `${Math.round(progress * 100)}%` }}
            />
          </div>
          <span className="text-[10px] font-mono text-cyan-400 font-bold">
            {Math.round(progress * 100)}%
          </span>
        </div>

        {/* CAPA DE TEXTOS COMERCIALES SUPERPUESTOS SINCRONIZADOS CON FASES DE SCROLL */}
        <div className="relative z-20 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 w-full pointer-events-none">
          {/* FASE 1: 0% a 25% — Presentación y Dirección de Juan David Meza */}
          <div
            className={`transition-all duration-700 transform ${
              progress < 0.26
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-8 pointer-events-none hidden"
            }`}
          >
            <div className="max-w-xl mx-auto md:mx-0 p-6 sm:p-8 rounded-3xl bg-[#0c0c14]/85 border border-cyan-500/30 backdrop-blur-xl shadow-2xl shadow-cyan-950/30">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300 mb-4">
                Arquitectura &amp; Dirección Comercial
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                Juan David Meza
              </h2>
              <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed">
                Plataforma desarrollada y respaldada directamente por su creador. Sin intermediarios, sin plantillas extranjeras en dólares y sin tickets eternos.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <WhatsAppButton
                  text="Hola Juan David, quiero una asesoría directa sobre cómo implementar Call360 en mi empresa"
                  label="Hablar con Juan David"
                  className="text-xs sm:text-sm px-5 py-2.5 shadow-lg shadow-emerald-500/20"
                />
                <span className="text-xs text-white/50">
                  Desliza para ver la tecnología ↓
                </span>
              </div>
            </div>
          </div>

          {/* FASE 2: 26% a 55% — Dolor y Solución WhatsApp Multiagente */}
          <div
            className={`transition-all duration-700 transform ${
              progress >= 0.26 && progress < 0.58
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-8 pointer-events-none hidden"
            }`}
          >
            <div className="max-w-xl mx-auto md:ml-auto p-6 sm:p-8 rounded-3xl bg-[#0c0c14]/85 border border-emerald-500/30 backdrop-blur-xl shadow-2xl shadow-emerald-950/30">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400 mb-4">
                Cero Prospectos Perdidos
              </span>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
                No pierdas clientes por demoras al responder en WhatsApp
              </h2>
              <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed">
                Varios asesores atendiendo desde el mismo número comercial con historial compartido, tareas de seguimiento y bandeja unificada.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-white/70">
                <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                  <strong className="block text-emerald-400 text-sm font-bold">18 Segundos</strong>
                  Tiempo promedio respuesta
                </div>
                <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                  <strong className="block text-cyan-400 text-sm font-bold">1 Solo Número</strong>
                  Múltiples agentes en simultáneo
                </div>
              </div>
            </div>
          </div>

          {/* FASE 3: 58% a 82% — Campañas Masivas con Cadencia Anti-Bloqueo */}
          <div
            className={`transition-all duration-700 transform ${
              progress >= 0.58 && progress < 0.85
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-8 pointer-events-none hidden"
            }`}
          >
            <div className="max-w-xl mx-auto md:mx-0 p-6 sm:p-8 rounded-3xl bg-[#0c0c14]/85 border border-cyan-500/30 backdrop-blur-xl shadow-2xl shadow-cyan-950/30">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300 mb-4">
                Campañas Sin Enredos
              </span>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
                Difusión masiva con cadencia segura y horario colombiano
              </h2>
              <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed">
                Envía promociones y reactiva tu cartera de clientes sin riesgo de baneo. Despacho programado con variables personalizadas ({`{Nombre}`}, {`{Empresa}`}).
              </p>
              <div className="mt-5 p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-200">
                ⚡ <strong>Protección anti-bloqueo:</strong> Intervalos variables entre mensajes y control estricto de velocidad de envío.
              </div>
            </div>
          </div>

          {/* FASE 4: 85% a 100% — Trato Directo y Cierre */}
          <div
            className={`transition-all duration-700 transform ${
              progress >= 0.85
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 translate-y-8 pointer-events-none hidden"
            }`}
          >
            <div className="max-w-xl mx-auto p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-[#0c0c14]/95 to-violet-500/20 border-2 border-cyan-400/60 backdrop-blur-2xl shadow-2xl shadow-cyan-500/20 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/15 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-300 mb-4">
                Soporte Inmediato
              </span>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white leading-tight">
                Hablas directamente con el creador del software
              </h2>
              <p className="mt-3 text-sm sm:text-base text-white/80 leading-relaxed">
                Revisamos la operación de tu negocio y estructuramos tu CRM de WhatsApp o llamadas en menos de 24 horas.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <WhatsAppButton
                  text="Hola Juan David, vi toda la animación de scroll y quiero agendar una demostración para mi empresa"
                  label="Contactar a Juan David"
                  className="w-full sm:w-auto text-sm px-6 py-3 shadow-xl shadow-emerald-500/30"
                />
                <Link
                  href={DEMO_PATH}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-6 py-3 text-sm font-bold text-white transition-all hover:bg-white/[0.1]"
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
            progress < 0.15 ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="text-[11px] font-bold uppercase tracking-widest text-cyan-400">
            Desliza para animar
          </span>
          <div className="w-5 h-8 rounded-full border-2 border-cyan-400/40 flex items-start justify-center p-1">
            <div className="w-1 h-2 rounded-full bg-cyan-400 animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
}
