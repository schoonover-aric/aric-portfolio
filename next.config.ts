import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      '/api/chat': ['./node_modules/@ai-sdk/**/*'],
    },
  },
};

export default nextConfig;