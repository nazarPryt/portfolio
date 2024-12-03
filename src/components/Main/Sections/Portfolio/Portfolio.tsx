import {Section} from '@/shared/Section'
import {useTranslations} from 'next-intl'
import {ShopV1, Instareplica, UiKit, InstaAdmin, QuizCards} from './Projects'
import s from './Portfolio.module.scss'

export const Portfolio = () => {
   const t = useTranslations('section.Projects')

   return (
      <Section id={'portfolio'} title={t('title')} p={t('p')}>
         <ul className={s.wrapper}>
            <Instareplica />
            <InstaAdmin />
            <UiKit />
            <ShopV1 />
            <QuizCards />
         </ul>
      </Section>
   )
}
