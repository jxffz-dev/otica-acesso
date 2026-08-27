import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/site/fade-in";
import { GlassesArt } from "@/components/site/glasses-art";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Página não encontrada",
  description: `A página que você procura não foi encontrada na ${site.name}.`,
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-navy-50 py-16">
      <div className="mx-auto flex max-w-2xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <FadeIn className="flex flex-col items-center">
          <div className="mb-8 w-48 text-navy-950 md:w-64">
            <GlassesArt />
          </div>

          <h1 className="font-heading text-3xl font-bold tracking-tight text-navy-950 sm:text-5xl">
            Essa página não enxergamos por aqui...
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Acho que você precisa fazer um exame de vista (ou nós precisamos arrumar
            este link). A página que você tentou acessar não existe ou foi movida.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <Button asChild size="lg" className="h-12 bg-navy-950 hover:bg-navy-900">
              <Link href="/">
                Voltar à home
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 border-gold-500 text-gold-700 hover:bg-gold-50 hover:text-gold-800"
            >
              <Link href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                Falar no WhatsApp
              </Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
