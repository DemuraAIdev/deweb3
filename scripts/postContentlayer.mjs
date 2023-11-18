import { writeFileSync } from 'fs'
import GithubSlugger from 'github-slugger'
// import { allCoreContent,sortPosts } from './utils.js'
import { allBlogs } from '../.contentlayer/generated/index.mjs'
// import siteMetadata from '../src/data/config.js'

const isProduction = process.env.NODE_ENV === 'production'

/**
 * Count the occurrences of all tags across blog posts and write to json file
 */
export async function createTagCount() {
  const tagCount = {}
  allBlogs.forEach((file) => {
    if (file.tags && (!isProduction || file.draft !== true)) {
      file.tags.forEach((tag) => {
        const formattedTag = GithubSlugger.slug(tag)
        if (formattedTag in tagCount) {
          tagCount[formattedTag] += 1
        } else {
          tagCount[formattedTag] = 1
        }
      })
    }
  })
  writeFileSync('./src/app/[lang]/tag-data.json', JSON.stringify(tagCount))
}

async function postContentlayer() {
  await createTagCount()
}

postContentlayer()
