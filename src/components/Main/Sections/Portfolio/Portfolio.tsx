import s from './Portfolio.module.scss'
import {Section} from '@/shared/Section'
import {Instareplica} from '@/components/Main/Sections/Portfolio/Projects/Instareplica'
import {InstaAdmin} from '@/components/Main/Sections/Portfolio/Projects/InstaAdmin'
import {QuizCards} from '@/components/Main/Sections/Portfolio/Projects/QuizCards'
import {UiKit} from '@/components/Main/Sections/Portfolio/Projects/UiKit'
import {useTranslations} from 'next-intl'

export const Portfolio = () => {
   const t = useTranslations('section.Projects')

   return (
      <Section id={'portfolio'} title={t('title')} p={t('p')}>
         <ul className={s.wrapper}>
            <Instareplica />
            <InstaAdmin />
            <UiKit />
            <QuizCards />
         </ul>
      </Section>
   )
}
