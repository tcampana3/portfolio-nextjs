/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',              // static export -> creates /out
    images: { unoptimized: true }, // Next/Image off (Pages can't optimize)
    trailingSlash: true,           // friendlier with Pages
  };
  export default nextConfig;
  