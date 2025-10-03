// src/app/eventos/page.tsx
import { events } from "@/data/events";
import EventCard from "@/components/EventCard";

export const metadata = { title: "Eventos • FAB-AL" };

export default function EventosPage() {
  const upcoming = events.filter(e => !(e.past ?? new Date(e.date) < new Date()));
  const past = events.filter(e => e.past ?? new Date(e.date) < new Date());

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-semibold text-brand-900">Eventos</h1>
        <p className="text-sm text-slate-600">Calendário oficial, convites e regulamentos.</p>
      </header>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-brand-900">Próximos</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {upcoming.length ? upcoming.map(e => <EventCard key={e.id} e={e} />) : <p className="text-sm text-slate-600">Sem próximos eventos.</p>}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-brand-900">Encerrados</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {past.length ? past.map(e => <EventCard key={e.id} e={e} />) : <p className="text-sm text-slate-600">Nenhum histórico ainda.</p>}
        </div>
      </section>
    </div>
  );
}
