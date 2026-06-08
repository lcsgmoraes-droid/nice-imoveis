import { useState } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";

type Msg = { from: "bot" | "user"; text: string };

const initial: Msg[] = [
  { from: "bot", text: "Olá! Sou a assistente virtual da Nice Moraes 👋 Como posso te ajudar a encontrar seu lar?" },
];

const suggestions = ["Quero comprar", "Quero alugar", "Falar com corretor"];

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>(initial);
  const [input, setInput] = useState("");

  function send(text: string) {
    if (!text.trim()) return;
    setMsgs((m) => [...m, { from: "user", text }]);
    setInput("");
    setTimeout(() => {
      setMsgs((m) => [
        ...m,
        { from: "bot", text: "Perfeito! Pode me dizer em qual cidade ou bairro você procura, e qual sua faixa de orçamento?" },
      ]);
    }, 700);
  }

  return (
    <>
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 size-14 rounded-full bg-gold text-navy-deep shadow-gold flex items-center justify-center hover:scale-105 transition-transform"
        aria-label="Abrir assistente virtual"
      >
        {open ? <X className="size-6" /> : <MessageCircle className="size-6" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[min(92vw,380px)] h-[520px] bg-card rounded-2xl shadow-luxury border border-border flex flex-col overflow-hidden">
          <div className="bg-navy-gradient text-white p-4 flex items-center gap-3">
            <div className="size-10 rounded-full bg-gold/20 flex items-center justify-center">
              <Sparkles className="size-5 text-gold" />
            </div>
            <div>
              <div className="font-serif text-lg leading-tight">Assistente Nice Moraes</div>
              <div className="text-[11px] text-gold-soft">Online agora</div>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-secondary/50">
            {msgs.map((m, i) => (
              <div key={i} className={m.from === "bot" ? "flex justify-start" : "flex justify-end"}>
                <div className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm ${
                  m.from === "bot"
                    ? "bg-card text-navy-deep border border-border rounded-bl-sm"
                    : "bg-navy-deep text-white rounded-br-sm"
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {msgs.length === 1 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {suggestions.map((s) => (
                  <button key={s} onClick={() => send(s)}
                          className="px-3 py-1.5 rounded-full bg-card border border-gold/40 text-xs text-navy-deep hover:bg-gold transition-colors">
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form onSubmit={(e) => { e.preventDefault(); send(input); }}
                className="p-3 border-t border-border bg-card flex gap-2">
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Escreva sua mensagem..."
                   className="flex-1 px-4 py-2.5 rounded-full bg-secondary text-sm outline-none focus:ring-2 focus:ring-gold/40" />
            <button type="submit" className="size-10 rounded-full bg-gold text-navy-deep flex items-center justify-center hover:bg-gold-soft transition-colors">
              <Send className="size-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
