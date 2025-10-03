// src/components/EventCard.tsx
import { Event } from "@/lib/types";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function EventCard({ e }: { e: Event }) {
  const date = new Date(e.date);
  const isPast = e.past ?? date < new Date();

  return (
    <article className="rounded-xl border bg-white p-4 shadow-soft">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-brand-900">{e.title}</h3>
        <span className={`text-xs px-2 py-1 rounded ${
          isPast ? "bg-slate-100 text-slate-600" : "bg-brand-100 text-brand-700"
        }`}>
          {isPast? "Encerrado" : "Próximo"}
        </span>
      </div>
      <p className="text-sm text-slate-700 mt-1">
        {date.toLocaleDateString()} • {e.city}{e.venue ? ` — ${e.venue}`:""}
      </p>
      <div className="flex flex-wrap gap-2 mt-3">
        {e.inviteUrl && (
          <Link href={e.inviteUrl} target="_blank">
            <Button variant="ghost">Carta-Convite</Button>
          </Link>
        )}
        {e.rulesUrl && (
          <Link href={e.rulesUrl} target="_blank">
            <Button variant="ghost">Regulamento</Button>
          </Link>
        )}
      </div>
    </article>
  );
}
