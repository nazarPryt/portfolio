'use client'
import {setCookie} from 'cookies-next'
import {ThemeProvider, useTheme} from 'next-themes'
import type {ThemeProviderProps} from 'next-themes/dist/types'
import {useEffect} from 'react'

// Application theme provider
function AppThemeProvider({children, ...props}: ThemeProviderProps) {
   return (
      <ThemeProvider enableSystem {...props}>
         <AppThemeProviderHelper />
         {children}
      </ThemeProvider>
   )
}

// Helper component to set theme in cookie & switch favicons
function AppThemeProviderHelper() {
   const {theme} = useTheme()

   useEffect(() => {
      const favicon = document.getElementById('favicon') as HTMLLinkElement
      if (favicon) {
         setTimeout(() => {
            if (theme === 'dark') {
               favicon.href = '/favicons/black-favicon-32x32.png'
            } else {
               favicon.href = '/favicons/light-favicon-32x32.png'
            }
         }, 0)
      }
      setCookie('__theme__', theme, {
         expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
         path: '/',
      })
   }, [theme])

   return null
}

export default AppThemeProvider
