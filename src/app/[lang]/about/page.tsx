import { MDXRender } from '@/lib/MDXRender'
import { Authors, allAuthors } from 'contentlayer/generated'
const author = allAuthors.find((p) => p.slug === 'default') as Authors

export default function Home() {
  return <MDXRender code={author.body.code} />
}
