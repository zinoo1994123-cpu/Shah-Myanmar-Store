import { supabase } from './supabase'
import type { Product, Category } from '@/types'

// Fetch all products with pagination
export async function fetchProducts(page = 1, limit = 12) {
  const from = (page - 1) * limit
  const to = from + limit - 1

  const { data, error, count } = await supabase
    .from('products')
    .select('*', { count: 'exact' })
    .range(from, to)
    .order('createdAt', { ascending: false })

  if (error) {
    console.error('Error fetching products:', error)
    return { products: [], total: 0, error }
  }

  return { products: data as Product[], total: count || 0, error: null }
}

// Fetch products by category
export async function fetchProductsByCategory(categoryId: string, page = 1, limit = 12) {
  const from = (page - 1) * limit
  const to = from + limit - 1

  const { data, error, count } = await supabase
    .from('products')
    .select('*', { count: 'exact' })
    .eq('category', categoryId)
    .range(from, to)
    .order('createdAt', { ascending: false })

  if (error) {
    console.error('Error fetching products by category:', error)
    return { products: [], total: 0, error }
  }

  return { products: data as Product[], total: count || 0, error: null }
}

// Fetch featured products
export async function fetchFeaturedProducts(limit = 6) {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('featured', true)
    .limit(limit)
    .order('rating', { ascending: false })

  if (error) {
    console.error('Error fetching featured products:', error)
    return { products: [], error }
  }

  return { products: data as Product[], error: null }
}

// Fetch single product by ID
export async function fetchProductById(id: string) {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single()

  if (error) {
    console.error('Error fetching product:', error)
    return { product: null, error }
  }

  return { product: data as Product, error: null }
}

// Search products
export async function searchProducts(query: string, limit = 20) {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .or(`name.ilike.%${query}%,description.ilike.%${query}%,brand.ilike.%${query}%`)
    .limit(limit)
    .order('rating', { ascending: false })

  if (error) {
    console.error('Error searching products:', error)
    return { products: [], error }
  }

  return { products: data as Product[], error: null }
}

// Fetch all categories
export async function fetchCategories() {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name', { ascending: true })

  if (error) {
    console.error('Error fetching categories:', error)
    return { categories: [], error }
  }

  return { categories: data as Category[], error: null }
}

// Get product recommendations
export async function fetchRecommendedProducts(productId: string, limit = 4) {
  const { data: currentProduct } = await supabase
    .from('products')
    .select('category')
    .eq('id', productId)
    .single()

  if (!currentProduct) {
    return { products: [], error: 'Product not found' }
  }

  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('category', currentProduct.category)
    .neq('id', productId)
    .limit(limit)
    .order('rating', { ascending: false })

  if (error) {
    console.error('Error fetching recommended products:', error)
    return { products: [], error }
  }

  return { products: data as Product[], error: null }
}
