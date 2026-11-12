export const site = {
  name: "Ótica Acesso",
  tagline: "Sua visão é a nossa prioridade.",
  description:
    "Óculos de grau, óculos de sol e lentes com atendimento de verdade. Lojas em Varjota, Ipu e Reriutaba (CE), exame de vista gratuito e envio para todo o Brasil.",
  url: "https://oticaacesso.com",
  instagram: "https://www.instagram.com/oticaacesso/",
  facebook: "https://www.facebook.com/oticaAcesso/",
  whatsappNumber: "5588996647553",
  whatsappDisplay: "(88) 99664-7553",
  // Confirmado pelo cliente em 2026-11-11: fundada em 2020 (P-009). O 2014 antigo
  // vinha de um diretório (Solutudo) e estava errado.
  foundedYear: 2020,
};

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export type Store = {
  slug: string;
  city: string;
  state: "CE";
  label: string;
  address: string;
  /** Endereço confirmado ou placeholder aguardando o cliente (P-008) */
  addressConfirmed: boolean;
  mapsUrl: string;
  /** CEP, só quando conhecido (vai para os dados estruturados do Google). */
  postalCode?: string;
  /**
   * Endereço do mapa incorporado (iframe). Só preencher com endereço CONFIRMADO,
   * senão o pino cai no lugar errado. Para o pino da empresa de verdade (com
   * nome, fotos e avaliações), cole aqui o `src` do iframe gerado em
   * Google Maps → Compartilhar → Incorporar um mapa.
   */
  mapEmbedUrl?: string;
  /** Rota até a loja (abre o app/site do Google Maps). */
  directionsUrl?: string;
  /**
   * true = o mapa mostra só a CIDADE (a loja não tem ficha no Google Maps nem
   * endereço confirmado). A interface avisa e não oferece "Como chegar".
   */
  mapApproximate?: boolean;
};

function mapsSearch(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

function mapsEmbed(query: string) {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed&hl=pt-BR`;
}

function mapsDirections(query: string) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;
}

export const stores: Store[] = [
  {
    slug: "varjota",
    city: "Varjota",
    state: "CE",
    label: "Loja 01",
    address: "R. Modesto Mendonça, 616 — Varjota — CE, 62265-000",
    addressConfirmed: true,
    postalCode: "62265-000",
    mapsUrl: mapsSearch("Ótica Acesso, R. Modesto Mendonça 616, Varjota CE"),
    // Com o nome da loja, o Google casa com a ficha da empresa (nome, fotos,
    // avaliações). O cartão do mapa mostra o endereço CADASTRADO na ficha (hoje
    // 620, ver P-013): só muda quando a ficha for corrigida no Google.
    mapEmbedUrl: mapsEmbed("Ótica Acesso, R. Modesto Mendonça 616, Varjota CE"),
    directionsUrl: mapsDirections("Ótica Acesso, R. Modesto Mendonça 616, Varjota CE"),
  },
  {
    slug: "ipu",
    city: "Ipu",
    state: "CE",
    label: "Loja 02",
    // TODO(P-008): endereço completo da loja de Ipu
    address: "Centro, Ipu — CE",
    addressConfirmed: false,
    // CEP que consta na ficha da loja no Google Maps (conferido em 2026-11-10).
    postalCode: "62250-000",
    mapsUrl: mapsSearch("Ótica Acesso Ipu CE"),
    // Verificado no Google Maps (2026-11-10): existe a ficha "OTICA ACESSO" em Ipu.
    mapEmbedUrl: mapsEmbed("Ótica Acesso Ipu CE"),
    directionsUrl: mapsDirections("Ótica Acesso Ipu CE"),
  },
  {
    slug: "reriutaba",
    city: "Reriutaba",
    state: "CE",
    label: "Loja 03",
    // TODO(P-008): endereço completo da loja de Reriutaba
    address: "Centro, Reriutaba — CE",
    addressConfirmed: false,
    // CEP geral do município, como o Google Maps mostra para "Reriutaba, CE"
    // (conferido em 2026-11-10). A loja não tem ficha nem rua confirmada (P-008).
    postalCode: "62260-000",
    mapsUrl: mapsSearch("Ótica Acesso Reriutaba CE"),
    // Verificado (2026-11-10): NÃO há ficha da Ótica Acesso em Reriutaba; buscar
    // pelo nome mostraria outras óticas. Mapa só da cidade até o endereço (P-008).
    mapEmbedUrl: mapsEmbed("Reriutaba, CE"),
    mapApproximate: true,
  },
];

export const nav = [
  { href: "/oculos-de-grau", label: "Óculos de grau" },
  { href: "/oculos-de-sol", label: "Óculos de sol" },
  { href: "/lentes", label: "Lentes" },
  { href: "/exame-de-vista", label: "Exame de vista" },
  { href: "/lojas", label: "Lojas" },
  { href: "/sobre", label: "Sobre" },
];
