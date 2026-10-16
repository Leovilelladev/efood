import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const { restaurant, product, quantityToAdd = 1 } = action.payload
      const existingItem = state.items.find((item) => item.product.id === product.id)

      if (existingItem) {
        existingItem.quantity += quantityToAdd
        return
      }

      state.items.push({
        restaurantId: restaurant.id,
        restaurantName: restaurant.name,
        product,
        quantity: quantityToAdd,
      })
    },
    updateItem(state, action) {
      const { productId, delta } = action.payload
      const item = state.items.find((cartItem) => cartItem.product.id === productId)

      if (!item) return

      item.quantity += delta

      if (item.quantity <= 0) {
        state.items = state.items.filter((cartItem) => cartItem.product.id !== productId)
      }
    },
    clearCart(state) {
      state.items = []
    },
  },
})

export const { addItem, updateItem, clearCart } = cartSlice.actions

export const selectItems = (state) => state.cart.items
export const selectSubtotal = (state) => state.cart.items.reduce(
  (total, item) => total + item.product.price * item.quantity,
  0,
)
export const selectDelivery = () => 0
export const selectTotal = (state) => selectSubtotal(state) + selectDelivery(state)
export const selectCount = (state) => state.cart.items.reduce(
  (totalItems, item) => totalItems + item.quantity,
  0,
)

export default cartSlice.reducer
