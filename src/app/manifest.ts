import {MetadataRoute} from 'next'
import {app} from '@/shared/app'

export default function manifest(): MetadataRoute.Manifest {
   return {
      name: app.meta.title,
      short_name: 'Portfolio',
      description: app.meta.description,
      start_url: '/',
      lang: 'en',
      display: 'standalone',
      background_color: '#1a1a1a',
      theme_color: '#e0e0e0',
      icons: [
         {
            src: 'favicons/black-favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png',
         },
         {
            src: 'favicons/light-favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png',
         },
      ],
   }
}
