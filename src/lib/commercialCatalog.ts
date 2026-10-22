/**
 * Catálogo Comercial Oficial y Definitivo — Call360 Colombia
 *
 * Fuente única de verdad tipada para precios, créditos y beneficios de planes.
 * Precios fijos independientes en COP y USD (sin conversión dinámica).
 * Cupos de créditos compartidos a nivel empresa/tenant.
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

export const COMMERCIAL_PLANS: CommercialPlan[] = [
  {
    id: 'demo',
    tierCode: 'SILVER CHROMIUM',
    cardNumber: '•••• •••• •••• 3601',
    name: 'Demo 14 Días',
    tagline: 'Prueba la plataforma sin riesgo',
    description: 'Acceso completo para evaluar la atención en equipo y la IA en tu empresa.',
    aiCredits: 100,
    aiCreditsLabel: '100 Créditos IA (toda la prueba)',
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
      '14 días de acceso completo',
      '100 Créditos IA incluidos para la prueba',
      'Bandeja compartida para tu equipo',
      'Conexión de tu línea comercial',
      'Historial de chats por contacto',
      'Prueba guiada sin tarjeta de crédito',
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
    tagline: 'Ideal para iniciar la operación comercial',
    description: 'Centraliza la atención de tu equipo y comienza a acelerar respuestas con IA.',
    aiCredits: 1000,
    aiCreditsLabel: '1.000 Créditos IA / mes',
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
          period: 'primer mes (luego $65.000/mes)',
        },
        USD: {
          amount: 10,
          formatted: 'US$10',
          period: 'first month (then US$20/mo)',
        },
      },
      note: '50% de descuento aplicable al primer mes.',
    },
    features: [
      '1.000 Créditos IA por periodo mensual',
      'Bandeja multiagente compartida',
      'Atención manual 1:1 organizada',
      'Historial completo y notas por cliente',
      'Sugerencias y reescritura con IA',
      'Cupo de créditos para toda la empresa',
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
    tagline: 'Para equipos en crecimiento comercial',
    description: 'Mayor volumen de interacción y capacidad analítica con IA administrada.',
    aiCredits: 3000,
    aiCreditsLabel: '3.000 Créditos IA / mes',
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
      '3.000 Créditos IA por periodo mensual',
      'Bandeja multiagente para todo el equipo',
      'Embudo comercial visual y seguimiento',
      'Asistente comercial y resumen de chats',
      'Campañas y difusión a contactos',
      'Soporte prioritario directo en Colombia',
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
    tagline: 'WhatsApp con Superpoderes',
    description: 'La máxima potencia en IA incluida, análisis profundo y velocidad de cierre para ventas exigentes.',
    aiCredits: 10000,
    aiCreditsLabel: '10.000 Créditos IA / mes',
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
      '10.000 Créditos IA por periodo mensual',
      'Máxima capacidad para atención y análisis',
      'Transcripción de notas de voz y síntesis',
      'Borradores comerciales y reescritura avanzada',
      'Gestión avanzada de oportunidades comerciales',
      'Atención comercial preferencial',
    ],
    ctaLabel: 'Elegir Deluxe',
    ctaAction: 'deluxe',
    waMessage: 'Hola Call360, quiero el plan Deluxe — WhatsApp con Superpoderes ($200.000 COP / US$60 mes) con 10.000 créditos IA.',
    tier: 'premium',
  },
];

/** Información para equipos de más de 10 usuarios */
export const ENTERPRISE_CUSTOM_PLAN = {
  title: '¿Tu equipo necesita más de 10 usuarios?',
  subtitle: 'Armamos un plan personalizado a la medida de tu empresa',
  description:
    'Si cuentas con un equipo comercial amplio o requieres una bolsa corporativa de créditos IA y soporte especializado, contáctanos directamente para configurar tu propuesta sin límites artificiales.',
  ctaText: 'Hablar con un asesor para plan a medida',
  waMessage:
    'Hola Call360, tenemos un equipo de más de 10 usuarios y queremos armar un plan personalizado para nuestra empresa.',
};

/** Reglas claras y transparentes sobre los Créditos IA */
export const AI_CREDITS_POLICY = {
  title: '¿Cómo funcionan los Créditos IA de Call360?',
  subtitle: 'IA incluida y administrada, sin configuraciones complejas',
  items: [
    {
      title: '1 Acción Estándar = 1 Crédito IA',
      description:
        'Cada respuesta generada, reescritura, síntesis de conversación o análisis de contacto completado descuenta 1 Crédito IA de tu bolsa mensual.',
    },
    {
      title: 'Cupo Compartido por Empresa',
      description:
        'Los créditos corresponden a tu empresa (tenant) y se comparten entre todos los asesores autorizados del equipo.',
    },
    {
      title: 'Sin cobros por fallos técnicos',
      description:
        'Si ocurre un error de red o un reintento técnico del sistema, Call360 garantiza que no se cobrarán créditos duplicados.',
    },
    {
      title: 'Renovación mensual transparente',
      description:
        'Los créditos se asignan al inicio de cada ciclo mensual para garantizar capacidad de cómputo dedicada (no acumulables entre ciclos).',
    },
    {
      title: 'Todo incluido y gestionado',
      description:
        'No necesitas conseguir claves API, pagar cuentas de terceros ni configurar modelos externos. Call360 administra la infraestructura por ti.',
    },
  ],
};
