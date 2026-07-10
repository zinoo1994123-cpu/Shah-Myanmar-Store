'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Search, Heart, ShoppingCart, User } from 'lucide-react'
import { useCart } from '@/hooks/useCart'
import { useAuth } from '@/hooks/useAuth'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { itemCount } = useCart()
  const { user } = useAuth()

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
            <Link href="/shop" className="hover:text-primary transition">
              Shop
            </Link>
            <Link href="/categories" className="hover:text-primary transition">
              Categories
            </Link>
            <Link href="/about" className="hover:text-primary transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-primary transition">
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-dark-bg rounded-lg">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-dark-bg rounded-lg">
              <Heart className="w-5 h-5" />
            </button>
            <Link
              href="/cart"
              className="relative p-2 hover:bg-gray-100 dark:hover:bg-dark-bg rounded-lg"
            >
              <ShoppingCart className="w-5 h-5" />
              {itemCount() > 0 && (
                <span className="absolute top-0 right-0 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount()}
                </span>
              )}
            </Link>
            <Link href={user ? '/dashboard' : '/login'}>
              <button className="p-2 hover:bg-gray-100 dark:hover:bg-dark-bg rounded-lg">
                <User className="w-5 h-5" />
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-dark-bg rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden border-t py-4 space-y-2">
            <Link href="/shop" className="block px-4 py-2 hover:bg-gray-100 rounded-lg">
              Shop
            </Link>
            <Link href="/categories" className="block px-4 py-2 hover:bg-gray-100 rounded-lg">
              Categories
            </Link>
            <Link href="/about" className="block px-4 py-2 hover:bg-gray-100 rounded-lg">
              About
            </Link>
            <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100 rounded-lg">
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
