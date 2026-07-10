'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star, Truck, Shield, Zap } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { ProductCard } from '@/components/product/ProductCard'
import { useCart } from '@/hooks/useCart'
import type { Product } from '@/types'

// Sample featured categories
const FEATURED_CATEGORIES = [
  { id: 1, nameKey: 'spices', icon: '🌶️', color: 'from-red-500 to-orange-500' },
  { id: 2, nameKey: 'snacks', icon: '🥜', color: 'from-amber-500 to-yellow-500' },
  { id: 3, nameKey: 'beverages', icon: '☕', color: 'from-blue-500 to-cyan-500' },
  { id: 4, nameKey: 'riceGrains', icon: '🌾', color: 'from-green-500 to-emerald-500' },
]

// Sample featured products
const FEATURED_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Golden Shan Noodles',
    description: 'Traditional Shan noodles made with authentic Myanmar recipe',
    price: 15.99,
    originalPrice: 18.99,
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500&h=500&fit=crop',
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
    description: 'Pure turmeric powder from Myanmar highlands',
    price: 8.99,
    image: 'https://images.unsplash.com/photo-1596040281384-8ee6e34f6a6e?w=500&h=500&fit=crop',
    category: 'Spices',
    brand: 'SHAH',
    stock: 100,
    sku: 'SPICE001',
    rating: 4.8,
    reviews: 89,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'Exotic Myanmar Coffee',
    description: 'Premium arabica blend roasted to perfection',
    price: 24.99,
    originalPrice: 29.99,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=500&h=500&fit=crop',
    category: 'Beverages',
    brand: 'SHAH',
    stock: 30,
    sku: 'BEVER001',
    rating: 4.7,
    reviews: 156,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '4',
    name: 'Basmati Rice Premium',
    description: 'Long grain basmati rice, aromatic and fluffy',
    price: 12.99,
    image: 'https://images.unsplash.com/photo-1586080872843-30f219d822c3?w=500&h=500&fit=crop',
    category: 'Rice & Grains',
    brand: 'SHAH',
    stock: 200,
    sku: 'RICE001',
    rating: 4.6,
    reviews: 234,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '5',
    name: 'Myanmar Fish Sauce',
    description: 'Authentic Myanmar fish sauce for traditional recipes',
    price: 6.99,
    originalPrice: 8.99,
    image: 'https://images.unsplash.com/photo-1596040281384-8ee6e34f6a6e?w=500&h=500&fit=crop',
    category: 'Spices',
    brand: 'SHAH',
    stock: 75,
    sku: 'SPICE002',
    rating: 4.4,
    reviews: 67,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '6',
    name: 'Sesame Oil Premium',
    description: 'Cold-pressed sesame oil for cooking',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1587838220812-9dc6f50f2b2b?w=500&h=500&fit=crop',
    category: 'Spices',
    brand: 'SHAH',
    stock: 45,
    sku: 'SPICE003',
    rating: 4.7,
    reviews: 95,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '7',
    name: 'Myanmar Peanut Brittle',
    description: 'Crispy peanut brittle, a favorite snack',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd5e1d6?w=500&h=500&fit=crop',
    category: 'Snacks',
    brand: 'SHAH',
    stock: 60,
    sku: 'SNACK001',
    rating: 4.6,
    reviews: 112,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '8',
    name: 'Green Tea Blend',
    description: 'Traditional Myanmar green tea blend',
    price: 11.99,
    originalPrice: 14.99,
    image: 'https://images.unsplash.com/photo-1597318372441-0cb2d77cfc77?w=500&h=500&fit=crop',
    category: 'Beverages',
    brand: 'SHAH',
    stock: 80,
    sku: 'BEVER002',
    rating: 4.5,
    reviews: 78,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
]

// Feature highlights
const FEATURE_HIGHLIGHTS = [
  {
    icon: Truck,
    titleKey: 'fastDelivery',
    descriptionKey: 'freeShipping',
  },
  {
    icon: Shield,
    titleKey: 'authentic',
    descriptionKey: 'directFromMyanmar',
  },
  {
    icon: Zap,
    titleKey: 'bestPrices',
    descriptionKey: 'competitivePrices',
  },
]

