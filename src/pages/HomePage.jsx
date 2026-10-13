import styled from 'styled-components'
import { figmaRestaurants } from '../data/figmaRestaurants'
import { Page, Shell } from '../styles/global'
import { SiteFooter } from '../components/layout/SiteFooter'
import { SiteHeader } from '../components/layout/SiteHeader'
import { RestaurantGrid } from '../components/home/RestaurantGrid'

const Main = styled.main`
  padding: 80px 0 120px;
  @media (max-width: 600px) { padding: 48px 0 72px; }
`

export function HomePage() {
  return <Page>
    <SiteHeader home />
    <Main id="restaurants" aria-label="Restaurantes"><Shell><RestaurantGrid restaurants={figmaRestaurants} /></Shell></Main>
    <SiteFooter />
  </Page>
}
