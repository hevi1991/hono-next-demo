/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    if (isServer) {
      import("./src/cron.mjs");
    }
    return config;
  },
};

export default nextConfig;
