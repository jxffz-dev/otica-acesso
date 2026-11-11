import Image from "next/image";

/**
 * Foto do hero com parallax e chips flutuantes — 100% CSS (ver globals.css:
 * .hero-parallax e .float-chip). Sem JavaScript no cliente: nada de divergência
 * servidor/cliente na hidratação, só anima transform (não atrasa o LCP) e
 * respeita prefers-reduced-motion.
 */
export function HeroVisual() {
  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-3xl">
        <div className="hero-parallax">
          <Image
            src="/images/hero-lifestyle.jpg"
            alt="Mulher usando óculos de grau elegantes da Ótica Acesso"
            width={640}
            height={854}
            priority
            sizes="(min-width: 1024px) 40vw, 0px"
            className="h-auto w-full object-cover"
          />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/45 via-transparent to-transparent"
        />
      </div>

      {/* Selos de vidro (estilo aprovado pelo cliente), com mais força: vidro mais
          claro e desfocado, borda visível, rótulo branco e valor dourado vivo. */}
      <div className="float-chip absolute -left-4 top-8 rounded-xl border border-white/35 bg-white/20 px-4 py-3 shadow-lg shadow-black/25 backdrop-blur-lg">
        <p className="text-sm font-medium text-white">Exame de vista</p>
        <p className="font-heading text-xl font-bold text-gold-300 drop-shadow-sm">
          Gratuito
        </p>
      </div>
      <div
        className="float-chip absolute -right-3 bottom-10 rounded-xl border border-white/35 bg-white/20 px-4 py-3 shadow-lg shadow-black/25 backdrop-blur-lg"
        style={{ animationDelay: "1.4s" }}
      >
        <p className="text-sm font-medium text-white">Óculos pronto em</p>
        <p className="font-heading text-xl font-bold text-gold-300 drop-shadow-sm">
          até 24h
        </p>
      </div>
    </div>
  );
}
