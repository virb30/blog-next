import type { NextConfig } from 'next'

const config: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "blog.viniboscoa.dev",
        pathname: '/content/images/**'
      }
    ]
  }
}

export default config 