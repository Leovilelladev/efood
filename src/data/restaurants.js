export const RESTAURANTS_API = 'https://api-ebac.vercel.app/api/efood/restaurantes'

let restaurantsCache = null
let restaurantsRequest = null

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
    featured: restaurant.destacado,
    cover: restaurant.capa,
    description: restaurant.descricao,
    sections: Array.isArray(restaurant.cardapio) && restaurant.cardapio.length
      ? [{ title: 'Cardápio', items: restaurant.cardapio.map(normalizeProduct) }]
      : [],
  }
}

export function getCachedRestaurants() {
  return restaurantsCache
}

export function fetchRestaurants() {
  if (restaurantsCache) return Promise.resolve(restaurantsCache)
  if (restaurantsRequest) return restaurantsRequest

  restaurantsRequest = (async () => {
    try {
      const response = await fetch(RESTAURANTS_API, {
        headers: { Accept: 'application/json' },
      })
      if (!response.ok) throw new Error('Não foi possível carregar os restaurantes.')

      const data = await response.json()
      if (!Array.isArray(data)) throw new Error('A resposta da API está em um formato inesperado.')

      restaurantsCache = data.map(normalizeRestaurant)
      return restaurantsCache
    } finally {
      restaurantsRequest = null
    }
  })()

  return restaurantsRequest
}

export function getCategories(restaurants) {
  return ['Todos', ...new Set(restaurants.map((restaurant) => restaurant.category))]
}
