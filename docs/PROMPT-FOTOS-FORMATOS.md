# Prompt das fotos de formatos de armação

Para os cartões de "Qual formato combina com você?" (8 formatos). Gere **uma imagem
por formato**, separadas, sem texto dentro da imagem (o nome do formato é colocado
pelo site, em código: melhor para SEO, acessibilidade e para editar depois).

## Regras que valem para as 8

- Proporção **3:2 horizontal**, no mínimo **1600 × 1067 px**.
- **Sem nenhum texto, número ou letra** na imagem. **Sem logos** e sem marca
  gravada em armação, estojo, caixa ou objeto de cena.
- **Sem pessoas** (revista/livro ao fundo só com texto ilegível ou páginas vazias).
- Armação **em 3/4**, ao centro e **bem nítida** (foco na armação, fundo levemente
  desfocado). Armação ocupa cerca de 45 % da largura.
- Luz natural suave de janela, cores neutras e quentes (bege, madeira clara,
  mármore), combinando com o azul-marinho e dourado do site.
- Deixe o **canto superior direito mais limpo**: o nome do formato aparece ali,
  sobreposto.

## Prompt base (copie e troque o trecho entre colchetes)

```
Professional e-commerce lifestyle product photo of a pair of eyeglasses, [FORMATO E
MATERIAL], resting at a three-quarter angle on [SUPERFÍCIE], with [OBJETOS DE CENA]
softly out of focus in the background. Soft natural window light, shallow depth of
field, warm neutral palette, premium editorial look, sharp focus on the frames,
realistic reflections on the lenses. Landscape 3:2, 1600x1067. Keep the upper-right
corner relatively clean. No text, no letters, no logos, no brand marks, no people.
```

## Cena de cada formato

| Formato | Trecho para o prompt base |
|---|---|
| Gatinho | black acetate cat-eye frames with thin rose-gold temples; white marble slab on a light oak board; open fashion magazine with blank pages, ceramic beige vase with dried eucalyptus |
| Retangular | slim rectangular metal frames in matte silver; light oak desk; sheets of blank paper and a closed silver pen |
| Aviador | thin double-bridge aviator metal frames in silver-gold; vintage unlabeled paper map, old brass compass and a vintage film camera |
| Quadrado | thick square tortoiseshell acetate frames; raw concrete block; small succulent in a pot and abstract art print, no text |
| Oval | thin rose-gold round-oval metal frames; soft blush-pink silk fabric; a few cherry-blossom petals |
| Geométrico | black thin hexagonal metal frames; geometric paper in grey and beige triangles; a clear crystal prism |
| Redondo | thin round silver metal frames; stack of old leather-bound books with no titles; small ink bottle and a white feather |
| Sobrancelha (browline) | black acetate browline frames with a thin silver lower rim; dark walnut wood table; closed leather notebook with no embossing |

## Cuidado legal (CDC)

Fotos geradas por IA mostram **um estilo de armação, não um produto específico do
estoque**. Por isso o cartão leva o formato (não preço nem modelo) e o clique abre o
WhatsApp para ver o que há disponível. Se preferir, **fotos reais do seu estoque**
(as do Instagram da loja) são ainda melhores: tire de cima, em fundo neutro, 3:2.

## Como colocar no site

1. Salve cada foto em `site/public/images/formatos/` com o nome do formato:
   `gatinho.jpg`, `retangular.jpg`, `aviador.jpg`, `quadrado.jpg`, `oval.jpg`,
   `geometrico.jpg`, `redondo.jpg`, `sobrancelha.jpg`.
2. Em `site/src/components/site/frame-icons.tsx`, preencha `photo` de cada formato
   (ex.: `photo: "/images/formatos/gatinho.jpg"`). Sem `photo`, o cartão mostra a
   silhueta dourada.
3. Ao trocar uma foto, use um **nome novo** de arquivo (o otimizador do Next guarda
   cache por nome).
