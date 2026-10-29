/**
 * Catálogo Comercial Oficial 2026 — Call360 Colombia
 *
 * Fuente única de verdad tipada para planes, precios, canales y créditos IA.
 * Reglas Comerciales Aprobadas:
 * - Todos los precios son en COP por 1 usuario individual (sin paquetes grupales base).
 * - A partir de 10 usuarios aplica propuesta empresarial personalizada.
 * - Los créditos IA se renuevan mensualmente de forma fija, incluso en planes anuales.
 * - Los valores en USD describen exclusivamente el beneficio aproximado de la IA incluida.
 * - Operación bajo IA asistida (el asesor revisa y decide, no autónoma desatendida).
 */

export type BillingPeriod = 'monthly' | 'annual';
export type Currency = 'COP';

export interface PlanPricingItem {
  amount: number;
  formatted: string;
  period: string;
  referenceMonthly?: {
    amount: number;
    formatted: string;
    label: string;
  };
}

export interface CommercialPlan {
  id: 'correo' | 'starter' | 'pro' | 'deluxe';
  tierCode: 'SILVER CHROMIUM' | 'CHAMPAGNE GOLD IA' | 'PLATINUM EMERALD' | 'BLACK TITANIUM 24K';
  cardNumber: string;
  name: string;
  badge?: string;
  tagline: string;
  description: string;
  channelsSummary: string;
  channelsDetail: string;
  hasWhatsApp: boolean;
  hasEmail: boolean;
  aiCredits: number;
  aiCreditsLabel: string;
  aiBenefitUsd: string;
  durationLabel: string;
  pricing: {
    monthly: PlanPricingItem;
    annual: PlanPricingItem;
  };
  features: string[];
  ctaLabel: string;
  ctaAction: 'correo' | 'starter' | 'pro' | 'deluxe';
  waMessage: string;
  isRecommended?: boolean;
  isBestOffer?: boolean;
  tier: 'basic' | 'mid' | 'silver_emerald' | 'premium';
}

/** Título y subtítulo oficiales de la sección de planes */
export const PLANS_SECTION_HEADER = {
  badge: '★ Catálogo Comercial 2026 ★',
  title: 'Centralización de Correo y WhatsApp con IA',
  subtitle:
    'Precios transparentes en COP por usuario. Elige los canales y el cupo de Créditos IA que requiere tu operación comercial.',
  brandTagline: 'IA asistida integrada · Sin costos ocultos · Facturación electrónica con NIT',
};

