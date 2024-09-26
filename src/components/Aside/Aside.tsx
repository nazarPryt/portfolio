'use client'
import s from './Aside.module.scss'
import Image from 'next/image'
import myProfileImg from '../../../public/bg/my-profile-img.jpg'
import {SocialLinks} from './SocialLinks'
import {NavMenu} from './NavMenu'
import {ThemeSwitcher} from './ThemeSwitcher'
import {Link, usePathname} from '@/i18n/routing'

export const Aside = () => {
   const pathname = usePathname()

   return (
      <aside className={s.wrapper}>
         <div className={s.profileImg}>
            <Image src={myProfileImg} alt={'portfolio photo'} />
         </div>

         <h1>Nazar Prytuliak</h1>

         <SocialLinks />

         <NavMenu pathname={pathname} />
         <ThemeSwitcher />
         <div>
            <Link href={pathname} locale='en'>
               🏴󠁧󠁢󠁥󠁮󠁧󠁿 English
            </Link>
            <Link href={pathname} locale='de'>
               🇫🇷 Français
            </Link>
         </div>
      </aside>
   )
}
