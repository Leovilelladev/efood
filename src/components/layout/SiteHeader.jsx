import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useCart } from '../../context/CartContext'
import { Shell } from '../../styles/global'
import { Brand } from './Brand'

const Header = styled.header`
  position: relative;
  height: ${({ $home }) => $home ? '360px' : '162px'};
  overflow: hidden;
  background-color: var(--cream);
  background-image: ${({ $home }) => `url('/figma/fundo-${$home ? 'home' : 'perfil'}.svg')`};
  background-repeat: repeat-x;
  background-position: 0 ${({ $home }) => $home ? '-24px' : '-23px'};
`

const Navigation = styled(Shell)`
  position: relative;
  padding-top: 59px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
  @media (max-width: 600px) {
    padding-top: 119px;
    font-size: 14px;
    line-height: 16px;
  }
`

const LogoPosition = styled.div`
  position: absolute;
  top: 40px;
  left: calc(50% + .5px);
  transform: translateX(-50%);
`

const Tagline = styled.h1`
  position: absolute;
  top: 236px;
  left: calc(50% + .5px);
  transform: translateX(-50%);
  width: 539px;
  margin: 0;
  font-size: 36px;
  line-height: 42px;
  font-weight: 900;
  text-align: center;
  @media (max-width: 600px) {
    width: calc(100% - 32px);
    font-size: 28px;
    line-height: 34px;
    top: 220px;
  }
`

const CartButton = styled.button`
  border: 0;
  padding: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  text-align: right;
`

export function SiteHeader({ home = false, onOpenCart }) {
  const { count } = useCart()
  return <Header $home={home}>
    {!home && <Navigation aria-label="Navegação principal">
      <Link to="/">Restaurantes</Link>
      <CartButton type="button" onClick={onOpenCart} aria-label={`Abrir carrinho, ${count} produto(s)`}>
        {count} produto(s) no carrinho
      </CartButton>
    </Navigation>}
    <LogoPosition><Brand /></LogoPosition>
    {home && <Tagline>Viva experiências gastronômicas<br />no conforto da sua casa</Tagline>}
  </Header>
}
