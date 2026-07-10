'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { ChevronRight, Leaf, Truck, Shield } from 'lucide-react'

export function HeroSection() {
  const t = useTranslations('home')

  return (
    <div className="relative bg-gradient-to-br from-primary/5 via-white to-accent/5 dark:from-dark-bg dark:via-dark-card dark:to-dark-bg">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-semibold text-lg flex items-center gap-2">
                <span className="text-2xl">🇲🇲</span>
                {t('tagline')}
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                {t('heroTitle')}
              </h1>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-md">
              {t('heroDescription')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-primary/80 text-white font-semibold rounded-lg hover:shadow-soft-lg hover:scale-105 transition-all duration-300"
              >
                {t('shopNow')}
                <ChevronRight className="w-5 h-5" />
              </Link>
              <Link
                href="#featured"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary text-primary dark:text-primary font-semibold rounded-lg hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-300"
              >
                {t('exploreFeatured')}
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-96 sm:h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
            <div className="relative bg-white dark:bg-dark-card rounded-2xl shadow-soft-lg p-8 h-full flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-8xl">🍜</div>
                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                  {t('premiumQuality')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-16 pt-16 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary">
                <Leaf className="w-6 h-6" />
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">{t('feature1Title')}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{t('feature1Desc')}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10 text-accent">
                <Truck className="w-6 h-6" />
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">{t('feature2Title')}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{t('feature2Desc')}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                <Shield className="w-6 h-6" />
              </div>
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">{t('feature3Title')}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{t('feature3Desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
