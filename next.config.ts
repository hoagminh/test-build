import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Tạo standalone output cho Docker deployment (giảm image size)
  output: "standalone",
};

export default nextConfig;
