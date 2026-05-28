import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      { pathname: "/**", search: "" },
      { pathname: "/**", search: "?v=2" },
    ],
  },
};

export default nextConfig;
