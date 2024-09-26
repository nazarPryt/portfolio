import s from './NavMenu.module.scss'
import {HouseIcon} from '@/icons/HouseIcon'
import {PersonIcon} from '@/icons/PersonIcon'
import {ImagesIcon} from '@/icons/ImagesIcon'
import {HddStackIcon} from '@/icons/HddStackIcon'
import {EnvelopIcon} from '@/icons/EnvelopIcon'

const NavLinks = [
   {name: 'Home', path: '/', icon: <HouseIcon />},
   {name: 'About', path: '#about', icon: <PersonIcon />},
   {name: 'Portfolio', path: '#portfolio', icon: <ImagesIcon />},
   {name: 'Services', path: '#services', icon: <HddStackIcon />},
   {name: 'Contact', path: '#contact', icon: <EnvelopIcon />},
]

export const NavMenu = ({pathname}: {pathname: string}) => {
   const isActive = (path: any) => path === pathname

   return (
      <nav className={s.wrapper}>
         {NavLinks.map(link => {
            return (
               <a key={link.name} href={link.path} className={isActive(link.path) ? s.active : ''}>
                  {link.icon}
                  {link.name}
               </a>
            )
         })}
      </nav>
   )
}
