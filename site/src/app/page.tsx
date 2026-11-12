import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BeforeAfter } from "@/components/site/before-after";
import { BrandsStrip } from "@/components/site/brands-strip";
import { StoresExplorer } from "@/components/site/stores-explorer";
import { FadeIn } from "@/components/site/fade-in";
import { FrameIcon, frameShapes } from "@/components/site/frame-icons";
import { HeroVisual } from "@/components/site/hero-visual";
import { Marquee } from "@/components/site/marquee";
import { RevealWords } from "@/components/site/reveal-words";
import { site, stores, whatsappLink } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Categories />
      <BrandsStrip />
      <BeforeAfter />
      <ShapeSelector />
      <SocialProof />
      <Stores />
      <ExamCta />
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * HERO — foto lifestyle no lado direito (A1)
 * ────────────────────────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      {/* Seda azul-marinho com brilho dourado (imagem do cliente), em movimento lento */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/images/background-seda.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="hero-drift object-cover opacity-70"
        />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(10,22,51,0.92)_0%,rgba(10,22,51,0.55)_55%,rgba(10,22,51,0.15)_100%)]"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.1fr_1fr] lg:px-8 lg:py-28">
        <FadeIn>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gold-300">
            Desde {site.foundedYear} · Varjota · Ipu · Reriutaba
          </p>
          <h1 className="max-w-2xl font-display text-5xl font-bold leading-[1.1] sm:text-7xl">
            <span className="block">
              <RevealWords text="Enxergar bem" />
            </span>
            <span className="block">
              <RevealWords
                text="muda tudo."
                start={2}
                className="text-gold-300"
              />
            </span>
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
              className="bg-gold-500 text-navy-950 shadow-lg shadow-gold-500/20 transition-all hover:bg-gold-400 hover:shadow-gold-400/30"
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
              <Link href="/oculos-de-grau">Ver coleção</Link>
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} className="hidden lg:block">
          {/* Foto lifestyle com parallax + chips flutuantes (client component) */}
          <HeroVisual />
        </FadeIn>
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
    image: "/images/category-grau-casal.jpg",
    imageAlt: "Homem e mulher sorrindo, usando óculos de grau, conversando em um café",
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
      <h2 className="font-heading text-3xl font-semibold text-navy-950 sm:text-4xl">
        O que você procura hoje?
      </h2>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Do exame à entrega, cuidamos de cada detalhe da sua visão.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.href}
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
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * SHAPE SELECTOR — "Qual formato te representa?" (padrão do Mercadão dos
 * Óculos, reinterpretado). Silhuetas SVG originais; sem preços nem modelos
 * fictícios — disponibilidade e valores reais vêm pelo WhatsApp.
 * ────────────────────────────────────────────────────────────────────────── */

function ShapeSelector() {
  return (
    <section className="border-b border-border bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="font-heading text-3xl font-semibold text-navy-950 sm:text-4xl">
                Qual formato combina com você?
              </h2>
              <p className="mt-3 max-w-2xl text-muted-foreground">
                Toque no estilo que mais te representa e veja os modelos
                disponíveis com a nossa equipe, direto no WhatsApp.
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

        <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {frameShapes.map((item, i) => (
            <li key={item.shape}>
              <FadeIn staggerIndex={i} className="h-full">
                <a
                  href={whatsappLink(
                    `Olá! Vi o formato "${item.label}" no site e quero ver os modelos disponíveis.`,
                  )}
                  target="_blank"
                  rel="noopener"
                  className={
                    item.photo
                      ? "group flex h-full flex-col rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-4 active:opacity-80"
                      : "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card outline-none transition-all duration-300 hover:-translate-y-1 hover:border-gold-300 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 active:scale-[0.97]"
                  }
                >
                  {item.photo ? (
                    <>
                      {/* Estilo catálogo: a foto (fundo branco) "assenta" via multiply
                          sobre um fundo de estúdio (clarão no centro, azul-gelo da
                          marca nas bordas); sem borda, sombra nem seta. */}
                      <div className="relative aspect-[3/2] overflow-hidden rounded-sm bg-[radial-gradient(ellipse_75%_70%_at_50%_46%,#ffffff_0%,#eef3fa_45%,#d5e0f0_100%)]">
                        <Image
                          src={item.photo}
                          alt=""
                          fill
                          sizes="(max-width: 1024px) 50vw, 25vw"
                          className="object-cover mix-blend-multiply transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                        />
                      </div>
                      <div className="flex flex-1 flex-col pt-3">
                        <h3 className="font-heading text-lg font-medium text-navy-950">
                          {item.label}
                        </h3>
                        <p className="mt-0.5 text-sm text-muted-foreground">
                          {item.hint}
                        </p>
                        <div className="mt-auto pt-3">
                          <span
                            aria-hidden
                            className="block h-px w-full bg-navy-950/15 transition-colors duration-300 group-hover:bg-gold-500"
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center justify-center bg-gradient-to-br from-navy-900 to-navy-950 px-4 py-7 text-gold-400 transition-colors duration-300 group-hover:text-gold-300">
                        <FrameIcon
                          shape={item.shape}
                          className="max-w-28 transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-heading text-base font-semibold text-navy-950">
                          {item.label}
                        </h3>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {item.hint}
                        </p>
                      </div>
                    </>
                  )}
                  {/* Sem aria-label: o nome acessível é o próprio texto visível
                      (formato + descrição) mais este complemento só para leitores
                      de tela (WCAG 2.5.3, "rótulo no nome"). */}
                  <span className="sr-only">
                    {" "}
                    — ver armações pelo WhatsApp (abre em nova aba)
                  </span>
                </a>
              </FadeIn>
            </li>
          ))}
        </ul>
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
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-700">
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
            className="mt-8 bg-navy-950 text-white hover:bg-navy-800"
          >
            <a href={site.instagram} target="_blank" rel="noopener">
              Ver no Instagram
              <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>
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
              width={1376}
              height={768}
              className="h-auto w-full rounded-2xl object-cover"
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
              className="mt-8 bg-gold-500 text-navy-950 shadow-lg shadow-gold-500/20 hover:bg-gold-400"
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
        <h2 className="font-heading text-3xl font-semibold text-navy-950 sm:text-4xl">
          Perto de você
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Três lojas no coração do Ceará — e atendimento pelo WhatsApp para
          todo o Brasil.
        </p>
        <StoresExplorer stores={stores} />
      </div>
    </section>
  );
}
