import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { CartProvider } from '@/lib/cart-context'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'SHAH Myanmar Store - Premium Myanmar Food & Grocery for Malaysia',
  description:
    'Experience authentic Myanmar cuisine delivered to your doorstep in Malaysia. Fresh ingredients, traditional snacks, and premium groceries.',
  keywords: [
    'Myanmar food',
    'Myanmar grocery',
    'Malaysian Myanmar store',
    'authentic cuisine',
    'fresh ingredients',
  ],
  authors: [{ name: 'SHAH Myanmar Store' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shahstore.com',
    siteName: 'SHAH Myanmar Store',
    title: 'SHAH Myanmar Store',
    description: 'Premium Myanmar Food & Grocery E-commerce for Malaysia',
  },
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-white">
        <NextIntlClientProvider messages={messages}>
          <CartProvider>
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </CartProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