export const COMMERCIAL_PLANS: CommercialPlan[] = [
  {
    id: 'correo',
    tierCode: 'SILVER CHROMIUM',
    cardNumber: '•••• •••• •••• 3601',
    name: 'Plan Correo',
    tagline: 'Correo corporativo + CRM',
    description: 'Gestión profesional de correo corporativo con CRM comercial e IA asistida.',
    channelsSummary: 'Correo corporativo + CRM',
    channelsDetail: 'Correo corporativo + CRM (NO incluye WhatsApp)',
    hasWhatsApp: false,
    hasEmail: true,
    aiCredits: 500,
    aiCreditsLabel: '500 Créditos IA / mes',
    aiBenefitUsd: 'Aprox. USD 10 en créditos IA incluidos al mes',
    durationLabel: 'Renovación mensual fija',
    pricing: {
      monthly: {
        amount: 40000,
        formatted: '$40.000',
        period: 'COP / usuario / mes',
      },
      annual: {
        amount: 240000,
        formatted: '$240.000',
        period: 'COP / usuario / año',
        referenceMonthly: {
          amount: 20000,
          formatted: '$20.000',
          label: 'Equiv. ref. $20.000/mes por usuario',
        },
      },
    },
    features: [
      'Correo corporativo con dominio propio',
      'CRM comercial para gestión de contactos',
      'NO incluye canal de WhatsApp',
      '500 Créditos IA al mes (renovación mensual fija)',
      'Aprox. USD 10 en créditos IA incluidos al mes',
      'Precio por 1 usuario (sin paquetes base)',
    ],
    ctaLabel: 'Elegir Plan Correo',
    ctaAction: 'correo',
    waMessage:
      'Hola Call360, quiero contratar el Plan Correo ($40.000 COP/usuario/mes) con 500 créditos IA.',
    tier: 'basic',
  },
  {
    id: 'starter',
    tierCode: 'CHAMPAGNE GOLD IA',
    cardNumber: '•••• •••• •••• 3602',
    name: 'Starter',
    tagline: '1 canal a elección + CRM',
    description: 'Elige Correo + CRM o WhatsApp + CRM con 1.000 Créditos IA al mes.',
    channelsSummary: 'Correo + CRM Ó WhatsApp + CRM',
    channelsDetail: 'Correo corporativo + CRM O WhatsApp + CRM (Un solo canal a elección, no ambos)',
    hasWhatsApp: true,
    hasEmail: true,
    aiCredits: 1000,
    aiCreditsLabel: '1.000 Créditos IA / mes',
    aiBenefitUsd: 'Aprox. USD 20 en créditos IA incluidos al mes',
    durationLabel: 'Renovación mensual fija',
    pricing: {
      monthly: {
        amount: 65000,
        formatted: '$65.000',
        period: 'COP / usuario / mes',
      },
      annual: {
        amount: 390000,
        formatted: '$390.000',
        period: 'COP / usuario / año',
        referenceMonthly: {
          amount: 32500,
          formatted: '$32.500',
          label: 'Equiv. ref. $32.500/mes por usuario',
        },
      },
    },
    features: [
      '1 canal a elección: WhatsApp + CRM Ó Correo + CRM',
      'Bandeja de atención y embudo de ventas',
      '1.000 Créditos IA al mes (renovación mensual fija)',
      'Aprox. USD 20 en créditos IA incluidos al mes',
      'Transcripción de notas de voz y borradores IA',
      'Precio por 1 usuario (sin paquetes base)',
    ],
    ctaLabel: 'Elegir Starter',
    ctaAction: 'starter',
    waMessage:
      'Hola Call360, quiero contratar el plan Starter ($65.000 COP/usuario/mes) con 1.000 créditos IA.',
    tier: 'mid',
  },
  {
    id: 'pro',
    tierCode: 'PLATINUM EMERALD',
    cardNumber: '•••• •••• •••• 3603',
    name: 'Pro',
    badge: 'Más vendido',
    tagline: 'WhatsApp + Correo integrados',
    description: 'Centraliza ambos canales comerciales en un solo CRM con 3.000 Créditos IA al mes.',
    channelsSummary: 'WhatsApp + Correo + CRM',
    channelsDetail: 'WhatsApp + Correo corporativo + CRM (ambos canales integrados)',
    hasWhatsApp: true,
    hasEmail: true,
    isRecommended: true,
    aiCredits: 3000,
    aiCreditsLabel: '3.000 Créditos IA / mes',
    aiBenefitUsd: 'Aprox. USD 60 en créditos IA incluidos al mes',
    durationLabel: 'Renovación mensual fija',
    pricing: {
      monthly: {
        amount: 120000,
        formatted: '$120.000',
        period: 'COP / usuario / mes',
      },
      annual: {
        amount: 720000,
        formatted: '$720.000',
        period: 'COP / usuario / año',
        referenceMonthly: {
          amount: 60000,
          formatted: '$60.000',
          label: 'Equiv. ref. $60.000/mes por usuario',
        },
      },
    },
    features: [
      'WhatsApp + Correo corporativo + CRM integrados',
      'Bandeja multiagente centralizada',
      '3.000 Créditos IA al mes (renovación mensual fija)',
      'Aprox. USD 60 en créditos IA incluidos al mes',
      'Embudo comercial, transcripción e informes',
      'Precio por 1 usuario (sin paquetes base)',
    ],
    ctaLabel: 'Elegir Pro',
    ctaAction: 'pro',
    waMessage:
      'Hola Call360, me interesa el plan Pro ($120.000 COP/usuario/mes) con WhatsApp + Correo y 3.000 créditos IA.',
    tier: 'silver_emerald',
  },
  {
    id: 'deluxe',
    tierCode: 'BLACK TITANIUM 24K',
    cardNumber: '•••• •••• •••• 3604',
    name: 'Deluxe',
    badge: 'Mejor oferta',
    tagline: 'Cuota máxima: WhatsApp + Correo',
    description: 'Capacidad operativa total con 10.000 Créditos IA mensuales para alta intensidad.',
    channelsSummary: 'WhatsApp + Correo + CRM (Máximo)',
    channelsDetail: 'WhatsApp + Correo corporativo + CRM (ambos canales integrados con cuota máxima)',
    hasWhatsApp: true,
    hasEmail: true,
    isBestOffer: true,
    aiCredits: 10000,
    aiCreditsLabel: '10.000 Créditos IA / mes',
    aiBenefitUsd: 'Aprox. USD 100 en créditos IA incluidos al mes',
    durationLabel: 'Renovación mensual fija',
    pricing: {
      monthly: {
        amount: 220000,
        formatted: '$220.000',
        period: 'COP / usuario / mes',
      },
      annual: {
        amount: 1320000,
        formatted: '$1.320.000',
        period: 'COP / usuario / año',
        referenceMonthly: {
          amount: 110000,
          formatted: '$110.000',
          label: 'Equiv. ref. $110.000/mes por usuario',
        },
      },
    },
    features: [
      'WhatsApp + Correo corporativo + CRM cuota máxima',
      'Bandeja multiagente y analítica comercial',
      '10.000 Créditos IA al mes (renovación mensual fija)',
      'Aprox. USD 100 en créditos IA incluidos al mes',
      'Supervisión en vivo y reportes avanzados',
      'Precio por 1 usuario (sin paquetes base)',
    ],
    ctaLabel: 'Elegir Deluxe',
    ctaAction: 'deluxe',
    waMessage:
      'Hola Call360, quiero contratar el plan Deluxe ($220.000 COP/usuario/mes) con cuota máxima y 10.000 créditos IA.',
    tier: 'premium',
  },
];

