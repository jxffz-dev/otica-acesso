"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  MapPin,
  MessageCircle,
  Navigation,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink, type Store } from "@/lib/site";
import { cn } from "@/lib/utils";

/**
 * Cartões das lojas + mapa do Google. Clicar num cartão leva o mapa para
 * aquela loja. O iframe é `lazy` (só carrega quando o visitante chega aqui) e
 * é recriado a cada troca (`key`), então o mapa realmente muda de lugar.
 */
export function StoresExplorer({ stores }: { stores: Store[] }) {
  const [slug, setSlug] = useState(stores[0].slug);
  const mapRef = useRef<HTMLDivElement>(null);
  const active = stores.find((s) => s.slug === slug) ?? stores[0];

  function select(next: string) {
    setSlug(next);
    // No celular os cartões ficam empilhados e o mapa fica lá embaixo:
    // leva o visitante até ele para ele ver a troca acontecer.
    if (window.matchMedia("(max-width: 767px)").matches) {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      mapRef.current?.scrollIntoView({
        behavior: reduce ? "auto" : "smooth",
        block: "center",
      });
    }
  }

  return (
    <>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {stores.map((store) => {
          const selected = store.slug === active.slug;
          return (
            // O clique no cartão inteiro é um atalho para o mouse/toque; o botão
            // interno (aria-pressed) é o controle acessível para o teclado.
            <div
              key={store.slug}
              onClick={() => select(store.slug)}
              className={cn(
                "flex h-full cursor-pointer flex-col rounded-2xl border bg-card p-6 transition-all duration-300 hover:border-gold-300 hover:shadow-lg",
                selected
                  ? "border-gold-500 shadow-lg ring-1 ring-gold-500"
                  : "border-border",
              )}
            >
              <button
                type="button"
                aria-pressed={selected}
                className="flex flex-1 cursor-pointer flex-col rounded-lg text-left outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-4"
              >
                <span className="flex w-full items-center justify-between gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold-700">
                    {store.label}
                  </span>
                  {selected && (
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-gold-700">
                      <MapPin className="size-3.5" aria-hidden />
                      No mapa
                    </span>
                  )}
                </span>
                <span className="mt-1 block font-heading text-xl font-semibold text-navy-950">
                  {store.city} — {store.state}
                </span>
                <span className="mt-1 block flex-1 text-sm text-muted-foreground">
                  {store.address}
                </span>
                {/* Sem aria-label: o nome do botão é o texto visível + este
                    complemento só para leitores de tela (WCAG 2.5.3). */}
                <span className="sr-only"> — ver no mapa</span>
              </button>
              <div className="mt-5 flex flex-col gap-2">
                <Button
                  asChild
                  className="w-full bg-navy-950 text-white hover:bg-navy-800"
                >
                  <Link href={`/lojas/${store.slug}`}>
                    Conhecer a loja de {store.city}
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a
                    href={whatsappLink(
                      `Olá! Vim pelo site e quero falar com a loja de ${store.city}.`,
                    )}
                    target="_blank"
                    rel="noopener"
                    aria-label={`Falar com esta loja (${store.city}) pelo WhatsApp`}
                  >
                    <MessageCircle className="size-4" />
                    Falar com esta loja
                  </a>
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      <div
        ref={mapRef}
        className="mt-8 overflow-hidden rounded-2xl border border-border bg-card"
      >
        {active.mapEmbedUrl && (
          <iframe
            key={active.slug}
            src={active.mapEmbedUrl}
            title={`Mapa de ${active.city}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            // Isola o mapa: só os poderes de que o Google Maps precisa.
            sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
            width={1200}
            height={384}
            className="block h-72 w-full border-0 sm:h-96"
          />
        )}

        <div
          aria-live="polite"
          className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="font-heading text-lg font-semibold text-navy-950">
              {active.city} — {active.state}
            </p>
            <p className="mt-0.5 text-sm text-muted-foreground">
              {active.mapApproximate
                ? `Mostrando o centro de ${active.city}. O endereço exato da loja vem em breve: fale com a gente no WhatsApp.`
                : active.address}
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            {active.mapApproximate ? (
              <Button
                asChild
                className="bg-navy-950 text-white hover:bg-navy-800"
              >
                <a
                  href={whatsappLink(
                    `Olá! Vim pelo site e quero saber o endereço da loja de ${active.city}.`,
                  )}
                  target="_blank"
                  rel="noopener"
                >
                  <MessageCircle className="size-4" />
                  Pedir o endereço
                </a>
              </Button>
            ) : (
              <>
                {active.directionsUrl && (
                  <Button
                    asChild
                    className="bg-navy-950 text-white hover:bg-navy-800"
                  >
                    <a
                      href={active.directionsUrl}
                      target="_blank"
                      rel="noopener"
                    >
                      <Navigation className="size-4" />
                      Como chegar
                    </a>
                  </Button>
                )}
                <Button asChild variant="outline">
                  <a href={active.mapsUrl} target="_blank" rel="noopener">
                    <ExternalLink className="size-4" />
                    Abrir no Google Maps
                  </a>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
