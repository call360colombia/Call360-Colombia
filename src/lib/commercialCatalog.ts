/**
 * Catálogo Comercial Oficial y Definitivo — Call360 Colombia
 *
 * Fuente única de verdad tipada para precios, créditos y beneficios de planes.
 * Precios fijos independientes en COP y USD (sin conversión dinámica).
 * Cupos de créditos compartidos a nivel empresa/tenant.
 *
 * REGLA COMERCIAL FUNDAMENTAL:
 * Demo, Starter, Pro y Deluxe tienen EXACTAMENTE LAS MISMAS FUNCIONES actuales del CRM.
 * Solo cambia la duración del Demo y el cupo de Créditos IA por empresa.
 * No existen funciones exclusivas por nivel: transcripción, informes, análisis,
 * sugerencias, traducción y asistente están incluidos desde Demo, sujetos al cupo.
 */

export type Currency = 'COP' | 'USD';

export interface PlanPricing {
  amount: number;
  formatted: string;
  period: string;
}

export interface CommercialPlan {
  id: 'demo' | 'starter' | 'pro' | 'deluxe';
  tierCode: 'SILVER CHROMIUM' | 'CHAMPAGNE GOLD IA' | 'PLATINUM EMERALD' | 'BLACK TITANIUM 24K';
  cardNumber: string;
  name: string;
  tagline: string;
  description: string;
  aiCredits: number;
  aiCreditsLabel: string;
  durationLabel: string;
  usageMultiplier?: {
    ratio: string;
    title: string;
    badge: string;
    highlightText: string;
  };
  isTrial?: boolean;
  trialDays?: number;
  pricing: Record<Currency, PlanPricing>;
  launchPromo?: {
    enabled: boolean;
    discountPercent: number;
    pricing: Record<Currency, PlanPricing>;
    note: string;
  };
  features: string[];
  ctaLabel: string;
  ctaAction: 'demo' | 'starter' | 'pro' | 'deluxe';
  waMessage: string;
  isRecommended?: boolean;
  tier: 'basic' | 'mid' | 'silver_emerald' | 'premium';
}

/** Título y subtítulo oficiales de la sección de planes */
export const PLANS_SECTION_HEADER = {
  badge: '★ Todas las funciones desde el primer día ★',
  title: 'Todas las funciones desde el primer día.',
  subtitle:
    'Prueba el CRM completo y elige el cupo de Créditos IA que necesita tu empresa. La IA ya está incluida: no necesitas configurar APIs.',
  brandTagline: 'Dale superpoderes a tu WhatsApp.',
};

