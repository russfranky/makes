/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true
  },
  webpack: (config) => {
    config.resolve.alias['@shared-utils'] = path.resolve(__dirname, '../../hubzz/packages/shared-utils/src');
    config.resolve.alias['@config'] = path.resolve(__dirname, '../../hubzz/packages/config/src');
    return config;
  }
};

module.exports = nextConfig;
