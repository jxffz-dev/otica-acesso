# PROJECT.md — Ótica Acesso | Plataforma Digital

> Documento vivo de decisões arquiteturais, de design e de negócio.
> Nenhuma decisão importante é tomada sem registro aqui.

**Última atualização:** 2026-08-27
**Status:** Fases 0–2 concluídas ✅ · **Site publicado: https://otica-acesso.vercel.app** (Vercel, plano grátis) · **Fase atual: 2.5 — Polimento Profissional**, backlog priorizado em [docs/FASE-2.5-POLIMENTO.md](docs/FASE-2.5-POLIMENTO.md) · Depois: Fase 3 (Catálogo). Prioridade máxima da 2.5: Política de Privacidade (LGPD) ✅ já no ar. Bloqueios do cliente: domínio, endereços Ipu/Reriutaba (Varjota resolvido — D-027), horário de funcionamento (P-005), depoimentos reais, fotos

---

## 1. Visão do Projeto

Transformar a Ótica Acesso (3 lojas físicas no Ceará: Varjota, Ipu e Reriutaba + vendas para todo o Brasil) em uma marca digital com percepção de grande rede nacional, sem perder a autenticidade do atendimento humano e local.

**O site deve gerar:** vendas online, visitas às lojas, agendamentos de exame, contatos via WhatsApp, leads, autoridade de marca e fidelização.

**A marca transmite:** confiança, autoridade, tecnologia, elegância, atendimento humano, saúde visual, sofisticação.
**A marca nunca parece:** amadora, genérica, barata, poluída, antiquada.

## 2. Stack Tecnológica (definida no briefing)

- Next.js (App Router) + React + TypeScript
- TailwindCSS + shadcn/ui
- Framer Motion (animações e microinterações)
- Deploy: Vercel
- Princípios: performance (Core Web Vitals), acessibilidade (WCAG 2.1 AA), SEO técnico desde o dia 1

## 3. Decisões Registradas

