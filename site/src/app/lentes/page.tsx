import type { Metadata } from "next";
import { PageStub } from "@/components/site/page-stub";

export const metadata: Metadata = {
  title: "Lentes digitais, 1.67 e lentes de contato",
  description:
    "Lentes digitais Freeform, grau alto, índice 1.67, antirreflexo e lentes de contato na Ótica Acesso. Orçamento personalizado pelo WhatsApp.",
};

export default function Page() {
  return <PageStub title="Lentes" description="Lentes digitais, grau alto, índice 1.67, clip-on e lentes de contato — orçamento personalizado para o seu grau." />;
}
