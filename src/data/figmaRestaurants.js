const pizza = {
  name: 'Pizza Marguerita',
  description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
  details: 'A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.',
  price: 60.9,
  portion: 'de 2 a 3 pessoas',
  image: '/figma/pizza.png',
}

export const trattoria = {
  id: 'la-dolce-vita-trattoria',
  name: 'La Dolce Vita Trattoria',
  category: 'Italiana',
  rating: '4.6',
  cover: '/figma/italiana.png',
  description: 'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você!\nDesfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo\nno conforto do seu lar. Entrega rápida, pratos bem embalados e sabor\ninesquecível. Peça já!',
  sections: [{ title: 'Cardápio', items: Array.from({ length: 6 }, (_, index) => ({ ...pizza, id: `marguerita-${index + 1}` })) }],
}

export const sushi = {
  id: 'hioki-sushi',
  name: 'Hioki Sushi',
  category: 'Japonesa',
  rating: '4.9',
  featured: true,
  cover: '/figma/sushi.png',
  description: 'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis\nfrescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega\nrápida, embalagens cuidadosas e qualidade garantida.\nExperimente o Japão sem sair do lar com nosso delivery!',
  sections: [],
}

// A repetição dos cinco restaurantes italianos faz parte do frame Home.
export const figmaRestaurants = [sushi, ...Array.from({ length: 5 }, () => trattoria)]

export function getFigmaRestaurant(id) {
  if (id === trattoria.id) return trattoria
  if (id === sushi.id || id === 'hoki-sushi') return sushi
  return null
}
