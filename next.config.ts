import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['fakestoreapi.com'],
  },
  env: {
    BASE_URL: process.env.BASE_URL
  }
};

export default nextConfig;
