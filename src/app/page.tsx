// src/app/page.tsx
import HeroPanel from "@/components/HeroPanel";
import EventCard from "@/components/EventCard";
import { events } from "@/data/events";

export default function HomePage() {
  const upcoming = events.filter(e => !(e.past ?? new Date(e.date) < new Date()));
  const past = events.filter(e => e.past ?? new Date(e.date) < new Date());

  return (
    <div className="space-y-10">
      <HeroPanel />
      <section className="rounded-2xl border bg-white p-6 shadow-soft">
        <h2 className="text-xl font-semibold text-brand-900">Próxima Etapa</h2>
        <p className="text-sm text-slate-600">Convite, regulamento e inscrições oficiais.</p>
        <div className="mt-4 grid md:grid-cols-2 gap-4">
          {upcoming.length ? upcoming.map(e => <EventCard key={e.id} e={e} />) : <p className="text-sm text-slate-600">Nenhum evento futuro cadastrado.</p>}
        </div>
      </section>
      <section>
        <h3 className="text-lg font-semibold text-brand-900 mb-3">Eventos Passados</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {past.length ? past.map(e => <EventCard key={e.id} e={e} />) : <p className="text-sm text-slate-600">Ainda sem histórico.</p>}
        </div>
      </section>
    </div>
  );
}
