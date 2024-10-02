'use client'
import s from './ThemeSwitcher.module.scss'
import {useTheme} from 'next-themes'
import {MoonIcon} from '@/icons/MoonIcon'
import {SunIcon} from '@/icons/SunIcon'
import {GearIcon} from '@/icons/GearIcon'
import {useEffect, useState} from 'react'

export const ThemeSwitcher = () => {
   const {setTheme, theme} = useTheme()
   // const [mounted, setMounted] = useState(false)
   //
   // // Ensure the component only renders on the client side
   // useEffect(() => {
   //    setMounted(true)
   // }, [])
   //
   // if (!mounted) {
   //    return null // Don't render on the server
   // }

   const themes = [
      {name: 'light', icon: <SunIcon />},
      {name: 'dark', icon: <MoonIcon />},
      {name: 'system', icon: <GearIcon />},
   ]

   return (
      <div className={s.wrapper}>
         {themes.map(({name, icon}) => (
            <button key={name} className={theme === name ? s.selected : ''} onClick={() => setTheme(name)}>
               {icon}
            </button>
         ))}
      </div>
   )
}
