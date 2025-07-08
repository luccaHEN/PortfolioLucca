const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true },
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? '/PortfolioLucca' : '',
  assetPrefix: isProd ? '/PortfolioLucca/' : '',
};

export default nextConfig;
