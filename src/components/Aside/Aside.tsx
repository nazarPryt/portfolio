import Image from 'next/image'
import myProfileImg from '@/public/bg/my-profile-img.webp'
import {SocialLinks} from './SocialLinks'
import {NavMenu} from './NavMenu'
import {ThemeSwitcher} from './ThemeSwitcher'
import {LocaleSwitcher} from '@/components/Aside/LocaleSwitcher'
import s from './Aside.module.scss'
import {useTranslations} from 'next-intl'

type Props = {
   closeSideBar?: () => void
}

export const Aside = ({closeSideBar}: Props) => {
   const t = useTranslations('section.Hero')
   return (
      <aside className={s.wrapper}>
         <div className={s.profileImg}>
            <Image src={myProfileImg} alt={'portfolio photo'} />
         </div>
         <h1>{t('name')}</h1>
         <SocialLinks />
         <NavMenu closeSideBar={closeSideBar} />
         <ThemeSwitcher />
         <LocaleSwitcher />
      </aside>
   )
}
