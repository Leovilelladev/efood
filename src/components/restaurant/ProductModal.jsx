import styled from 'styled-components'
import { money } from '../../data/restaurants'
import { useDialog } from '../../hooks/useDialog'
import { Button } from '../ui/Button'

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 40;
  overflow-y: auto;
  padding: clamp(24px, calc(50dvh - 172px), 490px) 16px 24px;
  background: rgb(0 0 0 / 80%);
  @media (max-width: 800px) { padding-top: 24px; }
`

const Dialog = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr);
  gap: 24px;
  width: min(1024px, 100%);
  min-height: 344px;
  margin-inline: auto;
  padding: 32px;
  background: var(--salmon);
  color: #fff;
  outline: none;
  .photo { width: 280px; height: 280px; object-fit: cover; }
  h2 { margin: 0 0 16px; font-size: 18px; font-weight: 900; line-height: 21px; }
  p { margin: 0; font-size: 14px; line-height: 22px; }
  .portion { margin-top: 22px; margin-bottom: 16px; }
  .close { position: absolute; top: 8px; right: 8px; padding: 0; border: 0; background: transparent; }
  .close img { width: 16px; height: 16px; }
  .add { width: 218px; padding-inline: 0; white-space: nowrap; }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    padding: 32px 24px 24px;
    .photo { width: 100%; height: 240px; }
    .add { max-width: 100%; }
  }
`

export function ProductModal({ restaurant, product, onClose, onConfirm }) {
  const dialog = useDialog(onClose)
  return <Overlay onMouseDown={(event) => { if (event.target === event.currentTarget) onClose() }}>
    <Dialog ref={dialog} tabIndex={-1} role="dialog" aria-modal="true" aria-labelledby="product-title">
      <button className="close" type="button" onClick={onClose} aria-label="Fechar produto"><img src="/figma/fechar.png" alt="" /></button>
      <img className="photo" src={product.image} alt={product.name} />
      <div>
        <h2 id="product-title">{product.name}</h2>
        <p>{product.details || product.description}</p>
        <p className="portion">Serve: {product.portion}</p>
        <Button className="add" type="button" onClick={() => onConfirm(restaurant, product, 1)}>Adicionar ao carrinho - {money(product.price)}</Button>
      </div>
    </Dialog>
  </Overlay>
}
