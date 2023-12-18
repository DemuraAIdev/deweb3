import { MetadataRoute } from 'next'
import siteMetadata from '@/data/config'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteMetadata.siteURL}/sitemap.xml`,
    host: siteMetadata.siteURL,
  }
}
