import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow all network IPs in development
  allowedDevOrigins: [
    '192.168.1.103',
    'localhost:3000'
  ],
};

export default nextConfig;
