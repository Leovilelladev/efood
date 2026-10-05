import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Shell } from '../../styles/global'

const Hero = styled.section`
  min-height: 390px; display: flex; align-items: end; position: relative; color: #fff; background: ${({ src }) => `url(${src}) center/cover`};
  &::before { content: ''; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(37, 14, 14, .08), rgba(37, 14, 14, .82)); }
  .content { position: relative; z-index: 1; width: 100%; padding: 45px 0 40px; }
  .back { display: inline-flex; margin-bottom: 80px; color: #fff; font-size: 13px; font-weight: 700; opacity: .9; }
  h1 { margin: 0 0 9px; font-size: clamp(38px, 5vw, 60px); letter-spacing: -1.8px; }
  p { max-width: 580px; margin: 0; color: rgba(255,255,255,.82); font-size: 14px; }
  .restaurant-meta { display: flex; gap: 18px; margin-top: 20px; font-size: 13px; font-weight: 600; }
  @media (max-width: 650px) { min-height: 340px; .back { margin-bottom: 55px; } }
`

export function RestaurantHero({ restaurant }) {
  return <Hero src={restaurant.cover}><Shell><div className="content"><Link className="back" to="/">← Voltar para restaurantes</Link><h1>{restaurant.name}</h1><p>{restaurant.description}</p><div className="restaurant-meta"><span>{restaurant.rating}</span><span>◷ {restaurant.time}</span><span>⌁ {restaurant.delivery}</span></div></div></Shell></Hero>
}
