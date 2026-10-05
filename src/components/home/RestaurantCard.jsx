import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Card = styled.article`
  position: relative; overflow: hidden; border: 1px solid #f0e5e0; border-radius: 18px; background: #fff; transition: transform .2s, box-shadow .2s;
  &:hover { transform: translateY(-5px); box-shadow: 0 16px 36px rgba(73, 36, 24, .1); }
  .cover { height: 180px; position: relative; background: ${({ src }) => `url(${src}) center/cover`}; }
  .cover::after { content: ''; position: absolute; inset: 0; background: linear-gradient(180deg, transparent 35%, rgba(24, 10, 10, .2)); }
  .delivery { position: absolute; z-index: 1; top: 12px; left: 12px; padding: 6px 9px; border-radius: 6px; background: #fff; color: #2e8a65; font-size: 11px; font-weight: 700; }
  .heart { position: absolute; z-index: 2; top: 11px; right: 11px; width: 32px; height: 32px; display: grid; place-items: center; border: 0; border-radius: 50%; background: rgba(255,255,255,.92); font-size: 16px; }
  .info { padding: 17px 17px 18px; }
  h3 { margin: 0 0 7px; font-size: 17px; letter-spacing: -.35px; }
  p { min-height: 35px; margin: 0 0 16px; color: #897c76; font-size: 12px; line-height: 1.45; }
  .meta { display: flex; gap: 12px; color: #766b67; font-size: 12px; font-weight: 600; }
`

export function RestaurantCard({ restaurant }) {
  const deliveryLabel = restaurant.delivery === 'Grátis' ? 'Entrega grátis' : restaurant.delivery
  return <Card src={restaurant.cover}><Link to={`/restaurant/${restaurant.id}`} aria-label={`Abrir ${restaurant.name}`}>
    <div className="cover"><span className="delivery">{deliveryLabel}</span><button className="heart" type="button" aria-label="Favoritar" onClick={(event) => event.preventDefault()}>♡</button></div>
    <div className="info"><h3>{restaurant.name}</h3><p>{restaurant.description}</p><div className="meta"><span>{restaurant.rating}</span><span>◷ {restaurant.time}</span><span>{restaurant.category}</span></div></div>
  </Link></Card>
}
