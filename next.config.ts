import type { NextConfig } from 'next';

// Static export: plain HTML/CSS/JS in ./out, served by Netlify's CDN (no server needed).
const config: NextConfig = {
  output: 'export',
  images: { unoptimized: true }, // screenshots are already sized and compressed (webp)
  poweredByHeader: false,
};

export default config;
