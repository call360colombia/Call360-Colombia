"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function FloatingActionDock() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  const isNosotros = pathname === "/nosotros" || pathname?.startsWith("/nosotros");

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const scrollY = window.scrollY ?? document.documentElement.scrollTop ?? 0;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? scrollY / maxScroll : 0;

      // Aparece después de 280px de scroll y se retira suavemente al entrar al pie de página (95%) para no taparlo
      setVisible(scrollY > 280 && progress < 0.95);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <aside
      aria-label="Barra de acción comercial flotante"
      className={`fixed bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out pointer-events-none select-none max-w-[96vw] ${
        visible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-10 opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`flex items-center gap-1 sm:gap-2 rounded-full border border-white/20 p-1.5 sm:p-2 shadow-[0_12px_40px_rgba(0,0,0,0.7),0_0_24px_rgba(16,185,129,0.15)] ${
          isNosotros
            ? "bg-[#080B11]/95" // Cero blur en /nosotros para no alterar la nitidez de los 80 frames
            : "bg-[#080B11]/90 backdrop-blur-xl"
        }`}
      >
        {/* 1. Páginas Web */}
        <Link
          href="/paginas-web"
          className="group flex items-center gap-1.5 sm:gap-2 rounded-full px-2.5 sm:px-3.5 py-1.5 text-xs font-bold text-white/80 transition-all hover:bg-white/10 hover:text-cyan-300 active:scale-95"
          title="Páginas Web de alto impacto desde $100.000/mes"
        >
          <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-cyan-500/15 border border-cyan-500/25 text-cyan-400 group-hover:scale-105 group-hover:border-cyan-400 transition-transform">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
          </div>
          <span className="hidden xs:inline sm:inline">Páginas Web</span>
          <span className="rounded bg-cyan-400/15 px-1.5 py-0.5 text-[10px] font-mono font-bold text-cyan-300 hidden md:inline">
            $100k
          </span>
        </Link>

        {/* Separador vertical discreto */}
        <span className="h-5 w-px bg-white/15 shrink-0" aria-hidden="true" />

        {/* 2. CRM WhatsApp */}
        <Link
          href="/crm-whatsapp"
          className="group flex items-center gap-1.5 sm:gap-2 rounded-full px-2.5 sm:px-3.5 py-1.5 text-xs font-bold text-white/80 transition-all hover:bg-white/10 hover:text-emerald-300 active:scale-95"
          title="CRM WhatsApp Multiagente y Campañas Masivas"
        >
          <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 group-hover:scale-105 group-hover:border-emerald-400 transition-transform">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <span className="hidden sm:inline">CRM WhatsApp</span>
          <span className="sm:hidden">CRM</span>
        </Link>

        {/* Separador vertical discreto */}
        <span className="h-5 w-px bg-white/15 shrink-0" aria-hidden="true" />

        {/* 3. Demo en Vivo */}
        <Link
          href="/demo"
          className="group flex items-center gap-1.5 sm:gap-2 rounded-full px-2.5 sm:px-3.5 py-1.5 text-xs font-bold text-white/80 transition-all hover:bg-white/10 hover:text-violet-300 active:scale-95"
          title="Probar demostración en vivo interactiva"
        >
          <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-violet-500/15 border border-violet-500/25 text-violet-400 group-hover:scale-105 group-hover:border-violet-400 transition-transform">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </div>
          <span className="hidden md:inline">Demo en Vivo</span>
          <span className="md:hidden">Demo</span>
        </Link>

        {/* 4. Botón Destacado de Acción Inmediata: Cotizar por WhatsApp */}
        <a
          href="https://wa.me/573203693949?text=Hola%20Call360%2C%20quiero%20cotizar%20las%20soluciones%20tecnol%C3%B3gicas%20para%20mi%20negocio"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 px-3.5 sm:px-5 py-2 text-xs font-black text-white shadow-lg shadow-emerald-500/30 transition-all hover:from-emerald-400 hover:to-green-500 hover:scale-[1.03] active:scale-95 cursor-pointer"
          title="Hablar directamente con un asesor por WhatsApp"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-90" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
          </span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="hidden xs:inline">Cotizar por WhatsApp</span>
          <span className="xs:hidden">Cotizar</span>
        </a>
      </div>
    </aside>
  );
}
