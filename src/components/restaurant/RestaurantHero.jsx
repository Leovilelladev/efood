import styled from 'styled-components'
import { Shell } from '../../styles/global'

const Hero = styled.section`
  position: relative;
  height: 280px;
  color: #fff;
  > img { width: 100%; height: 100%; object-fit: cover; }
  &::after { content: ''; position: absolute; inset: 0; background: rgb(0 0 0 / 50%); }
`

const Content = styled(Shell)`
  position: absolute;
  inset: 0;
  z-index: 1;
  transform: translateX(-1px);
  .category { position: absolute; top: 25px; font-size: 32px; font-weight: 100; }
  h1 { position: absolute; bottom: 32px; height: 33.25px; margin: 0; font-size: 32px; font-weight: 900; }
  @media (max-width: 600px) { h1 { height: auto; font-size: 28px; } }
`

export function RestaurantHero({ restaurant }) {
  return <Hero>
    <img src={restaurant.cover} alt="" />
    <Content><span className="category">{restaurant.category}</span><h1>{restaurant.name}</h1></Content>
  </Hero>
}
