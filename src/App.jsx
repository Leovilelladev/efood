import { Route, Routes } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { GlobalStyle } from './styles/global'
import { HomePage } from './pages/HomePage'
import { RestaurantMenuPage } from './pages/RestaurantMenuPage'

export function App() {
  return <CartProvider>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/restaurant/:id" element={<RestaurantMenuPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  </CartProvider>
}
