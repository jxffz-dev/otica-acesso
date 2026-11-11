import type { Metadata } from "next";
import { Inter, Lora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { WhatsAppFab } from "@/components/site/whatsapp-fab";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

// Títulos: Plus Jakarta Sans (sans moderna, elegante e simples). Rejeitadas pelo
// cliente: Fraunces (serifa), Outfit (sans geométrica) e Dancing Script (script).
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "latin-ext"],
});

// Título da capa ("Enxergar bem muda tudo."): Lora em negrito, escolhida pelo
// cliente a partir de uma imagem de referência (a proporção do texto bate com a
// Lora Bold: 6,38 contra 6,40 da imagem).
const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Ótica Acesso — Óculos de grau, sol e lentes em Varjota, Ipu e Reriutaba",
    template: "%s | Ótica Acesso",
  },
  description: site.description,
  openGraph: {
    siteName: site.name,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ótica Acesso — Óculos de grau, sol e lentes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${jakarta.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: site.name,
              url: site.url,
              slogan: site.tagline,
              foundingDate: String(site.foundedYear),
              sameAs: [site.instagram, site.facebook],
            }),
          }}
        />
        <div aria-hidden className="scroll-progress" />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <WhatsAppFab />
        <Analytics />
      </body>
    </html>
  );
}
