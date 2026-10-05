import { Route, Routes } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import { GlobalStyle } from './styles/global'
import { CheckoutPage } from './pages/CheckoutPage'
import { HomePage } from './pages/HomePage'
import { RestaurantPage } from './pages/RestaurantPage'

export function App() {
  return <CartProvider><GlobalStyle /><Routes><Route path="/" element={<HomePage />} /><Route path="/restaurant/:id" element={<RestaurantPage />} /><Route path="/checkout" element={<CheckoutPage />} /><Route path="*" element={<HomePage />} /></Routes></CartProvider>
}
