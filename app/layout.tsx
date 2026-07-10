import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/common/Header'
import { Footer } from '@/components/common/Footer'

const inter = Inter({ subsets: ['latin'] })

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen bg-background dark:bg-dark-bg">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
