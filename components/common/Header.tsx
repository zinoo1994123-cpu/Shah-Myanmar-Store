'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { useState } from 'react'
import { Menu, X, Search, Heart, ShoppingCart, User } from 'lucide-react'
import { useCart } from '@/hooks/useCart'
import { useAuth } from '@/hooks/useAuth'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { itemCount } = useCart()
  const { user } = useAuth()
  const t = useTranslations()

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-dark-card shadow-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 font-bold text-xl">
            <span className="text-primary">SHAH</span>
            <span className="text-secondary"> Myanmar</span>
          </Link>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/shop" className="hover:text-primary transition font-medium">
              {t('nav.shop')}
            </Link>
            <Link href="/categories" className="hover:text-primary transition font-medium">
              {t('nav.categories')}
            </Link>
            <Link href="/about" className="hover:text-primary transition font-medium">
              {t('nav.about')}
            </Link>
            <Link href="/contact" className="hover:text-primary transition font-medium">
              {t('nav.contact')}
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            {/* Language Switcher */}
            <LanguageSwitcher />

            <button className="p-2 hover:bg-gray-100 dark:hover:bg-dark-bg rounded-lg transition">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-dark-bg rounded-lg transition">
              <Heart className="w-5 h-5" />
            </button>
            <Link
              href="/cart"
              className="relative p-2 hover:bg-gray-100 dark:hover:bg-dark-bg rounded-lg transition"
            >
              <ShoppingCart className="w-5 h-5" />
              {itemCount() > 0 && (
                <span className="absolute top-0 right-0 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {itemCount()}
                </span>
              )}
            </Link>
            <Link href={user ? '/dashboard' : '/login'}>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-dark-bg rounded-lg transition">
                <User className="w-5 h-5" />
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-dark-bg rounded-lg transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden border-t border-gray-200 dark:border-gray-700 py-4 space-y-2">
            <Link
              href="/shop"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-dark-bg rounded-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.shop')}
            </Link>
            <Link
              href="/categories"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-dark-bg rounded-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.categories')}
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-dark-bg rounded-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.about')}
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-dark-bg rounded-lg font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.contact')}
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
