'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { Globe } from 'lucide-react'
import { useState } from 'react'

const LOCALES = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'my', label: 'မြန်မာ', flag: '🇲🇲' },
]

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const handleLanguageChange = (newLocale: string) => {
    // Remove the current locale from pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, '')
    const newPathname = `/${newLocale}${pathWithoutLocale}`;
    
    router.push(newPathname)
    setIsOpen(false)
  }

  const currentLocale = LOCALES.find((l) => l.code === locale)

  return (
    <div className="relative group">
      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-dark-bg transition-all duration-200 text-sm font-medium"
        title="Change language"
        aria-label="Language switcher"
        aria-expanded={isOpen}
      >
        <Globe className="w-4 h-4" />
        <span>{currentLocale?.flag}</span>
        <span className="hidden sm:inline">{currentLocale?.label}</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-dark-card rounded-lg shadow-soft-lg border border-gray-200 dark:border-gray-700 z-50 overflow-hidden">
          <div className="p-1">
            {LOCALES.map((loc) => (
              <button
                key={loc.code}
                onClick={() => handleLanguageChange(loc.code)}
                className={`w-full px-4 py-3 text-left text-sm font-medium rounded-md transition-all duration-200 flex items-center gap-3 ${
                  locale === loc.code
                    ? 'bg-primary text-white'
                    : 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-dark-bg'
                }`}
              >
                <span className="text-lg">{loc.flag}</span>
                <span>{loc.label}</span>
                {locale === loc.code && (
                  <span className="ml-auto">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
