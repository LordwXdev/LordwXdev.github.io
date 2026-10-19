import type { NextConfig } from "next";

// GitHub Pages only serves static files, so build the site as plain HTML/CSS/JS.
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
