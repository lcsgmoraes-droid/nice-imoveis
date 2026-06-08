import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Bed, Bath, Maximize, MapPin, Car, Check, ArrowLeft, Compass, Phone } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Chatbot } from "@/components/site/Chatbot";
import { getProperty, formatPrice, properties, type Property } from "@/lib/properties";

export const Route = createFileRoute("/imoveis/$id")({
  loader: ({ params }) => {
    const property = getProperty(params.id);
    if (!property) throw notFound();
    return { property };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.property.title} · Nice Moraes` },
          { name: "description", content: loaderData.property.description.slice(0, 160) },
          { property: "og:title", content: loaderData.property.title },
          { property: "og:description", content: loaderData.property.description.slice(0, 160) },
          { property: "og:image", content: loaderData.property.cover },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-serif text-3xl text-navy-deep mb-4">Imóvel não encontrado</h1>
        <Link to="/imoveis" className="text-gold hover:underline">Voltar ao catálogo</Link>
      </div>
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="min-h-screen flex items-center justify-center">
      <button onClick={reset} className="text-gold">Tentar novamente</button>
    </div>
  ),
  component: PropertyDetail,
});

function PropertyDetail() {
  const { property } = Route.useLoaderData() as { property: Property };
  const [active, setActive] = useState(0);
  const [showTour, setShowTour] = useState(false);

  const related = properties.filter((p) => p.id !== property.id).slice(0, 3);

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <main className="pt-28 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <Link to="/imoveis" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-gold mb-6">
            <ArrowLeft className="size-4" /> Voltar para o catálogo
          </Link>

          {/* Gallery */}
          <div className="grid lg:grid-cols-[1fr_320px] gap-3 mb-10">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-muted">
              <img src={property.gallery[active]} alt={property.title} className="w-full h-full object-cover" />
              {property.tour360 && (
                <button
                  onClick={() => setShowTour(true)}
                  className="absolute bottom-5 right-5 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gold text-navy-deep text-sm font-medium hover:bg-gold-soft transition-colors shadow-luxury"
                >
                  <Compass className="size-4" /> Iniciar Tour 360°
                </button>
              )}
              {property.badge && (
                <span className="absolute top-5 left-5 px-3 py-1 rounded-full bg-gold text-navy-deep text-xs font-medium tracking-wide">
                  {property.badge}
                </span>
              )}
            </div>
            <div className="grid grid-cols-4 lg:grid-cols-2 gap-3 content-start">
              {property.gallery.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 transition-colors ${
                    i === active ? "border-gold" : "border-transparent hover:border-gold/50"
                  }`}
                >
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* 360 tour modal */}
          {showTour && property.tour360 && (
            <div
              onClick={() => setShowTour(false)}
              className="fixed inset-0 z-50 bg-navy-deep/95 backdrop-blur p-4 md:p-10 flex items-center justify-center"
            >
              <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-6xl aspect-video bg-black rounded-2xl overflow-hidden">
                <iframe
                  src={property.tour360}
                  title="Tour Virtual 360°"
                  allow="fullscreen; accelerometer; gyroscope; magnetometer"
                  className="w-full h-full"
                />
                <button
                  onClick={() => setShowTour(false)}
                  className="absolute top-3 right-3 px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 text-sm"
                >
                  Fechar
                </button>
              </div>
            </div>
          )}

          {/* Header + price */}
          <div className="grid lg:grid-cols-[1fr_360px] gap-10">
            <div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                <MapPin className="size-4 text-gold" /> {property.location} · {property.city}
              </div>
              <h1 className="font-serif text-4xl md:text-5xl text-navy-deep mb-4">{property.title}</h1>
              <div className="flex items-center gap-6 text-sm text-muted-foreground flex-wrap py-5 border-y border-border mb-8">
                {property.beds > 0 && <span className="flex items-center gap-2"><Bed className="size-5 text-gold" /> {property.beds} quartos</span>}
                {property.baths > 0 && <span className="flex items-center gap-2"><Bath className="size-5 text-gold" /> {property.baths} banheiros</span>}
                {property.parking > 0 && <span className="flex items-center gap-2"><Car className="size-5 text-gold" /> {property.parking} vagas</span>}
                <span className="flex items-center gap-2"><Maximize className="size-5 text-gold" /> {property.area} m²</span>
              </div>

              <h2 className="font-serif text-2xl text-navy-deep mb-3">Sobre este imóvel</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">{property.description}</p>

              <h2 className="font-serif text-2xl text-navy-deep mb-4">Diferenciais</h2>
              <ul className="grid sm:grid-cols-2 gap-3 mb-10">
                {property.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm">
                    <span className="size-7 rounded-full bg-gold/15 text-gold flex items-center justify-center"><Check className="size-4" /></span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <aside className="lg:sticky lg:top-28 self-start bg-card border border-border rounded-2xl p-8 shadow-luxury">
              <div className="text-xs uppercase tracking-widest text-gold mb-2">{property.status}</div>
              <div className="font-serif text-3xl text-navy-deep mb-6">{formatPrice(property.price, property.status)}</div>

              <a
                href={`https://wa.me/5518997170733?text=${encodeURIComponent(
                  `Olá Nice! Tenho interesse no imóvel "${property.title}".`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-gold text-navy-deep font-medium hover:bg-gold-soft transition-colors mb-3"
              >
                <Phone className="size-4" /> Falar no WhatsApp
              </a>
              <Link
                to="/"
                hash="simulador"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl border border-navy-deep text-navy-deep font-medium hover:bg-navy-deep hover:text-white transition-colors"
              >
                Simular financiamento
              </Link>
              <p className="text-xs text-muted-foreground mt-6 text-center">
                CRECI 258678-F · Documentação 100% verificada
              </p>
            </aside>
          </div>

          {/* Related */}
          <section className="mt-24">
            <h2 className="font-serif text-3xl text-navy-deep mb-8">Você também pode gostar</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link
                  key={p.id}
                  to="/imoveis/$id"
                  params={{ id: p.id }}
                  className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-luxury transition-all"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={p.cover} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-5">
                    <div className="text-xs text-muted-foreground mb-1">{p.location} · {p.city}</div>
                    <div className="font-serif text-xl text-navy-deep">{p.title}</div>
                    <div className="text-sm text-gold mt-2">{formatPrice(p.price, p.status)}</div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
