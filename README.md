# Portfólio de Arthur Campos

Primeira implementação da especificação v1.0: Home e três estudos de caso, em português, com HTML semântico, CSS modular e JavaScript progressivo. Conteúdo baseado exclusivamente na especificação recebida.

## Executar

Requisito: Node.js 20 ou superior. Não há dependências para instalar.

```sh
npm run dev
```

Abra http://localhost:4173. É possível também abrir index.html diretamente; as rotas e os assets são relativos. Fontes externas usam fallback system-ui quando indisponíveis.

## Build

```sh
npm run build
npm run preview
```

O build copia os arquivos públicos para dist. Defina SITE_URL com o endereço definitivo para gerar sitemap, canonical e og:url. Sem essa variável, o build local mantém o sitemap vazio com TODO explícito. O pipeline de Pages preenche o endereço automaticamente.

Vite é recomendado, mas não obrigatório na especificação. Esta versão usa um build com APIs nativas do Node: nenhum framework, bundler ou dependência é necessário para quatro páginas estáticas. Não há backend, rastreamento ou formulário; o contato usa mailto.

## Publicar no GitHub Pages

1. O código está em [arthurcmps/portfolio](https://github.com/arthurcmps/portfolio), na branch `master`.
2. Em Settings → Pages, selecione GitHub Actions como origem.
3. Faça um push para `master` ou execute o workflow **Publicar portfólio no GitHub Pages** na aba Actions. Ele faz o build e publica `dist`.
4. Confira o endereço fornecido pela execução e valide os links após a publicação.

A atualização do código no GitHub e a publicação do site são etapas distintas: consulte o resultado do workflow para confirmar o deploy.

## Organização

- index.html: Home, serviços, projetos, trajetória, stack e contato.
- projetos/: okan.html, voz-amiga.html e ecommerce.html.
- css/: variables, reset, base, components, sections e responsive.
- js/main.js: menu mobile e carrosséis com teclado, gesto e estados acessíveis.
- assets/images/: espaços reservados para profile, projects e og.
- favicon.svg, robots.txt, sitemap.xml: identidade e descoberta.
- scripts/: servidor local e build sem dependências.
- .github/workflows/deploy.yml: publicação no GitHub Pages.

## Manutenção e conteúdo pendente

1. TODO: screenshots reais dos três produtos. As composições atuais são abstratas e identificadas como conceituais; não representam telas reais.
2. TODO: imagem social PNG/JPEG e metatags og:image/twitter:image com URL definitiva. A metadata textual já existe.
3. TODO: demonstração pública do SaaS E-commerce. O [repositório e o roteiro de testes](https://github.com/arthurcmps/ecommerce-saas) já estão vinculados ao case.
4. TODO: eventual URL da Google Play e confirmação atual da publicação Android do Okan.
5. TODO: nome completo do empregador indicado apenas como “Grupo” no wireframe e detalhamento das datas/funções. O currículo citado não foi anexado.
6. TODO: validar com o autor desafios efetivamente enfrentados, decisões de UX e resultados. Os cases distinguem pontos técnicos do escopo de alegações de experiência ou resultados não documentados.
7. TODO: detalhes das três preferências de acessibilidade do Voz Amiga e estratégia de isolamento do SaaS.
8. TODO: endereço publicado. O build de Pages injeta automaticamente URLs absolutas.

Adicione imagens otimizadas em assets/images/projects, com width/height e alt significativo. Use loading="lazy" fora da primeira tela. Repita alterações de cabeçalho/rodapé nas quatro páginas para manter HTML independente e acessível sem JS.

## Checklist manual de aceite

- [ ] Abrir Home e os três cases em celular, tablet e desktop.
- [ ] Usar Tab, Shift+Tab e Enter; conferir foco e link para pular conteúdo.
- [ ] Abrir menu mobile e fechar com Escape; conferir aria-expanded.
- [ ] Testar com leitor de tela real e zoom de 200%.
- [ ] Ativar redução de movimento e confirmar ausência de transições.
- [ ] Desativar JavaScript e verificar navegação e conteúdo.
- [ ] Conferir contraste, ausência de rolagem horizontal e legibilidade.
- [ ] Revisar imagens e conteúdo profissional com Arthur.
- [ ] Validar URLs externas, e-mail e disponibilidade dos repositórios.
- [ ] Após publicar, conferir canonical, sitemap e compartilhamento social.

Consulte VALIDACAO.md para as verificações efetivamente executadas nesta entrega. Itens desta lista não implicam testes concluídos.

## Carrosséis de imagens

As três páginas de projetos possuem uma galeria com quatro espaços em “Explore o projeto”. Consulte [GUIA_MIDIAS.md](GUIA_MIDIAS.md) para colocar suas fotos e editar as legendas. Navegação por setas, teclado e gesto; sem reprodução automática.
