import {Metadata} from 'next'
//https://www.ayoubkhial.com/blog/adaptive-favicons-in-nextjs
//https://dev.to/sabbirsobhani/how-to-dynamically-change-favicon-icon-in-nextjs-14-a-step-by-step-guide-26l1

export const Favicons: Metadata = {
   icons: {
      icon: [
         {
            media: '(prefers-color-scheme: light)',
            url: '/favicons/light-favicon-32x32.png',
            href: '/favicons/light-favicon-32x32.png',
         },
         {
            media: '(prefers-color-scheme: dark)',
            url: '/favicons/black-favicon-32x32.png',
            href: '/favicons/black-favicon-32x32.png',
         },
         // {
         //    rel: 'apple-touch-icon',
         //    sizes: '180x180',
         //    url: 'favicon/apple-touch-icon.png',
         // },
         // {
         //    rel: 'icon',
         //    type: 'image/png',
         //    sizes: '32x32',
         //    url: 'favicon/favicon-32x32.png',
         // },
         // {
         //    rel: 'icon',
         //    type: 'image/png',
         //    sizes: '16x16',
         //    url: 'favicon/favicon-16x16.png',
         // },
         // {
         //    rel: 'mask-icon',
         //    color: '#f8893a',
         //    url: 'favicon/safari-pinned-tab.svg',
         // },
         // {rel: 'shortcut icon', url: 'favicon/favicon.ico'},
      ],
   },
}
