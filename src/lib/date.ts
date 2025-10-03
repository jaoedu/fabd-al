// src/lib/date.ts
export function formatPt(dateIso: string) {
  const d = new Date(dateIso);
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });
}
