// /next.config.mjs
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "plus.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" }
    ]
  },
  experimental: { typedRoutes: true }
};

export default nextConfig;
