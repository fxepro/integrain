/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'pub-cdc8320e15f144d09aa5d89f402c22d0.r2.dev',
      }
    ]
  }
}

module.exports = nextConfig
