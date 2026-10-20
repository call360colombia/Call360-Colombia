import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  // Export estático para hosting compartido Apache (public_html, sin Node.js).
  // La carpeta publicable es `out/`. Los redirects 301 viven en `.htaccess`.
  output: "export",
  images: {
    // Sin servidor Node no hay optimizador de imágenes: se sirven tal cual.
    unoptimized: true,
    localPatterns: [
      { pathname: "/**", search: "" },
      { pathname: "/**", search: "?v=2" },
    ],
  },
  async redirects() {
    // Solo aplica con servidor Node/Netlify. En Apache ver public/.htaccess.
    return [
      // /licencias eliminado del frontend comercial: redirige a /servicios
      { source: "/licencias", destination: "/servicios", permanent: true },
      { source: "/licencias/:path*", destination: "/servicios", permanent: true },
      // Ruta canónica de marketing: /marketing (alias legacy /marketing-digital)
      { source: "/marketing-digital", destination: "/marketing", permanent: true },
      {
        source: "/marketing-digital/:path*",
        destination: "/marketing",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
