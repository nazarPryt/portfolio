import s from './Aside.module.scss'
import Image from 'next/image'
import myProfileImg from '../../../public/bg/my-profile-img.jpg'
import {SocialLinks} from './SocialLinks'
import {NavMenu} from './NavMenu'
import {ThemeSwitcher} from './ThemeSwitcher'
import {LanguageSwitcher} from '@/components/Aside/LanguageSwitcher'
import LocaleSwitcher from '@/components/Aside/LocaleSwitcher'

export const Aside = () => {
   return (
      <aside className={s.wrapper}>
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
