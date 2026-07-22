# FASE 2.5 — Polimento Profissional | Backlog Priorizado

**Criado em:** 2026-07-18 (auditoria com a skill UI/UX Pro Max ao fim do dia 1)
**Contexto:** Fases 0–2 concluídas, site publicado em https://otica-acesso.vercel.app.
Esta fase reúne o que falta para nível profissional antes da Fase 3 (catálogo).

## A. Impacto visual ("mais bonito")

| # | Tarefa | Responsável | Status |
|---|--------|-------------|--------|
| A1 | Fotografia no hero (lifestyle) | Cliente gera → Claude integra | ✅ Integrada (imagem placeholder/IA em public/images/hero-lifestyle.jpg; trocar por foto real quando houver) |
| A2 | Fotos nas categorias | Cliente → Claude | ✅ Cards de categoria com imagem (placeholder); páginas de loja ainda sem fachada/equipe |
| A3 | Seção "Favoritos da semana" (4 produtos) | Claude | ✅ Implementada com placeholders + CTA WhatsApp por produto |
| A4 | Micro-polimento: stagger 40ms nos cards, scale no press, transições | Claude | ✅ FadeIn com staggerIndex + active:scale nos cards/botões (respeita reduced-motion) |
| A5 | Fotos reais nos depoimentos | Cliente coleta → Claude | 🟡 Estrutura com avatar pronta (1 foto + fallback de iniciais); depoimentos ainda ilustrativos (P-010) |

## B. Obrigatórios de site profissional

| # | Tarefa | Responsável | Status |
|---|--------|-------------|--------|
| B1 | **Política de Privacidade (LGPD)** em /privacidade (8 seções: coleta, uso, direitos, contato) | Claude | ✅ + data dinâmica e botão "Voltar à home" |
| B2 | Otimizar PNGs da logo (~900KB → ~30KB) | Claude | ⏳ Quick win — ainda pendente |
| B3 | Imagem OG (og-image.jpg 1200x630) + Twitter card | Claude | ✅ Metadados no layout; imagem em public/images/og-image.jpg |
| B4 | Página 404 personalizada com a marca | Claude | ✅ src/app/not-found.tsx |
| B5 | Botão flutuante de WhatsApp (z-50, ≥44px, aria-label, focus-visible) | Claude | ✅ src/components/site/whatsapp-fab.tsx |
| B6 | Analytics: Vercel Analytics + Google Search Console | Claude | 🟡 Vercel Analytics instalado e plugado (@vercel/analytics/next); Search Console pendente do domínio (C1) |
| B7 | Acessibilidade: foco por teclado em botões e links (header, footer, cards, FAB) | Claude | ✅ focus-visible em todos os interativos; Button do shadcn já trazia. Contraste text-navy-100 a revisar |

## C. Bloqueios que só o cliente destrava

| # | Item | Impacto |
|---|------|---------|
| C1 | Registrar domínio oticaacesso.com | Search Console, GMN, OG, e-mail profissional |
| C2 | Endereços completos + horários de Ipu e Reriutaba (P-008) | Páginas de loja, SEO local |
| C3 | Depoimentos reais autorizados + fotos (P-010) | Prova social verdadeira |
| C4 | Confirmar fundação em 2014 (P-009) | Página Sobre |
| C5 | Press kits dos fornecedores (D-007) | Catálogo (Fase 3) |

## Plano da próxima sessão (proposto)

1. Lote rápido: B1 + B2 + B4 + B5 + B6 (site "profissional por baixo do capô")
2. Se as imagens do cliente chegarem: A1 (hero) — o salto visual
3. Na sequência: A3 + A4, e então Fase 3 (catálogo)
