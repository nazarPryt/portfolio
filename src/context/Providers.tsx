import {NextIntlClientProvider} from 'next-intl'
import AppThemeProvider from '@/context/theme'
import {ReactNode} from 'react'
import {cookies} from 'next/headers'
import {getMessages} from 'next-intl/server'

export const Providers = async ({children}: {children: ReactNode}) => {
   const theme = cookies().get('__theme__')?.value || 'system'
   const messages = await getMessages()

   return (
      <>
         <AppThemeProvider defaultTheme={theme} enableColorScheme themes={['light', 'dark', 'system']}>
            <NextIntlClientProvider messages={messages}>{children} </NextIntlClientProvider>
         </AppThemeProvider>
      </>
   )
}
