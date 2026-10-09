import styled from 'styled-components'

const Card = styled.article`
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: 8px;
  border: 3px solid #e56668;
  background: #e56668;
  color: #fff;
`

const Image = styled.div`
  width: 100%;
  aspect-ratio: 1.78;
  background: ${({ src }) => `url(${src}) center / cover`};
`

const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 10px 2px 2px;
`

const Name = styled.h3`
  margin: 0 0 6px;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.1;
`

const Description = styled.p`
  flex: 1;
  margin: 0 0 12px;
  font-size: 11px;
  line-height: 1.35;
`

const AddButton = styled.button`
  width: 100%;
  padding: 6px 8px;
  border: 0;
  background: #fff4ea;
  color: #e56668;
  font-size: 11px;
  font-weight: 700;
  transition: background .2s, color .2s;

  &:hover { background: #fff; }
  &:active { transform: translateY(1px); }
`

export function ProductCard({ product, onOpen }) {
  return <Card>
    <Image src={product.image} role="img" aria-label={product.name} />
    <Content>
      <Name>{product.name}</Name>
      <Description>{product.description}</Description>
      <AddButton type="button" onClick={() => onOpen(product)}>Adicionar ao carrinho</AddButton>
    </Content>
  </Card>
}
