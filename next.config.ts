import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  reactStrictMode: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: [{ loader: "@svgr/webpack", options: { icon: true } }],
    });
    return config;
  },
};

export default nextConfig;
