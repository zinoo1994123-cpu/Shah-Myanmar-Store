export const LOCALES = {
  EN: 'en',
  MY: 'my',
} as const

export const LOCALE_NAMES = {
  en: 'English',
  my: 'မြန်မာ',
} as const

export const DEFAULT_LOCALE = 'en'

export const PRODUCTS_PER_PAGE = 12

export const CATEGORIES = [
  { id: 'groceries', name: 'Groceries', icon: '🛒' },
  { id: 'snacks', name: 'Snacks & Beverages', icon: '🍿' },
  { id: 'fresh-produce', name: 'Fresh Produce', icon: '🥬' },
  { id: 'dairy', name: 'Dairy & Eggs', icon: '🥛' },
  { id: 'spices', name: 'Spices & Seasonings', icon: '🌶️' },
  { id: 'ready-meals', name: 'Ready Meals', icon: '🍲' },
] as const

export const SITE_NAME = 'SHAH Myanmar Store'
export const SITE_DESCRIPTION = 'Premium Myanmar Food & Grocery E-commerce Website for Malaysia'
export const CONTACT_EMAIL = 'contact@shahstore.com'
export const CONTACT_PHONE = '+60 12-3456-7890'