| # | Data | Decisão | Motivo |
|---|------|---------|--------|
| D-001 | 2026-07-18 | Criar PROJECT.md como fonte única de decisões | Exigência do briefing; rastreabilidade de projeto |
| D-002 | 2026-07-18 | Análise do Instagram adiada | Instagram exige login para visualizar o perfil; aguardando screenshots do cliente ou acesso via navegador logado |
| D-003 | 2026-07-18 | Estratégia "premium local + alcance nacional" em vez de "fingir ser grande rede" | Autenticidade converte mais que simulação de porte; as 3 lojas físicas + exames + atendimento humano são o diferencial real que Ray-Ban/Warby Parker não têm no interior do CE |
| D-004 | 2026-07-18 | **Modelo v1: catálogo premium + fechamento consultivo via WhatsApp** (aprovado pelo cliente) | Sem ERP e sem logística estruturada, checkout completo geraria estoque fantasma e trocas de grau; WhatsApp é onde o público já compra. Checkout online reavaliado na Fase 5 |
| D-005 | 2026-07-18 | Sem integração com ERP na v1 (cliente confirmou que não usa) | Catálogo será gerenciado via conteúdo estruturado no próprio repositório (JSON/MDX) ou CMS leve — decidir na Fase 1 |
| D-006 | 2026-07-18 | Paleta do design system derivada da logo (navy profundo + dourado + branco), em tratamento flat minimalista; logo atual precisa de versão flat SVG + variante compacta | Logo glossy/3D atual conflita com posicionamento premium-minimalista; cores são fortes e serão mantidas. Ver análise completa em docs/FASE-0-ESTRATEGIA.md §1 |
| D-007 | 2026-07-18 | Fotos: estratégia híbrida — press kits de fornecedores + mini-estúdio próprio + 1 diária com fotógrafo regional | Cliente não possui fotos profissionais; plano detalhado em docs/FASE-0-ESTRATEGIA.md §9 |
| D-008 | 2026-07-18 | **Domínio oficial: oticaacesso.com** (escolha do cliente; registro a cargo do cliente) | .com.br exato ocupado por terceiro; .com é limpo e global. Recomendação de INPI mantida |
| D-009 | 2026-07-18 | Relógios ficam FORA da navegação principal do site na v1 (novidade restrita à loja física) | Foco do posicionamento é saúde visual + óculos; relógios podem entrar depois como categoria secundária sem diluir a marca |
| D-010 | 2026-07-18 | Stack instalada: Node 24 LTS, Next.js 16.2.10 (App Router + Turbopack), Tailwind v4, shadcn/ui (preset nova), Framer Motion 12 | Conforme briefing; projeto em `site/`. Nota: lucide-react não distribui mais ícones de marcas — ícone do Instagram é SVG próprio no footer |
| D-011 | 2026-07-18 | Tipografia: Fraunces (títulos, via `--font-heading`) + Inter (texto/UI), self-hosted via next/font | Serifa de alto contraste ecoa a serifa da logo e dá o tom premium; Inter garante legibilidade de UI; zero custo de licença |
| D-012 | 2026-07-18 | Config central da marca em `src/lib/site.ts` (WhatsApp, lojas, navegação); páginas internas como stubs funcionais com CTA de WhatsApp | Nenhum link quebrado no lançamento; conteúdo real substitui os stubs nas Fases 2–3 |
| D-013 | 2026-07-18 | Código dentro do OneDrive (Desktop\Claude) por enquanto | Risco de lentidão de sync com node_modules; mover para C:\dev se incomodar |
| D-014 | 2026-07-18 | Exame de vista: **gratuito, com agendamento** (confirmado pelo cliente). Agendador no site: loja + turno → WhatsApp com mensagem estruturada | Sem backend na v1; o WhatsApp único (88) 99664-7553 atende as 3 lojas (confirmado). Lead chega pré-qualificado |
| D-015 | 2026-07-18 | Endereço de Varjota obtido via pesquisa web (R. Clóvis Ximenes, 616, Centro — fonte: Solutudo); fundação em 2014 (mesma fonte, a confirmar) | Cliente não tinha os dados; Ipu e Reriutaba seguem como "Centro" (P-008). Links "Como chegar" usam busca do Google Maps por nome, que funciona sem endereço exato |
| D-016 | 2026-07-18 | SEO técnico: sitemap.xml e robots.ts nativos, JSON-LD Organization (global) e Optician (por loja), metadata por página | Fundação de SEO local antes do catálogo; páginas /lojas/[cidade] são SSG |
| D-017 | 2026-07-18 | Skill **UI/UX Pro Max** instalada globalmente em ~/.claude/skills (repo nextlevelbuilder, código auditado antes: Python stdlib, sem rede) | Pedido do cliente; scripts de busca exigem Python (não instalado — pendente autorização); base CSV consultável diretamente |
| D-018 | 2026-07-18 | Redesign da home guiado pela skill: padrão Hero-Centric + Prova Social, arte vetorial de óculos em dourado como placeholder premium, chips glassmorphism no hero, seção de depoimentos, barra de anúncio (exame gratuito), hovers com lift 300ms | Anti-padrões corrigidos: página plana sem profundidade, ausência de imagem e de prova social. Depoimentos atuais são ILUSTRATIVOS (P-010: coletar reais com autorização) |
| D-019 | 2026-07-18 | Versão digital flat da logo criada em SVG (glifo browline + wordmark serifado) | Superada pela D-020 no header/footer; o glifo SVG permanece no favicon (src/app/icon.svg) |
| D-020 | 2026-07-18 | **Logo oficial horizontal (PNG transparente 2172x724, public/images/logo.png) aplicada no header** por decisão do cliente | Favicon segue com o glifo dourado simplificado (logo completa é ilegível em 16px) |
| D-021 | 2026-07-18 | Footer usa versão da logo com texto branco (public/images/logo-footer-clean.png). O PNG enviado tinha transparência FALSA (xadrez escuro desenhado como pixels pela IA); fundo removido via script Node+sharp (scratchpad/clean-logo.js: canal máximo < 60 → alpha 0, rampa de 40) | Texto navy sumiria no footer navy; a versão branca assenta direto no fundo, sem cartão. Lição: PNGs de IA "transparentes" precisam de verificação — xadrez desenhado ≠ canal alpha |
| D-022 | 2026-07-18 | Logo do header também tinha xadrez claro falso (aparecia como caixa cinza) — limpa com o mesmo método invertido (canal mínimo > 220 → alpha 0); header usa public/images/logo-clean.png | Mesma causa da D-021. Os arquivos originais logo.png e logo-footer.png ficam no repositório como fonte |
| D-023 | 2026-07-18 | **Site publicado na Vercel (plano Hobby/grátis)**: projeto jeff-works/otica-acesso, produção em https://otica-acesso.vercel.app. Deploy via CLI (login device flow, conta jxffz-dev) | Site 100% estático — plano grátis atende com folga. Próximo: registrar oticaacesso.com e apontar para o projeto (Settings → Domains). Deploys futuros: `npx vercel deploy --prod --yes` na pasta site/ |
| D-026 | 2026-07-18 | **Código no GitHub** ✅: repo privado github.com/jxffz-dev/otica-acesso, branch main sincronizada (commit 393adee confirmado igual no local e no remoto). Repo criado pelo cliente; push concluído | Conector GitHub do ambiente é somente-leitura (não cria repos). O push passou com credencial já salva na máquina (Git Credential Manager). Próximo: ligar o repo à Vercel para deploy automático — §8.2 |
| D-025 | 2026-07-18 | **Conteúdo fictício despublicado** (aprovado pelo cliente): removidos os depoimentos inventados (nomes/avaliações) e a vitrine "Favoritos da semana" com preços/modelos fictícios. Substituídos por uma seção de prova social honesta que aponta para o Instagram real | Risco de publicidade enganosa (CDC/CONAR) num negócio real; colidia com a estratégia de autenticidade. Depoimentos reais (P-010) e catálogo com preços verdadeiros (Fase 3) retornam quando o material existir. Imagens de IA no hero/categorias permanecem como placeholder — sinalizado ao cliente para decisão |
| D-024 | 2026-07-18 | **Fase 2.5 em execução**: página /privacidade (LGPD, data dinâmica, botão voltar), /not-found (404 da marca), WhatsApp FAB (z-50, focus-visible), OG/Twitter metadata, @vercel/analytics (/next) no layout, foco por teclado em todos os interativos, hero+categorias+"Favoritos da semana" com imagens e stagger | Reusadas as convenções já existentes (/privacidade, whatsapp-fab) em vez das rotas genéricas do prompt (politica-de-privacidade, WhatsAppButton) para não duplicar. FAB mantém o glifo oficial do WhatsApp (mais reconhecível que MessageCircle genérico). Imagens são placeholders/IA até fotos reais. Pendências: B2 (otimizar PNGs da logo), depoimentos reais (P-010), Search Console (depende do domínio) |
| D-008 | 2026-07-18 | **Domínio escolhido: oticaacesso.com** (cliente confirmou) | Global, limpo, disponível imediatamente; evita depender do .com.br já registrado por terceiro. Registro de marca no INPI segue recomendado em paralelo |
| D-009 | 2026-07-18 | Relógios entram no site como categoria pequena/nova (não flagship) | Cliente confirmou que relógios (Atlantis) são novidade recente na própria loja física, não um catálogo consolidado — tratar como categoria emergente (ex.: dentro de "Acessórios", com selo "Novidade"), sem investir estrutura de e-commerce robusta nela na v1 |
| D-027 | 2026-08-27 | **Endereço de Varjota corrigido pelo cliente: R. Modesto Mendonça, 620 — Varjota — CE, 62265-000** | Substitui o endereço de D-015 (R. Clóvis Ximenes, 616), que era só uma estimativa via pesquisa web (fonte Solutudo) e estava errado. Atualizado em `lib/site.ts` (endereço, link do Maps e o JSON-LD `Optician` da página da loja) |

