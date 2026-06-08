import { Link } from "@tanstack/react-router";
import { Bed, Bath, Maximize, MapPin } from "lucide-react";
import { properties, formatPrice } from "@/lib/properties";

export function Featured() {
  const highlight = properties.slice(0, 3);
  return (
    <section id="imoveis" className="py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
          <div>
            <span className="text-gold text-xs tracking-[0.4em] uppercase">Curadoria</span>
            <h2 className="font-serif text-4xl md:text-5xl text-navy-deep mt-3">Imóveis em destaque</h2>
          </div>
          <Link to="/imoveis" className="text-sm text-navy-deep border-b border-gold pb-1 hover:text-gold transition-colors">
            Ver todos os imóveis →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlight.map((p) => (
            <Link
              key={p.id}
              to="/imoveis/$id"
              params={{ id: p.id }}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-luxury transition-all duration-500"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img src={p.cover} alt={p.title} width={1024} height={768} loading="lazy"
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                {p.badge && (
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gold text-navy-deep text-xs font-medium tracking-wide">
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1.5 text-muted-foreground text-xs mb-2">
                  <MapPin className="size-3" /> {p.location} · {p.city}
                </div>
                <h3 className="font-serif text-2xl text-navy-deep mb-3">{p.title}</h3>
                <div className="flex items-center gap-5 text-sm text-muted-foreground border-t border-border pt-4">
                  <span className="flex items-center gap-1.5"><Bed className="size-4 text-gold" /> {p.beds}</span>
                  <span className="flex items-center gap-1.5"><Bath className="size-4 text-gold" /> {p.baths}</span>
                  <span className="flex items-center gap-1.5"><Maximize className="size-4 text-gold" /> {p.area}m²</span>
                  <span className="ml-auto font-serif text-lg text-navy-deep">{formatPrice(p.price, p.status)}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
