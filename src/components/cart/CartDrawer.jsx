import { useState } from 'react'
import styled from 'styled-components'
import { useCart } from '../../context/CartContext'
import { money } from '../../data/restaurants'
import { useDialog } from '../../hooks/useDialog'
import { Button } from '../ui/Button'
import { DeliveryForm, OrderConfirmation, PaymentForm } from './CheckoutForms'

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  background: rgb(0 0 0 / 80%);
`

const Drawer = styled.aside`
  position: absolute;
  top: 0;
  right: 0;
  width: min(360px, 100%);
  height: 100%;
  overflow-y: auto;
  padding: 32px 8px;
  background: var(--salmon);
  color: var(--cream);
  outline: none;
  .items { display: grid; gap: 16px; }
  .total { display: flex; justify-content: space-between; margin: 40px 0 16px; font-size: 14px; font-weight: 700; line-height: 16px; }
  .continue { width: 100%; }
  .empty { margin: 0 0 24px; font-size: 14px; line-height: 22px; }
  .accessible-close:focus { position: fixed; top: 4px; right: 8px; width: auto; height: auto; clip: auto; padding: 4px; background: var(--cream); color: var(--salmon); }
`

const Item = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
  height: 100px;
  padding: 8px;
  background: var(--cream);
  color: var(--salmon);
  .photo { width: 80px; height: 80px; object-fit: cover; }
  h3 { margin: 0 0 16px; font-size: 18px; font-weight: 900; line-height: 21px; }
  p { margin: 0; font-size: 14px; line-height: 22px; }
  button { position: absolute; right: 8px; bottom: 8px; padding: 0; border: 0; background: transparent; }
  button img { width: 16px; height: 16px; }
`

export function CartDrawer({ onClose, initialStep = 'cart' }) {
  const { items, updateItem, total, clearCart } = useCart()
  const [step, setStep] = useState(items.length ? initialStep : 'cart')
  const [delivery, setDelivery] = useState({})
  const [orderId, setOrderId] = useState('')
  const dialog = useDialog(onClose, step)

  function confirmOrder() {
    setOrderId(`DEMO-${Date.now().toString().slice(-6)}`)
    clearCart()
    setStep('confirmation')
  }

  return <Overlay onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
    <Drawer ref={dialog} tabIndex={-1} role="dialog" aria-modal="true" aria-labelledby="cart-title">
      <button className="sr-only accessible-close" type="button" onClick={onClose}>Fechar carrinho</button>
      {step === 'cart' && <>
        <h2 id="cart-title" className="sr-only">Seu carrinho</h2>
        {items.length ? <>
          <div className="items">
            {items.flatMap(({ product, quantity }) => Array.from({ length: quantity }, (_, index) =>
              <Item key={`${product.id}-${index}`}>
                <img className="photo" src={product.image} alt={product.name} />
                <div><h3>{product.name}</h3><p>{money(product.price)}</p></div>
                <button type="button" onClick={() => updateItem(product.id, -1)} aria-label={`Remover ${product.name}`}><img src="/figma/lixeira.png" alt="" /></button>
              </Item>
            ))}
          </div>
          <div className="total"><span>Valor total</span><span>{money(total)}</span></div>
          <Button className="continue" type="button" onClick={() => setStep('delivery')}>Continuar com a entrega</Button>
        </> : <>
          <p className="empty">Seu carrinho está vazio. Adicione um produto para continuar.</p>
          <Button className="continue" type="button" onClick={onClose}>Voltar ao cardápio</Button>
        </>}
      </>}
      {step === 'delivery' && <DeliveryForm value={delivery} onBack={() => setStep('cart')} onContinue={(value) => { setDelivery(value); setStep('payment') }} />}
      {step === 'payment' && <PaymentForm total={total} onBack={() => setStep('delivery')} onConfirm={confirmOrder} />}
      {step === 'confirmation' && <OrderConfirmation orderId={orderId} onFinish={onClose} />}
    </Drawer>
  </Overlay>
}
