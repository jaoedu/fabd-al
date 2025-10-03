// src/components/SiteHeader.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/eventos", label: "Eventos" },
  { href: "/rankings", label: "Rankings" },
  { href: "/federacao", label: "Federação" },
  { href: "/filiacao", label: "Filiação" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-6xl h-16 px-4 flex items-center justify-between">
        <Link href="/" className="text-[17px] font-semibold text-brand-900">FAB-AL</Link>
        <nav className="flex items-center gap-1">
          {NAV.map((it) => {
            const active = pathname === it.href || pathname.startsWith(it.href);
            return (
              <Link key={it.href} href={it.href}
                className={`px-3 py-2 rounded-lg text-sm hover:bg-slate-100 ${active ? "bg-slate-100 text-brand-900" : "text-slate-700"}`}>
                {it.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
