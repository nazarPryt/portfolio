import {ReactNode} from 'react'
import {defaultFont} from '@/styles/fonts'
import {notFound} from 'next/navigation'
import {Providers} from '@/context/Providers'
import {routing} from '@/i18n/routing'
import {setRequestLocale} from 'next-intl/server'
import '@/styles/main.scss'
import {Metadata} from 'next'
import {getMyMetadata} from '@/shared/getMyMetadata'

type Props = {
   children: ReactNode
   params: {
      locale: string
   }
}
export async function generateMetadata(): Promise<Metadata> {
   return await getMyMetadata()
}
export function generateStaticParams() {
   return routing.locales.map(locale => ({locale}))
}
export default async function RootLayout({children, params: {locale}}: Props) {
   if (!routing.locales.includes(locale as any)) {
      notFound()
   }

   // Enable static rendering
   setRequestLocale(locale)
   return (
      <html suppressHydrationWarning lang={locale} className={defaultFont.variable}>
         <head>
            <link id='favicon' rel='icon' href='/favicons/light-favicon-32x32.png' />
         </head>
         <body>
            <Providers>{children}</Providers>
         </body>
      </html>
   )
}
