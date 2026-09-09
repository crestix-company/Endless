import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const isStaticExport = isGitHubPages || process.env.STATIC_EXPORT === 'true';
const nextConfig: NextConfig = isStaticExport ? {
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? (isGitHubPages ? '/Endless' : ''),
  trailingSlash: true,
  images: { unoptimized: true },
} : {};

export default nextConfig;
