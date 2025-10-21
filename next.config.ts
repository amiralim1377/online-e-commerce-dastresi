import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/online-e-commerce-dastresi",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
