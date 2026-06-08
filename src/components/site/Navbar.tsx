import { Link } from "@tanstack/react-router";
import logoUser from "@/assets/logo-user.png";

const links = [
  { to: "/imoveis", label: "Imóveis" },
  { to: "/", hash: "sobre", label: "Sobre" },
  { to: "/", hash: "tour", label: "Tour 360°" },
  { to: "/", hash: "simulador", label: "Financiamento" },
  { to: "/", hash: "contato", label: "Contato" },
] as const;

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-navy-deep/85 backdrop-blur-md border-b border-gold/15">
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoUser} alt="Monograma Nice Moraes" className="h-12 w-auto" />
          <div className="hidden sm:block leading-tight">
            <div className="font-serif text-lg text-white tracking-wider">NICE MORAES</div>
            <div className="text-[10px] text-gold-soft tracking-[0.3em]">IMOBILIÁRIA</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.label} to={l.to} hash={"hash" in l ? l.hash : undefined} className="text-sm text-white/80 hover:text-gold transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>
        <Link to="/" hash="contato" className="hidden md:inline-flex items-center px-5 py-2.5 rounded-full bg-gold text-navy-deep text-sm font-medium hover:bg-gold-soft transition-colors">
          Fale conosco
        </Link>
      </div>
    </header>
  );
}
