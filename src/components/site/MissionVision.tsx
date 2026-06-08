import { Scale, Handshake, ShieldCheck, Target, Eye, HeartHandshake } from "lucide-react";

const values = [
  { icon: Scale, title: "Ética", desc: "Transparência total em cada etapa da negociação — do primeiro contato à entrega das chaves." },
  { icon: Handshake, title: "Dupla mão", desc: "Equilíbrio real entre quem vende e quem compra. Os dois lados saem ganhando." },
  { icon: ShieldCheck, title: "Segurança jurídica", desc: "Rigor absoluto na análise documental para blindar o seu patrimônio." },
];

export function MissionVision() {
  return (
    <section id="sobre" className="py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-gold text-xs tracking-[0.4em] uppercase">Quem somos</span>
          <h2 className="font-serif text-4xl md:text-5xl text-navy-deep mt-3 mb-6">
            Consultoria imobiliária ética, eficiente e de dupla mão
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A Nice Moraes conecta compradores e vendedores de todas as classes com segurança jurídica
            e avaliações mercadológicas precisas. Atendimento focado tanto na realização do sonho do comprador
            quanto no objetivo financeiro do vendedor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <article className="rounded-2xl border border-gold/30 bg-navy-gradient text-white p-10">
            <Target className="size-7 text-gold mb-4" />
            <h3 className="font-serif text-2xl mb-3">Missão</h3>
            <p className="text-white/80 leading-relaxed">
              Oferecer consultoria imobiliária ética e eficiente de dupla mão, conectando compradores
              e vendedores com total segurança jurídica e avaliações mercadológicas precisas.
            </p>
          </article>
          <article className="rounded-2xl border border-border bg-card p-10">
            <Eye className="size-7 text-gold mb-4" />
            <h3 className="font-serif text-2xl text-navy-deep mb-3">Visão</h3>
            <p className="text-muted-foreground leading-relaxed">
              Ser referência regional em consultoria imobiliária reconhecida pela postura técnica,
              acolhedora e confiável — onde cada negócio fechado é um lar realizado com segurança.
            </p>
          </article>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-card p-8">
              <Icon className="size-7 text-gold mb-4" />
              <h4 className="font-serif text-xl text-navy-deep mb-2">{title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="font-serif italic text-2xl md:text-3xl text-navy-deep max-w-3xl mx-auto">
            <HeartHandshake className="inline size-6 text-gold mr-2 -mt-1" />
            “O equilíbrio perfeito entre quem quer vender e quem quer comprar.”
          </p>
        </div>
      </div>
    </section>
  );
}
