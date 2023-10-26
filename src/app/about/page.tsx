import { Authors, allAuthors } from 'contentlayer/generated'
import AboutLayout from '@/layouts/AboutLayout'
import { coreContent } from '@/lib/utils'
import { MDXRender } from '@/lib/MDXRender'

export default function Page() {
    const author = allAuthors.find((p) => p.slug === 'default') as Authors
    const mainContent = coreContent(author)
  
    return (
      <>
        <AboutLayout content={mainContent}>
          <MDXRender code={author.body.code} />
        </AboutLayout>
      </>
    )
  }