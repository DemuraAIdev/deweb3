import { makeSource, defineDatabase } from 'contentlayer-source-notion'
import { Client } from '@notionhq/client'
import { writeFileSync } from 'fs'
import path from 'path'
import { allCoreContent, sortPosts } from './src/lib/utils'

const root = process.cwd()

// Remark packages
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import { remarkExtractFrontmatter } from './src/lib/plugin/remarkexfrontmatter'
import { remarkCodeTitles } from './src/lib/plugin/recodetile'
import { remarkImgToJsx } from './src/lib/plugin/reimgjsx'
import { extractTocHeadings } from './src/lib/plugin/toc-headings'
// Rehype packages
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeKatex from 'rehype-katex'
//@ts-ignore
import rehypeCitation from 'rehype-citation'
import rehypePrismPlus from 'rehype-prism-plus'
import rehypePresetMinify from 'rehype-preset-minify'
import config from './src/data/config'

const client = new Client({ auth: process.env.NOTION_TOKEN })

// const computedFields: ComputedFields = {
//   readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
//   slug: {
//     type: 'string',
//     resolve: (doc) => doc._raw.flattenedPath.replace(/^.+?(\/)/, ''),
//   },
//   path: {
//     type: 'string',
//     resolve: (doc) => doc._raw.flattenedPath,
//   },
//   filePath: {
//     type: 'string',
//     resolve: (doc) => doc._raw.sourceFilePath,
//   },
//   toc: { type: 'string', resolve: (doc) => extractTocHeadings(doc.body.raw) },
// }

export const Blog = defineDatabase(() => ({
  name: 'Blog',
  databaseId: 'dfacecdb0a9e4311b28e56ba4e48518c',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    tags: { type: 'list', of: { type: 'string' }, default: [] },
    lastmod: { type: 'date' },
    draft: { type: 'boolean' },
    summary: { type: 'string' },
    images: { type: 'json' },
    authors: { type: 'list', of: { type: 'string' } },
    layout: { type: 'string' },
    bibliography: { type: 'string' },
    canonicalUrl: { type: 'string' },
  },
  properties: {
    date: {
      name: 'Created time',
    },
  },
  computedFields: {
    structuredData: {
      type: 'json',
      resolve: (doc) => ({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: doc.title,
        datePublished: doc.date,
        dateModified: doc.lastmod || doc.date,
        description: doc.summary,
        //image: doc.images ? doc.images[0] : config.socialBanner,
        url: `${config.siteURL}/${doc._raw.flattenedPath}`,
      }),
    },
  },
}))

function createSearchIndex(allBlogs) {
  writeFileSync(`public/search.json`, JSON.stringify(allCoreContent(sortPosts(allBlogs))))
  console.log('Local search index generated...')
}

export default makeSource({
  client,
  databaseTypes: [Blog],
  mdx: {
    cwd: process.cwd(),
    remarkPlugins: [
      remarkExtractFrontmatter,
      remarkGfm,
      remarkCodeTitles,
      remarkMath,
      remarkImgToJsx,
    ],
    rehypePlugins: [
      rehypeSlug,
      rehypeAutolinkHeadings,
      //@ts-ignore
      rehypeKatex,
      [rehypeCitation, { path: path.join(root, 'src', 'data') }],
      //@ts-ignore
      [rehypePrismPlus, { defaultLanguage: 'js', ignoreMissing: true }],
      rehypePresetMinify,
    ],
  },
  onSuccess: async (importData) => {
    const { allBlogs } = await importData()
    createSearchIndex(allBlogs)
  },
})
