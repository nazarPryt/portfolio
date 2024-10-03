'use client'
import s from './ThemeSwitcher.module.scss'
import {useTheme} from 'next-themes'
import {MoonIcon} from '@/icons/MoonIcon'
import {SunIcon} from '@/icons/SunIcon'
import {GearIcon} from '@/icons/GearIcon'
import {useClient} from '@/shared/useClient'

export const ThemeSwitcher = () => {
   const {setTheme, theme} = useTheme()
   const isClient = useClient()

   const themes = [
      {name: 'light', icon: <SunIcon />},
      {name: 'dark', icon: <MoonIcon />},
      {name: 'system', icon: <GearIcon />},
   ]

   return (
      <div className={s.wrapper}>
         {themes.map(({name, icon}) => (
            <button key={name} className={isClient && theme === name ? s.selected : ''} onClick={() => setTheme(name)}>
               {icon}
            </button>
         ))}
      </div>
   )
}
