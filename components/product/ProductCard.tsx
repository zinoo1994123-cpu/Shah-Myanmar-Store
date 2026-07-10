'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Heart, ShoppingCart } from 'lucide-react'
import { useState } from 'react'
import { formatPrice } from '@/lib/utils'
import type { Product } from '@/types'

interface ProductCardProps {
  product: Product
  onAddToCart?: (product: Product) => void
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0

  return (
    <div
      className="bg-white dark:bg-dark-card rounded-2xl shadow-soft overflow-hidden hover:shadow-soft-lg transition-all duration-300 group h-full flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <Link href={`/products/${product.id}`} className="flex-shrink-0">
        <div className="relative aspect-square overflow-hidden bg-gray-100 dark:bg-dark-bg">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />

          {/* Badge */}
          {discount > 0 && (
            <div className="absolute top-3 right-3 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold shadow-soft">
              -{discount}%
            </div>
          )}

          {/* Overlay Actions */}
          {isHovered && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-3 transition-all duration-300">
              <button
                onClick={(e) => {
                  e.preventDefault()
                  setIsFavorite(!isFavorite)
                }}
                className="p-3 bg-white rounded-full hover:bg-gray-100 transition shadow-soft-md transform hover:scale-110"
                title="Add to wishlist"
              >
                <Heart
                  className="w-5 h-5 text-accent"
                  fill={isFavorite ? 'currentColor' : 'none'}
                />
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  onAddToCart?.(product)
                }}
                className="p-3 bg-primary text-white rounded-full hover:bg-primary/80 transition shadow-soft-md flex items-center gap-2 px-4 transform hover:scale-110"
                title="Add to cart"
              >
                <ShoppingCart className="w-5 h-5" />
                <span className="text-sm font-semibold hidden sm:inline">Add</span>
              </button>
            </div>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <Link href={`/products/${product.id}`}>
            <h3 className="font-semibold text-sm line-clamp-2 mb-2 hover:text-primary transition text-gray-900 dark:text-white">
              {product.name}
            </h3>
          </Link>

          <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
            {product.category}
          </p>

          {/* Rating */}
          {product.rating && (
            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-0.5">
                {Array.from({ length: Math.floor(product.rating) }).map(
                  (_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">
                      ★
                    </span>
                  )
                )}
              </div>
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                {product.rating}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                ({product.reviews})
              </span>
            </div>
          )}
        </div>

        <div className="space-y-3">
          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-xs text-gray-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          {/* Stock Status */}
          <div className="text-xs font-medium">
            {product.stock > 5 ? (
              <span className="text-green-600 dark:text-green-400">✓ In Stock</span>
            ) : product.stock > 0 ? (
              <span className="text-orange-600 dark:text-orange-400">
                ⚠ Low Stock ({product.stock})
              </span>
            ) : (
              <span className="text-red-600 dark:text-red-400">✗ Out of Stock</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
