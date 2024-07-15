/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    domains: ['yt3.googleusercontent.com', 'cbin.b-cdn.net'],
  },
};

export default nextConfig;