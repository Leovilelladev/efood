import { useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useCart } from '../context/CartContext'
import { useRestaurants } from '../hooks/useRestaurants'
import { Page, Shell } from '../styles/global'
import { SiteHeader } from '../components/layout/SiteHeader'
import { OrderSummary } from '../components/cart/OrderSummary'
import { Toast } from '../components/feedback/Toast'
import { ProductModal } from '../components/restaurant/ProductModal'
import { ProductSection } from '../components/restaurant/ProductSection'
import { RestaurantHero } from '../components/restaurant/RestaurantHero'
import { StatusMessage } from '../components/ui/StatusMessage'

const Main = styled.main`
  padding: 62px 0 110px;
  .detail-layout { display: grid; grid-template-columns: minmax(0, 1fr) 300px; gap: 68px; align-items: start; }
  @media (max-width: 850px) { .detail-layout { grid-template-columns: 1fr; gap: 30px; } }
`

export function RestaurantPage() {
  const { id } = useParams()
  const { restaurants, loading, error } = useRestaurants()
  const { addItem } = useCart()
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [addedProduct, setAddedProduct] = useState('')
  const restaurant = restaurants.find((item) => item.id === id)

  function handleConfirm(restaurantData, product, quantity) {
    addItem(restaurantData, product, quantity)
    setSelectedProduct(null)
    setAddedProduct(product.name)
    window.setTimeout(() => setAddedProduct(''), 1600)
  }

  return <Page><SiteHeader />
    {loading && <Main><Shell><StatusMessage>Carregando o cardápio...</StatusMessage></Shell></Main>}
    {!loading && (error || !restaurant) && <Main><Shell><StatusMessage>{error || 'Restaurante não encontrado.'}</StatusMessage></Shell></Main>}
    {!loading && !error && restaurant && <>
      <RestaurantHero restaurant={restaurant} />
      <Main><Shell><div className="detail-layout"><div>{restaurant.sections.map((section) => <ProductSection key={section.title} category={restaurant.category} section={section} onBuy={setSelectedProduct} />)}</div><OrderSummary /></div></Shell></Main>
    </>}
    {selectedProduct && restaurant && <ProductModal restaurant={restaurant} product={selectedProduct} onClose={() => setSelectedProduct(null)} onConfirm={handleConfirm} />}
    {addedProduct && <Toast>{addedProduct} adicionado ao pedido</Toast>}
  </Page>
}
