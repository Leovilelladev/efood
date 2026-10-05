import React, { createContext, useContext, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom'
import styled, { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@700;800&display=swap');

  :root {
    color: #292323;
    background: #fffaf7;
    font-family: 'DM Sans', sans-serif;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
  }

  * { box-sizing: border-box; }
  body { margin: 0; min-width: 320px; background: #fffaf7; }
  button, input, select { font: inherit; }
  button, a { -webkit-tap-highlight-color: transparent; }
  button { cursor: pointer; }
  a { color: inherit; text-decoration: none; }
`

const restaurants = [
  {
    id: 'forno-da-vila',
    name: 'Forno da Vila',
    category: 'Pizza',
    tags: ['Pizza', 'Italiana'],
    rating: '4,8',
    time: '30-40 min',
    delivery: 'Grátis',
    accent: '#f5c9a9',
    cover: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1200&q=85',
    logo: 'https://images.unsplash.com/photo-1593560708920-61dd98c8c5b1?auto=format&fit=crop&w=240&q=85',
    description: 'Massas artesanais, ingredientes frescos e forno aceso todos os dias.',
    sections: [
      { title: 'Mais pedidos', items: [
        { id: 'marguerita', name: 'Pizza Marguerita', description: 'Molho de tomate, mozzarella fresca, manjericão e azeite.', price: 42.9, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=640&q=85' },
        { id: 'calabresa', name: 'Pizza Calabresa', description: 'Calabresa artesanal, cebola roxa, mozzarella e orégano.', price: 45.9, image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=640&q=85' },
        { id: 'quattro', name: 'Quattro Formaggi', description: 'Mozzarella, gorgonzola, parmesão e provolone.', price: 49.9, image: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=640&q=85' },
      ] },
      { title: 'Para acompanhar', items: [
        { id: 'tiramisu', name: 'Tiramisù da casa', description: 'Receita clássica com café, cacau e mascarpone.', price: 18.9, image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=640&q=85' },
        { id: 'limonada', name: 'Limonada siciliana', description: 'Limão siciliano, hortelã e água com gás.', price: 12.9, image: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f4f?auto=format&fit=crop&w=640&q=85' },
      ] },
    ],
  },
  {
    id: 'sabor-de-casa',
    name: 'Sabor de Casa',
    category: 'Brasileira',
    tags: ['Brasileira', 'Caseira'],
    rating: '4,7',
    time: '25-35 min',
    delivery: 'R$ 3,90',
    accent: '#f8dca8',
    cover: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85',
    logo: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=240&q=85',
    description: 'Comida afetiva e bem servida, do jeitinho que você gosta.',
    sections: [{ title: 'Pratos do dia', items: [
      { id: 'parmegiana', name: 'Parmegiana da casa', description: 'Filé empanado, molho de tomate, arroz e fritas.', price: 39.9, image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?auto=format&fit=crop&w=640&q=85' },
      { id: 'strogonoff', name: 'Strogonoff cremoso', description: 'Frango, molho cremoso, arroz branco e batata palha.', price: 36.9, image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=640&q=85' },
    ] }],
  },
  {
    id: 'brasa-burger',
    name: 'Brasa Burger',
    category: 'Hambúrguer',
    tags: ['Hambúrguer', 'Artesanal'],
    rating: '4,9',
    time: '20-30 min',
    delivery: 'Grátis',
    accent: '#d8b798',
    cover: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=85',
    logo: 'https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=240&q=85',
    description: 'Hambúrguer na brasa, pão macio e aquele molho secreto.',
    sections: [{ title: 'Favoritos da casa', items: [
      { id: 'brasa-classic', name: 'Brasa Classic', description: 'Burger 160g, cheddar, cebola caramelizada e molho da casa.', price: 34.9, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=640&q=85' },
      { id: 'brasa-bacon', name: 'Bacon BBQ', description: 'Burger 160g, bacon crocante, barbecue e coleslaw.', price: 39.9, image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=640&q=85' },
    ] }],
  },
  {
    id: 'verde-bowl',
    name: 'Verde Bowl',
    category: 'Saudável',
    tags: ['Saudável', 'Bowls'],
    rating: '4,6',
    time: '20-30 min',
    delivery: 'R$ 2,90',
    accent: '#b9d7a6',
    cover: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=85',
    logo: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=240&q=85',
    description: 'Combinações leves, coloridas e cheias de sabor.',
    sections: [{ title: 'Bowls montados', items: [
      { id: 'bowl-salmao', name: 'Bowl Salmão Fresh', description: 'Salmão, arroz negro, avocado, edamame e molho cítrico.', price: 44.9, image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=640&q=85' },
      { id: 'bowl-falafel', name: 'Bowl Falafel', description: 'Falafel, homus, quinoa, legumes e tahine.', price: 32.9, image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=640&q=85' },
    ] }],
  },
]

const categories = [
  { label: 'Todos', emoji: '✦' },
  { label: 'Pizza', emoji: '🍕' },
  { label: 'Hambúrguer', emoji: '🍔' },
  { label: 'Brasileira', emoji: '🍛' },
  { label: 'Saudável', emoji: '🥗' },
  { label: 'Doces', emoji: '🍰' },
]

const money = (value) => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

const CartContext = createContext(null)

function CartProvider({ children }) {
  const [items, setItems] = useState([])
  const addItem = (restaurant, product) => setItems((current) => {
    const found = current.find((item) => item.product.id === product.id)
    if (found) return current.map((item) => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
    return [...current, { restaurantId: restaurant.id, restaurantName: restaurant.name, product, quantity: 1 }]
  })
  const updateItem = (productId, delta) => setItems((current) => current.flatMap((item) => {
    if (item.product.id !== productId) return [item]
    const quantity = item.quantity + delta
    return quantity > 0 ? [{ ...item, quantity }] : []
  }))
  const clear = () => setItems([])
  const subtotal = items.reduce((total, item) => total + item.product.price * item.quantity, 0)
  const delivery = items.length ? (subtotal >= 70 ? 0 : 5.9) : 0
  const total = subtotal + delivery
  const count = items.reduce((total, item) => total + item.quantity, 0)
  const value = useMemo(() => ({ items, addItem, updateItem, clear, subtotal, delivery, total, count }), [items, subtotal, delivery, total, count])
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

function useCart() {
  return useContext(CartContext)
}

const Page = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
`

const Shell = styled.div`
  width: min(1180px, calc(100% - 48px));
  margin: 0 auto;
  @media (max-width: 680px) { width: min(100% - 32px, 520px); }
`

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  border-bottom: 1px solid rgba(47, 29, 29, 0.08);
  background: rgba(255, 250, 247, 0.94);
  backdrop-filter: blur(16px);
`

const HeaderInner = styled(Shell)`
  height: 76px;
  display: flex;
  align-items: center;
  gap: 30px;
`

const Logo = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 9px;
  font-weight: 800;
  font-size: 23px;
  letter-spacing: -1.2px;
  color: #e94d4d;
  span { color: #292323; }
  &::before { content: '✦'; font-size: 21px; color: #e94d4d; }
`

const HeaderNav = styled.nav`
  display: flex;
  gap: 24px;
  align-items: center;
  margin-right: auto;
  a { color: #766b67; font-size: 14px; font-weight: 600; transition: color .2s; }
  a.active, a:hover { color: #e94d4d; }
  @media (max-width: 800px) { display: none; }
`

const HeaderAction = styled.button`
  border: 0;
  background: transparent;
  color: #292323;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 700;
  font-size: 14px;
  padding: 8px;
  .icon { font-size: 20px; }
  .badge { background: #e94d4d; color: white; min-width: 20px; height: 20px; border-radius: 20px; display: grid; place-items: center; font-size: 11px; }
`

function HeaderBar() {
  const { count } = useCart()
  const navigate = useNavigate()
  return <Header><HeaderInner>
    <Logo to="/"><span>efood</span></Logo>
    <HeaderNav>
      <NavLink to="/">Início</NavLink>
      <NavLink to="/?category=Pizza">Restaurantes</NavLink>
      <NavLink to="/checkout">Meus pedidos</NavLink>
    </HeaderNav>
    <HeaderAction type="button" onClick={() => navigate('/checkout')} aria-label="Abrir carrinho">
      <span className="icon">🛍</span><span className="cart-label">Seu pedido</span>{count > 0 && <span className="badge">{count}</span>}
    </HeaderAction>
  </HeaderInner></Header>
}

const Hero = styled.section`
  background: #e94d4d;
  color: #fff;
  padding: 78px 0 88px;
  position: relative;
  overflow: hidden;
  &::before, &::after { content: ''; position: absolute; border: 1px solid rgba(255,255,255,.18); border-radius: 50%; pointer-events: none; }
  &::before { width: 550px; height: 550px; right: -200px; top: -180px; }
  &::after { width: 330px; height: 330px; left: -150px; bottom: -215px; }
  @media (max-width: 680px) { padding: 50px 0 58px; }
`

const HeroLayout = styled(Shell)`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 400px;
  align-items: center;
  gap: 64px;
  position: relative;
  z-index: 1;
  @media (max-width: 850px) { grid-template-columns: 1fr; gap: 36px; }
`

const Eyebrow = styled.div`
  display: inline-flex; align-items: center; gap: 9px; margin-bottom: 21px; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.8px; color: ${({ light }) => light ? 'rgba(255,255,255,.82)' : '#e94d4d'};
  &::before { content: ''; width: 27px; height: 2px; background: currentColor; }
`

const HeroTitle = styled.h1`
  margin: 0;
  max-width: 560px;
  font-family: 'Playfair Display', serif;
  font-size: clamp(44px, 5vw, 72px);
  line-height: .98;
  letter-spacing: -2.5px;
  font-weight: 800;
`

const HeroText = styled.p`
  max-width: 480px; margin: 24px 0 34px; color: rgba(255,255,255,.83); font-size: 17px; line-height: 1.6;
`

const SearchBox = styled.form`
  display: flex; align-items: center; background: #fff; border-radius: 12px; padding: 6px 7px 6px 16px; max-width: 510px; box-shadow: 0 18px 34px rgba(121, 20, 20, .14);
  input { min-width: 0; flex: 1; border: 0; outline: 0; color: #292323; background: transparent; font-size: 14px; }
  button { border: 0; border-radius: 8px; background: #292323; color: #fff; padding: 13px 18px; font-weight: 700; font-size: 13px; }
`

const HeroCard = styled.div`
  min-height: 340px; position: relative; border-radius: 28px 28px 100px 28px; overflow: hidden; background: ${({ src }) => `url(${src}) center/cover`}; box-shadow: 18px 24px 0 rgba(91, 16, 16, .14);
  &::after { content: ''; position: absolute; inset: 0; background: linear-gradient(180deg, transparent 45%, rgba(38, 14, 14, .55)); }
  .floating { position: absolute; z-index: 1; left: 20px; bottom: 20px; padding: 12px 15px; border-radius: 12px; background: rgba(255,255,255,.95); color: #292323; font-size: 13px; font-weight: 700; }
  @media (max-width: 850px) { min-height: 260px; max-width: 480px; }
`

const Main = styled.main`
  padding: 72px 0 110px;
  @media (max-width: 680px) { padding: 48px 0 88px; }
`

const SectionHeading = styled.div`
  display: flex; align-items: end; justify-content: space-between; gap: 20px; margin-bottom: 27px;
  h2 { margin: 0; font-family: 'Playfair Display', serif; font-size: clamp(28px, 3vw, 40px); letter-spacing: -1px; line-height: 1.08; }
  p { margin: 8px 0 0; color: #897b75; font-size: 14px; }
  a { color: #e94d4d; font-size: 13px; font-weight: 700; }
`

const CategoryRow = styled.div`
  display: flex; gap: 12px; overflow-x: auto; padding: 2px 0 8px; margin-bottom: 62px; scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`

const Category = styled(Link)`
  flex: 0 0 auto; display: inline-flex; align-items: center; gap: 8px; padding: 12px 16px; border: 1px solid #eaded8; border-radius: 100px; color: #736863; background: #fff; font-size: 13px; font-weight: 700; transition: .2s;
  &:hover, &.selected { background: #fff0ec; color: #e94d4d; border-color: #f5c2b6; }
  .emoji { font-size: 18px; }
`

const RestaurantGrid = styled.div`
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 21px;
  @media (max-width: 1020px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 560px) { grid-template-columns: 1fr; }
`

const RestaurantCard = styled.article`
  background: #fff; border: 1px solid #f0e5e0; border-radius: 18px; overflow: hidden; transition: transform .2s, box-shadow .2s; position: relative;
  &:hover { transform: translateY(-5px); box-shadow: 0 16px 36px rgba(73, 36, 24, .1); }
  .cover { height: 180px; background: ${({ src }) => `url(${src}) center/cover`}; position: relative; }
  .cover::after { content: ''; position: absolute; inset: 0; background: linear-gradient(180deg, transparent 35%, rgba(24, 10, 10, .2)); }
  .delivery { position: absolute; z-index: 1; top: 12px; left: 12px; background: #fff; padding: 6px 9px; border-radius: 6px; color: #2e8a65; font-size: 11px; font-weight: 700; }
  .heart { position: absolute; z-index: 2; top: 11px; right: 11px; width: 32px; height: 32px; border: 0; border-radius: 50%; display: grid; place-items: center; background: rgba(255,255,255,.92); font-size: 16px; }
  .info { padding: 17px 17px 18px; }
  h3 { margin: 0 0 7px; font-size: 17px; letter-spacing: -.35px; }
  p { margin: 0 0 16px; color: #897c76; line-height: 1.45; font-size: 12px; min-height: 35px; }
  .meta { display: flex; gap: 12px; color: #766b67; font-size: 12px; font-weight: 600; }
  .rating { color: #d47a22; }
`

function HomePage() {
  const [query, setQuery] = useState('')
  const params = new URLSearchParams(useLocation().search)
  const activeCategory = params.get('category') || 'Todos'
  const navigate = useNavigate()
  const filtered = restaurants.filter((restaurant) => {
    const matchesCategory = activeCategory === 'Todos' || restaurant.category === activeCategory
    const matchesQuery = !query || `${restaurant.name} ${restaurant.category}`.toLowerCase().includes(query.toLowerCase())
    return matchesCategory && matchesQuery
  })
  return <Page>
    <HeaderBar />
    <Hero>
      <HeroLayout>
        <div>
          <Eyebrow light>Comida boa, momento melhor</Eyebrow>
          <HeroTitle>A fome pede<br />efood.</HeroTitle>
          <HeroText>Descubra lugares incríveis perto de você e receba seu prato favorito com todo o carinho.</HeroText>
          <SearchBox onSubmit={(event) => { event.preventDefault(); document.getElementById('restaurants')?.scrollIntoView({ behavior: 'smooth' }) }}>
            <span aria-hidden="true">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Busque por restaurante ou prato" aria-label="Buscar" /><button type="submit">Buscar</button>
          </SearchBox>
        </div>
        <HeroCard src={restaurants[0].cover}><div className="floating">✦ Seleção da casa · 4,8</div></HeroCard>
      </HeroLayout>
    </Hero>
    <Main id="restaurants"><Shell>
      <SectionHeading><div><Eyebrow>Escolha seu momento</Eyebrow><h2>O que você está<br />com vontade de comer?</h2></div><span>⌄</span></SectionHeading>
      <CategoryRow>{categories.map((category) => <Category key={category.label} to={category.label === 'Todos' ? '/' : `/?category=${encodeURIComponent(category.label)}`} className={activeCategory === category.label ? 'selected' : ''}><span className="emoji">{category.emoji}</span>{category.label}</Category>)}</CategoryRow>
      <SectionHeading><div><Eyebrow>Para você</Eyebrow><h2>Restaurantes em destaque</h2><p>Os favoritos da vizinhança, escolhidos especialmente para você.</p></div><a href="#restaurants">Ver todos ↗</a></SectionHeading>
      <RestaurantGrid>{filtered.length ? filtered.map((restaurant) => <RestaurantCard key={restaurant.id} src={restaurant.cover}>
        <Link to={`/restaurant/${restaurant.id}`} aria-label={`Abrir ${restaurant.name}`}><div className="cover"><span className="delivery">{restaurant.delivery === 'Grátis' ? 'Entrega grátis' : restaurant.delivery}</span><button className="heart" type="button" aria-label="Favoritar" onClick={(event) => event.preventDefault()}>♡</button></div><div className="info"><h3>{restaurant.name}</h3><p>{restaurant.description}</p><div className="meta"><span className="rating">★ {restaurant.rating}</span><span>◷ {restaurant.time}</span><span>{restaurant.category}</span></div></div></Link>
      </RestaurantCard>) : <EmptyState>Nenhum restaurante encontrado. Tente outra busca.</EmptyState>}</RestaurantGrid>
    </Shell></Main>
    <Footer />
  </Page>
}

const EmptyState = styled.div`
  grid-column: 1 / -1; padding: 60px; border: 1px dashed #e6d8d0; border-radius: 16px; text-align: center; color: #897b75;
`

const FooterWrap = styled.footer`
  border-top: 1px solid #eee3de; padding: 34px 0 42px; color: #897b75; font-size: 12px;
  .footer-inner { display: flex; justify-content: space-between; gap: 20px; align-items: center; }
  strong { color: #e94d4d; font-size: 18px; letter-spacing: -1px; }
  @media (max-width: 600px) { .footer-inner { align-items: start; flex-direction: column; } }
`

function Footer() { return <FooterWrap><Shell><div className="footer-inner"><strong>✦ efood</strong><span>Feito para deixar seu dia mais gostoso.</span><span>© 2024 efood</span></div></Shell></FooterWrap> }

const DetailHero = styled.section`
  min-height: 390px; display: flex; align-items: end; position: relative; color: #fff; background: ${({ src }) => `url(${src}) center/cover`};
  &::before { content: ''; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(37, 14, 14, .08), rgba(37, 14, 14, .82)); }
  .content { position: relative; z-index: 1; width: 100%; padding: 45px 0 40px; }
  .back { display: inline-flex; margin-bottom: 80px; color: #fff; font-size: 13px; font-weight: 700; opacity: .9; }
  .restaurant-heading { display: flex; align-items: end; justify-content: space-between; gap: 24px; }
  h1 { margin: 0 0 9px; font-family: 'Playfair Display', serif; font-size: clamp(38px, 5vw, 60px); letter-spacing: -1.8px; }
  p { margin: 0; color: rgba(255,255,255,.82); max-width: 580px; font-size: 14px; }
  .restaurant-meta { display: flex; gap: 18px; margin-top: 20px; font-size: 13px; font-weight: 600; }
  @media (max-width: 650px) { min-height: 340px; .back { margin-bottom: 55px; } .restaurant-heading { display: block; } }
`

const DetailMain = styled.main`
  padding: 62px 0 110px;
  .detail-layout { display: grid; grid-template-columns: minmax(0, 1fr) 300px; gap: 68px; align-items: start; }
  @media (max-width: 850px) { .detail-layout { grid-template-columns: 1fr; gap: 30px; } }
`

const ProductSection = styled.section`
  margin-bottom: 48px;
  h2 { font-family: 'Playfair Display', serif; font-size: 28px; margin: 0 0 18px; letter-spacing: -.7px; }
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

const OrderAside = styled.aside`
  position: sticky; top: 99px; padding: 22px; border: 1px solid #ecdfda; border-radius: 16px; background: #fff;
  h3 { margin: 0 0 18px; font-size: 17px; }
  .empty { color: #968881; font-size: 13px; line-height: 1.5; }
  .item { display: grid; grid-template-columns: 24px 1fr auto; gap: 10px; padding: 12px 0; border-bottom: 1px solid #f1e8e3; font-size: 12px; }
  .quantity { color: #e94d4d; font-weight: 800; }
  .item strong { display: block; margin-bottom: 4px; font-size: 12px; }
  .item small { color: #948680; }
  .totals { margin-top: 18px; display: grid; gap: 10px; font-size: 12px; color: #847670; }
  .total { display: flex; justify-content: space-between; color: #292323; font-size: 16px; font-weight: 800; margin-top: 4px; }
  .cta { width: 100%; margin-top: 18px; padding: 13px; border: 0; border-radius: 8px; background: #e94d4d; color: #fff; font-weight: 700; }
  @media (max-width: 850px) { position: static; }
`

function OrderSummary({ compact = false }) {
  const { items, subtotal, delivery, total } = useCart()
  const navigate = useNavigate()
  return <OrderAside>
    <h3>{compact ? 'Resumo do pedido' : 'Seu pedido'}</h3>
    {items.length === 0 ? <p className="empty">Seu carrinho está esperando uma escolha deliciosa.</p> : <>
      {items.map((item) => <div className="item" key={item.product.id}><span className="quantity">{item.quantity}×</span><span><strong>{item.product.name}</strong><small>{item.restaurantName}</small></span><span>{money(item.product.price * item.quantity)}</span></div>)}
      <div className="totals"><span>Subtotal <b>{money(subtotal)}</b></span><span>Entrega <b>{delivery ? money(delivery) : 'Grátis'}</b></span><span className="total">Total <b>{money(total)}</b></span></div>
      {!compact && <button className="cta" type="button" onClick={() => navigate('/checkout')}>Continuar pedido</button>}
    </>}
  </OrderAside>
}

function RestaurantPage() {
  const { id } = useParams()
  const restaurant = restaurants.find((item) => item.id === id) || restaurants[0]
  const { addItem } = useCart()
  const [added, setAdded] = useState('')
  return <Page><HeaderBar /><DetailHero src={restaurant.cover}><Shell><div className="content"><Link className="back" to="/">← Voltar para restaurantes</Link><div className="restaurant-heading"><div><h1>{restaurant.name}</h1><p>{restaurant.description}</p><div className="restaurant-meta"><span>★ {restaurant.rating}</span><span>◷ {restaurant.time}</span><span>⌁ {restaurant.delivery}</span></div></div></div></div></Shell></DetailHero><DetailMain><Shell><div className="detail-layout"><div>{restaurant.sections.map((section) => <ProductSection key={section.title}><Eyebrow>{restaurant.category}</Eyebrow><h2>{section.title}</h2>{section.items.map((product) => <ProductRow key={product.id} src={product.image}><div className="image" /><div className="copy"><h3>{product.name}</h3><p>{product.description}</p><span className="price">{money(product.price)}</span></div><button type="button" onClick={() => { addItem(restaurant, product); setAdded(product.id); setTimeout(() => setAdded(''), 1600) }} aria-label={`Adicionar ${product.name}`}>+</button></ProductRow>)}</ProductSection>)}</div><OrderSummary /></div></Shell></DetailMain>{added && <Toast>✓ Adicionado ao seu pedido</Toast>}</Page>
}

const Toast = styled.div`
  position: fixed; left: 50%; bottom: 28px; transform: translateX(-50%); z-index: 30; padding: 13px 18px; border-radius: 9px; color: #fff; background: #292323; box-shadow: 0 12px 30px rgba(0,0,0,.2); font-size: 13px; font-weight: 700;
`

const CheckoutLayout = styled.main`
  padding: 64px 0 100px;
  .grid { display: grid; grid-template-columns: minmax(0, 1fr) 330px; gap: 65px; align-items: start; }
  h1 { font-family: 'Playfair Display', serif; font-size: clamp(36px, 5vw, 56px); margin: 0 0 8px; letter-spacing: -1.5px; }
  .intro { color: #8b7d76; font-size: 14px; margin: 0 0 32px; }
  @media (max-width: 850px) { .grid { grid-template-columns: 1fr; gap: 32px; } }
`

const Form = styled.form`
  display: grid; gap: 16px; max-width: 620px;
  .row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
  label { display: grid; gap: 8px; color: #5f514c; font-size: 12px; font-weight: 700; }
  input, select { width: 100%; padding: 13px 14px; border: 1px solid #e8dcd6; border-radius: 8px; outline: 0; background: #fff; color: #292323; font-size: 13px; }
  input:focus, select:focus { border-color: #e94d4d; box-shadow: 0 0 0 3px rgba(233, 77, 77, .11); }
  button { margin-top: 8px; width: fit-content; padding: 14px 22px; background: #e94d4d; color: white; border: 0; border-radius: 8px; font-weight: 700; }
  @media (max-width: 560px) { .row { grid-template-columns: 1fr; } }
`

function CheckoutPage() {
  const { items, clear } = useCart()
  const [confirmed, setConfirmed] = useState(false)
  const navigate = useNavigate()
  if (confirmed) return <Page><HeaderBar /><CheckoutLayout><Shell><SuccessCard><span className="mark">✓</span><Eyebrow>Pedido confirmado</Eyebrow><h1>Já estamos preparando tudo.</h1><p>Seu pedido foi recebido pela cozinha. Em poucos minutos ele estará a caminho de você.</p><Link to="/" className="back-home">Voltar para o início</Link></SuccessCard></Shell></CheckoutLayout></Page>
  return <Page><HeaderBar /><CheckoutLayout><Shell><div className="grid"><div><Eyebrow>Quase lá</Eyebrow><h1>Finalize seu pedido.</h1><p className="intro">Preencha seus dados para receber uma experiência deliciosa.</p><Form onSubmit={(event) => { event.preventDefault(); if (items.length) { clear(); setConfirmed(true) } }}><div className="row"><label>Nome completo<input required placeholder="Como podemos chamar você?" /></label><label>Telefone<input required placeholder="(00) 00000-0000" /></label></div><label>Endereço de entrega<input required placeholder="Rua, número e complemento" /></label><div className="row"><label>Bairro<input required placeholder="Seu bairro" /></label><label>Forma de pagamento<select defaultValue="pix"><option value="pix">Pix</option><option value="card">Cartão na entrega</option><option value="cash">Dinheiro</option></select></label></div><button type="submit">Confirmar pedido</button></Form></div><OrderSummary compact /></div></Shell></CheckoutLayout></Page>
}

const SuccessCard = styled.div`
  max-width: 640px; margin: 30px auto 70px; padding: 64px 28px; text-align: center; border-radius: 18px; background: #fff; border: 1px solid #ecdfda; .mark { display: grid; place-items: center; width: 60px; height: 60px; margin: 0 auto 24px; border-radius: 50%; color: #fff; background: #2e9b6f; font-size: 28px; } .eyebrow { justify-content: center; } h1 { font-size: 43px !important; } p { max-width: 430px; margin: 0 auto 26px; color: #897b75; line-height: 1.6; font-size: 14px; } .back-home { display: inline-block; color: #e94d4d; font-size: 13px; font-weight: 700; }
`

function App() { return <CartProvider><GlobalStyle /><Routes><Route path="/" element={<HomePage />} /><Route path="/restaurant/:id" element={<RestaurantPage />} /><Route path="/checkout" element={<CheckoutPage />} /><Route path="*" element={<HomePage />} /></Routes></CartProvider> }

createRoot(document.getElementById('root')).render(<BrowserRouter><App /></BrowserRouter>)
