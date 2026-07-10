import { useTranslations } from 'next-intl'
import { HeroSection } from '@/components/HeroSection'
import { ProductCard } from '@/components/product/ProductCard'
import { fetchFeaturedProducts, fetchProducts } from '@/lib/supabase-queries'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default async function HomePage() {
  const t = useTranslations('home')
  const { products: featuredProducts } = await fetchFeaturedProducts(6)
  const { products: allProducts } = await fetchProducts(1, 12)

  // Fallback to all products if featured products are empty
  const displayFeatured = featuredProducts.length > 0 ? featuredProducts : allProducts.slice(0, 6)
  const displayAll = allProducts

  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Products Section */}
      <section id="featured" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-dark-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-primary font-semibold text-lg mb-2">⭐ {t('featuredLabel')}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                {t('featuredTitle')}
              </h2>
            </div>
            <Link
              href="/products"
              className="hidden md:flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              {t('viewAll')}
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Featured Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {displayFeatured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="md:hidden mt-8 text-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:shadow-soft-lg transition-all"
            >
              {t('viewAll')}
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* All Products Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-primary font-semibold text-lg mb-2">🛍️ {t('allProductsLabel')}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
              {t('allProductsTitle')}
            </h2>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {displayAll.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-primary/10 to-accent/10 dark:from-dark-card dark:to-dark-bg border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            {t('ctaTitle')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t('ctaDescription')}
          </p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:shadow-soft-lg hover:scale-105 transition-all duration-300"
          >
            {t('shopNow')}
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
