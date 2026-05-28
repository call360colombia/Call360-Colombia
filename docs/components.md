# Componentes Reutilizables

Catálogo de los 20 componentes en `src/components/`.

## Componentes de Layout

### `Navbar.tsx`
Navegación fija superior con logo Call360 y links a todas las páginas. Se oculta al hacer scroll down y reaparece al scroll up.

### `Footer.tsx`
Pie de página con información de contacto, enlaces rápidos y copyright.

### `ThreeBackground.tsx`
Fondo 3D animado con cubos wireframe usando Three.js. Cambia dinámicamente entre los colores cyan, violeta y ámbar de Call360. Se importa dinámicamente para no bloquear el render inicial.

## Componentes de Contenido

### `ScrollReveal.tsx`
Wrapper que anima su contenido al entrar en el viewport usando IntersectionObserver. Aplica `animate-fade-in-up` con opacidad y translate.

**Uso:**
```tsx
<ScrollReveal>
  <div>Contenido que aparece al scroll</div>
</ScrollReveal>
```

### `SectionHeader.tsx`
Encabezado de sección con badge, título con gradiente y subtítulo.

**Props:** `badge`, `badgeColor`, `title`, `titleGradient`, `subtitle`

### `FeatureCard.tsx`
Tarjeta de feature con ícono, título y descripción. Usada en grids de features.

**Props:** `icon`, `title`, `description`, `gradient`

### `ServiceCard.tsx`
Tarjeta de servicio que enlaza a una página. Muestra ícono, título, descripción, beneficio y enlace "Ver más".

**Props:** `title`, `description`, `benefit`, `href`, `icon`, `gradient`

## Componentes de Prueba Social

### `ComparisonTable.tsx`
Tabla comparativa de 2 columnas (alternativa vs Call360). Muestra 6 filas con el estado "antes" en texto gris y el estado "Call360" en cyan.

**Props:** `title`, `subtitle`, `items[]` (con `informal` y `call360`)

### `BeforeAfter.tsx`
Transformaciones "antes/después" con 4 pares de estados.

**Props:** `title`, `subtitle`, `items[]` (con `before` y `after`)

### `WhyChooseUs.tsx`
Grid de 6 beneficios con título y descripción. Sección "¿Por qué elegirnos?"

**Props:** `title`, `benefits[]` (con `title` y `description`)

### `TrustBlock.tsx`
Bloque de confianza con título, descripción, bullet points y declaración de cierre.

**Props:** `title`, `description`, `bullets[]`, `closingStatement`

### `FAQSection.tsx`
Sección de preguntas frecuentes con acordeón interactivo (details/summary).

**Props:** `title`, `items[]` (con `question` y `answer`)

### `HowItWorks.tsx`
Pasos "Cómo funciona" con 3 tarjetas numeradas.

**Props:** `title`, `subtitle`, `steps[]` (con `number`, `title`, `description`)

## Componentes de Pricing

### `PricingCard.tsx`
Tarjeta de plan con nombre, precio, descripción, features y botón de WhatsApp. Soporta `featured` para plan destacado e imagen opcional.

**Props:** `name`, `price`, `period`, `description`, `features[]`, `featured`, `badge`, `waText`, `imageUrl`, `imageAlt`

## Componentes de Interacción

### `WhatsAppButton.tsx`
Botón de WhatsApp que abre wa.me con mensaje predefinido. Muestra ícono de WhatsApp + texto.

**Props:** `text` (mensaje URL-encoded), `className`

### `ImageSlider.tsx`
Carrusel de imágenes con fade automático, pausa al hover y indicadores. Controlado por React state + setInterval.

**Props:** `images[]` (con `src` y `alt`), `interval`

## Simuladores (Componentes de Demo)

### `LiveActivityWidget.tsx`
Widget de actividad en vivo para la página de inicio. Muestra contadores de llamadas, mensajes y visitas web con cambios de estado en tiempo real.

### `IssabelDashboard.tsx`
Simulación del dashboard de Issabel PBX para crm-llamadas. Muestra 10 agentes con estados dinámicos, temporizadores, métricas y notificaciones.

### `WhatsAppLiveChat.tsx`
Simulación de interfaz WhatsApp Web para crm-whatsapp. Incluye lista de contactos, mensajes en vivo, indicador de escritorio y etiquetas de estado.

### `MarketingDashboard.tsx`
Dashboard de analytics para marketing-digital. Muestra feed de publicaciones, contadores de engagement, gráfico semanal y actividad en vivo.
