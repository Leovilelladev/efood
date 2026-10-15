import styled from 'styled-components'
import { useRestaurants } from '../hooks/useRestaurants'
import { Page, Shell } from '../styles/global'
import { SiteFooter } from '../components/layout/SiteFooter'
import { SiteHeader } from '../components/layout/SiteHeader'
import { RestaurantGrid } from '../components/home/RestaurantGrid'
import { StatusMessage } from '../components/ui/StatusMessage'
import { Button } from '../components/ui/Button'

const Main = styled.main`
  padding: 80px 0 120px;
  @media (max-width: 600px) { padding: 48px 0 72px; }
`

export function HomePage() {
  const { restaurants, loading, error, reload } = useRestaurants()

  return <Page>
    <SiteHeader home />
    <Main id="restaurants" aria-label="Restaurantes" aria-busy={loading}>
      <Shell>
        {loading && <StatusMessage>Carregando restaurantes...</StatusMessage>}
        {!loading && error && <StatusMessage>
          {error}<br /><Button type="button" onClick={reload}>Tentar novamente</Button>
        </StatusMessage>}
        {!loading && !error && restaurants.length > 0 && <RestaurantGrid restaurants={restaurants} />}
        {!loading && !error && restaurants.length === 0 && <StatusMessage>Nenhum restaurante disponível no momento.</StatusMessage>}
      </Shell>
    </Main>
    <SiteFooter />
  </Page>
}
