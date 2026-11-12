# Benchmark de concorrentes — padrões de UX, motion e CRO

**Data:** 2026-10-20 · **Método:** observação passiva de páginas públicas (HTML lido
por ferramenta web; Carol e Mercadão renderizados no Chrome do cliente). Nada foi
copiado: nem imagens, nem vídeos, nem textos, nem código. Só padrões de uso.

## Cobertura (honesta)

| Site | Situação | Observação |
|---|---|---|
| Óticas Diniz | ✅ lido | Só marcação HTML: animações e sticky não são verificáveis |
| Óticas do Bem | ✅ lido | Snapshot pode ser antigo (depoimentos e promos de 2020) |
| Óticas Carol | ✅ lido no Chrome | Leitor automático recebeu 403; página abriu normalmente no navegador |
| Chilli Beans | ✅ lido | Só marcação HTML |
| Mercadão dos Óculos | ✅ lido no Chrome | Leitor automático caiu em verificação anti-bot (não contornada); no navegador abriu direto |
| Super Ótica São José | ❌ fora do ar | Redireciona para "loja indisponível no momento" |

Limite: não houve medição de animação, scroll ou desempenho dos concorrentes. Onde
o texto abaixo fala de motion, é inferência a partir da marcação.

## Padrões observados

- **Diniz:** barra de promoção com Pix, parcelamento e frete; mega-menu por marca,
  gênero e formato; "Encontre uma Diniz" no topo; selos "Pronta Entrega" e "Só na
  Diniz". Não promove exame de vista na home.
- **Óticas do Bem:** botão "Orçamento" via WhatsApp no cabeçalho como CTA principal;
  preço de entrada único e claro; blog com títulos em formato de pergunta.
- **Chilli Beans:** faixa de benefícios (trocas, suporte por WhatsApp, pagamento);
  selos Reclame Aqui e NPS; "Espiar" (visualização rápida); widget de acessibilidade;
  coleções de cultura pop como espaço próprio.
- **Carol:** hero editorial em tela cheia com tipografia grande; "10x sem juros" em
  cada produto; links utilitários "Encontre uma Carol / Fale conosco" no topo;
  banner de cookies com Recusar e Aceitar.
- **Mercadão:** seletor "Qual formato te representa?"; faixa de benefícios (10x,
  garantia, frete grátis acima de valor); prova social por perfis de Instagram;
  bloco "em números"; localizador de loja por cidade.

## O que entrou no site (2026-10-20)

| Padrão | Origem | Implementação |
|---|---|---|
| Seletor de formato com 7 silhuetas | Mercadão | `frame-icons.tsx` + seção `ShapeSelector`; ilustrações SVG originais, cada formato abre o WhatsApp com mensagem pronta |
| "Do exame à entrega" em 3 passos | Diferencial (nenhum concorrente destaca exame) | ~~Seção `Journey` na home~~ **removida em 2026-11-12 (D-043)**: repetia a capa e a página /exame-de-vista |
| Atalhos no topo ("Encontre uma loja", "Fale conosco") | Diniz, Carol | Barra de utilidade do header |
| Parallax no hero + chips flutuantes | Carol (hero editorial) | CSS puro (`.hero-parallax`, `.float-chip`), respeita `prefers-reduced-motion` |

## Correção técnica descoberta no caminho

O `FadeIn` e o hero geravam **erro de hidratação** para quem usa o sistema com
"reduzir movimento" (o estado inicial dependia de `useReducedMotion()`, que só é
conhecido no cliente). Corrigido: estado inicial constante; a preferência só altera
a transição. Verificado em aba limpa, sem erros de console.

## Deliberadamente NÃO feito

- **Fotos e vídeos dos concorrentes:** são protegidos por direitos autorais; usá-los
  no site seria infração e quebraria a estratégia de autenticidade. Alternativas
  legítimas: fotos próprias, press kits dos fornecedores e imagens geradas por IA
  sem rosto de cliente fictício.
- **"10x sem juros", garantia, Pix, frete grátis, "+N clientes":** são os blocos de
  maior conversão dos concorrentes, mas só entram com **dados reais** da Ótica
  Acesso (ver P-011). Afirmar condição comercial inexistente é publicidade enganosa.
- **Banner de cookies:** o Vercel Analytics não usa cookies; sem outros rastreadores,
  não é necessário agora. Reavaliar se entrarem Meta Pixel ou Google Analytics.

## Próximos passos para "melhor site de ótica do Brasil"

