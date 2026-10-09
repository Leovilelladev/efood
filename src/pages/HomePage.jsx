import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Page, Shell } from '../styles/global'
import { restaurants } from '../data/restaurants'

const HomeHeader = styled.header`
  background: #fff8f0;
`

const Navigation = styled(Shell)`
  min-height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #e56668;
  font-size: 13px;
  font-weight: 500;
`

const BrandBand = styled.div`
  min-height: 124px;
  display: grid;
  place-items: center;
  padding: 14px 24px 18px;
  background-color: #fff0e4;
  background-image:
    linear-gradient(rgba(255, 255, 255, .22) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, .22) 1px, transparent 1px);
  background-size: 8px 8px;
`

const BrandStack = styled.div`
  display: grid;
  justify-items: center;
  gap: 20px;
`

const Logo = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  padding: 5px 7px;
  border: 2px solid #e56668;
  color: #e56668;
  font-size: 17px;
  font-weight: 900;
  letter-spacing: -1px;
  line-height: 1;
`

const Tagline = styled.h1`
  max-width: 280px;
  margin: 0;
  color: #e56668;
  font-size: 17px;
  font-weight: 900;
  line-height: 1.05;
  text-align: center;
`

const Main = styled.main`
  padding: 28px 0 78px;
`

const HomeContent = styled(Shell)`
  width: min(920px, calc(100% - 48px));

  @media (max-width: 640px) {
    width: min(100% - 32px, 520px);
  }
`

const RestaurantGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px 28px;

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
    gap: 18px;
  }
`

const RestaurantCard = styled.article`
  overflow: hidden;
  border: 1px solid #e56668;
  background: #fffaf5;
  color: #e56668;
`

const CardImage = styled.div`
  position: relative;
  aspect-ratio: 2.16;
  background: ${({ src }) => `url(${src}) center / cover`};
`

const CategoryTag = styled.span`
  position: absolute;
  top: 7px;
  right: 7px;
  padding: 3px 7px;
  background: #e56668;
  color: #fff;
  font-size: 9px;
  font-weight: 700;
`

const CardBody = styled.div`
  padding: 8px 10px 10px;
`

const CardTitleRow = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
`

const CardTitle = styled.h2`
  margin: 0;
  font-size: 14px;
  line-height: 1.1;
`

const Rating = styled.span`
  flex: 0 0 auto;
  font-size: 10px;
  font-weight: 700;
  white-space: nowrap;

  &::first-letter { color: #f0a42b; }
`

const CardDescription = styled.p`
  min-height: 42px;
  margin: 6px 0 8px;
  font-size: 10px;
  line-height: 1.35;
`

const MoreLink = styled(Link)`
  display: inline-block;
  padding: 4px 7px;
  background: #e56668;
  color: #fff;
  font-size: 9px;
  font-weight: 700;
`

const Footer = styled.footer`
  min-height: 170px;
  display: grid;
  place-items: center;
  padding: 26px 24px 20px;
  background: #ffead8;
  color: #e56668;
`

const FooterContent = styled.div`
  display: grid;
  justify-items: center;
  gap: 12px;
`

const Socials = styled.div`
  display: flex;
  gap: 6px;

  span {
    display: grid;
    width: 16px;
    height: 16px;
    place-items: center;
    border-radius: 50%;
    background: #e56668;
    color: #fff;
    font-size: 9px;
    font-weight: 700;
  }
`

const Copyright = styled.small`
  max-width: 280px;
  margin-top: 20px;
  font-size: 8px;
  line-height: 1.4;
  text-align: center;
`

const homeRestaurants = [
  {
    id: 'hoki-sushi',
    name: 'Hoki Sushi',
    category: 'Japonesa',
    rating: '4.9',
    cover: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=85',
    description: 'Peças frescas e combinações especiais preparadas todos os dias.',
  },
  ...Array.from({ length: 5 }, () => ({
    id: 'la-dolce-vita-trattoria',
    name: 'La Dolce Vita Trattoria',
    category: 'Italiana',
    rating: '4.6',
    cover: restaurants[0].cover,
    description: 'A autêntica cozinha italiana com massas artesanais, pizzas deliciosas e sabores inesquecíveis.',
  })),
]

export function HomePage() {
  return <Page>
    <HomeHeader>
      <Navigation>
        <Link to="/">Home</Link>
        <a href="#restaurants">Para restaurantes</a>
      </Navigation>
      <BrandBand>
        <BrandStack>
          <Logo aria-label="efood">efood <span aria-hidden="true">🍴</span></Logo>
          <Tagline>Viva experiências gastronômicas<br />no conforto da sua casa</Tagline>
        </BrandStack>
      </BrandBand>
    </HomeHeader>
    <Main id="restaurants">
      <HomeContent>
        <RestaurantGrid>
          {homeRestaurants.map((restaurant, index) => <RestaurantCard key={`${restaurant.id}-${index}`}>
            <CardImage src={restaurant.cover}><CategoryTag>{restaurant.category}</CategoryTag></CardImage>
            <CardBody>
              <CardTitleRow><CardTitle>{restaurant.name}</CardTitle><Rating>★ {restaurant.rating}</Rating></CardTitleRow>
              <CardDescription>{restaurant.description} Entrega rápida e segura.</CardDescription>
              <MoreLink to={`/restaurant/${restaurant.id}`}>Saiba mais</MoreLink>
            </CardBody>
          </RestaurantCard>)}
        </RestaurantGrid>
      </HomeContent>
    </Main>
    <Footer>
      <FooterContent>
        <Logo aria-label="efood">efood <span aria-hidden="true">🍴</span></Logo>
        <Socials aria-label="Redes sociais"><span>f</span><span>◎</span><span>▶</span></Socials>
        <Copyright>A efood mantém seus dados pessoais seguros e utiliza suas informações apenas para entregar uma experiência incrível.</Copyright>
      </FooterContent>
    </Footer>
  </Page>
}
