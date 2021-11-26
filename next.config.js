/**
 * @type {import('next').NextConfig}
 **/

const nextConfig = {
  experimental: {
    urlImports: ['https://cdn.skypack.dev'],
  },
  env: {
    AUTH0_HOOK_SECRET: process.env.AUTH0_HOOK_SECRET,
    NEXT_APP_URL: process.env.NEXT_APP_URL,
  },
  images: {
    domains: ['lh3.googleusercontent.com', 'avatars.githubusercontent.com'],
  },
};

module.exports = nextConfig;
