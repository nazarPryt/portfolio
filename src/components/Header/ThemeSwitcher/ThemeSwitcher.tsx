'use client'
import s from './ThemeSwitcher.module.scss'
import AppThemeProvider from '@/context/theme'
import {useTheme} from 'next-themes'

const ThemeButtons = () => {
   const {setTheme, theme} = useTheme()

   return (
      <div className={s.ThemeSwitcher}>
         <button onClick={() => setTheme('light')}>Light</button>
         <button onClick={() => setTheme('dark')}>Dark</button>
         <button onClick={() => setTheme('system')}>System</button>
      </div>
   )
}

export const ThemeSwitcher = () => (
   <AppThemeProvider attribute='class' defaultTheme='system' enableSystem>
      <ThemeButtons />
   </AppThemeProvider>
)
