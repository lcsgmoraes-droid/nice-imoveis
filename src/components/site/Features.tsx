import { Bot, Compass, Calculator, Sparkles, Smartphone, ShieldCheck } from "lucide-react";

const items = [
  { icon: Bot, title: "Atendente IA 24h", desc: "Chatbot inteligente que qualifica seu interesse e responde dúvidas a qualquer hora." },
  { icon: Compass, title: "Tour Virtual 360°", desc: "Visite o imóvel por dentro sem sair de casa, com plantas interativas em 3D." },
  { icon: Calculator, title: "Simulador de financiamento", desc: "Calcule parcelas e veja sua capacidade de crédito em segundos." },
  { icon: Sparkles, title: "Decoração com IA", desc: "Veja o imóvel decorado em diferentes estilos antes mesmo de visitar." },
  { icon: Smartphone, title: "Pensado para o celular", desc: "Experiência rápida e fluida em qualquer tela, do busca à assinatura." },
  { icon: ShieldCheck, title: "Atendimento humano", desc: "Por trás da tecnologia, uma equipe que cuida de cada detalhe da sua jornada." },
];

export function Features() {
  return (
    <section id="tour" className="py-28 bg-navy-gradient text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-16">
          <span className="text-gold text-xs tracking-[0.4em] uppercase">Tecnologia + cuidado</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3">Uma nova forma de encontrar o seu lar</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/15 border border-gold/15 rounded-2xl overflow-hidden">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-navy-deep p-8 hover:bg-navy transition-colors">
              <Icon className="size-7 text-gold mb-5" />
              <h3 className="font-serif text-2xl mb-2">{title}</h3>
              <p className="text-sm text-white/65 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
