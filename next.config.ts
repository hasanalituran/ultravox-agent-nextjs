import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove console statements from production builds using SWC
  // Keeps console.error and console.warn for important diagnostics
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  }
};

export default nextConfig;
