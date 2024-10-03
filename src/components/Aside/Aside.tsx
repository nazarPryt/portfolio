'use client'
import s from './Aside.module.scss'
import Image from 'next/image'
import myProfileImg from '../../../public/bg/my-profile-img.jpg'
import {SocialLinks} from './SocialLinks'
import {NavMenu} from './NavMenu'
import {ThemeSwitcher} from './ThemeSwitcher'
import {LanguageSwitcher} from '@/components/Aside/LanguageSwitcher'
import LocaleSwitcher from '@/components/Aside/LocaleSwitcher'
import {BurgerClosed} from '@/icons/BurgerClosed'
import {CloseIcon} from '@/icons/CloseIcon'
import {useState} from 'react'

export const Aside = () => {
   const [isOpen, setIsOpen] = useState(false)

   const handleToggle = () => {
      setIsOpen(!isOpen)
   }

   return (
      <aside className={`${s.wrapper} ${isOpen ? s.show : ''}`}>
         <button onClick={handleToggle} className={s.burger}>
            {isOpen ? <CloseIcon /> : <BurgerClosed />}
         </button>
         <div className={s.profileImg}>
            <Image src={myProfileImg} alt={'portfolio photo'} />
         </div>
         <h1>Nazar Prytuliak</h1>
         <SocialLinks />
         <NavMenu />
         <ThemeSwitcher />
         <LanguageSwitcher />
         <LocaleSwitcher />
      </aside>
   )
}