1. **Dados comerciais reais (P-011)** → faixa de benefícios e rodapé de pagamento.
2. **Vídeo próprio** (10–15 s, loop silencioso) no hero: exame acontecendo na loja.
   O Instagram da loja já tem material seu que você pode reaproveitar.
3. **Catálogo real** (Fase 3) com visualização rápida e filtro por formato, usando
   o mesmo vocabulário do seletor.
4. **Localizador de loja** com mapa e horários (depende de P-008).
5. **Galeria de clientes reais** com autorização (P-010), no lugar do bloco que hoje
   só aponta para o Instagram.
6. **Quiz "encontre seu óculos"** (rosto + uso) que termina no WhatsApp qualificado.
7. **Medição de conversão** (eventos de clique em agendar e WhatsApp) antes de
   qualquer teste A/B.

---

## Evidência técnica (REA, 2026-10-20)

**Método.** CLI do REA 6.7.0 (`inspect-web-page --include-script-sources`,
`analyze-web-bundle`, `export-web-scripts`) sobre a **página inicial** de cada
concorrente, aberta num Chrome temporário com perfil descartável e porta de
depuração só no loopback. Observação passiva: nenhum script foi executado por
mim. O servidor MCP do REA não está registrado nesta máquina (por isso o CLI) e
nenhum motor nativo (Hopper/Ghidra/IDA) é necessário para análise de JavaScript.
Terminado o trabalho, o Chrome e o perfil foram apagados, assim como as cópias
dos scripts de terceiros; só o resumo numérico foi mantido.

**Bloqueio respeitado.** A Carol devolveu "Access Denied" ao Chrome sem janela
(detecta navegador automatizado). Não houve disfarce de User-Agent nem outra
forma de contornar a proteção; a leitura foi feita com um Chrome comum, com
janela, que a página aceitou.

| Site | Scripts | Carrossel | Lazy-load | Stack | Biblioteca de motion moderna |
|---|---|---|---|---|---|
| Óticas Carol | 59 | Owl Carousel | lazysizes | jQuery | nenhuma |
| Mercadão dos Óculos | 29 | Slick | lazysizes | Vue | nenhuma |
| Óticas Diniz | 15 | não detectado | — | VTEX | nenhuma |
| Chilli Beans | 18 | Slick | lazysizes | VTEX + jQuery | nenhuma |
| Óticas do Bem | 33 | Swiper | lazysizes | jQuery | nenhuma (só trechos de "parallax") |

**O que isso significa.** Nenhum dos 5 usa GSAP, Framer Motion, Lenis ou Lottie. O
movimento deles é carrossel de jQuery e imagens que carregam sob demanda. A
vantagem possível da Ótica Acesso não está em adotar uma biblioteca pesada: está
em movimento CSS leve, bem coreografado, sobre fotografia e tipografia melhores.

**Limites (não são conclusões).**
- Só a home, com 4 s de observação; páginas internas e interações (menu, quick view)
  não foram medidas.
- Detecção por texto nos scripts: presença de um nome não prova que a biblioteca
  executa, e código minificado pode esconder nomes. Na Diniz o carrossel do hero
  não foi identificado (pode ser componente próprio do VTEX).
- Buscas por "autoplay/video" tiveram ruído (carrosséis usam a palavra
  "autoplay"), por isso **não** afirmo que algum concorrente usa vídeo no hero.
- Não foi medido desempenho (LCP, peso) de nenhum concorrente.

## Aplicado no site (motion v2, 2026-10-20)

Tudo em CSS puro, só `transform`/`opacity`, sem dependência nova e desligado com
"reduzir movimento":

| Efeito | Onde | Arquivo |
|---|---|---|
| Manchete sobe palavra por palavra | hero | `reveal-words.tsx`, `.reveal-word` |
| Seda azul-marinho/dourado em zoom lento (imagem do cliente, `background.png`) | fundo do hero | `.hero-drift` |
| Faixa de diferenciais em loop (pausa no hover) | logo após o hero | `marquee.tsx` |
| Armação "se desenha" ao passar o mouse | seletor de formatos | `.frame-draw` |
| Barra dourada de progresso de leitura | topo da página | `.scroll-progress` |
| Parallax da foto + chips flutuantes | hero (desde a rodada anterior) | `.hero-parallax`, `.float-chip` |

A faixa de diferenciais só traz afirmações confirmadas pelo cliente (exame
gratuito, pronto em 24h, 3 lojas, lentes digitais, lentes de contato, envio para
todo o Brasil).
