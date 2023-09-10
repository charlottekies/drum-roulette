/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  basePath: "/drum-roulette",
  images: {
    domains: ["server.pickyourdrum.link"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
