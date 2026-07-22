# FASE 0 — ESTRATÉGIA | Ótica Acesso

**Data:** 2026-07-18 · **Status:** ✅ Concluída (Instagram analisado em 18/07/2026 via navegador)

---

## 1. Análise da Identidade Visual Atual (logo recebida)

### O que a logo comunica hoje
- **Paleta:** azul-marinho profundo + azul vibrante + dourado/âmbar + branco. Excelente matéria-prima: azul = confiança/saúde, dourado = premium/valor. É a mesma família cromática de marcas de saúde e instituições financeiras — transmite seriedade.
- **Símbolo:** armação de óculos dourada integrada ao nome — reconhecível e memorável.
- **Tagline:** "Sua visão é a nossa prioridade!" — boa promessa, centrada no cliente.

### Diagnóstico honesto (o que precisa evoluir)
1. **O estilo glossy/3D com ondas de luz é datado.** Gradientes brilhantes, brilhos especulares e swooshes remetem a design dos anos 2000/artes de impressão de gráfica rápida — o oposto do minimalismo premium (Apple, Warby Parker) que definimos como norte. Isso NÃO exige trocar a marca: exige uma **versão flat refinada** da mesma logo (mesmas cores, mesma composição, sem efeitos 3D), em SVG, para uso digital.
2. **Ilegível em tamanhos pequenos.** Favicon, header do site e foto de perfil do Instagram precisam de uma **variante compacta** (ex.: só a armação dourada sobre azul, ou monograma "A").
3. **A tagline com "!" enfraquece o tom premium.** Marcas sofisticadas afirmam, não exclamam. Proposta: "Sua visão é a nossa prioridade." (ponto final) ou evolução: **"Cuidamos de como você vê o mundo."**

### Decisão de design derivada
O site usará a paleta da logo como base do design system, em tratamento **flat e minimalista**:

| Token | Cor | Uso |
|-------|-----|-----|
| `navy-950` | #0A1633 (azul-marinho profundo) | Fundos hero, footer, texto principal |
| `blue-600` | #1D4ED8 → ajustar ao tom da logo | Ações secundárias, links |
| `gold-500` | #D4A017 / #E0A82E | CTAs primários, detalhes premium, ícones |
| `white/off-white` | #FFFFFF / #F8FAFC | Fundos de conteúdo, respiro |

Tipografia proposta: **serifada de alto contraste para títulos** (ex.: Fraunces ou Playfair Display — ecoa a serifa da logo) + **sans-serif geométrica para texto/UI** (ex.: Inter). Ambas gratuitas via Google Fonts/Fontsource — zero custo de licença.

---

## 2. Modelo de Negócio Digital (aprovado — D-004)

**v1 — Catálogo premium + fechamento consultivo:**
- Óculos de grau: página de produto → CTA "Falar com especialista" → WhatsApp com mensagem pré-preenchida (produto + loja mais próxima).
- Óculos de sol e acessórios: mesmo fluxo na v1; checkout online avaliado na Fase 5.
- Exame de vista: agendamento online (formulário → WhatsApp/confirmação) — principal conversão local.

**Por quê:** sem ERP e sem operação de logística estruturada, um checkout completo criaria estoque fantasma, frete mal calculado e trocas de grau — riscos que destroem reputação. O WhatsApp é onde o público-alvo já compra.

---

## 3. Benchmark — Síntese das Melhores Práticas

| Marca | O que extrair | O que evitar |
|-------|--------------|--------------|
| **Warby Parker** | Quiz de recomendação; jornada de grau simplificada; tom de voz humano e claro; home-try-on como ideia de "provador na loja" | Complexidade de operação que exige logística própria |
| **Apple** | Espaço em branco; 1 mensagem por seção; fotos gigantes; hierarquia tipográfica impecável | Frieza excessiva — Acesso precisa de calor humano |
| **Ray-Ban** | Fotografia de produto em fundo neutro + lifestyle aspiracional; páginas de produto com zoom | Dependência de marca própria mundialmente famosa |
| **Gentle Monster** | Design emocional, coragem visual, marca como experiência | Extravagância que não conversa com o interior do CE |
| **Óticas Carol/Diniz** | Arquitetura de categorias BR (grau/sol/lentes/infantil); linguagem de crediário e acessibilidade financeira; localizador de lojas | Poluição visual, banners empilhados, cara de varejão |
| **Chilli Beans** | Energia jovem no Instagram; lançamentos como evento | Posicionamento fashion-jovem demais para uma ótica de confiança |
| **Mercadão dos Óculos** | Comunicação de preço acessível sem parecer barato | Estética de franquia genérica |
| **LensCrafters/Moscot** | Exame como serviço central (LensCrafters); herança e história como autoridade (Moscot) | — |

**Síntese estratégica:** nenhuma ótica brasileira combina *estética premium internacional* + *confiança local de interior* + *saúde visual como serviço*. Esse é o espaço vazio que a Ótica Acesso ocupa.

---

