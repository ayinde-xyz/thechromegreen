import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    loader: "custom",
    loaderFile: "./utils/image/loader.ts",
    qualities: [25, 50, 75, 100],
  },
};

export default nextConfig;
