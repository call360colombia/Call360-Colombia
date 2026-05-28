import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThreeBackground from "@/components/ThreeBackground";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Call360 | Sistema Completo de Ventas para Colombia",
  description:
    "Te conseguimos clientes (páginas web + marketing) y te damos el sistema para gestionarlos (CRM WhatsApp + CRM Llamadas con minutos ilimitados). Desde $350.000.",
  icons: {
    icon: [
      { url: "/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon_io/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
    other: {
      rel: "android-chrome-192x192",
      url: "/android-chrome-192x192.png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${sora.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0f] text-white">
        <ThreeBackground />
        <Navbar />
        <main className="flex-1 pt-16 relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
