import { ReactNode } from 'react'
import Image from '@/components/Image'
import { coreContent } from '@/lib/utils'
import { Authors, allAuthors } from 'contentlayer/generated'

const author = allAuthors.find((p) => p.slug === 'default') as Authors
const mainContent = coreContent(author)

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = mainContent

  return (
    <>
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          About
        </h1>
      </div>
      <div className="items-start">

        <div className="prose dark:prose-dark xl:col-span-2">{children}</div>
      </div>
    </>
  )
}
