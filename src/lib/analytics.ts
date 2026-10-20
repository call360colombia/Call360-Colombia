type AnalyticsEventName =
  | "form_opened"
  | "form_submitted"
  | "whatsapp_click"
  | "phone_click"
  | "cotizador_view"
  | "cotizador_calculated"
  | "meeting_started"
  | "meeting_completed"
  | "exit_intent_shown"
  | "exit_intent_dismissed"
  | "exit_intent_lead_captured"
  | "quiz_started"
  | "quiz_completed"
  | "quiz_lead_submitted"
  | "segment_clicked"
  | "cta_click"
  | "ab_variant_assigned"
  | "page_view"
  | "service_selected"
  | "demo_requested"
  | (string & {});

type AnalyticsPayload = Record<string, string | number | boolean | undefined | null>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const isBrowser = typeof window !== "undefined";

export function trackEvent(event: AnalyticsEventName, params: AnalyticsPayload = {}): void {
  if (!isBrowser) return;

  const enriched: AnalyticsPayload = {
    ...params,
    timestamp: new Date().toISOString(),
    path: window.location.pathname,
    referrer: document.referrer || undefined,
  };

  try {
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push({ event, ...enriched });
  } catch {
    // ignore
  }

  const gtag = window.gtag;
  if (typeof gtag === "function") {
    try {
      gtag("event", event, enriched);
    } catch {
      // ignore
    }
  }

  if (process.env.NODE_ENV !== "production") {
    console.debug(`[analytics] ${event}`, enriched);
  }
}

export function trackPageView(path?: string): void {
  if (!isBrowser) return;
  trackEvent("page_view", { path: path ?? window.location.pathname });
}

export function getUtmParams(): Record<string, string> {
  if (!isBrowser) return {};
  try {
    const url = new URL(window.location.href);
    const params: Record<string, string> = {};
    for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"]) {
      const value = url.searchParams.get(key);
      if (value) params[key] = value;
    }
    return params;
  } catch {
    return {};
  }
}
