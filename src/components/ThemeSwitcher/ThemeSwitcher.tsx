'use client'
import s from './ThemeSwitcher.module.scss'
import AppThemeProvider from '@/context/theme'
import {useTheme} from 'next-themes'

const ThemeButtons = () => {
   const {setTheme, theme} = useTheme()

   return (
      <div className={s.ThemeSwitcher}>
         <button
            onClick={() => setTheme('light')}
            className={`px-4 py-2 ${theme === 'light' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
         >
            Light
         </button>
         <button
            onClick={() => setTheme('dark')}
            className={`px-4 py-2 ${theme === 'dark' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
         >
            Dark
         </button>
         <button
            onClick={() => setTheme('system')}
            className={`px-4 py-2 ${theme === 'system' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
         >
            System
         </button>
      </div>
   )
}

export const ThemeSwitcher = () => (
   <AppThemeProvider attribute='class' defaultTheme='system' enableSystem>
      <ThemeButtons />
   </AppThemeProvider>
)
