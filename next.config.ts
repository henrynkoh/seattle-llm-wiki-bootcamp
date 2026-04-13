import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Avoid picking up a stray lockfile in a parent directory when running builds.
    root: process.cwd(),
  },
};

export default nextConfig;
