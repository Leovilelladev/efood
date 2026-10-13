import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../ui/Button'

const Card = styled.article`
  min-width: 0;
  .cover { position: relative; height: 217px; }
  .cover > img { width: 100%; height: 217px; object-fit: cover; }
  .tags { position: absolute; top: 16px; right: 16px; display: flex; gap: 8px; }
  .featured { width: 121px; }
  .tag { min-width: 61px; height: 26px; display: grid; place-items: center; padding: 6px 4px; color: var(--cream); background: var(--salmon); font-size: 12px; line-height: 14px; font-weight: 700; }
  .info { height: 181px; padding: 8px 7px 7px; border: 1px solid var(--salmon); border-top: 0; background: #fff; }
  .title-row { display: flex; align-items: center; justify-content: space-between; gap: 8px; height: 21px; }
  h2 { margin: 0 0 0 -1px; font-size: 18px; font-weight: 700; line-height: 21px; }
  .rating { display: flex; flex-shrink: 0; align-items: center; gap: 8px; font-size: 18px; font-weight: 700; line-height: 21px; }
  .description { height: 88px; margin: 16px 0; font-size: 14px; line-height: 22px; white-space: pre-line; }
  @media (max-width: 1055px) {
    .info { height: auto; min-height: 181px; }
    .title-row { height: auto; align-items: start; }
    .description { height: auto; min-height: 88px; white-space: normal; }
  }
`

export function RestaurantCard({ restaurant }) {
  return <Card>
    <div className="cover">
      <img src={restaurant.cover} alt={restaurant.name} />
      <div className="tags">
        {restaurant.featured && <span className="tag featured">Destaque da semana</span>}
        <span className="tag">{restaurant.category}</span>
      </div>
    </div>
    <div className="info">
      <div className="title-row">
        <h2>{restaurant.name}</h2>
        <span className="rating" aria-label={`Avaliação ${restaurant.rating}`}>
          {restaurant.rating}<img src="/figma/estrela.svg" alt="" />
        </span>
      </div>
      <p className="description">{restaurant.description}</p>
      <Button as={Link} $primary to={`/restaurant/${restaurant.id}`}>Saiba mais</Button>
    </div>
  </Card>
}
