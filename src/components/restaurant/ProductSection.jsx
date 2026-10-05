import styled from 'styled-components'
import { money } from '../../data/restaurants'
import { Eyebrow } from '../ui/Eyebrow'

const Section = styled.section`
  margin-bottom: 48px;
  h2 { margin: 0 0 18px; font-size: 28px; letter-spacing: -.7px; }
`
const ProductRow = styled.div`
  display: flex; align-items: center; gap: 18px; padding: 18px 0; border-bottom: 1px solid #eee3de;
  .image { flex: 0 0 114px; height: 90px; border-radius: 12px; background: ${({ src }) => `url(${src}) center/cover`}; }
  .copy { flex: 1; }
  h3 { margin: 0 0 5px; font-size: 16px; }
  p { margin: 0 0 9px; color: #8d7e77; font-size: 12px; line-height: 1.4; }
  .price { color: #e94d4d; font-size: 14px; font-weight: 800; }
  button { flex: 0 0 auto; width: 34px; height: 34px; border: 1px solid #efc7bd; border-radius: 50%; background: #fff4f1; color: #e94d4d; font-size: 21px; line-height: 1; }
  @media (max-width: 560px) { gap: 12px; .image { flex-basis: 92px; height: 76px; } }
`

export function ProductSection({ category, section, onAdd }) {
  return <Section><Eyebrow>{category}</Eyebrow><h2>{section.title}</h2>{section.items.map((product) => <ProductRow key={product.id} src={product.image}><div className="image" /><div className="copy"><h3>{product.name}</h3><p>{product.description}</p><span className="price">{money(product.price)}</span></div><button type="button" onClick={() => onAdd(product)} aria-label={`Adicionar ${product.name}`}>+</button></ProductRow>)}</Section>
}
