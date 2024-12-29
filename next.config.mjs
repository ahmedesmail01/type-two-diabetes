/** @type {import('next').NextConfig} */
import withVideos from "next-videos";

const nextConfig = withVideos({
  // Your existing Next.js configuration options here
  reactStrictMode: true,
  output: "export",
  assetPrefix: "/diabetes-type-two",
  basePath: "/diabetes-type-two",
  images: { unoptimized: true },
});

export default nextConfig;
