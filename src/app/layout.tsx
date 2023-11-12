import './globals.css'
import type { Metadata } from 'next'
import { Providers } from './providers'
import { Source_Code_Pro } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SectionContainer from '@/components/Container'

const Source = Source_Code_Pro({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${Source.className} scroll-smooth `}>
      <body className={`bg-[#F9F6EE] antialiased dark:bg-[#111010]`}>
        <Providers>
          <SectionContainer>
            <div className="flex h-screen flex-col justify-between sm:ml-1">
              <Header />
              <div className=" flex  flex-col">
                <main className="mb-auto ">{children}</main>
              </div>
              <Footer />
            </div>
          </SectionContainer>
        </Providers>
      </body>
    </html>
  )
}
