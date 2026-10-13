import type { NextConfig } from "next";

// Strapi's uploads host comes from NEXT_PUBLIC_IMAGE_URL (default: a local Strapi on 1337)
const strapiImages = new URL(process.env.NEXT_PUBLIC_IMAGE_URL || "http://localhost:1337");

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // demo only: the Strapi on localhost resolves to a private IP, which Next's optimiser blocks by default
    dangerouslyAllowLocalIP: process.env.NODE_ENV !== 'production',
    remotePatterns: [
      {
        protocol: strapiImages.protocol.replace(":", "") as "http" | "https",
        hostname: strapiImages.hostname,
        port: strapiImages.port,
        pathname: '/uploads/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
