import s from './Main.module.scss'
import {Hero} from './Sections/Hero'
import {About} from './Sections/About'
import {Portfolio} from './Sections/Portfolio'
import {useTranslations} from 'next-intl'
import {Link} from '@/i18n/routing'

export const Main = () => {
   const t = useTranslations('HomePage')
   return (
      <main className={s.wrapper}>
         <h1>{t('title')}</h1>
         <Link href='/about'>{t('about')}</Link>
         <Hero />
         <About />
         <Portfolio />
      </main>
   )
}