export default function HomePage() {
  const { addItem } = useCart()
  const t = useTranslations('home')

  const handleAddToCart = (product: Product) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    })
  }

  return (
    <div className="min-h-screen bg-white dark:bg-dark-bg">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 md:pt-0">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-background dark:from-primary/10 dark:via-secondary/10 dark:to-dark-bg" />

        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-8 animate-fade-in">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full border border-secondary/20">
                <Zap className="w-4 h-4 text-secondary" />
                <span className="text-sm font-semibold text-primary">{t('badge')}</span>
              </div>

              {/* Main heading */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-gray-900 dark:text-white block">{t('title1')}</span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary block">
                    {t('title2')}
                  </span>
                  <span className="text-gray-900 dark:text-white block">{t('title3')}</span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
                {t('description')}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/shop"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-primary/80 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-soft-lg hover:scale-105 transition-all duration-300 group"
                >
                  {t('shopNow')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/categories"
                  className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary/5 transition-all duration-300 dark:text-secondary dark:border-secondary dark:hover:bg-secondary/5"
                >
                  {t('browseCategories')}
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex gap-8 pt-8">
                <div>
                  <p className="text-3xl font-bold text-primary">10K+</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{t('happyCustomers')}</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">500+</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{t('products')}</p>
                </div>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="relative h-96 md:h-[500px] hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl" />
              <Image
                src="https://images.unsplash.com/photo-1555939594-58d7cb561341?w=600&h=600&fit=crop"
                alt="Myanmar Products"
                fill
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-bg/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURE_HIGHLIGHTS.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="group p-8 bg-white dark:bg-dark-card rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center mb-4 group-hover:from-primary/40 group-hover:to-secondary/40 transition-all">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {t(feature.descriptionKey)}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              {t('shopByCategory')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('exploreCollection')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_CATEGORIES.map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.nameKey}`}
                className={`group relative h-48 rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:scale-105`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-80 group-hover:opacity-90 transition-opacity`} />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <span className="text-6xl">{category.icon}</span>
                  <h3 className="text-2xl font-bold text-white text-center">
                    {t(category.nameKey)}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Flash Sale / Featured Products */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-2 text-gray-900 dark:text-white">
                {t('featuredProducts')}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">{t('limitedTimeOffers')}</p>
            </div>
            <Link
              href="/shop"
              className="hidden md:inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors mt-4 md:mt-0"
            >
              {t('viewAll')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_PRODUCTS.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>

          <div className="mt-12 flex justify-center md:hidden">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:shadow-soft-lg transition-all"
            >
              {t('viewAllProducts')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              {t('lovedByCustomers')}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {t('seeWhatPeople')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Aung San',
                location: 'Kuala Lumpur',
                rating: 5,
                comment: 'Authentic taste of home! The quality is exceptional and delivery is fast.',
              },
              {
                name: 'Ma Moe',
                location: 'Selangor',
                rating: 5,
                comment: 'Fast delivery and fresh products. Highly recommended to all Myanmar friends!',
              },
              {
                name: 'Thein Aung',
                location: 'Penang',
                rating: 5,
                comment: 'Best Myanmar grocery store in Malaysia. Keep it up!',
              },
            ].map((review, index) => (
              <div
                key={index}
                className="p-8 bg-white dark:bg-dark-card rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                  "{review.comment}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {review.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {review.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary/80 dark:from-primary dark:to-primary/60">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {t('stayUpdated')}
          </h2>
          <p className="text-lg text-white/90 mb-8">
            {t('subscribeNewsletter')}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder={t('enterEmail')}
              className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 dark:focus:ring-offset-dark-bg"
            />
            <button className="bg-secondary text-primary px-8 py-4 rounded-xl font-semibold hover:shadow-soft-lg hover:scale-105 transition-all duration-300 whitespace-nowrap">
              {t('subscribe')}
            </button>
          </div>

          <p className="text-sm text-white/70 mt-4">
            {t('privacyRespect')}
          </p>
        </div>
      </section>
    </div>
  )
}
