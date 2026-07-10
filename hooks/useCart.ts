'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  variantId?: string
}

interface CartStore {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  total: () => number
  itemCount: () => number
}

/**
 * Custom hook for cart management
 * Uses Zustand for state management with localStorage persistence
 */
export const useCart = create<CartStore>()(persist(
  (set, get) => ({
    items: [],
    addItem: (item) =>
      set((state) => {
        const existingItem = state.items.find(
          (i) => i.id === item.id && i.variantId === item.variantId
        )
        if (existingItem) {
          return {
            items: state.items.map((i) =>
              i.id === item.id && i.variantId === item.variantId
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            ),
          }
        }
        return { items: [...state.items, item] }
      }),
    removeItem: (id) =>
      set((state) => ({
        items: state.items.filter((i) => i.id !== id),
      })),
    updateQuantity: (id, quantity) =>
      set((state) => ({
        items: state.items.map((i) =>
          i.id === id ? { ...i, quantity } : i
        ),
      })),
    clearCart: () => set({ items: [] }),
    total: () =>
      get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    itemCount: () => get().items.reduce((sum, item) => sum + item.quantity, 0),
  }),
  {
    name: 'cart-storage',
  }
))
