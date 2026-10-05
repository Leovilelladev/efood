import { useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { getRestaurant } from '../data/restaurants'
import { useCart } from '../context/CartContext'
import { Page, Shell } from '../styles/global'
import { SiteHeader } from '../components/layout/SiteHeader'
import { OrderSummary } from '../components/cart/OrderSummary'
import { Toast } from '../components/feedback/Toast'
import { ProductSection } from '../components/restaurant/ProductSection'
import { RestaurantHero } from '../components/restaurant/RestaurantHero'

const Main = styled.main`
  padding: 62px 0 110px;
  .detail-layout { display: grid; grid-template-columns: minmax(0, 1fr) 300px; gap: 68px; align-items: start; }
  @media (max-width: 850px) { .detail-layout { grid-template-columns: 1fr; gap: 30px; } }
`

export function RestaurantPage() {
  const { id } = useParams()
  const restaurant = getRestaurant(id)
  const { addItem } = useCart()
  const [addedProduct, setAddedProduct] = useState('')

  function handleAdd(product) {
    addItem(restaurant, product)
    setAddedProduct(product.name)
    window.setTimeout(() => setAddedProduct(''), 1600)
  }

  return <Page><SiteHeader /><RestaurantHero restaurant={restaurant} /><Main><Shell><div className="detail-layout"><div>{restaurant.sections.map((section) => <ProductSection key={section.title} category={restaurant.category} section={section} onAdd={handleAdd} />)}</div><OrderSummary /></div></Shell></Main>{addedProduct && <Toast>{addedProduct} adicionado ao pedido</Toast>}</Page>
}
