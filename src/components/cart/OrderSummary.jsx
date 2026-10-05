import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { money } from '../../data/restaurants'
import { useCart } from '../../context/CartContext'

const Aside = styled.aside`
  position: sticky; top: 99px; padding: 22px; border: 1px solid #ecdfda; border-radius: 16px; background: #fff;
  h3 { margin: 0 0 18px; font-size: 17px; }
  .empty { color: #968881; font-size: 13px; line-height: 1.5; }
  .item { display: grid; grid-template-columns: 24px 1fr auto; gap: 10px; padding: 12px 0; border-bottom: 1px solid #f1e8e3; font-size: 12px; }
  .quantity { color: #e94d4d; font-weight: 800; }
  .item strong { display: block; margin-bottom: 4px; font-size: 12px; }
  .item small { color: #948680; }
  .totals { display: grid; gap: 10px; margin-top: 18px; color: #847670; font-size: 12px; }
  .total { display: flex; justify-content: space-between; margin-top: 4px; color: #292323; font-size: 16px; font-weight: 800; }
  .cta { width: 100%; margin-top: 18px; padding: 13px; border: 0; border-radius: 8px; background: #e94d4d; color: #fff; font-weight: 700; }
  @media (max-width: 850px) { position: static; }
`

export function OrderSummary({ compact = false }) {
  const { items, subtotal, delivery, total } = useCart()
  const navigate = useNavigate()
  return <Aside><h3>{compact ? 'Resumo do pedido' : 'Seu pedido'}</h3>
    {items.length === 0 ? <p className="empty">Seu carrinho está vazio por enquanto.</p> : <>
      {items.map((item) => <div className="item" key={item.product.id}><span className="quantity">{item.quantity}×</span><span><strong>{item.product.name}</strong><small>{item.restaurantName}</small></span><span>{money(item.product.price * item.quantity)}</span></div>)}
      <div className="totals"><span>Subtotal <b>{money(subtotal)}</b></span><span>Entrega <b>{delivery ? money(delivery) : 'Grátis'}</b></span><span className="total">Total <b>{money(total)}</b></span></div>
      {!compact && <button className="cta" type="button" onClick={() => navigate('/checkout')}>Continuar pedido</button>}
    </>}
  </Aside>
}
