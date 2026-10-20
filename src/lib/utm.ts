const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const;
type UtmKey = (typeof UTM_KEYS)[number];

const STORAGE_KEY = "call360_utm";

const isBrowser = typeof window !== "undefined";

export interface UtmData {
  source?: string;
  medium?: string;
  campaign?: string;
  term?: string;
  content?: string;
  capturedAt: string;
}

function readFromStorage(): Partial<UtmData> {
  if (!isBrowser) return {};
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as Partial<UtmData>;
    return parsed;
  } catch {
    return {};
  }
}

function writeToStorage(data: UtmData) {
  if (!isBrowser) return;
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // ignore quota or privacy mode
  }
}

export function captureUtmFromUrl(): UtmData | null {
  if (!isBrowser) return null;

  const url = new URL(window.location.href);
  const hasAny = UTM_KEYS.some((k) => url.searchParams.has(k));
  if (!hasAny) return null;

  const data: UtmData = { capturedAt: new Date().toISOString() };
  const map: Record<UtmKey, keyof Omit<UtmData, "capturedAt">> = {
    utm_source: "source",
    utm_medium: "medium",
    utm_campaign: "campaign",
    utm_term: "term",
    utm_content: "content",
  };
  for (const key of UTM_KEYS) {
    const value = url.searchParams.get(key);
    if (value) data[map[key]] = value;
  }

  writeToStorage(data);
  return data;
}

export function getStoredUtm(): Partial<UtmData> {
  return readFromStorage();
}

export function utmToObject(utm: Partial<UtmData>): Record<string, string> {
  const out: Record<string, string> = {};
  const map: Record<keyof Omit<UtmData, "capturedAt">, UtmKey> = {
    source: "utm_source",
    medium: "utm_medium",
    campaign: "utm_campaign",
    term: "utm_term",
    content: "utm_content",
  };
  for (const field of Object.keys(map) as (keyof Omit<UtmData, "capturedAt">)[]) {
    const v = utm[field];
    if (typeof v === "string" && v) out[map[field]] = v;
  }
  return out;
}

export function appendUtmToMessage(message: string, utm?: Partial<UtmData>): string {
  const effective = utm ?? getStoredUtm();
  const lines: string[] = [];
  if (effective.source) lines.push(`utm_source: ${effective.source}`);
  if (effective.medium) lines.push(`utm_medium: ${effective.medium}`);
  if (effective.campaign) lines.push(`utm_campaign: ${effective.campaign}`);
  if (effective.term) lines.push(`utm_term: ${effective.term}`);
  if (effective.content) lines.push(`utm_content: ${effective.content}`);
  if (lines.length === 0) return message;
  return `${message}\n\n— Referencia: ${lines.join(" | ")}`;
}
