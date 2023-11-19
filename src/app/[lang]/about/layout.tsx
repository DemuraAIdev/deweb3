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
        <h1 className="text-4xl font-bold  tracking-tight text-gray-900 dark:text-gray-100">
          About
        </h1>
      </div>
      <div className="items-start">
        <div className="mb-2">
          <Image
            src={'https://count.vahryiskandar.my.id/get/@cyberai2323?theme=rule34'}
            alt={'count'}
            width={310}
            height={100}
          />
        </div>
        <div className="prose dark:prose-dark xl:col-span-2">{children}</div>
      </div>
    </>
  )
}
