import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kleanera | Professional Cleaning Services - Elevating Property Standards',
  description: 'Premium professional cleaning services for landlords, Airbnb hosts, property managers and businesses. Fully insured, quality controlled, and reliable team.',
  keywords: ['cleaning services', 'professional cleaning', 'end of tenancy cleaning', 'Airbnb cleaning', 'deep cleaning', 'property cleaning', 'commercial cleaning'],
  authors: [{ name: 'Kleanera' }],
  creator: 'Kleanera',
  openGraph: {
    title: 'Kleanera | Professional Cleaning Services',
    description: 'Premium professional cleaning services for landlords, Airbnb hosts, property managers and businesses.',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Kleanera',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kleanera | Professional Cleaning Services',
    description: 'Premium professional cleaning services for landlords, Airbnb hosts, property managers and businesses.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/images/kleanera-icon.png',
    apple: '/images/kleanera-icon.png',
  },
}

export const viewport = {
  themeColor: '#31adff',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
