import logoUser from "@/assets/logo-user.png";

export function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-gold/15 py-12 text-white/60">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logoUser} alt="Monograma Nice Moraes" className="h-10 w-auto" />
          <div className="leading-tight">
            <div className="font-serif text-white tracking-wider">NICE MORAES</div>
            <div className="text-[10px] text-gold-soft tracking-[0.3em]">IMOBILIÁRIA</div>
          </div>
        </div>
        <p className="text-xs text-center">© {new Date().getFullYear()} Nice Moraes Imobiliária · Seu novo lar começa aqui</p>
      </div>
    </footer>
  );
}
