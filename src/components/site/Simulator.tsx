import { useMemo, useState } from "react";
import { Calculator } from "lucide-react";

export function Simulator() {
  const [price, setPrice] = useState(800000);
  const [down, setDown] = useState(160000);
  const [years, setYears] = useState(30);
  const [rate, setRate] = useState(10.5);

  const monthly = useMemo(() => {
    const loan = Math.max(0, price - down);
    const r = rate / 100 / 12;
    const n = years * 12;
    if (r === 0) return loan / n;
    return (loan * r) / (1 - Math.pow(1 + r, -n));
  }, [price, down, years, rate]);

  return (
    <section id="simulador" className="py-28 bg-background">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="text-gold text-xs tracking-[0.4em] uppercase">Simulador</span>
          <h2 className="font-serif text-4xl md:text-5xl text-navy-deep mt-3 mb-4">
            Descubra quanto vai pagar por mês
          </h2>
          <p className="text-muted-foreground text-lg max-w-md">
            Ajuste os valores e veja a parcela estimada em tempo real. Depois, fale com nossa
            equipe para uma análise de crédito completa.
          </p>
        </div>

        <div className="bg-card rounded-2xl border border-border shadow-luxury p-8">
          <Slider label="Valor do imóvel" value={price} min={100000} max={5000000} step={10000} onChange={setPrice} format={brl} />
          <Slider label="Entrada" value={down} min={0} max={price} step={10000} onChange={setDown} format={brl} />
          <Slider label="Prazo (anos)" value={years} min={5} max={35} step={1} onChange={setYears} format={(v) => `${v} anos`} />
          <Slider label="Juros ao ano" value={rate} min={6} max={15} step={0.1} onChange={setRate} format={(v) => `${v.toFixed(1)}%`} />

          <div className="mt-6 p-6 rounded-xl bg-navy-deep text-white flex items-center gap-4">
            <Calculator className="size-8 text-gold" />
            <div className="flex-1">
              <div className="text-xs uppercase tracking-widest text-gold-soft">Parcela estimada</div>
              <div className="font-serif text-3xl">{brl(monthly)}<span className="text-sm text-white/60">/mês</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function brl(n: number) {
  return n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}

function Slider({ label, value, min, max, step, onChange, format }: {
  label: string; value: number; min: number; max: number; step: number;
  onChange: (v: number) => void; format: (v: number) => string;
}) {
  return (
    <div className="mb-5">
      <div className="flex justify-between items-baseline mb-2">
        <label className="text-sm text-navy-deep">{label}</label>
        <span className="font-serif text-lg text-navy-deep">{format(value)}</span>
      </div>
      <input type="range" min={min} max={max} step={step} value={value}
             onChange={(e) => onChange(Number(e.target.value))}
             className="w-full accent-gold" />
    </div>
  );
}
