import type {Metadata} from 'next'
import {ReactNode} from 'react'
import {navFont, defaultFont, headingFont} from '@/styles/fonts'
import '@/styles/main.scss'

import dynamic from 'next/dynamic'
import {cookies} from 'next/headers'

const AppThemeProvider = dynamic(() => import('@/context/theme'), {
   ssr: false,
})
export const metadata: Metadata = {
   title: 'Nazar Prytuliak',
   description: 'Generated by create next app',
}

export default function RootLayout({
   children,
}: Readonly<{
   children: ReactNode
}>) {
   const theme = cookies().get('__theme__')?.value || 'system'
   return (
      <html
         suppressHydrationWarning
         lang='en'
         className={`${theme} ${navFont.variable} ${defaultFont.variable} ${headingFont.variable}`}
      >
         <body>
            <AppThemeProvider defaultTheme={theme} enableColorScheme themes={['light', 'dark', 'system']}>
               {children}
            </AppThemeProvider>
         </body>
      </html>
   )
}
