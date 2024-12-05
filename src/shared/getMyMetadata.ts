import {Metadata} from 'next'
import {app} from '@/shared/app'

export async function getMyMetadata(): Promise<Metadata> {
   const title = 'Nazar Prytuliak - Frontend Web Developer'
   const baseUrl = app.mySocial.portfolio
   const Thumbnail = '/bg/hero-bg.jpg'

   const description =
      'Hi, I’m Nazar Prytuliak. I create modern, user-friendly websites and web applications. Take a look at my portfolio to see the projects I’ve worked on and learn more about me.'

   return {
      metadataBase: new URL(baseUrl),
      title,
      description,

      openGraph: {
         lastName: 'Prytuliak',
         firstName: 'Nazar',
         title,
         description,
         url: baseUrl,
         images: [
            {
               url: Thumbnail,
               secureUrl: Thumbnail,
               width: 1200,
               height: 630,
               alt: "A preview of Nazar Prytuliak's portfolio showcasing web development projects and a professional layout.",
            },
         ],
         type: 'profile',
         siteName: 'Portfolio',
      },
   }
}
