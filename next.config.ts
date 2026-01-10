import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/**',
      },
    ],
    // If you are using local images in /public/images, 
    // unoptimized can be false, but it's safer for 
    // static exports to set it to true if deploying to GitHub Pages.
    unoptimized: false, 
  },
  // This helps suppress some hydration warnings from browser extensions
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;