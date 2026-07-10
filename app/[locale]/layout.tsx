import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { Inter } from 'next/font/google'
import { Header } from '@/components/common/Header'
import { Footer } from '@/components/common/Footer'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

const locales = ['en', 'my']

export const metadata: Metadata = {
  title: 'SHAH Myanmar Store - Premium Myanmar Food & Grocery',
  description: 'Premium Myanmar Food & Grocery Store in Malaysia',
  keywords: ['Myanmar', 'Food', 'Grocery', 'Store', 'Malaysia'],
  openGraph: {
    type: 'website',
    locale: 'en_MY',
    url: process.env.NEXT_PUBLIC_APP_URL,
    title: 'SHAH Myanmar Store',
    description: 'Premium Myanmar Food & Grocery Store in Malaysia',
  },
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode
  params: { locale: string }
}) {
  if (!locales.includes(locale as any)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <div className="flex flex-col min-h-screen bg-background dark:bg-dark-bg">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
