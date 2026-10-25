import type { NextConfig } from "next";

/**
 * Juwa 777 (juwa777.love) - Next.js Configuration
 */
const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,

  turbopack: {},

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 320, 384],
    qualities: [75, 80, 90, 100],
  },

  async redirects() {
    return [
      // Legacy 3 Patti World routes → Juwa equivalents
      { source: "/download-3-patti-world", destination: "/download-juwa-777", permanent: true },
      { source: "/deposit-money-in-3-patti-world", destination: "/deposit-money-in-juwa-777", permanent: true },
      { source: "/withdraw-money-from-3-patti-world", destination: "/withdraw-money-from-juwa-777", permanent: true },
      { source: "/3-patti-world-for-pc", destination: "/juwa-777-for-pc", permanent: true },
      { source: "/download-card-rummy", destination: "/download-juwa-777", permanent: true },
      { source: "/blog/create-3-patti-world-account-and-login", destination: "/blog/juwa-777-login-guide", permanent: true },
      { source: "/blog/is-3-patti-world-safe-legal-pakistan", destination: "/blog/is-juwa-777-safe", permanent: true },
      { source: "/blog/3-patti-world-bonuses-vip-guide", destination: "/blog/juwa-777-bonuses-and-events", permanent: true },
      { source: "/sitemap.xml", destination: "/index.xml", permanent: false },
    ];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
      {
        source: "/:path*.webp",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/css/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/manifest.json",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
      {
        source: "/favicon.ico",
        headers: [
          { key: "X-Robots-Tag", value: "noindex" },
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
      config.target = ["web", "es2022"];
      config.resolve.alias = {
        ...config.resolve.alias,
        "../build/polyfills/polyfill-module": false,
        "next/dist/build/polyfills/polyfill-module": false,
      };
    }
    return config;
  },

  experimental: {
    optimizeCss: true,
    inlineCss: true,
    scrollRestoration: true,
    optimizePackageImports: ["react-icons"],
  },

  modularizeImports: {
    "react-icons": {
      transform: "react-icons/{{member}}",
    },
  },
};

export default nextConfig;
