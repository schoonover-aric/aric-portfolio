/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Helps with AI SDK + Vercel compatibility
    outputFileTracingIncludes: {
      '/api/chat': ['./node_modules/@ai-sdk/**/*'],
    },
  },
};

export default nextConfig;