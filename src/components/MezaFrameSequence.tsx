"use client";

import { useEffect, useRef } from "react";

const TOTAL_FRAMES = 80;
const frameSrc = (i: number) =>
  `/media/frames/${String(i + 1).padStart(2, "0")}.webp`;

interface MezaFrameSequenceProps {
  className?: string;
}

export default function MezaFrameSequence({
  className = "",
}: MezaFrameSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const cacheRef = useRef<Map<number, HTMLImageElement>>(new Map());
  const pendingRef = useRef<Set<number>>(new Set());

  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const currentFrameRef = useRef(-1);
  const isRunningRef = useRef(false);
  const isCancelledRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    isCancelledRef.current = false;

    // Respetar preferencias de accesibilidad
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Ajustar dimensiones del canvas en función del DPR
    const updateSize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const w = Math.round(window.innerWidth * dpr);
      const h = Math.round(window.innerHeight * dpr);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        if (currentFrameRef.current >= 0) {
          draw(currentFrameRef.current);
        }
      }
    };

    // Dibujar un frame con ajuste cover y punto focal
    const draw = (idx: number) => {
      if (!canvas || !ctx) return;
      let img = cacheRef.current.get(idx);

      // Si el frame no está listo, buscar el más cercano cargado
      if (!img || !img.complete || img.naturalWidth === 0) {
        for (let k = idx - 1; k >= 0; k--) {
          const c = cacheRef.current.get(k);
          if (c?.complete && c.naturalWidth > 0) {
            img = c;
            break;
          }
        }
        if (!img || !img.complete || img.naturalWidth === 0) {
          for (let k = idx + 1; k < TOTAL_FRAMES; k++) {
            const c = cacheRef.current.get(k);
            if (c?.complete && c.naturalWidth > 0) {
              img = c;
              break;
            }
          }
        }
      }

      if (!img || !img.complete || img.naturalWidth === 0) return;

      const cw = canvas.width;
      const ch = canvas.height;
      if (cw < 2 || ch < 2) return;

      const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
      const dw = img.naturalWidth * scale;
      const dh = img.naturalHeight * scale;

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
    };

    // Carga de frame individual
    const loadFrame = (idx: number) => {
      if (idx < 0 || idx >= TOTAL_FRAMES) return;
      if (cacheRef.current.has(idx) || pendingRef.current.has(idx)) return;
      pendingRef.current.add(idx);

      const img = new Image();
      img.decoding = "async";
      (img as any).fetchPriority = idx < 6 ? "high" : "low";
      img.src = frameSrc(idx);

      img.onload = () => {
        pendingRef.current.delete(idx);
        if (isCancelledRef.current) return;
        cacheRef.current.set(idx, img);

        const targetFrame = Math.min(
          TOTAL_FRAMES - 1,
          Math.max(0, Math.round(currentProgressRef.current * (TOTAL_FRAMES - 1)))
        );
        if (targetFrame === idx || currentFrameRef.current === -1) {
          draw(idx);
        }
      };

      img.onerror = () => {
        pendingRef.current.delete(idx);
      };

      cacheRef.current.set(idx, img);
    };

    // Precarga alrededor del frame actual
    const preloadAround = (center: number) => {
      for (const offset of [1, 2, 3, 4, 5, 6, -1, -2, -3]) {
        const target = center + offset;
        if (target >= 0 && target < TOTAL_FRAMES) {
          loadFrame(target);
        }
      }
    };

    // Bucle cinemático con lerp suave
    const tick = () => {
      if (isCancelledRef.current) {
        isRunningRef.current = false;
        return;
      }

      if (prefersReducedMotion) {
        if (currentFrameRef.current !== 0) {
          draw(0);
        }
        isRunningRef.current = false;
        return;
      }

      const diff = targetProgressRef.current - currentProgressRef.current;
      if (Math.abs(diff) > 0.0005) {
        currentProgressRef.current += diff * 0.14;
      } else {
        currentProgressRef.current = targetProgressRef.current;
      }

      const frameToDraw = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.round(currentProgressRef.current * (TOTAL_FRAMES - 1)))
      );

      if (frameToDraw !== currentFrameRef.current) {
        draw(frameToDraw);
        preloadAround(frameToDraw);
      }

      if (Math.abs(diff) > 0.0005) {
        requestAnimationFrame(tick);
      } else {
        isRunningRef.current = false;
      }
    };

    const startLoop = () => {
      if (!isRunningRef.current) {
        isRunningRef.current = true;
        requestAnimationFrame(tick);
      }
    };

    // Calcular progreso exacto sobre el scroll de la página /nosotros
    // Calibrado con el footer para que el Frame 80 culmine justo con la tarjeta de cierre comercial en foco
    const calculateProgress = () => {
      const footer = document.querySelector("footer");
      const footerOffset = footer ? Math.max(0, footer.offsetHeight * 0.45) : 0;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight - footerOffset;
      if (maxScroll <= 0) return 0;
      const scrollY = window.scrollY ?? document.documentElement.scrollTop ?? 0;
      return Math.min(1, Math.max(0, scrollY / maxScroll));
    };

    const handleScroll = () => {
      targetProgressRef.current = calculateProgress();
      startLoop();
    };

    const handleResize = () => {
      updateSize();
      targetProgressRef.current = calculateProgress();
      startLoop();
    };

    // Inicializar canvas y primeros frames
    updateSize();
    loadFrame(0);
    loadFrame(1);
    draw(0);

    const initialProgress = calculateProgress();
    targetProgressRef.current = initialProgress;
    currentProgressRef.current = initialProgress;
    startLoop();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    // Precarga escalonada ágil de los 80 frames
    const timers: number[] = [];
    const batch = (from: number, to: number) => {
      if (isCancelledRef.current) return;
      for (let i = from; i <= to && i < TOTAL_FRAMES; i++) {
        loadFrame(i);
      }
    };

    timers.push(window.setTimeout(() => batch(2, 15), 100));
    timers.push(window.setTimeout(() => batch(16, 35), 300));
    timers.push(window.setTimeout(() => batch(36, 60), 600));
    timers.push(window.setTimeout(() => batch(61, 79), 1000));

    return () => {
      isCancelledRef.current = true;
      timers.forEach((t) => window.clearTimeout(t));
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-0 pointer-events-none select-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="h-full w-full object-cover"
        style={{
          filter: "contrast(1.05) saturate(1.05) brightness(0.98)",
        }}
      />
      {/* Velo degradado sutil superior e inferior: mínimo para permitir brillo total del video */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/40 via-transparent to-[#0a0a0f]/50 pointer-events-none" />
    </div>
  );
}
