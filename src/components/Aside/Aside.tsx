'use client'
import s from './Aside.module.scss'
import Image from 'next/image'
import myProfileImg from '@/public/bg/my-profile-img.jpg'
import {SocialLinks} from './SocialLinks'
import {NavMenu} from './NavMenu'
import {ThemeSwitcher} from './ThemeSwitcher'
import {LocaleSwitcher} from '@/components/Aside/LocaleSwitcher'

type Props = {
   closeSideBar?: () => void
}

export const Aside = ({closeSideBar}: Props) => {
   return (
      <aside className={s.wrapper}>
         <div className={s.profileImg}>
            <Image src={myProfileImg} alt={'portfolio photo'} />
         </div>
         <h1>Nazar Prytuliak</h1>
         <SocialLinks />
         <NavMenu closeSideBar={closeSideBar} />
         <ThemeSwitcher />
         <LocaleSwitcher />
      </aside>
   )
}
