# efood

Projeto desenvolvido durante o exercício da EBAC, a partir do layout do efood no Figma.

A proposta é reproduzir a tela do restaurante apresentada no Figma, com a mesma organização visual, cores, espaçamentos e estados de interação.

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

- Cabeçalho com textura, navegação e contador do carrinho
- Home com chamada principal, restaurantes e rodapé
- Hero do restaurante La Dolce Vita Trattoria
- Grade responsiva com seis cards de Pizza Marguerita
- Modal de detalhes do produto
- Carrinho lateral com total do pedido
- Layout adaptado para telas menores

Os restaurantes e pratos estão cadastrados como dados locais para facilitar a avaliação visual e o teste das interações.

A home fica em `/` e a tela do restaurante em `/restaurant/la-dolce-vita-trattoria`.
