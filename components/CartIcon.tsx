'use client'

import { useCart } from '@/lib/cart-context'
import { ShoppingCart, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useTranslations } from 'next-intl'

export function CartIcon() {
  const { totalItems, items, totalPrice } = useCart()
  const t = useTranslations('common')
  const [showPreview, setShowPreview] = useState(false)

  return (
    <div className="relative">
      {/* Cart Icon Button */}
      <Link
        href="/cart"
        className="relative flex items-center justify-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-dark-bg transition-colors duration-300"
        aria-label={`Shopping cart with ${totalItems} items`}
      >
        <ShoppingCart className="w-6 h-6 text-gray-700 dark:text-gray-300" />

        {/* Cart Count Badge */}
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 bg-accent text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow-soft">
            {totalItems > 99 ? '99+' : totalItems}
          </span>
        )}
      </Link>

      {/* Cart Preview Tooltip */}
      {totalItems > 0 && (
        <button
          onMouseEnter={() => setShowPreview(true)}
          onMouseLeave={() => setShowPreview(false)}
          onClick={() => setShowPreview(!showPreview)}
          className="absolute right-0 top-12 bg-white dark:bg-dark-card rounded-lg shadow-soft-lg border border-gray-200 dark:border-gray-700 p-4 min-w-72 z-50 hidden sm:block"
          style={{ display: showPreview ? 'block' : 'none' }}
        >
          {items.length > 0 ? (
            <>
              {/* Preview Items */}
              <div className="max-h-48 overflow-y-auto mb-3 space-y-2">
                {items.slice(0, 3).map((item) => (
                  <div key={item.product.id} className="flex gap-2 text-sm">
                    <span className="text-gray-600 dark:text-gray-400 font-medium">
                      {item.quantity}x
                    </span>
                    <span className="flex-1 text-gray-900 dark:text-white line-clamp-1">
                      {item.product.name}
                    </span>
                    <span className="text-primary font-semibold">
                      RM {(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}

                {items.length > 3 && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-1">
                    +{items.length - 3} more item(s)
                  </p>
                )}
              </div>

              {/* Total */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-3 mb-3">
                <div className="flex justify-between mb-3">
                  <span className="font-semibold text-gray-900 dark:text-white">Total:</span>
                  <span className="font-bold text-primary text-lg">RM {totalPrice.toFixed(2)}</span>
                </div>

                {/* View Cart Button */}
                <Link
                  href="/cart"
                  className="w-full bg-gradient-to-r from-primary to-primary/80 text-white py-2 rounded-lg font-semibold hover:shadow-soft-lg transition-all duration-300 text-center block"
                >
                  {t('viewCart')}
                </Link>
              </div>
            </>
          ) : (
            <p className="text-gray-600 dark:text-gray-400 text-center py-2">
              {t('cartEmpty')}
            </p>
          )}
        </button>
      )}
    </div>
  )
}
