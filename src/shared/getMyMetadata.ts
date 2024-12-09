import {Metadata} from 'next'
import {app} from '@/shared/app'

export async function getMyMetadata(): Promise<Metadata> {
   const {title, description, alt} = app.meta
   const baseUrl = app.mySocial.portfolio
   const op = '/openGraph/op.webp'
   const opTwitter = '/openGraph/opTwitter.webp'

   return {
      metadataBase: new URL(baseUrl),
      title,
      description,
      twitter: {
         title,
         description,
         images: [
            {
               url: opTwitter,
               secureUrl: opTwitter,
               width: 1500,
               height: 500,
               alt,
            },
         ],
      },
      openGraph: {
         lastName: 'Prytuliak',
         firstName: 'Nazar',
         title,
         description,
         url: baseUrl,
         images: [
            {
               url: op,
               secureUrl: op,
               width: 1200,
               height: 630,
               alt,
            },
         ],
         type: 'profile',
         siteName: 'Portfolio',
      },
   }
}
