import Image from "next/image";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { brands, brandsConfirmed } from "@/lib/brands";

/**
 * Carrossel infinito de marcas. Ver `src/lib/brands.ts` para a regra de ouro:
 * só entram marcas que a loja realmente vende.
 */
export function BrandsStrip() {
  // Lista não confirmada nunca vai para produção (ver `brandsConfirmed`).
  if (!brandsConfirmed && process.env.NODE_ENV === "production") return null;
  if (brands.length === 0) return null;

  return (
    <section
      aria-label="Marcas de óculos"
      className="border-y border-border bg-white py-12"
    >
      <p className="px-4 text-center text-sm font-semibold uppercase tracking-[0.2em] text-gold-700">
        Marcas que você conhece
      </p>
      <div className="relative mt-8">
        <InfiniteSlider
          gap={72}
          duration={45}
          durationOnHover={140}
          className="py-2"
        >
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex shrink-0 items-center"
              style={{ height: 56 }}
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={brand.width}
                height={brand.height}
                style={{
                  height: brand.displayHeight,
                  width: "auto",
                }}
                className="max-w-none transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </InfiniteSlider>
        {/* Esmaece as bordas para o logo "entrar" e "sair" suavemente */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent sm:w-32"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent sm:w-32"
        />
      </div>
    </section>
  );
}
