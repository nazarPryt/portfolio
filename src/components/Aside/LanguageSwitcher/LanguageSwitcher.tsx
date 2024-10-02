'use client'
import s from './LanguageSwitcher.module.scss'
import {Link, usePathname} from '@/i18n/routing'

export const LanguageSwitcher = () => {
   const pathname = usePathname()

   return (
      <div className={s.wrapper}>
         <Link href={pathname} locale='en'>
            🏴󠁧󠁢󠁥󠁮󠁧󠁿 English
         </Link>
         <Link href={pathname} locale='de'>
            🇫🇷 Français
         </Link>
      </div>
   )
}
