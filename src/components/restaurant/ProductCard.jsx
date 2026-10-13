import styled from 'styled-components'
import { Button } from '../ui/Button'

const Card = styled.article`
  min-width: 0;
  padding: 8px;
  background: var(--salmon);
  color: var(--cream);
  img { width: 100%; height: 167px; object-fit: cover; }
  h2 { margin: 8px 0; font-size: 16px; line-height: 19px; font-weight: 900; }
  p { height: 88px; margin: 0 0 8px; font-size: 14px; line-height: 22px; }
  button { width: 100%; }
  @media (max-width: 700px) { p { height: auto; min-height: 88px; } }
`

export function ProductCard({ product, onOpen }) {
  return <Card>
    <img src={product.image} alt={product.name} />
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <Button type="button" onClick={() => onOpen(product)}>Adicionar ao carrinho</Button>
  </Card>
}