export const COMMERCIAL_PLANS: CommercialPlan[] = [
  {
    id: 'demo',
    tierCode: 'SILVER CHROMIUM',
    cardNumber: '•••• •••• •••• 3601',
    name: 'Demo',
    tagline: 'CRM completo + IA incluida',
    description: 'Conoce todas las funciones del CRM durante 14 días.',
    aiCredits: 100,
    aiCreditsLabel: '100 Créditos IA (toda la prueba)',
    durationLabel: '14 días (toda la prueba)',
    isTrial: true,
    trialDays: 14,
    pricing: {
      COP: {
        amount: 0,
        formatted: '$0',
        period: '14 días de prueba',
      },
      USD: {
        amount: 0,
        formatted: 'US$0',
        period: '14 days trial',
      },
    },
    features: [
      'CRM completo con todas las funciones',
      '100 Créditos IA para toda la prueba',
      'Bandeja multiagente compartida',
      'Transcripción, resúmenes y asistente IA',
      'Embudo comercial e informes incluidos',
      'Conecta tu propia línea comercial',
    ],
    ctaLabel: 'Probar gratis 14 días',
    ctaAction: 'demo',
    waMessage: 'Hola Call360, quiero activar la prueba gratis de 14 días con 100 créditos IA para mi empresa.',
    tier: 'basic',
  },
  {
    id: 'starter',
    tierCode: 'CHAMPAGNE GOLD IA',
    cardNumber: '•••• •••• •••• 3602',
    name: 'Starter',
    tagline: 'CRM completo + IA incluida',
    description: 'Todas las funciones para empezar, con 1.000 Créditos IA al mes.',
    aiCredits: 1000,
    aiCreditsLabel: '1.000 Créditos IA / mes',
    durationLabel: 'Renovación mensual',
    usageMultiplier: {
      ratio: '1X',
      title: 'Cupo base para empezar',
      badge: '1X CAPACIDAD BASE',
      highlightText: '1.000 Créditos IA / mes',
    },
    pricing: {
      COP: {
        amount: 65000,
        formatted: '$65.000',
        period: 'COP / mes',
      },
      USD: {
        amount: 20,
        formatted: 'US$20',
        period: 'USD / mes',
      },
    },
    launchPromo: {
      enabled: true,
      discountPercent: 50,
      pricing: {
        COP: {
          amount: 32500,
          formatted: '$32.500',
          period: 'mes 1 (luego $65.000/mes)',
        },
        USD: {
          amount: 10,
          formatted: 'US$10',
          period: 'month 1 (then US$20/mo)',
        },
      },
      note: '50% de descuento aplicable al primer mes.',
    },
    features: [
      'CRM completo con todas las funciones',
      '1.000 Créditos IA mensuales incluidos',
      'Bandeja multiagente compartida',
      'Transcripción, resúmenes y asistente IA',
      'Embudo comercial e informes incluidos',
      'Cupo compartido para toda la empresa',
    ],
    ctaLabel: 'Elegir Starter',
    ctaAction: 'starter',
    waMessage: 'Hola Call360, quiero contratar el plan Starter ($65.000 COP / US$20 mes) con 1.000 créditos IA.',
    tier: 'mid',
  },
  {
    id: 'pro',
    tierCode: 'PLATINUM EMERALD',
    cardNumber: '•••• •••• •••• 3603',
    name: 'Pro',
    tagline: 'CRM completo + IA incluida',
    description: 'El mismo CRM completo, con 3.000 Créditos IA para un mayor uso.',
    aiCredits: 3000,
    aiCreditsLabel: '3.000 Créditos IA / mes',
    durationLabel: 'Renovación mensual',
    usageMultiplier: {
      ratio: '3X',
      title: '3X Uso de Créditos IA respecto a Starter',
      badge: '⚡ 3X MÁS CRÉDITOS IA',
      highlightText: '3.000 Créditos IA / mes (3X respecto a Starter)',
    },
    isRecommended: true,
    pricing: {
      COP: {
        amount: 130000,
        formatted: '$130.000',
        period: 'COP / mes',
      },
      USD: {
        amount: 40,
        formatted: 'US$40',
        period: 'USD / mes',
      },
    },
    features: [
      'CRM completo con todas las funciones',
      '3.000 Créditos IA mensuales incluidos',
      'Bandeja multiagente compartida',
      'Transcripción, resúmenes y asistente IA',
      'Embudo comercial e informes incluidos',
      'Cupo compartido para toda la empresa',
    ],
    ctaLabel: 'Elegir Pro',
    ctaAction: 'pro',
    waMessage: 'Hola Call360, me interesa el plan Pro ($130.000 COP / US$40 mes) con 3.000 créditos IA.',
    tier: 'silver_emerald',
  },
  {
    id: 'deluxe',
    tierCode: 'BLACK TITANIUM 24K',
    cardNumber: '•••• •••• •••• 3604',
    name: 'Deluxe',
    tagline: 'CRM completo + IA incluida',
    description: 'Todas las funciones, con 10.000 Créditos IA para un uso más intensivo.',
    aiCredits: 10000,
    aiCreditsLabel: '10.000 Créditos IA / mes',
    durationLabel: 'Renovación mensual',
    usageMultiplier: {
      ratio: '10X',
      title: '10X Uso de Créditos IA respecto a Starter',
      badge: '🔥 10X POTENCIA EN CRÉDITOS IA',
      highlightText: '10.000 Créditos IA / mes (10X respecto a Starter)',
    },
    pricing: {
      COP: {
        amount: 200000,
        formatted: '$200.000',
        period: 'COP / mes',
      },
      USD: {
        amount: 60,
        formatted: 'US$60',
        period: 'USD / mes',
      },
    },
    features: [
      'CRM completo con todas las funciones',
      '10.000 Créditos IA mensuales incluidos',
      'Bandeja multiagente compartida',
      'Transcripción, resúmenes y asistente IA',
      'Embudo comercial e informes incluidos',
      'Cupo compartido para toda la empresa',
    ],
    ctaLabel: 'Elegir Deluxe',
    ctaAction: 'deluxe',
    waMessage: 'Hola Call360, quiero contratar el plan Deluxe ($200.000 COP / US$60 mes) con 10.000 créditos IA.',
    tier: 'premium',
  },
];

