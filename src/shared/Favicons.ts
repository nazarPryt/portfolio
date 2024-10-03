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
         {
            rel: 'apple-touch-icon',
            url: '/favicons/apple-touch-icon.png',
         },
      ],
   },
}
