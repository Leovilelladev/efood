import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useCart } from '../hooks/useCart'
import { trattoria } from '../data/figmaRestaurants'
import { useRestaurants } from '../hooks/useRestaurants'
import { Page, Shell } from '../styles/global'
import { SiteHeader } from '../components/layout/SiteHeader'
import { SiteFooter } from '../components/layout/SiteFooter'
import { CartDrawer } from '../components/cart/CartDrawer'
import { ProductModal } from '../components/restaurant/ProductModal'
import { ProductCard } from '../components/restaurant/ProductCard'
import { RestaurantHero } from '../components/restaurant/RestaurantHero'
import { Button } from '../components/ui/Button'
import { StatusMessage } from '../components/ui/StatusMessage'

const Main = styled.main`
  padding: 56px 0 120px;
  @media (max-width: 600px) { padding: 40px 0 72px; }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;
  @media (max-width: 1055px) { grid-template-columns: repeat(2, minmax(0, 320px)); justify-content: center; }
  @media (max-width: 700px) { grid-template-columns: minmax(0, 320px); }
`

export function RestaurantPage({ checkout = false }) {
  const { id } = useParams()
  const { restaurants, loading, error, reload } = useRestaurants()
  const restaurant = checkout
    ? trattoria
    : restaurants.find((item) => item.id === String(id))
  const { addItem } = useCart()
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [cartOpen, setCartOpen] = useState(checkout)
  const products = restaurant?.sections.flatMap((section) => section.items) || []

  function handleConfirm(restaurantData, product, quantity) {
    addItem(restaurantData, product, quantity)
    setSelectedProduct(null)
    setCartOpen(true)
  }

  return <Page>
    <SiteHeader onOpenCart={() => setCartOpen(true)} />
    {restaurant && <RestaurantHero restaurant={restaurant} />}
    <Main><Shell aria-busy={loading && !restaurant}>
      {!restaurant && loading && <StatusMessage>Carregando restaurante...</StatusMessage>}
      {!restaurant && !loading && error && <StatusMessage>
        {error}<br /><Button type="button" onClick={reload}>Tentar novamente</Button>
      </StatusMessage>}
      {!restaurant && !loading && !error && <>
        <p>Restaurante não encontrado.</p>
        <Button as={Link} $primary to="/">Voltar aos restaurantes</Button>
      </>}
      {restaurant && products.length > 0 ? <Grid>{products.map((product) =>
        <ProductCard key={product.id} product={product} onOpen={setSelectedProduct} />
      )}</Grid> : restaurant && <p>O cardápio deste restaurante ainda não está disponível.</p>}
    </Shell></Main>
    <SiteFooter profile />
    {selectedProduct && <ProductModal restaurant={restaurant} product={selectedProduct} onClose={() => setSelectedProduct(null)} onConfirm={handleConfirm} />}
    {cartOpen && <CartDrawer initialStep={checkout ? 'delivery' : 'cart'} onClose={() => setCartOpen(false)} />}
  </Page>
}
