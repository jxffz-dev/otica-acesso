import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Eye, HandHeart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/site/fade-in";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Sobre a Ótica Acesso — desde ${site.foundedYear} cuidando da sua visão`,
  description: `Conheça a Ótica Acesso: desde ${site.foundedYear} cuidando da saúde visual no Ceará, com lojas em Varjota, Ipu e Reriutaba e atendimento para todo o Brasil.`,
};

const values = [
  {
    icon: Eye,
    title: "Saúde visual em primeiro lugar",
    text: "Antes de vender óculos, cuidamos de olhos. Exame gratuito, orientação honesta e a lente certa para cada caso.",
  },
  {
    icon: HandHeart,
    title: "Atendimento que chama pelo nome",
    text: "Somos do interior e temos orgulho disso. Aqui, cliente não é número — é vizinho, é família, é história.",
  },
  {
    icon: Sparkles,
    title: "Qualidade acessível",
    text: "Acreditamos que enxergar bem com estilo não é luxo. Trabalhamos para que o melhor caiba no seu bolso.",
  },
];

export default function SobrePage() {
  const years = new Date().getFullYear() - site.foundedYear;

  return (
    <>
      <section className="bg-navy-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold-300">
              Nossa história
            </p>
            <h1 className="max-w-3xl font-heading text-4xl font-semibold leading-tight sm:text-5xl">
              Há mais de {years} anos ajudando o Ceará a enxergar melhor.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-100">
              A Ótica Acesso nasceu em Varjota, em {site.foundedYear}, com uma
              ideia simples: toda pessoa merece cuidar da visão com qualidade,
              sem precisar viajar até a capital. Hoje somos três lojas — em
              Varjota, Ipu e Reriutaba — e atendemos clientes em todo o Brasil.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="font-heading text-3xl font-semibold text-navy-950 sm:text-4xl">
            No que acreditamos
          </h2>
        </FadeIn>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {values.map((value, i) => (
            <FadeIn key={value.title} delay={i * 0.1}>
              <div className="h-full rounded-xl border border-border bg-card p-8">
                <value.icon className="size-9 text-gold-600" />
                <h3 className="mt-5 font-heading text-xl font-semibold text-navy-950">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {value.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* TODO(D-007): seção "Nosso time" com fotos reais da equipe (diária de fotógrafo) */}

        <FadeIn>
          <div className="mt-14 rounded-2xl bg-secondary p-8 text-center sm:p-12">
            <h2 className="font-heading text-2xl font-semibold text-navy-950 sm:text-3xl">
              Venha nos conhecer de perto.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Passe em uma das nossas lojas ou agende seu exame de vista
              gratuito — vai ser um prazer cuidar da sua visão.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-6 bg-gold-500 text-navy-950 hover:bg-gold-400"
            >
              <Link href="/exame-de-vista">
                Agendar exame gratuito
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
