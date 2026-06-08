import { GraduationCap, ScrollText, Sparkles } from "lucide-react";

const credentials = [
  { icon: GraduationCap, label: "Administração de Empresas" },
  { icon: ScrollText, label: "Técnica em Transações Imobiliárias" },
  { icon: Sparkles, label: "Avaliação Imobiliária" },
];

export function About() {
  return (
    <section id="quem-sou" className="py-28 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-[1.1fr_1fr] gap-14 items-start">
        <div>
          <span className="text-gold text-xs tracking-[0.4em] uppercase">Quem sou</span>
          <h2 className="font-serif text-4xl md:text-5xl text-navy-deep mt-3 mb-6">
            Nice Moraes — consultora imobiliária desde 2009
          </h2>

          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Atuo no mercado imobiliário desde 2009, com experiência em Presidente Prudente (SP)
              entre 2009 e 2010 e no Estado de Rondônia desde 2010. Ao longo dessa trajetória,
              construí minha atuação com base na <strong className="text-navy-deep">ética, transparência e equilíbrio</strong> nas
              relações entre compradores e vendedores.
            </p>
            <p>
              Meu trabalho é fundamentado em uma análise criteriosa do mercado, considerando não
              apenas o valor físico do imóvel, mas também seus diferenciais e valores agregados —
              garantindo avaliações justas e alinhadas à realidade do mercado.
            </p>
            <p>
              Realizo uma análise detalhada do perfil do comprador e das características dos imóveis
              disponíveis, otimizando o processo de busca e valorizando o tempo de todos os envolvidos
              na negociação.
            </p>
            <p>
              Minha consultoria é voltada para pessoas com rotina dinâmica que precisam de um
              profissional capaz de compreender seus objetivos, pesquisar as melhores oportunidades
              do mercado e apresentar opções que realmente atendam às suas necessidades.
            </p>
            <p className="font-serif italic text-xl text-navy-deep pt-2">
              “Estou ao seu lado em todas as etapas da jornada imobiliária — da idealização do
              projeto à conquista da sua casa própria.”
            </p>
          </div>
        </div>

        <aside className="lg:sticky lg:top-28 self-start space-y-4">
          <div className="rounded-2xl border border-gold/30 bg-navy-gradient text-white p-8">
            <div className="text-xs tracking-[0.35em] text-gold uppercase mb-2">Formação</div>
            <ul className="space-y-3 mt-4">
              {credentials.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 text-white/90">
                  <Icon className="size-5 text-gold shrink-0" />
                  <span className="text-sm">{label}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-white/15 text-xs text-gold-soft tracking-widest">
              CRECI 258678-F
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8">
            <p className="font-serif text-lg text-navy-deep italic">
              “Ética, transparência e equilíbrio na venda e compra de imóveis.”
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
