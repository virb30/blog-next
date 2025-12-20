import type { NextConfig } from 'next'

const config: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "blog.viniboscoa.dev",
        pathname: '/content/images/**'
      },
      {
        protocol: 'https',
        hostname: "storage.googleapis.com",
        pathname: '/assets-blog/gift-page/images/**'
      }
    ]
  }
}

export default config 