'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export function Footer() {
  const t = useTranslations('footer')

  return (
    <footer className="bg-gray-900 text-gray-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              <span className="text-secondary">SHAH</span> Myanmar Store
            </h3>
            <p className="text-gray-400 text-sm">
              Premium Myanmar Food & Grocery Store in Malaysia.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">{t('shop')}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/shop" className="hover:text-white transition">
                  {t('allProducts')}
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-white transition">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/offers" className="hover:text-white transition">
                  {t('offers')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">{t('company')}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  {t('aboutUs')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition">
                  {t('faq')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">{t('legal')}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/privacy" className="hover:text-white transition">
                  {t('privacyPolicy')}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition">
                  {t('terms')}
                </Link>
              </li>
              <li>
                <Link href="/refund" className="hover:text-white transition">
                  {t('refundPolicy')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm">
            © 2024 SHAH Myanmar Store. {t('allRightsReserved')}.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
