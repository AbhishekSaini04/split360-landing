import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Split360',
    short_name: 'Split360',
    description: 'Track spending, split bills with friends, settle up over UPI.',
    start_url: '/',
    display: 'standalone',
    background_color: '#f4f7f5',
    theme_color: '#f4f7f5',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
