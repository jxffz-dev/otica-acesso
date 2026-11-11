/**
 * Marcas exibidas no carrossel da home.
 *
 * Regra de ouro: SÓ marcas que a Ótica Acesso realmente vende. Exibir marca que
 * a loja não trabalha sugere vínculo inexistente (publicidade enganosa / uso
 * indevido de marca registrada).
 *
 * Lista confirmada pelo cliente em 2026-11-10 (enviou os logos de cada marca).
 * Para adicionar/remover uma marca: coloque o arquivo em /public/brands/ e
 * ajuste esta lista. `width`/`height` são as proporções reais do arquivo;
 * `displayHeight` (px) equilibra o peso visual entre logos de formatos diferentes.
 */
export type Brand = {
  name: string;
  /** Caminho em /public (ex.: "/brands/ray-ban.svg"). */
  logo: string;
  /** Dimensões intrínsecas do arquivo (só a proporção importa). */
  width: number;
  height: number;
  /** Altura de exibição em px (desktop). */
  displayHeight: number;
};

/**
 * Trava de segurança: com `false`, a seção aparece só no `npm run dev` e NÃO vai
 * ao ar em build de produção/Vercel. Lista confirmada → `true`.
 */
export const brandsConfirmed = true;

export const brands: Brand[] = [
  { name: "Ray-Ban", logo: "/brands/ray-ban.svg", width: 772, height: 416, displayHeight: 40 },
  { name: "Oakley", logo: "/brands/oakley.svg", width: 513, height: 192, displayHeight: 34 },
  { name: "Vogue Eyewear", logo: "/brands/vogue.svg", width: 1544, height: 410, displayHeight: 30 },
  { name: "Carrera", logo: "/brands/carrera.svg", width: 624, height: 123, displayHeight: 22 },
  { name: "Polaroid", logo: "/brands/polaroid.svg", width: 225, height: 59, displayHeight: 24 },
  { name: "Tommy Hilfiger", logo: "/brands/tommy-hilfiger.svg", width: 300, height: 200, displayHeight: 38 },
  { name: "Oben", logo: "/brands/oben.png", width: 130, height: 37, displayHeight: 26 },
  { name: "Arnette", logo: "/brands/arnette.png", width: 816, height: 102, displayHeight: 22 },
  { name: "Ferrovia Eyewear", logo: "/brands/ferrovia.png", width: 561, height: 123, displayHeight: 40 },
  { name: "Gucci", logo: "/brands/gucci.png", width: 281, height: 288, displayHeight: 52 },
];
