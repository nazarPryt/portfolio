import {Resume} from '@/shared/Resume'
import {useTranslations} from 'next-intl'
import s from './Hero.module.scss'

export const Hero = () => {
   const t = useTranslations('section.Hero')

   return (
      <section className={s.wrapper}>
         <div>
            <h1>{t('name')}</h1>
            <p>{t('profession')}</p>
            {/*<Resume />*/}
         </div>
      </section>
   )
}
