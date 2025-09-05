/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  // you are using GitHub Pages without a custom domain:
  basePath: '/portfolio-nextjs',
  assetPrefix: '/portfolio-nextjs',
  eslint: { ignoreDuringBuilds: true},
  env: {
    NEXT_PUBLIC_BASE_PATH: '/portfolio-nextjs',
  },
};
export default nextConfig;
