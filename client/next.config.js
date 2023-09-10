/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["server.pickyourdrum.link"],
    unoptimized: true
  },
};

module.exports = nextConfig;
