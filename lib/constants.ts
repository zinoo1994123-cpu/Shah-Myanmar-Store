/**
 * Application-wide constants
 */

export const SITE_NAME = 'SHAH Myanmar Store'
export const SITE_DESCRIPTION = 'Premium Myanmar Food & Grocery Store in Malaysia'
export const SITE_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

export const COLORS = {
  primary: '#8B5A2B',
  secondary: '#D4AF37',
  background: '#FAF8F3',
  accent: '#8B0000',
}

export const DELIVERY_METHODS = {
  COURIER: 'courier',
  PICKUP: 'pickup',
} as const

export const ORDER_STATUS = {
  PENDING: 'pending',
  CONFIRMED: 'confirmed',
  PACKED: 'packed',
  SHIPPING: 'shipping',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
} as const

export const PAGINATION = {
  DEFAULT_LIMIT: 20,
  MAX_LIMIT: 100,
} as const
