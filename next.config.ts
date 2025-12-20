import type { NextConfig } from 'next'

const config: NextConfig = {
  reactStrictMode: true,
  eslint: {
    // Temporariamente ignorar erros de ESLint durante o build
    // Precisamos atualizar o ESLint ou ajustar a configuração
    ignoreDuringBuilds: true,
  },
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