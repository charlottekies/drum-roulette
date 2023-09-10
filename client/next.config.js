/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/drum-roulette",
  images: {
    domains: ["server.pickyourdrum.link"],
    unoptimized: true,
  },
  future: { webpack5: true },
};

module.exports = nextConfig;
