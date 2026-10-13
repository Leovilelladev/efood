import styled from 'styled-components'
import { RestaurantCard } from './RestaurantCard'

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 48px 80px;
  @media (max-width: 1055px) { column-gap: 32px; }
  @media (max-width: 850px) { grid-template-columns: minmax(0, 472px); justify-content: center; }
`

export function RestaurantGrid({ restaurants }) {
  return <Grid>{restaurants.map((restaurant, index) => <RestaurantCard key={`${restaurant.id}-${index}`} restaurant={restaurant} />)}</Grid>
}
