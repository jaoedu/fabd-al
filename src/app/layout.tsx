// src/app/layout.tsx
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Federação Alagoana de Badminton",
  description: "Site oficial da FAB-AL: eventos, rankings e diretoria.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <SiteHeader />
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
        <footer className="mt-12 border-t">
          <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-600">
            © {new Date().getFullYear()} Federação Alagoana de Badminton
          </div>
        </footer>
      </body>
    </html>
  );
}
