import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Clock, Eye, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/site/fade-in";
import { site, stores, whatsappLink } from "@/lib/site";

export function generateStaticParams() {
  return stores.map((store) => ({ slug: store.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const store = stores.find((s) => s.slug === slug);
  if (!store) return {};
  return {
    title: `Ótica em ${store.city} — CE | Exame de vista gratuito`,
    description: `Ótica Acesso em ${store.city} (CE): exame de vista gratuito com agendamento, óculos de grau e sol, lentes e óculos pronto em até 24h. ${store.address}.`,
  };
}

export default async function LojaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const store = stores.find((s) => s.slug === slug);
  if (!store) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Optician",
    name: `${site.name} — ${store.city}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: store.city,
      addressRegion: "CE",
      addressCountry: "BR",
      streetAddress: store.address,
    },
    url: `${site.url}/lojas/${store.slug}`,
    telephone: `+${site.whatsappNumber}`,
    sameAs: [site.instagram, site.facebook],
  };

  const highlights = [
    { icon: Eye, text: "Exame de vista gratuito, com agendamento" },
    { icon: Clock, text: "Seu óculos pronto em até 24 horas*" },
    { icon: MapPin, text: store.address },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="bg-navy-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold-300">
              {store.label} · {store.city} — {store.state}
            </p>
            <h1 className="max-w-3xl font-heading text-4xl font-semibold leading-tight sm:text-5xl">
              A sua ótica em {store.city}.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-100">
              Atendimento de verdade, exame de vista gratuito e as melhores
              armações da região — pertinho de você.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-gold-500 text-navy-950 hover:bg-gold-400"
              >
                <Link href="/exame-de-vista">
                  Agendar exame gratuito
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-navy-400 bg-transparent text-white hover:bg-navy-900 hover:text-white"
              >
                <a
                  href={whatsappLink(
                    `Olá! Vim pelo site e quero falar com a loja de ${store.city}.`,
                  )}
                  target="_blank"
                  rel="noopener"
                >
                  <MessageCircle className="size-4" />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <FadeIn key={item.text}>
              <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-6">
                <item.icon className="mt-0.5 size-5 shrink-0 text-gold-600" />
                <span className="text-sm font-medium leading-relaxed text-navy-900">
                  {item.text}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* TODO(D-007): fotos da fachada, do interior e da equipe desta loja */}

        <FadeIn>
          <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-xl border border-border bg-secondary p-6 sm:flex-row sm:items-center">
            <p className="text-sm text-muted-foreground">
              Quer visitar? Veja o caminho até a loja de {store.city}.
            </p>
            <Button asChild variant="outline">
              <a href={store.mapsUrl} target="_blank" rel="noopener">
                <MapPin className="size-4" />
                Como chegar
              </a>
            </Button>
          </div>
        </FadeIn>

        <p className="mt-8 text-xs text-muted-foreground">
          *Consulte condições para o seu tipo de lente.
        </p>
      </section>
    </>
  );
}
