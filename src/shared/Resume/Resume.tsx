import Link from 'next/link'
import {useTranslations} from 'next-intl'
import s from './Resume.module.scss'

export const Resume = () => {
   const t = useTranslations('section.Hero')
   return (
      <div className={s.wrapper}>
         <Link href={'/resume/CV_Frontend_Nazar_Prytuliak.pdf'} target={'_blank'}>
            {t('resume')}
         </Link>
      </div>
   )
}
