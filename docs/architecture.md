# Arquitectura del Sistema

## Visión General

Call360 Marketing es un sitio estático de Next.js (App Router) diseñado como funnel de conversión. Cada página sigue la estructura **impacto → explicación → prueba social → acción**.

## Separación por Capas

### 1. Layout Global (`src/app/layout.tsx`)

Envuelve todas las páginas con:
- **Navbar** — navegación fija con logo y links
- **Footer** — información de contacto y enlaces
- **ThreeBackground** — fondo 3D animado (cubos wireframe con colores Call360)
- **Google Analytics** — tracking de eventos
- Fuentes Geist Sans y Geist Mono via `next/font`

### 2. Páginas (`src/app/*/page.tsx`)

Cada página es un Server Component de Next.js con:
- `export const metadata` — título y descripción SEO
- JSX con secciones secuenciales
- Datos hardcodeados (sin base de datos externa)

### 3. Componentes (`src/components/`)

Componentes React reutilizados entre páginas. Ver [components.md](components.md) para el catálogo completo.

### 4. Estilos (`src/styles/globals.css`)

Estilos globales Tailwind + animaciones CSS personalizadas:
- `animate-fade-in-up` — entrada con scroll
- `animate-float` — flotación de elementos
- `animate-pulse-slow` — pulsación sutil
- `mesh-gradient` — gradiente de malla para heroes
- `hero-bg-*` — fondos específicos por página
- `noise-overlay` — textura de ruido
- `grid-pattern` — patrón de cuadrícula

## Patrón de Sección Estándar

Todas las páginas usan un patrón consistente para secciones:

```tsx
<section className="py-32 bg-[#0f0f17]/50">  {/* Alternancia de fondo */}
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <ScrollReveal>
      {/* Contenido de la sección */}
    </ScrollReveal>
  </div>
</section>
```

**Reglas:**
- `py-32` — padding vertical consistente
- Alternancia entre fondo transparente y `bg-[#0f0f17]/50`
- `max-w-6xl` — ancho máximo del contenido
- `ScrollReveal` — animación de entrada al hacer scroll

## Flujo de Conversión por Tipo de Página

### Páginas de Servicio (crm-whatsapp, crm-llamadas, marketing-digital, paginas-web)

```
Hero (min-h-screen) → Features → Vista del Sistema → Dashboard en Vivo →
Pricing → Why Choose Us → How It Works → Comparison → Before/After →
Trust Block → FAQ → CTA
```

### Páginas de Catálogo (servicios, licencias)

```
Hero → Grid de Productos/Servicios → Sección Destacada → Confianza → CTA
```

### Páginas Institucionales (inicio, nosotros)

```
Hero → Propuesta de Valor → Servicios → Confianza → Stats → FAQ → CTA
```

## Manejo de Imágenes

- Todas las imágenes están en `/public/` organizadas por subcarpeta
- Se usan con `next/image` para optimización automática
- Todas las referencias incluyen `?v=2` para cache busting
- `next.config.ts` configura `images.localPatterns` para permitir query strings

## Performance

- **Build estático**: todas las páginas se pre-renderizan como HTML estático
- **Sin client-side fetching**: no hay llamadas a APIs externas
- **Componentes lazy**: `ThreeBackground` se importa dinámicamente
- **Imágenes optimizadas**: next/image genera WebP/AVIF automáticamente
- **CSS-first**: animaciones con CSS, no JavaScript pesado
