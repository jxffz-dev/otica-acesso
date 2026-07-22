import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/site";

// Placeholder das páginas internas — substituído pelo conteúdo real na Fase 2/3
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
      <Button
        asChild
        size="lg"
        className="mt-8 bg-gold-500 text-navy-950 hover:bg-gold-400"
      >
        <a
          href={whatsappLink(`Olá! Vim pelo site e quero saber mais sobre: ${title}.`)}
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
