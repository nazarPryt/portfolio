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
               <h2>Frontend Web Developer</h2>
               <p>
                  With a strong foundation in HTML, CSS, and JavaScript and experience in frameworks like Next.js, I’m
                  dedicated to building dynamic applications that meet modern standards. I’m always exploring the latest
                  tools and techniques to bring innovative ideas to life, ensuring that my projects are efficient,
                  scalable, and easy to use.
               </p>

               <ul>
                  <li>
                     <ChevronRight />
                     <strong>Birthday:</strong>15 September 1990
                  </li>
                  <li>
                     <ChevronRight />
                     <strong>Website:</strong>www.example.com
                  </li>
                  <li>
                     <ChevronRight />
                     <strong>Phone:</strong>+123 456 7890
                  </li>
                  <li>
                     <ChevronRight />
                     <strong>Degree:</strong>Master
                  </li>
                  <li>
                     <ChevronRight />
                     <strong>Email:</strong>email@example.com
                  </li>
                  <li>
                     <ChevronRight />
                     <strong>City:</strong>Caserta, Italy
                  </li>
               </ul>

               <p>{t('details.p')}</p>
            </div>
         </div>
      </Section>
   )
}
