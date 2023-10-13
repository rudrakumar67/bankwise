/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack5: true,
    webpack: (config) => {
        // Unset client-side javascript that only works server-side
        config.resolve.fallback = { fs: false, module: false }
        config.resolve.alias['react/jsx-runtime'] = require.resolve('react/jsx-runtime')
        config.resolve.alias['react/jsx-dev-runtime'] = require.resolve('react/jsx-dev-runtime')

        return config
    },
    reactStrictMode: true,
    i18n: {
        locales: ['de-DE'],
        defaultLocale: 'de-DE',
    }
}

module.exports = nextConfig
