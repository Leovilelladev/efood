import styled from 'styled-components'
import { RestaurantCard } from './RestaurantCard'

const Grid = styled.div`display: grid; grid-template-columns: repeat(4, 1fr); gap: 21px; @media (max-width: 1020px) { grid-template-columns: repeat(2, 1fr); } @media (max-width: 560px) { grid-template-columns: 1fr; }`
const EmptyState = styled.div`grid-column: 1 / -1; padding: 60px; border: 1px dashed #e6d8d0; border-radius: 16px; text-align: center; color: #897b75;`

export function RestaurantGrid({ restaurants }) {
  if (!restaurants.length) return <EmptyState>Nenhum restaurante encontrado. Tente outra busca.</EmptyState>
  return <Grid>{restaurants.map((restaurant) => <RestaurantCard key={restaurant.id} restaurant={restaurant} />)}</Grid>
}
