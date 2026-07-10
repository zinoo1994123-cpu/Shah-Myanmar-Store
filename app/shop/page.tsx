'use client'

import { useState } from 'react'
import { ProductCard } from '@/components/product/ProductCard'
import type { Product } from '@/types'

// Sample data - Replace with API call
const SAMPLE_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Golden Shan Noodles',
    description: 'Traditional Shan noodles',
    price: 15.99,
    originalPrice: 18.99,
    image: 'https://via.placeholder.com/300x300?text=Shan+Noodles',
    category: 'Snacks',
    brand: 'SHAH',
    stock: 50,
    sku: 'SHAN001',
    rating: 4.5,
    reviews: 120,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Myanmar Turmeric Powder',
    description: 'Pure turmeric powder from Myanmar',
    price: 8.99,
    image: 'https://via.placeholder.com/300x300?text=Turmeric',
    category: 'Spices',
    brand: 'SHAH',
    stock: 100,
    sku: 'SPICE001',
    rating: 4.8,
    reviews: 89,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
]

export default function ShopPage() {
  const [products] = useState(SAMPLE_PRODUCTS)
  const [sortBy, setSortBy] = useState('popular')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  return (
    <div className="min-h-screen bg-background dark:bg-dark-bg py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Shop Products</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Discover our premium collection of Myanmar products
          </p>
        </div>

        {/* Filters & Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card"
            >
              <option value="popular">Most Popular</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-lg transition ${
                viewMode === 'grid'
                  ? 'bg-primary text-white'
                  : 'border border-gray-300 dark:border-gray-600'
              }`}
            >
              Grid
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-lg transition ${
                viewMode === 'list'
                  ? 'bg-primary text-white'
                  : 'border border-gray-300 dark:border-gray-600'
              }`}
            >
              List
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div
          className={`grid gap-6 ${
            viewMode === 'grid'
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
              : 'grid-cols-1'
          }`}
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={(p) => console.log('Add to cart:', p)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
