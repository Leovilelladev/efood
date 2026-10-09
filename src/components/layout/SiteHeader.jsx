import styled from 'styled-components'
import { Shell } from '../../styles/global'

const Header = styled.header`
  position: relative;
  z-index: 5;
  background-color: #fff1e5;
  background-image:
    linear-gradient(rgba(255, 255, 255, .18) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, .18) 1px, transparent 1px);
  background-size: 8px 8px;
`

const HeaderInner = styled(Shell)`
  min-height: 160px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 24px;

  @media (max-width: 640px) {
    min-height: 90px;
    grid-template-columns: 1fr auto;
    gap: 16px;
  }
`

const RestaurantsLink = styled.a`
  justify-self: start;
  color: #e56668;
  font-size: 13px;
  font-weight: 700;
  transition: opacity .2s;

  &:hover { opacity: .72; }
`

const Logo = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
  min-width: 106px;
  height: 42px;
  padding: 0 9px;
  border: 3px solid #e56668;
  color: #e56668;
  font-size: 22px;
  font-weight: 900;
  letter-spacing: -1.4px;
  line-height: 1;
`

const CartButton = styled.button`
  justify-self: end;
  padding: 10px 0;
  border: 0;
  background: transparent;
  color: #e56668;
  font-size: 13px;
  font-weight: 700;
  transition: opacity .2s;

  &:hover { opacity: .72; }

  @media (max-width: 640px) {
    grid-column: 1 / -1;
    grid-row: 2;
    justify-self: center;
    padding-top: 0;
  }
`

export function SiteHeader({ count, onOpenCart }) {
  return <Header>
    <HeaderInner>
      <RestaurantsLink href="#menu">Restaurantes</RestaurantsLink>
      <Logo aria-label="efood">efood <span aria-hidden="true">🍴</span></Logo>
      <CartButton type="button" onClick={onOpenCart} aria-label="Abrir carrinho">
        {count} produto(s) no carrinho
      </CartButton>
    </HeaderInner>
  </Header>
}
