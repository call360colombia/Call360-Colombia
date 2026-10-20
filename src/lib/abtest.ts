const STORAGE_KEY = "call360_ab_id";
const isBrowser = typeof window !== "undefined";

export type Variant = "A" | "B" | "C" | "D";

export interface ABConfig<T extends string = string> {
  experimentKey: string;
  variants: readonly T[];
  weights?: number[];
}

function djb2(input: string): number {
  let hash = 5381;
  for (let i = 0; i < input.length; i++) {
    hash = ((hash << 5) + hash + input.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

function getOrCreateUserId(): string {
  if (!isBrowser) return "ssr";
  try {
    let id = localStorage.getItem(STORAGE_KEY);
    if (!id) {
      id = `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
      localStorage.setItem(STORAGE_KEY, id);
    }
    return id;
  } catch {
    return "anonymous";
  }
}

export function assignVariant<T extends string>(config: ABConfig<T>): T {
  if (!isBrowser) return config.variants[0];
  const userId = getOrCreateUserId();
  const seed = `${config.experimentKey}::${userId}`;
  const bucket = djb2(seed) % 100;
  const variants = config.variants;
  const weights = config.weights ?? variants.map(() => 100 / variants.length);

  let cumulative = 0;
  for (let i = 0; i < variants.length; i++) {
    cumulative += weights[i] ?? 0;
    if (bucket < cumulative) return variants[i];
  }
  return variants[variants.length - 1];
}

export function getUserId(): string {
  return getOrCreateUserId();
}
