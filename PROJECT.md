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
| D-027 | 2026-08-27 | **Endereço de Varjota corrigido pelo cliente: R. Modesto Mendonça, 616 — Varjota — CE, 62265-000** (o número era 620; corrigido para **616** pelo cliente em 2026-11-10) | Substitui o endereço de D-015 (R. Clóvis Ximenes, 616), que era só uma estimativa via pesquisa web (fonte Solutudo) e estava errado. Atualizado em `lib/site.ts` (endereço, link do Maps e o JSON-LD `Optician` da página da loja) |
| D-028 | 2026-10-20 | **Benchmark de concorrentes aplicado à home** (detalhes em docs/BENCHMARK-CONCORRENTES.md): seletor de 7 formatos com silhuetas SVG originais (padrão Mercadão), seção "do exame à entrega" em 3 passos (diferencial: nenhum dos 5 concorrentes destaca exame na home), atalhos "Encontre uma loja / Fale conosco" na barra do topo (Diniz, Carol), parallax e chips flutuantes no hero em CSS puro | Fotos e vídeos dos concorrentes NÃO foram usados (direitos autorais + estratégia de autenticidade). Blocos de parcelamento, garantia, Pix e frete grátis NÃO entram sem dados reais (P-011): afirmar condição comercial inexistente é publicidade enganosa. São José estava fora do ar; Carol e Mercadão só abriram no Chrome (leitor automático bloqueado, verificação anti-bot não contornada) |
| D-029 | 2026-10-20 | **Correção de erro de hidratação no `FadeIn`**: estado inicial agora constante (`opacity:0, y:16`); `useReducedMotion` só altera a transição (duração 0). Hero sem JS no cliente: `HeroVisual` virou componente de servidor e o parallax usa `animation-timeline: view()` dentro de `prefers-reduced-motion: no-preference` | O estado inicial dependia de `useReducedMotion()`, que só é conhecido no cliente: quem usa "reduzir movimento" recebia erro de hidratação. Verificado em aba limpa com reduced-motion ligado: sem erros. Também corrigido o aviso de `next/image` no `ExamCta` (`h-auto w-full`) |
| D-030 | 2026-10-20 | **Motion v2 baseado em evidência do REA**: faixa de diferenciais em loop, manchete palavra por palavra, seda do cliente (`background.png`) como fundo do hero com zoom lento, armações que se desenham no hover, barra de progresso de leitura. Tudo CSS puro, sem dependência nova, desligado com "reduzir movimento". Detalhes e método em docs/BENCHMARK-CONCORRENTES.md | O REA (CLI 6.7.0, observação passiva da home de 5 concorrentes) mostrou que nenhum usa GSAP/Framer/Lenis/Lottie: só carrosséis jQuery (Owl/Slick/Swiper) + lazysizes. A vantagem é motion leve e bem coreografado, não biblioteca pesada. Carol bloqueou Chrome automatizado ("Access Denied") e a proteção NÃO foi contornada. Chrome temporário, perfil e cópias de scripts de terceiros foram apagados. Substitui a antiga barra TrustBar pela faixa em movimento |
| D-031 | 2026-11-10 | **Carrossel infinito de marcas na home** (entre "O que você procura hoje?" e "Como funciona"): componente `ui/infinite-slider.tsx` (framer-motion + `react-use-measure`), dados em `lib/brands.ts`, seção em `site/brands-strip.tsx`. Ajustes sobre o código original: respeita "reduzir movimento" (fica parado) e a 2ª cópia do loop é `aria-hidden`. Marcas em logo, nas cores originais (a pedido do cliente; antes eram cinza), com leve zoom no hover: Ray-Ban, Oakley, Vogue Eyewear, Carrera, Polaroid, Tommy Hilfiger, Oben, Arnette, Ferrovia Eyewear e Gucci | Lista e arquivos enviados pelo próprio cliente em 2026-11-10 (6 SVGs do Wikimedia Commons + 4 imagens avulsas). As 4 imagens tinham fundo branco/vinho: foram convertidas em PNG transparente (`/public/brands/`). Persol saiu (cliente não enviou). Logos de marca registrada: uso apenas identificativo, só de marcas que a loja vende. Adicionar/remover marca = editar `lib/brands.ts` |
| D-032 | 2026-11-10 | **Seção "Antes e depois de comprar o seu óculos"** (comparação arrastável, fundo azul-marinho) entre "Do exame à entrega" e "Qual formato combina com você?"; **seção de exame ("Quando foi seu último exame de vista?") movida para o FIM da página**, depois de "Perto de você". Componente `ui/diff.tsx` (21st.dev) + `site/before-after.tsx` | É ILUSTRAÇÃO de nitidez (mesma foto, versão desfocada: 5 px de desfoque com leve perda de contraste e de cor, para simular vista sem correção; histórico: 12 px era forte demais, 3 px foi pedido para subir para 5 px em 2026-11-11); não é caso real nem promessa clínica (CDC/CONAR), e o texto da seção não promete resultado. Legenda: "Praia de Morro Branco, Beberibe – CE" (a pedido do cliente, no lugar de "imagem ilustrativa"). O componente original importava `cn` de um pacote npm chamado `cn` (não é o utilitário do shadcn): trocado por `@/lib/utils`, sem instalar pacote; rótulos de acessibilidade traduzidos do persa para pt-BR. Imagem: foto de falésias e mar do Ceará enviada pelo cliente (substituiu uma foto de praia anterior), em `/public/images/antes-depois-falesia.jpg` (1140x641, 16:9, 142 KB). Ao trocar a foto, usar nome novo de arquivo (o otimizador do Next guarda cache por nome) |
| D-033 | 2026-11-10 | **Seletor de formatos com fotos reais**: 8º formato "Sobrancelha" (browline); cada formato aceita `photo` opcional em `frame-icons.tsx` (cartão 3:2); sem foto, mantém a silhueta dourada. **As 8 fotos de produto foram enviadas pelo cliente** (faixas 1921×544) e convertidas para 3:2 (1200×800, 15–49 KB cada) em `/public/images/formatos/`: armação inteira, centralizada, com o fundo da própria foto esticado em cima e embaixo. **Nome do formato fica EMBAIXO da foto** (o cliente não gostou do nome sobreposto; sobreposto também cobria a armação no celular), **Visual final (cara de catálogo, não de template):** a foto (fundo branco) assenta via `mix-blend-multiply` sobre um fundo de estúdio: gradiente radial (clarão branco no centro → azul-gelo `#d5e0f0` nas bordas), em vez de cor lisa (o bege `#ebe4d8` foi rejeitado pelo cliente, e o azul liso `navy-100` "precisava melhorar"); sem borda, sombra, filete dourado nem seta; nome em serifa e descrição simples, com uma linha fina embaixo que fica dourada no hover. Foto do Aviador trocada pelo cliente por uma de fundo claro (`aviador-claro.jpg`; a anterior, de fundo escuro, destoava das outras 7). Histórico: a legenda branca deixava o cartão "muito branco"; a faixa azul-marinho com filete dourado e seta que veio depois foi rejeitada pelo cliente ("cara de IA"). Cartões da mesma linha com altura igual (`FadeIn className="h-full"`). Grade passou de 7 para 4 colunas (2 linhas de 4, sem cartão órfão). Prompt das 8 fotos em docs/PROMPT-FOTOS-FORMATOS.md | As montagens enviadas pelo cliente têm ~500×235 px por foto e o texto gravado na imagem (nome do formato e botão do WhatsApp): recortar ficaria borrado e com texto. Decisão: gerar 8 fotos individuais, sem texto/logos, e o nome fica em código (SEO, acessibilidade, edição). Fotos de IA mostram estilo, não produto de estoque (CDC): cartão leva só o formato e o clique abre o WhatsApp. A foto "Gatinho" das montagens trazia um estojo com emblema parecido com marca: proibido no prompt (sem logos). Corrigido junto: aviso do `next/image` no bloco de exame (declarava 320×180, o arquivo real é 1376×768; a altura calculada dava 179 px e o aviso reaparecia ao carregar a imagem no fim da página) |
| D-034 | 2026-11-10 | **Foto do cartão "Óculos de grau" (home) trocada** por uma de casal sorrindo com óculos num café, enviada pelo cliente como print do cartão (recortada só a foto: 978×486, `category-grau-casal.jpg`, 70 KB). O bloco de exame no fim da página continua com a foto antiga das armações (`category-grau.jpg`) | Foto de estilo de vida, não depoimento: o texto do site não a apresenta como cliente real, e o alt descreve a cena de forma neutra. Se for imagem gerada por IA, não usar como "cliente da loja" nem em contexto de prova social |
| D-035 | 2026-11-10 | **Mapa do Google incorporado na seção "Perto de você" (home)**: componente `site/store-maps.tsx` (abas quando houver mais de uma loja), dados em `lib/site.ts` (`mapEmbedUrl`, `directionsUrl`), botões "Como chegar" e "Abrir no Google Maps". Só Varjota tem mapa por enquanto | Sem chave de API: usa o formato `google.com/maps?q=...&output=embed`, com `loading=lazy` (só carrega quando o visitante rola até lá). Só entra loja com endereço CONFIRMADO (Ipu e Reriutaba aguardam P-008): senão o pino cai no lugar errado. Verificado no Chrome: a busca resolve para a ficha real "ÓTICA ACESSO" (pino na loja, com foto da fachada). Privacidade: o Google Maps é serviço de terceiro; incluída a linha "Mapas" na política (/privacidade). Alternativa oficial para pino com nome/fotos/avaliações: colar o `src` do iframe de Compartilhar → Incorporar um mapa |
| D-036 | 2026-11-10 | **Clicar numa loja muda o mapa**: cartões + mapa viraram o componente `site/stores-explorer.tsx` (substitui o `store-maps.tsx`). Cartão selecionado ganha borda dourada e selo "No mapa"; botão interno `aria-pressed` para teclado; no celular a página rola até o mapa. Ipu: mapa da ficha real. Reriutaba: mapa só da cidade, com aviso e botão "Pedir o endereço" no WhatsApp (sem "Como chegar") | Verificado no Google Maps em 2026-11-10: **Ipu tem a ficha "OTICA ACESSO"** (Centro, Ipu - CE, 62250-000, com foto da fachada); **Reriutaba NÃO tem ficha da Ótica Acesso** (a busca devolve Ótica Lima, Cauã e Visual). Buscar pelo nome em Reriutaba mostraria concorrente, por isso o mapa é só da cidade até haver endereço (P-008). O cartão do mapa mostra o endereço cadastrado em cada ficha |
| D-037 | 2026-11-10 | **Fonte dos títulos definida: Plus Jakarta Sans** (600 nos títulos de seção), em todo o site; texto corrido continua Inter. Token `--font-heading` = `--font-jakarta` (`layout.tsx` + `globals.css`). Títulos com espaçamento -0.02em e `text-wrap: balance`. Hero em 2 linhas (`text-5xl` no celular, `text-7xl` no desktop) **Atualização 2026-11-11: o título da capa ("Enxergar bem muda tudo.") passou a ser Lora em negrito** (`font-display` = `--font-lora` em `layout.tsx`/`globals.css`, `text-5xl` no celular e `text-7xl` no desktop), escolhida pelo cliente por uma imagem de referência. Identificação: comparei a proporção largura/altura do texto "Enxergar bem" da imagem (6,40) com 15 serifas; a Lora Bold deu 6,38 (as demais ficaram mais longe). Os títulos de seção seguem em Plus Jakarta Sans. Verificado no desktop e no celular (2 linhas, sem rolagem lateral), console limpo. | Escolha por recomendação, depois de o cliente rejeitar três fontes em sequência: Fraunces (serifa pesada e estranha), Outfit (sans geométrica) e Dancing Script (script; "péssimo"). O pedido final foi "bonito, elegante e simples"; a imagem de referência que o cliente enviou era uma sans em negrito branca + dourada. Plus Jakarta Sans é moderna e refinada sem ser fria, e combina com a Inter do texto e com o azul-marinho e dourado. Ajuste mantido da rodada da script: `RevealWords` com folga vertical (`py/-my 0.12em`) para o `overflow-hidden` não cortar letras. Verificado no desktop e no celular (48 px, 2 linhas, sem rolagem lateral), console limpo. Trocar a fonte = 1 linha em `layout.tsx`. Nota técnica: o CSS do servidor de desenvolvimento ficou preso (sem as classes `text-5xl`/`font-extrabold`) e só voltou ao reiniciar o servidor na porta 3100; não afeta o build de produção |
| D-038 | 2026-11-11 | **Ano de fundação corrigido para 2020** (`foundedYear` em `lib/site.ts`; antes 2014). A capa passa a dizer "Desde 2020"; a página Sobre (título, descrição e "há mais de X anos") e o JSON-LD (`foundingDate`) leem o mesmo valor. Fecha P-009 | O 2014 vinha de um diretório (Solutudo, D-015) e estava errado. Confere com o Instagram da loja, que comemorou "6 anos" em 2026. A descrição da Sobre dizia "mais de uma década" (agora falso) e foi reescrita com o ano. Atenção: "há mais de X anos" é calculado só pelo ano (2026-2020 = 6); em janeiro de 2027 mostraria 7 antes do aniversário real. Se o mês de fundação for informado, dá para calcular certo |
| D-039 | 2026-11-11 | **EXPERIMENTO RETIRADO a pedido do cliente: galeria de fotos do Instagram na seção "Acompanhe quem já enxerga melhor com a gente".** A seção voltou ao original (texto + botão "Ver no Instagram"). Removidos: pasta `public/images/instagram/`, `site/instagram-gallery.tsx`, o import e `<InstagramGallery />` do `page.tsx`, e as cópias temporárias das fotos | Motivo do cliente: "vai só poluir o site". Histórico: a 1ª versão (8 fotos) foi criticada por "muita gente repetida e imagens fora de quadro"; a 2ª (6 fotos de 6 pessoas diferentes, 3×2) ainda foi retirada. Lições para uma eventual nova tentativa: (1) o feed da loja é feito quase só de rostos e de Reels com texto/preço, e repete poucas pessoas; (2) todas as fotos mostravam gente reconhecível, o que exigiria autorização de imagem (LGPD); (3) o ideal seria fotos próprias de produto/loja sem rosto, tiradas para o site. Não retomar sem pedido do cliente |
| D-040 | 2026-11-11 | **Selos flutuantes do hero: vidro branco translúcido com mais força** ("Exame de vista Gratuito" e "Óculos pronto em até 24h", em `site/hero-visual.tsx`): `bg-white/20`, `backdrop-blur-lg`, borda `white/35`, sombra, rótulo branco 14 px e valor em dourado 20 px negrito com leve sombra no texto | O cliente achou os selos "meio apagados" (eram `bg-white/10`, rótulo `navy-100` de 12 px). Testei um fundo azul-marinho sólido com borda dourada, mas o cliente respondeu que **gostava do estilo branco (vidro) e que só faltava brilho**; por isso voltou o vidro, mais claro e desfocado. Regra: manter o estilo de vidro e ajustar só a intensidade. Verificado no Chrome e nos estilos aplicados, console limpo. Obs.: os selos só aparecem a partir do desktop (`lg`), e uma captura feita no meio da animação de entrada da capa mostra tudo apagado |

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
| P-011 | **Condições comerciais reais**: parcelamento (quantas vezes, sem juros?), garantia (prazo e o que cobre), desconto no Pix, formas de pagamento, política de troca, frete (grátis a partir de quanto?), horário de cada loja, e material próprio (fotos/vídeos do Instagram da loja que você possa reaproveitar) | Faixa de benefícios e rodapé de pagamento (blocos de maior conversão dos concorrentes) e vídeo do hero — só entram com dado verdadeiro | ⏳ Aberta |
| P-012 | **Quais marcas a Ótica Acesso realmente vende?** (armações, óculos de sol, lentes, lentes de contato) e logos oficiais dos fornecedores | Lista atual em `lib/brands.ts` (Ray-Ban, Oakley, Vogue, Persol, Arnette, Carrera, Polaroid, Tommy Hilfiger) é PROVISÓRIA: exibir marca que a loja não vende é publicidade enganosa e uso indevido de marca. **Não publicar na Vercel antes de confirmar**. Checagem em 2026-11-10 do Instagram @oticaacesso (96 publicações lidas): **nenhuma marca de óculos é citada**; só aparecem "Atlantis" (relógios), lentes digitais Freeform, antirreflexo, lentes 1.67, clip-on, óculos esporte e armações sem marca. Trava no código: `brandsConfirmed` em `lib/brands.ts` esconde a seção em build de produção enquanto `false`. **Resolvida em 2026-11-10 → D-031:** o cliente enviou os logos das 10 marcas (tratado como confirmação) e a trava foi para `true`. Pendente só para as lentes: marcas de lente (Essilor, Zeiss etc.), se houver | ✅ Resolvida |
| P-013 | **Número do endereço de Varjota: 616 ou 620?** O cliente informou 616 (2026-11-10), mas a ficha "ÓTICA ACESSO" no Google Maps mostra **620** (R. Modesto Mendonça, 620 — 62265-000) | SEO local: site e Google Business Profile devem trazer o MESMO endereço (consistência de NAP). Se 616 for o correto, corrigir a ficha no Google (perfil da empresa); se 620 for o correto, voltar `lib/site.ts` para 620. **Contorno testado e DESFEITO (2026-11-10, o cliente respondeu \"não\"):** fazer o mapa buscar só pelo endereço 616 (sem o nome da loja) mostrava 616 no cartão do Google, mas perdia nome/fotos/avaliações e deixava o pino aproximado. O mapa voltou a buscar \"Ótica Acesso, R. Modesto Mendonça 616...\", que casa com a ficha real; o cartão do mapa mostra o endereço cadastrado na ficha (620) até ela ser corrigida no Google | ⏳ Aberta |
| P-014 | **Criar a ficha da loja de Reriutaba no Google Meu Negócio** (e conferir a de Ipu: só aparece "Centro", sem rua, e a de Varjota mostra 620, ver P-013) | SEO local: sem ficha no Google, a loja de Reriutaba não aparece no Maps nem na busca "ótica em Reriutaba". Precisa do endereço completo (P-008), telefone e horário, e a verificação do Google (cartão/vídeo) | ⏳ Aberta |

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