/**
 * Capacidades reales verificadas e idénticas en Demo, Starter, Pro y Deluxe.
 * No hay funciones recortadas por plan; la diferenciación es volumen de uso (Créditos IA).
 */
export const SHARED_INCLUDED_CAPABILITIES = [
  {
    title: 'Bandeja Multiagente Compartida',
    description: 'Permite que múltiples asesores atiendan simultáneamente la misma línea oficial de WhatsApp.',
    included: true,
  },
  {
    title: 'IA Asistida Incluida',
    description: 'Sugerencias comerciales, reescritura persuasiva y traducción al instante (tú revisas y decides enviar).',
    included: true,
  },
  {
    title: 'Transcripción de Notas de Voz',
    description: 'Convierte audios de WhatsApp en texto limpio para lectura inmediata del equipo.',
    included: true,
  },
  {
    title: 'Resumen y Síntesis de Conversaciones',
    description: 'Genera síntesis de chats largos para traspasos fluidos entre asesores o seguimiento gerencial.',
    included: true,
  },
  {
    title: 'Asistente y Borradores Comerciales',
    description: 'Propuestas de respuesta redactadas para que el asesor las verifique antes de enviar.',
    included: true,
  },
  {
    title: 'Embudo de Ventas (Kanban) y Notas',
    description: 'Organización visual de prospectos por etapa comercial y notas internas por contacto.',
    included: true,
  },
  {
    title: 'Campañas y Difusión Segmentada',
    description: 'Envío de campañas a tus listas de clientes sin depender de integraciones complejas.',
    included: true,
  },
  {
    title: 'Informes y Métricas Comerciales',
    description: 'Monitoreo de tiempos de respuesta, actividad por asesor y volumen de contactos.',
    included: true,
  },
  {
    title: 'Cupo Compartido por Empresa',
    description: 'Los Créditos IA pertenecen a tu empresa (tenant) y los consume cualquier asesor autorizado.',
    included: true,
  },
  {
    title: 'Conexión de tu Propia Línea',
    description: 'Conecta tu línea comercial directamente; sin necesidad de contratar ni pagar APIs externas.',
    included: true,
  },
];

/**
 * Matriz de comparación funcional para evidenciar la paridad funcional estricta.
 */
export const FUNCTIONAL_PARITY_ROWS = [
  { feature: 'Bandeja multiagente en un solo número', demo: '✓', starter: '✓', pro: '✓', deluxe: '✓' },
  { feature: 'Asistente y sugerencias de respuesta IA', demo: '✓', starter: '✓', pro: '✓', deluxe: '✓' },
  { feature: 'Transcripción de notas de voz a texto', demo: '✓', starter: '✓', pro: '✓', deluxe: '✓' },
  { feature: 'Resumen y síntesis de chats', demo: '✓', starter: '✓', pro: '✓', deluxe: '✓' },
  { feature: 'Reescritura persuasiva y traducción', demo: '✓', starter: '✓', pro: '✓', deluxe: '✓' },
  { feature: 'Embudo comercial (kanban) y notas', demo: '✓', starter: '✓', pro: '✓', deluxe: '✓' },
  { feature: 'Campañas y difusión a listas', demo: '✓', starter: '✓', pro: '✓', deluxe: '✓' },
  { feature: 'Informes y métricas de atención', demo: '✓', starter: '✓', pro: '✓', deluxe: '✓' },
  { feature: 'Créditos compartidos por empresa', demo: '✓', starter: '✓', pro: '✓', deluxe: '✓' },
  { feature: 'Conexión de línea propia', demo: '✓', starter: '✓', pro: '✓', deluxe: '✓' },
  { feature: 'Duración / Vigencia', demo: '14 días de prueba', starter: 'Renovación mensual', pro: 'Renovación mensual', deluxe: 'Renovación mensual' },
  { feature: 'Cupo de Créditos IA', demo: '100 (toda la prueba)', starter: '1.000 / mes', pro: '3.000 / mes', deluxe: '10.000 / mes' },
  { feature: 'Precio Pesos (COP)', demo: '$0', starter: '$65.000 / mes', pro: '$130.000 / mes', deluxe: '$200.000 / mes' },
  { feature: 'Precio Dólares (USD)', demo: 'US$0', starter: 'US$20 / mes', pro: 'US$40 / mes', deluxe: 'US$60 / mes' },
];

