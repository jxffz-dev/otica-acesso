import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/site/fade-in";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: `Como a ${site.name} coleta, usa e protege os seus dados pessoais, em conformidade com a LGPD: seus direitos, cookies e contato.`,
};

// Data da última revisão do texto (não a data de render) — formatada dinamicamente
const LAST_UPDATED = new Date("2026-07-18T00:00:00");
const formattedLastUpdated = LAST_UPDATED.toLocaleDateString("pt-BR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
});

export default function PrivacidadePage() {
  return (
    // div, não main: o layout raiz já envolve a página em <main> (só pode haver um).
    <div className="flex min-h-screen flex-col bg-white">
      {/* Hero */}
      <section className="bg-navy-950 py-16 text-white md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
              Política de Privacidade
            </h1>
            <p className="mt-4 text-lg text-navy-100">
              Última atualização: {formattedLastUpdated}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="prose prose-lg mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="space-y-8 text-muted-foreground">
            <div>
              <h2 className="font-heading text-2xl font-bold text-navy-950">
                1. Introdução
              </h2>
              <p className="mt-4">
                A <strong>{site.name}</strong> tem o compromisso de proteger a
                privacidade e os dados pessoais de seus clientes, usuários e
                parceiros. Esta Política de Privacidade foi elaborada em
                conformidade com a Lei Geral de Proteção de Dados Pessoais (LGPD
                - Lei nº 13.709/2018) e descreve como coletamos, usamos,
                armazenamos e compartilhamos suas informações.
              </p>
              <p className="mt-2">
                Nossas lojas físicas estão localizadas nas cidades de Varjota, Ipu e
                Reriutaba, no Ceará. Nosso site ({site.url.replace("https://", "")}) 
                serve como um catálogo digital e plataforma de agendamento, sendo que 
                nossas vendas e atendimentos são concluídos presencialmente ou via WhatsApp.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-navy-950">
                2. Dados que Coletamos
              </h2>
              <p className="mt-4">
                Coletamos apenas os dados essenciais para o fornecimento de
                nossos serviços e produtos:
              </p>
              <ul className="mt-4 list-disc pl-6 space-y-2">
                <li>
                  <strong>Dados de Contato:</strong> Nome e número de telefone/WhatsApp,
                  coletados quando você entra em contato conosco ou agenda um exame.
                </li>
                <li>
                  <strong>Preferências:</strong> Cidade ou loja de sua
                  preferência para atendimento ou agendamento de exame visual.
                </li>
                <li>
                  <strong>Dados de Navegação:</strong> Informações de cookies e
                  ferramentas de análise (como o Vercel Analytics) para melhorar a
                  experiência no nosso site, compreendendo como os usuários
                  interagem com a plataforma.
                </li>
                <li>
                  <strong>Mapas:</strong> Nas páginas com mapa de loja, o site
                  carrega o Google Maps, serviço de terceiro que pode registrar
                  dados de navegação (como endereço IP e cookies) conforme a
                  política de privacidade do Google.
                </li>
              </ul>
              <p className="mt-4">
                <strong>Importante:</strong> Não realizamos processamento de
                pagamentos diretamente no site.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-navy-950">
                3. Finalidade e Base Legal
              </h2>
              <p className="mt-4">
                Utilizamos seus dados para as seguintes finalidades:
              </p>
              <ul className="mt-4 list-disc pl-6 space-y-2">
                <li>
                  <strong>Atendimento ao Cliente:</strong> Responder a dúvidas,
                  agendar exames e concluir vendas via WhatsApp (Base Legal:
                  Execução de contrato ou procedimentos preliminares).
                </li>
                <li>
                  <strong>Marketing e Comunicação:</strong> Enviar promoções,
                  lembretes de consultas e novidades sobre nossos produtos e
                  serviços, caso você tenha consentido (Base Legal:
                  Consentimento ou Legítimo Interesse).
                </li>
                <li>
                  <strong>Melhoria do Site:</strong> Analisar métricas de acesso
                  para otimizar a navegação (Base Legal: Legítimo Interesse).
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-navy-950">
                4. Compartilhamento de Dados
              </h2>
              <p className="mt-4">
                A {site.name} não vende ou aluga seus dados pessoais a
                terceiros. Podemos compartilhar suas informações apenas em
                situações específicas, como:
              </p>
              <ul className="mt-4 list-disc pl-6 space-y-2">
                <li>
                  Provedores de serviços de tecnologia (como hospedagem e
                  análises de acesso).
                </li>
                <li>
                  Cumprimento de ordens judiciais ou obrigações legais e
                  regulatórias.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-navy-950">
                5. Uso de Cookies
              </h2>
              <p className="mt-4">
                Nosso site utiliza cookies técnicos essenciais para o
                funcionamento da plataforma e cookies analíticos para entender o
                tráfego de visitantes. Você pode configurar seu navegador para
                bloquear esses cookies, mas algumas partes do site podem não
                funcionar corretamente.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-navy-950">
                6. Seus Direitos (Titular dos Dados)
              </h2>
              <p className="mt-4">
                Conforme a LGPD, você tem os seguintes direitos em relação aos
                seus dados:
              </p>
              <ul className="mt-4 list-disc pl-6 space-y-2">
                <li>Confirmação da existência de tratamento.</li>
                <li>Acesso aos dados.</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados.</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários.</li>
                <li>Revogação do consentimento, a qualquer momento.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-navy-950">
                7. Contato do Controlador de Dados
              </h2>
              <p className="mt-4">
                Se você tiver dúvidas sobre esta Política de Privacidade ou
                quiser exercer seus direitos de titular dos dados, entre em
                contato conosco:
              </p>
              <ul className="mt-4 list-disc pl-6 space-y-2">
                <li>
                  <strong>WhatsApp:</strong> (88) 99664-7553
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-heading text-2xl font-bold text-navy-950">
                8. Alterações nesta Política
              </h2>
              <p className="mt-4">
                Reservamo-nos o direito de modificar esta Política de
                Privacidade a qualquer momento, para refletir alterações em
                nossos processos ou adequações legais. A data da última
                atualização estará sempre no início desta página.
              </p>
            </div>

            <div className="not-prose border-t border-border pt-8">
              <Button asChild variant="outline" size="lg">
                <Link href="/">
                  <ArrowLeft className="size-4" />
                  Voltar à página inicial
                </Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
