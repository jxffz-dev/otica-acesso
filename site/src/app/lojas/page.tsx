import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/site/fade-in";
import { stores } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nossas lojas em Varjota, Ipu e Reriutaba — CE",
  description:
    "Visite a Ótica Acesso: três lojas no Ceará, em Varjota, Ipu e Reriutaba. Exame de vista gratuito, óculos pronto em até 24h e atendimento de verdade.",
};

export default function LojasPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <FadeIn>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold-600">
          Nossas lojas
        </p>
        <h1 className="max-w-3xl font-heading text-4xl font-semibold leading-tight text-navy-950 sm:text-5xl">
          Três lojas no coração do Ceará.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Em Varjota, Ipu e Reriutaba, você encontra exame de vista gratuito,
          armações para todos os estilos e uma equipe que atende pelo nome.
        </p>
      </FadeIn>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {stores.map((store, i) => (
          <FadeIn key={store.slug} delay={i * 0.1}>
            <div className="flex h-full flex-col rounded-xl border border-border bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-gold-600">
                {store.label}
              </p>
              <h2 className="mt-1 font-heading text-2xl font-semibold text-navy-950">
                {store.city} — {store.state}
              </h2>
              <p className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold-600" />
                {store.address}
              </p>
              <div className="mt-6 flex flex-1 flex-col justify-end gap-2">
                <Button
                  asChild
                  className="w-full bg-navy-950 text-white hover:bg-navy-800"
                >
                  <Link href={`/lojas/${store.slug}`}>
                    Conhecer a loja
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a href={store.mapsUrl} target="_blank" rel="noopener">
                    Como chegar
                  </a>
                </Button>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
