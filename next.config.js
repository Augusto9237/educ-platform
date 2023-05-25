/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api-sa-east-1.hygraph.com/v2/clehxlq7c2iud01upb4227mwd/master',
      },
    ],
  },
}

module.exports = nextConfig