/**
 * 5to Plan: Solo Correo (Presentado en sección separada)
 */
export const EMAIL_ONLY_PLAN = {
  sectionTitle: '¿Solo necesitas gestionar tu correo?',
  sectionSubtitle: 'Para empresas y profesionales que buscan potenciar su bandeja de correo corporativo con IA.',
  name: 'Solo Correo',
  benefit: 'Gestiona tu correo desde Call360 con IA incluida',
  aiCredits: 200,
  aiCreditsLabel: '200 Créditos IA al mes',
  priceLabel: 'Consulta las condiciones',
  highlights: [
    'Acceso al módulo de correo y sus ayudas de redacción y síntesis con IA asistida.',
    'No incluye WhatsApp ni el CRM comercial completo.',
    'Puede ampliarse en cualquier momento a Starter, Pro o Deluxe.',
    'Modalidad destinada a clientes con correo o dominio personalizado.',
  ],
  ctaText: 'Consultar condiciones',
  waMessage: 'Hola Call360, quiero consultar las condiciones del plan Solo Correo (200 créditos IA/mes) para mi empresa.',
};

/** Información para equipos de más de 10 usuarios */
export const ENTERPRISE_CUSTOM_PLAN = {
  title: '¿Tu equipo necesita más de 10 usuarios?',
  subtitle: 'Armamos un plan personalizado a la medida de tu empresa',
  description:
    'Si cuentas con un equipo comercial amplio o requieres una bolsa corporativa mayor de créditos IA y soporte especializado, contáctanos directamente para configurar tu propuesta sin límites artificiales.',
  ctaText: 'Hablar con un asesor para plan a medida',
  waMessage:
    'Hola Call360, tenemos un equipo de más de 10 usuarios y queremos armar un plan personalizado para nuestra empresa.',
};

/** Reglas claras y transparentes sobre los Créditos IA */
export const AI_CREDITS_POLICY = {
  title: '¿Cómo funcionan los Créditos IA de Call360?',
  subtitle: 'IA incluida y administrada: el usuario solicita, revisa y decide (IA asistida)',
  items: [
    {
      title: 'IA Asistida, no desatendida',
      description:
        'La IA genera sugerencias, síntesis y borradores cuando tú lo solicitas. El asesor revisa y decide qué enviar; no se realizan envíos automáticos sin tu control.',
    },
    {
      title: '1 Acción Estándar = 1 Crédito IA',
      description:
        'Cada sugerencia generada, reescritura, transcripción de nota de voz o síntesis de chat completada descuenta 1 Crédito IA de tu bolsa.',
    },
    {
      title: 'Cupo Compartido por Empresa',
      description:
        'Los créditos corresponden a tu empresa (tenant) y se comparten entre todos los asesores autorizados del equipo.',
    },
    {
      title: 'Sin cobros por fallos técnicos',
      description:
        'Si ocurre un error de red o un reintento técnico del sistema, Call360 garantiza que no se descontarán créditos duplicados.',
    },
    {
      title: 'Renovación mensual transparente',
      description:
        'En Starter, Pro y Deluxe los créditos se asignan al inicio de cada ciclo mensual (no acumulables). En Demo dispones de 100 créditos para los 14 días.',
    },
    {
      title: 'Todo incluido y gestionado',
      description:
        'No necesitas conseguir claves API, pagar cuentas de terceros ni configurar modelos externos. Call360 administra la infraestructura por ti.',
    },
  ],
};
