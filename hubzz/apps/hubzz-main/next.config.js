/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // remove transpilePackages to avoid extra processing; rely on webpack aliases below
  webpack: (config) => {
    config.resolve.alias['@shared-utils'] = path.resolve(__dirname, '../../packages/shared-utils/src');
    config.resolve.alias['@config'] = path.resolve(__dirname, '../../packages/config/src');
    return config;
  }
};

module.exports = nextConfig;

