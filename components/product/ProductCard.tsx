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

  return (
    <div
      className="bg-white dark:bg-dark-card rounded-lg shadow-soft overflow-hidden hover:shadow-soft-lg transition-all"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />

        {/* Badge */}
        {product.originalPrice && product.originalPrice > product.price && (
          <div className="absolute top-3 right-3 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
            Sale
          </div>
        )}

        {/* Actions */}
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="p-3 bg-white rounded-full hover:bg-gray-100 transition"
            >
              <Heart
                className="w-5 h-5 text-accent"
                fill={isFavorite ? 'currentColor' : 'none'}
              />
            </button>
            <button
              onClick={() => onAddToCart?.(product)}
              className="p-3 bg-white rounded-full hover:bg-gray-100 transition"
            >
              <ShoppingCart className="w-5 h-5 text-primary" />
            </button>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-sm line-clamp-2 mb-2">
          <Link
            href={`/products/${product.id}`}
            className="hover:text-primary transition"
          >
            {product.name}
          </Link>
        </h3>

        <p className="text-xs text-gray-500 mb-3">{product.category}</p>

        {/* Rating */}
        {product.rating && (
          <div className="flex items-center gap-1 mb-3">
            <div className="text-yellow-400">★</div>
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-xs text-gray-500">({product.reviews})</span>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="text-sm text-gray-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Stock Status */}
        <div className="mt-3 text-xs font-medium">
          {product.stock > 5 ? (
            <span className="text-green-600">In Stock</span>
          ) : product.stock > 0 ? (
            <span className="text-orange-600">Low Stock ({product.stock})</span>
          ) : (
            <span className="text-red-600">Out of Stock</span>
          )}
        </div>
      </div>
    </div>
  )
}