/**
 * Matriz de comparación y paridad funcional de la oferta comercial.
 */
export const FUNCTIONAL_PARITY_ROWS = [
  {
    feature: 'Canales comerciales incluidos',
    correo: 'Correo corporativo + CRM',
    starter: '1 canal (WhatsApp Ó Correo)',
    pro: 'WhatsApp + Correo (Ambos)',
    deluxe: 'WhatsApp + Correo (Cuota Máx)',
  },
  {
    feature: 'WhatsApp multiagente con 1 número',
    correo: 'No incluido',
    starter: '✓ (Si se elige canal WhatsApp)',
    pro: '✓ Incluido',
    deluxe: '✓ Incluido',
  },
  {
    feature: 'Bandeja de Correo corporativo',
    correo: '✓ Incluido',
    starter: '✓ (Si se elige canal Correo)',
    pro: '✓ Incluido',
    deluxe: '✓ Incluido',
  },
  {
    feature: 'CRM comercial (Kanban y contactos)',
    correo: '✓ Incluido',
    starter: '✓ Incluido',
    pro: '✓ Incluido',
    deluxe: '✓ Incluido',
  },
  {
    feature: 'Asistente y sugerencias con IA asistida',
    correo: '✓ Incluido',
    starter: '✓ Incluido',
    pro: '✓ Incluido',
    deluxe: '✓ Incluido',
  },
  {
    feature: 'Transcripción de notas de voz',
    correo: 'No aplica',
    starter: '✓ (En canal WhatsApp)',
    pro: '✓ Incluido',
    deluxe: '✓ Incluido',
  },
  {
    feature: 'Resumen y síntesis de conversaciones',
    correo: '✓ Incluido (emails)',
    starter: '✓ Incluido',
    pro: '✓ Incluido',
    deluxe: '✓ Incluido',
  },
  {
    feature: 'Base de cobro',
    correo: 'Por 1 usuario',
    starter: 'Por 1 usuario',
    pro: 'Por 1 usuario',
    deluxe: 'Por 1 usuario',
  },
  {
    feature: 'Cupo de Créditos IA al mes',
    correo: '500 / mes',
    starter: '1.000 / mes',
    pro: '3.000 / mes',
    deluxe: '10.000 / mes',
  },
  {
    feature: 'Valor aprox. beneficio IA incluido',
    correo: 'Aprox. USD 10 / mes',
    starter: 'Aprox. USD 20 / mes',
    pro: 'Aprox. USD 60 / mes',
    deluxe: 'Aprox. USD 100 / mes',
  },
  {
    feature: 'Renovación de Créditos IA',
    correo: 'Mensual fija',
    starter: 'Mensual fija',
    pro: 'Mensual fija',
    deluxe: 'Mensual fija',
  },
  {
    feature: 'Precio Mensual (COP)',
    correo: '$40.000 / usuario / mes',
    starter: '$65.000 / usuario / mes',
    pro: '$120.000 / usuario / mes',
    deluxe: '$220.000 / usuario / mes',
  },
  {
    feature: 'Precio Anual (Pago total COP)',
    correo: '$240.000 / usuario / año',
    starter: '$390.000 / usuario / año',
    pro: '$720.000 / usuario / año',
    deluxe: '$1.320.000 / usuario / año',
  },
  {
    feature: 'Equivalente mensual de referencia (Anual)',
    correo: '$20.000 / mes (ref)',
    starter: '$32.500 / mes (ref)',
    pro: '$60.000 / mes (ref)',
    deluxe: '$110.000 / mes (ref)',
  },
];

