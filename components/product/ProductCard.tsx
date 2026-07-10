'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Heart, ShoppingCart, Star } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import type { Product } from '@/types'

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const t = useTranslations('products')
  const [isFavorite, setIsFavorite] = useState(false)
  const [isAdding, setIsAdding] = useState(false)

  const handleAddToCart = async () => {
    setIsAdding(true)
    onAddToCart(product)
    
    // Simulate adding animation
    setTimeout(() => {
      setIsAdding(false)
    }, 600)
  }

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsFavorite(!isFavorite)
  }

  const discountPercent = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  const stockStatus = product.stock > 10 ? 'inStock' : product.stock > 0 ? 'lowStock' : 'outOfStock'
  const isOutOfStock = product.stock === 0

  return (
    <Link href={`/products/${product.id}`}>
      <div className="group h-full bg-white dark:bg-dark-card rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 overflow-hidden hover:-translate-y-1 cursor-pointer">
        {/* Image Container */}
        <div className="relative h-64 bg-gray-100 dark:bg-dark-bg overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />

          {/* Discount Badge */}
          {discountPercent > 0 && (
            <div className="absolute top-3 right-3 bg-accent text-white px-3 py-1 rounded-full text-sm font-bold shadow-soft">
              -{discountPercent}%
            </div>
          )}

          {/* Stock Status Badge */}
          <div
            className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white shadow-soft ${
              product.stock > 10
                ? 'bg-green-500'
                : product.stock > 0
                ? 'bg-yellow-500'
                : 'bg-red-500'
            }`}
          >
            {t(stockStatus)}
          </div>

          {/* Favorite Button */}
          <button
            onClick={toggleFavorite}
            className="absolute bottom-3 right-3 bg-white dark:bg-dark-bg rounded-full p-2 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:scale-110 z-10"
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            <Heart
              className={`w-5 h-5 transition-all duration-300 ${
                isFavorite
                  ? 'fill-red-500 text-red-500'
                  : 'text-gray-400 dark:text-gray-600 hover:text-red-500'
              }`}
            />
          </button>

          {/* Out of Stock Overlay */}
          {isOutOfStock && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-sm">
              <div className="bg-white dark:bg-dark-card px-4 py-2 rounded-lg">
                <p className="text-gray-900 dark:text-white font-semibold">{t('outOfStock')}</p>
              </div>
            </div>
          )}
        </div>

        {/* Content Container */}
        <div className="p-4 flex flex-col h-full">
          {/* Brand */}
          {product.brand && (
            <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
              {product.brand}
            </p>
          )}

          {/* Product Name */}
          <h3 className="font-semibold text-gray-900 dark:text-white line-clamp-2 group-hover:text-primary transition-colors mb-2">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
            {product.description}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300 dark:text-gray-600'
                  }`}
                />
              ))}
            </div>
            {product.reviews && (
              <span className="text-xs text-gray-500 dark:text-gray-400">
                ({product.reviews})
              </span>
            )}
          </div>

          {/* Price Section - Flex grow to push to bottom */}
          <div className="mt-auto">
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-2xl font-bold text-primary">
                RM {product.price.toFixed(2)}
              </span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="text-sm text-gray-400 dark:text-gray-500 line-through">
                  RM {product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={(e) => {
                e.preventDefault()
                handleAddToCart()
              }}
              disabled={isOutOfStock || isAdding}
              className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                isOutOfStock
                  ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                  : isAdding
                  ? 'bg-green-500 text-white scale-105'
                  : 'bg-gradient-to-r from-primary to-primary/80 text-white hover:shadow-soft-lg hover:scale-105'
              }`}
            >
              <ShoppingCart className={`w-5 h-5 transition-transform ${isAdding ? 'scale-110' : ''}`} />
              <span>{isAdding ? t('save') : t('addToCart')}</span>
            </button>

            {/* Stock Status Message */}
            {product.stock > 0 && product.stock <= 10 && !isOutOfStock && (
              <p className="text-xs text-orange-600 dark:text-orange-400 mt-2 text-center font-medium">
                Only {product.stock} {t('inStock')}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
