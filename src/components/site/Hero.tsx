import heroImage from "@/assets/hero-house.jpg";
import { Search, MapPin, Home, DollarSign } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      <img
        src={heroImage}
        alt="Casa moderna iluminada ao entardecer"
        width={1920}
        height={1280}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-navy-deep/40" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-32 w-full">
        <div className="max-w-3xl">
          <span className="inline-block text-gold text-xs tracking-[0.4em] mb-6 uppercase">
            Negócios Imobiliários
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-white leading-[1.05] mb-6">
            Seu novo lar <br />
            <span className="text-gold-gradient italic">começa aqui</span>
          </h1>
          <p className="text-white/75 text-lg max-w-xl mb-10">
            Curadoria de imóveis selecionados, tour virtual em 360° e atendimento humano
            que entende o que você procura.
          </p>

          {/* Search bar */}
          <div className="bg-white/95 backdrop-blur rounded-2xl shadow-luxury p-3 grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto] gap-2">
            <Field icon={<MapPin className="size-4" />} label="Localização" placeholder="Cidade ou bairro" />
            <Field icon={<Home className="size-4" />} label="Tipo" placeholder="Casa, Apto..." />
            <Field icon={<DollarSign className="size-4" />} label="Até R$" placeholder="800.000" />
            <button className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-navy-deep text-white hover:bg-navy transition-colors">
              <Search className="size-4" /> Buscar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ icon, label, placeholder }: { icon: React.ReactNode; label: string; placeholder: string }) {
  return (
    <label className="flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-muted/50 transition-colors">
      <span className="text-gold">{icon}</span>
      <span className="flex-1">
        <span className="block text-[10px] uppercase tracking-widest text-muted-foreground">{label}</span>
        <input className="w-full bg-transparent outline-none text-sm text-navy-deep placeholder:text-muted-foreground/60" placeholder={placeholder} />
      </span>
    </label>
  );
}
