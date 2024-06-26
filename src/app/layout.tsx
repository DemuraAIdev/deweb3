import './globals.css'
import type { Metadata } from 'next'
import { Providers } from './providers'
import Analytics from '@/components/analytics'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionContainer from '@/components/Container'
import config from '@/data/config'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import NextTopLoader from 'nextjs-toploader'

export const metadata: Metadata = {
  metadataBase: new URL(config.siteURL),
  title: {
    default: config.title,
    template: `%s | ${config.title}`,
  },
  description: config.description,
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${config.siteURL}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: config.title,
    url: './',
    description: config.description,
    images: config.socialBanner,
    siteName: config.title,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: config.title,
    card: 'summary_large_image',
    images: [config.socialBanner],
  },
}

// import { Locale, i18n } from 'i18n-config'

// export async function generateStaticParams() {
//   return i18n.locales.map((locale) => ({ lang: locale }))
// }

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang={config.locale}
      className={`${GeistSans.variable} ${GeistMono.variable} scroll-smooth`}
    >
      <body className={`bg-white antialiased dark:bg-dark`}>
        <NextTopLoader showSpinner={false} zIndex={1600} showAtBottom={true} color="#14b8a6" />
        <Providers>
          <SectionContainer>
            <div className="flex h-screen  flex-col justify-between font-mono  sm:ml-1">
              <Header />
              <main className="mb-auto">{children}</main>

              <Footer />
            </div>
          </SectionContainer>
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
