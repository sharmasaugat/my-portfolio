/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      net: false,
      tls: false,
      dns: false,
      http: false,
      https: false,
      crypto: false,
      stream: false,
      path: false,
      os: false,
      util: false,
      url: false,
      zlib: false,
    };
    return config;
  },
};

module.exports = nextConfig;