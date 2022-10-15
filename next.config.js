/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  basePath: process.env.BASE_PATH || "",
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
