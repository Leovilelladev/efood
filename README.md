# efood

Projeto desenvolvido durante o exercício da EBAC, a partir do layout do efood no Figma.

A proposta é criar uma experiência simples para encontrar um restaurante, escolher os pratos e montar um pedido pelo celular ou computador.

## Tecnologias

- React
- React Router
- Styled Components
- Vite

## Como rodar o projeto

Depois de clonar o repositório, instale as dependências e inicie o servidor local:

```bash
npm install
npm run dev
```

Para testar a versão de produção:

```bash
npm run build
npm run preview
```

## O que já está funcionando

- Busca por restaurante ou categoria
- Restaurantes e cardápios carregados pela API da EBAC
- Página com os pratos de cada restaurante
- Modal para escolher a quantidade e comprar um produto
- Carrinho de compras
- Resumo e confirmação do pedido
- Layout adaptado para telas menores

Os dados vêm da API pública usada no exercício:

`https://api-ebac.vercel.app/api/efood/restaurantes`
