export const restaurants = [
  {
    id: 'forno-da-vila', name: 'Forno da Vila', category: 'Pizza', rating: '4,8', time: '30-40 min', delivery: 'Grátis',
    cover: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1200&q=85',
    description: 'Massas artesanais, ingredientes frescos e forno aceso todos os dias.',
    sections: [
      { title: 'Mais pedidos', items: [
        { id: 'marguerita', name: 'Pizza Marguerita', description: 'Molho de tomate, mozzarella fresca, manjericão e azeite.', price: 42.9, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=640&q=85' },
        { id: 'calabresa', name: 'Pizza Calabresa', description: 'Calabresa artesanal, cebola roxa, mozzarella e orégano.', price: 45.9, image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=640&q=85' },
        { id: 'quattro', name: 'Quattro Formaggi', description: 'Mozzarella, gorgonzola, parmesão e provolone.', price: 49.9, image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=640&q=85' },
      ] },
      { title: 'Para acompanhar', items: [
        { id: 'tiramisu', name: 'Tiramisù da casa', description: 'Receita clássica com café, cacau e mascarpone.', price: 18.9, image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=640&q=85' },
        { id: 'limonada', name: 'Limonada siciliana', description: 'Limão siciliano, hortelã e água com gás.', price: 12.9, image: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f4f?auto=format&fit=crop&w=640&q=85' },
      ] },
    ],
  },
  {
    id: 'sabor-de-casa', name: 'Sabor de Casa', category: 'Brasileira', rating: '4,7', time: '25-35 min', delivery: 'R$ 3,90',
    cover: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85',
    description: 'Comida afetiva e bem servida, do jeitinho que você gosta.',
    sections: [{ title: 'Pratos do dia', items: [
      { id: 'parmegiana', name: 'Parmegiana da casa', description: 'Filé empanado, molho de tomate, arroz e fritas.', price: 39.9, image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&w=640&q=85' },
      { id: 'strogonoff', name: 'Strogonoff cremoso', description: 'Frango, molho cremoso, arroz branco e batata palha.', price: 36.9, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=640&q=85' },
    ] }],
  },
  {
    id: 'brasa-burger', name: 'Brasa Burger', category: 'Hambúrguer', rating: '4,9', time: '20-30 min', delivery: 'Grátis',
    cover: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=85',
    description: 'Hambúrguer na brasa, pão macio e aquele molho secreto.',
    sections: [{ title: 'Favoritos da casa', items: [
      { id: 'brasa-classic', name: 'Brasa Classic', description: 'Burger 160g, cheddar, cebola caramelizada e molho da casa.', price: 34.9, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=640&q=85' },
      { id: 'brasa-bacon', name: 'Bacon BBQ', description: 'Burger 160g, bacon crocante, barbecue e coleslaw.', price: 39.9, image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=640&q=85' },
    ] }],
  },
  {
    id: 'verde-bowl', name: 'Verde Bowl', category: 'Saudável', rating: '4,6', time: '20-30 min', delivery: 'R$ 2,90',
    cover: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=85',
    description: 'Combinações leves, coloridas e cheias de sabor.',
    sections: [{ title: 'Bowls montados', items: [
      { id: 'bowl-salmao', name: 'Bowl Salmão Fresh', description: 'Salmão, arroz negro, avocado, edamame e molho cítrico.', price: 44.9, image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=640&q=85' },
      { id: 'bowl-falafel', name: 'Bowl Falafel', description: 'Falafel, homus, quinoa, legumes e tahine.', price: 32.9, image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=640&q=85' },
    ] }],
  },
]

export const categories = [
  { label: 'Todos', emoji: '' }, { label: 'Pizza', emoji: '🍕' }, { label: 'Hambúrguer', emoji: '🍔' },
  { label: 'Brasileira', emoji: '🍛' }, { label: 'Saudável', emoji: '🥗' }, { label: 'Doces', emoji: '🍰' },
]

export const money = (value) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
export const getRestaurant = (id) => restaurants.find((restaurant) => restaurant.id === id) || restaurants[0]
