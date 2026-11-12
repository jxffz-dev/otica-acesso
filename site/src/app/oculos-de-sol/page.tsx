import type { Metadata } from "next";
import { PageStub } from "@/components/site/page-stub";

export const metadata: Metadata = {
  title: "Óculos de sol com estilo e proteção",
  description:
    "Óculos de sol e clip-on com estilo e proteção para o dia a dia. Conheça os modelos disponíveis nas lojas da Ótica Acesso, no Ceará.",
};

export default function Page() {
  return <PageStub title="Óculos de sol" description="Estilo e proteção para o sol de todo dia — conheça os modelos disponíveis nas lojas." />;
}