## 4. Decisões Pendentes (bloqueiam fases)

| # | Pergunta | Impacto | Status |
|---|----------|---------|--------|
| P-001 | Escopo do e-commerce v1 | Arquitetura de pagamento/frete/estoque | ✅ Resolvida → D-004 |
| P-002 | ERP a integrar? | Origem dos dados de produto | ✅ Resolvida → D-005 (sem ERP) |
| P-003 | Fotos profissionais / logo em vetor | Assets premium | ✅ Plano definido → D-007. Logo recebida em PNG; falta versão vetorial/flat |
| P-004 | Domínio | SEO, e-mail, GMN | ✅ Resolvida → D-008 (oticaacesso.com) |
| P-005 | Quem responde WhatsApp/agendamentos e em que horário? | CRO — CTA de conversa só funciona com resposta rápida | ⏳ Aberta |
| P-006 | Análise do Instagram @oticaacesso | Tom de voz e identidade visual da Fase 0 | ✅ Resolvida — análise completa em docs/FASE-0-ESTRATEGIA.md §11 |
| P-007 | Relógios (Atlantis) aparecem no feed do IG — entram no catálogo do site? | Arquitetura de categorias | ✅ Resolvida → D-009 (categoria pequena/nova, não flagship) |

## 5. Arquitetura do Site (proposta inicial — a refinar na Fase 1)

