import Image from "next/image";
import { MoveHorizontal } from "lucide-react";
import { Diff, DiffItem1, DiffItem2, DiffResizer } from "@/components/ui/diff";
import { FadeIn } from "@/components/site/fade-in";

/**
 * "Antes e depois de comprar seu óculos" — comparação arrastável.
 *
 * É uma ILUSTRAÇÃO da diferença de nitidez (mesma foto, uma versão desfocada),
 * não um caso real de cliente nem promessa de resultado clínico. A legenda
 * identifica o local da foto (Praia de Morro Branco), a pedido do cliente.
 *
 * Imagem: /public/images/antes-depois-falesia.jpg (falésias e mar do Ceará,
 * enviada pelo cliente, 1140x641, 16:9). Ao trocar a foto, use um NOME NOVO:
 * o otimizador do Next guarda cache por nome.
 */
export function BeforeAfter() {
  return (
    <section className="bg-navy-950 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-300">
            Antes e depois
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold sm:text-4xl">
            Antes e depois de comprar o seu óculos.
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-navy-100">
            Arraste a divisória e veja a diferença que o grau certo faz: de um
            lado, o mundo sem correção; do outro, a nitidez que você merece no
            dia a dia.
          </p>
          <p
            aria-hidden
            className="mt-6 inline-flex items-center gap-2 text-sm text-gold-300"
          >
            <MoveHorizontal className="size-4" />
            Arraste para comparar
          </p>
        </FadeIn>

        <FadeIn>
          <Diff className="aspect-video w-full rounded-2xl border border-white/10 shadow-2xl shadow-black/30">
            <DiffItem1>
              <Image
                src="/images/antes-depois-falesia.jpg"
                alt="Cena desfocada, como enxerga quem precisa de óculos e ainda não usa"
                width={1140}
                height={641}
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="scale-[1.03] blur-[5px] contrast-[0.88] saturate-[0.85]"
              />
            </DiffItem1>
            <DiffItem2>
              <Image
                src="/images/antes-depois-falesia.jpg"
                alt="A mesma cena nítida, como se enxerga com o óculos certo"
                width={1140}
                height={641}
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </DiffItem2>
            <DiffResizer />
            <span className="pointer-events-none absolute left-3 top-3 z-3 rounded-full bg-navy-950/75 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
              Antes
            </span>
            <span className="pointer-events-none absolute right-3 top-3 z-3 rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy-950">
              Depois
            </span>
          </Diff>
          <p className="mt-3 text-xs text-navy-200">
            Praia de Morro Branco, Beberibe – CE
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
