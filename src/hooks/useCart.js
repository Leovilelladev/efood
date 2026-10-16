import { useDispatch, useSelector } from 'react-redux'
import {
  addItem as addItemAction,
  clearCart as clearCartAction,
  selectCount,
  selectDelivery,
  selectItems,
  selectSubtotal,
  selectTotal,
  updateItem as updateItemAction,
} from '../store/cartSlice'

export function useCart() {
  const dispatch = useDispatch()
  const items = useSelector(selectItems)
  const subtotal = useSelector(selectSubtotal)
  const delivery = useSelector(selectDelivery)
  const total = useSelector(selectTotal)
  const count = useSelector(selectCount)

  return {
    items,
    addItem: (restaurant, product, quantityToAdd = 1) => dispatch(addItemAction({ restaurant, product, quantityToAdd })),
    updateItem: (productId, delta) => dispatch(updateItemAction({ productId, delta })),
    clearCart: () => dispatch(clearCartAction()),
    subtotal,
    delivery,
    total,
    count,
  }
}
