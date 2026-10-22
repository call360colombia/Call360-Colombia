/**
 * Utilidad de clases para combinar classNames condicionales
 */
export function cn(...inputs: (string | boolean | undefined | null)[]): string {
  return inputs.filter(Boolean).join(" ");
}
