const { withContentlayer } = require('next-contentlayer')

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
module.exports = () => {
    const plugins = [withContentlayer]
    return plugins.reduce((acc, next) => next(acc), {
        reactStrictMode: true,
        pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
        images: {
            domains: ['picsum.photos'],
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
