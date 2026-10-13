# efood

Projeto do curso da EBAC feito com React, React Router e Styled Components, seguindo o [layout do Figma](https://www.figma.com/design/JjduV2Tg713TzYUUsees8b/efood?node-id=0-1).

Esta versão usa as fotos, os textos e os restaurantes do layout original. A repetição dos cards italianos e das pizzas faz parte do Figma. Os arquivos da integração com a API da EBAC continuam no projeto, mas não alimentam estas telas.

## Rodando localmente

```bash
npm install
npm run dev
```

Para conferir a versão de produção:

```bash
npm run build
npm run preview
```

## O projeto

A página inicial leva ao perfil do restaurante. No cardápio da Trattoria, os produtos abrem um modal com descrição, porção e preço. A compra segue pelo carrinho, endereço e pagamento.

O checkout é uma demonstração: não envia pedidos, não faz cobranças e não salva dados de cartão. O carrinho fica apenas na memória e é limpo ao recarregar a página. O Figma não traz o cardápio do Hioki Sushi, então esse perfil avisa que o menu ainda não está disponível.

As medidas de desktop seguem o frame de 1366 px, com conteúdo de 1024 px. Em telas menores, as colunas se reorganizam para manter a navegação utilizável.

Logo, fotos, fundo e ícones estão em `public/figma`. A fonte [Roboto](https://github.com/google/fonts/tree/main/ofl/roboto) fica em `public/fonts`, junto de sua licença.
