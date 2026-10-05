import { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { getCategories } from '../data/restaurants'
import { useRestaurants } from '../hooks/useRestaurants'
import { Page, Shell } from '../styles/global'
import { SiteFooter } from '../components/layout/SiteFooter'
import { SiteHeader } from '../components/layout/SiteHeader'
import { CategoryFilters } from '../components/home/CategoryFilters'
import { HeroSection } from '../components/home/HeroSection'
import { RestaurantGrid } from '../components/home/RestaurantGrid'
import { Eyebrow } from '../components/ui/Eyebrow'
import { SectionHeading } from '../components/ui/SectionHeading'
import { StatusMessage } from '../components/ui/StatusMessage'

const Main = styled.main`padding: 72px 0 110px; @media (max-width: 680px) { padding: 48px 0 88px; }`

export function HomePage() {
  const [query, setQuery] = useState('')
  const location = useLocation()
  const { restaurants, loading, error } = useRestaurants()
  const activeCategory = new URLSearchParams(location.search).get('category') || 'Todos'
  const categories = getCategories(restaurants)
  const featuredRestaurant = restaurants.find((restaurant) => restaurant.featured) || restaurants[0]

  const filteredRestaurants = useMemo(() => restaurants.filter((restaurant) => {
    const categoryMatches = activeCategory === 'Todos' || restaurant.category === activeCategory
    const normalizedQuery = query.trim().toLowerCase()
    const queryMatches = !normalizedQuery || `${restaurant.name} ${restaurant.category}`.toLowerCase().includes(normalizedQuery)
    return categoryMatches && queryMatches
  }), [activeCategory, query, restaurants])

  function handleSearch(value) {
    setQuery(value)
    document.getElementById('restaurants')?.scrollIntoView({ behavior: 'smooth' })
  }

  return <Page><SiteHeader />
    {loading && <Main><Shell><StatusMessage>Carregando restaurantes...</StatusMessage></Shell></Main>}
    {!loading && error && <Main><Shell><StatusMessage>{error}</StatusMessage></Shell></Main>}
    {!loading && !error && featuredRestaurant && <>
      <HeroSection restaurant={featuredRestaurant} onSearch={handleSearch} />
      <Main id="restaurants"><Shell>
        <SectionHeading><div><Eyebrow>Escolha uma categoria</Eyebrow><h2>O que você quer comer hoje?</h2></div></SectionHeading>
        <CategoryFilters categories={categories} activeCategory={activeCategory} />
        <SectionHeading><div><Eyebrow>Por perto</Eyebrow><h2>Restaurantes em destaque</h2><p>Uma seleção simples para decidir sem pressa.</p></div><a href="#restaurants">Ver todos ↗</a></SectionHeading>
        <RestaurantGrid restaurants={filteredRestaurants} />
      </Shell></Main>
    </>}
    <SiteFooter />
  </Page>
}
