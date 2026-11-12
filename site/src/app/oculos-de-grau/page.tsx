import type { Metadata } from "next";
import { PageStub } from "@/components/site/page-stub";

export const metadata: Metadata = {
  title: "Óculos de grau para todos os estilos",
  description:
    "Armações de grau para todos os estilos e lentes para todos os graus, escolhidas com você na Ótica Acesso, em Varjota, Ipu e Reriutaba (CE).",
};

export default function Page() {
  return <PageStub title="Óculos de grau" description="Armações para todos os estilos e lentes para todos os graus — escolhidas com você, não em uma vitrine online." />;
}