```
/                       Homepage
/oculos-de-grau         Categoria
/oculos-de-sol          Categoria
/lentes                 Lentes de contato + lentes oftálmicas
/produto/[slug]         Página de produto
/exame-de-vista         Agendamento de exame (conversão local)
/lojas                  Hub de lojas
/lojas/varjota          Landing local (SEO local)
/lojas/ipu              Landing local
/lojas/reriutaba        Landing local
/sobre                  Marca, história, time
/blog                   Conteúdo (saúde visual, estilo)
/blog/[slug]            Artigo
/contato                Contato + WhatsApp
```

## 6. Roadmap por Fases (resumo — detalhado no plano aprovado)

- **Fase 0 — Discovery & Branding** (atual): análise IG, benchmark, personas, tom de voz, respostas P-001..P-005
- **Fase 1 — Fundação**: setup Next.js, design system, componentes base
- **Fase 2 — Presença & SEO Local**: home, lojas, exame, sobre, blog — o site "institucional premium" no ar ✅
- **Fase 2.5 — Polimento Profissional** *(atual)*: LGPD, OG image, 404, botão WhatsApp, analytics, acessibilidade, otimização de imagens, fotos no hero — backlog completo em docs/FASE-2.5-POLIMENTO.md
- **Fase 3 — Catálogo/E-commerce**: produtos, jornada de compra (formato conforme P-001)
- **Fase 4 — Marketing & Conteúdo**: estratégia IG, Google Meu Negócio, calendário editorial
- **Fase 5 — CRO & Escala**: testes, analytics, otimização contínua

## 7. Riscos Ativos

- R-001: Vender óculos de grau online exige receita + medidas (DP/altura) — checkout ingênuo gera troca/devolução e frustração
- R-002: Design premium com fotos amadoras destrói o posicionamento — dependência de produção de assets
- R-003: CTA de WhatsApp sem SLA de resposta queima conversão
- R-004: SEO nacional em "óculos de sol" é dominado por gigantes — estratégia deve priorizar cauda longa + SEO local primeiro

## 8. Operação: GitHub + Deploy Automático (Vercel)

**Estado atual:** repositório git local pronto (branch `main`, remote `origin` → `github.com/jxffz-dev/otica-acesso`). Falta o push inicial (manual — ver motivo na D-026).

### 8.1 — Enviar o código para o GitHub (uma vez)

1. Criar o repositório vazio em https://github.com/new
   - Nome: `otica-acesso` · Visibilidade: **Private**
   - **Não** inicializar com README/.gitignore/license (evita conflito no push)
2. No terminal (PowerShell), na pasta do projeto:
   ```
   cd "C:\Users\Administrador\OneDrive\Desktop\Claude\otica-acesso"; git push -u origin main
   ```
   - Na 1ª vez, autorizar o login da conta **jxffz-dev** na janela do Git Credential Manager. Depois fica salvo.

### 8.2 — Deploy automático a cada commit (ligar GitHub ↔ Vercel)

Hoje o deploy é manual (`npx vercel deploy --prod --yes` dentro de `site/`). Para automatizar:

1. Vercel → projeto **otica-acesso** → **Settings → Git**
2. **Connect Git Repository** → escolher `jxffz-dev/otica-acesso`
3. Definir o **Root Directory** como `site` (o app Next.js está em `site/`, não na raiz)
4. Pronto: cada `git push` na branch `main` publica em produção automaticamente; branches/PRs geram previews.

### 8.3 — Fluxo de trabalho depois de ligado

```
# fazer alterações → salvar histórico → publicar (automático)
git add -A
git commit -m "descrição da mudança"
git push
```

### 8.4 — Pendências de operação relacionadas

- Registrar `oticaacesso.com` e apontar na Vercel (Settings → Domains) — tira o site do endereço `.vercel.app`.
- Conector GitHub do ambiente é somente-leitura: criação de repo e push seguem manuais até que haja `gh` CLI autenticado ou um token com escopo de escrita.
