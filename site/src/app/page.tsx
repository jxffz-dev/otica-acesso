import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Eye,
  MapPin,
  MessageCircle,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/site/fade-in";
import { site, stores, whatsappLink } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Categories />
      <StylesShowcase />
      <SocialProof />
      <ExamCta />
      <Stores />
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * HERO — foto lifestyle no lado direito (A1)
 * ────────────────────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(61,92,160,0.4),_transparent_55%),radial-gradient(ellipse_at_bottom_left,_rgba(201,148,34,0.14),_transparent_50%)]"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.1fr_1fr] lg:px-8 lg:py-28">
        <FadeIn>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold-300">
            Desde {site.foundedYear} · Varjota · Ipu · Reriutaba
          </p>
          <h1 className="max-w-2xl font-heading text-4xl font-semibold leading-[1.1] sm:text-6xl">
            Enxergar bem{" "}
            <span className="text-gold-300">muda tudo.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-100">
            Óculos de grau e de sol com atendimento de verdade — nas nossas
            lojas no Ceará ou onde você estiver. Seu óculos pronto em até 24
            horas.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-gold-500 text-navy-950 shadow-lg shadow-gold-500/20 transition-all hover:bg-gold-400 hover:shadow-gold-400/30 active:scale-[0.97]"
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
              className="border-navy-400 bg-transparent text-white hover:bg-navy-900 hover:text-white active:scale-[0.97]"
            >
              <Link href="/oculos-de-grau">Ver coleção</Link>
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="hidden lg:block">
          <div className="relative overflow-hidden rounded-3xl">
            {/* Foto lifestyle — A1: a maior alavanca visual do site */}
            <Image
              src="/images/hero-lifestyle.jpg"
              alt="Mulher usando óculos de grau elegantes da Ótica Acesso"
              width={640}
              height={854}
              priority
              className="h-auto w-full rounded-3xl object-cover"
            />
            {/* Overlay gradiente sutil para profundidade */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-navy-950/40 via-transparent to-transparent"
            />

            {/* Chips glassmorphism flutuantes */}
            <div className="absolute left-4 top-6 rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md sm:left-6 sm:top-8">
              <p className="text-xs text-navy-100">Exame de vista</p>
              <p className="font-heading text-lg font-semibold text-gold-300">
                Gratuito
              </p>
            </div>
            <div className="absolute bottom-6 right-4 rounded-xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md sm:right-6 sm:bottom-8">
              <p className="text-xs text-navy-100">Óculos pronto em</p>
              <p className="font-heading text-lg font-semibold text-gold-300">
                até 24h
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * TRUST BAR
 * ────────────────────────────────────────────────────────────────────────── */

const trustItems = [
  { icon: MapPin, text: "3 lojas físicas no Ceará" },
  { icon: Clock, text: "Óculos pronto em até 24h" },
  { icon: Truck, text: "Envio para todo o Brasil" },
  { icon: Eye, text: "Exame de vista gratuito" },
];

function TrustBar() {
  return (
    <section className="border-b border-border bg-secondary">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:px-8">
        {trustItems.map((item, i) => (
          <FadeIn key={item.text} staggerIndex={i}>
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent">
                <item.icon className="size-5 text-gold-700" />
              </div>
              <span className="text-sm font-medium text-navy-900">
                {item.text}
              </span>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * CATEGORIES — com fotos reais (A2)
 * ────────────────────────────────────────────────────────────────────────── */

const categories = [
  {
    href: "/oculos-de-grau",
    title: "Óculos de grau",
    description: "Armações que valorizam o seu olhar, com a lente certa.",
    image: "/images/category-grau.jpg",
    imageAlt: "Armações de óculos de grau premium sobre fundo escuro",
  },
  {
    href: "/oculos-de-sol",
    title: "Óculos de sol",
    description: "Estilo e proteção para o sol de todo dia.",
    image: "/images/category-sol.jpg",
    imageAlt: "Óculos de sol estilosos com luz natural dourada",
  },
  {
    href: "/lentes",
    title: "Lentes",
    description: "Lentes digitais, grau alto, 1.67 e lentes de contato.",
    image: "/images/category-lentes.jpg",
    imageAlt: "Lentes de contato e lentes oftálmicas modernas",
  },
];

function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <FadeIn>
        <h2 className="font-heading text-3xl font-semibold text-navy-950 sm:text-4xl">
          O que você procura hoje?
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Do exame à entrega, cuidamos de cada detalhe da sua visão.
        </p>
      </FadeIn>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {categories.map((category, i) => (
          <FadeIn key={category.href} staggerIndex={i}>
            <Link
              href={category.href}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card outline-none transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-300 hover:shadow-xl hover:shadow-navy-950/10 focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 active:scale-[0.98]"
            >
              {/* Fotos reais de categoria (A2) */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay gradiente para garantir legibilidade */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/30 to-transparent"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-heading text-xl font-semibold text-navy-950">
                  {category.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {category.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-gold-700">
                  Explorar
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * STYLES SHOWCASE — vitrine de estilos (honesta)
 *
 * Estilos de armação universais (aviador, redondo, gatinho, esportivo) — não
 * são SKUs inventados. Sem preços fictícios: disponibilidade e valores reais
 * são consultados no WhatsApp. Vira catálogo de verdade na Fase 3.
 * ────────────────────────────────────────────────────────────────────────── */

const styleTiles = [
  {
    name: "Aviador",
    caption: "Clássico atemporal",
    image: "/images/category-sol.jpg",
    imageAlt: "Óculos no estilo aviador",
  },
  {
    name: "Redondo",
    caption: "Ar retrô e moderno",
    image: "/images/category-grau.jpg",
    imageAlt: "Óculos de armação redonda",
  },
  {
    name: "Gatinho",
    caption: "Elegância marcante",
    image: "/images/hero-lifestyle.jpg",
    imageAlt: "Óculos no estilo gatinho",
  },
  {
    name: "Esportivo",
    caption: "Leveza e resistência",
    image: "/images/category-grau.jpg",
    imageAlt: "Óculos esportivo",
  },
];

function StylesShowcase() {
  return (
    <section className="border-y border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="font-heading text-3xl font-semibold text-navy-950 sm:text-4xl">
                Modelos para todo estilo
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Do clássico ao moderno — encontre a armação com a sua cara.
                Consulte modelos e valores no WhatsApp.
              </p>
            </div>
            <Button asChild variant="outline" className="hidden sm:inline-flex">
              <Link href="/oculos-de-grau">
                Ver categorias
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </FadeIn>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {styleTiles.map((tile, i) => (
            <FadeIn key={tile.name} staggerIndex={i}>
              <a
                href={whatsappLink(
                  `Olá! Vi o estilo "${tile.name}" no site e quero ver os modelos disponíveis.`,
                )}
                target="_blank"
                rel="noopener"
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card outline-none transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 active:scale-[0.98]"
              >
                <div className="relative h-44 overflow-hidden bg-navy-950">
                  <Image
                    src={tile.image}
                    alt={tile.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-heading text-lg font-semibold text-navy-950">
                    {tile.name}
                  </h3>
                  <p className="mt-1 flex-1 text-sm text-muted-foreground">
                    {tile.caption}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gold-700">
                    <MessageCircle className="size-4" />
                    Ver modelos
                  </span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * SOCIAL PROOF — prova social honesta (aponta para o Instagram real)
 *
 * Substitui os antigos depoimentos e a vitrine "Favoritos da semana", que
 * usavam nomes, avaliações e preços fictícios (risco de publicidade enganosa,
 * CDC/CONAR). Depoimentos reais (com autorização) e o catálogo com preços
 * verdadeiros retornam quando o material existir — ver P-010 e Fase 3.
 * ────────────────────────────────────────────────────────────────────────── */

function SocialProof() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-600">
              @oticaacesso
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold text-navy-950 sm:text-4xl">
              Acompanhe quem já enxerga melhor com a gente
            </h2>
            <p className="mt-4 text-muted-foreground">
              No nosso Instagram você vê o dia a dia das lojas, clientes
              experimentando os óculos e as novidades que chegam toda semana.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-navy-950 text-white hover:bg-navy-800 active:scale-[0.97]"
            >
              <a href={site.instagram} target="_blank" rel="noopener">
                Ver no Instagram
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * EXAM CTA
 * ────────────────────────────────────────────────────────────────────────── */

function ExamCta() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <FadeIn>
        <div className="relative overflow-hidden rounded-3xl bg-navy-950 px-8 py-14 text-white sm:px-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(201,148,34,0.2),_transparent_55%)]"
          />
          {/* Imagem decorativa sutil no fundo */}
          <div className="pointer-events-none absolute -right-16 top-1/2 hidden w-80 -translate-y-1/2 opacity-20 lg:block">
            <Image
              src="/images/category-grau.jpg"
              alt=""
              width={320}
              height={180}
              className="rounded-2xl object-cover"
              aria-hidden
            />
          </div>
          <div className="relative max-w-2xl">
            <h2 className="font-heading text-3xl font-semibold sm:text-4xl">
              Quando foi seu último exame de vista?
            </h2>
            <p className="mt-4 leading-relaxed text-navy-100">
              Cuidar da visão é cuidar de como você vive. Agende seu exame
              gratuito em uma das nossas lojas — rápido e com quem entende.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-gold-500 text-navy-950 shadow-lg shadow-gold-500/20 hover:bg-gold-400 active:scale-[0.97]"
            >
              <Link href="/exame-de-vista">
                Agendar meu exame
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * STORES
 * ────────────────────────────────────────────────────────────────────────── */

function Stores() {
  return (
    <section className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="font-heading text-3xl font-semibold text-navy-950 sm:text-4xl">
            Perto de você
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Três lojas no coração do Ceará — e atendimento pelo WhatsApp para
            todo o Brasil.
          </p>
        </FadeIn>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {stores.map((store, i) => (
            <FadeIn key={store.slug} staggerIndex={i}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-gold-300 hover:shadow-lg active:scale-[0.98]">
                <p className="text-xs font-semibold uppercase tracking-wider text-gold-600">
                  {store.label}
                </p>
                <h3 className="mt-1 font-heading text-xl font-semibold text-navy-950">
                  {store.city} — {store.state}
                </h3>
                <p className="mt-1 flex-1 text-sm text-muted-foreground">
                  {store.address}
                </p>
                <div className="mt-5 flex flex-col gap-2">
                  <Button
                    asChild
                    className="w-full bg-navy-950 text-white hover:bg-navy-800 active:scale-[0.97]"
                  >
                    <Link href={`/lojas/${store.slug}`}>
                      Conhecer a loja
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full active:scale-[0.97]">
                    <a
                      href={whatsappLink(
                        `Olá! Vim pelo site e quero falar com a loja de ${store.city}.`,
                      )}
                      target="_blank"
                      rel="noopener"
                    >
                      <MessageCircle className="size-4" />
                      Falar com esta loja
                    </a>
                  </Button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
