import path from "node:path";

// /next.config.mjs
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" }
    ]
  },
  experimental: { typedRoutes: true },
  webpack: (config) => {
    config.resolve.alias["contentlayer/generated"] = path.join(process.cwd(), ".contentlayer/generated");
    config.resolve.alias["@"] = config.resolve.alias["@"] ?? path.join(process.cwd());
    return config;
  }
};

export default nextConfig;
