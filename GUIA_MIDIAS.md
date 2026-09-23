# Mídias dos projetos

As páginas `projetos/okan.html`, `projetos/ecommerce.html` e `projetos/voz-amiga.html` usam as imagens reais armazenadas em `assets/images/projects/`.

O arquivo `js/main.js` mantém o mapa entre cada projeto e suas capturas. Ele substitui os placeholders do HTML pelas imagens reais, atualiza as legendas e também usa a primeira captura como destaque no topo do estudo de caso.

## Arquivos atuais

### Okan

Pasta: `assets/images/projects/okan/`

- `home.jpg` — tela inicial;
- `treino.jpg` — treino em andamento;
- `historico.jpg` — histórico de treinos;
- `evolução.jpg` — evolução e acompanhamento;
- `painel.png` — painel administrativo.

### SaaS E-commerce

Pasta: `assets/images/projects/ecommerce/`

- `vitrine.png` — vitrine da loja;
- `carrinho.png` — carrinho de compras;
- `pedidos.png` — gestão de pedidos;
- `indicadores.png` — dashboard, relatórios e indicadores.

### Voz Amiga

Pasta: `assets/images/projects/voz-amiga/`

- `categorias.png` — categorias de comunicação;
- `frases.png` — frases e pictogramas;
- `favoritos.png` — favoritos;
- `perfil.png` — perfil e preferências.

## Como trocar ou adicionar imagens

1. Adicione o arquivo na pasta do projeto correspondente.
2. Abra `js/main.js`.
3. Localize `projectMedia`.
4. Atualize ou acrescente um item em `slides` com `src`, `alt` e `caption`.
5. Se quiser trocar a imagem de destaque do case, atualize a propriedade `cover`.
6. Se adicionar mais uma captura, adicione também um novo `<figure class="media-slide">` no HTML do projeto. A contagem do carrossel é atualizada automaticamente pelo JavaScript.

As imagens usam `object-fit: contain`, portanto capturas verticais e horizontais aparecem inteiras, sem cortes. Ao clicar em uma captura, a imagem original é aberta em outra aba para visualização ampliada.

## Navegação

Não há avanço automático. O visitante pode navegar:

- pelas setas do carrossel;
- por gesto de deslizar;
- pela rolagem horizontal;
- pelas teclas esquerda/direita, Home e End quando a galeria está em foco.

A preferência `prefers-reduced-motion` é respeitada.

## Conferir antes de publicar

Execute:

```bash
npm run build
```

Para visualizar localmente:

```bash
npm run dev
```

Revise especialmente os três estudos de caso em desktop e celular e confirme se as legendas correspondem às telas exibidas.
