/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  transpilePackages: ['three'],
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
