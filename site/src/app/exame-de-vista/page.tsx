import type { Metadata } from "next";
import { CalendarCheck, Eye, Glasses } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ExamScheduler } from "@/components/exam/exam-scheduler";
import { FadeIn } from "@/components/site/fade-in";

export const metadata: Metadata = {
  // Título curto (o sufixo " | Ótica Acesso" entra pelo layout): ideal até ~60 caracteres.
  title: "Exame de vista gratuito no Ceará",
  description:
    "Agende seu exame de vista gratuito na Ótica Acesso. Atendimento em Varjota, Ipu e Reriutaba (CE). Agendamento rápido pelo WhatsApp.",
};

const steps = [
  {
    icon: CalendarCheck,
    title: "Agende",
    text: "Escolha a loja e o turno aqui no site — a confirmação chega pelo WhatsApp.",
  },
  {
    icon: Eye,
    title: "Faça o exame",
    text: "Exame completo e gratuito, feito com equipamento adequado e sem pressa.",
  },
  {
    icon: Glasses,
    title: "Enxergue melhor",
    text: "Saindo do exame, você já escolhe a armação — e seu óculos fica pronto em até 24h.",
  },
];

const faq = [
  {
    q: "O exame de vista é mesmo gratuito?",
    a: "Sim. O exame é totalmente gratuito — você só precisa agendar. É o nosso jeito de cuidar da saúde visual da nossa região.",
  },
  {
    q: "Preciso agendar ou posso chegar na loja?",
    a: "O exame funciona com agendamento, para garantir que você seja atendido sem espera. Agende aqui pelo site ou direto no WhatsApp.",
  },
  {
    q: "Quanto tempo dura o exame?",
    a: "Em geral, entre 15 e 30 minutos. Nossa equipe faz o exame com calma e explica tudo o que você precisa saber sobre a sua visão.",
  },
  {
    q: "Sou obrigado a comprar óculos depois do exame?",
    a: "Não. O exame é um serviço de saúde visual. Se você precisar de correção, teremos prazer em ajudar a escolher a armação e a lente ideais — mas a decisão é sempre sua.",
  },
  {
    q: "Já tenho receita de outro lugar. Posso usar?",
    a: "Claro! Traga sua receita (ou mande uma foto pelo WhatsApp) e montamos seu óculos a partir dela.",
  },
];

export default function ExamePage() {
  return (
    <>
      <section className="bg-navy-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold-300">
              Exame de vista
            </p>
            <h1 className="max-w-3xl font-heading text-4xl font-semibold leading-tight sm:text-5xl">
              Cuidar da visão é gratuito. Agende o seu exame.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-100">
              Exame de vista completo, sem custo, nas nossas lojas em Varjota,
              Ipu e Reriutaba. Você agenda em menos de um minuto.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
          <FadeIn>
            <h2 className="font-heading text-2xl font-semibold text-navy-950 sm:text-3xl">
              Como funciona
            </h2>
            <div className="mt-8 space-y-8">
              {steps.map((step, i) => (
                <div key={step.title} className="flex gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent">
                    <step.icon className="size-5 text-gold-700" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-navy-950">
                      {i + 1}. {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {step.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <ExamScheduler />
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <FadeIn>
            <h2 className="font-heading text-2xl font-semibold text-navy-950 sm:text-3xl">
              Perguntas frequentes
            </h2>
            <Accordion type="single" collapsible className="mt-6">
              {faq.map((item) => (
                <AccordionItem key={item.q} value={item.q}>
                  <AccordionTrigger className="text-left font-medium text-navy-950">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="leading-relaxed text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
