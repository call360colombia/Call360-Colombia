"use client";

import ModernSaaSMockup from "./ModernSaaSMockup";

export default function DemoMockup() {
  return (
    <div className="w-full space-y-3">
      <div className="flex items-center justify-between px-2 text-xs text-white/50">
        <span className="flex items-center gap-1.5 font-medium">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Simulador interactivo del CRM en vivo
        </span>
        <span className="hidden sm:inline text-cyan-400 font-medium">
          Toca las pestañas para cambiar de módulo ↑
        </span>
      </div>
      <ModernSaaSMockup variant="hero" className="w-full" />
    </div>
  );
}
