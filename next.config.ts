import type { NextConfig } from "next";

// Le site est exporté en statique et déployé sur GitHub Pages à
// https://superconde224.github.io/safia-saveur/ — d'où le basePath.
// Si un domaine personnalisé est branché plus tard (CNAME), retire basePath/assetPrefix.
const repoBasePath = "/safia-saveur";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoBasePath,
  assetPrefix: repoBasePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
