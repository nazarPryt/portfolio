import s from './Header.module.scss'
import Image from 'next/image'
import myProfileImg from '@/public/my-profile-img.png'
import {NavMenu} from '@/components/NavMenu'
import {SocialLinks} from '@/components/SocialLinks'
import {ThemeSwitcher} from '@/components/ThemeSwitcher'

export const Header = () => {
   return (
      <header className={s.Header}>
         <ThemeSwitcher />
         <div className={s.profileImg}>
            <Image src={myProfileImg} alt={'portfolio photo'} />
         </div>

         <h1>Nazar Prytuliak</h1>

         <SocialLinks />

         <NavMenu />
      </header>
   )
}
