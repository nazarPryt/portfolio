import s from './NavMenu.module.scss'
import {HouseIcon} from '@/icons/HouseIcon'
import {PersonIcon} from '@/icons/PersonIcon'
import {TextIcon} from '@/icons/TextIcon'
import {ImagesIcon} from '@/icons/ImagesIcon'
import {HddStackIcon} from '@/icons/HddStackIcon'
import {EnvelopIcon} from '@/icons/EnvelopIcon'

export const NavMenu = () => {
   return (
      <nav className={s.NavMenu}>
         <a href='#hero'>
            <HouseIcon />
            Home
         </a>

         <a href='#about'>
            <PersonIcon /> About
         </a>

         <a href='#resume' className={s.active}>
            <TextIcon /> Resume
         </a>

         <a href='#portfolio'>
            <ImagesIcon /> Portfolio
         </a>

         <a href='#services'>
            <HddStackIcon /> Services
         </a>

         <a href='#contact'>
            <EnvelopIcon /> Contact
         </a>
      </nav>
   )
}
