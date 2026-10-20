import type { Metadata } from "next";
import LicenciasRedirectClient from "./redirect-client";

export const metadata: Metadata = {
  title: "Servicios | Call360 Colombia",
  description:
    "Esta página se trasladó a Servicios: minutos y llamadas, WhatsApp CRM, marketing y páginas web para Colombia.",
  robots: { index: false, follow: true },
};

/**
 * Ruta /licencias eliminada del frontend comercial.
 * En export estático no hay `redirect()` de servidor: el 301 real lo aplica
 * `.htaccess` y este HTML es solo red de seguridad (JS + enlace manual).
 */
export default function LicenciasRedirect() {
  return <LicenciasRedirectClient />;
}
