import { Eye, Clock, MapPin, Truck, Glasses, Sparkles } from "lucide-react";

// Só afirmações confirmadas pelo cliente (bio do Instagram e conversas).
const items = [
  { icon: Eye, text: "Exame de vista gratuito" },
  { icon: Clock, text: "Óculos pronto em até 24h" },
  { icon: MapPin, text: "3 lojas no Ceará" },
  { icon: Glasses, text: "Lentes digitais" },
  { icon: Sparkles, text: "Lentes de contato" },
  { icon: Truck, text: "Envio para todo o Brasil" },
];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className="marquee-row flex shrink-0 items-center gap-10 pr-10"
    >
      {items.map((item) => (
        <li
          key={item.text}
          className="flex items-center gap-3 whitespace-nowrap text-sm font-medium uppercase tracking-[0.18em] text-navy-100"
        >
          <item.icon className="size-4 text-gold-400" aria-hidden />
          {item.text}
          <span aria-hidden className="ml-7 size-1 rounded-full bg-gold-500/60" />
        </li>
      ))}
    </ul>
  );
}

/** Faixa de benefícios em loop contínuo (CSS puro; pausa no hover e com reduzir movimento). */
export function Marquee() {
  return (
    <section
      aria-label="Diferenciais da Ótica Acesso"
      className="marquee overflow-hidden border-y border-navy-800 bg-navy-950 py-4"
    >
      <div className="marquee-track flex w-max">
        <Row />
        <Row hidden />
      </div>
    </section>
  );
}
