import { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { restaurants } from '../data/restaurants'
import { Page, Shell } from '../styles/global'
import { SiteFooter } from '../components/layout/SiteFooter'
import { SiteHeader } from '../components/layout/SiteHeader'
import { CategoryFilters } from '../components/home/CategoryFilters'
import { HeroSection } from '../components/home/HeroSection'
import { RestaurantGrid } from '../components/home/RestaurantGrid'
import { Eyebrow } from '../components/ui/Eyebrow'
import { SectionHeading } from '../components/ui/SectionHeading'

const Main = styled.main`padding: 72px 0 110px; @media (max-width: 680px) { padding: 48px 0 88px; }`

export function HomePage() {
  const [query, setQuery] = useState('')
  const location = useLocation()
  const activeCategory = new URLSearchParams(location.search).get('category') || 'Todos'
  const filteredRestaurants = useMemo(() => restaurants.filter((restaurant) => {
    const categoryMatches = activeCategory === 'Todos' || restaurant.category === activeCategory
    const normalizedQuery = query.trim().toLowerCase()
    const queryMatches = !normalizedQuery || `${restaurant.name} ${restaurant.category}`.toLowerCase().includes(normalizedQuery)
    return categoryMatches && queryMatches
  }), [activeCategory, query])

  function handleSearch(value) {
    setQuery(value)
    document.getElementById('restaurants')?.scrollIntoView({ behavior: 'smooth' })
  }

  return <Page><SiteHeader /><HeroSection restaurant={restaurants[0]} onSearch={handleSearch} /><Main id="restaurants"><Shell>
    <SectionHeading><div><Eyebrow>Escolha uma categoria</Eyebrow><h2>O que você quer comer hoje?</h2></div></SectionHeading>
    <CategoryFilters activeCategory={activeCategory} />
    <SectionHeading><div><Eyebrow>Por perto</Eyebrow><h2>Restaurantes em destaque</h2><p>Uma seleção simples para decidir sem pressa.</p></div><a href="#restaurants">Ver todos ↗</a></SectionHeading>
    <RestaurantGrid restaurants={filteredRestaurants} />
  </Shell></Main><SiteFooter /></Page>
}
