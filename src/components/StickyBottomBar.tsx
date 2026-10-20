"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import DemoRequestForm from "./DemoRequestForm";
import ServiceLeadForm from "./ServiceLeadForm";

function subscribe() {
  return () => {};
}

function getDismissedSnapshot(): boolean {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem("c360_stickybar_dismissed") === "1";
}

function getDismissedServerSnapshot(): boolean {
  return false;
}

export default function StickyBottomBar() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const storedDismissed = useSyncExternalStore(
    subscribe,
    getDismissedSnapshot,
    getDismissedServerSnapshot,
  );

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (storedDismissed && !dismissed) {
    setDismissed(true);
  }
  if (dismissed) return null;

  const handleDismiss = () => {
    setDismissed(true);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("c360_stickybar_dismissed", "1");
    }
  };

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/[0.08] bg-[#0a0a0f]/95 px-3 py-2.5 backdrop-blur-xl transition-all duration-500 md:hidden ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
      }`}
      role="region"
      aria-label="Acciones rápidas"
    >
      <div className="flex items-center gap-2">
        <ServiceLeadForm
          service="integrado"
          triggerLabel="Cotizar"
          triggerVariant="primary"
          triggerClassName="!px-4 !py-2.5 !text-sm flex-1"
        />
        <DemoRequestForm
          title="Agenda una demo"
          subtitle="Te llamamos en menos de 5 minutos"
          ctaLabel="Agendar"
          defaultService="integrado"
          className="!px-4 !py-2.5 !text-sm flex-1 !bg-gradient-to-r !from-cyan-500 !to-blue-600 !text-white !rounded-full !font-bold"
        />
        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Cerrar barra"
          className="shrink-0 rounded-full border border-white/[0.08] bg-[#12121a] p-2 text-white/50 hover:text-white"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
