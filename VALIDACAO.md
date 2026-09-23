# Validação da primeira versão

Data: 23/09/2026.

## Verificações executadas

- Build local concluído sem dependências externas.
- Build com SITE_URL em subdiretório local: quatro URLs no sitemap e canonical/og:url nas quatro páginas.
- Links de arquivos e âncoras internas existentes nas quatro páginas.
- Exatamente um H1 em cada página.
- Sintaxe JavaScript validada com node --check.
- Contrastes calculados: texto escuro sobre terracota 4,55:1; texto secundário sobre superfície escura 8,35:1; texto principal sobre superfície escura 15,45:1.
- Revisão de código: HTML semântico, foco visível, link de salto, menu com aria-expanded e Escape, navegação disponível sem JavaScript, regras mobile/tablet/desktop e prefers-reduced-motion.

## Limitações e próximos testes

A inspeção visual e os testes interativos de teclado, menu, zoom e responsividade não foram concluídos: o ambiente não possuía o navegador do Playwright e a tentativa de obter o navegador falhou. As regras correspondentes estão implementadas, mas isso não substitui testes em navegador real.

Não houve publicação no GitHub Pages, validação de URLs externas, avaliação com leitor de tela nem verificação da disponibilidade dos projetos em lojas. São tarefas pendentes. Nenhuma métrica de adoção ou resultado foi criada.

O README contém checklist manual e lista completa de conteúdo pendente. A revisão final com Arthur é necessária para confirmar o conteúdo dos cases e substituir as composições por imagens dos produtos.

## Atualização dos carrosséis

As três páginas receberam carrosséis com quatro placeholders editáveis e links de código fora dos slides. Build aprovado. Testes em Chromium headless aprovados nas larguras 360, 768 e 1440 px: setas, tecla End, retorno da última foto para a primeira, ausência de overflow horizontal da página e de erros JavaScript. Fallback sem JavaScript verificado; inspeção visual da área realizada. As mídias reais ainda serão fornecidas pelo proprietário.
