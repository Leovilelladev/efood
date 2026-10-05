export const RESTAURANTS_API = 'https://api-ebac.vercel.app/api/efood/restaurantes'

export const money = (value) => value.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})

function titleCase(value) {
  return value ? value.charAt(0).toUpperCase() + value.slice(1) : ''
}

function normalizeProduct(product) {
  return {
    id: String(product.id),
    name: product.nome,
    description: product.descricao,
    price: product.preco,
    portion: product.porcao,
    image: product.foto,
  }
}

export function normalizeRestaurant(restaurant) {
  return {
    id: String(restaurant.id),
    name: restaurant.titulo,
    category: titleCase(restaurant.tipo),
    rating: Number(restaurant.avaliacao).toLocaleString('pt-BR', { minimumFractionDigits: 1 }),
    time: '30-45 min',
    delivery: restaurant.destacado ? 'Grátis' : 'R$ 5,90',
    featured: restaurant.destacado,
    cover: restaurant.capa,
    description: restaurant.descricao,
    sections: [{ title: 'Cardápio', items: restaurant.cardapio.map(normalizeProduct) }],
  }
}

export async function fetchRestaurants() {
  const response = await fetch(RESTAURANTS_API)
  if (!response.ok) throw new Error('Não foi possível carregar os restaurantes.')

  const data = await response.json()
  return data.map(normalizeRestaurant)
}

export function getCategories(restaurants) {
  return ['Todos', ...new Set(restaurants.map((restaurant) => restaurant.category))]
}