## 4. Personas

1. **Maria das Graças, 52, Varjota** — professora, usa multifocal, troca óculos quando "não enxerga mais". Busca: confiança, exame na cidade, crediário. Canal: indicação + Instagram local + WhatsApp. *Conversão: agendamento de exame.*
2. **Rafael, 27, Ipu** — trabalha no comércio, quer óculos de sol estiloso e armação moderna, compara preço no celular. Busca: estilo acessível, parcelamento. Canal: Instagram/Reels. *Conversão: catálogo → WhatsApp.*
3. **Ana Paula, 35, Fortaleza (nacional)** — conheceu a marca pelo Instagram, quer armação diferenciada com bom preço. Busca: confiança para comprar de loja de outra cidade. Canal: Instagram → site. *Conversão: prova social + WhatsApp + envio para todo o Brasil.*
4. **Seu Francisco, 64, Reriutaba** — filho pesquisa por ele. Busca: atendimento humano, saúde ocular. *Conversão: página da loja + telefone/rota.*

## 5. Jornada do Cliente (macro)

```
Descoberta (IG/Google local/indicação)
→ Consideração (site: catálogo, prova social, páginas de loja)
→ Conversão (WhatsApp qualificado / agendamento de exame / visita)
→ Pós-venda (garantia, ajustes, lembrete de revisão em 12-18 meses)
→ Fidelização (retorno + indicação)
```

Cada página do site deve responder: *em qual etapa da jornada este visitante está e qual é o próximo passo natural?*

## 6. Arquitetura do Site (sitemap v1)

```
/                        Home — posicionamento + categorias + prova social + lojas
/oculos-de-grau          Catálogo grau (filtros: formato, material, gênero)
/oculos-de-sol           Catálogo sol
/lentes                  Lentes oftálmicas e de contato (conteúdo consultivo)
/produto/[slug]          Produto: fotos grandes, specs, CTA WhatsApp contextual
/exame-de-vista          Agendamento: escolha loja → dia/turno → WhatsApp
/lojas                   Hub com mapa
/lojas/[cidade]          Varjota | Ipu | Reriutaba — equipe, fotos, Google reviews, rota
/sobre                   História, valores, time
/blog + /blog/[slug]     Saúde visual + estilo (motor de SEO)
/contato                 WhatsApp, telefones, formulário
```

**Wireframe da Home (ordem das seções):**
1. Hero: foto lifestyle grande + headline de posicionamento + 2 CTAs (Agendar exame / Ver coleção)
2. Categorias (grau / sol / lentes) — cards com foto
3. Barra de confiança: 3 lojas físicas · envio para todo o Brasil · exame de vista · parcelamento
4. Produtos em destaque
5. "Saúde visual em primeiro lugar" — seção do exame com CTA
6. Prova social: avaliações Google + fotos de clientes
7. Lojas (mapa + 3 cards)
8. Blog em destaque + captura de lead (lembrete de revisão)
9. Footer completo (SEO local: endereços por extenso)

## 7. Tom de Voz

- **É:** próximo sem ser íntimo demais, especialista sem jargão, elegante sem frieza. Trata o cliente por "você". Frases curtas. Verbos de cuidado: *cuidar, enxergar, acompanhar*.
- **Não é:** gritado ("SUPER PROMOÇÃO!!!"), técnico-frio, nem falsamente jovem.
- Exemplo de headline hero: **"Enxergar bem muda tudo."** / sub: "Óculos de grau e sol com atendimento de verdade — nas nossas lojas no Ceará ou onde você estiver."

## 8. SEO — Local primeiro, nacional em cauda longa

**Fase imediata (local):** páginas /lojas/[cidade] otimizadas para "ótica em varjota", "exame de vista ipu", "ótica reriutaba" + Google Meu Negócio completo por loja (fotos, horários, posts, avaliações) + NAP consistente no footer.
**Fase de crescimento (nacional):** blog em cauda longa — "como ler receita de óculos", "lente antirreflexo vale a pena", "formato de rosto e armação" — termos com milhares de buscas/mês e concorrência média.
**Técnico:** Next.js SSG/ISR, Schema.org (LocalBusiness, Product, FAQPage), Core Web Vitals verdes, sitemap.xml, OG images.

## 9. Plano de Produção de Fotos (resposta à pergunta do cliente)

**Estratégia híbrida em 3 frentes, em ordem de custo-benefício:**

1. **Assets de fornecedores (custo zero, começar já):** as marcas/distribuidores de armações fornecem fotos oficiais de produto em alta resolução (press kit / material de revenda). Pedir ao representante comercial de cada marca vendida. Resolve o catálogo de produtos de marca.
2. **Mini-estúdio próprio (R$ 200–400, permanente):** lightbox/tenda de luz de ~60cm (Shopee/ML), tripé de celular e um smartphone recente resolvem fotos de produto em fundo branco com qualidade de e-commerce. Padrão: mesmo ângulo, mesma luz, fundo #F8FAFC — a **consistência** é o que faz parecer profissional. Posso fornecer o guia de captura (ângulos, distância, enquadramento) quando formos fotografar.
3. **Diária com fotógrafo regional (R$ 800–2.500, uma vez):** um dia de produção em Sobral/região cobrindo: fachada e interior das 3 lojas, equipe atendendo, exame de vista acontecendo, e 10–15 fotos lifestyle com modelos locais (clientes reais usando os óculos — mais autêntico e mais barato que modelo profissional). Essas fotos alimentam hero do site, páginas de loja, sobre e 2–3 meses de Instagram.

