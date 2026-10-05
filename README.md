# efood — exercício EBAC

Implementação responsiva do layout efood com React, Styled Components e React Router.

## Rodando localmente

```bash
npm install
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

## Publicando na Vercel

1. Suba este projeto para um repositório no GitHub.
2. Entre em [vercel.com](https://vercel.com) e escolha **Add New Project**.
3. Importe o repositório e mantenha `npm run build` como comando de build.
4. Use `dist` como diretório de saída. A configuração em `vercel.json` mantém as rotas do React Router funcionando após o deploy.

## Rotas disponíveis

- `/` — home com busca e categorias
- `/restaurant/forno-da-vila` — detalhes do restaurante e produtos
- `/checkout` — formulário e resumo do pedido

Os restaurantes e produtos são dados mockados para a entrega do exercício e podem ser trocados por uma API posteriormente.
