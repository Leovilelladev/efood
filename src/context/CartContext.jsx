import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  function addItem(restaurant, product) {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.product.id === product.id)
      if (existingItem) return currentItems.map((item) => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
      return [...currentItems, { restaurantId: restaurant.id, restaurantName: restaurant.name, product, quantity: 1 }]
    })
  }

  function updateItem(productId, delta) {
    setItems((currentItems) => currentItems.flatMap((item) => {
      if (item.product.id !== productId) return [item]
      const quantity = item.quantity + delta
      return quantity > 0 ? [{ ...item, quantity }] : []
    }))
  }

  function clearCart() { setItems([]) }

  const subtotal = items.reduce((total, item) => total + item.product.price * item.quantity, 0)
  const delivery = items.length ? (subtotal >= 70 ? 0 : 5.9) : 0
  const total = subtotal + delivery
  const count = items.reduce((totalItems, item) => totalItems + item.quantity, 0)
  const value = useMemo(() => ({ items, addItem, updateItem, clearCart, subtotal, delivery, total, count }), [items, subtotal, delivery, total, count])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart deve ser usado dentro de CartProvider')
  return context
}
