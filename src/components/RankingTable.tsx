// src/components/RankingTable.tsx
import { RankingEntry } from "@/lib/types";

export default function RankingTable({ title, data }: { title: string; data: RankingEntry[]; }) {
  return (
    <section className="rounded-2xl border bg-white p-4 shadow-soft">
      <h3 className="font-semibold text-brand-900 mb-3">{title}</h3>
      <div className="overflow-x-auto">
        <table className="min-w-[620px] w-full text-sm">
          <thead className="bg-slate-50">
            <tr className="text-left border-b">
              <th className="py-2 pr-4">Pos.</th>
              <th className="py-2 pr-4">Atleta</th>
              <th className="py-2 pr-4">Clube</th>
              <th className="py-2 pr-4">Categoria</th>
              <th className="py-2 pr-4">Pontos</th>
            </tr>
          </thead>
          <tbody>
            {data.map((r, i) => (
              <tr key={i} className="border-b last:border-0 hover:bg-slate-50/60">
                <td className="py-2 pr-4">{r.position}º</td>
                <td className="py-2 pr-4">{r.athlete}</td>
                <td className="py-2 pr-4">{r.club ?? "-"}</td>
                <td className="py-2 pr-4">{r.category}</td>
                <td className="py-2 pr-4">{r.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
