import styled from 'styled-components'
import { money } from '../../data/restaurants'

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 20;
  background: rgba(0, 0, 0, .78);
`

const Drawer = styled.aside`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  width: min(360px, 100%);
  height: 100%;
  padding: 32px 24px 24px;
  background: #e56668;
  color: #fff;
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`

const Title = styled.h2`
  margin: 0;
  font-size: 20px;
`

const Close = styled.button`
  width: 34px;
  height: 34px;
  border: 0;
  background: transparent;
  color: #fff;
  font-size: 28px;
  line-height: 1;
`

const Items = styled.div`
  display: grid;
  gap: 8px;
  overflow: auto;
`

const Item = styled.div`
  display: grid;
  grid-template-columns: 64px 1fr auto;
  align-items: center;
  gap: 10px;
  padding: 8px;
  background: #fff4ea;
  color: #e56668;
`

const ItemImage = styled.div`
  width: 64px;
  height: 50px;
  background: ${({ src }) => `url(${src}) center / cover`};
`

const ItemName = styled.strong`
  display: block;
  font-size: 11px;
  line-height: 1.2;
`

const ItemMeta = styled.small`
  display: block;
  margin-top: 4px;
  font-size: 10px;
`

const ItemPrice = styled.span`
  align-self: end;
  font-size: 10px;
  font-weight: 700;
  white-space: nowrap;
`

const Footer = styled.div`
  margin-top: auto;
  padding-top: 24px;
`

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-top: 1px solid rgba(255, 255, 255, .45);
  font-size: 13px;
  font-weight: 700;
`

const ContinueButton = styled.button`
  width: 100%;
  padding: 12px;
  border: 0;
  background: #fff4ea;
  color: #e56668;
  font-size: 12px;
  font-weight: 700;
  transition: background .2s;

  &:hover { background: #fff; }
`

const Empty = styled.p`
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
`

export function CartDrawer({ items, total, onClose }) {
  return <Overlay role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
    <Drawer role="dialog" aria-modal="true" aria-labelledby="cart-title">
      <Top>
        <Title id="cart-title">Seu carrinho</Title>
        <Close type="button" onClick={onClose} aria-label="Fechar carrinho">×</Close>
      </Top>
      {items.length ? <Items>
        {items.map(({ product, quantity }) => <Item key={product.id}>
          <ItemImage src={product.image} />
          <span><ItemName>{product.name}</ItemName><ItemMeta>{quantity} unidade(s)</ItemMeta></span>
          <ItemPrice>{money(product.price * quantity)}</ItemPrice>
        </Item>)}
      </Items> : <Empty>Seu carrinho está vazio. Escolha um prato para começar.</Empty>}
      <Footer>
        <Total><span>Valor total</span><span>{money(total)}</span></Total>
        <ContinueButton type="button">Continuar com a entrega</ContinueButton>
      </Footer>
    </Drawer>
  </Overlay>
}
