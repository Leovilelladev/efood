export const restaurants = [
  {
    id: 'la-dolce-vita-trattoria',
    name: 'La Dolce Vita Trattoria',
    category: 'Italiana',
    cover: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=1800&q=85',
    description: 'Autêntica cozinha italiana com massas artesanais, pizzas e sabores que abraçam.',
    sections: [
      {
        title: 'Pizza',
        items: [
          {
            id: 'pizza-marguerita',
            name: 'Pizza Marguerita',
            description: 'A clássica Marguerita: molho de tomate suculento, muçarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade.',
            price: 60,
            image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85',
          },
          {
            id: 'pizza-calabresa',
            name: 'Pizza Marguerita',
            description: 'A clássica Marguerita: molho de tomate suculento, muçarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade.',
            price: 60,
            image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85',
          },
          {
            id: 'pizza-quatro-queijos',
            name: 'Pizza Marguerita',
            description: 'A clássica Marguerita: molho de tomate suculento, muçarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade.',
            price: 60,
            image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85',
          },
          {
            id: 'pizza-presunto-cogumelos',
            name: 'Pizza Marguerita',
            description: 'A clássica Marguerita: molho de tomate suculento, muçarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade.',
            price: 60,
            image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85',
          },
          {
            id: 'pizza-portuguesa',
            name: 'Pizza Marguerita',
            description: 'A clássica Marguerita: molho de tomate suculento, muçarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade.',
            price: 60,
            image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85',
          },
          {
            id: 'pizza-frango-catupiry',
            name: 'Pizza Marguerita',
            description: 'A clássica Marguerita: molho de tomate suculento, muçarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade.',
            price: 60,
            image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85',
          },
        ],
      },
    ],
  },
  {
    id: 'hoki-sushi',
    name: 'Hoki Sushi',
    category: 'Japonesa',
    cover: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=1800&q=85',
    description: 'Peças frescas e combinações especiais preparadas todos os dias.',
    sections: [{
      title: 'Mais pedidos',
      items: [{
        id: 'combo-salmao',
        name: 'Combo Salmão',
        description: 'Salmão fresco, arroz japonês, nori e acompanhamentos da casa.',
        price: 48,
        image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=85',
      }],
    }],
  },
]

export const getRestaurant = (id) => restaurants.find((restaurant) => restaurant.id === id) || restaurants[0]

export const money = (value) => value.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})
