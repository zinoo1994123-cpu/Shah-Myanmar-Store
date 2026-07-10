import { createServerClient } from './supabase'

const supabase = createServerClient()

/**
 * Database query helpers
 * Centralized queries for consistency and reusability
 */

export const db = {
  // Products
  async getProducts(limit = 20, offset = 0) {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .range(offset, offset + limit - 1)
    if (error) throw error
    return data
  },

  async getProductById(id: string) {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', id)
      .single()
    if (error) throw error
    return data
  },

  // Categories
  async getCategories() {
    const { data, error } = await supabase
      .from('categories')
      .select('*')
      .order('name')
    if (error) throw error
    return data
  },

  // Orders
  async getOrdersByUser(userId: string) {
    const { data, error } = await supabase
      .from('orders')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
    if (error) throw error
    return data
  },
}
