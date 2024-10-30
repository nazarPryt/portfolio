import s from './Hero.module.scss'
import Image from 'next/image'
import heroBg from '@/public/bg/hero-bg.jpg'
import {Resume} from '@/shared/Resume'
import {useTranslations} from 'next-intl'

export const Hero = () => {
   const t = useTranslations('section.Hero')

   return (
      <section className={s.wrapper}>
         <Image src={heroBg} alt={'heroBg'} priority={false} placeholder={'blur'} />
         <div>
            <h1>{t('name')}</h1>
            <p>{t('profession')}</p>
            <Resume />
         </div>
      </section>
   )
}
