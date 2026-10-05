import { Link, NavLink, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useCart } from '../../context/CartContext'
import { Shell } from '../../styles/global'

const Header = styled.header`position: sticky; top: 0; z-index: 20; border-bottom: 1px solid rgba(47, 29, 29, 0.08); background: rgba(255, 250, 247, 0.94); backdrop-filter: blur(16px);`
const HeaderInner = styled(Shell)`height: 76px; display: flex; align-items: center; gap: 30px;`
const Logo = styled(Link)`display: inline-flex; color: #292323; font-size: 23px; font-weight: 800; letter-spacing: -1.2px;`
const HeaderNav = styled.nav`
  display: flex; gap: 24px; align-items: center; margin-right: auto;
  a { color: #766b67; font-size: 14px; font-weight: 600; transition: color .2s; }
  a.active, a:hover { color: #e94d4d; }
  @media (max-width: 800px) { display: none; }
`
const CartButton = styled.button`
  display: flex; align-items: center; gap: 8px; padding: 8px; border: 0; background: transparent; color: #292323; font-size: 14px; font-weight: 700;
  .icon { font-size: 20px; }
  .badge { display: grid; place-items: center; min-width: 20px; height: 20px; border-radius: 20px; background: #e94d4d; color: white; font-size: 11px; }
`

export function SiteHeader() {
  const { count } = useCart()
  const navigate = useNavigate()
  return <Header><HeaderInner>
    <Logo to="/">efood</Logo>
    <HeaderNav><NavLink to="/">Início</NavLink><NavLink to="/?category=Pizza">Restaurantes</NavLink><NavLink to="/checkout">Pedidos</NavLink></HeaderNav>
    <CartButton type="button" onClick={() => navigate('/checkout')} aria-label="Abrir carrinho"><span className="icon">🛍</span><span>Seu pedido</span>{count > 0 && <span className="badge">{count}</span>}</CartButton>
  </HeaderInner></Header>
}
