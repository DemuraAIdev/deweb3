const { withContentlayer } = require('next-contentlayer')

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
module.exports = () => {
  const plugins = [withContentlayer]

  return plugins.reduce((acc, next) => next(acc), {
    reactStrictMode: true,
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    eslint: {
      dirs: ['src/app', 'src/components', 'scripts'],
    },
    async rewrites() {
      return [
        {
          source: '/tools/dencrypt',
          destination: 'http://localhost:3001/tools/dencrypt',
        },
        {
          source: '/tools/dencrypt/:path*',
          destination: `http://localhost:3001/tools/dencrypt/:path*`,
        },
      ]
    },
    images: {
      dangerouslyAllowSVG: true,
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
        {
          protocol: 'https',
          hostname: 'i.scdn.co',
        },
        {
          protocol: 'https',
          hostname: 'avatars.githubusercontent.com',
        },
        {
          protocol: 'https',
          hostname: 'countdemura.glitch.me',
        },
        {
          protocol: 'https',
          hostname: 'cdn.myanimelist.net',
        },
      ],
    },
    experimental: {
      webpackBuildWorker: false,
      mdxRs: true,
    },
    webpack: (config, options) => {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      })

      return config
    },
  })
}