/** Información para equipos de más de 10 usuarios */
export const ENTERPRISE_CUSTOM_PLAN = {
  badge: 'Equipos de 10+ usuarios',
  title: '¿Tu equipo cuenta con 10 o más usuarios?',
  subtitle: 'Propuesta empresarial personalizada a la medida de tu operación',
  description:
    'Para equipos comerciales de 10 o más asesores estructuramos un plan empresarial personalizado con condiciones preferenciales, bolsa corporativa de Créditos IA y acompañamiento prioritario directo en Colombia.',
  ctaText: 'Solicitar propuesta empresarial (10+ usuarios)',
  waMessage:
    'Hola Call360, tenemos un equipo de 10 o más usuarios y queremos solicitar una propuesta empresarial personalizada.',
};

/** Reglas claras y transparentes sobre los Créditos IA */
export const AI_CREDITS_POLICY = {
  title: '¿Cómo funcionan los Créditos IA en Call360?',
  subtitle: 'IA asistida: el usuario solicita, revisa y decide (tú mantienes el control)',
  items: [
    {
      title: 'IA Asistida, no desatendida',
      description:
        'La IA genera borradores, sugerencias persuasivas y resúmenes cuando tú lo requieres. Tu equipo siempre verifica y autoriza el envío comercial; no hay automatizaciones 100% desatendidas sin tu control.',
    },
    {
      title: '1 Acción Estándar = 1 Crédito IA',
      description:
        'Cada sugerencia generada, reescritura de mensaje, transcripción de nota de voz o síntesis de chat/email completada descuenta 1 Crédito IA de la cuota del usuario.',
    },
    {
      title: 'Renovación mensual fija',
      description:
        'Los Créditos IA se renuevan mensualmente de forma fija al inicio de cada ciclo mensual, incluso al contratar el plan anual.',
    },
    {
      title: 'Precios en COP por 1 usuario',
      description:
        'Todos los planes se tarifan por 1 usuario individual. No existen paquetes grupales base. A partir de 10 usuarios aplica propuesta empresarial personalizada.',
    },
    {
      title: 'Sin cobros por fallos técnicos',
      description:
        'Si se presenta un error de conectividad o un reintento técnico del sistema, Call360 garantiza que nunca se descontarán créditos dobles.',
    },
    {
      title: 'Todo incluido y gestionado',
      description:
        'No requieres conseguir claves de API ni contratar proveedores externos de IA. Call360 administra la infraestructura para que tu equipo opere de inmediato.',
    },
  ],
};
