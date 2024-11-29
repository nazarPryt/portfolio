import s from './About.module.scss'
import {Section} from '@/shared/Section'
import Image from 'next/image'
import myPhoto from '@/public/bg/my-profile-img.jpg'
import {ChevronRight} from '@/icons/ChevronRight'
import {useTranslations} from 'next-intl'

export const About = () => {
   const t = useTranslations('section.About')
   return (
      <Section className={s.wrapper} id={'about'} p={t('p')} title={t('title')}>
         <div className={s.box}>
            <div>
               <Image src={myPhoto} alt={'my photo'} />
            </div>
            <div>
               <ul>
                  <li>
                     <ChevronRight />
                     <strong>English:</strong>upper-intermediate
                  </li>
                  <li>
                     <ChevronRight />
                     <strong>Italian:</strong>upper-intermediate
                  </li>
                  <li>
                     <ChevronRight />
                     <strong>Russian:</strong>Advance
                  </li>
                  <li>
                     <ChevronRight />
                     <strong>Ukrainian:</strong>Mother language
                  </li>
               </ul>

               <p>{t('details.p')}</p>
            </div>
         </div>
      </Section>
   )
}
