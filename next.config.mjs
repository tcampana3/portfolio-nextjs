/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  // you are using GitHub Pages without a custom domain:
  basePath: '/portfolio-nextjs',
  eslint: { ignoreDuringBuilds: true},
};
export default nextConfig;
