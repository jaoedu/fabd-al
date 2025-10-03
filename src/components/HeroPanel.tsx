// src/components/HeroPanel.tsx
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const items = [
  {
    title: "Calendário & Inscrições",
    desc: "Próximas etapas, convites e regulamentos.",
    href: "/eventos",
    cta: "Ver calendário",
  },
  {
    title: "Resultados & Rankings",
    desc: "Pódios recentes e ranking acumulado.",
    href: "/rankings",
    cta: "Ver resultados",
  },
  {
    title: "Filiação & Clubes",
    desc: "Filiação de atletas e lista de clubes/escolinhas.",
    href: "/filiacao",
    cta: "Como filiar",
  },
];

export default function HeroPanel() {
  return (
    <section className="relative overflow-hidden rounded-2xl border bg-white p-6 shadow-soft">
      {/* faixa azul discreta ao fundo */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-brand-100/60 to-white" />
      <div className="flex flex-col gap-2 mb-5">
        <h1 className="text-3xl font-semibold text-brand-900">Federação Alagoana de Badminton</h1>
        <p className="text-slate-600">
          O caminho mais rápido para competir, treinar e acompanhar o badminton em Alagoas.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="rounded-xl border bg-white p-5">
            <h3 className="text-lg font-semibold text-brand-900">{it.title}</h3>
            <p className="text-sm text-slate-600 mt-1">{it.desc}</p>
            <Link href={it.href} className="inline-block mt-3">
              <Button variant="ghost" className="hover:shadow-soft"> {it.cta} </Button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
