import './globals.css'
import type { Metadata } from 'next'
import { Providers } from './providers'
import { Source_Code_Pro } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionContainer from '@/components/Container'
import config from '@/data/config'
import { getDictionary } from '@/dictionaries'

const Source = Source_Code_Pro({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(config.siteURL),
  title: {
    default: config.title,
    template: `%s | ${config.title}`,
  },
  description: config.description,
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en',
      'id-ID': '/id',
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

import { Locale, i18n } from 'i18n-config'

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(params.lang)
  return (
    <html lang={params.lang} className={`${Source.className} scroll-smooth `}>
      <body className={`bg-light antialiased dark:bg-dark`}>
        <Providers>
          <SectionContainer>
            <div className="flex h-screen  flex-col justify-between sm:ml-1">
              <Header />
              <div className=" flex  flex-col">
                <main className="mb-auto ">{children}</main>
              </div>
              <Footer dictionary={dictionary.footer} />
            </div>
          </SectionContainer>
        </Providers>
      </body>
    </html>
  )
}
