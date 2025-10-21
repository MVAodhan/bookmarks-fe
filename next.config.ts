import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/hono/user/:path*",
        destination: "https://bun.aotearoa.cc/user/:path*", // Your Hono backend
      },
    ];
  },
};

export default nextConfig;
