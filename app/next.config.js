/**** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    domains: [
      'reincarnated.store',
      'assets.omniversalmedia.org',
      'pub-a56823b59c6247ebba0bb168d783ba17.r2.dev',
      'reincarnated-worker.omniversalmail.workers.dev',
      'cloudflare-worker.omniversalmail.workers.dev'
    ],
  },
  experimental: {
    typedRoutes: true,
  },
};

module.exports = nextConfig;
