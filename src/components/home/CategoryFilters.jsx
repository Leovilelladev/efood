import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { categories } from '../../data/restaurants'

const Row = styled.div`display: flex; gap: 12px; overflow-x: auto; padding: 2px 0 8px; margin-bottom: 62px; scrollbar-width: none; &::-webkit-scrollbar { display: none; }`
const Category = styled(Link)`
  display: inline-flex; flex: 0 0 auto; align-items: center; gap: 8px; padding: 12px 16px; border: 1px solid #eaded8; border-radius: 100px; background: #fff; color: #736863; font-size: 13px; font-weight: 700; transition: .2s;
  &:hover, &.selected { background: #fff0ec; color: #e94d4d; border-color: #f5c2b6; }
  .emoji { font-size: 18px; }
`

export function CategoryFilters({ activeCategory }) {
  return <Row>{categories.map((category) => <Category key={category.label} to={category.label === 'Todos' ? '/' : `/?category=${encodeURIComponent(category.label)}`} className={activeCategory === category.label ? 'selected' : ''}>{category.emoji && <span className="emoji">{category.emoji}</span>}{category.label}</Category>)}</Row>
}
