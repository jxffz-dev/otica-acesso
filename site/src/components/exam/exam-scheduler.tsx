"use client";

import { useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { stores, whatsappLink } from "@/lib/site";

const shifts = ["Manhã", "Tarde"] as const;

export function ExamScheduler() {
  const [storeSlug, setStoreSlug] = useState<string | null>(null);
  const [shift, setShift] = useState<(typeof shifts)[number] | null>(null);

  const store = stores.find((s) => s.slug === storeSlug);
  const ready = store && shift;

  const message = ready
    ? `Olá! Quero agendar meu exame de vista gratuito na loja de ${store.city}, de preferência no turno da ${shift.toLowerCase()}. Qual o próximo horário disponível?`
    : "";

  return (
    <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-wider text-gold-600">
        Agendamento rápido
      </p>

      <h3 className="mt-2 font-heading text-xl font-semibold text-navy-950">
        1. Em qual loja você quer ser atendido?
      </h3>
      <div className="mt-3 grid gap-2 sm:grid-cols-3">
        {stores.map((s) => (
          <button
            key={s.slug}
            type="button"
            onClick={() => setStoreSlug(s.slug)}
            aria-pressed={storeSlug === s.slug}
            className={cn(
              "rounded-lg border px-4 py-3 text-sm font-medium transition-colors",
              storeSlug === s.slug
                ? "border-gold-500 bg-accent text-navy-950"
                : "border-border text-muted-foreground hover:border-gold-300 hover:text-navy-950",
            )}
          >
            {s.city}
          </button>
        ))}
      </div>

      <h3 className="mt-6 font-heading text-xl font-semibold text-navy-950">
        2. Qual o melhor turno para você?
      </h3>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {shifts.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setShift(s)}
            aria-pressed={shift === s}
            className={cn(
              "rounded-lg border px-4 py-3 text-sm font-medium transition-colors",
              shift === s
                ? "border-gold-500 bg-accent text-navy-950"
                : "border-border text-muted-foreground hover:border-gold-300 hover:text-navy-950",
            )}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="mt-8">
        <Button
          asChild={!!ready}
          disabled={!ready}
          size="lg"
          className="w-full bg-gold-500 text-navy-950 hover:bg-gold-400 sm:w-auto"
        >
          {ready ? (
            <a href={whatsappLink(message)} target="_blank" rel="noopener">
              <MessageCircle className="size-4" />
              Confirmar pelo WhatsApp
              <ArrowRight className="size-4" />
            </a>
          ) : (
            <span>Escolha a loja e o turno</span>
          )}
        </Button>
        <p className="mt-3 text-xs text-muted-foreground">
          Você será direcionado ao nosso WhatsApp com a mensagem pronta — nossa
          equipe confirma o horário exato com você.
        </p>
      </div>
    </div>
  );
}
