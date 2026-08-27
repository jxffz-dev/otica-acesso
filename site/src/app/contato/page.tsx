import type { Metadata } from "next";
import { MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/site/fade-in";
import { site, stores, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato — fale com a Ótica Acesso",
  description:
    "Fale com a Ótica Acesso pelo WhatsApp (88) 99664-7553 ou visite nossas lojas em Varjota, Ipu e Reriutaba (CE). Atendemos todo o Brasil.",
};

export default function ContatoPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <FadeIn>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold-700">
          Contato
        </p>
        <h1 className="max-w-3xl font-heading text-4xl font-semibold leading-tight text-navy-950 sm:text-5xl">
          Fale com a gente. Respondemos rápido.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          O WhatsApp {site.whatsappDisplay} atende as três lojas e clientes de
          todo o Brasil.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-gold-500 text-navy-950 hover:bg-gold-400"
          >
            <a
              href={whatsappLink("Olá! Vim pelo site da Ótica Acesso.")}
              target="_blank"
              rel="noopener"
            >
              <MessageCircle className="size-4" />
              Chamar no WhatsApp
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={site.instagram} target="_blank" rel="noopener">
              Instagram @oticaacesso
            </a>
          </Button>
        </div>
      </FadeIn>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {stores.map((store, i) => (
          <FadeIn key={store.slug} delay={i * 0.1}>
            <div className="flex h-full flex-col rounded-xl border border-border bg-card p-6">
              <h2 className="font-heading text-xl font-semibold text-navy-950">
                {store.city} — {store.state}
              </h2>
              <p className="mt-2 flex flex-1 items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold-600" />
                {store.address}
              </p>
              <Button asChild variant="outline" className="mt-5 w-full">
                <a href={store.mapsUrl} target="_blank" rel="noopener">
                  Como chegar
                </a>
              </Button>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
