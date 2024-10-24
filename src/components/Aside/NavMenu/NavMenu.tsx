'use client'
import {HouseIcon} from '@/icons/HouseIcon'
import {PersonIcon} from '@/icons/PersonIcon'
import {ImagesIcon} from '@/icons/ImagesIcon'
import {HddStackIcon} from '@/icons/HddStackIcon'
import {EnvelopIcon} from '@/icons/EnvelopIcon'
import {usePathname} from '@/i18n/routing'
import {ReactNode, useEffect} from 'react'
import Link from 'next/link'
import {useClient} from '@/shared/useClient'
import s from './NavMenu.module.scss'

type NavLink = {
   name: string
   path: string
   icon: ReactNode
}
const NavLinks: Array<NavLink> = [
   {name: 'Home', path: '/#home', icon: <HouseIcon />},
   {name: 'About', path: '#about', icon: <PersonIcon />},
   {name: 'Portfolio', path: '#portfolio', icon: <ImagesIcon />},
   // {name: 'Services', path: '#services', icon: <HddStackIcon />},
   {name: 'Contact', path: '#contact', icon: <EnvelopIcon />},
]

type Props = {
   closeSideBar?: () => void
}

export const NavMenu = ({closeSideBar}: Props) => {
   const pathname = usePathname()
   const isClient = useClient()

   const isActive = (path: any) => {
      if (!isClient) return false

      if (path === '/#home') {
         return window.scrollY < 300
      }
      if (path.startsWith('#')) {
         const section = document.querySelector(path)

         if (!section) return false
         const position = window.scrollY + 200
         return position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight
      }
      return false
   }

   const handleClick = (event: any, path: string) => {
      closeSideBar && closeSideBar()
      if (path === '/#home') {
         event.preventDefault()
         window.scrollTo({top: 0, behavior: 'smooth'}) // Smooth scroll to top
      } else if (path.startsWith('#')) {
         event.preventDefault()
         const section = document.querySelector(path)

         if (section) {
            section.scrollIntoView({behavior: 'smooth'}) // Smooth scroll to the section
         }
      }
   }

   useEffect(() => {
      if (!isClient) return

      const handleScroll = () => {
         const navLinks = document.querySelectorAll('.navmenu a')
         navLinks.forEach(link => {
            if (isActive(link.getAttribute('href'))) {
               link.classList.add(s.active)
            } else {
               link.classList.remove(s.active)
            }
         })
      }

      window.addEventListener('scroll', handleScroll)
      window.addEventListener('load', handleScroll)

      return () => {
         window.removeEventListener('scroll', handleScroll)
         window.removeEventListener('load', handleScroll)
      }
   }, [isClient, pathname])

   return (
      <nav className={`${s.wrapper} navmenu`}>
         {NavLinks.map(link => (
            <Link
               key={link.name}
               href={link.path}
               onClick={e => handleClick(e, link.path)}
               className={isActive(link.path) ? s.active : ''}
            >
               {link.icon}
               {link.name}
            </Link>
         ))}
      </nav>
   )
}
