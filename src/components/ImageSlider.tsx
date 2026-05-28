"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

interface SliderImage {
  src: string;
  alt: string;
}

interface ImageSliderProps {
  images: SliderImage[];
  interval?: number;
}

export default function ImageSlider({ images, interval = 4000 }: ImageSliderProps) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [mounted, setMounted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (isPaused || !mounted) return;
    timerRef.current = setInterval(goNext, interval);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, interval, goNext, mounted]);

  return (
    <div
      className="relative group animate-fade-in-up"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className={`relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/[0.08] bg-[#12121a] shadow-2xl shadow-cyan-500/10 transition-all duration-500 ${
          isPaused ? "scale-[1.02]" : "scale-100"
        }`}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{ opacity: index === current ? 1 : 0 }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        ))}

        {isPaused && (
          <div className="absolute top-4 right-4 z-10 flex items-center gap-2 rounded-full border border-white/[0.12] bg-black/60 px-3 py-1.5 text-xs font-medium text-white/70 backdrop-blur-sm">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
            Pausado
          </div>
        )}
      </div>

      <div className="flex items-center justify-center gap-2 mt-5">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`rounded-full transition-all duration-500 ease-out ${
              index === current
                ? "w-8 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/30"
                : "w-2 bg-white/20 hover:bg-white/40"
            } h-2`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
