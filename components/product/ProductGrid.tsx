'use client'

import { useMemo, useState } from 'react'
import { ProductCard } from '@/components/product/ProductCard'
import type { Product } from '@/types'

interface ProductGridProps {
  products: Product[]
  onAddToCart?: (product: Product) => void
  isLoading?: boolean
}

export function ProductGrid({
  products,
  onAddToCart,
  isLoading = false,
}: ProductGridProps) {
  const [sortBy, setSortBy] = useState('popular')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const sortedProducts = useMemo(() => {
    const sorted = [...products]
    switch (sortBy) {
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price)
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price)
      case 'newest':
        return sorted.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
      case 'rating':
        return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0))
      default:
        return sorted
    }
  }, [products, sortBy])

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white dark:bg-dark-card p-4 rounded-xl shadow-soft">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-card text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="popular">Most Popular</option>
          <option value="newest">Newest</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>

        <div className="flex gap-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`px-4 py-2 rounded-lg transition font-medium ${
              viewMode === 'grid'
                ? 'bg-primary text-white shadow-soft'
                : 'border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-dark-bg'
            }`}
          >
            Grid
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`px-4 py-2 rounded-lg transition font-medium ${
              viewMode === 'list'
                ? 'bg-primary text-white shadow-soft'
                : 'border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-dark-bg'
            }`}
          >
            List
          </button>
        </div>
      </div>

      {/* Products */}
      {isLoading ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
        </div>
      ) : sortedProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400 text-lg">No products found</p>
        </div>
      ) : (
        <div
          className={`grid gap-6 ${
            viewMode === 'grid'
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
              : 'grid-cols-1'
          }`}
        >
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      )}
    </div>
  )
}
