/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ['@shared-utils', '@config'],
  env: {
    // Example: expose env variables to the app
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL
  },
};

module.exports = nextConfig;