**Prioridade:** frente 1 e 2 destravam o catálogo; frente 3 destrava o posicionamento premium do site institucional (Fase 2). Enquanto não existir, usarei fotografia de banco de imagens de alta qualidade como placeholder claramente marcado.

## 10. Domínio (verificação feita em 18/07/2026 via RDAP)

| Domínio | Status |
|---------|--------|
| oticaacesso.com.br | ❌ **Registrado por terceiro** (Rogerio Portugal Bacellar Filho, em 07/11/2025, expira 11/2027) |
| **oticaacesso.com** | ✅ Disponível |
| **oticasacesso.com.br** | ✅ Disponível |
| **oticaacessooficial.com.br** | ✅ Disponível |

**Recomendação:** registrar **oticaacesso.com** (global, limpo, ~US$ 10/ano) **e** um `.com.br` de apoio. Avaliar contato com o atual dono do .com.br (pode ser squatting recente — nov/2025 — e a marca tem uso anterior comprovável). **Recomendo também iniciar o registro da marca no INPI** — protege contra exatamente esse tipo de situação.

**Decisão do cliente (18/07/2026):** domínio confirmado — **oticaacesso.com** (D-008). Próximo passo: efetuar o registro.

## 11. Análise do Instagram @oticaacesso (18/07/2026)

**Números:** 176 posts · 3.811 seguidores · **4.998 seguindo** · engajamento ~0,3% (ex.: 10 curtidas/post) · categoria "Shopping & retail".

### Ativos reais (o que já funciona)
1. **Fotos de clientes reais experimentando óculos na loja** — retratos razoáveis de smartphone, sorrisos genuínos. É exatamente a prova social autêntica da nossa estratégia; vira seção do site.
2. **Comentários calorosos de comunidade local** ("Lindo óculos e modelo 👏") — engajamento pequeno em número, mas de gente real e próxima. Nenhuma grande rede tem isso.
3. **Copy ocasionalmente ótima:** "Cada detalhe da sua armação é pensado para valorizar o que você tem de mais único: o seu olhar 💙" — este é o tom de voz certo; hoje aparece misturado com posts de meme e preço gritado.
4. **Diferenciais concretos anunciados na bio:** entrega em até 24h, lentes digitais, lentes de contato. Destaques revelam portfólio amplo: clip-on, grau alto, lentes 1.67, óculos esporte — e o feed mostra que **também vendem relógios (Atlantis)**.

### Problemas identificados
1. **Seguindo 4.998 pessoas (mais do que os seguidores)** — sinal de tática follow/unfollow; passa imagem amadora e prejudica alcance. Corrigir: deixar de seguir em massa, seguir só parceiros/clientes engajados.
2. **Bio inconsistente e sem link de site:** "Loja 01 Varjota / Loja 02 IPU / loja 03 Reriutaba" (capitalização irregular), link cru `api.whatsapp.com/send?phone=...`. Corrigir: bio enxuta com posicionamento + link do site (quando no ar) ou link curto wa.me.
3. **13 destaques todos com a mesma capa (a logo)** — impossível distinguir; dois se chamam "Destaques"; "Black friday" ativo em julho. Corrigir: capas minimalistas por tema na paleta navy/dourado, nomes padronizados.
4. **Identidade visual inconsistente no feed:** preços em vermelho estilo varejão sobre reels, legendas queimadas amarelas, decoração de festa junina (verde/amarelo) dominando o fundo das fotos — nada segue a paleta azul/dourado da marca.
5. **Foto de perfil ilegível** — a logo completa comprimida em círculo pequeno confirma a necessidade da variante compacta (D-006).

### Diretriz de evolução (insumo para Fase 4)
Manter o calor humano e os clientes reais (é o ativo); profissionalizar a moldura: grid com paleta consistente, templates de preço elegantes (navy + dourado, nunca vermelho), capas de destaques padronizadas, bio reescrita, cadência de conteúdo 40% prova social / 30% produto / 20% educação (saúde visual) / 10% institucional.

## 12. Pendências desta fase

- [x] ~~Análise do Instagram @oticaacesso~~ ✅ concluída (§11)
- [ ] Definição do domínio pelo cliente + registro
- [ ] Solicitação de press kits aos fornecedores
- [ ] Decisão sobre contato com dono do oticaacesso.com.br / INPI
- [ ] Confirmar: relógios (Atlantis) entram no catálogo do site?
