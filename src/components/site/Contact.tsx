import { Phone, Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contato" className="py-28 bg-navy-gradient text-white">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-14">
        <div>
          <span className="text-gold text-xs tracking-[0.4em] uppercase">Vamos conversar</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-3 mb-6">
            Pronta para te ajudar a encontrar o lar ideal
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-md">
            Conte o que você procura. Em poucas horas retornamos com opções selecionadas a dedo.
          </p>
          <ul className="space-y-5 text-white/90">
            <li className="flex items-center gap-4">
              <Phone className="size-5 text-gold" />
              <a href="https://wa.me/5518997170733" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                (18) 99717-0733 · WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="size-5 text-gold" />
              <a href="mailto:nicemoraes.imoveis@gmail.com" className="hover:text-gold transition-colors">
                nicemoraes.imoveis@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-4">
              <MapPin className="size-5 text-gold" />
              <span>Rondônia · Brasil</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="text-xs tracking-widest text-gold-soft">CRECI 258678-F</span>
            </li>
          </ul>
          <p className="mt-10 font-serif italic text-xl text-gold-soft max-w-md">
            “Ética, transparência e equilíbrio na venda e compra de imóveis.”
          </p>
        </div>

        <form className="bg-white/5 backdrop-blur border border-gold/20 rounded-2xl p-8 space-y-4">
          <Input label="Nome" placeholder="Como podemos te chamar?" />
          <Input label="WhatsApp" placeholder="(00) 00000-0000" />
          <Input label="E-mail" placeholder="seu@email.com" type="email" />
          <div>
            <label className="block text-xs uppercase tracking-widest text-gold-soft mb-2">Mensagem</label>
            <textarea rows={4} placeholder="O que você procura?"
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/15 text-white placeholder:text-white/40 outline-none focus:border-gold transition-colors" />
          </div>
          <button type="button" className="w-full py-3 rounded-lg bg-gold text-navy-deep font-medium hover:bg-gold-soft transition-colors">
            Enviar mensagem
          </button>
        </form>
      </div>
    </section>
  );
}

function Input({ label, ...props }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-gold-soft mb-2">{label}</label>
      <input {...props} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/15 text-white placeholder:text-white/40 outline-none focus:border-gold transition-colors" />
    </div>
  );
}
