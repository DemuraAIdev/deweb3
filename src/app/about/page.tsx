import { MDXRender } from '@/lib/MDXRender'
import { components } from '@/components/MDXComponents'
import { genPageMetadata } from '../seo'

import Image from '@/components/Image'
import { coreContent } from '@/lib/utils'
import { Authors, allAuthors } from 'contentlayer/generated'
import { GoPersonFill } from 'react-icons/go'

const author = allAuthors.find((p) => p.slug === 'default') as Authors
const mainContent = coreContent(author)
export const metadata = genPageMetadata({ title: 'About' })
export default function Home() {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = mainContent
  return (
    <>
      <div className="space-y-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-4xl font-bold  tracking-tight text-gray-900 dark:text-gray-100">
          About <GoPersonFill className="inline-block" />
        </h1>
      </div>
      <div className="items-start">
        <div className="mb-2">
          <Image
            src={'https://countdemura.glitch.me/get/@cyberai2323?theme=rule34'}
            alt={'count'}
            width={310}
            height={100}
            unoptimized
          />
        </div>
        <div className={`prose font-sans dark:prose-dark xl:col-span-2`}>
          <MDXRender code={author.body.code} components={components} />
        </div>{' '}
      </div>
    </>
  )
}
