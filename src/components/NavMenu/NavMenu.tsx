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
         <ul>
            <li>
               <a href='#hero' className='active'>
                  <HouseIcon />
                  Home
               </a>
            </li>
            <li>
               <a href='#about'>
                  <PersonIcon /> About
               </a>
            </li>
            <li>
               <a href='#resume'>
                  <TextIcon /> Resume
               </a>
            </li>
            <li>
               <a href='#portfolio'>
                  <ImagesIcon /> Portfolio
               </a>
            </li>
            <li>
               <a href='#services'>
                  <HddStackIcon /> Services
               </a>
            </li>
            <li>
               <a href='#contact'>
                  <EnvelopIcon /> Contact
               </a>
            </li>
         </ul>
      </nav>
   )
}
