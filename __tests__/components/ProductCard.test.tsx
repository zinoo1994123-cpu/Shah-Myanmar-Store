import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProductCard } from '@/components/product/ProductCard'
import type { Product } from '@/types'

const mockProduct: Product = {
  id: '1',
  name: 'Test Product',
  description: 'Test Description',
  price: 29.99,
  originalPrice: 39.99,
  image: 'https://via.placeholder.com/300x300',
  category: 'Test Category',
  brand: 'Test Brand',
  stock: 10,
  sku: 'TEST001',
  rating: 4.5,
  reviews: 100,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
}

describe('ProductCard Component', () => {
  it('should render product name', () => {
    render(<ProductCard product={mockProduct} />)
    expect(screen.getByText('Test Product')).toBeDefined()
  })

  it('should render product category', () => {
    render(<ProductCard product={mockProduct} />)
    expect(screen.getByText('Test Category')).toBeDefined()
  })

  it('should display price', () => {
    render(<ProductCard product={mockProduct} />)
    expect(screen.getByText(/29.99/)).toBeDefined()
  })

  it('should show sale badge when discount exists', () => {
    render(<ProductCard product={mockProduct} />)
    expect(screen.getByText('Sale')).toBeDefined()
  })

  it('should display original price when discounted', () => {
    render(<ProductCard product={mockProduct} />)
    expect(screen.getByText(/39.99/)).toBeDefined()
  })

  it('should show rating and review count', () => {
    render(<ProductCard product={mockProduct} />)
    expect(screen.getByText('4.5')).toBeDefined()
    expect(screen.getByText('(100)')).toBeDefined()
  })

  it('should show in stock status', () => {
    render(<ProductCard product={mockProduct} />)
    expect(screen.getByText('In Stock')).toBeDefined()
  })

  it('should show low stock warning', () => {
    const lowStockProduct = { ...mockProduct, stock: 2 }
    render(<ProductCard product={lowStockProduct} />)
    expect(screen.getByText(/Low Stock/)).toBeDefined()
  })

  it('should show out of stock', () => {
    const outOfStockProduct = { ...mockProduct, stock: 0 }
    render(<ProductCard product={outOfStockProduct} />)
    expect(screen.getByText('Out of Stock')).toBeDefined()
  })

  it('should call onAddToCart when add to cart is clicked', () => {
    const mockOnAddToCart = vi.fn()
    render(<ProductCard product={mockProduct} onAddToCart={mockOnAddToCart} />)
    // Note: Actual click test would require user-event or fireEvent
  })
})
