import s from './Header.module.scss'
import Image from 'next/image'
import myProfileImg from '@/public/bg/my-profile-img.jpg'
import {SocialLinks} from './SocialLinks'
import {NavMenu} from './NavMenu'
import {ThemeSwitcher} from './ThemeSwitcher'

export const Header = () => {
   return (
      <header className={s.Header}>
         <div className={s.profileImg}>
            <Image src={myProfileImg} alt={'portfolio photo'} />
         </div>

         <h1>Nazar Prytuliak</h1>

         <SocialLinks />

         <NavMenu />
         <ThemeSwitcher />
      </header>
   )
}
