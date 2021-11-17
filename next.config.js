/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  env: {
    AUTH0_HOOK_SECRET: process.env.AUTH0_HOOK_SECRET,
  },
};

module.exports = nextConfig;
