/**
 * TypeScript type definitions for the application
 */

export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  images?: string[]
  video?: string
  category: string
  brand?: string
  stock: number
  sku: string
  barcode?: string
  weight?: number
  ingredients?: string[]
  nutritionFacts?: Record<string, string>
  country?: string
  tags?: string[]
  rating?: number
  reviews?: number
  createdAt: string
  updatedAt: string
}

export interface Category {
  id: string
  name: string
  description?: string
  image?: string
  slug: string
  parentId?: string
  createdAt: string
}

export interface Order {
  id: string
  userId: string
  items: OrderItem[]
  subtotal: number
  tax: number
  shippingCost: number
  total: number
  status: 'pending' | 'confirmed' | 'packed' | 'shipping' | 'delivered' | 'cancelled'
  shippingAddress: Address
  deliveryMethod: 'courier' | 'pickup'
  paymentMethod: string
  trackingNumber?: string
  createdAt: string
  updatedAt: string
}

export interface OrderItem {
  productId: string
  productName: string
  quantity: number
  price: number
  image: string
}

export interface Address {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  postalCode: string
  country: string
}

export interface Review {
  id: string
  productId: string
  userId: string
  rating: number
  title: string
  comment: string
  createdAt: string
}

export interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  avatar?: string
  createdAt: string
}
