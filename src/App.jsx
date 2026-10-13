import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { GlobalStyle } from './styles/global'
import { CheckoutPage } from './pages/CheckoutPage'
import { HomePage } from './pages/HomePage'
import { RestaurantMenuPage } from './pages/RestaurantMenuPage'

export function App() {
  const { pathname } = useLocation()

  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  return <CartProvider>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/restaurant/:id" element={<RestaurantMenuPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  </CartProvider>
}
