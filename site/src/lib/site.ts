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
  // TODO(P-009): confirmar ano de fundação com o cliente (fonte: Solutudo indica 2014)
  foundedYear: 2014,
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
};

function mapsSearch(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export const stores: Store[] = [
  {
    slug: "varjota",
    city: "Varjota",
    state: "CE",
    label: "Loja 01",
    address: "R. Clóvis Ximenes, 616 — Centro, Varjota — CE, 62265-000",
    addressConfirmed: true,
    mapsUrl: mapsSearch("Ótica Acesso, R. Clóvis Ximenes 616, Varjota CE"),
  },
  {
    slug: "ipu",
    city: "Ipu",
    state: "CE",
    label: "Loja 02",
    // TODO(P-008): endereço completo da loja de Ipu
    address: "Centro, Ipu — CE",
    addressConfirmed: false,
    mapsUrl: mapsSearch("Ótica Acesso Ipu CE"),
  },
  {
    slug: "reriutaba",
    city: "Reriutaba",
    state: "CE",
    label: "Loja 03",
    // TODO(P-008): endereço completo da loja de Reriutaba
    address: "Centro, Reriutaba — CE",
    addressConfirmed: false,
    mapsUrl: mapsSearch("Ótica Acesso Reriutaba CE"),
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
