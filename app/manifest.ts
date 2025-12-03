import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kashoot - Films de mariage haut de gamme',
    short_name: 'Kashoot',
    description: 'Kashoot transforme chaque mariage en un film sincère, élégant et inoubliable.',
    start_url: '/',
    display: 'standalone',
    background_color: '#F5F3F0',
    theme_color: '#000000',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}

