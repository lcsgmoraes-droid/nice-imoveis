import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Bed, Bath, Maximize, MapPin, Search, Car } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Chatbot } from "@/components/site/Chatbot";
import { properties, formatPrice, type PropertyType, type PropertyStatus } from "@/lib/properties";

export const Route = createFileRoute("/imoveis/")({
  head: () => ({
    meta: [
      { title: "Imóveis · Nice Moraes Imobiliária" },
      { name: "description", content: "Catálogo de imóveis selecionados — casas, apartamentos, coberturas e terrenos com tour virtual 360°." },
    ],
  }),
  component: ImoveisPage,
});

const types: ("Todos" | PropertyType)[] = ["Todos", "Casa", "Apartamento", "Cobertura", "Terreno"];
const statuses: ("Todos" | PropertyStatus)[] = ["Todos", "Venda", "Aluguel"];

function ImoveisPage() {
  const [q, setQ] = useState("");
  const [type, setType] = useState<(typeof types)[number]>("Todos");
  const [status, setStatus] = useState<(typeof statuses)[number]>("Todos");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [beds, setBeds] = useState<number>(0);

  const filtered = useMemo(() => {
    const qLower = q.trim().toLowerCase();
    const max = maxPrice ? Number(maxPrice.replace(/\D/g, "")) : Infinity;
    return properties.filter((p) => {
      if (qLower && ![p.title, p.location, p.city].some((s) => s.toLowerCase().includes(qLower))) return false;
      if (type !== "Todos" && p.type !== type) return false;
      if (status !== "Todos" && p.status !== status) return false;
      if (p.price > max) return false;
      if (beds > 0 && p.beds < beds) return false;
      return true;
    });
  }, [q, type, status, maxPrice, beds]);

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <header className="mb-10">
            <span className="text-gold text-xs tracking-[0.4em] uppercase">Catálogo</span>
            <h1 className="font-serif text-4xl md:text-5xl text-navy-deep mt-3">Imóveis disponíveis</h1>
            <p className="text-muted-foreground mt-3 max-w-2xl">
              Use os filtros para refinar sua busca. Cada imóvel passou por nossa curadoria e checklist de segurança jurídica.
            </p>
          </header>

          {/* Filters */}
          <div className="bg-card border border-border rounded-2xl p-5 mb-8 grid lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-3">
            <label className="flex items-center gap-3 px-4 py-2.5 rounded-xl border border-input bg-background">
              <Search className="size-4 text-gold" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Buscar por nome, bairro ou cidade"
                className="w-full bg-transparent outline-none text-sm"
              />
            </label>
            <Select label="Tipo" value={type} onChange={(v) => setType(v as typeof type)} options={types} />
            <Select label="Status" value={status} onChange={(v) => setStatus(v as typeof status)} options={statuses} />
            <label className="flex flex-col px-4 py-1.5 rounded-xl border border-input bg-background">
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Até R$</span>
              <input
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                placeholder="Sem limite"
                inputMode="numeric"
                className="bg-transparent outline-none text-sm py-1"
              />
            </label>
            <label className="flex flex-col px-4 py-1.5 rounded-xl border border-input bg-background">
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Quartos</span>
              <select
                value={beds}
                onChange={(e) => setBeds(Number(e.target.value))}
                className="bg-transparent outline-none text-sm py-1"
              >
                <option value={0}>Qualquer</option>
                <option value={1}>1+</option>
                <option value={2}>2+</option>
                <option value={3}>3+</option>
                <option value={4}>4+</option>
              </select>
            </label>
          </div>

          <p className="text-sm text-muted-foreground mb-6">
            {filtered.length} {filtered.length === 1 ? "imóvel encontrado" : "imóveis encontrados"}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <Link
                key={p.id}
                to="/imoveis/$id"
                params={{ id: p.id }}
                className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-luxury transition-all duration-500"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={p.cover}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {p.badge && (
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gold text-navy-deep text-xs font-medium tracking-wide">
                      {p.badge}
                    </span>
                  )}
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-navy-deep/85 text-white text-xs">
                    {p.status}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-muted-foreground text-xs mb-2">
                    <MapPin className="size-3" /> {p.location} · {p.city}
                  </div>
                  <h3 className="font-serif text-2xl text-navy-deep mb-3">{p.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground border-t border-border pt-4 flex-wrap">
                    {p.beds > 0 && <span className="flex items-center gap-1.5"><Bed className="size-4 text-gold" /> {p.beds}</span>}
                    {p.baths > 0 && <span className="flex items-center gap-1.5"><Bath className="size-4 text-gold" /> {p.baths}</span>}
                    {p.parking > 0 && <span className="flex items-center gap-1.5"><Car className="size-4 text-gold" /> {p.parking}</span>}
                    <span className="flex items-center gap-1.5"><Maximize className="size-4 text-gold" /> {p.area}m²</span>
                  </div>
                  <div className="mt-4 font-serif text-xl text-navy-deep">{formatPrice(p.price, p.status)}</div>
                </div>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              Nenhum imóvel encontrado com esses filtros. Ajuste os critérios e tente novamente.
            </div>
          )}
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}

function Select({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string | number;
  onChange: (v: string) => void;
  options: readonly string[];
}) {
  return (
    <label className="flex flex-col px-4 py-1.5 rounded-xl border border-input bg-background">
      <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-transparent outline-none text-sm py-1"
      >
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}
