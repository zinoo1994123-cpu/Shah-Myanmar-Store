'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { Globe, ChevronDown } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

const LOCALES = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'my', name: 'မြန်မာ', flag: '🇲🇲' },
]

export function LocaleSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLocale = LOCALES.find((l) => l.code === locale)

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale === locale) {
      setIsOpen(false)
      return
    }

    // Remove current locale from pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/'

    // Navigate to new locale path
    router.push(`/${newLocale}${pathWithoutLocale}`)
    setIsOpen(false)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-dark-card text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-dark-bg transition-colors duration-300 border border-gray-200 dark:border-gray-700"
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium hidden sm:inline">{currentLocale?.name}</span>
        <span className="text-lg">{currentLocale?.flag}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-dark-card rounded-lg shadow-soft-lg border border-gray-200 dark:border-gray-700 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {LOCALES.map((loc) => (
            <button
              key={loc.code}
              onClick={() => handleLocaleChange(loc.code)}
              className={`w-full px-4 py-3 text-left flex items-center gap-3 transition-colors duration-200 ${
                locale === loc.code
                  ? 'bg-primary/10 text-primary dark:bg-primary/20'
                  : 'text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-dark-bg'
              }`}
            >
              <span className="text-xl">{loc.flag}</span>
              <span className="font-medium">{loc.name}</span>
              {locale === loc.code && (
                <span className="ml-auto">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
