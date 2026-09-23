# Adicionar fotos aos carrosséis

As páginas projetos/okan.html, projetos/ecommerce.html e projetos/voz-amiga.html têm quatro espaços na seção “Explore o projeto”. Os links de código ficam abaixo da galeria e não mudam quando as fotos passam. As áreas “Imagem em breve” são placeholders, sem pedidos de arquivos inexistentes.

## Colocar suas imagens

1. Salve as imagens na pasta do projeto:
   - assets/images/projects/okan/
   - assets/images/projects/ecommerce/
   - assets/images/projects/voz-amiga/
2. Use os nomes 01.webp, 02.webp, 03.webp e 04.webp. PNG/JPG também funcionam se você ajustar o caminho no HTML.
3. Abra a página correspondente em projetos/ e procure FOTO 1, FOTO 2 etc.
4. Em cada slide, remova o bloco inteiro `<div class="media-placeholder">...</div>`.
5. Ative o bloco `<a class="media-image">...</a>` fornecido no comentário: copie-o para fora do comentário HTML. Não deixe as instruções soltas na página.
6. Ajuste o atributo alt para descrever a captura, width/height para as dimensões reais e figcaption para a legenda que aparece abaixo.

Exemplo de um slide preenchido do Okan (troque o texto para corresponder à sua imagem):

```html
<figure class="media-slide" role="group" aria-roledescription="slide" aria-label="1 de 4">
  <a class="media-image" href="../assets/images/projects/okan/01.webp"
     target="_blank" rel="noopener" aria-label="Ampliar: planejamento semanal de treinos">
    <img src="../assets/images/projects/okan/01.webp"
         alt="Tela do Okan mostrando o planejamento de treinos por dia da semana"
         width="1600" height="1000" loading="lazy" decoding="async">
  </a>
  <figcaption>Planejamento semanal de treinos.</figcaption>
</figure>
```

O clique abre a imagem original em outra aba para ampliar. A imagem usa object-fit: contain: capturas verticais e horizontais ficam inteiras, sem cortes. Evite imagens muito pesadas; WebP com boa legibilidade costuma funcionar bem.

## Adicionar ou retirar slides

Duplique ou remova um bloco completo `<figure class="media-slide">...</figure>`. O JavaScript atualiza a contagem automaticamente. Com uma única imagem, os controles desaparecem. Sem JavaScript, a galeria continua acessível por rolagem horizontal.

Não coloque os links de código dentro dos slides. Não há avanço automático. É possível navegar pelas setas, pelo gesto de deslizar e, com a área da galeria em foco, pelas teclas esquerda/direita, Home e End. A preferência de redução de movimento é respeitada.

## Conferir

Abra index.html ou execute `npm run dev` dentro da pasta portfolio. Entre no case e confira as imagens, legendas, setas, ampliação e layout no celular. Execute `npm run build` antes de publicar. Os placeholders dos demais lugares (capa e cards da Home) permanecem independentes desta galeria.
