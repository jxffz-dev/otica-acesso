import { Camera, MapPin, MessageCircle, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/site";

const reassurance = [
  {
    icon: Camera,
    text: "Mandamos fotos reais dos modelos disponíveis na hora, pelo WhatsApp.",
  },
  {
    icon: MapPin,
    text: "3 lojas no Ceará — Varjota, Ipu e Reriutaba — com atendimento pelo nome.",
  },
  {
    icon: Truck,
    text: "Comprou, a gente entrega onde você estiver, em todo o Brasil.",
  },
];

// Página interina das categorias — sem catálogo navegável ainda (Fase 3),
// mas honesta sobre como funciona o atendimento em vez de prometer algo
// que ainda não existe.
export function PageStub({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
      <h1 className="font-heading text-4xl font-semibold text-navy-950">
        {title}
      </h1>
      <p className="mx-auto mt-4 max-w-xl leading-relaxed text-muted-foreground">
        {description}
      </p>

      <ul className="mx-auto mt-10 flex max-w-md flex-col gap-4 text-left">
        {reassurance.map((item) => (
          <li key={item.text} className="flex items-start gap-3">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent">
              <item.icon className="size-4 text-gold-700" aria-hidden />
            </span>
            <span className="mt-1.5 text-sm leading-relaxed text-navy-900">
              {item.text}
            </span>
          </li>
        ))}
      </ul>

      <Button
        asChild
        size="lg"
        className="mt-10 bg-gold-500 text-navy-950 hover:bg-gold-400"
      >
        <a
          href={whatsappLink(`Olá! Vim pelo site e quero ver os modelos de ${title.toLowerCase()} disponíveis.`)}
          target="_blank"
          rel="noopener"
        >
          <MessageCircle className="size-4" />
          Falar no WhatsApp
        </a>
      </Button>
    </section>
  );
}
