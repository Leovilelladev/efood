import { useState } from 'react'
import styled from 'styled-components'
import { Shell } from '../../styles/global'
import { Eyebrow } from '../ui/Eyebrow'

const Hero = styled.section`
  position: relative; overflow: hidden; padding: 78px 0 88px; background: #e94d4d; color: #fff;
  &::before, &::after { content: ''; position: absolute; border: 1px solid rgba(255,255,255,.18); border-radius: 50%; pointer-events: none; }
  &::before { width: 550px; height: 550px; right: -200px; top: -180px; }
  &::after { width: 330px; height: 330px; left: -150px; bottom: -215px; }
  @media (max-width: 680px) { padding: 50px 0 58px; }
`
const HeroLayout = styled(Shell)`
  display: grid; grid-template-columns: minmax(0, 1fr) 400px; align-items: center; gap: 64px; position: relative; z-index: 1;
  @media (max-width: 850px) { grid-template-columns: 1fr; gap: 36px; }
`
const HeroTitle = styled.h1`max-width: 560px; margin: 0; font-size: clamp(44px, 5vw, 72px); line-height: .98; letter-spacing: -2.5px; font-weight: 800;`
const HeroText = styled.p`max-width: 480px; margin: 24px 0 34px; color: rgba(255,255,255,.83); font-size: 17px; line-height: 1.6;`
const SearchBox = styled.form`
  display: flex; align-items: center; max-width: 510px; padding: 6px 7px 6px 16px; border-radius: 12px; background: #fff; box-shadow: 0 18px 34px rgba(121, 20, 20, .14);
  input { min-width: 0; flex: 1; border: 0; outline: 0; color: #292323; background: transparent; font-size: 14px; }
  button { padding: 13px 18px; border: 0; border-radius: 8px; background: #292323; color: #fff; font-size: 13px; font-weight: 700; }
`
const HeroCard = styled.div`
  min-height: 340px; position: relative; overflow: hidden; border-radius: 28px 28px 100px 28px; background: ${({ src }) => `url(${src}) center/cover`}; box-shadow: 18px 24px 0 rgba(91, 16, 16, .14);
  &::after { content: ''; position: absolute; inset: 0; background: linear-gradient(180deg, transparent 45%, rgba(38, 14, 14, .55)); }
  .floating { position: absolute; z-index: 1; left: 20px; bottom: 20px; padding: 12px 15px; border-radius: 12px; background: rgba(255,255,255,.95); color: #292323; font-size: 13px; font-weight: 700; }
  @media (max-width: 850px) { min-height: 260px; max-width: 480px; }
`

export function HeroSection({ restaurant, onSearch }) {
  const [query, setQuery] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    onSearch(query)
  }

  return <Hero><HeroLayout><div>
    <Eyebrow light>Comida boa, momento melhor</Eyebrow>
    <HeroTitle>A fome pede<br />efood.</HeroTitle>
    <HeroText>Encontre seus restaurantes favoritos e receba em casa.</HeroText>
    <SearchBox onSubmit={handleSubmit}><span aria-hidden="true">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Busque por restaurante ou prato" aria-label="Buscar" /><button type="submit">Buscar</button></SearchBox>
  </div><HeroCard src={restaurant.cover}><div className="floating">Da cozinha para sua casa · {restaurant.rating}</div></HeroCard></HeroLayout></Hero>
}
