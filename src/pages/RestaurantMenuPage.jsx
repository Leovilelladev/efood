import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useCart } from '../context/CartContext'
import { getRestaurant } from '../data/restaurants'
import { Page, Shell } from '../styles/global'
import { SiteHeader } from '../components/layout/SiteHeader'
import { ProductCard } from '../components/restaurant/ProductCard'
import { ProductModal } from '../components/restaurant/ProductModal'
import { CartDrawer } from '../components/cart/CartDrawer'

const RestaurantHero = styled.section`
  position: relative;
  height: 280px;
  background: ${({ src }) => `url(${src}) center / cover`};

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, .06), rgba(0, 0, 0, .62));
  }
`

const HeroContent = styled(Shell)`
  position: relative;
  z-index: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 30px;
  color: #fff;
`

const Category = styled.span`
  margin-bottom: auto;
  padding-top: 30px;
  font-size: 14px;
  font-weight: 500;
`

const RestaurantName = styled.h1`
  margin: 0;
  font-size: clamp(28px, 4vw, 42px);
  font-weight: 700;
  line-height: 1.05;
`

const Menu = styled.main`
  padding: 16px 0 72px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 920px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`

const Notice = styled.div`
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 40;
  padding: 12px 16px;
  background: #e56668;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  box-shadow: 0 8px 24px rgba(79, 21, 21, .18);
`

export function RestaurantMenuPage() {
  const { id } = useParams()
  const restaurant = getRestaurant(id)
  const { items, addItem, count, total } = useCart()
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [cartOpen, setCartOpen] = useState(false)
  const [notice, setNotice] = useState('')
  const products = useMemo(() => restaurant.sections.flatMap((section) => section.items), [restaurant])

  function showNotice(message) {
    setNotice(message)
    window.clearTimeout(showNotice.timer)
    showNotice.timer = window.setTimeout(() => setNotice(''), 1800)
  }

  function handleAdd(product) {
    addItem(restaurant, product)
    setSelectedProduct(null)
    showNotice(`${product.name} adicionado ao carrinho`)
  }

  return <Page>
    <SiteHeader count={count} onOpenCart={() => setCartOpen(true)} />
    <RestaurantHero src={restaurant.cover}>
      <HeroContent>
        <Category>{restaurant.category}</Category>
        <RestaurantName>{restaurant.name}</RestaurantName>
      </HeroContent>
    </RestaurantHero>
    <Menu id="menu">
      <Shell><Grid>{products.map((product) => <ProductCard key={product.id} product={product} onOpen={setSelectedProduct} />)}</Grid></Shell>
    </Menu>
    {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} onAdd={handleAdd} />}
    {cartOpen && <CartDrawer items={items} total={total} onClose={() => setCartOpen(false)} />}
    {notice && <Notice role="status">{notice}</Notice>}
  </Page>
}
