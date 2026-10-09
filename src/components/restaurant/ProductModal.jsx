import styled from 'styled-components'
import { money } from '../../data/restaurants'

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 30;
  display: grid;
  place-items: center;
  padding: 24px;
  background: rgba(0, 0, 0, .78);
`

const Dialog = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 280px 1fr;
  width: min(1024px, 100%);
  padding: 24px;
  gap: 24px;
  background: #e56668;
  color: #fff;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    max-height: calc(100vh - 48px);
    overflow: auto;
  }
`

const Image = styled.div`
  min-height: 280px;
  background: ${({ src }) => `url(${src}) center / cover`};

  @media (max-width: 680px) {
    min-height: 220px;
  }
`

const Copy = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: 4px 4px 0 0;
`

const Close = styled.button`
  position: absolute;
  top: 10px;
  right: 12px;
  width: 32px;
  height: 32px;
  border: 0;
  background: transparent;
  color: #fff;
  font-size: 25px;
  line-height: 1;
`

const Title = styled.h2`
  margin: 0 38px 12px 0;
  font-size: clamp(22px, 3vw, 30px);
  line-height: 1.1;
`

const Description = styled.p`
  max-width: 610px;
  margin: 0;
  font-size: 14px;
  line-height: 1.45;
`

const Price = styled.p`
  margin: auto 0 16px;
  font-size: 14px;
  font-weight: 700;
`

const AddButton = styled.button`
  align-self: flex-start;
  padding: 10px 16px;
  border: 0;
  background: #fff4ea;
  color: #e56668;
  font-size: 12px;
  font-weight: 700;
  transition: background .2s;

  &:hover { background: #fff; }

  @media (max-width: 680px) {
    align-self: stretch;
  }
`

export function ProductModal({ product, onClose, onAdd }) {
  if (!product) return null

  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) onClose()
  }

  return <Overlay role="presentation" onMouseDown={handleOverlayClick}>
    <Dialog role="dialog" aria-modal="true" aria-labelledby="product-title">
      <Close type="button" onClick={onClose} aria-label="Fechar">×</Close>
      <Image src={product.image} role="img" aria-label={product.name} />
      <Copy>
        <Title id="product-title">{product.name}</Title>
        <Description>{product.description}</Description>
        <Price>{money(product.price)}</Price>
        <AddButton type="button" onClick={() => onAdd(product)}>
          Adicionar ao carrinho - {money(product.price)}
        </AddButton>
      </Copy>
    </Dialog>
  </Overlay>
}
