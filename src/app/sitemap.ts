import { MetadataRoute } from 'next'
import { allBlogs } from 'contentlayer/generated'
import siteMetadata from '@/data/config'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteURL

  const blogRoutes = allBlogs
    .filter((post) => !post.draft)
    .map((post) => ({
      url: `${siteUrl}${post.path}`,
      lastModified: post.lastmod || post.date,
      priority: 0.7,
    }))

  const routes = ['blog', 'projects', 'guestbook', 'about'].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    priority: 0.9,
  }))

  const indexRoute = {
    url: siteUrl,
    lastModified: new Date().toISOString().split('T')[0],
    priority: 1,
  }

  return [indexRoute, ...routes, ...blogRoutes]
}
