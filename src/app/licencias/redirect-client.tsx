"use client";

import { useEffect } from "react";

export default function LicenciasRedirectClient() {
  useEffect(() => {
    window.location.replace("/servicios");
  }, []);

  return (
    <section className="py-24 text-center">
      <p className="text-white/60">
        Esta página se trasladó a{" "}
        <a href="/servicios" className="font-bold text-cyan-400 hover:text-cyan-300">
          Servicios
        </a>
        .
      </p>
    </section>
  );
}
