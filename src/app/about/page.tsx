import { MDXRender } from '@/lib/MDXRender'
import { components } from '@/components/MDXComponents'
import { Authors, allAuthors } from 'contentlayer/generated'
import { genPageMetadata } from '../seo'
const author = allAuthors.find((p) => p.slug === 'default') as Authors
export const metadata = genPageMetadata({ title: 'About' })
export default function Home() {
  return <MDXRender code={author.body.code} components={components} />
}
