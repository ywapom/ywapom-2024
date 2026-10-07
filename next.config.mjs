/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // No ESLint dependency in this project; don't let a missing linter block deploys.
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
