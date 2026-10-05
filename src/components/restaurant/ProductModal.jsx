import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { money } from '../../data/restaurants'

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 40;
  display: grid;
  place-items: center;
  padding: 20px;
  background: rgba(41, 35, 35, .58);
`

const Dialog = styled.div`
  width: min(560px, 100%);
  overflow: hidden;
  border-radius: 16px;
  background: #fffaf7;
  box-shadow: 0 24px 60px rgba(41, 35, 35, .24);
  .photo { width: 100%; height: 230px; object-fit: cover; display: block; }
  .content { padding: 24px; }
  .top { display: flex; justify-content: space-between; gap: 16px; align-items: start; }
  h2 { margin: 0 0 8px; font-size: 24px; }
  p { margin: 0 0 16px; color: #756862; font-size: 14px; line-height: 1.55; }
  .portion { color: #897b75; font-size: 12px; }
  .close { width: 32px; height: 32px; border: 0; border-radius: 50%; background: #f4e8e3; color: #292323; font-size: 18px; }
  .bottom { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-top: 24px; }
  .quantity { display: flex; align-items: center; gap: 15px; }
  .quantity button { width: 31px; height: 31px; border: 1px solid #efc7bd; border-radius: 50%; background: #fff; color: #e94d4d; font-size: 18px; }
  .quantity span { min-width: 15px; text-align: center; font-weight: 700; }
  .buy { padding: 13px 18px; border: 0; border-radius: 8px; background: #e94d4d; color: #fff; font-weight: 700; }
  @media (max-width: 520px) { .photo { height: 180px; } .bottom { align-items: stretch; flex-direction: column; } .buy { width: 100%; } }
`

export function ProductModal({ restaurant, product, onClose, onConfirm }) {
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return <Overlay onClick={onClose}>
    <Dialog role="dialog" aria-modal="true" aria-labelledby="product-title" onClick={(event) => event.stopPropagation()}>
      <img className="photo" src={product.image} alt={product.name} />
      <div className="content">
        <div className="top"><div><h2 id="product-title">{product.name}</h2><p>{product.description}</p><span className="portion">Serve {product.portion.toLowerCase()}</span></div><button className="close" type="button" onClick={onClose} aria-label="Fechar">×</button></div>
        <div className="bottom"><div className="quantity" aria-label="Quantidade"><button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))}>−</button><span>{quantity}</span><button type="button" onClick={() => setQuantity((value) => value + 1)}>+</button></div><button className="buy" type="button" onClick={() => onConfirm(restaurant, product, quantity)}>Adicionar · {money(product.price * quantity)}</button></div>
      </div>
    </Dialog>
  </Overlay>
}
