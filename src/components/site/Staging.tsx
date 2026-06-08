import { Sparkles, Upload } from "lucide-react";

const styles = ["Moderno", "Escandinavo", "Industrial", "Clássico", "Boho", "Minimalista"];

export function Staging() {
  return (
    <section id="staging" className="py-28 bg-secondary">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <span className="text-gold text-xs tracking-[0.4em] uppercase">Decoração com IA</span>
        <h2 className="font-serif text-4xl md:text-5xl text-navy-deep mt-3 mb-4">
          Veja o potencial de cada espaço
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
          Envie a foto de um imóvel vazio e nossa IA mostra como ele pode ficar em diferentes
          estilos de decoração — em segundos.
        </p>

        <div className="grid md:grid-cols-[1fr_2fr] gap-6 text-left">
          <div className="bg-card rounded-2xl border-2 border-dashed border-gold/40 p-10 flex flex-col items-center justify-center text-center hover:border-gold transition-colors cursor-pointer">
            <Upload className="size-10 text-gold mb-4" />
            <div className="font-serif text-xl text-navy-deep">Envie a foto do ambiente</div>
            <div className="text-sm text-muted-foreground mt-2">PNG ou JPG · até 10MB</div>
          </div>

          <div className="bg-card rounded-2xl border border-border p-8">
            <div className="flex items-center gap-2 mb-5">
              <Sparkles className="size-5 text-gold" />
              <span className="text-sm text-navy-deep font-medium">Escolha um estilo</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {styles.map((s) => (
                <button key={s} className="px-4 py-2 rounded-full border border-border text-sm text-navy-deep hover:bg-gold hover:border-gold transition-colors">
                  {s}
                </button>
              ))}
            </div>
            <button className="w-full py-3 rounded-xl bg-navy-deep text-white hover:bg-navy transition-colors">
              Gerar decoração
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
